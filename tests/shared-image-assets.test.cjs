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

let chromium;
try { ({chromium} = require('playwright')); }
catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('student packing keeps visible images readable without scripts and reuses their bytes in hidden copies', {
    skip: !chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false
}, async () => {
    const png = name => 'data:image/png;base64,' + fs.readFileSync(new URL(`../${name}`, `file://${__filename}`)).toString('base64');
    const first = png('task7_proto1.png');
    const second = png('task7_proto2.png');
    const third = png('task7_proto3.png');
    const browser = await chromium.launch({executablePath:executable, headless:true, args:['--no-sandbox']});
    try {
        const generator = await browser.newPage();
        await generator.addScriptTag({content:source});
        const html = await generator.evaluate(({first, second, third}) => {
            const visible = window.ogeCompactEmbeddedImages(`<img id="visible" loading="lazy" src="${first}">`);
            const theory = window.ogeCompactEmbeddedImages(`<img id="theory-copy" src="${first}">`);
            return window.ogePackSharedImages(`<!doctype html><html><head></head><body>
                <main class="paper">
                    <div style="display:none"><img id="draft" src="${first}"></div>
                    ${visible}
                    <svg width="100" height="100"><image id="diagram" width="100" height="100" xlink:href="${second}"></image></svg>
                    <details><picture><source id="responsive" srcset="${third} 1x"><img alt="Detail"></picture></details>
                    <div hidden id="theory">${encodeURIComponent(theory)}</div>
                </main>
                <img id="outside" src="${second}">
            </body></html>`, {staticImagesIn:'.paper'});
        }, {first, second, third});
        await generator.close();

        for (const source of [first, second, third]) assert.equal(html.split(source).length - 1, 1);
        assert.doesNotMatch(html, /(?:blob:|blob%3A)/);

        const preview = await browser.newPage({javaScriptEnabled:false});
        await preview.setContent(html, {waitUntil:'load'});
        assert.equal(await preview.locator('#visible').getAttribute('src'), first);
        assert.equal(await preview.locator('#visible').getAttribute('loading'), 'eager');
        assert.ok(await preview.locator('#visible').evaluate(image => image.complete && image.naturalWidth > 1));
        assert.equal(await preview.locator('#diagram').getAttribute('xlink:href'), second);
        assert.equal(await preview.locator('#responsive').getAttribute('srcset'), third + ' 1x');
        assert.match(await preview.locator('#draft').getAttribute('src'), /#oge-image-/);
        assert.match(await preview.locator('#outside').getAttribute('src'), /#oge-image-/);
        await preview.close();

        const student = await browser.newPage();
        await student.setContent(html, {waitUntil:'load'});
        await student.evaluate(() => {
            const dialog = document.createElement('div');
            dialog.innerHTML = decodeURIComponent(document.getElementById('theory').textContent);
            document.body.appendChild(dialog);
        });
        await student.waitForFunction(() => ['draft', 'outside', 'theory-copy'].every(id => {
            const image = document.getElementById(id);
            return image.complete && image.naturalWidth > 1 && image.src.startsWith('blob:');
        }));
        assert.equal(await student.locator('#theory-copy').getAttribute('src'), await student.locator('#draft').getAttribute('src'));
        assert.equal(await student.locator('#visible').getAttribute('src'), first);
    } finally { await browser.close(); }
});
