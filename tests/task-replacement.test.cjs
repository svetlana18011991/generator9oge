const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const origin = 'http://task-replacement.test';
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); }
catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* The browser dependency is optional outside the managed environment. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('selective preview replacements immediately update the variant and every export source', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async () => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const page = await browser.newPage({viewport:{width:1440,height:1000}});
        const errors = [], dialogs = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
        await page.route('**/*', async route => {
            const url = new URL(route.request().url());
            if (url.origin === origin) {
                const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
                const filename = path.resolve(root, '.' + name);
                if (filename.startsWith(root + path.sep) && fs.existsSync(filename)) {
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
            }
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            }
            return route.abort();
        });
        await page.goto(origin, {waitUntil:'load'});
        await page.waitForSelector('#proto-6-0', {state:'attached'});
        await page.evaluate(() => {
            window.replacementTestTypeset = window.MathJax.typesetPromise.bind(window.MathJax);
            window.MathJax.typesetPromise = () => Promise.resolve();
        });
        // Keep two selected types so replacing a type has one unambiguous destination.
        await page.evaluate(() => {
            document.querySelectorAll('#protos-6 input[type="checkbox"]').forEach(input => {
                input.checked = ['proto-6-0','proto-6-1'].includes(input.id);
            });
        });
        await page.locator('#count-6').fill('2');
        await page.locator('#count-9').fill('1');
        await page.locator('#toggle-ordered-tasks').check();

        async function generate() {
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled && window.ogeVariantBatch.length === 1);
        }
        async function state() {
            return page.evaluate(() => {
                const signature = task => ({text:task.text,answer:String(task.answer),type:task.theory?.code || task.theory?.desc});
                const block = window.ogeVariantSnapshot.find(block => String(block.tid) === '6');
                const item = block.tasks[0];
                const target = document.querySelector('#output-section [data-oge-block-index="0"][data-oge-item-index="0"]');
                const printDocument = document.createElement('div');
                printDocument.innerHTML = currentPrintHTML;
                const answersDocument = document.createElement('div');
                answersDocument.innerHTML = currentAnswersHTML;
                const batch = window.ogeVariantBatch[0];
                return {
                    tasks:window.ogeVariantSnapshot.flatMap(block => block.tasks.map(signature)),
                    games:window.currentGeneratedTasks.map(task => ({text:task.text,answer:task.answer})),
                    expectedGameText:window.ogeKeepMathHTML(item.text),
                    previewText:target.textContent,
                    printText:printDocument.querySelector('.task-print-text').textContent,
                    answersText:answersDocument.querySelector('strong').textContent,
                    batchTask:signature(batch.snapshot.find(block => String(block.tid) === '6').tasks[0]),
                    batchPrintMatches:batch.printHTML === currentPrintHTML,
                    batchAnswersMatch:batch.answersHTML === currentAnswersHTML
                };
            });
        }
        const target = () => page.locator('#output-section [data-oge-block-index="0"][data-oge-item-index="0"]');
        const inside = () => target().getByRole('button', {name:'🔄 Заменить внутри типа',exact:true});
        const changeType = () => target().getByRole('button', {name:'↔ Заменить тип',exact:true});
        function assertCurrentOutputs(value) {
            assert.deepEqual(value.games[0], {text:value.expectedGameText,answer:value.tasks[0].answer});
            assert.ok(value.previewText.includes(value.tasks[0].text));
            assert.ok(value.printText.includes(value.tasks[0].text));
            assert.equal(value.answersText, value.tasks[0].answer);
            assert.deepEqual(value.batchTask, value.tasks[0]);
            assert.equal(value.batchPrintMatches, true);
            assert.equal(value.batchAnswersMatch, true);
        }

        await generate();
        assert.equal(await inside().count(), 1, 'same-type replacement is visible on the first generation');
        assert.equal(await changeType().count(), 1, 'type replacement is visible on the first generation');
        const initial = await state();
        assertCurrentOutputs(initial);

        await inside().click();
        const withinType = await state();
        assert.equal(withinType.tasks[0].type, initial.tasks[0].type);
        assert.notEqual(withinType.tasks[0].text, initial.tasks[0].text);
        assert.deepEqual(withinType.tasks.slice(1), initial.tasks.slice(1), 'other tasks remain unchanged');
        assertCurrentOutputs(withinType);

        await changeType().click();
        const changedType = await state();
        assert.notEqual(changedType.tasks[0].type, withinType.tasks[0].type);
        assert.deepEqual(changedType.tasks.slice(1), withinType.tasks.slice(1), 'changing type only affects the chosen task');
        const allowedTypes = await page.evaluate(() => window.database[6].prototypes.slice(0,2).map(proto => proto.desc));
        assert.ok(allowedTypes.includes(changedType.tasks[0].type), 'the new type respects the selection');
        assertCurrentOutputs(changedType);
        if (process.env.OGE_REPLACEMENT_SCREENSHOT) {
            await page.evaluate(() => window.replacementTestTypeset([document.getElementById('output-section')]));
            await target().screenshot({path:process.env.OGE_REPLACEMENT_SCREENSHOT});
        }

        const pending = page.waitForEvent('download');
        await page.evaluate(() => downloadStudentHTML());
        const download = await pending;
        const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'oge-replacement-export-'));
        try {
            const filename = path.join(directory, 'interactive.html');
            await download.saveAs(filename);
            const exported = fs.readFileSync(filename, 'utf8');
            const exportedPage = await browser.newPage({javaScriptEnabled:false});
            await exportedPage.route('**/*', route => route.abort());
            await exportedPage.setContent(exported, {waitUntil:'domcontentloaded'});
            assert.ok((await exportedPage.locator('.generated-task-block').first().textContent()).includes(changedType.tasks[0].text));
            assert.equal(await exportedPage.locator('.generated-task-block').count(), 3);
            await exportedPage.close();
        } finally { fs.rmSync(directory, {recursive:true,force:true}); }

        // A later generation must derive its controls from its own selection and blocks.
        await page.evaluate(() => {
            document.querySelectorAll('#protos-6 input[type="checkbox"]').forEach(input => {
                input.checked = input.id === 'proto-6-0';
            });
        });
        await generate();
        assert.equal(await inside().count(), 1);
        assert.equal(await changeType().count(), 0, 'a single selected prototype has no type replacement');
        await inside().click();
        assert.equal(await changeType().count(), 0);
        assertCurrentOutputs(await state());

        // Main task 19 uses a statement factory rather than the placeholder tasks
        // on its topic prototypes. Both replacement modes must keep real statements.
        await page.locator('#count-6').fill('0');
        await page.locator('#count-task19').fill('1');
        await page.evaluate(() => {
            document.querySelectorAll('#protos-task19 input[type="checkbox"]').forEach(input => {
                input.checked = ['proto-task19-0','proto-task19-1'].includes(input.id);
            });
        });
        await generate();
        const statementTarget = page.locator('#output-section [data-oge-block-index="1"][data-oge-item-index="0"]');
        async function statementState() {
            return page.evaluate(() => {
                const item = window.ogeVariantSnapshot.find(block => block.tid === 'task19').tasks[0];
                const bank = window.task19StatementBank.find(statement => statement.id === item.statementId);
                const holder = document.createElement('div');
                holder.innerHTML = item.text;
                return {
                    id:item.statementId, index:item.__ogeSelectedPrototypeIndex, text:item.text,
                    textContent:holder.textContent,answer:item.answer,solution:item.theory.theory_sol,
                    single:item.task19Single,bank,
                    game:window.currentGeneratedTasks[1],
                    otherTask:window.ogeVariantSnapshot[0].tasks[0].text,
                    expectedGameText:window.ogeKeepMathHTML(item.text),
                    batchId:window.ogeVariantBatch[0].snapshot.find(block => block.tid === 'task19').tasks[0].statementId
                };
            });
        }
        function assertStatement(value) {
            assert.ok(value.bank, 'replacement comes from the statement bank');
            assert.ok(value.textContent.includes(value.bank.text));
            assert.equal(value.answer, value.bank.true ? '1' : '0');
            assert.ok(value.solution.includes(value.bank.explanation));
            assert.equal(value.single, true);
            assert.equal(value.game.task19Single, true);
            assert.equal(value.game.text, value.expectedGameText);
            assert.equal(value.game.answer, value.answer);
            assert.equal(value.batchId, value.id);
        }
        const initialStatement = await statementState();
        assertStatement(initialStatement);
        await statementTarget.getByRole('button', {name:'🔄 Заменить внутри типа',exact:true}).click();
        const sameTopic = await statementState();
        assertStatement(sameTopic);
        assert.equal(sameTopic.index, initialStatement.index);
        assert.notEqual(sameTopic.id, initialStatement.id);
        assert.equal(sameTopic.otherTask, initialStatement.otherTask);
        await statementTarget.getByRole('button', {name:'↔ Заменить тип',exact:true}).click();
        const differentTopic = await statementState();
        assertStatement(differentTopic);
        assert.notEqual(differentTopic.index, sameTopic.index);
        assert.notEqual(differentTopic.id, sameTopic.id);
        assert.equal(differentTopic.otherTask, initialStatement.otherTask);
        assert.deepEqual(errors, []);
        assert.deepEqual(dialogs, []);
    } finally { await browser.close(); }
});
