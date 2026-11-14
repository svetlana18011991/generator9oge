const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const root = path.resolve(__dirname,'..');
const source = fs.readFileSync(path.join(root,'index.html'),'utf8');
const origin = 'http://fraction-answer.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.woff':'font/woff','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml'};
let chromium;
try { ({chromium}=require('playwright')); } catch {
    try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const cases = [
    {number:20,id:'20.6',numerator:'1',denominator:'6'},
    {number:22,id:'22.13',numerator:'49',denominator:'25'},
    {number:23,id:'23.2.1',numerator:'120',denominator:'13'},
    {number:25,id:'25.1.2',numerator:'16',denominator:'3'},
    {number:25,id:'25.2.7',numerator:'28√3',denominator:'3',radical:true}
];

// Read actual MathJax glyphs and geometry: merely finding TeX or stacked numbers
// would not catch the reported missing fraction bar.
async function fractionState(page,selector) {
    await page.waitForSelector(selector+' mjx-mfrac',{state:'visible'});
    await page.evaluate(()=>document.fonts.ready);
    return page.locator(selector+' mjx-mfrac').first().evaluate(frac=>{
        const glyphs=node=>[...node.querySelectorAll('mjx-c')].map(c=>{
            const match=c.className.match(/\bmjx-c([0-9A-F]+)\b/i);
            return match?String.fromCodePoint(parseInt(match[1],16)):'';
        }).join('');
        const num=frac.querySelector('mjx-num'),den=frac.querySelector('mjx-den'),line=frac.querySelector('mjx-line');
        const nr=num.getBoundingClientRect(),dr=den.getBoundingClientRect(),lr=line?.getBoundingClientRect(),style=line&&getComputedStyle(line);
        return {numerator:glyphs(num),denominator:glyphs(den),root:!!num.querySelector('mjx-msqrt'),
            visibleBar:!!lr&&lr.width>2&&parseFloat(style.borderTopWidth)>0&&style.borderTopStyle!=='none',
            stacked:nr.y<dr.y,errors:frac.closest('mjx-container').querySelectorAll('mjx-merror').length};
    });
}
function assertFraction(state,expected) {
    assert.equal(state.numerator,expected.numerator);
    assert.equal(state.denominator,expected.denominator);
    assert.equal(state.root,!!expected.radical);
    assert.equal(state.visibleBar,true,'fraction has a visible horizontal bar');
    assert.equal(state.stacked,true,'numerator lies above denominator');
    assert.equal(state.errors,0);
}

test('real fraction answers render in previews, analogues, keys and saved files; generated input removes whitespace',{
    skip:!chromium||!fs.existsSync(executable)?'Requires Playwright and Chromium':false,
    timeout:120000
},async t=>{
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
    const errors=[];
    async function serveLocal(route) {
        const url=new URL(route.request().url());
        let relative;
        if(url.origin===origin) relative=decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname);
        else return route.abort();
        const filename=path.resolve(root,'.'+relative);
        if(!filename.startsWith(root+path.sep)||!fs.existsSync(filename)||!fs.statSync(filename).isFile())return route.abort();
        return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
    }
    try {
        await context.addInitScript(({key,hash})=>{try{sessionStorage.setItem(key,hash);}catch{}},{
            key:source.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1],hash:source.match(/var PASSWORD_HASH = (\d+);/)[1]
        });
        await context.route('**/*',serveLocal);
        const app=await context.newPage();app.on('pageerror',e=>errors.push(e.message));
        await app.goto(origin,{waitUntil:'load'});await app.evaluate(()=>MathJax.startup.promise);
        const selected=await app.evaluate(cases=>{
            document.getElementById('sticker-select').value='none';
            document.getElementById('toggle-instant-check').checked=true;
            document.getElementById('toggle-show-correct').checked=true;
            const tid=n=>getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===n);
            const firstBank=window.database[tid(6)],firstProto=firstBank.prototypes[0];
            const snapshot=[{tid:tid(6),kind:'main',data:firstBank,tasks:firstProto.tasks.slice(0,2).map(task=>({...task,theory:firstProto}))}];
            for(const item of cases){
                const bank=window.database[tid(item.number)],proto=bank.prototypes.find(p=>p.tasks.some(task=>task.id===item.id));
                if(!proto)throw Error('Missing real source task '+item.id);
                const task=proto.tasks.find(task=>task.id===item.id);
                const previous=snapshot[snapshot.length-1];
                if(previous.tid===tid(item.number))previous.tasks.push({...task,theory:proto});
                else snapshot.push({tid:tid(item.number),kind:'main',data:bank,tasks:[{...task,theory:proto}]});
            }
            generateVariant({snapshot});
            return {answers:firstProto.tasks.slice(0,2).map(task=>String(task.answer)),count:window.currentGeneratedTasks.length};
        },cases);
        assert.equal(selected.count,7);
        await t.test('second-part answer buttons and an analogue render real bars',async()=>{
            for(let i=0;i<cases.length;i++){
                const number=i+3;await app.locator('#second-answer-btn-'+number).click();
                assertFraction(await fractionState(app,'#second-final-answer-'+number),cases[i]);
            }
            const block=app.locator('#output-section .generated-task-block').nth(4);
            await block.getByRole('button',{name:'АНАЛОГИ',exact:true}).click();
            await app.waitForSelector('#modal-content-box .theory-analog-task mjx-mfrac',{state:'attached'});
            const found=await app.evaluate(()=>{
                const list=[...document.querySelectorAll('#modal-content-box .theory-analog-task')];
                const item=list.find(li=>li.querySelector('[hidden] mjx-mfrac')||[...li.querySelectorAll('[hidden]')].some(box=>box.textContent.includes('frac')));
                if(!item)return false;item.id='fraction-regression-analogue';item.querySelector('button[onclick*="b.hidden"]').click();return true;
            });
            assert.equal(found,true,'use a real unselected fraction analogue');
            const state=await fractionState(app,'#fraction-regression-analogue');
            assert.equal(state.visibleBar,true);assert.equal(state.stacked,true);assert.equal(state.errors,0);
            await app.locator('#modal-overlay .close-btn').click();
        });
        let studentHTML;
        await t.test('the downloaded interactive renders fractions offline and checks spaced inputs',async()=>{
            const pending=app.waitForEvent('download');await app.evaluate(()=>downloadStudentHTML());
            const download=await pending;studentHTML=fs.readFileSync(await download.path(),'utf8');
            assert.doesNotMatch(studentHTML,/replace\(\/s\+\/g/,'the emitted input regex retains its whitespace escape');
            const recipient=await browser.newContext({viewport:{width:1440,height:1000}}),requests=[];
            const url=origin+'/saved-student.html';await recipient.route('**/*',route=>{
                if(route.request().url()===url)return route.fulfill({body:studentHTML,contentType:'text/html; charset=utf-8'});
                requests.push(route.request().url());return route.abort();
            });
            const page=await recipient.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(url,{waitUntil:'load'});await page.evaluate(()=>MathJax.startup.promise);
            for(let i=0;i<cases.length;i++){
                const number=i+3;await page.locator('#second-answer-btn-'+number).click();
                assertFraction(await fractionState(page,'#second-final-answer-'+number),cases[i]);
            }
            assert.deepEqual(await page.evaluate(()=>[normalizeAnswer(' a s\t'),normalizeAnswer('− 12\u00a034'),normalizeAnswer('s')]),['as','-1234','s']);
            const spaced=answer=>' \t'+answer.split('').join(' \u00a0')+'\n';
            await page.locator('#ans-interactive-1').fill(spaced(selected.answers[0]));
            await page.locator('#ans-interactive-1').locator('..').locator('.btn-instant').click();
            assert.equal(await page.locator('#feedback-1').evaluate(el=>el.classList.contains('correct')),true);
            await page.locator('#ans-interactive-2').fill(spaced(selected.answers[1]));
            await page.evaluate(()=>checkAll());
            assert.equal(await page.locator('#feedback-2').evaluate(el=>el.classList.contains('correct')),true);
            assert.deepEqual(requests.filter(url=>/mathjax|\.woff2?(?:\?|$)/i.test(url)),[],'formula rendering needs no external scripts or fonts');await recipient.close();
        });
        await t.test('downloaded keys render all five representative fraction answers without network access',async()=>{
            const pending=app.waitForEvent('download');await app.evaluate(()=>downloadAnswers());
            const download=await pending,keys=fs.readFileSync(await download.path(),'utf8'),url=origin+'/saved-keys.html';
            const recipient=await browser.newContext(),requests=[];
            await recipient.route('**/*',route=>{
                if(route.request().url()===url)return route.fulfill({body:keys,contentType:'text/html; charset=utf-8'});
                requests.push(route.request().url());return route.abort();
            });
            const page=await recipient.newPage();page.on('pageerror',e=>errors.push(e.message));
            await page.goto(url,{waitUntil:'load'});await page.evaluate(()=>MathJax.startup.promise);
            for(let i=0;i<cases.length;i++)assertFraction(await fractionState(page,'.key-table tbody tr:nth-child('+(i+3)+') .key-answer'),cases[i]);
            assert.deepEqual(requests,[],'keys require no network requests');await recipient.close();
        });
        assert.deepEqual(errors,[]);
    }finally{await context.close();await browser.close();}
});
