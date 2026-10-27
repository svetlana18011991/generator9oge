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
        setTimeout: options.setTimeout || (callback => { callback(); })
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
