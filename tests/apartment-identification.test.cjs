const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const defaultAnswers = [
    ['2347','12','15,84','680','29700'],
    ['2376','32','4,8','200','1000'],
    ['2146','9','20','125','28800']
];
const expected = {
    '1.4': {objects:['Коридор','Кладовая','Спальня','Гостиная'], answer:'2346'},
    '1.5': {objects:['Санузел','Кладовая','Спальня','Гостиная'], answer:'1346'}
};
const originalPlanHash = 'f9628daf344e360726f50e6667228d179eec23632e831b5df10149ae8b87e3b2';
const context = vm.createContext({window:{database:{}},console,document:{readyState:'loading',addEventListener(){}}});
// Read the actual script order, including deferred scripts and the last literal corrections.
for (const [,filename] of html.slice(0,html.indexOf('</head>')).matchAll(/<script\b[^>]*src="([^"?]+)(?:\?[^"<>]*)?"[^>]*>/g)) {
    if (/practice|tariff_plot|plot_plan|scenario|tires_2_2|workbook/.test(filename)) {
        vm.runInContext(fs.readFileSync(path.join(root,filename),'utf8'),context,{filename});
    }
}
const apartment = context.window.ogePracticeDatabase.apartment;
const normalized = text => text.replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim().toLowerCase();
function assertObjectTable(text, id) {
    const tables = [...text.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)];
    assert.equal(tables.length,1,`${id}: one object table`);
    const rows = [...tables[0][1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)]
        .map(row => [...row[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)].map(cell=>normalized(cell[1])));
    assert.deepEqual(rows,[['объекты',...expected[id].objects.map(s=>s.toLowerCase())],['цифры','','','','']],`${id}: ordered objects and blank response cells`);
    assert.ok(!normalized(text).includes(expected[id].answer),`${id}: answer is absent from the question`);
}

test('apartment 1.4 and 1.5 include their object tables after all bank overrides', () => {
    assert.equal(createHash('sha256').update(apartment.catalog.imageHTML).digest('hex'),originalPlanHash);
    for (const id of Object.keys(expected)) {
        const task = apartment.catalog.prototypes.find(task=>task.id===id);
        assertObjectTable(task.text,id);
        assert.equal(task.answer,expected[id].answer);
        assert.deepEqual(Array.from(task.accepts),[expected[id].answer]);
        assert.equal(task.imageHTML,apartment.catalog.imageHTML,'Original numbered apartment plan is preserved');
    }
});

test('each apartment set exposes corrected optional questions without changing workbook defaults', () => {
    assert.equal(apartment.scenarios.length,3);
    apartment.scenarios.forEach((scenario,index) => {
        assert.equal(scenario.imageHTML,apartment.catalog.imageHTML);
        const defaults = [1,2,3,4,5].map(number => {
            const selected = scenario.tasks[number].filter(task=>task.workbookDefault!==false);
            assert.equal(selected.length,1,`${scenario.id}/№${number}: one default`);
            assert.equal(selected[0],scenario.tasks[number][0]);
            assert.equal(selected[0].sourcePrototypeId,`${number}.${index+1}`);
            return String(selected[0].answer).replace('.',',');
        });
        assert.deepEqual(defaults,defaultAnswers[index]);
        for (const id of Object.keys(expected)) {
            const choices = scenario.tasks[1].filter(task=>task.sourcePrototypeId===id);
            assert.equal(choices.length,1,`${scenario.id}: ${id} available once`);
            assert.equal(choices[0].workbookDefault,false);
            assertObjectTable(choices[0].text,id);
            assert.equal(choices[0].answer,expected[id].answer);
        }
    });
});

