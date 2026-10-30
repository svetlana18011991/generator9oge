const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const reference = require('./fixtures/task10-workbook.json');
const context = {window:{database:{}}};
vm.runInNewContext(fs.readFileSync(path.resolve(__dirname,'../task10.js'),'utf8'),context);
const bank = context.window.database.task10;
const number = text => Number(String(text).replace(/\{,\}/g,',').replace(',','.'));
const compact = text => String(text).replace(/\s+/g,' ').replace(/N\s+\(/g,'N(').trim();
const attributes = tag => Object.fromEntries(Array.from(tag.matchAll(/([\w-]+)="([^"]*)"/g),m => [m[1],m[2]]));
const close = (actual,expected,message) => assert.ok(Math.abs(actual-expected)<1e-10,`${message}: ${actual} != ${expected}`);

function diagramAreas(svg,model) {
    const ellipses = Array.from(svg.matchAll(/<ellipse\b[^>]*>/g),m => attributes(m[0]));
    assert.equal(ellipses.length,2);
    const region = (x,y) => {
        const inside = e => ((x-Number(e.cx))/Number(e.rx))**2+((y-Number(e.cy))/Number(e.ry))**2 < 1;
        const a=inside(ellipses[0]),b=inside(ellipses[1]);
        return a?(b?2:1):(b?3:0);
    };
    if (model === 'pointProbabilities') {
        const result=[[],[],[],[]];
        for (const match of svg.matchAll(/(<circle\b[^>]*\/>)(<text\b[^>]*>)([^<]+)<\/text>/g)) {
            const p=attributes(match[1]);
            result[region(Number(p.cx),Number(p.cy))].push(number(match[3]));
        }
        assert.ok(result.every(area => area.length > 0));
        return result;
    }
    const result=[0,0,0,0];
    if (model === 'dots') {
        for (const match of svg.matchAll(/<circle\b[^>]*\/>/g)) {
            const p=attributes(match[0]);result[region(Number(p.cx),Number(p.cy))]++;
        }
    } else {
        for (const match of svg.matchAll(/(<text\b[^>]*>)([^<]+)<\/text>/g)) {
            const value=number(match[2]);
            if (!Number.isFinite(value)) continue;
            const p=attributes(match[1]);result[region(Number(p.x),Number(p.y))]=value;
        }
    }
    return result;
}
const events = ['A','B','A\\cup B','A\\cap B','\\overline{A}\\cap B','A\\cap\\overline{B}',
    '\\overline{A}\\cup B','A\\cup\\overline{B}','\\overline{A\\cap B}','\\overline{A\\cup B}'];
const masks = [[1,2],[2,3],[1,2,3],[2],[3],[1],[0,2,3],[0,1,2],[0,1,3],[0]];
const lastEvent = text => Array.from(text.matchAll(/\$([^$]+)\$/g)).at(-1)?.[1].replace(/\s+/g,'');

test('task 10 retains all 54 prototypes and all 270 workbook answers in source order', () => {
    assert.equal(bank.prototypes.length,54);
    const tasks=Array.from(bank.prototypes).flatMap(p => Array.from(p.tasks));
    assert.equal(tasks.length,270);
    assert.ok(bank.prototypes.every(p => p.tasks.length===5));
    assert.deepEqual(tasks.map(t => String(t.answer).replace('.',',')),reference.answers);
});

test('classical questions and revised explanations match the supplied workbook', () => {
    for (const row of reference.classicalTasks) {
        const task=bank.prototypes[Number(row.prototype.split('.')[1])-1].tasks[row.taskIndex];
        assert.equal(compact(task.text),compact(row.sourceText),`Worksheet question ${row.worksheetNumber}`);
    }
    for (const row of reference.theoryFields) {
        assert.equal(bank.prototypes[row.prototype-1][row.field],row.value,`${row.prototype}/${row.field}`);
    }
    assert.match(bank.prototypes[11].desc,/Статистическое/);
    assert.match(bank.prototypes[11].theory_sol,/относительн/i);
});

test('all 240 Euler diagrams reproduce source values in the correct geometric regions', () => {
    assert.equal(reference.diagrams.length,240);
    for (const row of reference.diagrams) {
        const p=bank.prototypes[row.prototype-1];
        const item=row.task?p.tasks[row.task-1]:p;
        const actual=diagramAreas(item.svg_code,row.model);
        assert.deepEqual(actual,row.areas,`${row.prototype}/${row.task || 'theory'}: diagram regions`);
        const weights=row.model==='pointProbabilities'?actual.map(values=>values.reduce((a,b)=>a+b,0)):actual;
        const total=weights.reduce((a,b)=>a+b,0);
        const probabilities=row.model.includes('Probabilities');
        if (probabilities) close(total,1,'Probabilities must sum to one');
        const event=(row.prototype-15)%10;
        const numerator=masks[event].reduce((sum,index)=>sum+weights[index],0);
        const probability=probabilities?numerator:numerator/total;
        const answer=row.task?item.answer:p.theory_sol.split('Ответ:')[1].match(/[01](?:\{,\}\d+|[,.]\d+)?/)[0];
        close(probability,number(answer),`${row.prototype}/${row.task || 'theory'}: event probability`);
        const text=row.task?item.text:p.theory_task;
        assert.equal(lastEvent(text),events[event].replace(/\s+/g,''),'Event and diagram must describe the same question');
    }
});

test('the five revised probability trees preserve every branch and use total probability', () => {
    const coordinates=[[151,45],[269,45],[80,112],[151,112],[270,112],[341,112]];
    for (const row of reference.classicalTasks.filter(row=>row.treeBranches)) {
        const task=bank.prototypes[13].tasks[row.taskIndex];
        const nodes=Array.from(task.svg_code.matchAll(/(<text\b[^>]*>)([^<]+)<\/text>/g),m=>({a:attributes(m[1]),text:m[2]}));
        const values=coordinates.map(([x,y])=>number(nodes.find(n=>Number(n.a.x)===x&&Number(n.a.y)===y).text));
        assert.deepEqual(values,row.treeBranches,`Question ${row.worksheetNumber}`);
        const [a,notA,bA,notBA,bNotA,notBNotA]=values;
        close(a+notA,1,'First branches');close(bA+notBA,1,'A branches');close(bNotA+notBNotA,1,'Not-A branches');
        close(a*bA+notA*bNotA,number(task.answer),'Total probability of B');
    }
});
