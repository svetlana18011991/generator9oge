const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const directory = path.join(root, 'vendor/mathjax');
const component = fs.readFileSync(path.join(directory, 'tex-mml-chtml.js'));
const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'manifest.json'), 'utf8'));
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const upstreamSHA256 = '300480069078b5892d2363a2b65e2dfbbf30fe5c80f83edbfecf4610fd093862';
const origin = 'http://local-mathjax.test';
const mime = {'.html':'text/html; charset=utf-8', '.js':'application/javascript',
    '.woff':'font/woff', '.svg':'image/svg+xml', '.png':'image/png',
    '.jpg':'image/jpeg', '.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('local MathJax is the unchanged upstream 3.2.2 component with original embedded fonts', () => {
    assert.equal(manifest.version, '3.2.2');
    assert.equal(sha256(component), upstreamSHA256);
    assert.equal(manifest.componentSHA256, upstreamSHA256);
    const filenames = [...new Set(component.toString().match(/MathJax_[\w-]+\.woff/g))].sort();
    assert.equal(filenames.length, 22);
    assert.deepEqual(Object.keys(manifest.fonts).sort(), filenames);
    const embedded = new Map([...source.matchAll(/@font-face\{font-family:"([^"]+)";src:url\("data:font\/woff;base64,([^"]+)"/g)]
        .map(match => [match[1], Buffer.from(match[2], 'base64')]));
    for (const [name, metadata] of Object.entries(manifest.fonts)) {
        const font = fs.readFileSync(path.join(directory, 'fonts/woff-v2', name));
        assert.equal(font.subarray(0, 4).toString(), 'wOFF', name);
        assert.equal(font.length, metadata.bytes, name);
        assert.equal(sha256(font), metadata.sha256, name);
        assert.deepEqual(font, embedded.get(metadata.family), name + ' retains the original embedded font bytes');
    }
    assert.match(fs.readFileSync(path.join(directory, 'LICENSE'), 'utf8'), /Apache License/);
    assert.match(fs.readFileSync(path.join(directory, 'FONT-LICENSE.txt'), 'utf8'), /SIL OPEN FONT LICENSE/);
});

