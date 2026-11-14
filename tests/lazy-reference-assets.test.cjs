const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');
const {createHash} = require('node:crypto');

const root = path.resolve(__dirname,'..');
const source = fs.readFileSync(path.join(root,'index.html'),'utf8');
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://reference-export.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium}=require('playwright')); }
catch { try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

// Both reference sheets travel inside the application. No slow or failed
// reference-assets request may become a prerequisite for downloading a variant.
test('reference sheets are built in and never block interactive, game or presentation exports',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:120000
},async t=>{
    const references = ['algebra','geometry'].map(name =>
        'data:image/png;base64,' + fs.readFileSync(path.join(root,'reference_'+name+'_compact.png')).toString('base64'));
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory=fs.mkdtempSync(path.join(os.tmpdir(),'oge-reference-export-'));
    try {
        async function openApp() {
            const page=await browser.newPage({viewport:{width:1440,height:1000}});
            const errors=[],dialogs=[],referenceRequests=[];
            const state={page,errors,dialogs,referenceRequests,downloads:0};
            page.on('pageerror',error=>errors.push(error.message));
            page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
            page.on('download',()=>state.downloads++);
            await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
            await page.route('**/*',async route=>{
                const url=new URL(route.request().url());
                if (/reference_assets(?:_webp)?\.js$/.test(url.pathname)) {
                    referenceRequests.push(url.href);
                    // A real download must succeed even if the old auxiliary
                    // script is permanently unavailable to this browser.
                    return route.abort();
                }
                if(url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
                if(url.origin===origin) {
                    const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                    if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)&&fs.statSync(filename).isFile()) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
                }
                return route.abort();
            });
            await page.goto(origin,{waitUntil:'load'});
            await page.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});
            assert.deepEqual(referenceRequests,[],'opening the generator does not request a reference bundle');
            state.generate=async(number,count)=>{
                await page.evaluate(()=>{
                    document.querySelectorAll('input[id^="count-"]').forEach(input=>input.value='0');
                    document.getElementById('theme-select').value='none';
                    document.getElementById('sticker-select').value='none';
                });
                const tid=await page.evaluate(number=>getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===number),number);
                assert.ok(tid,'the requested exam number is selectable');
                await page.locator('[id="count-'+tid+'"]').fill(String(count));
                await page.locator('.oge-manual-btn').click();
                await page.waitForFunction(count=>!document.querySelector('.oge-manual-btn').disabled&&window.currentGeneratedTasks.length===count,count);
                assert.deepEqual(referenceRequests,[],'selecting and generating tasks does not request a reference bundle');
            };
            return state;
        }
        async function downloaded(app,command,name) {
            const start=Date.now();
            const pending=app.page.waitForEvent('download',{timeout:5000});
            const action=app.page.evaluate(command);
            pending.catch(()=>{});action.catch(()=>{});
            await action;
            const download=await pending,filename=path.join(directory,name);
            const elapsed=Date.now()-start;
            await download.saveAs(filename);
            return {html:fs.readFileSync(filename,'utf8'),elapsed};
        }
        async function assertIdle(app) {
            await app.page.waitForFunction(()=>!document.querySelector('.btn-html').disabled);
            assert.equal(await app.page.locator('#oge-export-reference-status').count(),0);
            assert.notEqual(await app.page.locator('.btn-html').getAttribute('aria-busy'),'true');
            assert.deepEqual(app.dialogs,[]);
            assert.deepEqual(app.errors,[]);
            assert.deepEqual(app.referenceRequests,[]);
        }
        function assertCompleteReferences(html,label) {
            for(const data of references) assert.ok(html.includes(data),label+' contains the original-sized compact reference bytes');
            assert.doesNotMatch(html,/#oge-reference-(?:algebra|geometry)/,label+' has no reference placeholders');
            assert.doesNotMatch(html,/<script\b[^>]*src=["'][^"']*reference_assets(?:_webp)?\.js/i,label+' does not require an auxiliary reference bundle');
        }
        async function assertOfflineHelp(html,label) {
            const recipient=await browser.newContext();
            const page=await recipient.newPage();
            const url=origin+'/saved-'+label+'.html';
            const referenceRequests=[];
            await recipient.route('**/*',route=>{
                const request=route.request().url();
                if(request===url)return route.fulfill({body:html,contentType:'text/html; charset=utf-8'});
                if(/reference_assets|reference_(?:algebra|geometry)_compact\.png/.test(request))referenceRequests.push(request);
                return route.abort();
            });
            try {
                await page.goto(url,{waitUntil:'load'});
                await page.locator('#exam-ref-help-btn').click();
                await page.locator('#exam-ref-help-modal').waitFor({state:'visible'});
                assert.deepEqual(await page.locator('#exam-ref-help-modal .exam-ref-sheet h3').allTextContents(),['Алгебра','Геометрия']);
                assert.equal(await page.locator('#exam-ref-help-modal img').count(),2);
                await page.waitForFunction(()=>[...document.querySelectorAll('#exam-ref-help-modal img')].every(image=>image.complete&&image.naturalWidth===1536&&image.naturalHeight===1024));
                // The shared-image bootstrap converts embedded bytes into Blob
                // URLs. Compare their decoded contents, not the temporary URLs.
                const loaded=await page.locator('#exam-ref-help-modal img').evaluateAll(images=>Promise.all(images.map(async image=>{
                    const blob=await (await fetch(image.src)).blob();
                    return new Promise((resolve,reject)=>{
                        const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);
                    });
                })));
                const digest=data=>createHash('sha256').update(Buffer.from(data.split(',')[1],'base64')).digest('hex');
                assert.deepEqual(loaded.map(digest),references.map(digest),label+' retains both embedded sheets without a network');
                await page.locator('#exam-ref-help-close').click();
                await page.locator('#exam-ref-help-modal').waitFor({state:'hidden'});
                assert.deepEqual(referenceRequests,[],label+' never fetches reference material after reopening');
            } finally {await recipient.close();}
        }

        await t.test('the screenshot flow downloads a second-part interactive immediately and deduplicates clicks',async()=>{
            const app=await openApp();
            try {
                await app.generate(20,3);
                const result=await downloaded(app,()=>{
                    const first=downloadStudentHTML(),second=downloadStudentHTML();
                    window.referenceExportSameJob=first===second;
                    return first;
                },'part-two-interactive.html');
                assert.ok(result.elapsed<2000,'download must not wait for the old 15-second reference timeout: '+result.elapsed+' ms');
                assert.equal(await app.page.evaluate(()=>window.referenceExportSameJob),true);
                assert.equal(app.downloads,1,'duplicate calls produce exactly one interactive file');
                assert.equal(await app.page.locator('#output-section .second-part-task').count(),3);
                await assertIdle(app);
                assertCompleteReferences(result.html,'interactive');
                await assertOfflineHelp(result.html,'interactive');
            } finally {await app.page.close();}
        });

        await t.test('interactive, game and presentation files all retain both reference sheets offline',async()=>{
            const app=await openApp();
            try {
                await app.generate(6,9);
                const formats=[
                    ['interactive',()=>downloadStudentHTML()],
                    ['tower',()=>generateTowerGame()],
                    ['presentation',()=>generatePresentation1()]
                ];
                for(const [label,command]of formats) {
                    const {html}=await downloaded(app,command,label+'.html');
                    assertCompleteReferences(html,label);
                    await assertOfflineHelp(html,label);
                }
                await assertIdle(app);
                assert.equal(app.downloads,3);
            } finally {await app.page.close();}
        });

        await t.test('missing old globals fall back to built-in sheets without retrying a download',async()=>{
            const app=await openApp();
            try {
                await app.generate(20,2);
                await app.page.evaluate(()=>{
                    window.OGE_REFERENCE_ALGEBRA_DATA=undefined;
                    window.OGE_REFERENCE_GEOMETRY_DATA=undefined;
                });
                const result=await downloaded(app,()=>downloadStudentHTML(),'missing-globals.html');
                assert.ok(result.elapsed<2000,'missing legacy globals must not introduce a network wait');
                assertCompleteReferences(result.html,'fallback');
                await assertOfflineHelp(result.html,'fallback');
                await assertIdle(app);
            } finally {await app.page.close();}
        });
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
