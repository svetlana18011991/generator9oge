const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://startup-loading.test';
const optional = new Set(['offline_assets_bundle.js', 'export-resources.js']);
const mime = {'.html':'text/html; charset=utf-8', '.js':'application/javascript', '.woff':'font/woff',
    '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
function deferred() {
    let resolve;
    const promise = new Promise(done => {resolve=done;});
    return {promise, resolve};
}

test('startup remains usable during slow banks and optional download resources never block opening', {
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:180000
}, async t => {
    const browser = await chromium.launch({executablePath:executable, headless:true, args:['--no-sandbox']});
    const contexts = [];
    async function harness({authenticated=true, hold, fail=new Set(), bodies=new Map()}={}) {
        const context = await browser.newContext({acceptDownloads:true,viewport:{width:1440,height:1000}});
        contexts.push(context);
        if (authenticated) await context.addInitScript(({key,hash}) => {
            try {sessionStorage.setItem(key,hash);} catch {}
        }, {key:sessionKey,hash:passwordHash});
        const requests=[],errors=[],dialogs=[],downloads=[];
        await context.route('**/*', async route => {
            const url = new URL(route.request().url());
            const name = decodeURIComponent(url.pathname).split('/').pop() || 'index.html';
            requests.push(name);
            if (hold && hold.name === name) {hold.requested.resolve();await hold.gate.promise;}
            if (fail.has(name)) return route.abort();
            if (bodies.has(name)) return route.fulfill({contentType:'application/javascript',body:bodies.get(name)});
            if (url.origin !== origin) return route.abort();
            const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
            if (!filename.startsWith(root+path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) return route.abort();
            return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
        });
        const page = await context.newPage();
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        page.on('download', download => downloads.push(download));
        return {context,page,requests,errors,dialogs,downloads,fail,bodies};
    }
    async function ready(page) {
        await page.waitForFunction(() => window.ogeAppReady === true);
        assert.equal(await page.locator('#generation-section').evaluate(node=>node.inert), false);
    }
    async function generateFull(app) {
        await app.page.evaluate(() => {
            let seed=26;
            Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
            document.getElementById('oge-variant-count').value='1';
            safeGenerateVariant(null,'full');
        });
        await app.page.waitForFunction(() => window.ogeVariantSnapshot?.length && !document.querySelector('.oge-fast-btn').disabled);
        await app.page.evaluate(() => MathJax.startup.promise);
    }
    try {
        await t.test('the login form works before the first required script responds', async () => {
            const hold={name:'tex-mml-chtml.js',requested:deferred(),gate:deferred()};
            const app=await harness({authenticated:false,hold});
            await app.page.goto(origin,{waitUntil:'commit'});
            await hold.requested.promise;
            await app.page.locator('#passwordGateInput').waitFor({state:'visible'});
            assert.equal(await app.page.evaluate(()=>document.readyState),'interactive');
            const masked=await app.page.locator('#passwordGateInput').evaluate(node=>node.classList.contains('password-gate-masked'));
            await app.page.locator('#passwordGateEye').click();
            assert.equal(await app.page.locator('#passwordGateInput').evaluate(node=>node.classList.contains('password-gate-masked')), !masked);
            await app.page.locator('#passwordGateInput').fill('incorrect-startup-test-password');
            await app.page.locator('#passwordGateForm button[type="submit"]').click();
            assert.equal(await app.page.locator('#passwordGateError').isVisible(),true);
            assert.equal(await app.page.evaluate(()=>window.ogeAppReady),false);
            assert.deepEqual(app.requests.filter(name=>optional.has(name)),[]);
            hold.gate.resolve();
            await ready(app.page);
            assert.deepEqual(app.errors,[]);
            await app.context.close();
        });
        await t.test('remembered access opens before held banks; generation waits, then renders all 25 numbers with real MathJax', async () => {
            const hold={name:'task25.js',requested:deferred(),gate:deferred()};
            const app=await harness({hold});
            await app.page.goto(origin,{waitUntil:'commit'});
            await hold.requested.promise;
            await app.page.locator('#generation-section').waitFor({state:'visible'});
            assert.equal(await app.page.locator('#passwordGate').count(),0);
            assert.equal(await app.page.locator('#generation-section').evaluate(node=>node.inert),true);
            assert.equal(await app.page.evaluate(()=>window.ogeAppReady),false);
            assert.equal(await app.page.locator('#output-section .generated-task-block').count(),0);
            assert.deepEqual(app.requests.filter(name=>optional.has(name)),[]);
            hold.gate.resolve();
            await ready(app.page);
            await generateFull(app);
            const state=await app.page.evaluate(()=>({
                numbers:ogeKeyTaskEntries(window.ogeVariantSnapshot).map(task=>task.num).sort((a,b)=>a-b),
                cards:document.querySelectorAll('#output-section .generated-task-block').length,
                math:document.querySelectorAll('#output-section mjx-container').length,
                errors:[...document.querySelectorAll('#output-section mjx-merror')].map(node=>node.textContent)
            }));
            assert.deepEqual(state.numbers,Array.from({length:25},(_,i)=>i+1));
            assert.equal(state.cards,25);
            assert.ok(state.math>=20);
            assert.deepEqual(state.errors,[]);
            assert.deepEqual(app.requests.filter(name=>optional.has(name)),[],'Full generation does not require decorative/download bundles');
            assert.deepEqual(app.errors,[]);
            await app.context.close();
        });
        await t.test('a missing required bank keeps generation disabled and reload retries successfully', async () => {
            const app=await harness({fail:new Set(['task25.js'])});
            await app.page.goto(origin,{waitUntil:'load'});
            await app.page.waitForFunction(()=>document.getElementById('startup-message').textContent.includes('Не удалось'));
            assert.equal(await app.page.evaluate(()=>window.ogeAppReady),false);
            assert.equal(await app.page.locator('#generation-section').evaluate(node=>node.inert),true);
            assert.equal(await app.page.locator('#startup-retry').isVisible(),true);
            app.fail.clear();
            await Promise.all([app.page.waitForEvent('domcontentloaded'),app.page.locator('#startup-retry').click()]);
            await ready(app.page);
            assert.deepEqual(app.requests.filter(name=>optional.has(name)),[]);
            await app.context.close();
        });
        await t.test('a runtime error in a required bank cannot silently produce an incomplete application', async () => {
            const app=await harness({bodies:new Map([['task25.js','throw new Error("Required bank test failure");']])});
            await app.page.goto(origin,{waitUntil:'load'});
            await app.page.waitForFunction(()=>document.getElementById('startup-message').textContent.includes('Не удалось'));
            assert.equal(await app.page.evaluate(()=>window.ogeAppReady),false);
            assert.equal(await app.page.locator('#generation-section').evaluate(node=>node.inert),true);
            assert.ok(app.errors.some(message=>message.includes('Required bank test failure')));
            await app.context.close();
        });
        await t.test('failed optional export resources can be retried; seasonal, sticker and presentation exports retain embedded resources', async () => {
            const app=await harness({fail:new Set(['export-resources.js'])});
            await app.page.goto(origin,{waitUntil:'load'});
            await ready(app.page);
            await generateFull(app);
            assert.deepEqual(app.requests.filter(name=>optional.has(name)),[]);
            await app.page.evaluate(()=>{document.getElementById('theme-select').value='winter';});
            await app.page.evaluate(()=>downloadStudentHTML());
            assert.equal(app.downloads.length,0);
            assert.ok(app.dialogs.some(message=>message.includes('Не удалось подготовить материалы')));
            assert.equal(await app.page.locator('#generation-section').evaluate(node=>node.inert),false);
            app.fail.clear();
            let pending=app.page.waitForEvent('download');
            await app.page.evaluate(()=>downloadStudentHTML());
            let download=await pending;
            const saved=fs.readFileSync(await download.path(),'utf8');
            assert.ok(/data-oge-offline-mathjax/.test(saved));
            assert.ok(/\.bg-winter\s*\{[^}]*#oge-image-/.test(saved), 'The seasonal CSS uses an embedded shared image');
            assert.ok(saved.includes('data:image/jpeg;base64,'), 'The standalone file contains the JPEG bytes');
            assert.ok(!/<script\b[^>]*src="https?:[^\"]*mathjax/i.test(saved));
            assert.equal(app.requests.filter(name=>name==='export-resources.js').length,2);
            const stickerData=await app.page.evaluate(async()=>{
                document.getElementById('sticker-select').value='cat';
                document.querySelectorAll('#dynamic-tasks input[type="number"]').forEach(input=>{input.value='0';});
                const six=document.getElementById('count-6')||document.getElementById('count-task6');
                six.value='3';
                await safeGenerateVariant(null,'manual');
                return Object.entries(window.EMBEDDED_ASSETS).filter(([name])=>/^cat_\d+\.png$/.test(name)).map(([,source])=>source);
            });
            await app.page.waitForFunction(()=>window.currentGeneratedTasks?.length===3 && !document.querySelector('.oge-fast-btn').disabled);
            pending=app.page.waitForEvent('download');
            await app.page.evaluate(()=>downloadStudentHTML());
            download=await pending;
            const stickerHTML=fs.readFileSync(await download.path(),'utf8');
            assert.ok(/data-oge-shared-images/.test(stickerHTML));
            assert.ok(stickerData.some(source=>stickerHTML.includes(source)),'The standalone file includes actual sticker bytes');
            const pictureName=fs.readdirSync(path.join(root,'assets/bank')).find(name=>name.endsWith('.png'));
            const picturePath='assets/bank/'+pictureName;
            const pictureData='data:image/png;base64,'+fs.readFileSync(path.join(root,picturePath)).toString('base64');
            await app.page.evaluate(picturePath=>{
                window.currentGeneratedTasks[0].svg='<img alt="Bank diagram fixture" src="'+picturePath+'">';
                window.currentGeneratedTasks[0].theory='<p>Hidden diagram</p><img src="'+picturePath+'">';
            },picturePath);
            pending=app.page.waitForEvent('download');
            await app.page.evaluate(()=>generatePresentation1());
            download=await pending;
            const presentation=fs.readFileSync(await download.path(),'utf8');
            assert.ok(/pres-bg-title[^}]*(?:data:image\/jpeg;base64,|#oge-image-)/.test(presentation), 'Presentation title background is embedded');
            assert.ok(presentation.includes('data:image/jpeg;base64,'));
            assert.ok(presentation.includes('exam-ref-help-modal'));
            assert.ok(!/assets(?:\/|%2F|%252F)bank(?:\/|%2F|%252F)/i.test(presentation), 'Presentation embeds bank diagram references, including hidden encodings');
            assert.ok(presentation.includes(pictureData) || presentation.includes(encodeURIComponent(pictureData)));
            pending=app.page.waitForEvent('download');
            await app.page.evaluate(()=>generateBattleGame());
            download=await pending;
            const battle=fs.readFileSync(await download.path(),'utf8');
            assert.ok(battle.includes('window.__BATTLE_CFG__'));
            assert.ok(!/assets(?:\/|%2F|%252F)bank(?:\/|%2F|%252F)/i.test(battle), 'Battle embeds its prompt and scratchpad diagrams');
            assert.ok(battle.includes(pictureData) || battle.includes(encodeURIComponent(pictureData)));
            assert.deepEqual(app.errors,[]);
            await app.context.close();
        });
    } finally {await Promise.allSettled(contexts.map(context=>context.close()));await browser.close();}
});
