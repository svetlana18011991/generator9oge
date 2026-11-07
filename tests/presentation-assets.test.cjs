const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');

const source = readFileSync(new URL('../presentations.js', `file://${__filename}`), 'utf8');
const assets = readFileSync(new URL('../offline_assets_bundle.js', `file://${__filename}`), 'utf8');

function presentationRuntime(count, { embedded = true } = {}) {
    let download;
    const controls = new Map();
    const context = vm.createContext({
        Blob: class extends Blob {
            constructor(parts, options) {
                super(parts, options);
                download = this;
            }
        },
        URL: { createObjectURL: () => 'blob:presentation-test', revokeObjectURL() {} },
        document: {
            readyState: 'loading',
            addEventListener() {},
            getElementById(id) {
                if (!controls.has(id)) controls.set(id, {
                    value: id === 'timer-input' ? '12' : '',
                    checked: true,
                    style: {}
                });
                return controls.get(id);
            },
            createElement: () => ({ click() {} }),
            body: { appendChild() {}, removeChild() {} }
        }
    });
    context.window = context;
    context.SCRIPT_END = '</script>';
    context.CANVAS_LOGIC_SCRIPT = 'window.__presentationCanvasAvailable = true;';
    context.ASSETS_URL = 'https://example.test/assets/';
    context.ogeGenerationMode = 'full';
    context.currentGeneratedTasks = Array.from({ length: count }, (_, i) => ({
        taskTid: `task${i + 1}`,
        taskNumber: i + 1,
        taskKind: 'main',
        text: `Короткое задание ${i + 1}`,
        answer: String(i + 1),
        theory: `Разбор ${i + 1}`,
        isSecondPart: i >= 19,
        analogs: i >= 19 ? [{ text: `Аналог ${i + 1}`, answer: '2' }] : []
    }));
    context.selectedBlockTitles = context.currentGeneratedTasks.map((_, i) => `Задание ${i + 1}`);
    if (embedded) vm.runInContext(assets, context);
    vm.runInContext(source, context);
    return {
        context,
        async export(style) {
            vm.runInContext(`generatePresentation${style}()`, context);
            assert.ok(download, 'The actual exporter must create a downloadable HTML file');
            return download.text();
        },
        async run(command) {
            vm.runInContext(command, context);
            return download.text();
        }
    };
}

function occurrences(text, value) {
    return text.split(value).length - 1;
}

for (const [style, names] of [[1, ['p1.jpg', 'p2.jpg', 'p3.jpg']], [3, ['s2.png', 's1.png']]]) {
    test(`style ${style} embeds backgrounds once while keeping every task and its controls`, async () => {
        const runtime = presentationRuntime(25);
        const html = await runtime.export(style);
        for (const name of names) {
            const data = runtime.context.EMBEDDED_ASSETS[name];
            assert.ok(data.startsWith('data:image/'), `${name} must remain available offline`);
            assert.equal(occurrences(html, data), 1, `${name} must be stored once for all slides`);
        }
        assert.equal(occurrences(html, 'class="slide task-slide pres-bg-main"'), 25);
        assert.match(html, /class="slide pres-bg-main" id="results-slide"/);
        assert.match(html, /class="slide active pres-bg-title"/);
        assert.match(html, /\.pres-bg-title \{ background-image: url\('/);
        assert.match(html, /\.pres-bg-main \{ background-image: url\('/);
        assert.doesNotMatch(html, /var\(--pres-bg-/,
            'Large offline data URLs must use regular CSS rules rather than custom properties');
        assert.match(html, /nextSlide\(\)/);
        assert.match(html, /submitTask\(event, 0, false\)/);
        assert.match(html, /submitTask\(event, 0, true\)/);
        assert.match(html, /submitSecondPartTask\(event, 24\)/);
        assert.match(html, /window\.toggleCanvas\('pres-24'\)/);
        assert.match(html, /id="theory-pres-24"/);
        assert.match(html, /window\.__presentationCanvasAvailable = true/);
        assert.ok(Buffer.byteLength(html) < 10_000_000, 'Short tasks must not create a tens-of-megabytes presentation');
        if (style === 1) {
            assert.equal(occurrences(html, 'class="header-plate pres-bg-header"'), 25);
            assert.match(html, /background-position: center; background-size: 100% 100%; background-repeat: no-repeat/);
            assert.match(html, /\.pres-bg-header \{ background-image: url\('/);
        }
        for (const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
            assert.doesNotThrow(() => new vm.Script(script[1]), 'Downloaded JavaScript must remain valid');
        }
    });

    test(`style ${style} size grows with task content rather than repeated background images`, async () => {
        const one = await presentationRuntime(1).export(style);
        const many = await presentationRuntime(25).export(style);
        assert.ok(Buffer.byteLength(many) - Buffer.byteLength(one) < 1_000_000,
            'Twenty-four additional short tasks must not duplicate megabyte backgrounds');
    });
}

test('shared backgrounds preserve the existing external URL fallback', async () => {
    const html = await presentationRuntime(3, { embedded: false }).export(1);
    for (const name of ['p1.jpg', 'p2.jpg', 'p3.jpg']) {
        assert.equal(occurrences(html, `https://example.test/assets/${name}`), 1);
    }
});

test('identical title and result backgrounds share one offline resource', async () => {
    const runtime = presentationRuntime(1);
    const html = await runtime.run(
        "generateAndDownloadPresentationHTML('', '', '', '', 'test.html', 'p2.jpg', 'p2.jpg', '#ff8c00')"
    );
    assert.equal(occurrences(html, runtime.context.EMBEDDED_ASSETS['p2.jpg']), 1);
    assert.match(html, /\.pres-bg-title, \.pres-bg-main \{ background-image: url\('/);
});

test('workbook diagrams remain embedded in the downloaded presentation', async () => {
    const runtime = presentationRuntime(1);
    const html = await runtime.run(
        `generateAndDownloadPresentationHTML('<div class="slide task-slide"><img src="workbook_trails_maslovka.png"></div>', '', '', '', 'test.html', 'p1.jpg', 'p2.jpg', '#ff8c00')`
    );
    assert.match(html, /<img src="data:image\/png;base64,[A-Za-z0-9+/=]+">/);
    assert.doesNotMatch(html, /<img src="workbook_trails_maslovka\.png">/);
});
