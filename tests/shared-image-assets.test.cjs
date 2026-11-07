const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const {test} = require('node:test');
const source = fs.readFileSync(new URL('../shared_image_assets.js', `file://${__filename}`), 'utf8');
const first = 'data:image/png;base64,' + Buffer.alloc(2048, 17).toString('base64');
const second = 'data:image/webp;base64,' + Buffer.alloc(1536, 33).toString('base64');

function setup() {
    const blobs = [];
    const context = vm.createContext({
        window: {}, Blob, atob,
        URL: {createObjectURL(blob) {blobs.push(blob); return 'blob:http://generator.test/image-' + blobs.length;}}
    });
    vm.runInContext(source, context);
    return {...context.window, blobs};
}

test('identical images share a URL and preserve their original image bytes', async () => {
    const runtime = setup();
    const a = runtime.ogeCompactEmbeddedImages(`<img src="${first}"><img src="${first}">`);
    assert.equal(runtime.blobs.length, 1);
    assert.equal(a.match(/blob:http:\/\/generator.test\/image-1/g).length, 2);
    assert.equal(runtime.blobs[0].type, 'image/png');
    assert.deepEqual(Buffer.from(await runtime.blobs[0].arrayBuffer()), Buffer.alloc(2048, 17));
    runtime.ogeCompactEmbeddedImages(`<img src="${first}">`);
    assert.equal(runtime.blobs.length, 1, 'Repeated generation reuses the same resource');
});

test('exports embed each used image once and exclude images from previous variants', () => {
    const runtime = setup();
    const a = runtime.ogeCompactEmbeddedImages(`<img src="${first}">`);
    runtime.ogeCompactEmbeddedImages(`<img src="${second}">`);
    const html = runtime.ogePackSharedImages(`<html><head></head><body>${a.repeat(100)}</body></html>`);
    assert.equal(html.split(first).length - 1, 1);
    assert.ok(!html.includes(second));
    assert.ok(!html.includes('blob:http://generator.test/'));
    assert.ok(html.length < first.length + 22000, 'Repeated markup must not repeat the image bytes');
    const script = html.match(/<script data-oge-shared-images>([\s\S]*?)<\/script>/)[1];
    new vm.Script(script);
});

test('hidden URL-encoded theories and CSS backgrounds use portable image references', () => {
    const runtime = setup();
    const theory = runtime.ogeCompactEmbeddedImages(`<img src="${first}">`);
    const html = runtime.ogePackSharedImages(`<html><head><style>.paper{background:url('${second}')}</style></head><body><div hidden>${encodeURIComponent(theory)}</div></body></html>`);
    assert.equal(html.split(first).length - 1, 1);
    assert.equal(html.split(second).length - 1, 1);
    assert.ok(!html.includes('blob:http://generator.test/'));
    assert.ok(!html.includes('blob%3Ahttp%3A%2F%2Fgenerator.test'));
    assert.match(decodeURIComponent(html.match(/<div hidden>(.*?)<\/div>/)[1]), /#oge-image-0/);
    const again = runtime.ogePackSharedImages(`<html><head></head><body>${theory}</body></html>`);
    assert.equal(again.split(first).length - 1, 1, 'Exporting again retains the original resource');
});

test('export bootstrap restores static and subsequently opened images without a network', async () => {
    const runtime = setup();
    const html = runtime.ogePackSharedImages(`<html><head></head><body><img src="${first}"></body></html>`);
    const marker = html.match(/<img src="([^"]+)"/)[1];
    function element(tag, value) {
        const attributes = [{name: 'src', value}];
        return {nodeType: 1, tagName: tag, attributes, setAttribute(name, next) {attributes.find(a => a.name === name).value = next;}};
    }
    const initial = element('IMG', marker), later = element('IMG', marker), urls = [];
    let notify;
    const context = vm.createContext({
        atob, Blob,
        URL: {createObjectURL(blob) {urls.push(blob); return 'blob:null/offline-' + urls.length;}},
        document: {documentElement: {...element('HTML', ''),querySelectorAll: () => [initial]},addEventListener() {}},
        MutationObserver: class {constructor(callback) {notify = callback;} observe() {}}
    });
    vm.runInContext(html.match(/<script data-oge-shared-images>([\s\S]*?)<\/script>/)[1], context);
    assert.equal(initial.attributes[0].value, 'blob:null/offline-1');
    notify([{type: 'childList', addedNodes: [later]}]);
    assert.equal(later.attributes[0].value, initial.attributes[0].value);
    assert.equal(urls.length, 1, 'The same image in a newly opened theory reuses its resource');
    assert.deepEqual(Buffer.from(await urls[0].arrayBuffer()), Buffer.alloc(2048, 17));
});
