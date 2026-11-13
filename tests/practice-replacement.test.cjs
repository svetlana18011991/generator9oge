const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
let chromium;
try { ({chromium} = require('playwright')); }
catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); }
    catch { /* Keep the suite usable without optional browser dependencies. */ }
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};

test('practice replacement immediately updates preview and export data', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout: 120000
}, async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const page = await browser.newPage({viewport:{width:1440,height:1000}});
        const errors = [], dialogs = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('dialog', async dialog => {dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash), {key:sessionKey,hash:passwordHash});
        await page.route('**/*', async route => {
            const url = new URL(route.request().url());
            if (url.origin === 'http://practice-replacement.test') {
                const filename = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
                if (filename.startsWith(root + path.sep) && fs.existsSync(filename)) {
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)] || 'application/octet-stream'});
                }
            }
            if (url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            }
            return route.abort();
        });
        await page.goto('http://practice-replacement.test', {waitUntil:'load'});
        await page.waitForSelector('#practice-scenario-theme-stove', {state:'attached'});

        async function scenarioReplacement(themeId, number, mode) {
            return page.evaluate(({themeId,number,mode}) => {
                resetTaskCounts();
                document.getElementById('practice-scenario-theme-' + themeId).checked = true;
                document.getElementById('practice-scenario-' + themeId + '-0').checked = true;
                document.getElementById('count-practice-scenarios').value = '1';
                const tasks = buildOgePracticeTasks({innerHTML:'',style:{}},true).scenarioTasks;
                const old = tasks[number-1], meta = old.__ogeScenarioMeta;
                // Workbook stories with one question per type need a controlled
                // numerical analogue to exercise their diagram/export rules.
                const next = mode === 'type'
                    ? meta.scenario.tasks[number].find(task => task.typeId !== meta.chosen.typeId)
                    : {...meta.chosen,id:'numerical-control-'+number,text:'<p>Контрольное числовое условие 501.</p>',answer:'501',accepts:['501'],solution:'Разбор 501.'};
                if (!next) throw Error('No replacement fixture');
                meta.candidates = [meta.chosen,next];
                generateVariant({snapshot:[{tid:'__oge_scenarios__',kind:'practice',data:{title:'Практика'},tasks}]});
                window.ogeVariantBatch = [ogeBuildBatchEntry()];
                const before = window.ogeVariantSnapshot[0].tasks;
                replaceOgeVariantTask(0,number-1,mode);
                const current = window.ogeVariantSnapshot[0].tasks, item = current[number-1];
                const game = window.currentGeneratedTasks[number-1];
                return {
                    changed:item.__ogeScenarioMeta.chosen === next,
                    othersStable:current.every((task,index) => index === number-1 || task === before[index]),
                    type:item.__ogeScenarioMeta.selectedTypeId,
                    expectedType:next.typeId,
                    gameStatement:game.text === window.ogeKeepMathHTML(makeOgeScenarioGameStatement(meta.themeTitle,meta.scenario,meta.setNumber,number,next)),
                    presentation:game.presentationText === game.text,
                    gameDiagram:game.svg === (next.gameSvg||next.draftSvg||next.imageHTML||next.svg_code||meta.diagramHTML||''),
                    printDiagramEmpty:item.printSvg === '',
                    ownDiagram:!!item.printSvg && /data-oge-own-diagram="1"/.test(item.printSvg),
                    answer:game.answer,
                    expectedAnswer:String(next.answer),
                    preview:document.querySelector(`[data-oge-block-index="0"][data-oge-item-index="${number-1}"]`).textContent.includes(next.text.replace(/<[^>]*>/g,'')),
                    print:currentPrintHTML.includes(next.text),
                    batch:window.ogeVariantBatch[0].snapshot[0].tasks[number-1] === item && window.ogeVariantBatch[0].printHTML === currentPrintHTML
                };
            }, {themeId,number,mode});
        }

        await t.test('a changed tariff type keeps the shared plan in games and presentations for question 5', async () => {
            const result = await scenarioReplacement('tariff',5,'type');
            for (const key of ['changed','othersStable','gameStatement','presentation','gameDiagram','preview','print','batch']) assert.equal(result[key],true,key);
            assert.equal(result.type,result.expectedType);
            assert.equal(result.answer,result.expectedAnswer);
        });
        await t.test('a numerical stove replacement preserves the question 5 casing diagram', async () => {
            const result = await scenarioReplacement('stove',5,'inside');
            for (const key of ['changed','othersStable','gameStatement','presentation','gameDiagram','ownDiagram','preview','print','batch']) assert.equal(result[key],true,key);
            assert.equal(result.answer,'501');
            assert.equal(result.type,result.expectedType);
        });
        await t.test('a numerical stove replacement keeps question 1 free of a duplicated print diagram', async () => {
            const result = await scenarioReplacement('stove',1,'inside');
            assert.equal(result.changed,true);
            assert.equal(result.printDiagramEmpty,true);
            assert.equal(result.gameDiagram,true);
            assert.equal(result.batch,true);
        });
        await t.test('a new catalog type refreshes table and layout data while preserving its position', async () => {
            const result = await page.evaluate(() => {
                resetTaskCounts();
                document.getElementById('practice-trainer-theme-tariff').checked = true;
                const tasks = buildOgePracticeTasks({innerHTML:'',style:{}},true).trainerTasks;
                const old = tasks.find(task => task.examNumber === 5);
                const proto = {...old.__ogeTrainerMeta.proto,id:'5.control',text:'<p>Контрольный тип 902.</p>',answer:'902',accepts:['902'],common:'<p>Условие нового типа.</p>',imageHTML:'',svg_code:'',theoryImageHTML:'',printLayout:'control',printGridHeight:157,printCompact:false,printBreakBefore:false};
                old.__ogeTrainerMeta.candidates = [old.__ogeTrainerMeta.proto,proto];
                generateVariant({snapshot:[{tid:'__oge_trainer__',kind:'practice',data:{title:'Каталог'},tasks:[old]}]});
                window.ogeVariantBatch = [ogeBuildBatchEntry()];
                replaceOgeVariantTask(0,0,'type');
                const item = window.ogeVariantSnapshot[0].tasks[0];
                return {type:item.__ogeTrainerMeta.proto.id,answer:window.currentGeneratedTasks[0].answer,
                    table:item.presentationHasTable,gameCommon:window.currentGeneratedTasks[0].text.includes(proto.common),
                    presentationCommon:window.currentGeneratedTasks[0].presentationText.includes(proto.common),
                    layout:item.printLayout,height:item.printGridHeight,compact:item.printCompact,breakBefore:item.printBreakBefore,
                    theoryImage:item.theory.svg_code,analogs:item.theory.tasks.length,
                    before:item.beforeHTML === old.beforeHTML,after:item.afterHTML === old.afterHTML,
                    batch:window.ogeVariantBatch[0].snapshot[0].tasks[0] === item};
            });
            assert.deepEqual(result,{type:'5.control',answer:'902',table:false,gameCommon:true,presentationCommon:true,layout:'control',height:157,compact:false,breakBefore:false,theoryImage:'',analogs:1,before:true,after:true,batch:true});
        });
        assert.deepEqual(dialogs,[]);
        assert.deepEqual(errors,[]);
    } finally {
        await browser.close();
    }
});
