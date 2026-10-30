const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');

// Exercise the actual export template without loading the application UI.
const source = readFileSync(new URL('../index.html', `file://${__filename}`), 'utf8');
const exportSource = source.slice(
    source.indexOf('function downloadPrintPDF()'),
    source.indexOf('function downloadAnswers()')
);

async function exportedScripts() {
    let download;
    const context = vm.createContext({
        window: { ogePrintableGroups: {}, SCRIPT_END: '</script>' },
        Blob,
        buildOgeBatchPrintHTML: () => '<article>Test variant</article>',
        downloadBlobSafely: blob => { download = blob; },
        openOgePrintDocument: html => { download = new Blob([html]); }
    });
    const runtime = source.slice(source.indexOf('function ogePrintToolsHTML()'),source.indexOf('// The selective print layout'));
    vm.runInContext(`${runtime}\n${exportSource}\ndownloadPrintPDF();`, context);
    assert.ok(download, 'The export must create a downloadable document');
    const html = await download.text();
    return Array.from(html.matchAll(/<script>([\s\S]*?)<\/script>/g), match => match[1]);
}

function deferred() {
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    return { promise, resolve, reject };
}

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

function runPrintScript(script, mathJax, options = {}) {
    const events = [], timers = new Map();
    let nextTimer = 0;
    const controls = Object.fromEntries(['oge-print-button','oge-print-retry','oge-print-status','oge-print-mathjax'].map(id => [id, {
        disabled:true,hidden:true,textContent:'',listeners:{},
        addEventListener(type,listener) { this.listeners[type] = listener; },
        setAttribute(name) { if (name === 'data-error') events.push('error'); }
    }]));
    Object.defineProperty(events,'controls',{value:controls});
    const context = vm.createContext({
        window: { MathJax:mathJax,focus() {},print:() => events.push('print'),location:{reload:() => events.push('reload')} },
        MathJax:mathJax,
        document: {
            readyState:'complete',images:options.images || [],
            fonts:{ready:options.fontsReady || Promise.resolve()},
            getElementById:id => controls[id],
            querySelector:() => options.formulaError ? {} : null,
            querySelectorAll:() => []
        },
        console:{error() {}},
        setTimeout(callback,delay) {
            const id = ++nextTimer;
            timers.set(id,callback);
            const run = () => { if (timers.has(id)) {timers.delete(id);callback();} };
            if (options.setTimeout) options.setTimeout(run,delay);
            else if (delay === 420) run();
            return id;
        },
        clearTimeout:id => timers.delete(id)
    });
    vm.runInContext(script,context);
    return events;
}

test('downloaded MathJax configuration preserves TeX delimiters', async () => {
    const [config] = await exportedScripts();
    const context = vm.createContext({ window: {} });
    vm.runInContext(config, context);
    assert.deepEqual(JSON.parse(JSON.stringify(context.window.MathJax.tex.inlineMath)), [
        ['$', '$'], ['\\(', '\\)']
    ]);
    assert.equal(context.window.MathJax.chtml.adaptiveCSS,false);
});

test('printing waits for MathJax startup and completed typesetting', async () => {
    const scripts = await exportedScripts();
    const startup = deferred();
    const typesetting = deferred();
    const calls = [];
    const mathJax = {
        startup: { promise: startup.promise },
        typesetPromise: () => { calls.push('typeset'); return typesetting.promise; }
    };
    const events = runPrintScript(scripts.at(-1), mathJax);
    await flushPromises();
    assert.deepEqual(calls, []);
    assert.deepEqual(events, []);
    startup.resolve();
    await flushPromises();
    assert.deepEqual(calls, ['typeset']);
    assert.deepEqual(events, []);
    typesetting.resolve();
    await flushPromises();
    assert.deepEqual(events, ['print']);
});

test('failed MathJax preparation does not open printing', async () => {
    const scripts = await exportedScripts();
    const startup = deferred();
    const events = runPrintScript(scripts.at(-1), { startup: { promise: startup.promise } });
    startup.reject(new Error('MathJax failed to load'));
    await flushPromises();
    assert.deepEqual(events, ['error']);
});

