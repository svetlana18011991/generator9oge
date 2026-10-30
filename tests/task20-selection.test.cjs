const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const bankContext = vm.createContext({window:{database:{}}});
vm.runInContext(fs.readFileSync(path.join(root, 'task20.js'), 'utf8'), bankContext);
const prototypes = bankContext.window.database.task20.prototypes;
const codes = Array.from(prototypes, proto => proto.code);
const topics = ['Уравнения','Системы уравнений','Неравенства','Выражения'];
const groupCounts = [10,4,10,1];
const origin = 'http://task20.test';
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); }
catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* Content checks can still run without browser dependencies. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('task 20 groups preserve selection and ordered variant/export behavior', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async t => {
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
        await page.waitForSelector('#proto-task20-0',{state:'attached'});

        async function generate() {
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
            return page.evaluate(() => ({
                codes:window.currentGeneratedTasks.map(task => task.prototypeCode),
                headings:[...document.querySelectorAll('#output-section .task20-topic-variant-header')].map(node => node.textContent),
                printHeadings:[...(window.ogePrintableGroups['15-25'] || []).join('').matchAll(/class="task20-topic-variant-header"[^>]*>([^<]+)/g)].map(match => match[1]),
                answerHeadings:[...currentAnswersHTML.matchAll(/<h4>([^<]+)/g)].map(match => match[1])
            }));
        }

        await t.test('selector shows 25 sequential choices in four groups and keeps other selectors unchanged',async () => {
            const selector = await page.locator('#protos-task20').evaluate(panel => {
                const groups = [];
                for (const child of panel.children) {
                    if (child.classList.contains('proto-topic-header')) groups.push({topic:child.textContent,count:0});
                    else if (child.classList.contains('proto-item')) groups.at(-1).count++;
                }
                return {groups,labels:[...panel.querySelectorAll('.proto-label-text')].map(node => node.textContent)};
            });
            assert.equal(selector.labels.length,25);
            assert.deepEqual(selector.groups,topics.map((topic,index) => ({topic,count:groupCounts[index]})));
            selector.labels.forEach((label,index) => {
                assert.ok(label.startsWith(`${index+1}. `));
                assert.ok(label.replace(/\s+/g,' ').includes(prototypes[index].desc.replace(/\s+/g,' ')));
            });
            assert.equal(await page.locator('#protos-task6 .proto-topic-header').count(),0);
            assert.equal(await page.locator('#protos-task21 .proto-topic-header').count(),0);
            const extra = await page.evaluate(() => {
                const node = document.createElement('div');
                node.innerHTML = buildPrototypeListHTML('task6',{prototypes:[{topic:'A',desc:'one'},{topic:'B',desc:'two'}]},'extra');
                return [...node.querySelectorAll('.proto-topic-header')].map(el => el.textContent);
            });
            assert.deepEqual(extra,['A','B']);
            assert.equal(await page.locator('#toggle-ordered-tasks').isChecked(),false);
        });

        await t.test('ordered generation exhausts all 25 prototypes in selector order',async () => {
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            await page.locator('#count-task20').fill('25');
            await page.locator('#toggle-ordered-tasks').check();
            const output = await generate();
            assert.deepEqual(output.codes,codes);
            assert.deepEqual(output.headings,topics);
            assert.deepEqual(output.printHeadings,topics);
            assert.deepEqual(output.answerHeadings,topics);
        });

        await t.test('one choice from each group retains its identity and order in the downloaded document',async () => {
            const row = page.locator('.task-row').filter({has:page.locator('#count-task20')});
            await row.locator('.row-header .btn-settings').first().click();
            await page.locator('#proto-all-task20').uncheck();
            const selected = [0,10,14,24];
            for (const index of selected) await page.locator(`#proto-task20-${index}`).check();
            await page.locator('#count-task20').fill('4');
            const output = await generate();
            assert.deepEqual(output.codes,selected.map(index => codes[index]));
            assert.deepEqual(output.headings,topics);
            assert.deepEqual(output.printHeadings,topics);
            assert.deepEqual(output.answerHeadings,topics);
            const statements = await page.evaluate(() => window.ogeVariantSnapshot.find(block => block.tid === 'task20').tasks.map(task => task.text));
            const pending = page.waitForEvent('download');
            await page.evaluate(() => downloadStudentHTML());
            const download = await pending;
            const directory = fs.mkdtempSync(path.join(require('node:os').tmpdir(),'oge-task20-export-'));
            try {
                const filename = path.join(directory,'interactive.html');
                await download.saveAs(filename);
                const saved = fs.readFileSync(filename,'utf8');
                const exportedTopics = [...saved.matchAll(/class="task20-topic-variant-header"[^>]*>([^<]+)/g)].map(match => match[1]);
                assert.deepEqual(exportedTopics,topics);
                const positions = statements.map(statement => saved.indexOf(statement));
                assert.ok(positions.every(position => position >= 0));
                assert.deepEqual(positions,positions.slice().sort((a,b) => a-b));
                assert.equal((saved.match(/<div\b[^>]*class="generated-task-block\b/g) || []).length,4);
            } finally { fs.rmSync(directory,{recursive:true,force:true}); }
        });

        await t.test('disabling ordered mode keeps random selection available without grouped headings',async () => {
            await page.locator('#toggle-ordered-tasks').uncheck();
            const output = await generate();
            assert.deepEqual(output.codes.slice().sort(),[0,10,14,24].map(index => codes[index]).sort());
            assert.deepEqual(output.headings,[]);
            assert.deepEqual(output.printHeadings,[]);
            assert.deepEqual(output.answerHeadings,[]);
            assert.equal(await page.locator('#toggle-ordered-tasks').isChecked(),false);
        });
        assert.deepEqual(errors,[]);
        assert.deepEqual(dialogs,[]);
    } finally { await browser.close(); }
});
