const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://startup-loading.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({ chromium } = require('playwright')); }
catch {
    try { ({ chromium } = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* Browser dependencies are optional outside the managed environment. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('the page appears before slow task banks and optional images load only when used', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const contexts = [];
    const releasePending = [];
    try {
        async function openWhileBankLoads(authenticated) {
            const context = await browser.newContext({viewport:{width:1440,height:1000}});
            contexts.push(context);
            await context.addInitScript(() => {
                window.__startupDomReady = false;
                document.addEventListener('DOMContentLoaded', () => { window.__startupDomReady = true; }, {once:true});
            });
            if (authenticated) {
                await context.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
            }
            const page = await context.newPage();
            const errors = [], dialogs = [], bundleRequests = [];
            let release;
            const bankReady = new Promise(resolve => { release = resolve; });
            releasePending.push(release);
            page.on('pageerror', error => errors.push(error.message));
            page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
            await page.route('**/*', async route => {
                const url = new URL(route.request().url());
                if (url.origin === origin) {
                    const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
                    if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename)) return route.abort();
                    if (url.pathname === '/oge_practice.js') await bankReady;
                    if (url.pathname === '/offline_assets_bundle.js') bundleRequests.push(url.href);
                    if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                        return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
                    }
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
                return route.abort();
            });
            await page.goto(origin, {waitUntil:'commit'});
            return {page,release,errors,dialogs,bundleRequests};
        }

        await t.test('the password screen and visibility toggle work while a required bank is pending', async () => {
            const app = await openWhileBankLoads(false);
            try {
                await app.page.locator('#passwordGateInput').waitFor({state:'visible',timeout:5000});
                assert.equal(await app.page.evaluate(() => window.__startupDomReady), false);
                const input = app.page.locator('#passwordGateInput');
                assert.equal(await input.evaluate(node => node.classList.contains('password-gate-masked')), true);
                await app.page.locator('#passwordGateEye').click();
                assert.equal(await input.evaluate(node => node.classList.contains('password-gate-masked')), false);
                assert.equal(await app.page.locator('#passwordGateEye').getAttribute('aria-label'), 'Скрыть пароль');
                assert.deepEqual(app.bundleRequests, [], 'export images must not delay the login screen');
            } finally { app.release(); }
            await app.page.waitForLoadState('domcontentloaded');
            await app.page.waitForSelector('#dynamic-tasks .task-row', {state:'attached'});
            assert.deepEqual(app.errors, []);
            assert.deepEqual(app.dialogs, []);
        });

        await t.test('remembered access reveals the shell immediately and lazy image loading preserves generation', async () => {
            const app = await openWhileBankLoads(true);
            try {
                await app.page.locator('.oge-manual-btn').waitFor({state:'visible',timeout:5000});
                assert.equal(await app.page.locator('#passwordGate').count(), 0);
                assert.equal(await app.page.evaluate(() => document.body.classList.contains('auth-locked')), false);
                assert.equal(await app.page.locator('#dynamic-tasks .task-row').count(), 0, 'the shell is visible while bank-dependent controls are still loading');
                assert.deepEqual(app.bundleRequests, []);
            } finally { app.release(); }
            await app.page.waitForLoadState('domcontentloaded');
            await app.page.waitForSelector('#count-6', {state:'attached'});
            await app.page.locator('#count-6').fill('3');
            await app.page.locator('#sticker-select').selectOption('none');
            await app.page.locator('.oge-manual-btn').click();
            await app.page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled && window.currentGeneratedTasks.length === 3);
            assert.equal(await app.page.locator('#output-section .generated-task-block').count(), 3);
            assert.deepEqual(app.bundleRequests, [], 'a plain selection does not require sticker and presentation images');

            await app.page.locator('#sticker-select').selectOption('cat');
            await app.page.locator('.oge-manual-btn').click();
            await app.page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled && window.EMBEDDED_ASSETS?.['cat_1.png']);
            assert.equal(app.bundleRequests.length, 1, 'selecting built-in stickers loads their bundle on demand');
            assert.ok(await app.page.locator('#output-section img').count() > 0, 'the generated selection still includes its stickers');
            await app.page.locator('.oge-manual-btn').click();
            await app.page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
            assert.equal(app.bundleRequests.length, 1, 'later generations reuse the already loaded bundle');
            assert.deepEqual(app.errors, []);
            assert.deepEqual(app.dialogs, []);
        });
    } finally {
        releasePending.forEach(release => release());
        await Promise.all(contexts.map(context => context.close()));
        await browser.close();
    }
});
