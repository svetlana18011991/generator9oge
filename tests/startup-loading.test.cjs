const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://startup-loading.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const mathStub = 'window.MathJax=window.MathJax||{};MathJax.typesetPromise=()=>Promise.resolve();' +
    'MathJax.typesetClear=()=>{};MathJax.startup={promise:Promise.resolve()};';

function deferred() {
    let resolve;
    const promise = new Promise(done => {resolve=done;});
    return {promise,resolve};
}

test('deferred startup shows a usable page and loads optional images only on demand', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    async function harness(options = {}) {
        const context = await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
        const requests=[],errors=[],dialogs=[],downloads=[];
        if (options.auth !== false) {
            await context.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
        }
        await context.route('**/*', async route => {
            const url = new URL(route.request().url());
            const name = decodeURIComponent(url.pathname).split('/').pop() || 'index.html';
            requests.push(name);
            if (options.hold && options.hold.name === name) await options.hold.gate.promise;
            if (options.fail && options.fail.has(name)) return route.abort();
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:mathStub});
            }
            if (url.origin === origin) {
                const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
                if (filename.startsWith(root+path.sep) && fs.existsSync(filename)) {
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
            }
            return route.abort();
        });
        const page = await context.newPage();
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        page.on('download', download => downloads.push(download));
        return {context,page,requests,errors,dialogs,downloads,
            async close() {options.hold?.gate.resolve();await context.close();}};
    }
    async function ready(page) {
        await page.waitForFunction(() => window.ogeAppReady === true);
        assert.equal(await page.locator('#generation-section').evaluate(node => node.inert),false);
        assert.equal(await page.locator('#generation-section').getAttribute('aria-busy'),'false');
    }
    async function fullVariant(page) {
        await page.locator('.oge-fast-btn').click();
        await page.waitForFunction(() => !document.querySelector('.oge-fast-btn').disabled &&
            window.currentGeneratedTasks?.length === 25);
        const state = await page.evaluate(() => {
            const index=window.ogeVariantSnapshot.findIndex(block => Number(String(block.tid).replace(/\D/g,'')) === 11);
            return {
                numbers:ogeKeyTaskEntries(window.ogeVariantSnapshot).map(task=>task.num).sort((a,b)=>a-b),
                task11SVG:index>=0 && document.querySelectorAll(`#output-section [data-oge-block-index="${index}"] svg`).length>0
            };
        });
        assert.deepEqual(state.numbers,Array.from({length:25},(_,i)=>i+1));
        assert.equal(state.task11SVG,true,'Task 11 must retain its actual graph without the obsolete image banks');
    }
    async function manualStickers(page) {
        await page.evaluate(() => {
            resetTaskCounts();
            const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===6);
            document.getElementById('count-'+tid).value='6';
            document.getElementById('sticker-select').value='cat';
        });
        await page.locator('.oge-manual-btn').click();
        await page.waitForFunction(() => !document.querySelector('.oge-manual-btn').disabled);
    }
    try {
        await t.test('the password form responds while MathJax is still loading', async () => {
            const hold={name:'tex-mml-chtml.js',gate:deferred()};
            const h=await harness({auth:false,hold});
            try {
                await h.page.goto(origin,{waitUntil:'commit'});
                await h.page.locator('#passwordGateInput').waitFor({state:'visible'});
                await h.page.waitForFunction(() => document.readyState === 'interactive');
                assert.equal(await h.page.evaluate(()=>window.ogeAppReady),false);
                assert.equal(await h.page.locator('#generation-section').evaluate(node=>node.inert),true);
                assert.equal(await h.page.locator('#passwordGate [data-oge-startup-notice]').isVisible(),true);
                await h.page.locator('#passwordGateInput').fill('wrong-password-for-regression-test');
                await h.page.locator('#passwordGateForm button[type=submit]').click();
                await h.page.locator('#passwordGateError').waitFor({state:'visible'});
                assert.equal(h.page.url(),origin+'/','The pending deferred banks must not leave the form unhandled');
                assert.equal(await h.page.locator('#passwordGateInput').inputValue(),'');
                hold.gate.resolve();
                await ready(h.page);
                assert.deepEqual(h.errors,[]);
            } finally {await h.close();}
        });

        await t.test('remembered access paints the loading interface before a slow bank finishes', async () => {
            const hold={name:'task11.js',gate:deferred()};
            const h=await harness({hold});
            try {
                await h.page.goto(origin,{waitUntil:'commit'});
                await h.page.waitForFunction(() => document.readyState === 'interactive');
                assert.equal(await h.page.locator('#passwordGate').count(),0);
                assert.equal(await h.page.locator('[data-oge-startup-notice]:visible').count(),1);
                assert.equal(await h.page.locator('#generation-section').isVisible(),true);
                assert.equal(await h.page.locator('#generation-section').evaluate(node=>node.inert),true);
                assert.equal(await h.page.evaluate(()=>window.ogeAppReady),false);
                await h.page.waitForFunction(() => performance.getEntriesByType('paint').some(entry=>entry.name==='first-contentful-paint'));
                hold.gate.resolve();
                await ready(h.page);
                await fullVariant(h.page);
                await h.page.evaluate(() => {
                    document.getElementById('sticker-select').value='cat';
                    return ogeSelectVariant(0);
                });
                assert.equal(h.requests.some(name=>/^task11_images_/.test(name)),false);
                assert.equal(h.requests.includes('offline_assets_bundle.js'),false);
                assert.equal(h.requests.includes('seasonal_backgrounds.js'),false);
                assert.deepEqual(h.errors,[]);
                assert.deepEqual(h.dialogs,[]);
            } finally {await h.close();}
        });

        await t.test('a failed required bank keeps generation locked and a retry can recover', async () => {
            const fail=new Set(['task7.js']),h=await harness({fail});
            try {
                await h.page.goto(origin,{waitUntil:'load'});
                await h.page.waitForFunction(() => window.ogeStartup.state === 'error');
                assert.equal(await h.page.evaluate(()=>window.ogeAppReady),false);
                assert.equal(await h.page.locator('#generation-section').evaluate(node=>node.inert),true);
                const retry=h.page.locator('[data-oge-startup-retry]:visible');
                assert.equal(await retry.count(),1);
                assert.match(await h.page.locator('[data-oge-startup-notice]:visible').textContent(),/Не удалось подготовить генератор/);
                fail.clear();
                const navigation=h.page.waitForNavigation({waitUntil:'load'});
                await retry.click();
                await navigation;
                await ready(h.page);
                await fullVariant(h.page);
                assert.equal(h.requests.filter(name=>name==='task7.js').length,2);
                assert.deepEqual(h.errors,[]);
            } finally {await h.close();}
        });

        await t.test('presentation and sticker consumers share one optional image load', async () => {
            const hold={name:'offline_assets_bundle.js',gate:deferred()},h=await harness({hold});
            try {
                await h.page.goto(origin,{waitUntil:'load'});
                await ready(h.page);
                await fullVariant(h.page);
                assert.equal(h.requests.includes('offline_assets_bundle.js'),false);
                await h.page.evaluate(() => {window.__menuLoad=openPresentationMenu();window.__otherLoad=ogeEnsureOfflineAssets();});
                await h.page.waitForFunction(()=>document.getElementById('pres-modal').getAttribute('aria-busy')==='true');
                assert.equal(await h.page.locator('#pres-modal').isVisible(),true);
                assert.equal(await h.page.locator('#pres-modal .pres-preview-card').evaluateAll(cards=>cards.every(card=>card.inert)),true);
                assert.equal(h.requests.filter(name=>name==='offline_assets_bundle.js').length,1);
                hold.gate.resolve();
                await h.page.evaluate(()=>Promise.all([window.__menuLoad,window.__otherLoad]));
                assert.equal(await h.page.locator('#pres-modal .pres-preview-card').evaluateAll(cards=>cards.every(card=>!card.inert)),true);
                assert.equal(await h.page.evaluate(()=>ogeOfflineAssetsReady()),true);
                assert.match(await h.page.locator('#thumb1').evaluate(node=>node.style.backgroundImage),/data:image/);
                assert.match(await h.page.locator('#thumb3').evaluate(node=>node.style.backgroundImage),/data:image/);
                await h.page.evaluate(()=>document.getElementById('pres-modal').style.display='none');
                await manualStickers(h.page);
                assert.equal(await h.page.evaluate(()=>window.currentGeneratedTasks.length),6);
                assert.ok(await h.page.locator('#output-section img').count()>0,'The manual variant must include its requested sticker');
                assert.equal(h.requests.filter(name=>name==='offline_assets_bundle.js').length,1);
                assert.deepEqual(h.errors,[]);
                assert.deepEqual(h.dialogs,[]);
            } finally {await h.close();}
        });

        await t.test('a failed optional load leaves the generator usable and can be retried', async () => {
            const fail=new Set(['offline_assets_bundle.js']),h=await harness({fail});
            try {
                await h.page.goto(origin,{waitUntil:'load'});
                await ready(h.page);
                await manualStickers(h.page);
                assert.equal(await h.page.evaluate(()=>window.currentGeneratedTasks.length),0);
                assert.equal(await h.page.evaluate(()=>window.ogeAppReady),true);
                assert.match(h.dialogs[0],/Загрузить стикеры не удалось/);
                assert.equal(await h.page.locator('.oge-manual-btn').isDisabled(),false);
                fail.clear();
                await h.page.locator('.oge-manual-btn').click();
                await h.page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled && window.currentGeneratedTasks.length===6);
                assert.ok(await h.page.locator('#output-section img').count()>0);
                assert.equal(h.requests.filter(name=>name==='offline_assets_bundle.js').length,2);
                assert.equal(h.dialogs.length,1);
                assert.deepEqual(h.errors,[]);
            } finally {await h.close();}
        });

        await t.test('a failed seasonal load creates no incomplete download and retries successfully', async () => {
            const fail=new Set(['seasonal_backgrounds.js']),h=await harness({fail});
            try {
                await h.page.goto(origin,{waitUntil:'load'});
                await ready(h.page);
                await fullVariant(h.page);
                await h.page.evaluate(()=>downloadStudentHTML());
                assert.equal(h.downloads.length,0);
                assert.match(h.dialogs[0],/Подготовить интерактивный файл не удалось/);
                assert.equal(await h.page.locator('.btn-html').isDisabled(),false);
                fail.clear();
                const pending=h.page.waitForEvent('download');
                await h.page.evaluate(()=>downloadStudentHTML());
                const download=await pending;
                assert.match(download.suggestedFilename(),/Интерактивный_вариант\.html/);
                assert.equal(h.requests.filter(name=>name==='seasonal_backgrounds.js').length,2);
                assert.equal(h.dialogs.length,1);
                assert.deepEqual(h.errors,[]);
            } finally {await h.close();}
        });

        for (const newerAction of ['full','reset']) {
            await t.test(`pending sticker preparation cannot overwrite a newer ${newerAction} action`, async () => {
                const hold={name:'offline_assets_bundle.js',gate:deferred()},h=await harness({hold});
                try {
                    await h.page.goto(origin,{waitUntil:'load'});
                    await ready(h.page);
                    await h.page.evaluate(() => {
                        const original=safeGenerateVariant;
                        window.safeGenerateVariant=function(...args) {
                            const result=original.apply(this,args);
                            if (args[1]==='manual') window.__pendingManual=result;
                            return result;
                        };
                        resetTaskCounts();
                        const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===6);
                        document.getElementById('count-'+tid).value='6';
                        document.getElementById('sticker-select').value='cat';
                    });
                    const request=h.page.waitForEvent('request', request=>request.url().includes('offline_assets_bundle.js'));
                    await h.page.locator('.oge-manual-btn').click();
                    await request;
                    assert.equal(await h.page.locator('.oge-manual-btn').isDisabled(),true);
                    if (newerAction==='full') {
                        await fullVariant(h.page);
                        await h.page.evaluate(()=>{window.__newSnapshot=window.ogeVariantSnapshot;});
                    } else await h.page.evaluate(()=>resetTaskCounts());
                    hold.gate.resolve();
                    const result=await h.page.evaluate(async () => {
                        await window.__pendingManual;
                        await new Promise(resolve=>setTimeout(resolve,0));
                        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
                        return {
                            tasks:window.currentGeneratedTasks.length,
                            snapshotIsNew:window.ogeVariantSnapshot===window.__newSnapshot,
                            snapshotIsEmpty:window.ogeVariantSnapshot===null,
                            batch:window.ogeVariantBatch.length,
                            manualDisabled:document.querySelector('.oge-manual-btn').disabled
                        };
                    });
                    if (newerAction==='full') {
                        assert.equal(result.tasks,25);
                        assert.equal(result.snapshotIsNew,true);
                        assert.equal(result.batch,1);
                    } else {
                        assert.equal(result.tasks,0);
                        assert.equal(result.snapshotIsEmpty,true);
                        assert.equal(result.batch,0);
                    }
                    assert.equal(result.manualDisabled,false);
                    assert.deepEqual(h.errors,[]);
                    assert.deepEqual(h.dialogs,[]);
                } finally {await h.close();}
            });
        }

        await t.test('an interactive export retains the clicked variant and settings while its CSS loads', async () => {
            const hold={name:'seasonal_backgrounds.js',gate:deferred()},h=await harness({hold});
            try {
                await h.page.goto(origin,{waitUntil:'load'});
                await ready(h.page);
                await h.page.evaluate(() => {
                    resetTaskCounts();
                    const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===6);
                    document.getElementById('count-'+tid).value='1';
                    document.getElementById('theme-select').value='winter';
                    document.getElementById('teacher-name').value='Автор варианта A';
                    document.getElementById('teacher-gender').value='female';
                    document.getElementById('toggle-signature').checked=true;
                    document.getElementById('timer-input').value='7';
                });
                await h.page.locator('.oge-manual-btn').click();
                await h.page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled && window.currentGeneratedTasks.length===1);
                const expectedAnswer=await h.page.locator('#ans-interactive-1').getAttribute('data-ans');
                const request=h.page.waitForEvent('request',request=>request.url().includes('seasonal_backgrounds.js'));
                await h.page.evaluate(()=>{window.__pendingExport=downloadStudentHTML();});
                await request;
                const changed=await h.page.evaluate(answer => {
                    document.getElementById('theme-select').value='summer';
                    document.getElementById('teacher-name').value='Автор варианта B';
                    document.getElementById('timer-input').value='19';
                    const block=window.ogeVariantSnapshot.findIndex(item=>Number(String(item.tid).replace(/\D/g,''))===6);
                    for (let i=0;i<15 && document.getElementById('ans-interactive-1').dataset.ans===answer;i++) {
                        replaceOgeVariantTask(block,0,'inside');
                    }
                    return document.getElementById('ans-interactive-1').dataset.ans;
                },expectedAnswer);
                assert.notEqual(changed,expectedAnswer,'The active variant must really differ before the pending export continues');
                const pending=h.page.waitForEvent('download');
                hold.gate.resolve();
                await h.page.evaluate(()=>window.__pendingExport);
                const download=await pending;
                const exported=fs.readFileSync(await download.path(),'utf8');
                assert.match(exported,/<div class="theme-wrapper bg-winter">/);
                assert.match(exported,/Автор варианта A/);
                assert.doesNotMatch(exported,/Автор варианта B/);
                assert.match(exported,/timeLimit = 7 \* 60/);
                const exportedAnswer=exported.match(/<input\b(?=[^>]*\bid="ans-interactive-1")(?=[^>]*\bdata-ans="([^"]*)")[^>]*>/);
                assert.ok(exportedAnswer,'The downloaded file must include the original task answer');
                assert.equal(exportedAnswer[1],expectedAnswer);
                assert.deepEqual(h.errors,[]);
                assert.deepEqual(h.dialogs,[]);
            } finally {await h.close();}
        });

        await t.test('replacement and variant selection prepare newly requested stickers before changing the preview', async () => {
            for (const operation of ['replace','switch']) {
                const fail=new Set(['offline_assets_bundle.js']),h=await harness({fail});
                try {
                    await h.page.goto(origin,{waitUntil:'load'});
                    await ready(h.page);
                    await h.page.evaluate(() => {
                        resetTaskCounts();
                        const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===6);
                        document.getElementById('count-'+tid).value='6';
                        document.getElementById('sticker-select').value='none';
                    });
                    await h.page.locator('.oge-manual-btn').click();
                    await h.page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled && window.currentGeneratedTasks.length===6);
                    assert.equal(h.requests.includes('offline_assets_bundle.js'),false);
                    await h.page.evaluate(() => {
                        window.__beforeStickerSnapshot=window.ogeVariantSnapshot;
                        window.__beforeStickerHTML=currentInteractiveHTML;
                        document.getElementById('sticker-select').value='cat';
                    });
                    function invoke() {
                        return h.page.evaluate(operation => {
                            if (operation==='switch') return ogeSelectVariant(0);
                            const index=window.ogeVariantSnapshot.findIndex(block=>Number(String(block.tid).replace(/\D/g,''))===6);
                            return replaceOgeVariantTask(index,0,'inside');
                        },operation);
                    }
                    const failed=h.page.waitForEvent('dialog');
                    await invoke();
                    await failed;
                    const unchanged=await h.page.evaluate(()=>({
                        snapshot:window.ogeVariantSnapshot===window.__beforeStickerSnapshot,
                        html:currentInteractiveHTML===window.__beforeStickerHTML,
                        ready:window.ogeAppReady
                    }));
                    assert.deepEqual(unchanged,{snapshot:true,html:true,ready:true},`${operation}: a failed optional request must retain the active variant`);
                    assert.equal(h.requests.filter(name=>name==='offline_assets_bundle.js').length,1);
                    fail.clear();
                    await invoke();
                    await h.page.waitForFunction(()=>ogeOfflineAssetsReady() && document.querySelectorAll('#output-section img').length>0);
                    await h.page.waitForFunction(()=>Array.from(document.querySelectorAll('#output-section img')).every(image=>image.complete && image.naturalWidth>0));
                    const prepared=await h.page.evaluate(async () => {
                        const image=document.querySelector('#output-section img');
                        const response=await fetch(image.src);
                        return {tasks:window.currentGeneratedTasks.length,src:image.src,type:response.headers.get('content-type'),bytes:(await response.arrayBuffer()).byteLength};
                    });
                    assert.equal(prepared.tasks,6);
                    assert.match(prepared.src,/^blob:/,`${operation}: generated stickers must use embedded resources`);
                    assert.match(prepared.type,/^image\//);
                    assert.ok(prepared.bytes>0);
                    assert.equal(h.requests.filter(name=>name==='offline_assets_bundle.js').length,2);
                    assert.equal(h.dialogs.length,1);
                    assert.deepEqual(h.errors,[]);
                } finally {await h.close();}
            }
        });
    } finally {await browser.close();}
});
