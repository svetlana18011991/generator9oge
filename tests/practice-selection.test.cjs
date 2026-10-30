const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
let chromium;
try {
    ({ chromium } = require('playwright'));
} catch {
    try { ({ chromium } = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* The content tests remain runnable without browser dependencies. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const origin = 'http://generator.test';
const mime = { '.html':'text/html; charset=utf-8', '.js':'application/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp' };

// Load the actual page and its banks from disk. Network services and typesetting
// are isolated so this regression exercises selection and generation only.
test('scenario selection works after reset and preserves deliberate filters', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async t => {
    const browser = await chromium.launch({ executablePath:executable, headless:true, args:['--no-sandbox'] });
    try {
        const page = await browser.newPage({ viewport:{width:1440,height:1000} });
        const errors = [], dialogs = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => { dialogs.push(dialog.message()); await dialog.dismiss(); });
        await page.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
        await page.route('**/*', async route => {
            const url = new URL(route.request().url());
            if (url.origin === origin) {
                const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
                const filename = path.resolve(root, '.' + name);
                if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename)) return route.abort();
                return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
            }
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve(); window.MathJax.startup={promise:Promise.resolve()};'});
            }
            return route.abort();
        });
        await page.goto(origin, {waitUntil:'load'});
        await page.waitForSelector('#practice-scenario-theme-tropinki', {state:'attached'});
        await page.locator('#practice-scenarios-row .row-header .btn-settings').click();

        async function generatedScenarios(expectedCount) {
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
            const result = await page.evaluate(() => ({
                board:document.getElementById('info-board').textContent,
                tasks:(window.ogeVariantSnapshot || []).flatMap(block => block.kind === 'practice' ? block.tasks : []).map(task => ({
                    number:task.examNumber,
                    scenario:task.__ogeScenarioMeta?.scenario.id,
                    theme:task.__ogeScenarioMeta?.groupId.split(':')[0]
                }))
            }));
            assert.doesNotMatch(result.board, /Ошибка генерации|нет подходящего полного сюжета/);
            assert.equal(result.tasks.length, expectedCount * 5);
            assert.ok(result.tasks.every(task => task.theme === 'tropinki'));
            for (let i=0;i<result.tasks.length;i+=5) {
                assert.deepEqual(result.tasks.slice(i,i+5).map(task => task.number), [1,2,3,4,5]);
                assert.equal(new Set(result.tasks.slice(i,i+5).map(task => task.scenario)).size,1);
            }
            return result.tasks;
        }

        await t.test('initial zero count and first plus after reset retain the default behavior', async () => {
            assert.equal(await page.locator('#count-practice-scenarios').inputValue(),'0');
            assert.equal(await page.evaluate(() => buildOgePracticeTasks({innerHTML:'',style:{}},true).scenarioTasks.length),0);
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            await page.locator('#practice-scenarios-row .row-header .count-btn').last().click();
            assert.equal(await page.locator('#count-practice-scenarios').inputValue(),'1');
            assert.equal(await page.locator('[data-practice-scenario-theme-checkbox="1"]:checked').count(),8);
            assert.equal(await page.locator('[data-practice-scenario-checkbox="1"]:checked').count(),24);
        });

        await t.test('reset, select Trails, request three sets, generate fifteen questions', async () => {
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            await page.locator('#practice-scenario-theme-tropinki').check();
            assert.equal(await page.locator('#practice-theme-scenario-status-tropinki').textContent(),'Выбрано сюжетов: 3 из 3');
            await page.locator('#count-practice-scenarios').fill('3');
            const tasks = await generatedScenarios(3);
            assert.equal(new Set(tasks.map(task => task.scenario)).size,3);
        });

        await t.test('turn all themes off and reselect one without empty descendants', async () => {
            const all = page.locator('#practice-scenario-theme-all');
            await all.check();
            assert.equal(await page.locator('[data-practice-scenario-checkbox="1"]:checked').count(),24);
            await all.uncheck();
            assert.equal(await page.locator('[data-practice-scenario-checkbox="1"]:checked').count(),0);
            await page.locator('#practice-scenario-theme-tropinki').check();
            assert.equal(await page.locator('[data-practice-scenario-checkbox="1"]:checked').count(),3);
            await page.locator('#count-practice-scenarios').fill('3');
            const tasks = await generatedScenarios(3);
            assert.equal(new Set(tasks.map(task => task.scenario)).size,3);
        });

        await t.test('increasing count preserves a deliberately selected single scenario', async () => {
            const themeCard = page.locator('.practice-theme-level').filter({has:page.locator('#practice-scenario-theme-tropinki')});
            await themeCard.getByRole('button',{name:'Сюжеты',exact:true}).click();
            await page.locator('#practice-scenario-tropinki-0').uncheck();
            await page.locator('#practice-scenario-tropinki-2').uncheck();
            assert.equal(await page.locator('#practice-theme-scenario-status-tropinki').textContent(),'Выбрано сюжетов: 1 из 3');
            await page.locator('#count-practice-scenarios').fill('3');
            assert.equal(await page.locator('#practice-theme-scenario-status-tropinki').textContent(),'Выбрано сюжетов: 1 из 3');
            await page.locator('#count-practice-scenarios').fill('1');
            const plus = page.locator('#practice-scenarios-row .row-header .count-btn').last();
            await plus.click();
            await plus.click();
            assert.equal(await page.locator('#count-practice-scenarios').inputValue(),'3');
            assert.equal(await page.locator('#practice-theme-scenario-status-tropinki').textContent(),'Выбрано сюжетов: 1 из 3');
            const tasks = await generatedScenarios(3);
            assert.equal(new Set(tasks.map(task => task.scenario)).size,1);
            assert.ok(tasks.every(task => task.scenario === 'tropinki-workbook-2'));
        });
        await t.test('workbook defaults, counts and masters match the visible question pools', async () => {
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            const problems = await page.evaluate(() => {
                const failures = [];
                for (const themeId of getOgeScenarioThemeIds()) {
                    const theme = window.ogePracticeDatabase[themeId];
                    theme.scenarios.forEach((scenario, scenarioIndex) => {
                        for (let number=1;number<=5;number++) {
                            const boxes = getPracticeScenarioNumberBoxes(themeId,scenarioIndex,number);
                            const expected = getScenarioDefaultTaskIndexes(scenario,number);
                            const selected = getSelectedScenarioTaskIndexes(themeId,scenarioIndex,number);
                            const master = document.getElementById(`practice-scenario-all-${themeId}-${scenarioIndex}-${number}`);
                            const status = document.getElementById(`practice-scenario-count-${themeId}-${scenarioIndex}-${number}`);
                            if (JSON.stringify(selected) !== JSON.stringify(expected) ||
                                master.checked !== (expected.length === boxes.length) ||
                                master.indeterminate !== (expected.length > 0 && expected.length < boxes.length) ||
                                status.textContent !== `Выбрано: ${expected.length} из ${boxes.length}`) {
                                failures.push(`${themeId}/${scenarioIndex}/${number}`);
                            }
                        }
                    });
                }
                return failures;
            });
            assert.deepEqual(problems,[]);
            assert.ok(await page.locator('.practice-type-item').filter({hasText:'Дополнительное'}).count() > 0);
        });

        await t.test('explicit extra choice survives count changes and reaches active and downloaded variants', async () => {
            await page.locator('#practice-scenario-theme-tariff').check();
            const themeCard = page.locator('.practice-theme-level').filter({has:page.locator('#practice-scenario-theme-tariff')});
            await themeCard.getByRole('button',{name:'Сюжеты',exact:true}).click();
            await page.locator('#practice-scenario-tariff-1').uncheck();
            await page.locator('#practice-scenario-tariff-2').uncheck();
            const scenarioCard = page.locator('.practice-scenario-card').filter({has:page.locator('#practice-scenario-tariff-0')});
            await scenarioCard.getByRole('button',{name:'Задания',exact:true}).click();
            const expected = await page.evaluate(() => {
                const scenario = window.ogePracticeDatabase.tariff.scenarios[0];
                const number = [1,2,3,4,5].find(n => scenario.tasks[n].some(task => task.workbookDefault === false));
                const index = scenario.tasks[number].findIndex(task => task.workbookDefault === false);
                const chosen = scenario.tasks[number][index];
                const common = document.createElement('div');
                common.innerHTML = stripDiagramsFromHTML(scenario.common);
                return {number,index,type:String(chosen.typeId),text:chosen.text,scenario:scenario.id,common:common.textContent.replace(/\s+/g,' ').trim(),commonHTML:stripDiagramsFromHTML(scenario.common)};
            });
            // This explicit action must include additional questions as well.
            await page.locator(`#practice-scenario-all-tariff-0-${expected.number}`).check();
            const choices = page.locator(`[data-practice-scenario-theme="tariff"][data-practice-scenario-index="0"][data-practice-scenario-number="${expected.number}"]`);
            assert.ok(await choices.count() > 1);
            assert.ok(await choices.evaluateAll(boxes => boxes.every(box => box.checked)));
            for (let index=0;index<await choices.count();index++) {
                if (index !== expected.index) await choices.nth(index).uncheck();
            }
            const plus = page.locator('#practice-scenarios-row .row-header .count-btn').last();
            await plus.click();
            await plus.click();
            assert.deepEqual(await page.evaluate(number => getSelectedScenarioTaskIndexes('tariff',0,number),expected.number),[expected.index]);
            assert.equal(await page.locator(`#practice-scenario-count-tariff-0-${expected.number}`).textContent(),`Выбрано: 1 из ${await choices.count()}`);
            // Quick full variants ignore optional questions without modifying manual filters.
            const automatic = await page.evaluate(() => Array.from({length:8},() =>
                buildOgePracticeTasks({innerHTML:'',style:{}},false,new Map(),true).scenarioTasks
                    .every(task => task.__ogeScenarioMeta.chosen.workbookDefault !== false)));
            assert.ok(automatic.every(Boolean));
            assert.deepEqual(await page.evaluate(number => getSelectedScenarioTaskIndexes('tariff',0,number),expected.number),[expected.index]);
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
            const generated = await page.evaluate(number => (window.ogeVariantSnapshot || [])
                .flatMap(block => block.kind === 'practice' ? block.tasks : [])
                .filter(task => task.examNumber === number)
                .map(task => ({type:task.__ogeScenarioMeta.selectedTypeId,scenario:task.__ogeScenarioMeta.scenario.id,text:task.text})),expected.number);
            assert.equal(generated.length,2);
            assert.ok(generated.every(task => task.type === expected.type && task.scenario === expected.scenario && task.text === expected.text));
            const activeCommon = await page.locator('#output-section .oge-practice-common-body').evaluateAll(nodes => nodes.map(node => node.textContent.replace(/\s+/g,' ').trim()));
            assert.deepEqual(activeCommon,[expected.common,expected.common]);
            const downloadPromise = page.waitForEvent('download');
            await page.evaluate(() => downloadStudentHTML());
            const download = await downloadPromise;
            const directory = fs.mkdtempSync(path.join(require('node:os').tmpdir(),'oge-workbook-export-'));
            try {
                const filename = path.join(directory,'interactive.html');
                await download.saveAs(filename);
                const saved = fs.readFileSync(filename,'utf8');
                assert.ok(saved.includes(expected.text));
                // Inspect the downloaded bytes without loading the export's
                // large embedded seasonal backgrounds into Chromium again.
                assert.ok(saved.includes(expected.commonHTML));
                assert.equal((saved.match(/class="oge-practice-common-body"/g) || []).length,2);
                assert.equal((saved.match(/<div\b[^>]*class="generated-task-block\b/g) || []).length,10);
            } finally {
                fs.rmSync(directory,{recursive:true,force:true});
            }
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            await page.locator('#practice-scenarios-row .row-header .count-btn').last().click();
            assert.deepEqual(await page.evaluate(number => getSelectedScenarioTaskIndexes('tariff',0,number),expected.number),[0]);
        });
        await t.test('Trails optional questions keep their own scenario in active and downloaded sets', async () => {
            for (const scenarioIndex of [1,2]) {
                await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
                await page.locator('#practice-scenario-theme-tropinki').check();
                const themeCard = page.locator('.practice-theme-level').filter({has:page.locator('#practice-scenario-theme-tropinki')});
                if (!await page.locator(`#practice-scenario-tropinki-${scenarioIndex}`).isVisible()) {
                    await themeCard.getByRole('button',{name:'Сюжеты',exact:true}).click();
                }
                for (let index=0;index<3;index++) {
                    if (index !== scenarioIndex) await page.locator(`#practice-scenario-tropinki-${index}`).uncheck();
                }
                const scenarioCard = page.locator('.practice-scenario-card').filter({has:page.locator(`#practice-scenario-tropinki-${scenarioIndex}`)});
                const firstGroup = page.locator(`[data-practice-scenario-theme="tropinki"][data-practice-scenario-index="${scenarioIndex}"][data-practice-scenario-number="1"]`);
                if (!await firstGroup.first().isVisible()) await scenarioCard.getByRole('button',{name:'Задания',exact:true}).click();
                for (let number=1;number<=5;number++) {
                    assert.equal(await page.locator(`#practice-scenario-count-tropinki-${scenarioIndex}-${number}`).textContent(),'Выбрано: 1 из 2');
                    const options = page.locator(`[data-practice-scenario-theme="tropinki"][data-practice-scenario-index="${scenarioIndex}"][data-practice-scenario-number="${number}"]`);
                    await options.nth(1).check();
                    await options.nth(0).uncheck();
                }
                await page.locator('#count-practice-scenarios').fill('1');
                await page.locator('#practice-scenarios-row .row-header .count-btn').last().click();
                const selection = await page.evaluate(index => [1,2,3,4,5].map(number => getSelectedScenarioTaskIndexes('tropinki',index,number)),scenarioIndex);
                assert.deepEqual(selection,[[1],[1],[1],[1],[1]]);
                await page.locator('#count-practice-scenarios').fill('1');
                await page.locator('.oge-manual-btn').click();
                await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
                const result = await page.evaluate(index => {
                    const scenario = window.ogePracticeDatabase.tropinki.scenarios[index];
                    const common = document.createElement('div');
                    common.innerHTML = stripDiagramsFromHTML(scenario.common);
                    const expectedCommon = common.textContent.replace(/\s+/g,' ').trim();
                    const tasks = (window.ogeVariantSnapshot || []).flatMap(block => block.kind === 'practice' ? block.tasks : []);
                    return {
                        expectedCommon,
                        commonHTML:stripDiagramsFromHTML(scenario.common),
                        sourceTasks:tasks.map(task => task.text),
                        activeCommon:[...document.querySelectorAll('#output-section .oge-practice-common-body')].map(node => node.textContent.replace(/\s+/g,' ').trim()),
                        linked:tasks.every(task => task.__ogeScenarioMeta.scenario.id === scenario.id && task.__ogeScenarioMeta.chosen === scenario.tasks[task.examNumber][1]),
                        tasks:tasks.map(task => task.text.replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim())
                    };
                },scenarioIndex);
                assert.ok(result.linked);
                assert.equal(result.tasks.length,5);
                assert.deepEqual(result.activeCommon,[result.expectedCommon]);
                assert.match(result.tasks[0],/последовательность трёх цифр без пробелов, запятых и других дополнительных символов/);
                assert.match(result.tasks[4],scenarioIndex === 1 ? /2 л молока.*3 кг говядины.*2 кг картофеля/ : /3 батона хлеба.*2 кг сыра.*2 кг говядины/);
                const pending = page.waitForEvent('download');
                await page.evaluate(() => downloadStudentHTML());
                const download = await pending;
                const directory = fs.mkdtempSync(path.join(require('node:os').tmpdir(),'oge-trails-export-'));
                try {
                    const filename = path.join(directory,'interactive.html');
                    await download.saveAs(filename);
                    const saved = fs.readFileSync(filename,'utf8');
                    assert.ok(saved.includes(result.commonHTML));
                    assert.equal((saved.match(/class="oge-practice-common-body"/g) || []).length,1);
                    assert.equal((saved.match(/<div\b[^>]*class="generated-task-block\b/g) || []).length,5);
                    result.sourceTasks.forEach(text => assert.ok(saved.includes(text)));
                } finally { fs.rmSync(directory,{recursive:true,force:true}); }
                // Re-enabling a theme restores its workbook questions.
                await page.locator('#practice-scenario-theme-tropinki').uncheck();
                await page.locator('#practice-scenario-theme-tropinki').check();
                assert.deepEqual(await page.evaluate(index => [1,2,3,4,5].map(number => getSelectedScenarioTaskIndexes('tropinki',index,number)),scenarioIndex),[[0],[0],[0],[0],[0]]);
            }
        });
        assert.deepEqual(errors,[]);
        assert.deepEqual(dialogs,[]);
    } finally { await browser.close(); }
});