test('invalid formulas stop automatic printing', async () => {
    const scripts = await exportedScripts();
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() },
        typesetPromise: () => Promise.resolve()
    }, { formulaError: true });
    await flushPromises();
    assert.deepEqual(events, ['error']);
});

test('offscreen lazy diagrams load before the print layout is measured', async () => {
    // Simulate an offscreen image: the browser only starts its request when
    // print preparation changes it to eager loading.
    const image = {
        loading: 'lazy', complete: false,
        removeAttribute() {}, matches: () => false, hasAttribute: () => false,
        addEventListener(type,listener) {this['on'+type]=listener;},
        finishRequest() {
            if (this.loading !== 'eager') return;
            this.complete = true;
            this.naturalWidth = 10;
            this.onload();
        }
    };
    const node = {
        querySelectorAll: selector => selector === 'img' || selector === '*' ? [image] : []
    };
    const stripSource = source.slice(
        source.indexOf('function ogePrintStripUserInterface('),
        source.indexOf('function ogePrintCommonFromFragment(')
    );
    vm.runInNewContext(`${stripSource}\nogePrintStripUserInterface(node);`, { node });
    const scripts = await exportedScripts();
    const pendingTimers = [];
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() },
        typesetPromise: () => Promise.resolve()
    }, {
        images: [image],
        setTimeout: callback => { pendingTimers.push(callback); }
    });
    await flushPromises();
    assert.deepEqual(events, [], 'Printing must wait for the diagram request');
    image.finishRequest();
    await flushPromises();
    pendingTimers.forEach(callback => callback());
    assert.deepEqual(events, ['print'], 'Loaded diagrams must allow printing to proceed');
});

test('font readiness also gates printing and the ready button can print again', async () => {
    const scripts = await exportedScripts();
    const fonts = deferred();
    const events = runPrintScript(scripts.at(-1), {
        startup:{promise:Promise.resolve()},typesetPromise:() => Promise.resolve()
    },{fontsReady:fonts.promise});
    await flushPromises();
    assert.deepEqual(events,[]);
    fonts.resolve();
    await flushPromises();
    assert.deepEqual(events,['print']);
    assert.equal(events.controls['oge-print-button'].disabled,false);
    events.controls['oge-print-button'].listeners.click();
    assert.deepEqual(events,['print','print']);
});

test('a preparation timeout exposes a retry instead of waiting forever', async () => {
    const scripts = await exportedScripts();
    const startup = deferred(),timers = [];
    const events = runPrintScript(scripts.at(-1), {
        startup:{promise:startup.promise},typesetPromise:() => Promise.resolve()
    },{setTimeout:(callback,delay) => timers.push({callback,delay})});
    timers.find(timer => timer.delay === 30000).callback();
    await flushPromises();
    assert.deepEqual(events,['error']);
    assert.equal(events.controls['oge-print-button'].disabled,true);
    assert.equal(events.controls['oge-print-retry'].hidden,false);
    assert.match(events.controls['oge-print-status'].textContent,/Повторить подготовку/);
    events.controls['oge-print-retry'].listeners.click();
    assert.deepEqual(events,['error','reload']);
});

function buildPrintPages(variants) {
    const context = vm.createContext({
        window: {
            ogeVariantBatch: variants.map(numbers => ({
                snapshot: numbers.map(num => ({ tid: `task${num}`, kind: 'main', tasks: [{}] })),
                printGroups: Object.fromEntries(['1-5', '6-14', '15-25'].map(group => [
                    group,
                    numbers.filter(num => (num <= 5 ? '1-5' : num <= 14 ? '6-14' : '15-25') === group)
                        .map(num => ({ num, html: `<section data-exam-task="${num}">Task ${num}</section>` }))
                ]))
            }))
        },
        // The builder receives task entries already rendered by its DOM helper.
        ogePrintArrayToEntries: items => ({ items: items || [], common: '' })
    });
    const builder = source.slice(source.indexOf('function buildOgeBatchPrintHTML()'), source.indexOf('function downloadPrintPDF()'));
    return vm.runInContext(`${builder}\nbuildOgeBatchPrintHTML();`, context);
}

function taskNumbers(html) {
    return Array.from(html.matchAll(/data-exam-task="(\d+)"/g), match => Number(match[1]));
}