let chromium;
try { ({chromium}=require('playwright')); }
catch { try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const origin = 'http://apartment-identification.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};

test('corrected tables reach generated trainer, scenario, and student outputs', {
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:180000
}, async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory = fs.mkdtempSync(path.join(os.tmpdir(),'apartment-identification-'));
    try {
        const page = await browser.newPage({viewport:{width:1440,height:1000}});
        const errors=[],dialogs=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{
            key:html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1],
            hash:html.match(/var PASSWORD_HASH = (\d+);/)[1]
        });
        await page.route('**/*',async route=>{
            const url=new URL(route.request().url());
            if (url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            if (url.origin===origin) {
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        await page.waitForSelector('#practice-trainer-theme-apartment',{state:'attached'});

        async function generateAndCheck(ids,taskCount) {
            await page.locator('.oge-manual-btn').click();
            await page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled);
            const result=await page.evaluate(ids=>{
                const tableRows=source=>{
                    const div=document.createElement('div');div.innerHTML=source;
                    return [...div.querySelectorAll('table.common-table')].map(table=>[...table.rows].map(row=>[...row.cells].map(cell=>cell.textContent.trim().toLowerCase())));
                };
                const print=document.createElement('div');print.innerHTML=currentPrintHTML;
                const printed=[...print.querySelectorAll('.task-print-block')];
                const tasks=(window.ogeVariantSnapshot||[]).flatMap(block=>block.tasks||[]);
                return {count:tasks.length,checks:ids.map(id=>{
                    const index=tasks.findIndex(task=>(task.__ogeTrainerMeta?.proto.id||task.__ogeScenarioMeta?.chosen.sourcePrototypeId)===id);
                    if(index<0) throw Error('Missing generated apartment '+id);
                    const item=tasks[index],game=window.currentGeneratedTasks[index];
                    const preview=document.querySelector(`[data-oge-item-index="${index}"]`);
                    const proto=item.__ogeTrainerMeta?.proto||item.__ogeScenarioMeta.chosen;
                    const diagram=item.__ogeTrainerMeta?.commonImageHTML||item.__ogeScenarioMeta.diagramHTML;
                    return {id,index,sourceText:item.text,answer:game.answer,accepts:game.accepts,
                        statement:tableRows(item.text),preview:tableRows(preview.innerHTML),print:tableRows(printed[index].innerHTML),
                        game:tableRows(game.text),presentation:tableRows(game.presentationText),
                        originalDiagram:game.svg===diagram&&!!diagram,
                        sourceDiagram:!proto.imageHTML||proto.imageHTML===window.ogePracticeDatabase.apartment.catalog.imageHTML};
                })};
            },ids);
            assert.equal(result.count,taskCount);
            for(const check of result.checks) {
                const rows=[['объекты',...expected[check.id].objects.map(s=>s.toLowerCase())],['цифры','','','','']];
                for(const output of ['statement','preview','print','game','presentation']) assert.deepEqual(check[output],[rows],`${check.id}/${output}`);
                assert.equal(check.answer,expected[check.id].answer);
                assert.deepEqual(check.accepts,[expected[check.id].answer]);
                assert.equal(check.originalDiagram,true,`${check.id}: original plan in game`);
                assert.equal(check.sourceDiagram,true);
            }
            const pending=page.waitForEvent('download');
            await page.evaluate(()=>downloadStudentHTML());
            const download=await pending;
            const filename=path.join(directory,'interactive.html');
            await download.saveAs(filename);
            const saved=fs.readFileSync(filename,'utf8');
            // Check the exported statement independently of answer-checking and modal data.
            const blocks=saved.split(/<div\b[^>]*class="generated-task-block\b[^>]*>/).slice(1);
            assert.equal(blocks.length,taskCount);
            for(const check of result.checks) {
                const statement=blocks[check.index].split(/<script\b/)[0];
                assert.ok(statement.includes(check.sourceText),`${check.id}: full question is preserved in the student file`);
                assertObjectTable(check.sourceText,check.id);
                assertObjectTable(statement.match(/<table\b[^>]*>[\s\S]*?<\/table>/i)[0],check.id);
                assert.doesNotMatch(statement,/oge-replace-bar/);
            }
        }

        await t.test('trainer contains both corrected prototypes',async()=>{
            await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
            await page.locator('#practice-trainer-row .row-header .btn-settings').click();
            await page.locator('#practice-trainer-theme-apartment').check();
            await generateAndCheck(Object.keys(expected),apartment.catalog.prototypes.length);
        });
        await t.test('each extra prototype can be selected as question 1 in a five-question set',async()=>{
            await page.locator('#practice-scenarios-row .row-header .btn-settings').click();
            for(const [scenarioIndex,id] of Object.keys(expected).entries()) {
                await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
                await page.locator('#practice-scenario-theme-apartment').check();
                if(!await page.locator('#practice-scenario-apartment-0').isVisible()) await page.locator('.practice-theme-level').filter({has:page.locator('#practice-scenario-theme-apartment')}).getByRole('button',{name:'Сюжеты',exact:true}).click();
                for(let index=0;index<3;index++) if(index!==scenarioIndex) await page.locator(`#practice-scenario-apartment-${index}`).uncheck();
                const options=page.locator(`[data-practice-scenario-theme="apartment"][data-practice-scenario-index="${scenarioIndex}"][data-practice-scenario-number="1"][data-practice-scenario-task-index]`);
                if(!await options.first().isVisible()) await page.locator('.practice-scenario-card').filter({has:page.locator(`#practice-scenario-apartment-${scenarioIndex}`)}).getByRole('button',{name:'Задания',exact:true}).click();
                const taskIndex=apartment.scenarios[scenarioIndex].tasks[1].findIndex(task=>task.sourcePrototypeId===id);
                await options.nth(taskIndex).check();
                await options.nth(0).uncheck();
                await page.locator('#count-practice-scenarios').fill('1');
                await generateAndCheck([id],5);
            }
        });
        assert.deepEqual(dialogs,[]);
        assert.deepEqual(errors,[]);
    } finally {
        await browser.close();
        fs.rmSync(directory,{recursive:true,force:true});
    }
});
