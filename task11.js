"use strict";
(function () {
    window.database = window.database || {};

    const AXIS = "#111827";
    const GRID = "#d7dde5";
    const CURVE = "#111111";

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function pathFor(fn, xmin, xmax, ymin, ymax, X, Y, segments) {
        let d = "";
        let drawing = false;
        const N = 260;
        for (let i = 0; i <= N; i++) {
            const x = xmin + (xmax - xmin) * i / N;
            const y = fn(x);
            const ok = Number.isFinite(y) && y >= ymin - 1 && y <= ymax + 1;
            if (!ok) { drawing = false; continue; }
            const px = X(x), py = Y(y);
            d += (drawing ? " L" : " M") + px.toFixed(2) + "," + py.toFixed(2);
            drawing = true;
        }
        return d;
    }

    function graphPanel(label, fn, cfg = {}) {
        const panelW = 236, panelH = 194;
        const plot = 154; // квадратное поле: клетки всегда квадратные
        const left = 42, top = 20;
        const xmin = cfg.xmin ?? -5;
        const xmax = cfg.xmax ?? 5;
        const ymin = cfg.ymin ?? -5;
        const ymax = cfg.ymax ?? 5;
        const unitX = plot / (xmax - xmin);
        const unitY = plot / (ymax - ymin);
        // Для всех наших графиков диапазоны одинаковой длины; сохраняем одинаковый масштаб X/Y.
        const unit = Math.min(unitX, unitY);
        const gw = unit * (xmax - xmin), gh = unit * (ymax - ymin);
        const ox = left + (plot - gw) / 2, oy = top + (plot - gh) / 2;
        const X = x => ox + (x - xmin) * unit;
        const Y = y => oy + gh - (y - ymin) * unit;
        const clipId = "clip_" + Math.random().toString(36).slice(2);
        let s = `<g>`;
        s += `<text x="8" y="19" font-size="18" font-family="Arial" font-weight="700" fill="${AXIS}">${esc(label)}</text>`;
        s += `<defs><clipPath id="${clipId}"><rect x="${ox}" y="${oy}" width="${gw}" height="${gh}"/></clipPath></defs>`;
        for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x++) {
            const px = X(x);
            s += `<line x1="${px}" y1="${oy}" x2="${px}" y2="${oy+gh}" stroke="${GRID}" stroke-width="0.8"/>`;
        }
        for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y++) {
            const py = Y(y);
            s += `<line x1="${ox}" y1="${py}" x2="${ox+gw}" y2="${py}" stroke="${GRID}" stroke-width="0.8"/>`;
        }
        if (xmin <= 0 && xmax >= 0) {
            const px = X(0);
            s += `<line x1="${px}" y1="${oy}" x2="${px}" y2="${oy+gh}" stroke="${AXIS}" stroke-width="1.6"/>`;
            s += `<path d="M${px-4},${oy+7} L${px},${oy} L${px+4},${oy+7}" fill="none" stroke="${AXIS}" stroke-width="1.4"/>`;
            s += `<text x="${px+5}" y="${oy+13}" font-size="13" font-family="serif" font-style="italic">y</text>`;
        }
        if (ymin <= 0 && ymax >= 0) {
            const py = Y(0);
            s += `<line x1="${ox}" y1="${py}" x2="${ox+gw}" y2="${py}" stroke="${AXIS}" stroke-width="1.6"/>`;
            s += `<path d="M${ox+gw-7},${py-4} L${ox+gw},${py} L${ox+gw-7},${py+4}" fill="none" stroke="${AXIS}" stroke-width="1.4"/>`;
            s += `<text x="${ox+gw-12}" y="${py+16}" font-size="13" font-family="serif" font-style="italic">x</text>`;
        }
        if (xmin <= 0 && xmax >= 0 && ymin <= 0 && ymax >= 0) {
            s += `<text x="${X(0)+4}" y="${Y(0)+14}" font-size="11" font-family="Arial" fill="${AXIS}">0</text>`;
        }
        const d = pathFor(fn, xmin, xmax, ymin, ymax, X, Y);
        s += `<path d="${d}" clip-path="url(#${clipId})" fill="none" stroke="${CURVE}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
        s += `</g>`;
        return { html: s, w: panelW, h: panelH };
    }

    function hyperbolaPanel(label, k) {
        const panelW = 236, panelH = 194;
        const plot = 154, left = 42, top = 20;
        const xmin = -5, xmax = 5, ymin = -5, ymax = 5;
        const unit = plot / 10;
        const ox = left, oy = top;
        const X = x => ox + (x - xmin) * unit;
        const Y = y => oy + plot - (y - ymin) * unit;
        const clipId = "clip_" + Math.random().toString(36).slice(2);
        let s = `<g><text x="8" y="19" font-size="18" font-family="Arial" font-weight="700" fill="${AXIS}">${esc(label)}</text>`;
        s += `<defs><clipPath id="${clipId}"><rect x="${ox}" y="${oy}" width="${plot}" height="${plot}"/></clipPath></defs>`;
        for (let x=-5;x<=5;x++) s += `<line x1="${X(x)}" y1="${oy}" x2="${X(x)}" y2="${oy+plot}" stroke="${GRID}" stroke-width="0.8"/>`;
        for (let y=-5;y<=5;y++) s += `<line x1="${ox}" y1="${Y(y)}" x2="${ox+plot}" y2="${Y(y)}" stroke="${GRID}" stroke-width="0.8"/>`;
        const px=X(0), py=Y(0);
        s += `<line x1="${px}" y1="${oy}" x2="${px}" y2="${oy+plot}" stroke="${AXIS}" stroke-width="1.6"/>`;
        s += `<line x1="${ox}" y1="${py}" x2="${ox+plot}" y2="${py}" stroke="${AXIS}" stroke-width="1.6"/>`;
        s += `<path d="M${px-4},${oy+7} L${px},${oy} L${px+4},${oy+7}" fill="none" stroke="${AXIS}" stroke-width="1.4"/>`;
        s += `<path d="M${ox+plot-7},${py-4} L${ox+plot},${py} L${ox+plot-7},${py+4}" fill="none" stroke="${AXIS}" stroke-width="1.4"/>`;
        s += `<text x="${px+5}" y="${oy+13}" font-size="13" font-family="serif" font-style="italic">y</text>`;
        s += `<text x="${ox+plot-12}" y="${py+16}" font-size="13" font-family="serif" font-style="italic">x</text>`;
        s += `<text x="${px+4}" y="${py+14}" font-size="11" font-family="Arial">0</text>`;
        function branch(a,b){
            let d="", drawing=false; const N=180;
            for(let i=0;i<=N;i++){
                const x=a+(b-a)*i/N, y=k/x;
                if(!Number.isFinite(y)||y<ymin-1||y>ymax+1){drawing=false;continue;}
                d += (drawing?" L":" M")+X(x).toFixed(2)+","+Y(y).toFixed(2); drawing=true;
            }
            return d;
        }
        const d=branch(-5,-0.15)+branch(0.15,5);
        s += `<path d="${d}" clip-path="url(#${clipId})" fill="none" stroke="${CURVE}" stroke-width="2.2" stroke-linecap="round"/>`;
        s += `</g>`;
        return {html:s,w:panelW,h:panelH};
    }

    function sqrtPanel(label, scale=1, shift=0) {
        return graphPanel(label, x => x < 0 ? NaN : scale*Math.sqrt(x)+shift, {xmin:-5,xmax:5,ymin:-5,ymax:5});
    }

    function tripleSvg(graphs, labels) {
        const panels = graphs.map((g,i) => {
            if (g.type === "hyperbola") return hyperbolaPanel(labels[i], g.k);
            if (g.type === "sqrt") return sqrtPanel(labels[i], g.scale ?? 1, g.shift ?? 0);
            if (g.type === "line") return graphPanel(labels[i], x => g.k*x + g.b);
            if (g.type === "parabola") return graphPanel(labels[i], x => g.a*x*x + (g.b||0)*x + (g.c||0));
            return graphPanel(labels[i], x => 0);
        });
        const gap=14, W=panels.reduce((s,p)=>s+p.w,0)+gap*(panels.length-1), H=194;
        let body="", x=0;
        panels.forEach(p=>{body += `<g transform="translate(${x},0)">${p.html}</g>`; x += p.w+gap;});
        return `<svg viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:auto;overflow:visible" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
    }

    function beforeDiagram(title, rows) {
        return `<div style="line-height:1.45">${title}${rows ? `<div style="margin-top:8px"><b style="color:#111">${rows.heading}</b><div style="margin-top:5px;display:flex;gap:28px;flex-wrap:wrap;color:#111">${rows.items.join("")}</div></div>` : ""}</div>`;
    }

    function afterDiagram(heading, items, note='В таблице под каждой буквой укажите соответствующий номер.') {
        return `<div class="task11-extra-after-diagram"><div style="margin-top:3px"><b style="color:#111">${heading}</b><div style="margin-top:6px;display:flex;gap:30px;flex-wrap:wrap;align-items:center">${items.join("")}</div>${note ? `<div style="margin-top:8px">${note}</div>` : ""}</div></div>`;
    }

    const itm = s => `<span style="display:inline-block;white-space:nowrap">${s}</span>`;

    function invertLetterAnswer(ans) {
        // ans = номер графика для А, Б, В -> возвращает, какая буква стоит в графике 1,2,3.
        const letters=["A","B","C"], out=[null,null,null];
        [...ans].forEach((d,i)=>out[Number(d)-1]=letters[i]);
        return out;
    }

    const linearCats = {
        A: () => ({type:"line",k:-1.1,b:-2.0}), // k<0,b<0
        B: () => ({type:"line",k:-1.0,b: 2.2}), // k<0,b>0
        C: () => ({type:"line",k: 1.0,b:-2.0})  // k>0,b<0
    };
    const linearCats2 = {
        1: () => ({type:"line",k:-1.1,b:-2.0}),
        2: () => ({type:"line",k:-1.0,b: 2.2}),
        3: () => ({type:"line",k: 1.0,b: 2.0})
    };
    const quadCats = {
        A: () => ({type:"parabola",a:0.42,b:0,c: 1.2}), // a>0,c>0
        B: () => ({type:"parabola",a:-0.38,b:0,c: 1.8}), // a<0,c>0
        C: () => ({type:"parabola",a:0.38,b:0,c:-1.8})  // a>0,c<0
    };
    const quadCats2 = {
        1: () => ({type:"parabola",a:0.38,b:0,c:-1.8}),
        2: () => ({type:"parabola",a:-0.38,b:0,c:1.8}),
        3: () => ({type:"parabola",a:0.42,b:0,c:1.2})
    };

    function make11_1(ans, tweak=0) {
        const order=invertLetterAnswer(ans);
        const graphs=order.map((cat,i)=>{ const g=linearCats[cat](); g.k *= (1+0.06*((tweak+i)%3)); g.b += ((tweak+i)%2?0.35:-0.25); return g; });
        return {
            text: beforeDiagram('На рисунках изображены графики функций вида \\(y=kx+b\\). Установите соответствие между знаками коэффициентов \\(k\\) и \\(b\\) и графиками функций.', {
                heading:'КОЭФФИЦИЕНТЫ',
                items:[itm('А) \\(k\\lt0,\\ b\\lt0\\)'),itm('Б) \\(k\\lt0,\\ b\\gt0\\)'),itm('В) \\(k\\gt0,\\ b\\lt0\\)')]
            }) + afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),
            svg_code: tripleSvg(graphs,['1)','2)','3)']), answer:ans, layout:'stacked11'
        };
    }

    function make11_2(ans,tweak=0) {
        const graphs=[...ans].map((d,i)=>{const g=linearCats2[d](); g.k *= 1+0.05*((tweak+i)%3); g.b += ((tweak+i)%2?0.3:-0.2); return g;});
        return {
            text: beforeDiagram('На рисунках изображены графики функций вида \\(y=kx+b\\). Установите соответствие между графиками функций и знаками коэффициентов \\(k\\) и \\(b\\).') + afterDiagram('КОЭФФИЦИЕНТЫ',[
                itm('1) \\(k\\lt0,\\ b\\lt0\\)'),itm('2) \\(k\\lt0,\\ b\\gt0\\)'),itm('3) \\(k\\gt0,\\ b\\gt0\\)')
            ]),
            svg_code: tripleSvg(graphs,['А)','Б)','В)']), answer:ans, layout:'stacked11'
        };
    }

    function linearFormulaSet(t=0) {
        const c=[-2,-3,2,-4,3][t%5];
        const m=[1,2,0.5,1.5,0.75][t%5];
        const p=[-2,-3,3,-1.5,2.5][t%5];
        return [
            {latex:`\\(y=${String(c).replace('.',',')}\\)`, graph:{type:'line',k:0,b:c}},
            {latex:`\\(y=${m===1?'':String(m).replace('.',',')}x${c>=0?'+':''}${String(c).replace('.',',')}\\)`, graph:{type:'line',k:m,b:c}},
            {latex:`\\(y=${String(p).replace('.',',')}x\\)`, graph:{type:'line',k:p,b:0}}
        ];
    }
    function make11_3(ans,t=0) {
        const fs=linearFormulaSet(t);
        const graphs=[...ans].map(d=>fs[Number(d)-1].graph);
        return {text:beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.')+afterDiagram('ФОРМУЛЫ',fs.map((f,i)=>itm(`${i+1}) ${f.latex}`))),svg_code:tripleSvg(graphs,['А)','Б)','В)']),answer:ans,layout:'stacked11'};
    }

    function formulaLetterSet(t=0) {
        const s=[1.2,1.5,2,0.8,1.8][t%5], b=[3,2,4,1,3][t%5];
        return [
            {latex:`\\(y=-${String(s).replace('.',',')}x-${b}\\)`,graph:{type:'line',k:-s,b:-b}},
            {latex:`\\(y=-${String(s).replace('.',',')}x+${b}\\)`,graph:{type:'line',k:-s,b:b}},
            {latex:`\\(y=${String(s).replace('.',',')}x-${b}\\)`,graph:{type:'line',k:s,b:-b}}
        ];
    }
    function make11_4(ans,t=0){
        const fs=formulaLetterSet(t), order=invertLetterAnswer(ans), map={A:fs[0].graph,B:fs[1].graph,C:fs[2].graph};
        const graphs=order.map(x=>map[x]);
        return {text:beforeDiagram('Установите соответствие между формулами, задающими функции, и графиками этих функций.',{heading:'ФОРМУЛЫ',items:[itm(`А) ${fs[0].latex}`),itm(`Б) ${fs[1].latex}`),itm(`В) ${fs[2].latex}`)]})+afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),svg_code:tripleSvg(graphs,['1)','2)','3)']),answer:ans,layout:'stacked11'};
    }

    function make11_5(ans,t=0){
        const order=invertLetterAnswer(ans);
        const graphs=order.map((cat,i)=>{const g=quadCats[cat](); g.a*=1+0.06*((t+i)%3); g.c += ((t+i)%2?0.25:-0.15); return g;});
        return {text:beforeDiagram('На рисунках изображены графики функций вида \\(y=ax^2+bx+c\\). Установите соответствие между знаками коэффициентов \\(a\\) и \\(c\\) и графиками функций.',{heading:'КОЭФФИЦИЕНТЫ',items:[itm('А) \\(a\\gt0,\\ c\\gt0\\)'),itm('Б) \\(a\\lt0,\\ c\\gt0\\)'),itm('В) \\(a\\gt0,\\ c\\lt0\\)')]})+afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),svg_code:tripleSvg(graphs,['1)','2)','3)']),answer:ans,layout:'stacked11'};
    }

    function make11_6(ans,t=0){
        const graphs=[...ans].map((d,i)=>{const g=quadCats2[d]();g.a*=1+0.05*((t+i)%3);g.c+=((t+i)%2?0.2:-0.15);return g;});
        return {text:beforeDiagram('На рисунках изображены графики функций вида \\(y=ax^2+bx+c\\). Установите соответствие между графиками функций и знаками коэффициентов \\(a\\) и \\(c\\).')+afterDiagram('КОЭФФИЦИЕНТЫ',[itm('1) \\(a\\gt0,\\ c\\lt0\\)'),itm('2) \\(a\\lt0,\\ c\\gt0\\)'),itm('3) \\(a\\gt0,\\ c\\gt0\\)')]),svg_code:tripleSvg(graphs,['А)','Б)','В)']),answer:ans,layout:'stacked11'};
    }

    function mixedSet7(t=0){
        const hk=[4,6,8,3,5][t%5], lk=[-1.2,-1.5,-0.8,-2,-1][t%5], lb=[3,4,2,3,4][t%5], qa=[-0.35,-0.45,-0.3,-0.5,-0.4][t%5];
        return [
            {latex:`\\(y=\\frac{${hk}}{x}\\)`,graph:{type:'hyperbola',k:hk}},
            {latex:`\\(y=${String(lk).replace('.',',')}x+${lb}\\)`,graph:{type:'line',k:lk,b:lb}},
            {latex:`\\(y=${String(qa).replace('.',',')}x^2\\)`,graph:{type:'parabola',a:qa,b:0,c:0}}
        ];
    }
    function make11_7(ans,t=0){const fs=mixedSet7(t),graphs=[...ans].map(d=>fs[Number(d)-1].graph);return{text:beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.')+afterDiagram('ФОРМУЛЫ',fs.map((f,i)=>itm(`${i+1}) ${f.latex}`))),svg_code:tripleSvg(graphs,['А)','Б)','В)']),answer:ans,layout:'stacked11'};}

    function mixedSet8(t=0){
        const a=[-0.45,-0.35,-0.5,-0.4,-0.3][t%5], bx=[-2,-1.5,-2.5,-1,-2][t%5], c=[-1,-2,-1.5,-2.5,-1][t%5];
        const hk=[-4,-6,-3,-5,-8][t%5], lk=[-0.5,-0.75,-0.4,-1,-0.6][t%5], lb=[-3,-2,-4,-3,-2][t%5];
        return [
            {latex:`\\(y=${String(a).replace('.',',')}x^2${bx<0?'':'+'}${String(bx).replace('.',',')}x${c<0?'':'+'}${String(c).replace('.',',')}\\)`,graph:{type:'parabola',a:a,b:bx,c:c}},
            {latex:`\\(y=\\frac{${hk}}{x}\\)`,graph:{type:'hyperbola',k:hk}},
            {latex:`\\(y=${String(lk).replace('.',',')}x${lb<0?'':'+'}${String(lb).replace('.',',')}\\)`,graph:{type:'line',k:lk,b:lb}}
        ];
    }
    function make11_8(ans,t=0){const fs=mixedSet8(t),order=invertLetterAnswer(ans),map={A:fs[0].graph,B:fs[1].graph,C:fs[2].graph},graphs=order.map(x=>map[x]);return{text:beforeDiagram('Установите соответствие между формулами, задающими функции, и графиками этих функций.',{heading:'ФОРМУЛЫ',items:[itm(`А) ${fs[0].latex}`),itm(`Б) ${fs[1].latex}`),itm(`В) ${fs[2].latex}`)]})+afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),svg_code:tripleSvg(graphs,['1)','2)','3)']),answer:ans,layout:'stacked11'};}

    function mixedSet9(t=0){
        const lk=[0.5,1,0.75,1.5,0.4][t%5], qc=[2,3,1.5,2.5,1][t%5], qa=[-0.45,-0.35,-0.5,-0.4,-0.3][t%5], rs=[1,1.2,0.8,1.4,1][t%5];
        return [
            {latex:`\\(y=${String(lk).replace('.',',')}x\\)`,graph:{type:'line',k:lk,b:0}},
            {latex:`\\(y=${String(qc).replace('.',',')}${qa<0?'-':'+'}${String(Math.abs(qa)).replace('.',',')}x^2\\)`,graph:{type:'parabola',a:qa,b:0,c:qc}},
            {latex:`\\(y=${rs===1?'':String(rs).replace('.',',')}\\sqrt{x}\\)`,graph:{type:'sqrt',scale:rs,shift:0}}
        ];
    }
    function make11_9(ans,t=0){const fs=mixedSet9(t),graphs=[...ans].map(d=>fs[Number(d)-1].graph);return{text:beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.')+afterDiagram('ФОРМУЛЫ',fs.map((f,i)=>itm(`${i+1}) ${f.latex}`))),svg_code:tripleSvg(graphs,['А)','Б)','В)']),answer:ans,layout:'stacked11'};}

    const theory11_1 = make11_1('231',0);
    const theory11_2 = make11_2('132',0);

    // Эталонные задачи разбора — формулы ровно из рабочей тетради.
    const theory11_3 = {
        text: beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.') + afterDiagram('ФОРМУЛЫ',[
            itm('1) \\(y=-3\\)'), itm('2) \\(y=x-3\\)'), itm('3) \\(y=-3x\\)')
        ]),
        svg_code: tripleSvg([
            {type:'line',k:-3,b:0}, {type:'line',k:1,b:-3}, {type:'line',k:0,b:-3}
        ],['А)','Б)','В)']), answer:'321', layout:'stacked11'
    };
    const theory11_4 = {
        text: beforeDiagram('Установите соответствие между формулами, задающими функции, и графиками этих функций.',{heading:'ФОРМУЛЫ',items:[
            itm('А) \\(y=-2x-4\\)'), itm('Б) \\(y=-2x+4\\)'), itm('В) \\(y=2x-4\\)')
        ]}) + afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),
        svg_code: tripleSvg([
            {type:'line',k:-2,b:-4}, {type:'line',k:-2,b:4}, {type:'line',k:2,b:-4}
        ],['1)','2)','3)']), answer:'123', layout:'stacked11'
    };

    const theory11_5 = make11_5('321',0);
    const theory11_6 = make11_6('312',0);
    const theory11_7 = {
        text: beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.') + afterDiagram('ФОРМУЛЫ',[
            itm('1) \\(y=\\frac{6}{x}\\)'), itm('2) \\(y=-2x+4\\)'), itm('3) \\(y=-2x^2\\)')
        ]),
        svg_code: tripleSvg([
            {type:'hyperbola',k:6}, {type:'parabola',a:-2,b:0,c:0}, {type:'line',k:-2,b:4}
        ],['А)','Б)','В)']), answer:'132', layout:'stacked11'
    };
    const theory11_8 = {
        text: beforeDiagram('Установите соответствие между формулами, задающими функции, и графиками этих функций.',{heading:'ФОРМУЛЫ',items:[
            itm('А) \\(y=-x^2-5x-2\\)'), itm('Б) \\(y=-\\frac{1}{3x}\\)'), itm('В) \\(y=-\\frac{1}{6}x-4\\)')
        ]}) + afterDiagram('',[], 'В таблице под каждой буквой укажите соответствующий номер.'),
        svg_code: tripleSvg([
            {type:'hyperbola',k:-1/3}, {type:'line',k:-1/6,b:-4}, {type:'parabola',a:-1,b:-5,c:-2}
        ],['1)','2)','3)']), answer:'312', layout:'stacked11'
    };
    const theory11_9 = {
        text: beforeDiagram('Установите соответствие между графиками функций и формулами, которые их задают.') + afterDiagram('ФОРМУЛЫ',[
            itm('1) \\(y=\\frac{1}{2}x\\)'), itm('2) \\(y=2-x^2\\)'), itm('3) \\(y=\\sqrt{x}\\)')
        ]),
        svg_code: tripleSvg([
            {type:'line',k:0.5,b:0}, {type:'sqrt',scale:1,shift:0}, {type:'parabola',a:-1,b:0,c:2}
        ],['А)','Б)','В)']), answer:'132', layout:'stacked11'
    };

    const task11Data = {
        title: "Задание 11. Графики функций",
        prototypes: [
            {
                desc: "11.1. Линейная функция: знаки коэффициентов",
                svg_code: theory11_1.svg_code,
                theory_task: theory11_1.text,
                theory_sol: "Для линейной функции \\(y=kx+b\\) знак \\(k\\) показывает направление прямой: при \\(k>0\\) функция возрастает, при \\(k<0\\) — убывает. Число \\(b\\) — ордината точки пересечения с осью \\(Oy\\). На графике 1 прямая возрастает и пересекает \\(Oy\\) ниже \\(Ox\\), значит это условие В. На графике 2 прямая убывает и \\(b<0\\), значит это А. На графике 3 прямая убывает и \\(b>0\\), значит это Б.<br><br><b>Ответ:</b> 231",
                tasks: ['312','123','231','231','123'].map((a,i)=>make11_1(a,i+1))
            },
            {
                desc: "11.2. Линейная функция: графики и знаки коэффициентов",
                svg_code: theory11_2.svg_code,
                theory_task: theory11_2.text,
                theory_sol: "Для каждого графика определяем знак \\(k\\) по направлению прямой, а знак \\(b\\) — по положению точки пересечения с осью \\(Oy\\). Для А получаем \\(k<0, b<0\\) — условие 1; для Б: \\(k>0, b>0\\) — условие 3; для В: \\(k<0, b>0\\) — условие 2.<br><br><b>Ответ:</b> 132",
                tasks: ['123','231','312','312','213'].map((a,i)=>make11_2(a,i+1))
            },
            {
                desc: "11.3. Линейная функция: графики и формулы",
                svg_code: theory11_3.svg_code,
                theory_task: theory11_3.text,
                theory_sol: "Сопоставляем графики с формулами по виду. Убывающая прямая через начало координат соответствует формуле вида \\(y=kx\\) с \\(k<0\\); возрастающая прямая со свободным членом — формуле вида \\(y=kx+b\\); горизонтальная прямая — формуле \\(y=b\\). В данном наборе получаем А–3, Б–2, В–1.<br><br><b>Ответ:</b> 321",
                tasks: ['132','213','132','123','123'].map((a,i)=>make11_3(a,i+1))
            },
            {
                desc: "11.4. Линейная функция: формулы и графики",
                svg_code: theory11_4.svg_code,
                theory_task: theory11_4.text,
                theory_sol: "В формуле \\(y=kx+b\\) знак \\(k\\) определяет направление прямой, а \\(b\\) — точку пересечения с осью \\(Oy\\). Поэтому для формулы А подходит график 1, для Б — график 2, для В — график 3.<br><br><b>Ответ:</b> 123",
                tasks: ['312','132','231','132','213'].map((a,i)=>make11_4(a,i+1))
            },
            {
                desc: "11.5. Квадратичная функция: знаки коэффициентов",
                svg_code: theory11_5.svg_code,
                theory_task: theory11_5.text,
                theory_sol: "Для функции \\(y=ax^2+bx+c\\) знак \\(a\\) определяет направление ветвей параболы: при \\(a>0\\) — вверх, при \\(a<0\\) — вниз. Число \\(c\\) равно ординате точки пересечения с осью \\(Oy\\). В данном наборе график 1 соответствует В, график 2 — Б, график 3 — А.<br><br><b>Ответ:</b> 321",
                tasks: ['312','231','132','132','132'].map((a,i)=>make11_5(a,i+1))
            },
            {
                desc: "11.6. Квадратичная функция: графики и знаки коэффициентов",
                svg_code: theory11_6.svg_code,
                theory_task: theory11_6.text,
                theory_sol: "Определяем знак \\(a\\) по направлению ветвей, а знак \\(c\\) — по пересечению графика с осью \\(Oy\\). Для А получаем условие 3, для Б — условие 1, для В — условие 2.<br><br><b>Ответ:</b> 312",
                tasks: ['312','231','321','321','123'].map((a,i)=>make11_6(a,i+1))
            },
            {
                desc: "11.7. Графики элементарных функций",
                svg_code: theory11_7.svg_code,
                theory_task: theory11_7.text,
                theory_sol: "Смотрим на характерную форму графика: гипербола соответствует функции вида \\(y=\\frac{k}{x}\\), парабола — квадратичной функции, прямая — линейной. В данном наборе А–1, Б–3, В–2.<br><br><b>Ответ:</b> 132",
                tasks: ['132','123','312','312','132'].map((a,i)=>make11_7(a,i+1))
            },
            {
                desc: "11.8. Формулы и графики элементарных функций",
                svg_code: theory11_8.svg_code,
                theory_task: theory11_8.text,
                theory_sol: "Сначала определяем тип каждой функции по формуле. Квадратичной функции соответствует парабола, функции обратной пропорциональности \\(y=\\frac{k}{x}\\) — гипербола, линейной функции \\(y=kx+b\\) — прямая. В данном наборе А–3, Б–1, В–2.<br><br><b>Ответ:</b> 312",
                tasks: ['132','312','312','312','123'].map((a,i)=>make11_8(a,i+1))
            },
            {
                desc: "11.9. Линейная, квадратичная и коренная функции",
                svg_code: theory11_9.svg_code,
                theory_task: theory11_9.text,
                theory_sol: "Прямая через начало координат соответствует линейной функции \\(y=kx\\). График, начинающийся в точке \\((0;0)\\) и определённый при \\(x\\ge0\\), соответствует коренной функции \\(y=\\sqrt{x}\\). Парабола соответствует квадратичной функции. Поэтому А–1, Б–3, В–2.<br><br><b>Ответ:</b> 132",
                tasks: ['132','132','132','321','312'].map((a,i)=>make11_9(a,i+1))
            }
        ]
    };

    window.database[11] = task11Data;
    window.database["task11"] = task11Data;
})();
