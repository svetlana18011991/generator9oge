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
        downloadBlobSafely: blob => { download = blob; }
    });
    vm.runInContext(`${exportSource}\ndownloadPrintPDF();`, context);
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
    const events = [];
    const context = vm.createContext({
        window: { MathJax: mathJax, print: () => events.push('print') },
        MathJax: mathJax,
        document: {
            readyState: 'complete',
            images: options.images || [],
            fonts: { ready: Promise.resolve() },
            querySelector: () => options.formulaError ? {} : null,
            querySelectorAll: () => []
        },
        alert: () => events.push('alert'),
        console: { error: () => {} },
        setTimeout: options.setTimeout || (callback => { callback(); }),
        clearTimeout: () => {}
    });
    vm.runInContext(script, context);
    return events;
}

test('downloaded MathJax configuration preserves TeX delimiters', async () => {
    const [config] = await exportedScripts();
    const context = vm.createContext({ window: {} });
    vm.runInContext(config, context);
    assert.deepEqual(JSON.parse(JSON.stringify(context.window.MathJax.tex.inlineMath)), [
        ['$', '$'], ['\\(', '\\)']
    ]);
    assert.equal(context.window.MathJax.svg.fontCache, 'local');
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
    assert.deepEqual(events, ['alert']);
});

test('invalid formulas stop automatic printing', async () => {
    const scripts = await exportedScripts();
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() },
        typesetPromise: () => Promise.resolve()
    }, { formulaError: true });
    await flushPromises();
    assert.deepEqual(events, ['alert']);
});

test('offscreen lazy diagrams load before the print layout is measured', async () => {
    // Simulate an offscreen image: the browser only starts its request when
    // print preparation changes it to eager loading.
    const image = {
        loading: 'lazy', complete: false,
        removeAttribute() {}, matches: () => false, hasAttribute: () => false,
        finishRequest() {
            if (this.loading !== 'eager') return;
            this.complete = true;
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

test('full variants start independent content flows instead of three fixed sheets', () => {
    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
    const html = buildPrintPages([numbers, numbers]);
    assert.equal(Array.from(html.matchAll(/<article\b/g)).length, 2);
    assert.equal(Array.from(html.matchAll(/oge-exam-flow-page/g)).length, 2);
    assert.deepEqual(taskNumbers(html), [...numbers, ...numbers]);
    assert.match(html, /<strong>Вариант 1<\/strong>/);
    assert.match(html, /<strong>Вариант 2<\/strong>/);
});

test('sparse selections retain exam numbers in order without empty sheets', () => {
    const html = buildPrintPages([[24, 6, 20, 13]]);
    assert.deepEqual(taskNumbers(html), [6, 13, 20, 24]);
    assert.equal(Array.from(html.matchAll(/<article\b/g)).length, 1);
    assert.match(html, /<strong>Подборка 1<\/strong>/);
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
    assert.deepEqual(events, ['alert']);
});

test('a diagram that fails while loading prevents printing', async () => {
    const scripts = await exportedScripts();
    const image = { complete: false };
    const events = runPrintScript(scripts.at(-1), {
        startup: { promise: Promise.resolve() }, typesetPromise: () => Promise.resolve()
    }, { images: [image], setTimeout: () => {} });
    await flushPromises();
    assert.deepEqual(events, []);
    image.onerror();
    await flushPromises();
    assert.deepEqual(events, ['alert']);
});
