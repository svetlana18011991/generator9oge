const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const origin = 'http://geometry-theory.test';
const mime = {'.html':'text/html; charset=utf-8', '.js':'application/javascript',
    '.woff':'font/woff', '.svg':'image/svg+xml', '.png':'image/png',
    '.jpg':'image/jpeg', '.webp':'image/webp'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

// Read image bytes as well as vector markup: different tasks in #18 use
// different PNG drawings, so checking only for an <img> would miss substitutions.
async function diagramSignatures(page, selector) {
    return page.locator(selector).evaluateAll(async roots => {
        async function signature(root) {
            if (!root) return [];
            const visuals = [...root.querySelectorAll('svg,img')].filter(el => !el.closest('mjx-container'));
            return Promise.all(visuals.map(async visual => {
                if (visual.tagName.toLowerCase() === 'svg') return {svg:visual.outerHTML};
                const blob = await (await fetch(visual.getAttribute('src'))).blob();
                const bytes = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
                return {image:bytes};
            }));
        }
        return Promise.all(roots.map(signature));
    });
}

test('geometry analogs retain the matching diagram in breakdowns and drawable scratchpads, including offline exports', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:90000
}, async t => {
    const browser = await chromium.launch({executablePath:executable, headless:true, args:['--no-sandbox']});
    try {
        const editor = await browser.newContext({acceptDownloads:true, viewport:{width:1440,height:1100}});
        const sessionKey = source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
        const passwordHash = source.match(/var PASSWORD_HASH = (\d+);/)[1];
        await editor.addInitScript(({key, hash}) => {
            try {sessionStorage.setItem(key, hash);} catch {}
        }, {key:sessionKey, hash:passwordHash});
        await editor.route('**/*', async route => {
            const url = new URL(route.request().url());
            if (url.origin !== origin) return route.abort();
            const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
            if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) return route.abort();
            return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
        });
        const page = await editor.newPage();
        const editorErrors = [];
        page.on('pageerror', error => editorErrors.push(error.message));
        await page.goto(origin, {waitUntil:'load'});
        await page.evaluate(() => MathJax.startup.promise);
        const groups = await page.evaluate(() => {
            document.getElementById('toggle-explanations').checked = true;
            document.getElementById('timer-input').value = '0';
            document.getElementById('sticker-select').value = 'none';
            document.getElementById('toggle-signature').checked = false;
            const snapshot = [], expected = [];
            const selections = [15,16,17,18].map(number => ({
                number,kind:'main',bank:window.database['task'+number],
                proto:window.database['task'+number].prototypes[0]
            }));
            const extra = getExtraTaskData('task15');
            selections.push({number:15,kind:'extra',bank:extra,
                proto:extra.prototypes.find(proto => new Set(proto.tasks.map(task => task.svg_code)).size > 1)});
            const drawing = (name, shape) => `<svg data-test-geometry="${name}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">${shape}</svg>`;
            const common = drawing('common','<path d="M10 90 L60 10 L110 90 Z" fill="none" stroke="black"/>');
            const own = drawing('own-svg','<circle cx="60" cy="50" r="30" fill="none" stroke="black"/>');
            const inline = drawing('inline-text','<rect x="10" y="15" width="85" height="65" fill="none" stroke="black"/>');
            const fixtureProto = {desc:'Геометрия: индивидуальные источники',svg_code:common,
                theory_task:'Найдите площадь фигуры.',theory_sol:'Используйте формулу площади.',tasks:[
                    {text:'Аналог с отдельным полем svg.',answer:'1',svg:own},
                    {text:'Аналог с чертежом в условии.'+inline,answer:'2'},
                    {text:'Аналог с общим чертежом прототипа.',answer:'3'}
                ]};
            selections.push({number:15,kind:'main',bank:{title:'Задание 15. Источники рисунков',prototypes:[fixtureProto]},proto:fixtureProto});
            for (const {number,kind,bank,proto} of selections) {
                if (!proto || !proto.tasks?.length) throw new Error('Missing geometry fixture '+number+' '+kind);
                const chosen = proto.tasks[0];
                snapshot.push({tid:'task'+number,kind,data:bank,tasks:[{
                    ...chosen,svg:chosen.svg_code || chosen.svg || proto.svg_code || '',theory:proto
                }]});
                const diagrams = proto.tasks.map(task => {
                    const holder=document.createElement('div');
                    holder.innerHTML=task.svg_code || task.svg || (task.text.includes('<svg') ? task.text.match(/<svg\b[\s\S]*?<\/svg>/i)[0] : proto.svg_code) || '';
                    autoFixSVGArrows(holder);
                    return holder.innerHTML;
                });
                expected.push({number,kind,label:proto.desc,diagrams});
            }
            generateVariant({snapshot});
            window.testGeometryExpected = expected;
            // Keep expected sources outside the generated page. Normalization
            // uses the same public arrow sanitizer as every displayed diagram.
            return expected;
        });
        await page.waitForSelector('#output-section [id^="theory-data-"]', {state:'attached'});
        await page.evaluate(() => MathJax.typesetPromise([document.getElementById('output-section')]));

        // Normalize expected SVG markup and PNG bytes independently of the
        // output helper, before images are packed into portable blob references.
        const expected = await page.evaluate(async groups => {
            return Promise.all(groups.map(async group => ({...group,diagrams:await Promise.all(group.diagrams.map(async html => {
                const holder=document.createElement('div');holder.innerHTML=html;
                return Promise.all([...holder.querySelectorAll('svg,img')].map(async visual => {
                    if(visual.tagName.toLowerCase()==='svg') return {svg:visual.outerHTML};
                    const blob=await(await fetch(visual.getAttribute('src'))).blob();
                    const image=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);});
                    return {image};
                }));
            }))})));
        }, groups);

        async function drawStroke(targetPage, canvasId) {
        await targetPage.waitForFunction(id => !!window.mainCanvases[id],canvasId);
        const canvas=targetPage.locator('#canvas-'+canvasId);
        await canvas.scrollIntoViewIfNeeded();
        const rect=await canvas.boundingBox();
        assert.ok(rect && rect.width>100 && rect.height>100);
        const x=rect.x+rect.width*.7,y=rect.y+rect.height*.5;
        await targetPage.mouse.move(x,y);
        await targetPage.mouse.down();
        await targetPage.mouse.move(x+25,y+15,{steps:3});
        await targetPage.mouse.up();
        assert.equal(await targetPage.evaluate(id => window.mainCanvases[id].objects.length,canvasId),1,'The pencil creates a stroke over the diagram');
        }

        async function checkBreakdowns(targetPage, mode) {
            for (let groupIndex=0;groupIndex<expected.length;groupIndex++) {
                const group = expected[groupIndex], taskNumber=groupIndex+1;
                await t.test(`${mode}: ${group.label}`, async () => {
                    await targetPage.evaluate(async id => {
                        let pending=Promise.resolve();
                        const original=MathJax.typesetPromise;
                        MathJax.typesetPromise=(...args)=>(pending=original.apply(MathJax,args));
                        try {openTheoryModalLocal(id);await pending;}
                        finally {MathJax.typesetPromise=original;}
                    }, 'theory-data-'+taskNumber);
                    const analogs = targetPage.locator('#modal-content-box > ul > li');
                    assert.equal(await analogs.count(),group.diagrams.length);
                    const displayed = await diagramSignatures(targetPage,'#modal-content-box > ul > li .theory-analog-task-diagram');
                    assert.deepEqual(displayed,group.diagrams,'Each analog displays its own drawing or the shared prototype drawing');
                    const scratch = await diagramSignatures(targetPage,'#modal-content-box > ul > li [id^="draft-diagram-card-analog-"]');
                    assert.deepEqual(scratch,group.diagrams,'The matching drawing is also present in every analog scratchpad');

                    if (groupIndex === 0) {
                        for (const [role, diagramClass] of [['current','theory-current-task-diagram'],['example','theory-task-diagram']]) {
                            const topId='theory-'+role+'-'+taskNumber;
                            const shown=await diagramSignatures(targetPage,'#modal-content-box .'+diagramClass);
                            const draft=await diagramSignatures(targetPage,'#draft-diagram-card-'+topId);
                            assert.deepEqual(shown,[group.diagrams[0]],role+' shows the prototype drawing');
                            assert.deepEqual(draft,shown,role+' scratchpad preserves the displayed drawing');
                            const topPencil=targetPage.locator('#modal-content-box button[title="Открыть черновик для этой задачи"][onclick*="'+topId+'"]');
                            await topPencil.click();
                            await drawStroke(targetPage,topId);
                            await topPencil.click();
                        }
                    }

                    const pencil=analogs.first().locator('button[title="Открыть черновик для этого аналога"]');
                    await pencil.click();
                    const canvasId='analog-'+taskNumber+'-1';
                    await drawStroke(targetPage,canvasId);
                    await targetPage.locator('#modal-overlay .close-btn').click();
                });
            }
        }
        await checkBreakdowns(page,'editor');
        assert.deepEqual(editorErrors,[]);
        const downloadReady=page.waitForEvent('download');
        await page.evaluate(()=>downloadStudentHTML());
        const download=await downloadReady;
        const html=await fs.promises.readFile(await download.path(),'utf8');
        const recipient=await browser.newContext({viewport:{width:1440,height:1100}});
        const savedURL=origin+'/saved.html',external=[],errors=[];
        await recipient.route('**/*',route=>{
            const url=route.request().url();
            if(url===savedURL)return route.fulfill({contentType:'text/html; charset=utf-8',body:html});
            if(/^https?:/.test(url))external.push(url);
            return route.abort();
        });
        const saved=await recipient.newPage();
        saved.on('pageerror',error=>errors.push(error.message));
        await saved.goto(savedURL,{waitUntil:'load'});
        await saved.evaluate(()=>MathJax.startup.promise);
        await checkBreakdowns(saved,'offline export');
        assert.deepEqual(errors,[]);
        assert.deepEqual(external.filter(url=>/mathjax|\.woff|\.(?:png|svg|jpg|webp)(?:$|\?)/i.test(url)),[]);
    } finally {
        await browser.close();
    }
});
