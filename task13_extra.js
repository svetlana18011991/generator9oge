"use strict";
(function(){
    window.extraDatabase = window.extraDatabase || {};

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
        // Для варианта «нет решений» числовую прямую не рисуем вообще.
        if (spec.empty) {
            s += `<text x="10" y="38" font-size="17" font-family="Arial" font-weight="600" fill="${AXIS}">нет решений</text>`;
            s += `</svg>`;
            return s;
        }
        s += `<line x1="${padL}" y1="${y}" x2="${width-padR}" y2="${y}" stroke="${AXIS}" stroke-width="1.8"/>`;
        s += `<path d="M${width-padR-7},${y-4} L${width-padR},${y} L${width-padR-7},${y+4}" fill="none" stroke="${AXIS}" stroke-width="1.6"/>`;
        s += `<text x="${width-padR-5}" y="${y+17}" font-size="13" font-family="serif" font-style="italic">x</text>`;
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
        // Для задания 13 текстовые варианты всегда размещаем 2×2:
        // два варианта сверху и два снизу. Так длинные интервалы не ломаются
        // и номер варианта не отрывается от самой формулы.
        const actualCols = items.length === 4 ? 2 : Math.min(cols, items.length || 1);
        return `<div class="task13-choice-grid" style="display:grid;grid-template-columns:repeat(${actualCols},minmax(0,1fr));column-gap:42px;row-gap:10px;margin:12px auto 4px;max-width:820px;line-height:1.45;">` +
            items.map((x,i)=>`<div style="display:flex;align-items:flex-start;gap:7px;min-width:0;"><b style="flex:0 0 auto;white-space:nowrap;">${i+1})</b><span style="display:inline-block;min-width:0;white-space:nowrap;">${x}</span></div>`).join('') + `</div>`;
    }

    function stacked(statement, choices='') {
        return `<div class="task11-extra-intro" style="font-size:17px;line-height:1.5;">${statement}</div>${choices}`;
    }

    const task13Extra = {
        title: "Задание 13. Дополнительные неравенства",
        prototypes: [

        {
            desc: "13.Д1. Линейное неравенство: выбрать рисунок",
            svg_code: choiceLinesSvg([rayLeft(3.5,true,"3,5"),rayRight(3.5,true,"3,5"),rayLeft(-1.5,true,"−1,5"),rayRight(-1.5,true,"−1,5")]),
            theory_task: stacked("Решите неравенство $4x+5\\ge6x-2$ и укажите рисунок с множеством решений."),
            theory_sol: "$4x+5\\ge6x-2$, значит $7\\ge2x$, то есть $x\\le3{,}5$. Нужен левый луч с закрашенной точкой $3{,}5$. Это вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Решите неравенство $x+4\\ge4x-5$ и укажите рисунок с множеством решений."), svg_code: choiceLinesSvg([rayRight(3,true,"3"),rayLeft(3,true,"3"),rayLeft(-3,true,"−3"),rayRight(-3,true,"−3")]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $x-1\\le3x+2$ и укажите рисунок с множеством решений."), svg_code: choiceLinesSvg([rayLeft(-1.5,true,"−1,5"),rayRight(-1.5,true,"−1,5"),rayLeft(1.5,true,"1,5"),rayRight(1.5,true,"1,5")]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $2x+5\\le5x-4$ и укажите рисунок с множеством решений."), svg_code: choiceLinesSvg([rayRight(3,true,"3"),rayLeft(3,true,"3"),rayRight(-3,true,"−3"),rayLeft(-3,true,"−3")]), layout:"stacked11", answer:"1"},
                {text: stacked("Решите неравенство $2x+4\\le-4x+1$ и укажите рисунок с множеством решений."), svg_code: choiceLinesSvg([rayRight(-0.5,true,"−0,5"),rayLeft(-0.5,true,"−0,5"),rayRight(0.5,true,"0,5"),rayLeft(0.5,true,"0,5")]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $3-x\\ge3x+5$ и укажите рисунок с множеством решений."), svg_code: choiceLinesSvg([rayRight(-0.5,true,"−0,5"),rayRight(0.5,true,"0,5"),rayLeft(0.5,true,"0,5"),rayLeft(-0.5,true,"−0,5")]), layout:"stacked11", answer:"4"}
            ]
        },
        {
            desc: "13.Д2. Линейные неравенства с раскрытием скобок",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $5x-3(5x-8)\\lt-7$.", choicesHtml(["$(-\\infty;3{,}1)$","$(-1{,}7;+\\infty)$","$(-\\infty;-1{,}7)$","$(3{,}1;+\\infty)$"])),
            theory_sol: "Раскроем скобки: $5x-15x+24\\lt-7$. Тогда $-10x\\lt-31$, а при делении на отрицательное число знак меняется: $x\\gt3{,}1$. Это вариант 4.<br><br><b>Ответ:</b> 4",
            tasks: [
                {text: stacked("Укажите решение неравенства $6x-3(4x+1)\\gt6$.", choicesHtml(["$(-1{,}5;+\\infty)$","$(-\\infty;-1{,}5)$","$(-\\infty;1{,}5)$","$(-0{,}5;+\\infty)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $3x-2(x-2)\\gt-4$.", choicesHtml(["$(0;+\\infty)$","$(-8;+\\infty)$","$(-\\infty;0)$","$(-\\infty;-8)$"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $5x-2(2x-8)\\lt-5$.", choicesHtml(["$(-\\infty;11)$","$(11;+\\infty)$","$(-\\infty;-21)$","$(-21;+\\infty)$"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $3x-2(x-5)\\le-6$.", choicesHtml(["$(-\\infty;-16]$","$(-\\infty;4]$","$[4;+\\infty)$","$[-16;+\\infty)$"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $2x-3(x-7)\\le3$.", choicesHtml(["$(-\\infty;-24]$","$(-\\infty;18]$","$[18;+\\infty)$","$[-24;+\\infty)$"])), answer:"3"}
            ]
        },
        {
            desc: "13.Д3. Линейное неравенство со скобками: решение на прямой",
            svg_code: choiceLinesSvg([rayRight(1.5,false,"1,5"),rayLeft(1.5,false,"1,5"),rayRight(-1.5,false,"−1,5"),rayLeft(-1.5,false,"−1,5")]),
            theory_task: stacked("Решите неравенство $2x-3(x-1)\\lt1{,}5$ и выберите подходящий рисунок."),
            theory_sol: "$2x-3x+3\\lt1{,}5$, откуда $-x\\lt-1{,}5$, значит $x\\gt1{,}5$. Точка открытая, луч направлен вправо. Это вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Решите неравенство $4x-2(3x-1)\\ge6$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(-2,true,"−2"),rayLeft(-2,true,"−2"),rayRight(2,true,"2"),rayLeft(2,true,"2")]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $7-2(2x+1)\\lt1$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(1,true,"1"),rayLeft(1,true,"1"),rayRight(-1,false,"−1"),rayRight(1,false,"1")]), layout:"stacked11", answer:"4"},
                {text: stacked("Решите неравенство $3(x+2)-x\\le10$ и выберите рисунок."), svg_code: choiceLinesSvg([rayLeft(2,true,"2"),rayRight(2,true,"2"),rayLeft(-2,true,"−2"),rayRight(-2,true,"−2")]), layout:"stacked11", answer:"1"},
                {text: stacked("Решите неравенство $5-3(x-1)\\gt-4$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(4,false,"4"),rayLeft(4,false,"4"),rayLeft(-4,false,"−4"),rayRight(-4,false,"−4")]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $2(3x-4)-5x\\ge-1$ и выберите рисунок."), svg_code: choiceLinesSvg([rayLeft(7,true,"7"),rayRight(7,true,"7"),rayRight(-7,true,"−7"),rayLeft(-7,true,"−7")]), layout:"stacked11", answer:"2"}
            ]
        },
        {
            desc: "13.Д4. Системы линейных неравенств с преобразованиями",
            svg_code: "",
            theory_task: stacked("Найдите множество решений системы $\\begin{cases}-8+4x\\gt0,\\\\4-3x\\gt-8.\\end{cases}$", choicesHtml(["нет решений","$(-\\infty;4)$","$(2;+\\infty)$","$(2;4)$"])),
            theory_sol: "Первое неравенство: $x\\gt2$. Второе: $-3x\\gt-12$, поэтому $x\\lt4$. Пересечение: $(2;4)$.<br><br><b>Ответ:</b> 4",
            tasks: [
                {text: stacked("Найдите множество решений системы $\\begin{cases}-10+2x\\gt0,\\\\7-6x\\gt-5.\\end{cases}$", choicesHtml(["нет решений","$(5;+\\infty)$","$(2;5)$","$(-\\infty;2)$"])), answer:"1"},
                {text: stacked("Найдите множество решений системы $\\begin{cases}6-2x\\le0,\\\\3x-12\\lt0.\\end{cases}$", choicesHtml(["$[3;4)$","$(-\\infty;3]$","$(4;+\\infty)$","нет решений"])), answer:"1"},
                {text: stacked("Найдите множество решений системы $\\begin{cases}5x+10\\ge0,\\\\2x-6\\le0.\\end{cases}$", choicesHtml(["$[-2;3]$","$(-\\infty;-2]$","$[3;+\\infty)$","нет решений"])), answer:"1"},
                {text: stacked("Найдите множество решений системы $\\begin{cases}4-2x\\gt0,\\\\3x+9\\ge0.\\end{cases}$", choicesHtml(["$[-3;2)$","$(-\\infty;-3]$","$(2;+\\infty)$","нет решений"])), answer:"1"},
                {text: stacked("Найдите множество решений системы $\\begin{cases}2x-1\\ge5,\\\\9-3x\\ge0.\\end{cases}$", choicesHtml(["$[3;+\\infty)$","$(-\\infty;3]$","$\\{3\\}$","нет решений"])), answer:"3"}
            ]
        },
        {
            desc: "13.Д5. Система линейных неравенств: выбрать рисунок",
            svg_code: choiceLinesSvg([between(2,4,false,false,"2","4"),rayLeft(4,false,"4"),rayRight(2,false,"2"),noLine()]),
            theory_task: stacked("Решите систему $\\begin{cases}-8+4x\\gt0,\\\\4-3x\\gt-8.\\end{cases}$ и выберите рисунок множества решений."),
            theory_sol: "Получаем $x\\gt2$ и $x\\lt4$. Пересечение — $(2;4)$, оба конца открыты. Это вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Решите систему $\\begin{cases}x-4{,}3\\gt0,\\\\x+5\\le10.\\end{cases}$ и выберите рисунок."), svg_code: choiceLinesSvg([between(4.3,5,false,true,"4,3","5"),rayRight(4.3,false,"4,3"),rayLeft(5,true,"5"),noLine()]), layout:"stacked11", answer:"1"},
                {text: stacked("Решите систему $\\begin{cases}x+0{,}7\\le0,\\\\x-1\\ge-5.\\end{cases}$ и выберите рисунок."), svg_code: choiceLinesSvg([between(-4,-0.7,true,true,"−4","−0,7"),rayLeft(-0.7,true,"−0,7"),rayRight(-4,true,"−4"),outside(-4,-0.7,true,true,"−4","−0,7")]), layout:"stacked11", answer:"1"},
                {text: stacked("Решите систему $\\begin{cases}-10+2x\\gt0,\\\\7-6x\\gt-5.\\end{cases}$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(5,false,"5"),between(2,5,false,false,"2","5"),noLine(),rayLeft(2,false,"2")]), layout:"stacked11", answer:"3"},
                {text: stacked("Решите систему $\\begin{cases}x\\lt3,\\\\4-x\\gt0.\\end{cases}$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(3,false,"3"),rayLeft(4,false,"4"),rayLeft(3,false,"3"),between(3,4,false,false,"3","4")]), layout:"stacked11", answer:"3"},
                {text: stacked("Решите систему $\\begin{cases}x-7{,}4\\ge0,\\\\x+2\\ge3.\\end{cases}$ и выберите рисунок."), svg_code: choiceLinesSvg([rayRight(1,true,"1"),between(1,7.4,true,true,"1","7,4"),rayRight(7.4,true,"7,4"),rayLeft(7.4,true,"7,4")]), layout:"stacked11", answer:"3"}
            ]
        },
        {
            desc: "13.Д6. Квадратные неравенства общего вида",
            svg_code: "",
            theory_task: stacked("Укажите решение неравенства $x^2-4x+3\\le0$.", choicesHtml(["$(-\\infty;1]\\cup[3;+\\infty)$","$[1;3]$","$(1;3)$","$(-\\infty;+\\infty)$"])),
            theory_sol: "Разложим: $x^2-4x+3=(x-1)(x-3)$. Ветви параболы направлены вверх, поэтому выражение неположительно между корнями, включая их: $[1;3]$.<br><br><b>Ответ:</b> 2",
            tasks: [
                {text: stacked("Укажите решение неравенства $x^2-5x+6\\le0$.", choicesHtml(["$(-\\infty;2]\\cup[3;+\\infty)$","$[2;3]$","$(2;3)$","нет решений"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $x^2+x-6\\gt0$.", choicesHtml(["$(-3;2)$","$(-\\infty;-3)\\cup(2;+\\infty)$","$[-3;2]$","нет решений"])), answer:"2"},
                {text: stacked("Укажите решение неравенства $x^2-2x-8\\lt0$.", choicesHtml(["$(-2;4)$","$(-\\infty;-2)\\cup(4;+\\infty)$","$[-2;4]$","нет решений"])), answer:"1"},
                {text: stacked("Укажите решение неравенства $x^2+5x+6\\ge0$.", choicesHtml(["$[-3;-2]$","$(-3;-2)$","$(-\\infty;-3]\\cup[-2;+\\infty)$","нет решений"])), answer:"3"},
                {text: stacked("Укажите решение неравенства $x^2-7x+10\\ge0$.", choicesHtml(["$[2;5]$","$(-\\infty;2]\\cup[5;+\\infty)$","$(2;5)$","нет решений"])), answer:"2"}
            ]
        },
        {
            desc: "13.Д7. Квадратное неравенство общего вида: выбрать рисунок",
            svg_code: choiceLinesSvg([between(1,3,true,true,"1","3"),outside(1,3,true,true,"1","3"),between(1,3,false,false,"1","3"),noLine()]),
            theory_task: stacked("Решите неравенство $x^2-4x+3\\le0$ и выберите рисунок множества решений."),
            theory_sol: "$(x-1)(x-3)\\le0$, поэтому решение — $[1;3]$. На числовой прямой это отрезок с двумя закрашенными концами — вариант 1.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Решите неравенство $x^2-5x+6\\le0$ и выберите рисунок."), svg_code: choiceLinesSvg([outside(2,3,true,true,"2","3"),between(2,3,true,true,"2","3"),between(2,3,false,false,"2","3"),noLine()]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $x^2+x-6\\gt0$ и выберите рисунок."), svg_code: choiceLinesSvg([between(-3,2,false,false,"−3","2"),outside(-3,2,false,false,"−3","2"),outside(-3,2,true,true,"−3","2"),noLine()]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $x^2-2x-8\\lt0$ и выберите рисунок."), svg_code: choiceLinesSvg([between(-2,4,true,true,"−2","4"),outside(-2,4,false,false,"−2","4"),between(-2,4,false,false,"−2","4"),noLine()]), layout:"stacked11", answer:"3"},
                {text: stacked("Решите неравенство $x^2+5x+6\\ge0$ и выберите рисунок."), svg_code: choiceLinesSvg([between(-3,-2,true,true,"−3","−2"),outside(-3,-2,true,true,"−3","−2"),outside(-3,-2,false,false,"−3","−2"),noLine()]), layout:"stacked11", answer:"2"},
                {text: stacked("Решите неравенство $x^2-7x+10\\ge0$ и выберите рисунок."), svg_code: choiceLinesSvg([between(2,5,true,true,"2","5"),outside(2,5,false,false,"2","5"),outside(2,5,true,true,"2","5"),noLine()]), layout:"stacked11", answer:"3"}
            ]
        },
        {
            desc: "13.Д8. Неравенство, верное для любого числа",
            svg_code: "",
            theory_task: stacked("Укажите неравенство, решением которого является любое действительное число.", choicesHtml(["$x^2+78\\gt0$","$x^2-78\\gt0$","$x^2+78\\lt0$","$x^2-78\\lt0$"])),
            theory_sol: "Для любого действительного $x$ имеем $x^2\\ge0$, значит $x^2+78\\gt0$ всегда. Остальные варианты выполняются не для всех $x$.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите неравенство, верное для любого действительного $x$.", choicesHtml(["$x^2-56\\gt0$","$x^2+56\\gt0$","$x^2-56\\lt0$","$x^2+56\\lt0$"])), answer:"2"},
                {text: stacked("Укажите неравенство, верное для любого действительного $x$.", choicesHtml(["$x^2+15\\gt0$","$x^2-15\\gt0$","$x^2-15\\lt0$","$x^2+15\\lt0$"])), answer:"1"},
                {text: stacked("Укажите неравенство, верное для любого действительного $x$.", choicesHtml(["$x^2+70\\lt0$","$x^2+70\\gt0$","$x^2-70\\lt0$","$x^2-70\\gt0$"])), answer:"2"},
                {text: stacked("Укажите неравенство, верное для любого действительного $x$.", choicesHtml(["$x^2-29\\gt0$","$x^2+29\\gt0$","$x^2-29\\lt0$","$x^2+29\\lt0$"])), answer:"2"},
                {text: stacked("Укажите неравенство, верное для любого действительного $x$.", choicesHtml(["$x^2+64\\lt0$","$x^2-64\\gt0$","$x^2+64\\gt0$","$x^2-64\\lt0$"])), answer:"3"}
            ]
        },
        {
            desc: "13.Д9. Квадратное неравенство без решений: простые случаи",
            svg_code: "",
            theory_task: stacked("Укажите неравенство, которое не имеет действительных решений.", choicesHtml(["$x^2+70\\lt0$","$x^2+70\\gt0$","$x^2-70\\lt0$","$x^2-70\\gt0$"])),
            theory_sol: "Так как $x^2\\ge0$, выражение $x^2+70$ всегда положительно. Поэтому неравенство $x^2+70\\lt0$ невозможно.<br><br><b>Ответ:</b> 1",
            tasks: [
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2+15\\ge0$","$x^2-15\\le0$","$x^2-15\\ge0$","$x^2+15\\le0$"])), answer:"4"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2+33\\lt0$","$x^2+33\\gt0$","$x^2-33\\lt0$","$x^2-33\\gt0$"])), answer:"1"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2+49\\ge0$","$x^2-49\\le0$","$x^2-49\\ge0$","$x^2+49\\le0$"])), answer:"4"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2-64\\lt0$","$x^2+64\\gt0$","$x^2+64\\lt0$","$x^2-64\\gt0$"])), answer:"3"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2-56\\le0$","$x^2+56\\ge0$","$x^2-56\\ge0$","$x^2+56\\le0$"])), answer:"4"}
            ]
        },
        {
            desc: "13.Д10. Нет решений: квадратный трёхчлен и дискриминант",
            svg_code: "",
            theory_task: stacked("Укажите неравенство, которое не имеет действительных решений.", choicesHtml(["$x^2+6x-51\\gt0$","$x^2+6x+51\\gt0$","$x^2+6x-51\\lt0$","$x^2+6x+51\\lt0$"])),
            theory_sol: "Рассмотрим $x^2+6x+51$. Его дискриминант $D=6^2-4\\cdot51=36-204=-168\\lt0$. Старший коэффициент положительный, значит трёхчлен всегда положителен. Поэтому $x^2+6x+51\\lt0$ решений не имеет.<br><br><b>Ответ:</b> 4",
            tasks: [
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2-2x-65\\lt0$","$x^2-2x+65\\lt0$","$x^2-2x-65\\gt0$","$x^2-2x+65\\gt0$"])), answer:"2"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2+9x-79\\lt0$","$x^2+9x+79\\gt0$","$x^2+9x+79\\lt0$","$x^2+9x-79\\gt0$"])), answer:"3"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2-5x+53\\lt0$","$x^2-5x-53\\lt0$","$x^2-5x+53\\gt0$","$x^2-5x-53\\gt0$"])), answer:"1"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2-8x-83\\gt0$","$x^2-8x+83\\gt0$","$x^2-8x-83\\lt0$","$x^2-8x+83\\lt0$"])), answer:"4"},
                {text: stacked("Укажите неравенство, которое не имеет решений.", choicesHtml(["$x^2+6x+12\\lt0$","$x^2+6x-12\\gt0$","$x^2+6x+12\\gt0$","$x^2+6x-12\\lt0$"])), answer:"1"}
            ]
        }

        ]
    };
    window.extraDatabase[13] = task13Extra;
    window.extraDatabase["task13"] = task13Extra;
})();
