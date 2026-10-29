const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const expected = require('./fixtures/workbook-1-5.json').themes;
const normalize = value => String(value).replace('.', ',');

function loadPractice() {
    const window = { database: {} };
    const context = vm.createContext({ window, console });
    const head = html.slice(0, html.indexOf('<script src="task6.js"'));
    for (const [, filename] of head.matchAll(/<script src="([^"?]+)(?:\?[^"<>]*)?"><\/script>/g)) {
        if (/practice|tariff_plot|plot_plan|scenario|tires_2_2|workbook/.test(filename)) {
            vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, { filename });
        }
    }
    return window.ogePracticeDatabase;
}
const db = loadPractice();

test('only the eight workbook themes are available', () => {
    assert.deepEqual(Object.keys(db), Object.keys(expected));
});
for (const [id, reference] of Object.entries(expected)) {
    test(`${reference.title}: catalog prototypes and answers match the workbook`, () => {
        const catalog = db[id].catalog.prototypes;
        assert.deepEqual(Array.from(catalog, task => ({id:task.id, answer:normalize(task.answer)})), reference.catalog);
        for (const task of catalog) {
            assert.equal(task.examNumber, Number(task.id.split('.')[0]));
            assert.ok(task.text && task.solution, `${id}/${task.id}: statement and explanation`);
            assert.ok(task.accepts.map(normalize).includes(normalize(task.answer)));
        }
    });
    test(`${reference.title}: exactly three complete workbook variants`, () => {
        assert.equal(db[id].scenarios.length, 3);
        db[id].scenarios.forEach((scenario, index) => {
            assert.ok(scenario.common, `${id}/${index}: common condition`);
            if (id !== 'stove') assert.ok(scenario.imageHTML, `${id}/${index}: diagram`);
            const answers = [1,2,3,4,5].map(n => {
                assert.equal(scenario.tasks[n].length, 1, `${id}/${index}/№${n}: no extra question variants`);
                const task = scenario.tasks[n][0];
                assert.ok(task.text && task.solution, `${id}/${index}/№${n}: statement and explanation`);
                assert.ok(task.accepts.map(normalize).includes(normalize(task.answer)));
                return normalize(task.answer);
            });
            assert.deepEqual(answers, reference.variants[index].answers);
        });
    });
}

test('all local diagrams used by catalogs and variants exist', () => {
    const strings = [];
    for (const theme of Object.values(db)) {
        strings.push(theme.catalog.common, theme.catalog.imageHTML);
        for (const task of theme.catalog.prototypes) strings.push(task.text, task.imageHTML, task.theoryImageHTML);
        for (const scenario of theme.scenarios) {
            strings.push(scenario.common, scenario.imageHTML);
            for (const tasks of Object.values(scenario.tasks)) {
                for (const task of tasks) strings.push(task.text, task.imageHTML, task.theoryImageHTML);
            }
        }
    }
    for (const content of strings) {
        for (const [,src] of String(content || '').matchAll(/<img[^>]*\bsrc=["']([^"']+)/g)) {
            if (/^(data:|https?:)/.test(src)) continue;
            assert.ok(fs.existsSync(path.join(root, src.split('?')[0])), src);
        }
    }
});

function generatorContext({sets = 0, trainer = false} = {}) {
    const document = {
        getElementById(id) {
            if (id === 'count-practice-scenarios') return {value: String(sets)};
            if (id.startsWith('practice-trainer-theme-')) return {checked:trainer};
            if (id.startsWith('practice-scenario-')) return {checked:true};
            return null;
        },
        querySelectorAll(selector) {
            if (selector.includes('data-practice-scenario-task-index')) return [];
            return [{dataset:{practiceScenarioTaskIndex:'0'}}];
        }
    };
    const context = vm.createContext({ window:{ogePracticeDatabase:db}, document,
        shuffleArray: items => items.slice().reverse(),
        ogeTaskReplacementKey: task => task.typeId || task.id,
        stripDiagramsFromHTML: value => value,
        extractFirstDiagramHTML: () => '',
        ogePracticeOutputStyles: () => '',
        makeOgePracticeIntro: () => '',
        makeOgePracticeStandalone: (_a,_b,_c,_d,task) => task.text,
        makeOgeScenarioGameStatement: (_a,_b,_c,_d,task) => task.text
    });
    const selectors = html.slice(html.indexOf('function getOgeTrainerThemeIds()'), html.indexOf('function renderPracticeCatalog('));
    const catalogSelector = html.slice(html.indexOf('function getSelectedCatalogPrototypes('), html.indexOf('function ogePracticeOutputStyles()'));
    const builder = html.slice(html.indexOf('function buildOgePracticeTasks('), html.indexOf('// ===== Дополнительные прототипы:'));
    vm.runInContext(selectors + '\n' + catalogSelector + '\n' + builder, context);
    return context;
}

test('custom generation produces every workbook set with its five linked questions', () => {
    const context = generatorContext({sets:24});
    const output = vm.runInContext('buildOgePracticeTasks({innerHTML:"",style:{}},true)', context);
    assert.equal(output.trainerTasks.length, 0);
    assert.equal(output.scenarioTasks.length, 120);
    const groups = new Map();
    for (let i=0; i<120; i+=5) {
        const five = output.scenarioTasks.slice(i,i+5);
        assert.deepEqual(Array.from(five,t=>t.examNumber), [1,2,3,4,5]);
        assert.equal(new Set(five.map(t=>t.__ogeScenarioMeta.scenario.id)).size,1);
        const meta = five[0].__ogeScenarioMeta;
        const referenceTheme = Object.keys(db).find(id => db[id].scenarios.includes(meta.scenario));
        const index = db[referenceTheme].scenarios.indexOf(meta.scenario);
        assert.deepEqual(Array.from(five,t=>normalize(t.answer)), expected[referenceTheme].variants[index].answers);
        groups.set(meta.scenario, (groups.get(meta.scenario)||0)+1);
    }
    assert.equal(groups.size,24);
    assert.ok([...groups.values()].every(count=>count===1));
});

test('trainer includes all 139 workbook prototypes once', () => {
    const context = generatorContext({trainer:true});
    const output = vm.runInContext('buildOgePracticeTasks({innerHTML:"",style:{}},true)',context);
    assert.equal(output.trainerTasks.length,139);
    assert.equal(output.scenarioTasks.length,0);
    const keys=Array.from(output.trainerTasks,t=>t.__ogeTrainerMeta.themeId+'/'+t.__ogeTrainerMeta.proto.id);
    assert.equal(new Set(keys).size,139);
});

test('quick full-variant generation uses the same restricted workbook bank', () => {
    const context = generatorContext();
    const output = vm.runInContext('buildOgePracticeTasks({innerHTML:"",style:{}},false,new Map(),true)',context);
    assert.equal(output.trainerTasks.length,0);
    assert.equal(output.scenarioTasks.length,5);
    const scenario=output.scenarioTasks[0].__ogeScenarioMeta.scenario;
    assert.ok(Object.values(db).some(theme=>theme.scenarios.includes(scenario)));
    assert.ok(output.scenarioTasks.every(task=>task.__ogeScenarioMeta.scenario===scenario));
});
