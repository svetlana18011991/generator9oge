const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const sourceExamples = require('./fixtures/task20-source-examples.json');
const root = path.resolve(__dirname, '..');
const context = {window:{database:{}}};
vm.runInNewContext(fs.readFileSync(path.join(root,'task20.js'),'utf8'), context);
const bank = context.window.database.task20;
const normalizeQuestion = text => String(text).replace(/\\dfrac/g,'\\frac').replace(/\s+/g,'');
function normalizeAnswer(text) {
    return String(text)
        .replace(/\\frac\{(-?\d+)\}\{(\d+)\}/g,'$1/$2')
        .replace(/\\sqrt\{([^}]+)\}/g,'sqrt($1)')
        .replace(/\\(?:left|right)/g,'')
        .replace(/\\infty/g,'infinity')
        .replace(/\\cup/g,'U')
        .replace(/\\[()]/g,'')
        .replace(/\\[,;! ]/g,'')
        .replace(/\s+/g,'')
        .replace(/\+infinity/g,'infinity');
}
function checkedAnswer(value) {
    if (!Array.isArray(value)) return normalizeAnswer(value);
    return value.map(item => Array.isArray(item) ? `(${item.join(';')})` : item).join(';');
}

test('task 20 keeps all prototypes grouped in the reviewed method order', () => {
    const expected = [
        '20.8','20.3','20.2','20.4','20.17','20.5','20.9','20.7','20.6','20.18',
        '20.11','20.10','20.12','20.13',
        '20.16','20.19','20.20','20.21','20.14','20.15','20.24','20.23','20.22','20.25',
        '20.1'
    ];
    assert.deepEqual(Array.from(bank.prototypes, p => p.code), expected);
    assert.deepEqual(Array.from(bank.prototypes, p => p.topic), [
        ...Array(10).fill('Уравнения'), ...Array(4).fill('Системы уравнений'),
        ...Array(10).fill('Неравенства'), 'Выражения'
    ]);
    const tasks = Array.from(bank.prototypes).flatMap(p => Array.from(p.tasks));
    assert.equal(tasks.length,136);
    assert.equal(new Set(tasks.map(task => task.id)).size,136);
    assert.ok(tasks.every(task => task.text && task.answer));
});

test('both complete PDF variants are present, including the demo systems', () => {
    assert.equal(sourceExamples.length,50);
    assert.equal(new Set(sourceExamples.map(row => `${row.variant}:${row.number}`)).size,50);
    for (const row of sourceExamples) {
        const prototype = bank.prototypes.find(p => p.code === row.prototypeCode);
        assert.ok(prototype, `V${row.variant}/№${row.number}: prototype ${row.prototypeCode}`);
        const matches = prototype.tasks.filter(task => normalizeQuestion(task.text) === normalizeQuestion(row.text));
        assert.equal(matches.length,1, `V${row.variant}/№${row.number}: source example must occur exactly once`);
        if (row.checkedAnswer !== undefined) {
            assert.equal(normalizeAnswer(matches[0].answer), checkedAnswer(row.checkedAnswer),
                `V${row.variant}/№${row.number}: independently calculated answer`);
            assert.ok(matches[0].source.includes(`вариант ${row.variant}, № ${row.number}`));
        }
    }
});

test('shifted reciprocal equation preserves the minus sign and its correct roots', () => {
    const task = bank.prototypes.find(p => p.code === '20.18').tasks.find(t => t.id === '20.18.1');
    assert.match(task.text, /-\\dfrac\{3\}\{x-3\}/);
    assert.equal(normalizeAnswer(task.answer),'2;13/4');
});
