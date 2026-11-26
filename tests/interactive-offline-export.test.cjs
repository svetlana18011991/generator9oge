const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');
const {pathToFileURL} = require('node:url');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'vendor/mathjax/manifest.json'), 'utf8'));
const origin = 'http://interactive-export.test';
const mime = {'.html':'text/html; charset=utf-8', '.js':'application/javascript',
    '.woff':'font/woff', '.svg':'image/svg+xml', '.png':'image/png',
    '.jpg':'image/jpeg', '.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

// Use realistic hidden, encoded solutions: they are inserted only after the
// recipient opens a breakdown, so startup typesetting cannot process them.
const image = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'task7_proto1.png')).toString('base64');
const firstTheory = String.raw`<section data-test-theory="first">
    <p>Решение системы: \(\begin{cases}x+y=3\\x-y=1\end{cases}\).</p>
    <p>Корень и дробь: \(\frac{1+\sqrt{5}}{2}\).</p>
    <img src="${image}" alt="Чертёж в скрытом разборе">
</section>`;
const secondTheory = String.raw`<section data-test-theory="second">
    <p>Другой разбор: $\frac{\sqrt{9}}{3}$.</p>
    <p>Дробь в MathML: <math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.</p>
    <img src="${image}" alt="Чертёж во втором разборе">
</section>`;
const fixture = String.raw`<section id="test-main-task">
    <p>Условие: \(\frac{3}{\sqrt{9}}\).</p>
    <div id="test-display-math">\[\dfrac{18\sqrt{3}}{2}\]</div>
    <div id="test-font-rich">$\mathbb{R}\quad\mathcal{ABC}\quad\mathbf{x}\quad\mathfrak{ABC}\quad\mathsf{xyz}\quad\mathtt{123}\quad\sum_{k=1}^{n}k\quad\int_0^1x\,dx$</div>
    <button id="test-open-first" onclick="openTheoryModalLocal('theory-data-1')">Разбор 1</button>
    <button id="test-open-second" onclick="openTheoryModalLocal('theory-data-2')">Разбор 2</button>
    <div id="theory-data-1" hidden>${encodeURIComponent(firstTheory)}</div>
    <div id="theory-data-2" hidden>${encodeURIComponent(secondTheory)}</div>
    <button id="second-answer-btn-20" onclick="showSecondPartAnswer('20')">Показать ответ</button>
    <div id="second-answer-data-20" hidden>${encodeURIComponent(String.raw`\(\frac{5}{\sqrt{4}}\)`)}</div>
    <div id="second-final-answer-20" style="display:none"></div>
</section>
${[1, 2, 3].map(number => `<section class="generated-task-block" id="test-answer-task-${number}">
    <input type="text" class="ans-box" id="ans-interactive-${number}" data-task-num="${number}" data-ans="7">
    <button type="button" class="btn-instant" title="Проверить" onclick='checkSingle(this, ${number}, "7")'>✅</button>
    <span id="feedback-${number}" class="answer-feedback" style="display:none"></span>
</section>`).join('')}`;

async function assertPreviewControls(page) {
    assert.ok(await page.locator('#oge-preview-notice').isVisible());
    assert.equal(await page.locator('#btn-check').isVisible(), false);
    assert.equal(await page.locator('.btn-instant:visible').count(), 0);
}

