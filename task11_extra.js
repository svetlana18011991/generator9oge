"use strict";
(function () {
    window.extraDatabase = window.extraDatabase || {};

    const BLUE = "#2f7edb";
    const GRID = "#d7dce2";
    const AXIS = "#111";
    const CURVE = "#111";

    function fmt(n) {
        return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100).replace(".", ",");
    }

    function pathFor(fn, xmin, xmax, ymin, ymax, left, top, width, height, steps = 220) {
        const X = x => left + (x - xmin) / (xmax - xmin) * width;
        const Y = y => top + height - (y - ymin) / (ymax - ymin) * height;
        let d = "";
        let drawing = false;
        let prevY = null;
        for (let i = 0; i <= steps; i++) {
            const x = xmin + (xmax - xmin) * i / steps;
            const y = fn(x);
            const valid = Number.isFinite(y) && y >= ymin - (ymax - ymin) * 0.08 && y <= ymax + (ymax - ymin) * 0.08;
            const jump = prevY !== null && Math.abs(y - prevY) > (ymax - ymin) * 0.45;
            if (!valid || jump) {
                drawing = false;
                prevY = Number.isFinite(y) ? y : null;
                continue;
            }
            d += `${drawing ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `;
            drawing = true;
            prevY = y;
        }
        return d.trim();
    }

    function plotPanel(label, fn, cfg = {}) {
        const w = cfg.w || 250;
        const h = cfg.h || 185;
        const xmin = cfg.xmin ?? -6;
        const xmax = cfg.xmax ?? 6;
        const ymin = cfg.ymin ?? -8;
        const ymax = cfg.ymax ?? 8;
        const padL = 25, padR = 12, padT = 14, padB = 18;

        const usableW = w - padL - padR;
        const usableH = h - padT - padB;
        const xRange = xmax - xmin;
        const yRange = ymax - ymin;
        const unit = Math.min(usableW / xRange, usableH / yRange);

        const gw = unit * xRange;
        const gh = unit * yRange;
        const left = padL + (usableW - gw) / 2;
        const top = padT + (usableH - gh) / 2;

        const X = x => left + (x - xmin) * unit;
        const Y = y => top + gh - (y - ymin) * unit;

        let s = `<g>`;
        if (label) s += `<text x="5" y="22" font-size="18" font-weight="700" font-family="Arial">${label}</text>`;

        for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x++) {
            const px = X(x);
            s += `<line x1="${px}" y1="${top}" x2="${px}" y2="${top + gh}" stroke="${GRID}" stroke-width="0.8"/>`;
        }
        for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y++) {
            const py = Y(y);
            s += `<line x1="${left}" y1="${py}" x2="${left + gw}" y2="${py}" stroke="${GRID}" stroke-width="0.8"/>`;
        }

        if (xmin <= 0 && xmax >= 0) {
            const px = X(0);
            s += `<line x1="${px}" y1="${top}" x2="${px}" y2="${top + gh}" stroke="${AXIS}" stroke-width="1.8"/>`;
            s += `<path d="M${px - 4},${top + 7} L${px},${top} L${px + 4},${top + 7}" fill="none" stroke="${AXIS}" stroke-width="1.6"/>`;
            s += `<text x="${px + 5}" y="${top + 13}" font-size="13" font-family="serif" font-style="italic">y</text>`;
        }
        if (ymin <= 0 && ymax >= 0) {
            const py = Y(0);
            s += `<line x1="${left}" y1="${py}" x2="${left + gw}" y2="${py}" stroke="${AXIS}" stroke-width="1.8"/>`;
            s += `<path d="M${left + gw - 7},${py - 4} L${left + gw},${py} L${left + gw - 7},${py + 4}" fill="none" stroke="${AXIS}" stroke-width="1.6"/>`;
            s += `<text x="${left + gw - 11}" y="${py + 15}" font-size="13" font-family="serif" font-style="italic">x</text>`;
        }
        if (xmin <= 0 && xmax >= 0 && ymin <= 0 && ymax >= 0) {
            s += `<text x="${X(0) + 4}" y="${Y(0) + 14}" font-size="11" font-family="Arial">0</text>`;
        }

        s += `<path d="${pathFor(fn, xmin, xmax, ymin, ymax, left, top, gw, gh)}" fill="none" stroke="${CURVE}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
        s += `</g>`;
        return { html: s, w, h };
    }

    function singleParabolaSVG(a, h0, k0, cfg = {}) {
        const fn = x => a * (x - h0) * (x - h0) + k0;
        const p = plotPanel("", fn, { w: 520, h: 280, xmin: cfg.xmin ?? -6, xmax: cfg.xmax ?? 8, ymin: cfg.ymin ?? -12, ymax: cfg.ymax ?? 12 });
        return `<div style="max-width:560px;margin:10px auto 14px;"><svg viewBox="0 0 ${p.w} ${p.h}" style="display:block;width:100%;height:auto;">${p.html}</svg></div>`;
    }

    function fourParabolasSVG(patterns) {
        const labels = ["A)", "Б)", "В)", "Г)"];
        const panels = patterns.map((pat, i) => {
            const a = pat[0] === "+" ? 0.55 : -0.55;
            const c = pat[1] === "+" ? 2.2 : -2.2;
            return plotPanel(labels[i], x => a * x * x + c, { w: 210, h: 165, xmin: -4, xmax: 4, ymin: -5, ymax: 5 });
        });
        let body = "";
        panels.forEach((p, i) => { body += `<g transform="translate(${i * 210},0)">${p.html}</g>`; });
        return `<div style="max-width:880px;margin:10px auto 14px;"><svg viewBox="0 0 840 165" style="display:block;width:100%;height:auto;">${body}</svg></div>`;
    }

    function tripleQuadraticSVG(formulas, order) {
        const labels = ["A)", "Б)", "В)"];
        let body = "";
        order.forEach((formulaIndex, i) => {
            const q = formulas[formulaIndex - 1];
            const p = plotPanel(labels[i], x => q.a * x * x + q.b * x + q.c, { w: 270, h: 195, xmin: -7, xmax: 7, ymin: -12, ymax: 12 });
            body += `<g transform="translate(${i * 270},0)">${p.html}</g>`;
        });
        return `<div style="max-width:860px;margin:10px auto 14px;"><svg viewBox="0 0 810 195" style="display:block;width:100%;height:auto;">${body}</svg></div>`;
    }

    function tripleInverseSVG(formulas, order) {
        const labels = ["A)", "Б)", "В)"];
        let body = "";
        order.forEach((formulaIndex, i) => {
            const q = formulas[formulaIndex - 1];
            const p = plotPanel(labels[i], x => Math.abs(x) < 0.05 ? NaN : q.k / x, { w: 270, h: 195, xmin: -6, xmax: 6, ymin: -8, ymax: 8 });
            body += `<g transform="translate(${i * 270},0)">${p.html}</g>`;
        });
        return `<div style="max-width:860px;margin:10px auto 14px;"><svg viewBox="0 0 810 195" style="display:block;width:100%;height:auto;">${body}</svg></div>`;
    }

    function stackedTaskText(intro, after) {
        return `<div class="task11-extra-intro" style="font-size:17px;line-height:1.45;">${intro}</div>` +
            `<div class="task11-extra-after-diagram" style="margin-top:12px;">${after}</div>`;
    }

    function statementText(items, word = "верны") {
        const intro = `На рисунке изображён график квадратичной функции $y=f(x)$. Какие из следующих утверждений о данной функции <b>${word}</b>?`;
        const rows = `<div style="display:grid;gap:8px;font-size:17px;line-height:1.45;">` +
            items.map((x, i) => `<div><b>${i + 1})</b>&nbsp; ${x}</div>`).join("") + `</div>`;
        const footer = `<div style="margin-top:10px;font-size:16px;">Запишите номера выбранных утверждений <b>в порядке возрастания</b>.</div>`;
        return stackedTaskText(intro, rows + footer);
    }

    const signOptions = `<div style="font-weight:700;margin-bottom:7px;">Знаки коэффициентов:</div>` +
        `<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px 14px;font-size:17px;line-height:1.35;">` +
        `<div>1) $a>0,\ c<0$</div><div>2) $a<0,\ c>0$</div><div>3) $a>0,\ c>0$</div><div>4) $a<0,\ c<0$</div></div>`;
    function signTaskText() {
        const intro = `На рисунке изображены графики функций вида $y=ax^2+c$. Установите соответствие между графиками и знаками коэффициентов $a$ и $c$.`;
        const after = `${signOptions}<div style="margin-top:10px;font-size:16px;">Запишите в ответ четыре цифры в порядке <b>А, Б, В, Г</b>.</div>`;
        return stackedTaskText(intro, after);
    }

    function formulasText(formulas, kind = "quad") {
        const rows = `<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px 22px;font-size:18px;line-height:1.4;">` +
            formulas.map((f, i) => `<div><b>${i + 1})</b>&nbsp; \\(${f.latex}\\)</div>`).join("") + `</div>`;
        const intro = `Установите соответствие между графиками <b>А, Б, В</b> и формулами, которые их задают.`;
        const after = `${rows}<div style="margin-top:10px;font-size:16px;">Запишите в ответ три цифры в порядке <b>А, Б, В</b>.</div>`;
        return stackedTaskText(intro, after);
    }

    const qSets = [
        [
            { a: 2, b: -10, c: 8, latex: "y=2x^2-10x+8" },
            { a: -2, b: 10, c: -8, latex: "y=-2x^2+10x-8" },
            { a: -2, b: -10, c: -8, latex: "y=-2x^2-10x-8" }
        ],
        [
            { a: 1, b: -7, c: 14, latex: "y=x^2-7x+14" },
            { a: 1, b: 7, c: 14, latex: "y=x^2+7x+14" },
            { a: -1, b: -7, c: -14, latex: "y=-x^2-7x-14" }
        ],
        [
            { a: -3, b: 3, c: 1, latex: "y=-3x^2+3x+1" },
            { a: 3, b: -3, c: -1, latex: "y=3x^2-3x-1" },
            { a: -3, b: -3, c: 1, latex: "y=-3x^2-3x+1" }
        ],
        [
            { a: 1, b: 8, c: 12, latex: "y=x^2+8x+12" },
            { a: 1, b: -8, c: 12, latex: "y=x^2-8x+12" },
            { a: -1, b: 8, c: -12, latex: "y=-x^2+8x-12" }
        ],
        [
            { a: 1, b: -7, c: 9, latex: "y=x^2-7x+9" },
            { a: -1, b: -7, c: -9, latex: "y=-x^2-7x-9" },
            { a: -1, b: 7, c: -9, latex: "y=-x^2+7x-9" }
        ],
        [
            { a: -3, b: 24, c: -42, latex: "y=-3x^2+24x-42" },
            { a: 3, b: -24, c: 42, latex: "y=3x^2-24x+42" },
            { a: -3, b: -24, c: -42, latex: "y=-3x^2-24x-42" }
        ]
    ];

    const invSets = [
        [
            { k: -0.5, latex: "y=-\\dfrac{1}{2x}" },
            { k: -2, latex: "y=-\\dfrac{2}{x}" },
            { k: 2, latex: "y=\\dfrac{2}{x}" }
        ],
        [
            { k: -1/3, latex: "y=-\\dfrac{1}{3x}" },
            { k: 3, latex: "y=\\dfrac{3}{x}" },
            { k: -3, latex: "y=-\\dfrac{3}{x}" }
        ],
        [
            { k: 6, latex: "y=\\dfrac{6}{x}" },
            { k: 1/6, latex: "y=\\dfrac{1}{6x}" },
            { k: -6, latex: "y=-\\dfrac{6}{x}" }
        ],
        [
            { k: 8, latex: "y=\\dfrac{8}{x}" },
            { k: -1/8, latex: "y=-\\dfrac{1}{8x}" },
            { k: -8, latex: "y=-\\dfrac{8}{x}" }
        ],
        [
            { k: 1/9, latex: "y=\\dfrac{1}{9x}" },
            { k: 9, latex: "y=\\dfrac{9}{x}" },
            { k: -9, latex: "y=-\\dfrac{9}{x}" }
        ],
        [
            { k: 12, latex: "y=\\dfrac{12}{x}" },
            { k: -12, latex: "y=-\\dfrac{12}{x}" },
            { k: -1/12, latex: "y=-\\dfrac{1}{12x}" }
        ]
    ];

    const task11Extra = {
        title: "Дополнительные прототипы задания 11",
        source: "Типы взяты из блока 2 «ФИПИ. Расширенная версия» сборника по заданию 11. Повторяющиеся по математическому смыслу номера объединены в один прототип: один пример дан с разбором, далее — пять заданий тренажёра.",
        prototypes: [
            {
                desc: "11.Д1. Квадратичная функция — верные утверждения по графику",
                svg_code: singleParabolaSVG(1, 2, -9, { xmin: -4, xmax: 8, ymin: -11, ymax: 11 }),
                theory_task: statementText([
                    "\\(f(-1)=f(5)\\)",
                    "функция убывает на промежутке \\( [2;+\\infty) \\)",
                    "\\(f(x)>0\\) при \\(x<-1\\) и при \\(x>5\\)"
                ], "верны"),
                theory_sol: "График — парабола с ветвями вверх. Её вершина имеет абсциссу \\(x=2\\), а нули равны \\(x=-1\\) и \\(x=5\\).<br><br>1) Точки \\(-1\\) и \\(5\\) симметричны относительно прямой \\(x=2\\), поэтому \\(f(-1)=f(5)=0\\). Утверждение верно.<br>2) Справа от вершины парабола возрастает, поэтому на \\( [2;+\\infty) \\) функция не убывает. Утверждение неверно.<br>3) Вне промежутка между корнями парабола расположена выше оси \\(Ox\\), поэтому \\(f(x)>0\\) при \\(x<-1\\) и \\(x>5\\). Утверждение верно.<br><br><b>Ответ:</b> 13",
                tasks: [
                    {
                        text: statementText(["наибольшее значение функции равно 3", "функция возрастает на промежутке \\( (-\\infty;1] \\)", "\\(f(1)\\ge0\\)"], "верны"),
                        svg_code: singleParabolaSVG(-1, 1, 3, { xmin: -5, xmax: 7, ymin: -10, ymax: 6 }),
                        answer: "123"
                    },
                    {
                        text: statementText(["наименьшее значение функции равно \\(-9\\)", "\\(f(-4)>f(1)\\)", "\\(f(-4)<0\\)"], "верны"),
                        svg_code: singleParabolaSVG(1, -1, -9, { xmin: -7, xmax: 5, ymin: -11, ymax: 10 }),
                        answer: "12"
                    },
                    {
                        text: statementText(["\\(f(1)=f(5)\\)", "функция убывает на промежутке \\(( -\\infty;3]\\)", "\\(f(x)>0\\) при \\(1<x<5\\)"], "верны"),
                        svg_code: singleParabolaSVG(1, 3, -4, { xmin: -2, xmax: 8, ymin: -6, ymax: 10 }),
                        answer: "12"
                    },
                    {
                        text: statementText(["наибольшее значение функции равно 9", "функция возрастает на промежутке \\([-2;+\\infty)\\)", "\\(f(x)>0\\) при \\(-5<x<1\\)"], "верны"),
                        svg_code: singleParabolaSVG(-1, -2, 9, { xmin: -7, xmax: 4, ymin: -9, ymax: 11 }),
                        answer: "13"
                    },
                    {
                        text: statementText(["наименьшее значение функции равно \\(-8\\)", "\\(f(-1)=f(3)\\)", "функция возрастает на промежутке \\(( -\\infty;1]\\)"], "верны"),
                        svg_code: singleParabolaSVG(2, 1, -8, { xmin: -4, xmax: 6, ymin: -10, ymax: 12 }),
                        answer: "12"
                    }
                ]
            },
            {
                desc: "11.Д2. Квадратичная функция — неверные утверждения по графику",
                svg_code: singleParabolaSVG(-1, -1, 8, { xmin: -6, xmax: 5, ymin: -9, ymax: 10 }),
                theory_task: statementText([
                    "функция возрастает на промежутке \\(( -\\infty;-1]\\)",
                    "наибольшее значение функции равно 8",
                    "\\(f(-4)\\ne f(2)\\)"
                ], "неверны"),
                theory_sol: "Вершина параболы находится при \\(x=-1\\), ветви направлены вниз.<br><br>1) До вершины функция возрастает — утверждение верно.<br>2) Ордината вершины равна 8, значит это наибольшее значение функции — утверждение верно.<br>3) Числа \\(-4\\) и \\(2\\) равноудалены от \\(-1\\), поэтому \\(f(-4)=f(2)\\). Утверждение о неравенстве неверно.<br><br><b>Ответ:</b> 3",
                tasks: [
                    {
                        text: statementText(["функция убывает на промежутке \\(( -\\infty;1]\\)", "наименьшее значение функции равно \\(-4\\)", "\\(f(-2)<f(3)\\)"], "неверны"),
                        svg_code: singleParabolaSVG(1, 1, -4, { xmin: -5, xmax: 7, ymin: -6, ymax: 12 }),
                        answer: "3"
                    },
                    {
                        text: statementText(["функция возрастает на промежутке \\([2;+\\infty)\\)", "\\(f(x)>0\\) при \\(-1<x<5\\)", "\\(f(4)<f(0)\\)"], "неверны"),
                        svg_code: singleParabolaSVG(-1, 2, 9, { xmin: -4, xmax: 8, ymin: -9, ymax: 11 }),
                        answer: "13"
                    },
                    {
                        text: statementText(["функция возрастает на промежутке \\([-2;+\\infty)\\)", "наименьшее значение функции равно \\(-1\\)", "\\(f(-3)\\ne f(-1)\\)"], "неверны"),
                        svg_code: singleParabolaSVG(1, -2, -1, { xmin: -7, xmax: 4, ymin: -4, ymax: 10 }),
                        answer: "3"
                    },
                    {
                        text: statementText(["наибольшее значение функции равно 8", "функция убывает на промежутке \\([1;+\\infty)\\)", "\\(f(-1)>0\\)"], "неверны"),
                        svg_code: singleParabolaSVG(-2, 1, 8, { xmin: -4, xmax: 6, ymin: -12, ymax: 10 }),
                        answer: "3"
                    },
                    {
                        text: statementText(["\\(f(x)<0\\) при \\(x<1\\) и при \\(x>7\\)", "наименьшее значение функции равно \\(-9\\)", "функция убывает на промежутке \\(( -\\infty;4]\\)"], "неверны"),
                        svg_code: singleParabolaSVG(1, 4, -9, { xmin: -1, xmax: 9, ymin: -11, ymax: 10 }),
                        answer: "1"
                    }
                ]
            },
            {
                desc: "11.Д3. Функция y=ax²+c — знаки коэффициентов a и c",
                svg_code: fourParabolasSVG(["--", "+-", "-+", "++"]),
                theory_task: signTaskText(),
                theory_sol: "Для функции \\(y=ax^2+c\\):<br>• знак \\(a\\) определяет направление ветвей: при \\(a>0\\) — вверх, при \\(a<0\\) — вниз;<br>• число \\(c=f(0)\\) — ордината вершины, поэтому по положению вершины относительно оси \\(Ox\\) определяем знак \\(c\\).<br><br>A: ветви вниз, вершина ниже оси — \\(a<0,c<0\\), номер 4.<br>Б: ветви вверх, вершина ниже оси — номер 1.<br>В: ветви вниз, вершина выше оси — номер 2.<br>Г: ветви вверх, вершина выше оси — номер 3.<br><br><b>Ответ:</b> 4123",
                tasks: [
                    { text: signTaskText(), svg_code: fourParabolasSVG(["+-", "-+", "++", "--"]), answer: "1234" },
                    { text: signTaskText(), svg_code: fourParabolasSVG(["++", "--", "+-", "-+"]), answer: "3412" },
                    { text: signTaskText(), svg_code: fourParabolasSVG(["-+", "++", "--", "+-"]), answer: "2341" },
                    { text: signTaskText(), svg_code: fourParabolasSVG(["+-", "++", "-+", "--"]), answer: "1324" },
                    { text: signTaskText(), svg_code: fourParabolasSVG(["--", "-+", "+-", "++"]), answer: "4213" }
                ]
            },
            {
                desc: "11.Д4. Квадратичная функция — соответствие графиков и формул",
                svg_code: tripleQuadraticSVG(qSets[0], [1, 2, 3]),
                theory_task: formulasText(qSets[0]),
                theory_sol: "Сначала смотрим на направление ветвей, затем на положение вершины.<br><br>1) \\(y=2x^2-10x+8\\): \\(a>0\\), ветви вверх; ось симметрии \\(x=-\\frac{b}{2a}=\\frac{10}{4}=2{,}5\\). Это график A.<br>2) \\(y=-2x^2+10x-8\\): ветви вниз, вершина справа от оси \\(Oy\\). Это график Б.<br>3) \\(y=-2x^2-10x-8\\): ветви вниз, вершина слева от оси \\(Oy\\). Это график В.<br><br><b>Ответ:</b> 123",
                tasks: [
                    { text: formulasText(qSets[1]), svg_code: tripleQuadraticSVG(qSets[1], [2, 1, 3]), answer: "213" },
                    { text: formulasText(qSets[2]), svg_code: tripleQuadraticSVG(qSets[2], [3, 1, 2]), answer: "312" },
                    { text: formulasText(qSets[3]), svg_code: tripleQuadraticSVG(qSets[3], [1, 2, 3]), answer: "123" },
                    { text: formulasText(qSets[4]), svg_code: tripleQuadraticSVG(qSets[4], [3, 1, 2]), answer: "312" },
                    { text: formulasText(qSets[5]), svg_code: tripleQuadraticSVG(qSets[5], [3, 1, 2]), answer: "312" }
                ]
            },
            {
                desc: "11.Д5. Обратная пропорциональность — соответствие графиков и формул",
                svg_code: tripleInverseSVG(invSets[0], [3, 1, 2]),
                theory_task: formulasText(invSets[0], "inverse"),
                theory_sol: "Для функции \\(y=\\frac{k}{x}\\) знак \\(k\\) определяет четверти: при \\(k>0\\) ветви находятся в I и III четвертях, при \\(k<0\\) — во II и IV.<br><br>График A расположен в I и III четвертях, значит ему соответствует \\(y=\\frac{2}{x}\\), формула 3.<br>Графики Б и В имеют \\(k<0\\). У графика Б ветви ближе к осям, значит \\(|k|\\) меньше: \\(y=-\\frac{1}{2x}\\), формула 1. У графика В \\(|k|=2\\), формула 2.<br><br><b>Ответ:</b> 312",
                tasks: [
                    { text: formulasText(invSets[1], "inverse"), svg_code: tripleInverseSVG(invSets[1], [2, 3, 1]), answer: "231" },
                    { text: formulasText(invSets[2], "inverse"), svg_code: tripleInverseSVG(invSets[2], [1, 3, 2]), answer: "132" },
                    { text: formulasText(invSets[3], "inverse"), svg_code: tripleInverseSVG(invSets[3], [3, 1, 2]), answer: "312" },
                    { text: formulasText(invSets[4], "inverse"), svg_code: tripleInverseSVG(invSets[4], [2, 1, 3]), answer: "213" },
                    { text: formulasText(invSets[5], "inverse"), svg_code: tripleInverseSVG(invSets[5], [1, 3, 2]), answer: "132" }
                ]
            }
        ]
    };

    // Дополнительные задания 11 выводим вертикально: условие → крупный график → варианты/формулы.
    task11Extra.prototypes.forEach(proto => {
        proto.layout = "stacked11";
        (proto.tasks || []).forEach(task => { task.layout = "stacked11"; });
    });

    window.extraDatabase[11] = task11Extra;
    window.extraDatabase["task11"] = task11Extra;
})();
