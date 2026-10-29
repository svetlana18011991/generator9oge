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
        assert.deepEqual(errors,[]);
        assert.deepEqual(dialogs,[]);
    } finally { await browser.close(); }
});
