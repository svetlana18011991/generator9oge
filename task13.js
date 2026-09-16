"use strict";
(function(){
    window.database = window.database || {};

    const AXIS = '#111827';
    const SOL = '#f59e0b';
    const MUTED = '#475569';

    function fmtLabel(v) {
        if (typeof v === 'string') return v;
        if (Number.isInteger(v)) return String(v);
        return String(v).replace('.', ',');
    }

    function numberLineSvg(spec, width = 270, height = 74) {
        const finite = [];
        (spec.segments || []).forEach(seg => {
            if (Number.isFinite(seg.from)) finite.push(seg.from);
            if (Number.isFinite(seg.to)) finite.push(seg.to);
        });
        (spec.points || []).forEach(p => { if (Number.isFinite(p.x)) finite.push(p.x); });
        let min = finite.length ? Math.min(...finite) : -2;
        let max = finite.length ? Math.max(...finite) : 2;
        if (min === max) { min -= 2; max += 2; }
        const span = max - min;
        min -= Math.max(1.2, span * 0.55);
        max += Math.max(1.2, span * 0.55);
        const padL = 18, padR = 20, y = 31;
        const X = x => padL + (x - min) / (max - min) * (width - padL - padR);
        let s = `<svg viewBox="0 0 ${width} ${height}" style="display:block;width:100%;height:auto;overflow:visible">`;
        s += `<line x1="${padL}" y1="${y}" x2="${width-padR}" y2="${y}" stroke="${AXIS}" stroke-width="1.8"/>`;
        s += `<path d="M${width-padR-7},${y-4} L${width-padR},${y} L${width-padR-7},${y+4}" fill="none" stroke="${AXIS}" stroke-width="1.6"/>`;
        s += `<text x="${width-padR-5}" y="${y+17}" font-size="13" font-family="serif" font-style="italic">x</text>`;
        if (spec.empty) {
            s += `<text x="${width/2}" y="${y+2}" text-anchor="middle" font-size="14" font-family="Arial" fill="${MUTED}">нет решений</text>`;
        }
        (spec.segments || []).forEach(seg => {
            const x1 = Number.isFinite(seg.from) ? X(seg.from) : padL;
            const x2 = Number.isFinite(seg.to) ? X(seg.to) : width-padR;
            s += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${SOL}" stroke-width="6" stroke-linecap="round"/>`;
        });
        const points = spec.points || [];
        points.forEach(p => {
            const px = X(p.x);
            s += p.closed
                ? `<circle cx="${px}" cy="${y}" r="4" fill="${AXIS}" stroke="${AXIS}" stroke-width="1.5"/>`
                : `<circle cx="${px}" cy="${y}" r="4.2" fill="white" stroke="${AXIS}" stroke-width="1.6"/>`;
            s += `<text x="${px}" y="${y+21}" text-anchor="middle" font-size="13" font-family="Arial" fill="${AXIS}">${fmtLabel(p.label ?? p.x)}</text>`;
        });
        s += `</svg>`;
        return s;
    }

    function choiceLinesSvg(specs, cols = 2) {
        const cardW = 310, cardH = 104;
        const rows = Math.ceil(specs.length / cols);
        const W = cols * cardW, H = rows * cardH;
        let body = '';
        specs.forEach((spec, i) => {
            const c = i % cols, r = Math.floor(i / cols);
            const x = c * cardW, y = r * cardH;
            body += `<g transform="translate(${x},${y})"><text x="8" y="19" font-size="17" font-family="Arial" font-weight="700">${i+1})</text>`;
            body += `<foreignObject x="34" y="4" width="270" height="82"><div xmlns="http://www.w3.org/1999/xhtml" style="width:270px;height:82px">${numberLineSvg(spec,270,74)}</div></foreignObject></g>`;
        });
        return `<div style="width:100%;max-width:760px;margin:10px auto 12px;"><svg viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:auto">${body}</svg></div>`;
    }

    function targetLineSvg(spec) {
        return `<div style="width:100%;max-width:560px;margin:10px auto 12px;">${numberLineSvg(spec,560,82)}</div>`;
    }

    function rayLeft(x, closed=true, label=x) {
        return {segments:[{from:-Infinity,to:x}], points:[{x,closed,label}]};
    }
    function rayRight(x, closed=true, label=x) {
        return {segments:[{from:x,to:Infinity}], points:[{x,closed,label}]};
    }
    function between(a,b,leftClosed=true,rightClosed=true,labelA=a,labelB=b) {
        return {segments:[{from:a,to:b}], points:[{x:a,closed:leftClosed,label:labelA},{x:b,closed:rightClosed,label:labelB}]};
    }
    function outside(a,b,leftClosed=true,rightClosed=true,labelA=a,labelB=b) {
        return {segments:[{from:-Infinity,to:a},{from:b,to:Infinity}], points:[{x:a,closed:leftClosed,label:labelA},{x:b,closed:rightClosed,label:labelB}]};
    }
    function allLine() { return {segments:[{from:-Infinity,to:Infinity}], points:[]}; }
    function noLine() { return {segments:[], points:[], empty:true}; }

    function choicesHtml(items, cols=4) {
        return `<div class="task11-extra-after-diagram" style="display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:8px 16px;margin-top:10px;line-height:1.45;">` +
            items.map((x,i)=>`<div><b>${i+1})</b> ${x}</div>`).join('') + `</div>`;
    }

    function stacked(statement, choices='') {
        return `<div class="task11-extra-intro" style="font-size:17px;line-height:1.5;">${statement}</div>${choices}`;
    }

    const task13Data = {
        title: "Задание 13. Неравенства",
        prototypes: [

        {
            desc: "13.1. Линейные неравенства",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $-5-x\\lt 2x+4$.", choicesHtml(["$(-\\infty;-3)$","$(-3;+\\infty)$","$(-\\infty;3)$","$(3;+\\infty)$"])),
            theory_sol: "Перенесём числа влево, слагаемые с $x$ вправо:<br>\\[-5-4\\lt2x+x,\\qquad -9\\lt3x,\\qquad x\\gt-3.\\]<br>Следовательно, решение — $(-3;+\\infty)$. Это вариант 2.<br><br><b>Ответ:</b> 2",
            tasks: [
                {text: stacked("Укажите решение неравенства $-6-x\\lt2x+6$.", choicesHtml(["$(-\\infty;-4)$","$(-4;+\\infty)$","$(-\\infty;-2)$","$(-2;+\\infty)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $8-x\\lt2x+2$.", choicesHtml(["$(-\\infty;-1)$","$(-\\infty;2)$","$(-1;+\\infty)$","$(2;+\\infty)$"])), answer:"4"},
                {text: stacked("Укажите решение неравенства $-4-x\\lt x-1$.", choicesHtml(["$(-1{,}5;+\\infty)$","$(0{,}5;+\\infty)$","$(-\\infty;-1{,}5)$","$(-\\infty;0{,}5)$"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $5-x\\lt3x+3$.", choicesHtml(["$(-2{,}5;+\\infty)$","$(-\\infty;-2{,}5)$","$(0{,}5;+\\infty)$","$(-\\infty;0{,}5)$"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $-7-x\\lt4x+5$.", choicesHtml(["$(-\\infty;-2{,}4)$","$(-\\infty;-0{,}4)$","$(-2{,}4;+\\infty)$","$(-0{,}4;+\\infty)$"])), answer:"3"}
            ]
        },
        {
            desc: "13.2. Система линейных неравенств: луч",
            svg_code: choiceLinesSvg([rayRight(-7,true,"−7"), rayRight(-2.5,true,"−2,5"), between(-7,-2.5,true,true,"−7","−2,5"), outside(-7,-2.5,true,true,"−7","−2,5")]),
            theory_task: stacked("Укажите решение системы $\\begin{cases}x+4\\ge-3,\\\\x+2{,}5\\ge0.\\end{cases}$"),
            theory_sol: "Решаем неравенства отдельно: $x\\ge-7$ и $x\\ge-2{,}5$. Их пересечение: $x\\ge-2{,}5$. На рисунках это вариант 2.<br><br><b>Ответ:</b> 2",
            tasks: [
                {text: stacked("Укажите решение системы $\\begin{cases}x+5\\ge-1,\\\\x+2{,}4\\ge0.\\end{cases}$"), svg_code: choiceLinesSvg([rayRight(-6,true,"−6"),rayRight(-2.4,true,"−2,4"),between(-6,-2.4,true,true,"−6","−2,4"),outside(-6,-2.4,true,true,"−6","−2,4")]), layout:"stacked11", answer:"2"},
                {text: stacked("Укажите решение системы $\\begin{cases}x+2\\ge-5,\\\\x+3{,}2\\ge0.\\end{cases}$"), svg_code: choiceLinesSvg([between(-7,-3.2,true,true,"−7","−3,2"),rayRight(-7,true,"−7"),outside(-7,-3.2,true,true,"−7","−3,2"),rayRight(-3.2,true,"−3,2")]), layout:"stacked11", answer:"4"},
                {text: stacked("Укажите решение системы $\\begin{cases}x+7\\ge1,\\\\x+1{,}5\\ge0.\\end{cases}$"), svg_code: choiceLinesSvg([rayRight(-1.5,true,"−1,5"),between(-6,-1.5,true,true,"−6","−1,5"),rayRight(-6,true,"−6"),outside(-6,-1.5,true,true,"−6","−1,5")]), layout:"stacked11", answer:"1"},
                {text: stacked("Укажите решение системы $\\begin{cases}x+1\\ge-3,\\\\x+0{,}8\\ge0.\\end{cases}$"), svg_code: choiceLinesSvg([between(-4,-0.8,true,true,"−4","−0,8"),outside(-4,-0.8,true,true,"−4","−0,8"),rayRight(-0.8,true,"−0,8"),rayRight(-4,true,"−4")]), layout:"stacked11", answer:"3"},
                {text: stacked("Укажите решение системы $\\begin{cases}x+6\\ge2,\\\\x+2{,}2\\ge0.\\end{cases}$"), svg_code: choiceLinesSvg([rayRight(-4,true,"−4"),between(-4,-2.2,true,true,"−4","−2,2"),rayRight(-2.2,true,"−2,2"),outside(-4,-2.2,true,true,"−4","−2,2")]), layout:"stacked11", answer:"3"}
            ]
        },
        {
            desc: "13.3. Система линейных неравенств: отрезок",
            svg_code: "",
            theory_task: stacked("Укажите решение системы $\\begin{cases}x-4{,}8\\le0,\\\\x-1{,}2\\ge1{,}8.\\end{cases}$", choicesHtml(["$[3;4{,}8]$","$(-\\infty;4{,}8]$","$(-\\infty;3]\\cup[4{,}8;+\\infty)$","$[3;+\\infty)$"])),
            theory_sol: "Первое неравенство даёт $x\\le4{,}8$, второе — $x\\ge3$. Пересечение: $[3;4{,}8]$. Это вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите решение системы $\\begin{cases}x-5{,}4\\le0,\\\\x-1{,}4\\ge2.\\end{cases}$", choicesHtml(["$[3{,}4;5{,}4]$","$(-\\infty;5{,}4]$","$(-\\infty;3{,}4]\\cup[5{,}4;+\\infty)$","$[3{,}4;+\\infty)$"])), answer:"1"},
                {text: stacked("Укажите решение системы $\\begin{cases}x-6{,}2\\le0,\\\\x-2{,}1\\ge1{,}9.\\end{cases}$", choicesHtml(["$(-\\infty;4]\\cup[6{,}2;+\\infty)$","$[4;6{,}2]$","$[4;+\\infty)$","$(-\\infty;6{,}2]$"])), answer:"2"},
                {text: stacked("Укажите решение системы $\\begin{cases}x-3{,}8\\le0,\\\\x-0{,}7\\ge1{,}6.\\end{cases}$", choicesHtml(["$(-\\infty;3{,}8]$","$[2{,}3;+\\infty)$","$[2{,}3;3{,}8]$","$(-\\infty;2{,}3]\\cup[3{,}8;+\\infty)$"])), answer:"3"},
                {text: stacked("Укажите решение системы $\\begin{cases}x-7{,}5\\le0,\\\\x-2{,}5\\ge3{,}1.\\end{cases}$", choicesHtml(["$[5{,}6;+\\infty)$","$(-\\infty;5{,}6]\\cup[7{,}5;+\\infty)$","$(-\\infty;7{,}5]$","$[5{,}6;7{,}5]$"])), answer:"4"},
                {text: stacked("Укажите решение системы $\\begin{cases}x-4{,}6\\le0,\\\\x-1{,}1\\ge2{,}2.\\end{cases}$", choicesHtml(["$[3{,}3;4{,}6]$","$(-\\infty;3{,}3]\\cup[4{,}6;+\\infty)$","$(-\\infty;4{,}6]$","$[3{,}3;+\\infty)$"])), answer:"1"}
            ]
        },
        {
            desc: "13.4. Квадратичное неравенство $kx-x^2\\ge0$",
            svg_code: choiceLinesSvg([rayRight(3,true,"3"),outside(0,3,true,true,"0","3"),rayLeft(0,true,"0"),between(0,3,true,true,"0","3")]),
            theory_task: stacked("Укажите решение неравенства $3x-x^2\\ge0$."),
            theory_sol: "Разложим: $3x-x^2=x(3-x)$. Нули: $0$ и $3$. Выражение неотрицательно между нулями, включая их: $[0;3]$. В нашей схеме это вариант 4.<br><br><b>Ответ:</b> 4",
            tasks: [
                {text: stacked("Укажите решение неравенства $4x-x^2\\ge0$."), svg_code: choiceLinesSvg([rayRight(4,true,"4"),outside(0,4,true,true,"0","4"),rayLeft(0,true,"0"),between(0,4,true,true,"0","4")]), layout:"stacked11", answer:"4"},
                {text: stacked("Укажите решение неравенства $5x-x^2\\ge0$."), svg_code: choiceLinesSvg([rayLeft(0,true,"0"),rayRight(5,true,"5"),between(0,5,true,true,"0","5"),outside(0,5,true,true,"0","5")]), layout:"stacked11", answer:"3"},
                {text: stacked("Укажите решение неравенства $6x-x^2\\ge0$."), svg_code: choiceLinesSvg([outside(0,6,true,true,"0","6"),between(0,6,true,true,"0","6"),rayRight(6,true,"6"),rayLeft(0,true,"0")]), layout:"stacked11", answer:"2"},
                {text: stacked("Укажите решение неравенства $2x-x^2\\ge0$."), svg_code: choiceLinesSvg([between(0,2,true,true,"0","2"),rayLeft(0,true,"0"),outside(0,2,true,true,"0","2"),rayRight(2,true,"2")]), layout:"stacked11", answer:"1"},
                {text: stacked("Укажите решение неравенства $7x-x^2\\ge0$."), svg_code: choiceLinesSvg([rayRight(7,true,"7"),rayLeft(0,true,"0"),outside(0,7,true,true,"0","7"),between(0,7,true,true,"0","7")]), layout:"stacked11", answer:"4"}
            ]
        },
        {
            desc: "13.5. Квадратичное неравенство $kx-x^2\\lt0$",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $4x-x^2\\lt0$.", choicesHtml(["$(0;4)$","$(0;+\\infty)$","$(4;+\\infty)$","$(-\\infty;0)\\cup(4;+\\infty)$"])),
            theory_sol: "$4x-x^2=x(4-x)$. Корни $0$ и $4$. Выражение отрицательно вне промежутка между корнями: $(-\\infty;0)\\cup(4;+\\infty)$.<br><br><b>Ответ:</b> 4",
            tasks: [
                {text: stacked("Укажите решение неравенства $2x-x^2\\lt0$.", choicesHtml(["$(0;2)$","$(0;+\\infty)$","$(2;+\\infty)$","$(-\\infty;0)\\cup(2;+\\infty)$"])), answer:"4"},
                {text: stacked("Укажите решение неравенства $5x-x^2\\lt0$.", choicesHtml(["$(5;+\\infty)$","$(0;5)$","$(-\\infty;0)\\cup(5;+\\infty)$","$(0;+\\infty)$"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $3x-x^2\\lt0$.", choicesHtml(["$(0;+\\infty)$","$(-\\infty;0)\\cup(3;+\\infty)$","$(0;3)$","$(3;+\\infty)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $6x-x^2\\lt0$.", choicesHtml(["$(-\\infty;0)\\cup(6;+\\infty)$","$(6;+\\infty)$","$(0;+\\infty)$","$(0;6)$"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $8x-x^2\\lt0$.", choicesHtml(["$(0;8)$","$(8;+\\infty)$","$(0;+\\infty)$","$(-\\infty;0)\\cup(8;+\\infty)$"])), answer:"4"}
            ]
        },
        {
            desc: "13.6. Произведение двух множителей: $\\le0$",
            svg_code: choiceLinesSvg([between(-2,5,true,true,"−2","5"),outside(-2,5,true,true,"−2","5"),rayRight(5,true,"5"),rayLeft(-2,true,"−2")]),
            theory_task: stacked("Укажите решение неравенства $(x+2)(x-5)\\le0$."),
            theory_sol: "Нули множителей: $x=-2$ и $x=5$. При положительном старшем коэффициенте произведение неположительно между корнями, включая их: $[-2;5]$. Это вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите решение неравенства $(x+3)(x-4)\\le0$."), svg_code: choiceLinesSvg([between(-3,4,true,true,"−3","4"),outside(-3,4,true,true,"−3","4"),rayRight(4,true,"4"),rayLeft(-3,true,"−3")]), layout:"stacked11", answer:"1"},
                {text: stacked("Укажите решение неравенства $(x+5)(x-2)\\le0$."), svg_code: choiceLinesSvg([rayRight(2,true,"2"),between(-5,2,true,true,"−5","2"),rayLeft(-5,true,"−5"),outside(-5,2,true,true,"−5","2")]), layout:"stacked11", answer:"2"},
                {text: stacked("Укажите решение неравенства $(x+2)(x-8)\\le0$."), svg_code: choiceLinesSvg([outside(-2,8,true,true,"−2","8"),rayLeft(-2,true,"−2"),between(-2,8,true,true,"−2","8"),rayRight(8,true,"8")]), layout:"stacked11", answer:"3"},
                {text: stacked("Укажите решение неравенства $(x+6)(x-3)\\le0$."), svg_code: choiceLinesSvg([rayLeft(-6,true,"−6"),rayRight(3,true,"3"),outside(-6,3,true,true,"−6","3"),between(-6,3,true,true,"−6","3")]), layout:"stacked11", answer:"4"},
                {text: stacked("Укажите решение неравенства $(x+4)(x-9)\\le0$."), svg_code: choiceLinesSvg([between(-4,9,true,true,"−4","9"),rayRight(9,true,"9"),outside(-4,9,true,true,"−4","9"),rayLeft(-4,true,"−4")]), layout:"stacked11", answer:"1"}
            ]
        },
        {
            desc: "13.7. Произведение двух множителей: $\\gt0$",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $(x+4)(x-7)\\gt0$.", choicesHtml(["$(7;+\\infty)$","$(-4;+\\infty)$","$(-\\infty;-4)\\cup(7;+\\infty)$","$(-4;7)$"])),
            theory_sol: "Нули: $-4$ и $7$. Произведение положительно вне промежутка между корнями: $(-\\infty;-4)\\cup(7;+\\infty)$.<br><br><b>Ответ:</b> 3",
            tasks: [
                {text: stacked("Укажите решение неравенства $(x+2)(x-5)\\gt0$.", choicesHtml(["$(5;+\\infty)$","$(-2;+\\infty)$","$(-\\infty;-2)\\cup(5;+\\infty)$","$(-2;5)$"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $(x+5)(x-8)\\gt0$.", choicesHtml(["$(-\\infty;-5)\\cup(8;+\\infty)$","$(8;+\\infty)$","$(-5;8)$","$(-5;+\\infty)$"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $(x+1)(x-4)\\gt0$.", choicesHtml(["$(-1;+\\infty)$","$(-1;4)$","$(4;+\\infty)$","$(-\\infty;-1)\\cup(4;+\\infty)$"])), answer:"4"},
                {text: stacked("Укажите решение неравенства $(x+6)(x-7)\\gt0$.", choicesHtml(["$(-6;7)$","$(-\\infty;-6)\\cup(7;+\\infty)$","$(-6;+\\infty)$","$(7;+\\infty)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $(x+3)(x-9)\\gt0$.", choicesHtml(["$(9;+\\infty)$","$(-\\infty;-3)\\cup(9;+\\infty)$","$(-3;+\\infty)$","$(-3;9)$"])), answer:"2"}
            ]
        },
        {
            desc: "13.8. Неравенства вида $x^2\\lt a^2$",
            svg_code: choiceLinesSvg([between(-4,4,false,false,"−4","4"),rayRight(4,false,"4"),outside(-4,4,false,false,"−4","4"),rayLeft(-4,false,"−4")]),
            theory_task: stacked("Укажите решение неравенства $x^2\\lt16$."),
            theory_sol: "$x^2\\lt16$ равносильно $|x|\\lt4$, то есть $-4\\lt x\\lt4$. Это интервал $(-4;4)$ — вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите решение неравенства $x^2\\lt4$."), svg_code: choiceLinesSvg([between(-2,2,false,false,"−2","2"),rayRight(2,false,"2"),outside(-2,2,false,false,"−2","2"),rayLeft(-2,false,"−2")]), layout:"stacked11", answer:"1"},
                {text: stacked("Укажите решение неравенства $x^2\\lt25$."), svg_code: choiceLinesSvg([outside(-5,5,false,false,"−5","5"),between(-5,5,false,false,"−5","5"),rayLeft(-5,false,"−5"),rayRight(5,false,"5")]), layout:"stacked11", answer:"2"},
                {text: stacked("Укажите решение неравенства $x^2\\lt36$."), svg_code: choiceLinesSvg([rayRight(6,false,"6"),rayLeft(-6,false,"−6"),between(-6,6,false,false,"−6","6"),outside(-6,6,false,false,"−6","6")]), layout:"stacked11", answer:"3"},
                {text: stacked("Укажите решение неравенства $x^2\\lt49$."), svg_code: choiceLinesSvg([rayLeft(-7,false,"−7"),outside(-7,7,false,false,"−7","7"),rayRight(7,false,"7"),between(-7,7,false,false,"−7","7")]), layout:"stacked11", answer:"4"},
                {text: stacked("Укажите решение неравенства $x^2\\lt64$."), svg_code: choiceLinesSvg([between(-8,8,false,false,"−8","8"),outside(-8,8,false,false,"−8","8"),rayRight(8,false,"8"),rayLeft(-8,false,"−8")]), layout:"stacked11", answer:"1"}
            ]
        },
        {
            desc: "13.9. Неравенства вида $x^2-a^2\\gt0$",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $x^2-36\\gt0$.", choicesHtml(["$(-\\infty;-6)\\cup(6;+\\infty)$","$(-6;6)$","нет решений","$(-\\infty;+\\infty)$"])),
            theory_sol: "$x^2-36=(x-6)(x+6)$. Выражение положительно вне корней $-6$ и $6$: $(-\\infty;-6)\\cup(6;+\\infty)$.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите решение неравенства $x^2-9\\gt0$.", choicesHtml(["$(-\\infty;-3)\\cup(3;+\\infty)$","$(-3;3)$","нет решений","$(-\\infty;+\\infty)$"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $x^2-16\\gt0$.", choicesHtml(["нет решений","$(-\\infty;-4)\\cup(4;+\\infty)$","$(-\\infty;+\\infty)$","$(-4;4)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $x^2-49\\gt0$.", choicesHtml(["$(-7;7)$","$(-\\infty;+\\infty)$","$(-\\infty;-7)\\cup(7;+\\infty)$","нет решений"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $x^2-64\\gt0$.", choicesHtml(["$(-\\infty;+\\infty)$","нет решений","$(-8;8)$","$(-\\infty;-8)\\cup(8;+\\infty)$"])), answer:"4"},
                {text: stacked("Укажите решение неравенства $x^2-81\\gt0$.", choicesHtml(["$(-\\infty;-9)\\cup(9;+\\infty)$","нет решений","$(-9;9)$","$(-\\infty;+\\infty)$"])), answer:"1"}
            ]
        },
        {
            desc: "13.10. По множеству решений выбрать неравенство",
            svg_code: targetLineSvg(outside(0,5,false,false,"0","5")),
            theory_task: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-5x\\lt0$","$x^2-25\\gt0$","$x^2-5x\\gt0$","$x^2-25\\lt0$"])),
            theory_sol: "На рисунке показано $x\\lt0$ или $x\\gt5$. Выражение $x(x-5)=x^2-5x$ положительно именно вне корней. Поэтому подходит $x^2-5x\\gt0$.<br><br><b>Ответ:</b> 3",
            tasks: [
                {text: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-4x\\lt0$","$x^2-16\\gt0$","$x^2-4x\\gt0$","$x^2-16\\lt0$"])), svg_code: targetLineSvg(outside(0,4,false,false,"0","4")), layout:"stacked11", answer:"3"},
                {text: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-6x\\gt0$","$x^2-6x\\lt0$","$x^2-36\\lt0$","$x^2-36\\gt0$"])), svg_code: targetLineSvg(outside(0,6,false,false,"0","6")), layout:"stacked11", answer:"1"},
                {text: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-64\\gt0$","$x^2-64\\lt0$","$x^2-8x\\lt0$","$x^2-8x\\gt0$"])), svg_code: targetLineSvg(outside(0,8,false,false,"0","8")), layout:"stacked11", answer:"4"},
                {text: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-81\\lt0$","$x^2-9x\\gt0$","$x^2-81\\gt0$","$x^2-9x\\lt0$"])), svg_code: targetLineSvg(outside(0,9,false,false,"0","9")), layout:"stacked11", answer:"2"},
                {text: stacked("Укажите неравенство, решение которого изображено на рисунке.", choicesHtml(["$x^2-10x\\lt0$","$x^2-10x\\gt0$","$x^2-100\\gt0$","$x^2-100\\lt0$"])), svg_code: targetLineSvg(outside(0,10,false,false,"0","10")), layout:"stacked11", answer:"2"}
            ]
        }

        ]
    };
    window.database[13] = task13Data;
    window.database["task13"] = task13Data;
})();
