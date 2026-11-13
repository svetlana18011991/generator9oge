const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname,'..');
const source = fs.readFileSync(path.join(root,'index.html'),'utf8');
const references = Array.from(fs.readFileSync(path.join(root,'reference_assets.js'),'utf8')
    .matchAll(/window\.OGE_REFERENCE_(?:ALGEBRA|GEOMETRY)_DATA = "(data:image\/png;base64,[A-Za-z0-9+/=]+)"/g),match=>match[1]);
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://lazy-reference-assets.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium}=require('playwright')); }
catch { try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('reference sheets load on export, retry safely and travel with downloaded files', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async () => {
    assert.equal(references.length,2);
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory=fs.mkdtempSync(path.join(os.tmpdir(),'oge-lazy-reference-'));
    try {
        const page=await browser.newPage();
        const errors=[],dialogs=[],requests=[];
        let failedReferenceRequest=false,downloads=0;
        let releaseReferences;
        const referencesGate=new Promise(resolve=>{releaseReferences=resolve;});
        page.on('pageerror',error=>errors.push(error.message));
        page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        page.on('download',()=>downloads++);
        await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
        await page.route('**/*',async route=>{
            const url=new URL(route.request().url());
            requests.push(url.pathname);
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:
                    'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            }
            if (url.origin===origin) {
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if (filename.startsWith(root+path.sep) && fs.existsSync(filename)) {
                    if (url.pathname==='/reference_assets.js' && !failedReferenceRequest) {
                        failedReferenceRequest=true;
                        return route.abort();
                    }
                    if (url.pathname==='/reference_assets.js') await referencesGate;
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
                }
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        await page.waitForSelector('#count-6',{state:'attached'});
        assert.equal(requests.filter(url=>url==='/reference_assets.js').length,0,
            'Opening the page must not fetch the reference sheets');
        await page.locator('#count-6').fill('9');
        await page.locator('.oge-manual-btn').click();
        await page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled);
        assert.equal(requests.filter(url=>url==='/reference_assets.js').length,0,
            'Generating and previewing tasks does not need the export reference sheets');

        async function downloaded(command,name,beforeDownload) {
            const pending=page.waitForEvent('download');
            await page.evaluate(command);
            if (beforeDownload) await beforeDownload();
            const download=await pending,filename=path.join(directory,name);
            await download.saveAs(filename);
            return fs.readFileSync(filename,'utf8');
        }
        await downloaded(()=>downloadAnswers(),'answers.html');
        assert.equal(requests.filter(url=>url==='/reference_assets.js').length,0,
            'Answer keys do not need reference images');

        const priorDownloads=downloads;
        const failure=page.waitForEvent('dialog');
        await page.evaluate(()=>downloadStudentHTML());
        await failure;
        await page.waitForFunction(()=>ogeReferenceAssetsLoad===null);
        assert.equal(downloads,priorDownloads,'A failed reference download must not produce an incomplete student file');
        assert.match(dialogs[0],/Не удалось загрузить справочные материалы/);
        assert.equal(await page.locator('#oge-export-reference-status').count(),0);

        const interactive=await downloaded(()=>downloadStudentHTML(),'interactive.html',async()=>{
            const status=page.locator('#oge-export-reference-status');
            await status.waitFor({state:'visible'});
            assert.equal(await status.getAttribute('role'),'status');
            assert.equal(await status.textContent(),'Подготавливаем файл…');
            assert.equal(downloads,priorDownloads,'The file waits for its reference sheets');
            releaseReferences();
        });
        assert.equal(await page.locator('#oge-export-reference-status').count(),0);
        const tower=await downloaded(()=>generateTowerGame(),'tower.html');
        const presentation=await downloaded(()=>generatePresentation1(),'presentation.html');
        for (const [name,html] of [['interactive',interactive],['tower',tower],['presentation',presentation]]) {
            for (const data of references) assert.ok(html.includes(data),name+' retains the original reference image bytes');
            assert.doesNotMatch(html,/#oge-reference-(?:algebra|geometry)/,name+' has no unresolved reference placeholders');
        }
        assert.equal(requests.filter(url=>url==='/reference_assets.js').length,2,
            'One failed load is retried once; later exports reuse the loaded sheets');

        const offline=await browser.newPage({javaScriptEnabled:false});
        await offline.route('**/*',route=>route.abort());
        await offline.setContent(interactive,{waitUntil:'load'});
        const sheets=offline.locator('#exam-ref-help-modal img');
        assert.equal(await sheets.count(),2);
        await offline.waitForFunction(()=>[...document.querySelectorAll('#exam-ref-help-modal img')]
            .every(image=>image.complete && image.naturalWidth===1536 && image.naturalHeight===1024));
        await offline.close();
        assert.equal(dialogs.length,1,'Only the expected failed-load notice is shown');
        assert.deepEqual(errors,[]);
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
