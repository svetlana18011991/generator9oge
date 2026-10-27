const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const context = { window: {} };
vm.runInNewContext(readFileSync(join(__dirname, '../task15.js'), 'utf8'), context);
const prototypes = context.window.database.task15.prototypes;

for (const { code, vertex, ray, radius } of [
    { code: '15.2.', vertex: [190, 120], ray: [125, 25], radius: 29 },
    { code: '15.5.', vertex: [205, 120], ray: [125, 25], radius: 22 }
]) {
    test(code + ' exterior-angle arc reaches both rays at the same radius', () => {
        const prototype = prototypes.find(p => p.desc.startsWith(code));
        assert.ok(prototype);
        const paths = Array.from(prototype.svg_code.matchAll(/<path\b[^>]*\bd="([^"]+)"/g), match => match[1]);
        const arcs = paths.filter(path => /\bA\b/.test(path));
        assert.equal(arcs.length, 1, 'The angle must have one continuous arc');
        const values = arcs[0].match(/-?\d+(?:\.\d+)?/g).map(Number);
        assert.equal(values.length, 9);
        const [x1, y1, rx, ry, rotation, largeArc, sweep, x2, y2] = values;
        const [cx, cy] = vertex;
        const [bx, by] = ray;
        assert.deepEqual([rx, ry, rotation, largeArc, sweep], [radius, radius, 0, 0, 0]);
        assert.equal(y1, cy, 'The arc starts on the horizontal extension');
        assert.equal(x1, cx + radius);
        assert.ok(x2 < cx && y2 < cy, 'The arc must reach the sloping ray toward B');
        const gap = Math.abs((x2 - cx) * (by - cy) - (y2 - cy) * (bx - cx)) / Math.hypot(bx - cx, by - cy);
        assert.ok(gap < 0.001, 'The arc endpoint must lie on CB, without a gap');
        assert.ok(Math.abs(Math.hypot(x2 - cx, y2 - cy) - radius) < 0.001, 'Both endpoints must share the angle vertex as their circle center');
    });
}
