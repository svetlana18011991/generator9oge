const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname,'..');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const context = vm.createContext({window:{database:{}}});
vm.runInContext(fs.readFileSync(path.join(root,'task10.js'),'utf8'),context);
const prototypes = context.window.database.task10.prototypes;
const selected = [6,11,13,14,24,34,44,53];
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://task10.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); }
catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* Data checks do not require browser dependencies. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('task 10 PDF corrections reach selectors, diagrams, theory and HTML export', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
},async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const page = await browser.newPage({viewport:{width:1440,height:1000}});
        const errors = [], dialogs = [];
        page.on('pageerror',error => errors.push(error.message));
        page.on('dialog',async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
        await page.route('**/*',async route => {
            const url = new URL(route.request().url());
            if (url.origin === origin) {
                const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
                const filename = path.resolve(root,'.'+name);
                if (filename.startsWith(root+path.sep) && fs.existsSync(filename)) {
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
            }
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        assert.deepEqual(errors,[],'Page startup must not throw');
        const tid = await page.evaluate(() => getUniqueTaskIds().find(id => String(id).replace(/\D/g,'') === '10'));
        assert.ok(tid);
        await page.waitForSelector(`#proto-${tid}-0`,{state:'attached'});
        await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
        const row = page.locator('.task-row').filter({has:page.locator(`#count-${tid}`)});
        await row.locator('.row-header .btn-settings').first().click();

        await t.test('all 54 main prototypes retain PDF order and five questions; extras stay separate',async () => {
            const labels = await page.locator(`#protos-${tid} .proto-label-text`).allTextContents();
            assert.equal(labels.length,54);
            labels.forEach((label,index) => {
                assert.ok(label.startsWith(`${index+1}. `));
                assert.ok(label.replace(/\s+/g,' ').includes(prototypes[index].desc.replace(/\s+/g,' ')));
            });
            assert.equal(await page.locator(`#protos-extra-${tid} .proto-label-text`).count(),8);
            const counts = await page.evaluate(() => ({
                main:window.database.task10.prototypes.map(proto => proto.tasks.length),
                extra:getExtraTaskData('task10').prototypes.map(proto => proto.tasks.length)
            }));
            assert.deepEqual(counts.main,Array(54).fill(5));
            assert.deepEqual(counts.extra,Array(8).fill(5));
            assert.match(labels[11],/Статистическое определение вероятности/);
        });

        await t.test('hover previews retain complete wording, event expressions and theory diagrams',async () => {
            for (const index of selected) {
                await page.locator(`#proto-${tid}-${index}`).locator('..').hover();
                await page.locator('#proto-tooltip').waitFor({state:'visible'});
                const preview = await page.evaluate(index => {
                    const proto = window.database.task10.prototypes[index];
                    const source = document.createElement('div');
                    source.innerHTML = proto.tasks[0].tooltipText ?? proto.tasks[0].theoryText ?? proto.tasks[0].text;
                    const diagram = document.createElement('div');
                    diagram.innerHTML = proto.svg_code || '';
                    const tooltip = document.getElementById('proto-tooltip');
                    return {
                        text:tooltip.textContent.replace(/\s+/g,' '),
                        expected:source.textContent.replace(/\s+/g,' '),
                        labels:[...tooltip.querySelectorAll('svg text')].map(node => node.textContent),
                        expectedLabels:[...diagram.querySelectorAll('svg text')].map(node => node.textContent)
                    };
                },index);
                assert.ok(preview.text.includes(preview.expected));
                assert.deepEqual(preview.labels,preview.expectedLabels);
                if (index === 6) assert.match(preview.text,/Из коробки берут случайный маркер/);
                if (index === 53) assert.ok(preview.text.includes('$\\overline{A\\cup B}$'));
            }
        });

        let generated;
        await t.test('explicit selection uses each corrected question and its own SVG',async () => {
            await page.locator(`#proto-all-${tid}`).uncheck();
            for (const index of selected) await page.locator(`#proto-${tid}-${index}`).check();
            await page.locator(`#count-${tid}`).fill(String(selected.length));
            await page.locator('#toggle-ordered-tasks').check();
            // Deterministically select the first worksheet question from each
            // chosen prototype, including the corrected six tree-edge values.
            await page.evaluate(() => {window.__task10Random=Math.random;Math.random=()=>0;});
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
            await page.evaluate(() => {Math.random=window.__task10Random;delete window.__task10Random;});
            generated = await page.evaluate(() => {
                const tasks = window.ogeVariantSnapshot.find(block => String(block.tid).replace(/\D/g,'') === '10').tasks;
                const blocks = [...document.querySelectorAll('#output-section .generated-task-block')];
                return tasks.map((task,index) => {
                    const expected = document.createElement('div');
                    expected.innerHTML = task.text;
                    const diagram = document.createElement('div');
                    diagram.innerHTML = task.svg_code || '';
                    const block = blocks[index];
                    const svg = block.querySelector('svg');
                    return {
                        prototype:task.__ogeSelectedPrototypeIndex,
                        text:task.text,
                        expectedText:expected.textContent.replace(/\s+/g,' '),
                        activeText:block.textContent.replace(/\s+/g,' '),
                        svg:svg ? svg.outerHTML : '',
                        labels:svg ? [...svg.querySelectorAll('text')].map(node => node.textContent) : [],
                        expectedLabels:[...diagram.querySelectorAll('text')].map(node => node.textContent)
                    };
                });
            });
            assert.deepEqual(generated.map(task => task.prototype),selected);
            generated.forEach(task => {
                assert.equal(task.text,prototypes[task.prototype].tasks[0].text);
                assert.ok(task.activeText.includes(task.expectedText));
                assert.deepEqual(task.labels,task.expectedLabels);
                if (task.expectedLabels.length) assert.ok(task.svg);
            });
            assert.deepEqual(generated.find(task => task.prototype === 13).labels.slice(-6),['0,5','0,5','0,6','0,4','0,2','0,8']);
        });

        await t.test('statistical theory uses relative frequency',async () => {
            const counter = selected.indexOf(11)+1;
            await page.locator(`#btn-help-${counter}`).click();
            const text = (await page.locator('#modal-content-box').textContent()).replace(/\s+/g,' ');
            assert.match(text,/Относительная частота исправных/);
            assert.match(text,/50.*5.*45/);
            await page.locator('#modal-overlay .close-btn').first().click();
        });

        await t.test('the actual downloaded HTML preserves full statements, mathematical events and SVG',async () => {
            const pending = page.waitForEvent('download');
            await page.evaluate(() => downloadStudentHTML());
            const download = await pending;
            const directory = fs.mkdtempSync(path.join(require('node:os').tmpdir(),'oge-task10-export-'));
            try {
                const filename = path.join(directory,'interactive.html');
                await download.saveAs(filename);
                const saved = fs.readFileSync(filename,'utf8');
                assert.equal((saved.match(/<div\b[^>]*class="generated-task-block\b/g) || []).length,selected.length);
                generated.forEach(task => {
                    assert.ok(saved.includes(task.text));
                    if (task.svg) assert.ok(saved.includes(task.svg));
                });
                assert.ok(saved.includes('$\\overline{A\\cup B}$'));
                assert.ok(saved.includes('Из коробки берут случайный маркер'));
                assert.ok(saved.includes(encodeURIComponent('Относительная частота исправных')));
            } finally { fs.rmSync(directory,{recursive:true,force:true}); }
        });
        assert.deepEqual(errors,[]);
        assert.deepEqual(dialogs,[]);
    } finally { await browser.close(); }
});