test('real local MathJax renders formulas and a full 25-task variant with external requests blocked', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 90000
}, async t => {
    // Both documents use the actual application configuration and script tag.
    const mathConfig = source.match(/<script[^>]*>(window\.MathJax\s*=[\s\S]*?)<\/script>/)[1];
    const mathScript = source.match(/<script\b[^>]*src="[^"]*tex-mml-chtml\.js(?:\?[^"]*)?"[^>]*><\/script>/)[0];
    assert.match(mathScript, /src="(?:\.\/)?vendor\/mathjax\/tex-mml-chtml\.js(?:\?[^"]*)?"/);
    const formulas = String.raw`<main>
        <p>$\frac{1+\sqrt{x^2+1}}{2}$</p>
        <p>$\begin{pmatrix}1&2\\3&4\end{pmatrix}$</p>
        <p>$\mathbb{R}\quad\mathcal{ABC}\quad\mathbf{x}\quad\mathfrak{ABC}\quad\mathsf{xyz}\quad\mathtt{123}$</p>
        <p>$\sum_{k=1}^{n}k\quad\int_0^1x\,dx\quad\left(\frac{a}{b}\right)$</p>
    </main>`;
    const fixture = '<!doctype html><meta charset="utf-8"><script>' + mathConfig + '</script>' + mathScript + formulas;
    const browser = await chromium.launch({executablePath:executable, headless:true, args:['--no-sandbox']});
    try {
        const context = await browser.newContext({viewport:{width:1440, height:1000}});
        const errors = [], external = [], missing = [], requests = [];
        context.on('page', page => page.on('pageerror', error => errors.push(error.message)));
        await context.route('**/*', async route => {
            const url = new URL(route.request().url());
            requests.push(url.href);
            if (url.origin !== origin) {
                external.push(url.href);
                return route.abort();
            }
            if (url.pathname === '/formulas.html') return route.fulfill({contentType:'text/html; charset=utf-8', body:fixture});
            const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
            const filename = path.resolve(root, '.' + name);
            if (filename.startsWith(root + path.sep) && fs.existsSync(filename) && fs.statSync(filename).isFile()) {
                return route.fulfill({path:filename, contentType:mime[path.extname(filename)] || 'application/octet-stream'});
            }
            missing.push(url.href);
            return route.abort();
        });

        await t.test('fractions, roots, AMS, matrices and every local WOFF font load', async () => {
            const page = await context.newPage();
            await page.goto(origin + '/formulas.html', {waitUntil:'load'});
            await page.evaluate(() => MathJax.startup.promise);
            const state = await page.evaluate(async families => {
                await Promise.all(families.map(family => document.fonts.load('16px "' + family + '"')));
                await document.fonts.ready;
                return {
                    version:MathJax.version,
                    renderer:MathJax.startup.document.outputJax.name,
                    containers:document.querySelectorAll('mjx-container[jax="CHTML"]').length,
                    fractions:document.querySelectorAll('mjx-mfrac').length,
                    roots:document.querySelectorAll('mjx-msqrt').length,
                    matrices:document.querySelectorAll('mjx-mtable').length,
                    mathErrors:[...document.querySelectorAll('mjx-merror')].map(node => node.textContent),
                    badFonts:[...document.fonts].filter(font => font.status !== 'loaded').map(font => font.family),
                    sizes:[...document.querySelectorAll('mjx-container')].map(node => ({width:node.getBoundingClientRect().width, height:node.getBoundingClientRect().height}))
                };
            }, Object.values(manifest.fonts).map(font => font.family));
            assert.equal(state.version, '3.2.2');
            assert.equal(state.renderer, 'CHTML');
            assert.equal(state.containers, 4);
            assert.ok(state.fractions >= 2);
            assert.equal(state.roots, 1);
            assert.equal(state.matrices, 1);
            assert.deepEqual(state.mathErrors, []);
            assert.deepEqual(state.badFonts, []);
            assert.ok(state.sizes.every(size => size.width > 0 && size.height > 0));
            assert.deepEqual(external, [], 'Standard formulas need no CDN resources');
            assert.deepEqual(missing, []);
            await page.close();
        });

        await t.test('the application opens and generates all task numbers with CDN access unavailable', async () => {
            const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
            const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
            await context.addInitScript(({key, hash}) => {
                try { sessionStorage.setItem(key, hash); } catch {}
            }, {key:sessionKey, hash:passwordHash});
            const page = await context.newPage();
            await page.goto(origin, {waitUntil:'load'});
            await page.waitForSelector('#dynamic-tasks .task-row', {state:'attached'});
            await page.evaluate(() => MathJax.startup.promise);
            await page.evaluate(() => {
                let seed = 26;
                Math.random = () => {seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296;};
                document.getElementById('oge-variant-count').value = '1';
                safeGenerateVariant(null, 'full');
            });
            await page.waitForFunction(() => !document.querySelector('.oge-fast-btn').disabled);
            await page.waitForSelector('#output-section mjx-container[jax="CHTML"]', {state:'attached'});
            await page.evaluate(() => document.fonts.ready);
            const state = await page.evaluate(() => ({
                numbers:ogeKeyTaskEntries(window.ogeVariantSnapshot).map(task => task.num).sort((a, b) => a - b),
                cards:document.querySelectorAll('#output-section .generated-task-block').length,
                formulas:document.querySelectorAll('#output-section mjx-container[jax="CHTML"]').length,
                mathErrors:[...document.querySelectorAll('#output-section mjx-merror')].map(node => node.textContent),
                badFonts:[...document.fonts].filter(font => font.status === 'error').map(font => font.family)
            }));
            assert.deepEqual(state.numbers, Array.from({length:25}, (_, index) => index + 1));
            assert.equal(state.cards, 25);
            assert.ok(state.formulas >= 20, 'The generated task text contains real rendered formulas');
            assert.deepEqual(state.mathErrors, []);
            assert.deepEqual(state.badFonts, []);
            assert.deepEqual(external.filter(url => /mathjax|\.woff(?:$|\?)/i.test(url)), [], 'No formula request depends on a CDN');
            assert.deepEqual(missing.filter(url => /\/vendor\/mathjax\//.test(url)), []);
            assert.ok(requests.some(url => new URL(url).pathname === '/vendor/mathjax/tex-mml-chtml.js'));
            assert.deepEqual(errors, []);
        });
    } finally {await browser.close();}
});