test('downloaded interactive variants render hidden solutions, answers and fonts without network access', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:90000
}, async t => {
    const browser = await chromium.launch({executablePath:executable, headless:true, args:['--no-sandbox']});
    try {
        const editor = await browser.newContext({acceptDownloads:true});
        const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
        const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
        await editor.addInitScript(({key, hash}) => {
            try {sessionStorage.setItem(key, hash);} catch {}
        }, {key:sessionKey, hash:passwordHash});
        await editor.route('**/*', async route => {
            const url = new URL(route.request().url());
            if (url.origin !== origin) return route.abort();
            const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
            if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) return route.abort();
            return route.fulfill({path:filename, contentType:mime[path.extname(filename)] || 'application/octet-stream'});
        });
        const editorPage = await editor.newPage();
        await editorPage.goto(origin, {waitUntil:'load'});
        await editorPage.evaluate(() => MathJax.startup.promise);
        await editorPage.evaluate(({content, firstTheory, secondTheory}) => {
            currentInteractiveHTML = content
                .replace(encodeURIComponent(firstTheory), encodeURIComponent(ogeCompactEmbeddedImages(firstTheory)))
                .replace(encodeURIComponent(secondTheory), encodeURIComponent(ogeCompactEmbeddedImages(secondTheory)));
            document.getElementById('timer-input').value = '0';
            document.getElementById('toggle-signature').checked = false;
        }, {content:fixture, firstTheory, secondTheory});
        const downloadReady = editorPage.waitForEvent('download');
        await editorPage.evaluate(() => downloadStudentHTML());
        const download = await downloadReady;
        assert.equal(download.suggestedFilename(), 'Интерактивный_вариант.html');
        const html = await fs.promises.readFile(await download.path(), 'utf8');
        assert.match(html, /data-oge-offline-mathjax/);
        assert.match(html, /<script src="data:text\/javascript;base64,/);
        assert.doesNotMatch(html, /<script\b[^>]*src="https?:[^\"]*mathjax/i);

        const savedURL = origin + '/saved.html';
        await t.test('the downloaded file displays inline and block math without JavaScript', async t => {
            const folder = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'oge-student-export-'));
            const preview = await browser.newContext({javaScriptEnabled:false, viewport:{width:390, height:844}});
            try {
                const filename = path.join(folder, download.suggestedFilename());
                await download.saveAs(filename);
                await preview.route('**/*', route => route.request().url() === savedURL
                    ? route.fulfill({path:filename, contentType:'text/html; charset=utf-8'})
                    : route.abort());
                let page = await preview.newPage();
                try {
                    await page.goto(pathToFileURL(filename).href, {waitUntil:'load'});
                } catch (error) {
                    if (!error.message.includes('net::ERR_BLOCKED_BY_ADMINISTRATOR')) throw error;
                    t.diagnostic('Browser policy blocks file URLs. Previewing the same downloaded bytes via an intercepted route.');
                    await page.close();
                    page = await preview.newPage();
                    await page.goto(savedURL, {waitUntil:'load'});
                }

                const inline = page.locator('#test-main-task > p mjx-container[jax="SVG"] svg');
                const display = page.locator('#test-display-math mjx-container[jax="SVG"][display="true"] svg');
                for (const [kind, formula] of [['inline', inline], ['display', display]]) {
                    assert.equal(await formula.count(), 1, `${kind} formula is embedded as SVG`);
                    assert.ok(await formula.isVisible(), `${kind} formula is visible`);
                    assert.ok(await formula.locator('path').count() > 0, `${kind} glyphs have SVG paths`);
                    const dimensions = await formula.evaluate(svg => {
                        const viewBox = svg.viewBox.baseVal;
                        const bounds = svg.getBoundingClientRect();
                        return [viewBox.width, viewBox.height, bounds.width, bounds.height];
                    });
                    assert.ok(dimensions.every(size => Number.isFinite(size) && size > 0), `${kind} formula has valid dimensions`);
                }
                assert.doesNotMatch(await page.locator('#test-main-task').innerText(), /\\(?:d?frac|sqrt|\(|\[)/);
                await assertPreviewControls(page);
            } finally {
                await preview.close();
                await fs.promises.rm(folder, {recursive:true, force:true});
            }
        });

        await t.test('previews that strip script tags also show the notice and hide checking', async () => {
            const preview = await browser.newPage();
            try {
                await preview.route('**/*', route => route.abort());
                const staticHTML = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
                await preview.setContent(staticHTML, {waitUntil:'load'});
                await assertPreviewControls(preview);
                assert.ok(await preview.locator('#test-main-task > p mjx-container[jax="SVG"] svg').isVisible());
            } finally {
                await preview.close();
            }
        });

        // A separate context has no editor cache, filesystem assets or session.
        const recipient = await browser.newContext({viewport:{width:1365, height:1000}});
        const external = [], errors = [], consoleErrors = [];
        await recipient.route('**/*', async route => {
            const url = route.request().url();
            if (url === savedURL) return route.fulfill({contentType:'text/html; charset=utf-8', body:html});
            if (/^https?:/.test(url)) external.push(url);
            return route.abort();
        });
        const page = await recipient.newPage();
        page.setDefaultTimeout(5000);
        page.setDefaultNavigationTimeout(15000);
        page.on('pageerror', error => errors.push(error.message));
        page.on('console', message => {
            if (message.type() === 'error' && !/^Failed to load resource:/.test(message.text())) consoleErrors.push(message.text());
        });
        await page.goto(savedURL, {waitUntil:'load'});
        await page.evaluate(async () => {
            await MathJax.startup.promise;
            const typeset = MathJax.typesetPromise.bind(MathJax);
            MathJax.typesetPromise = (...args) => window.testLastTypeset = typeset(...args);
        });

        await t.test('initial formulas remain rendered as SVG after embedded MathJax starts', async () => {
            const state = await page.evaluate(() => ({
                version:MathJax.version,
                inlineMath:MathJax.config.tex.inlineMath,
                adaptiveCSS:MathJax.config.chtml.adaptiveCSS,
                formulas:document.querySelectorAll('#test-main-task > p mjx-container[jax="SVG"]').length,
                fractions:document.querySelectorAll('#test-main-task > p svg g[data-mml-node="mfrac"]').length,
                roots:document.querySelectorAll('#test-main-task > p svg g[data-mml-node="msqrt"]').length,
                renderedAgain:document.querySelectorAll('#test-main-task mjx-container[jax="CHTML"]').length,
                errors:[...document.querySelectorAll('mjx-merror')].map(el => el.textContent)
            }));
            assert.match(state.version, /^3\./);
            assert.deepEqual(state.inlineMath, [['$', '$'], ['\\(', '\\)']]);
            assert.equal(state.adaptiveCSS, false);
            assert.equal(state.formulas, 1);
            assert.equal(state.fractions, 1);
            assert.equal(state.roots, 1);
            assert.equal(state.renderedAgain, 0);
            assert.deepEqual(state.errors, []);
        });

        async function openTheory(button, name) {
            await page.locator(button).click();
            await page.waitForSelector(`#modal-content-box [data-test-theory="${name}"] mjx-container[jax="CHTML"]`);
            await page.evaluate(() => window.testLastTypeset);
            await page.waitForFunction(() => {
                const image = document.querySelector('#modal-content-box img');
                return image && image.complete && image.naturalWidth > 1;
            });
            return page.evaluate(() => ({
                formulas:document.querySelectorAll('#modal-content-box mjx-container').length,
                fractions:document.querySelectorAll('#modal-content-box mjx-mfrac').length,
                roots:document.querySelectorAll('#modal-content-box mjx-msqrt').length,
                systems:document.querySelectorAll('#modal-content-box mjx-mtable').length,
                errors:[...document.querySelectorAll('#modal-content-box mjx-merror')].map(el => el.textContent),
                image:document.querySelector('#modal-content-box img').getAttribute('src')
            }));
        }
        async function closeTheory() {
            await page.locator('#modal-overlay .close-btn').click();
        }

        await t.test('hidden systems, fractions, roots and packed images render when opened', async () => {
            const state = await openTheory('#test-open-first', 'first');
            assert.equal(state.formulas, 2);
            assert.equal(state.systems, 1);
            assert.equal(state.fractions, 1);
            assert.equal(state.roots, 1);
            assert.deepEqual(state.errors, []);
            assert.match(state.image, /^blob:/, 'The hidden diagram is reconstructed from the exported bytes');
            await closeTheory();
        });

        await t.test('replacing and reopening a breakdown typesets each new fragment', async () => {
            const second = await openTheory('#test-open-second', 'second');
            assert.equal(second.formulas, 2);
            assert.equal(second.fractions, 2);
            assert.equal(second.roots, 1);
            assert.equal(second.systems, 0);
            assert.deepEqual(second.errors, []);
            await closeTheory();
            const first = await openTheory('#test-open-first', 'first');
            assert.equal(first.formulas, 2);
            assert.equal(first.systems, 1);
            assert.deepEqual(first.errors, []);
            await closeTheory();
        });

        await t.test('the delayed second-part answer also renders offline', async () => {
            await page.locator('#second-answer-btn-20').click();
            await page.waitForSelector('#second-final-answer-20 mjx-container[jax="CHTML"]');
            await page.evaluate(() => window.testLastTypeset);
            assert.equal(await page.locator('#second-final-answer-20 mjx-mfrac').count(), 1);
            assert.equal(await page.locator('#second-final-answer-20 mjx-msqrt').count(), 1);
            assert.equal(await page.locator('#second-answer-btn-20').isVisible(), false);
        });

        await t.test('individual checking and the results button work offline when scripts run', async () => {
            assert.equal(await page.locator('#oge-preview-notice').isVisible(), false);
            await page.locator('#ans-interactive-1').fill('7');
            await page.locator('#test-answer-task-1').getByTitle('Проверить').click();
            assert.ok(await page.locator('#feedback-1.correct').isVisible());

            await page.locator('#ans-interactive-2').fill('8');
            await page.locator('#btn-check').click();
            const report = page.locator('#res-box');
            assert.ok(await report.isVisible());
            assert.deepEqual(await report.locator('tbody tr td:last-child').allTextContents(), [
                '✅ Верно', '❌ Неверно', '— Не решено'
            ]);
            assert.equal(await page.locator('#btn-check').isVisible(), false);
        });

        await t.test('all 22 embedded font assets decode and font-rich math needs no external requests', async () => {
            const state = await page.evaluate(async () => {
                const sheet = document.querySelector('style[data-oge-offline-mathjax]').sheet;
                const faces = [...sheet.cssRules].filter(rule => rule.type === CSSRule.FONT_FACE_RULE);
                // MathJax also declares unused fallback faces relative to its
                // data: script URL. Load the embedded assets themselves, rather
                // than artificially forcing those fallback declarations too.
                const loaded = await Promise.all(faces.map(async rule => {
                    const family = rule.style.getPropertyValue('font-family').replace(/"/g, '');
                    const src = rule.style.getPropertyValue('src');
                    const face = await new FontFace(family, src).load();
                    return {family, embedded:src.includes('data:font/woff;base64,'), status:face.status};
                }));
                await document.fonts.ready;
                const formula = document.querySelector('#test-font-rich mjx-container[jax="SVG"] svg');
                return {
                    loaded,
                    richFormula:formula && {width:formula.getBoundingClientRect().width, height:formula.getBoundingClientRect().height},
                    mathErrors:[...document.querySelectorAll('mjx-merror')].map(el => el.textContent)
                };
            });
            assert.equal(state.loaded.length, 22);
            assert.deepEqual(state.loaded.map(face => face.family).sort(), Object.values(manifest.fonts).map(font => font.family).sort());
            assert.ok(state.loaded.every(face => face.embedded && face.status === 'loaded'));
            assert.ok(state.richFormula && state.richFormula.width > 0 && state.richFormula.height > 0);
            assert.deepEqual(state.mathErrors, []);
            assert.deepEqual(external.filter(url => /mathjax|\.woff(?:2)?(?:$|\?)/i.test(url)), []);
            assert.deepEqual(errors, []);
            assert.deepEqual(consoleErrors, []);
        });
    } finally {
        await browser.close();
    }
});