test('full variants reserve three pages with independent content flows', () => {
    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
    const html = buildPrintPages([numbers, numbers]);
    assert.equal(Array.from(html.matchAll(/<article\b/g)).length, 2);
    assert.equal(Array.from(html.matchAll(/oge-exam-flow-page/g)).length, 2);
    assert.equal(Array.from(html.matchAll(/data-print-pages="3"/g)).length, 2);
    assert.deepEqual(taskNumbers(html), [...numbers, ...numbers]);
    assert.match(html, /<strong>Вариант 1<\/strong>/);
    assert.match(html, /<strong>Вариант 2<\/strong>/);
});

test('sparse selections retain exam numbers in order without empty sheets', () => {
    const html = buildPrintPages([[24, 6, 20, 13]]);
    assert.deepEqual(taskNumbers(html), [6, 13, 20, 24]);
    assert.equal(Array.from(html.matchAll(/<article\b/g)).length, 1);
    assert.match(html, /<strong>Подборка 1<\/strong>/);
    assert.match(html, /data-print-pages="0"/);
});

test('part two heading belongs to the same flow unit as its first selected task', () => {
    const html = buildPrintPages([[24, 6, 22]]);
    const units = html.split('<div class="oge-exam-flow-unit">').slice(1);
    const partTwo = units.filter(unit => unit.includes('oge-exam-part2'));
    assert.equal(partTwo.length, 1);
    assert.deepEqual(taskNumbers(partTwo[0]), [22]);
});

test('a broken diagram prevents printing instead of changing the measured layout', async () => {
    const scripts = await exportedScripts();
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() }, typesetPromise: () => Promise.resolve()
    }, { images: [{ complete: true, naturalWidth: 0 }] });
    await flushPromises();
    assert.deepEqual(events, ['error']);
});

test('a diagram that fails while loading prevents printing', async () => {
    const scripts = await exportedScripts();
    const image = { complete:false,addEventListener(type,listener) {this['on'+type]=listener;} };
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() }, typesetPromise: () => Promise.resolve()
    }, { images: [image], setTimeout: () => {} });
    await flushPromises();
    assert.deepEqual(events, []);
    image.onerror();
    await flushPromises();
    assert.deepEqual(events, ['error']);
});


function solveColumns(heights, count, available) {
    const solver = source.slice(
        source.indexOf('function solvePrintColumns('),
        source.indexOf('function paginateCollections()')
    );
    const result = vm.runInNewContext(solver + '\nsolvePrintColumns(heights, count, available);', {
        heights, count, available
    });
    return result === null ? null : JSON.parse(JSON.stringify(result));
}

test('three-page column plan keeps all task blocks in order within six columns', () => {
    const heights = [90, 70, 130, 50, 80, 90, 30, 140, 70, 60, 100, 80];
    const ranges = solveColumns(heights, 6, 220);
    assert.equal(ranges.length, 6, 'Three pages must have exactly six columns');
    let next = 0;
    for (const [from, end] of ranges) {
        assert.equal(from, next, 'The next column must continue from the previous block');
        assert.ok(end > from, 'Every column must contain content');
        assert.ok(heights.slice(from, end).reduce((a, b) => a + b, 0) <= 220);
        next = end;
    }
    assert.equal(next, heights.length, 'No task block may be lost');
});

test('column solver balances a feasible plan and rejects an extra-column overflow', () => {
    assert.deepEqual(solveColumns(Array(12).fill(50), 6, 150), [
        [0, 2], [2, 4], [4, 6], [6, 8], [8, 10], [10, 12]
    ]);
    assert.equal(solveColumns(Array(7).fill(120), 6, 130), null,
        'A plan needing seven columns must not silently create a fourth sheet');
    assert.ok(solveColumns(Array(7).fill(100), 6, 210),
        'A feasible resized plan must still use six columns');
});

test('a 25-task selection with a duplicate does not masquerade as a complete variant', () => {
    const numbers = Array.from({ length: 24 }, (_, index) => index + 1).concat(24);
    const html = buildPrintPages([numbers]);
    assert.match(html, /data-print-pages="0"/);
    assert.match(html, /<strong>Подборка 1<\/strong>/);
    assert.doesNotMatch(html, /data-print-pages="3"/);
});
