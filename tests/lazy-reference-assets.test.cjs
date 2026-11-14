const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname,'..');
const source = fs.readFileSync(path.join(root,'index.html'),'utf8');
const references = Array.from(fs.readFileSync(path.join(root,'reference_assets_webp.js'),'utf8')
    .matchAll(/window\.OGE_REFERENCE_(?:ALGEBRA|GEOMETRY)_DATA = "(data:image\/(?:png|webp);base64,[A-Za-z0-9+/=]+)"/g),match=>match[1]);
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://lazy-reference-assets.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium}=require('playwright')); }
catch { try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const deferred = () => {let resolve;const promise=new Promise(done=>{resolve=done;});return {promise,resolve};};

test('reference preparation stays quiet, bounds waiting and produces one complete offline file',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:120000
},async t=>{
    assert.equal(references.length,2);
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory=fs.mkdtempSync(path.join(os.tmpdir(),'oge-reference-export-'));
    const releases=[];
    try {
        async function openApp(referenceRoute) {
            const page=await browser.newPage();
            const errors=[],dialogs=[];
            const firstReferenceRequest=deferred();
            const state={page,errors,dialogs,requests:0,downloads:0};
            page.on('pageerror',error=>errors.push(error.message));
            page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
            page.on('download',()=>state.downloads++);
            await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
            const serve=route=>route.fulfill({path:path.join(root,'reference_assets_webp.js'),contentType:'application/javascript'});
            await page.route('**/*',async route=>{
                const url=new URL(route.request().url());
                if(url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
                if(url.origin===origin) {
                    if(url.pathname==='/reference_assets_webp.js') {
                        firstReferenceRequest.resolve();
                        return referenceRoute(route,++state.requests,serve);
                    }
                    const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                    if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
                }
                return route.abort();
            });
            await page.goto(origin,{waitUntil:'load'});
            await page.waitForSelector('#count-6',{state:'attached'});
            assert.equal(state.requests,0,'opening the generator must not start reference preparation');
            state.generate=async()=>{
                await page.locator('#count-6').fill('9');
                await page.locator('.oge-manual-btn').click();
                await page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled&&window.currentGeneratedTasks.length===9);
                await firstReferenceRequest.promise;
            };
            state.startExport=()=>page.evaluate(()=>downloadStudentHTML());
            return state;
        }
        async function downloaded(app,command,name,beforeDownload) {
            const pending=app.page.waitForEvent('download');
            const action=app.page.evaluate(command);
            pending.catch(()=>{});action.catch(()=>{});
            if(beforeDownload) await beforeDownload();
            await action;
            const download=await pending,filename=path.join(directory,name);
            await download.saveAs(filename);
            return fs.readFileSync(filename,'utf8');
        }
        async function assertBusy(app) {
            await app.page.locator('#oge-export-reference-status').waitFor({state:'visible'});
            assert.equal(await app.page.locator('#oge-export-reference-status').getAttribute('role'),'status');
            assert.equal(await app.page.locator('.btn-html').isDisabled(),true);
            assert.equal(await app.page.locator('.btn-html').getAttribute('aria-busy'),'true');
        }
        async function assertIdle(app) {
            await app.page.waitForFunction(()=>!document.querySelector('.btn-html').disabled);
            assert.equal(await app.page.locator('#oge-export-reference-status').count(),0);
            assert.notEqual(await app.page.locator('.btn-html').getAttribute('aria-busy'),'true');
        }

        await t.test('quiet preparation is reused by duplicate clicks and every export retains its references',async()=>{
            const gate=deferred();releases.push(gate.resolve);
            const app=await openApp(async(route,attempt,serve)=>{await gate.promise;return serve(route);});
            await app.generate();
            assert.equal(app.requests,1);
            assert.equal(await app.page.locator('#oge-export-reference-status').count(),0,'background preparation does not show a foreground download status');
            const prior=app.downloads;
            const interactive=await downloaded(app,()=>downloadStudentHTML(),'interactive.html',async()=>{
                await assertBusy(app);
                await app.page.evaluate(()=>{window.secondReferenceExport=downloadStudentHTML();});
                assert.equal(app.requests,1,'duplicate callers reuse the pending preparation');
                assert.equal(app.downloads,prior);
                gate.resolve();
            });
            await app.page.evaluate(()=>window.secondReferenceExport);
            await assertIdle(app);
            assert.equal(app.downloads,prior+1,'repeated clicks produce a single interactive file');
            const tower=await downloaded(app,()=>generateTowerGame(),'tower.html');
            const presentation=await downloaded(app,()=>generatePresentation1(),'presentation.html');
            for(const [name,html] of [['interactive',interactive],['tower',tower],['presentation',presentation]]) {
                for(const data of references) assert.ok(html.includes(data),name+' contains the current reference bytes');
                assert.doesNotMatch(html,/#oge-reference-(?:algebra|geometry)/);
            }
            assert.equal(app.requests,1,'later formats reuse the already loaded references');
            const offline=await browser.newPage({javaScriptEnabled:false});
            await offline.route('**/*',route=>route.abort());
            await offline.setContent(interactive,{waitUntil:'load'});
            assert.equal(await offline.locator('#exam-ref-help-modal img').count(),2);
            await offline.waitForFunction(()=>[...document.querySelectorAll('#exam-ref-help-modal img')].every(image=>image.complete&&image.naturalWidth===1536&&image.naturalHeight===1024));
            await offline.close();
            assert.deepEqual(app.errors,[]);assert.deepEqual(app.dialogs,[]);
            await app.page.close();
        });

        await t.test('a failed background load is quiet and a failed download restores the button for retry',async()=>{
            const firstFailure=deferred();releases.push(firstFailure.resolve);
            const app=await openApp(async(route,attempt,serve)=>{
                if(attempt===1) await firstFailure.promise;
                return attempt<=2?route.abort():serve(route);
            });
            await app.generate();
            firstFailure.resolve();
            await app.page.waitForFunction(()=>ogeReferenceAssetsLoad===null);
            assert.equal(app.requests,1);
            assert.deepEqual(app.dialogs,[],'background network errors do not interrupt task selection');
            assert.equal(await app.page.locator('#oge-export-reference-status').count(),0);
            const failed=app.page.waitForEvent('dialog');
            const action=app.startExport();
            await failed;await action;await assertIdle(app);
            assert.equal(app.downloads,0,'failed preparation must not save a file with missing sheets');
            assert.match(app.dialogs[0],/Не удалось загрузить справочные материалы/);
            await downloaded(app,()=>downloadStudentHTML(),'retry.html');
            await assertIdle(app);
            assert.equal(app.requests,3);assert.equal(app.downloads,1);
            assert.deepEqual(app.errors,[]);
            await app.page.close();
        });

        await t.test('a stalled request times out, permits retry and cannot damage the newer attempt',async()=>{
            const oldGate=deferred(),retryGate=deferred();releases.push(oldGate.resolve,retryGate.resolve);
            const app=await openApp(async(route,attempt,serve)=>{
                await (attempt===1?oldGate.promise:retryGate.promise);
                try {return await serve(route);} catch(error) {
                    // A timed-out tag may have had its browser request cancelled.
                    if(attempt!==1) throw error;
                }
            });
            await app.generate();
            await app.page.waitForFunction(()=>ogeReferenceAssetsLoad!==null);
            await app.page.evaluate(()=>{window.oldReferenceOnload=[...document.scripts].find(script=>script.src.includes('/reference_assets_webp.js')).onload;});
            const failure=app.page.waitForEvent('dialog',{timeout:25000});
            const pending=app.startExport();await assertBusy(app);
            await failure;await pending;await assertIdle(app);
            assert.equal(app.downloads,0);assert.equal(app.requests,1);
            await app.page.waitForFunction(()=>ogeReferenceAssetsLoad===null);
            const retry=downloaded(app,()=>downloadStudentHTML(),'timeout-retry.html',async()=>{
                await assertBusy(app);
                const intact=await app.page.evaluate(()=>{
                    const current=ogeReferenceAssetsLoad;
                    window.oldReferenceOnload(new Event('load'));
                    return ogeReferenceAssetsLoad===current;
                });
                assert.equal(intact,true,'a stale callback cannot reset the new preparation');
                const until=Date.now()+2000;
                while(app.requests<2&&Date.now()<until) await app.page.waitForTimeout(25);
                assert.equal(app.requests,2,'retry must start a fresh request while the timed-out one is still pending');
                retryGate.resolve();
            });
            await retry;await assertIdle(app);
            oldGate.resolve();
            await app.page.evaluate(()=>ogeEnsureReferenceAssets());
            assert.equal(app.requests,2);assert.equal(app.downloads,1);
            assert.deepEqual(app.errors,[]);
            await app.page.close();
        });
    } finally {
        releases.forEach(release=>release());
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
