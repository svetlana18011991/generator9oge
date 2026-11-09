const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const {test} = require('node:test');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/bank/manifest.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'bank-image-assets.js'), 'utf8');
const entries = Object.entries(manifest);
function setup(failOnce = false) {
    const requests = [];
    const context = vm.createContext({window:{}, document:{baseURI:'https://oge.test/sub/index.html'},
        URL, Uint8Array, btoa, AbortController, setTimeout, clearTimeout,
        fetch:async url => {
            requests.push(url);
            if (failOnce) {failOnce=false; return {ok:false};}
            const name = new URL(url).pathname.replace('/sub/', '');
            const bytes = fs.readFileSync(path.join(root, name));
            return {ok:true,arrayBuffer:async()=>bytes};
        }});
    vm.runInContext(source, context);
    return {embed:context.window.ogeEmbedBankImages, requests};
}

test('extracted bank images retain the original exact bytes recorded in the manifest', () => {
    assert.ok(entries.length > 200);
    for (const [filename, metadata] of entries) {
        const bytes = fs.readFileSync(path.join(root, filename));
        assert.equal(bytes.length, metadata.bytes, filename);
        assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), metadata.sha256, filename);
        assert.equal(filename.includes(metadata.sha256.slice(0, 24)), true);
    }
});

test('exports embed only referenced bank images, including absolute paths and encoded hidden theory', async () => {
    const runtime = setup();
    const [relative, info] = entries[0];
    const absolute = 'https://oge.test/sub/' + relative;
    const data = 'data:' + info.mime + ';base64,' + fs.readFileSync(path.join(root, relative)).toString('base64');
    const urls = [relative, './'+relative, absolute, '/sub/'+relative];
    for (let depth=0;depth<4;depth++) {
        let html = urls.map(url => '<div data-test="'+url+'"></div>').join('');
        let expected = urls.map(() => '<div data-test="'+data+'"></div>').join('');
        for(let i=0;i<depth;i++){html=encodeURIComponent(html);expected=encodeURIComponent(expected);}
        assert.equal(await runtime.embed(html), expected, 'encoding depth '+depth);
    }
    assert.equal(runtime.requests.length,1,'Repeated references and exports reuse one fetched image');
});

test('bank image download failures reject export and the next action can retry', async () => {
    const runtime = setup(true);
    const [relative, info] = entries[1];
    await assert.rejects(runtime.embed('<img src="'+relative+'">'), /Не удалось загрузить рисунок/);
    const html = await runtime.embed('<img src="'+relative+'">');
    assert.match(html,new RegExp('data:'+info.mime+';base64,'));
    assert.equal(runtime.requests.length,2);
});

test('text-only downloads require no image requests', async () => {
    const runtime = setup();
    assert.equal(await runtime.embed('<p>1 + 1 = 2</p>'), '<p>1 + 1 = 2</p>');
    assert.equal(runtime.requests.length,0);
});
