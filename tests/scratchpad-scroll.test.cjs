const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname,'..');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://oge-scratchpad.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('long interactive scratchpads scroll and retain writing in both task parts and saved files',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:120000
},async t=>{
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory = fs.mkdtempSync(path.join(os.tmpdir(),'oge-scratchpad-'));
    const errors=[],dialogs=[];
    try {
        const app = await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
        app.on('pageerror',error=>errors.push(error.message));
        app.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        await app.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
        await app.route('**/*',async route=>{
            const url = new URL(route.request().url());
            if (url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax=window.MathJax||{};MathJax.typesetPromise=()=>Promise.resolve();MathJax.startup={promise:Promise.resolve()};'});
            if (url.origin===origin) {
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)&&fs.statSync(filename).isFile()) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
            }
            return route.abort();
        });
        await app.goto(origin,{waitUntil:'load'});
        await app.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});
        const fixtures = await app.evaluate(()=>[6,20].map(number=>{
            const tid=getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===number);
            const data=window.database[tid];
            const protoIndex=data.prototypes.findIndex(proto=>proto.tasks?.length>1&&
                !/<(?:img|image)\b|(?:src|href)=["']https?:/i.test([proto.svg_code,proto.theory_task,proto.theory_sol,...proto.tasks.map(task=>String(task.text||'')+' '+String(task.svg_code||''))].join(' ')));
            return {tid,protoIndex,part:number===6?1:2};
        }));
        assert.ok(fixtures.every(fixture=>fixture.tid&&fixture.protoIndex>=0),'use real self-contained examples from both task parts');
        await app.evaluate(fixtures=>{
            resetTaskCounts();
            document.querySelectorAll('input[id^="count-"]').forEach(input=>input.value='0');
            for(const {tid,protoIndex} of fixtures) {
                window.database[tid].prototypes.forEach((_,index)=>document.getElementById(getPrototypeCheckboxId(tid,index,'main')).checked=index===protoIndex);
                document.getElementById('count-'+tid).value='1';
            }
            document.getElementById('sticker-select').value='none';
            document.getElementById('theme-select').value='none';
            document.getElementById('toggle-explanations').checked=true;
            updateTaskTotal();
        },fixtures);
        await app.locator('.oge-manual-btn').click();
        await app.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled&&window.currentGeneratedTasks.length===2);

        async function openMainDraft(page,part) {
            const block=page.locator(part===2?'.generated-task-block.second-part-task':'.generated-task-block:not(.second-part-task)').first();
            const button=block.getByTitle('Открыть черновик',{exact:true});
            const id=(await block.locator('canvas[id^="canvas-"]').first().getAttribute('id')).slice('canvas-'.length);
            await button.click();
            await page.waitForFunction(id=>window.mainCanvases?.[id]?.canvas.height===1920,id);
            return {id,button,wrapper:page.locator(`[id="draw-wrapper-${id}"]`)};
        }
        async function assertLongDraft(page,id) {
            const dimensions=await page.locator(`[id="canvas-${id}"]`).evaluate(canvas=>{
                const viewport=canvas.parentElement.parentElement;
                return {window:viewport.clientHeight,workspace:viewport.scrollHeight,canvas:canvas.height,overflow:getComputedStyle(viewport).overflowY};
            });
            assert.deepEqual(dimensions,{window:320,workspace:1920,canvas:1920,overflow:'auto'});
        }
        async function lowerInk(page,id) {
            return page.locator(`[id="canvas-${id}"]`).evaluate(canvas=>{
                const pixels=canvas.getContext('2d').getImageData(0,1500,canvas.width,420).data;
                let count=0;for(let index=3;index<pixels.length;index+=4)if(pixels[index])count++;
                return count;
            });
        }
        async function drawNearBottom(page,id) {
            const viewport=page.locator(`[id="canvas-${id}"]`).locator('..').locator('..');
            await viewport.scrollIntoViewIfNeeded();
            let bounds=await viewport.boundingBox();
            await page.mouse.move(bounds.x+Math.min(140,bounds.width/2),bounds.y+160);
            await page.mouse.wheel(0,2400);
            await page.waitForFunction(id=>document.getElementById('canvas-'+id).parentElement.parentElement.scrollTop>=1500,id,{timeout:5000});
            await viewport.scrollIntoViewIfNeeded();
            bounds=await viewport.boundingBox();
            await page.mouse.move(bounds.x+90,bounds.y+180);
            await page.mouse.down();
            await page.mouse.move(bounds.x+170,bounds.y+215,{steps:10});
            await page.mouse.up();
            assert.ok(await lowerInk(page,id)>50,'writing at the scrolled bottom must reach the lower canvas rows');
            const topInk=await page.locator(`[id="canvas-${id}"]`).evaluate(canvas=>{
                const pixels=canvas.getContext('2d').getImageData(0,0,canvas.width,320).data;
                for(let index=3;index<pixels.length;index+=4)if(pixels[index])return true;
                return false;
            });
            assert.equal(topInk,false,'scrolling must not shift bottom strokes into the top of the canvas');
        }

        await t.test('first and second part drafts draw at the bottom, undo, redo and reopen without losing ink',async()=>{
            for(const part of [1,2]) {
                const draft=await openMainDraft(app,part);
                await assertLongDraft(app,draft.id);
                await drawNearBottom(app,draft.id);
                await draft.wrapper.getByTitle('Отменить действие',{exact:true}).click();
                assert.equal(await lowerInk(app,draft.id),0);
                await draft.wrapper.getByTitle('Повторить действие',{exact:true}).click();
                assert.ok(await lowerInk(app,draft.id)>50);
                const retained=await lowerInk(app,draft.id);
                await draft.button.click();await draft.button.click();
                await app.waitForFunction(id=>document.getElementById('draw-wrapper-'+id).style.display==='block',draft.id);
                assert.equal(await lowerInk(app,draft.id),retained,'reopening preserves the existing canvas');
            }
            if(process.env.OGE_SCRATCHPAD_SCREENSHOT)await app.locator('#draw-wrapper-2').screenshot({path:process.env.OGE_SCRATCHPAD_SCREENSHOT});
        });
        await t.test('practice and second-part analogue modals use the same extended scroll area',async()=>{
            for(const part of [1,2]) {
                const block=app.locator(part===2?'.generated-task-block.second-part-task':'.generated-task-block:not(.second-part-task)').first();
                await block.getByRole('button',{name:part===1?'РАЗБОР':'АНАЛОГИ',exact:true}).click();
                const button=app.locator('#modal-content-box').getByTitle(/^Открыть черновик/).first();
                const id=(await button.getAttribute('onclick')).match(/toggleCanvas\('([^']+)'\)/)[1];
                await button.click();
                await app.waitForFunction(id=>window.mainCanvases?.[id]?.canvas.height===1920,id);
                await assertLongDraft(app,id);
                if(part===2)await drawNearBottom(app,id);
                await app.locator('#modal-overlay .close-btn').click();
            }
        });
        await t.test('downloaded interactive files keep both extended drafts working without network or the generator page',async()=>{
            const pending=app.waitForEvent('download');
            await app.locator('button[onclick="downloadStudentHTML()"]').click();
            const download=await pending;
            const filename=path.join(directory,'interactive.html');
            await download.saveAs(filename);
            await app.close();
            const student=await browser.newPage({viewport:{width:1440,height:1000}});
            student.on('pageerror',error=>errors.push(error.message));
            await student.route('**/*',route=>route.abort());
            await student.setContent(fs.readFileSync(filename,'utf8'),{waitUntil:'load'});
            for(const part of [1,2]) {
                const draft=await openMainDraft(student,part);
                await assertLongDraft(student,draft.id);
                await drawNearBottom(student,draft.id);
            }
            await student.close();
        });
        assert.deepEqual(errors,[]);assert.deepEqual(dialogs,[]);
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
