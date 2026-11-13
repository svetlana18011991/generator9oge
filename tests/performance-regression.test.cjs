const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const origin = 'http://performance-regression.test';
// Exercise the same access state as an already authenticated owner's browser.
const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript',
    '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('optimized generation retains independent variants, usable downloads and canvas cleanup', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 180000
}, async t => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'oge-performance-'));
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const context = await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
        const errors = [], dialogs = [], networkImages = [], downloadPages=new Set();
        let student;
        context.on('page', page => {
            page.on('pageerror', error => errors.push(error.message));
            page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
            page.on('request', request => {
                if (downloadPages.has(page) && request.resourceType() === 'image' && /^https?:/.test(request.url())) {
                    networkImages.push(request.url());
                }
            });
        });
        await context.addInitScript(({key,hash}) => {
            try {sessionStorage.setItem(key,hash);} catch {}
        }, {key:sessionKey,hash:passwordHash});
        await context.route('**/*', route => {
            const url = new URL(route.request().url());
            if (url.protocol === 'file:') return route.continue();
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                // Formula rendering has a separate real-MathJax regression. This
                // suite isolates selection, export resources and event lifetimes.
                return route.fulfill({contentType:'application/javascript',body:
                    'window.MathJax=window.MathJax||{};window.__mathClears=0;' +
                    'MathJax.typesetPromise=()=>Promise.resolve();' +
                    'MathJax.typesetClear=()=>{window.__mathClears++;};' +
                    'MathJax.startup={promise:Promise.resolve()};'});
            }
            if (url.origin === origin) {
                const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
                const filename = path.resolve(root, '.' + name);
                if (filename.startsWith(root + path.sep) && fs.existsSync(filename)) {
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
                return route.abort();
            }
            return route.abort();
        });
        const app = await context.newPage();
        await app.goto(origin, {waitUntil:'load'});
        await app.waitForSelector('#dynamic-tasks .task-row', {state:'attached'});
        await app.evaluate(() => {
            let seed=26;
            Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
            window.__generationCalls=0;
            const original=generateVariant;
            window.generateVariant=function(...args){window.__generationCalls++;return original.apply(this,args);};
        });
        async function generate(mode, count=1) {
            await app.evaluate(({mode,count}) => {
                document.getElementById('oge-variant-count').value=String(count);
                window.__generationCalls=0;
                safeGenerateVariant(null,mode);
            }, {mode,count});
            await app.waitForFunction(() => !document.querySelector('.oge-fast-btn').disabled);
            assert.doesNotMatch(await app.locator('#info-board').textContent(), /Ошибка генерации/);
        }
        async function imageHealth(page, selector) {
            await page.locator(selector).evaluateAll(images => images.forEach(image => {image.loading='eager';}));
            await page.waitForFunction(selector => Array.from(document.querySelectorAll(selector)).every(image =>
                image.complete && image.naturalWidth > 0 && !image.src.includes('#oge-image-')
            ), selector, {timeout:15000});
            return page.locator(selector).count();
        }
        let filePolicyReported=false;
        async function openDownloaded(page, filename) {
            if (!filePolicyReported) {
                downloadPages.add(page);
                try {
                    await page.goto(pathToFileURL(filename).href,{waitUntil:'load'});
                    return page;
                } catch (error) {
                    if (!String(error.message).includes('ERR_BLOCKED_BY_ADMINISTRATOR')) throw error;
                    t.diagnostic('This Chromium policy blocks file:// navigation; verifying downloaded HTML in an opaque about:blank document instead. A real file:// smoke test remains environment-dependent.');
                    filePolicyReported=true;
                    await page.close();
                    page=await context.newPage();
                }
            }
            downloadPages.add(page);
            await page.setContent(fs.readFileSync(filename,'utf8'),{waitUntil:'load'});
            assert.equal(await page.evaluate(()=>location.origin),'null');
            return page;
        }
        await t.test('one full variant builds once and its runtime images load', async () => {
            await generate('full');
            const state = await app.evaluate(() => ({
                calls:window.__generationCalls,
                numbers:ogeKeyTaskEntries(window.ogeVariantSnapshot).map(task => task.num).sort((a,b)=>a-b),
                batch:window.ogeVariantBatch.length,
                cards:document.querySelectorAll('#output-section .generated-task-block').length,
                shared:typeof window.ogeCompactEmbeddedImages
            }));
            assert.equal(state.calls,1);
            assert.deepEqual(state.numbers,Array.from({length:25},(_,i)=>i+1));
            assert.equal(state.batch,1);
            assert.equal(state.cards,25);
            assert.equal(state.shared,'function');
            assert.ok(await imageHealth(app,'#output-section img') > 0);
        });
        await t.test('batch variants stay independent, replacement survives switching and keys agree', async () => {
            await generate('full',2);
            const original = await app.evaluate(() => {
                window.__originalSnapshots=window.ogeVariantBatch.map(entry=>entry.snapshot);
                window.__originalTasks=window.ogeVariantSnapshot.flatMap(block=>block.tasks);
                return {
                    count:window.ogeVariantBatch.length,
                    independent:window.ogeVariantBatch[0].snapshot!==window.ogeVariantBatch[1].snapshot,
                    keys:window.ogeVariantBatch.map(entry=>ogeKeyTaskEntries(entry.snapshot)),
                    firstMainBlock:window.ogeVariantSnapshot.findIndex(block=>block.kind==='main' && Number(String(block.tid).replace(/\D/g,''))===6)
                };
            });
            assert.equal(original.count,2);
            assert.equal(original.independent,true);
            assert.notDeepEqual(original.keys[0],original.keys[1]);
            assert.ok(original.firstMainBlock>=0);
            const replacement = await app.evaluate(blockIndex => {
                replaceOgeVariantTask(blockIndex,0,'inside');
                const tasks=window.ogeVariantSnapshot.flatMap(block=>block.tasks);
                const changed=tasks.filter((task,index)=>task!==window.__originalTasks[index]).length;
                window.__replacedTasks=tasks;
                window.__replacedKeys=ogeKeyTaskEntries(window.ogeVariantSnapshot);
                return {changed,untouchedSecond:window.ogeVariantBatch[1].snapshot===window.__originalSnapshots[1]};
            },original.firstMainBlock);
            assert.equal(replacement.changed,1);
            assert.equal(replacement.untouchedSecond,true);
            const restored = await app.evaluate(() => {
                ogeSelectVariant(1);
                const second=ogeKeyTaskEntries(window.ogeVariantSnapshot);
                ogeSelectVariant(0);
                return {
                    second,
                    first:ogeKeyTaskEntries(window.ogeVariantSnapshot),
                    expected:window.__replacedKeys,
                    sameTasks:window.ogeVariantSnapshot.flatMap(block=>block.tasks).every((task,index)=>task===window.__replacedTasks[index]),
                    expectedRows:window.ogeVariantBatch.map(entry=>ogeKeyTaskEntries(entry.snapshot))
                };
            });
            assert.deepEqual(restored.second,original.keys[1]);
            assert.deepEqual(restored.first,restored.expected);
            assert.equal(restored.sameTasks,true);
            const pending=app.waitForEvent('download');
            await app.evaluate(()=>downloadAnswers());
            const download=await pending, filename=path.join(directory,'answers.html');
            await download.saveAs(filename);
            let keys=await context.newPage();
            keys=await openDownloaded(keys,filename);
            const rows=await keys.locator('.key-table tbody tr').evaluateAll(rows=>rows.map(row=>({
                number:Number(row.querySelector('th').textContent),
                values:Array.from(row.querySelectorAll('.key-answer'),cell=>cell.textContent)
            })));
            assert.equal(rows.length,25);
            for (const row of rows) {
                assert.deepEqual(row.values,restored.expectedRows.map(tasks=>tasks.find(task=>task.num===row.number).answer));
            }
            await keys.close();
        });
        await t.test('repeated drawing and regeneration release global canvas handlers', async () => {
            const cdp=await context.newCDPSession(app);
            async function listenerCounts() {
                const {result}=await cdp.send('Runtime.evaluate',{expression:'window'});
                const {listeners}=await cdp.send('DOMDebugger.getEventListeners',{objectId:result.objectId});
                await cdp.send('Runtime.releaseObject',{objectId:result.objectId});
                return Object.fromEntries(['mouseup','touchend'].map(type=>[type,listeners.filter(listener=>listener.type===type).length]));
            }
            const baseline=await listenerCounts();
            for (let cycle=0;cycle<3;cycle++) {
                await app.bringToFront();
                const id=await app.evaluate(() => {
                    const canvas=document.querySelector('#output-section canvas[id^="canvas-"]');
                    const id=canvas.id.slice('canvas-'.length);window.toggleCanvas(id);return id;
                });
                await app.waitForFunction(id=>Boolean(window.mainCanvases[id]),id);
                const opened=await listenerCounts();
                assert.equal(opened.mouseup,baseline.mouseup+1);
                assert.equal(opened.touchend,baseline.touchend+1);
                await app.locator(`[id="canvas-${id}"]`).evaluate(canvas=>canvas.scrollIntoView({behavior:'instant',block:'center'}));
                const box=await app.locator(`[id="canvas-${id}"]`).boundingBox();
                assert.ok(box && box.width>0 && box.height>0);
                await app.evaluate(id=>{
                    window.setTool(id,'pen');
                    const canvas=document.getElementById('canvas-'+id), box=canvas.getBoundingClientRect();
                    const x=box.left+box.width*0.7,y=box.top+40;
                    canvas.dispatchEvent(new MouseEvent('mousedown',{clientX:x,clientY:y,buttons:1,bubbles:true}));
                    canvas.dispatchEvent(new MouseEvent('mousemove',{clientX:x+30,clientY:y+30,buttons:1,bubbles:true}));
                    window.dispatchEvent(new MouseEvent('mouseup',{clientX:x+30,clientY:y+30,bubbles:true}));
                },id);
                assert.ok(await app.evaluate(id=>window.mainCanvases[id].objects.length,id)>0);
                await generate('full');
                assert.deepEqual(await listenerCounts(),baseline);
            }
            assert.ok(await app.evaluate(()=>window.__mathClears)>0);
            await cdp.detach();
        });
        await t.test('downloaded HTML hydrates visible and hidden diagrams from a local or opaque origin', async () => {
            await app.evaluate(() => {
                resetTaskCounts();
                document.getElementById('practice-scenario-theme-tariff').click();
                document.querySelectorAll('[data-practice-scenario-theme-id="tariff"]').forEach(box => {
                    box.checked=box.dataset.practiceScenarioIndexId==='0';
                });
                handlePracticeScenarioCheckboxChange('tariff');
                document.getElementById('count-practice-scenarios').value='1';
                const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===6);
                document.getElementById('count-'+tid).value='1';
            });
            await generate('manual');
            assert.equal(await app.evaluate(()=>window.__generationCalls),1);
            assert.ok(await imageHealth(app,'#output-section img')>0);
            const pending=app.waitForEvent('download');
            await app.evaluate(()=>downloadStudentHTML());
            const download=await pending, filename=path.join(directory,'interactive.html');
            await download.saveAs(filename);
            const saved=fs.readFileSync(filename,'utf8');
            assert.match(saved,/data-oge-shared-images/);
            assert.doesNotMatch(saved,/blob:http(?:%3A|:)/);
            student=await context.newPage();
            student=await openDownloaded(student,filename);
            assert.ok(new URL(student.url()).protocol==='file:' || await student.evaluate(()=>location.origin)==='null');
            assert.ok(await imageHealth(student,'img')>0);
            const hidden=await student.evaluate(() => {
                const data=document.querySelector('[id^="theory-data-"]');
                const before=document.querySelectorAll('#modal-content-box img').length;
                window.openTheoryModalLocal(data.id);
                return {before,after:document.querySelectorAll('#modal-content-box img').length};
            });
            assert.equal(hidden.before,0);
            assert.ok(hidden.after>0);
            await imageHealth(student,'#modal-content-box img');
            await student.evaluate(()=>document.getElementById('modal-overlay').style.display='none');
            const id=await student.evaluate(() => {
                const canvas=document.querySelector('canvas[id^="canvas-"]');
                const id=canvas.id.slice('canvas-'.length);window.toggleCanvas(id);return id;
            });
            await student.waitForFunction(id=>Boolean(window.mainCanvases[id]),id);
            await imageHealth(student,`[id="draw-wrapper-${id}"] img`);
            await student.evaluate(id=>window.toggleDraftZoom(id,false),id);
            assert.equal(await student.locator('#draft-zoom-modal-global').count(),1);
            assert.ok(await imageHealth(student,'#draft-zoom-modal-global img')>0);
            assert.deepEqual(networkImages,[]);
            await student.close();
        });
        await t.test('all four seasonal exports preserve their backgrounds after the generator closes', async () => {
            const rules=Array.from(source.matchAll(/\.bg-(winter|spring|summer|autumn)\s*\{[^}]*\}/g));
            assert.equal(rules.length,4,'Each seasonal rule should occur once in the source, not in both the page and export template');
            const expected=new Map();
            for (const rule of rules) {
                const image=rule[0].match(/url\(['"]?([^'"\)]+)['"]?\)/)[1];
                assert.ok(!image.startsWith('data:'),'Seasonal images should load only when selected');
                const bytes=fs.readFileSync(path.join(root,image));
                let checksum=2166136261;
                for (const byte of bytes) checksum=Math.imul(checksum^byte,16777619)>>>0;
                expected.set(rule[1],{length:bytes.length,checksum});
            }
            const exports=[];
            for (const theme of ['winter','spring','summer','autumn']) {
                const pending=app.waitForEvent('download');
                await app.evaluate(theme=>{
                    document.getElementById('theme-select').value=theme;
                    handleThemeChange();
                    downloadStudentHTML();
                },theme);
                const download=await pending, filename=path.join(directory,`interactive-${theme}.html`);
                await download.saveAs(filename);
                exports.push({theme,filename});
            }
            // A download must own its resources. No generator-owned Blob URL
            // may be required after this point.
            await app.close();
            for (const {theme,filename} of exports) {
                let page=await context.newPage();
                page=await openDownloaded(page,filename);
                await page.waitForFunction(()=>getComputedStyle(document.querySelector('.theme-wrapper')).backgroundImage.includes('blob:'));
                const appearance=await page.evaluate(async()=>{
                    const css=getComputedStyle(document.querySelector('.theme-wrapper'));
                    const image=css.backgroundImage.match(/^url\(["']?(.*?)["']?\)$/)[1];
                    const bytes=new Uint8Array(await (await fetch(image)).arrayBuffer());
                    let checksum=2166136261;
                    for (const byte of bytes) checksum=Math.imul(checksum^byte,16777619)>>>0;
                    return {
                        color:css.backgroundColor,position:css.backgroundPosition,
                        size:css.backgroundSize,repeat:css.backgroundRepeat,attachment:css.backgroundAttachment,
                        length:bytes.length,checksum
                    };
                });
                assert.deepEqual({length:appearance.length,checksum:appearance.checksum},expected.get(theme),`${theme} background bytes changed`);
                assert.equal(appearance.color,theme==='spring'?'rgb(246, 249, 242)':'rgb(244, 247, 246)');
                assert.equal(appearance.position,'50% 0%');
                assert.equal(appearance.size,'cover');
                assert.equal(appearance.repeat,'no-repeat');
                assert.equal(appearance.attachment,'fixed');
                assert.ok(await imageHealth(page,'img')>0);
                await page.close();
            }
            assert.deepEqual(networkImages,[]);
        });
        assert.deepEqual(dialogs,[]);
        assert.deepEqual(errors,[]);
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
