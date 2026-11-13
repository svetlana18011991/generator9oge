const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://lazy-offline-assets.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); }
catch { try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('offline decorations load only when requested and remain embedded in exports', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async () => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'oge-lazy-assets-'));
    try {
        const page = await browser.newPage();
        const errors = [], dialogs = [], requests = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
        let releaseAssets;
        const assetsGate = new Promise(resolve => {releaseAssets = resolve;});
        await page.route('**/*', async route => {
            const url = new URL(route.request().url());
            requests.push(url.pathname);
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:
                    'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            }
            if (url.origin === origin) {
                const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
                if (filename.startsWith(root + path.sep) && fs.existsSync(filename)) {
                    if (url.pathname === '/offline_assets_bundle.js') await assetsGate;
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
            }
            return route.abort();
        });
        await page.goto(origin, {waitUntil:'load'});
        await page.waitForSelector('#count-6', {state:'attached'});
        assert.equal(requests.filter(url => url === '/offline_assets_bundle.js').length,0,
            'Opening the generator must not request the large decoration pack');
        assert.equal(requests.filter(url => ['/p1.jpg','/f1.png','/s2.png'].includes(url)).length,0,
            'Hidden presentation thumbnails must not load at startup');

        await page.locator('#count-6').fill('3');
        const button = page.locator('.oge-manual-btn');
        await button.click();
        await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
        assert.equal(await page.locator('#output-section .generated-task-block').count(),3);
        assert.equal(requests.filter(url => url === '/offline_assets_bundle.js').length,0,
            'A plain task selection needs no decoration pack');

        await page.locator('#sticker-select').selectOption('ro');
        await button.click();
        await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
        assert.equal(requests.filter(url => url === '/offline_assets_bundle.js').length,0,
            'Current ro stickers use their separate local PNG files');
        assert.ok(await page.locator('#output-section img[src*="ro_"]').count() > 0);

        await page.locator('#sticker-select').selectOption('cat');
        const loading = page.waitForRequest(request => new URL(request.url()).pathname === '/offline_assets_bundle.js');
        await button.click();
        await loading;
        assert.equal(await button.isDisabled(),true,'Generation must wait for requested offline stickers');
        assert.equal(await page.locator('.oge-fast-btn').isDisabled(),true,'A second generation must wait for the current one');
        await page.evaluate(() => safeGenerateVariant(null,'full'));
        assert.equal(await page.evaluate(() => window.ogeGenerationMode),'manual','A pending sticker selection cannot be replaced by another generation');
        // Concurrent consumers share the same in-flight request.
        await page.evaluate(() => {window.ogeEnsureOfflineAssets();});
        assert.equal(requests.filter(url => url === '/offline_assets_bundle.js').length,1);
        releaseAssets();
        await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled && window.ogeHasOfflineAssets());
        const stickers = await page.evaluate(() => {
            const holder = document.createElement('div');
            holder.innerHTML = currentPrintHTML;
            return Array.from(holder.querySelectorAll('.sticker-print img'), image => image.getAttribute('src'));
        });
        assert.ok(stickers.length > 0);
        assert.ok(stickers.every(source => source.startsWith('data:image/')),
            'Printed stickers must stay embedded for offline files');

        async function downloaded(command, name) {
            const pending = page.waitForEvent('download');
            await page.evaluate(command);
            const download = await pending;
            const filename = path.join(directory,name);
            await download.saveAs(filename);
            return fs.readFileSync(filename,'utf8');
        }
        const interactive = await downloaded(() => downloadStudentHTML(),'interactive.html');
        assert.match(interactive,/data-oge-shared-images/,'The selected stickers travel in the standalone interactive file');
        const presentation = await downloaded(() => generatePresentation1(),'presentation.html');
        assert.match(presentation,/\.pres-bg-title\s*\{\s*background-image:\s*url\('(?:data:image\/|blob:)/);
        assert.equal(requests.filter(url => url === '/offline_assets_bundle.js').length,1,
            'Later presentation export reuses the already loaded pack');
        assert.deepEqual(dialogs,[]);
        assert.deepEqual(errors,[]);
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
