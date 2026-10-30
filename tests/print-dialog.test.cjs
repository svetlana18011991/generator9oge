const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const root = path.resolve(__dirname,'..');
const source = fs.readFileSync(path.join(root,'index.html'),'utf8');
const origin = 'http://print-dialog.test';
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const embeddedMath = Buffer.from(source.match(/<script\b[^>]*src="data:text\/javascript;base64,([^"]+)"/)[1],'base64');
const fontFiles = {'MJXZERO':'Zero','MJXTEX':'Main-Regular','MJXTEX-B':'Main-Bold','MJXTEX-I':'Main-Italic','MJXTEX-MI':'Math-Italic','MJXTEX-BI':'Math-BoldItalic','MJXTEX-S1':'Size1-Regular','MJXTEX-S2':'Size2-Regular','MJXTEX-S3':'Size3-Regular','MJXTEX-S4':'Size4-Regular','MJXTEX-A':'AMS-Regular','MJXTEX-C':'Caligraphic-Regular','MJXTEX-CB':'Caligraphic-Bold','MJXTEX-FR':'Fraktur-Regular','MJXTEX-FRB':'Fraktur-Bold','MJXTEX-SS':'SansSerif-Regular','MJXTEX-SSB':'SansSerif-Bold','MJXTEX-SSI':'SansSerif-Italic','MJXTEX-SC':'Script-Regular','MJXTEX-T':'Typewriter-Regular','MJXTEX-V':'Vector-Regular','MJXTEX-VB':'Vector-Bold'};
const fonts = new Map([...source.matchAll(/@font-face\{font-family:"([^"]+)";src:url\("data:font\/woff;base64,([^"]+)"/g)].map(match => ['MathJax_'+fontFiles[match[1]]+'.woff',Buffer.from(match[2],'base64')]));
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('print file opens a ready printable tab with a PDF action and blocked-popup fallback',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:120000
},async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const context = await browser.newContext({viewport:{width:1440,height:1000}});
        await context.addInitScript(({key,hash}) => {
            // A newly opened, detached about:blank tab can have an opaque origin.
            try { sessionStorage.setItem(key,hash); } catch {}
            window.__printCalls=0;
            window.print=()=>{window.__printCalls++;};
        },{key:sessionKey,hash:passwordHash});
        let app, controlledImageReady = false;
        const errors=[],dialogs=[];
        context.on('page',page => {
            page.on('pageerror',error => errors.push(error.message));
            page.on('dialog',async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        });
        await context.route('**/*',async route => {
            const request=route.request(),url=new URL(request.url());
            if (url.origin === origin && url.pathname === '/controlled-image.svg') {
                return controlledImageReady
                    ? route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8"/></svg>'})
                    : route.fulfill({status:404,body:'missing'});
            }
            if (url.origin === origin || url.origin === 'https://svetlana18011991.github.io') {
                const name=decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname.replace(/^\/generator9oge\//,'/'));
                const filename=path.resolve(root,'.'+name);
                if (filename.startsWith(root+path.sep) && fs.existsSync(filename)) return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
            }
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                if (request.frame().page() === app) return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
                return route.fulfill({contentType:'application/javascript',body:embeddedMath});
            }
            const font=fonts.get(path.basename(url.pathname));
            if (font) return route.fulfill({contentType:'font/woff',body:font});
            return route.abort();
        });
        app=await context.newPage();
        await app.goto(origin,{waitUntil:'load'});
        await app.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});
        await app.evaluate(() => {
            resetTaskCounts();
            const tid=getUniqueTaskIds().find(id=>String(id).replace(/\D/g,'')==='10');
            toggleAllProtos(tid,false);
            document.getElementById(getPrototypeCheckboxId(tid,13)).checked=true;
            document.getElementById('count-'+tid).value='1';
            const random=Math.random;Math.random=()=>0;
            generateVariant();Math.random=random;
        });
        async function printTab() {
            const pending=context.waitForEvent('page');
            await app.locator('button[onclick="downloadPrintPDF()"]').click();
            const page=await pending;
            await page.waitForURL(/^blob:/);
            await page.waitForFunction(() => {
                const button=document.getElementById('oge-print-button');
                return button && (!button.disabled || document.getElementById('oge-print-status')?.hasAttribute('data-error'));
            },null,{timeout:40000});
            return page;
        }
        async function assertReady(page) {
            assert.equal(await page.locator('#oge-print-status').getAttribute('data-error'),null,await page.locator('#oge-print-status').textContent());
            await page.waitForFunction(()=>__printCalls===1);
            assert.equal(await page.evaluate(()=>window.opener),null);
            assert.match(await page.locator('#oge-print-status').textContent(),/Сохранить в формате PDF/);
            assert.equal(await page.locator('[data-mjx-error],mjx-merror').count(),0);
            assert.ok(await page.locator('mjx-container').count()>0);
            await page.locator('#oge-print-button').click();
            assert.equal(await page.evaluate(()=>__printCalls),2);
            await page.emulateMedia({media:'print'});
            assert.equal(await page.locator('#oge-print-tools').evaluate(node=>getComputedStyle(node).display),'none');
        }
        await t.test('manual selection opens a new tab and prints real CHTML formulas with corrected tree SVG',async () => {
            const page=await printTab();
            await assertReady(page);
            const labels=await page.locator('.task-print-img svg text').allTextContents();
            assert.deepEqual(labels.slice(-6),['0,5','0,5','0,6','0,4','0,2','0,8']);
            await page.close();
        });
        await t.test('broken images show a visible retry and a successful reload can print',async () => {
            await app.evaluate(url => {
                window.__originalPrintOpen=openOgePrintDocument;
                openOgePrintDocument=(html,name)=>window.__originalPrintOpen(html.replace('</body>','<img src="'+url+'"></body>'),name);
            },origin+'/controlled-image.svg');
            const page=await printTab();
            assert.equal(await page.evaluate(()=>__printCalls),0);
            assert.match(await page.locator('#oge-print-status').textContent(),/Повторить подготовку/);
            assert.equal(await page.locator('#oge-print-retry').isVisible(),true);
            controlledImageReady=true;
            await page.locator('#oge-print-retry').click();
            await page.waitForFunction(()=>{const button=document.getElementById('oge-print-button');return button && !button.disabled;});
            await assertReady(page);
            await page.close();
            await app.evaluate(()=>{openOgePrintDocument=window.__originalPrintOpen;delete window.__originalPrintOpen;});
        });
        await t.test('full variant opens its three-page layout and automatic print',async () => {
            await app.evaluate(() => {let seed=26;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};});
            await app.locator('.oge-fast-btn').click();
            await app.waitForFunction(()=>!document.querySelector('.oge-fast-btn').disabled);
            const page=await printTab();
            await assertReady(page);
            assert.equal(await page.locator('.oge-exam-page').count(),3);
            assert.equal(await page.locator('.oge-exam-task[data-exam-task]').count(),25);
            await page.close();
        });
        await t.test('a blocked print tab still downloads a usable document with an explicit instruction',async () => {
            await app.evaluate(()=>{window.open=()=>null;});
            const pending=app.waitForEvent('download');
            await app.locator('button[onclick="downloadPrintPDF()"]').click();
            const download=await pending;
            assert.match(download.suggestedFilename(),/\.html$/);
            assert.ok(dialogs.some(message=>/заблокировал вкладку печати/.test(message)));
            const directory=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'oge-print-blocked-'));
            try {
                const filename=path.join(directory,'print.html');
                await download.saveAs(filename);
                const saved=fs.readFileSync(filename,'utf8');
                assert.ok(saved.includes('Печать / сохранить PDF'));
                assert.ok(saved.includes('function ogePreparePrint('));
                assert.ok(saved.includes('__ogeNoSplitMath'));
            } finally {fs.rmSync(directory,{recursive:true,force:true});}
        });
        assert.deepEqual(errors,[]);
    } finally {await browser.close();}
});
