(function() {
    // Генератор координатной плоскости с векторами по данным из LaTeX
    let svgCounter = 0;
    const makeSvg = (minX, minY, maxX, maxY, vecs, scale = 25) => {
        svgCounter += 1;
        const sc = scale;
        const w = (maxX - minX) * sc;
        const h = (maxY - minY) * sc;
        const tx = x => (x - minX) * sc;
        const ty = y => h - (y - minY) * sc;
        const arrowId = `arrow-task2-${svgCounter}`;

        let s = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="max-width:100%; height:auto;" overflow="visible">`;
        s += `<defs><marker id="${arrowId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 Z" fill="black"/></marker></defs>`;

        // Сетка
        for (let x = Math.ceil(minX); x <= Math.floor(maxX); x++) {
            s += `<line x1="${tx(x)}" y1="0" x2="${tx(x)}" y2="${h}" stroke="#d9d9d9" stroke-width="1"/>`;
        }
        for (let y = Math.ceil(minY); y <= Math.floor(maxY); y++) {
            s += `<line x1="0" y1="${ty(y)}" x2="${w}" y2="${ty(y)}" stroke="#d9d9d9" stroke-width="1"/>`;
        }

        // Оси
        if (minY <= 0 && maxY >= 0) {
            s += `<line x1="0" y1="${ty(0)}" x2="${w}" y2="${ty(0)}" stroke="#000" stroke-width="1.5" marker-end="url(#${arrowId})"/>`;
            s += `<text x="${w - 15}" y="${ty(0) - 8}" font-family="Times New Roman" font-size="16" font-style="italic">x</text>`;
        }
        if (minX <= 0 && maxX >= 0) {
            s += `<line x1="${tx(0)}" y1="${h}" x2="${tx(0)}" y2="0" stroke="#000" stroke-width="1.5" marker-end="url(#${arrowId})"/>`;
            s += `<text x="${tx(0) + 8}" y="15" font-family="Times New Roman" font-size="16" font-style="italic">y</text>`;
        }

        // Подписи 0 и 1
        if (minX <= 0 && maxX >= 0 && minY <= 0 && maxY >= 0) {
            s += `<text x="${tx(0) - 12}" y="${ty(0) + 16}" font-family="Times New Roman" font-size="14">0</text>`;
        }
        if (minX <= 1 && maxX >= 1 && minY <= 0 && maxY >= 0) {
            s += `<text x="${tx(1) - 4}" y="${ty(0) + 16}" font-family="Times New Roman" font-size="14">1</text>`;
        }
        if (minX <= 0 && maxX >= 0 && minY <= 1 && maxY >= 1) {
            s += `<text x="${tx(0) - 12}" y="${ty(1) + 4}" font-family="Times New Roman" font-size="14">1</text>`;
        }

        // Векторы
        for (const v of vecs) {
            s += `<line x1="${tx(v.x1)}" y1="${ty(v.y1)}" x2="${tx(v.x2)}" y2="${ty(v.y2)}" stroke="#000" stroke-width="2.5" marker-end="url(#${arrowId})"/>`;
            const lx = (tx(v.x1) + tx(v.x2)) / 2 + (v.dx || 0);
            const ly = (ty(v.y1) + ty(v.y2)) / 2 + (v.dy || 0);
            s += `<text x="${lx}" y="${ly}" font-family="Times New Roman" font-size="18" font-style="italic">${v.name}</text>`;
            s += `<line x1="${lx}" y1="${ly - 16}" x2="${lx + 8}" y2="${ly - 16}" stroke="#000" stroke-width="1"/>`;
            s += `<path d="M ${lx + 5} ${ly - 19} L ${lx + 8} ${ly - 16} L ${lx + 5} ${ly - 13}" stroke="#000" stroke-width="1" fill="none"/>`;
        }

        s += `</svg>`;
        return s;
    };

    window.database = window.database || {};

    const task2Data = {
        title: "Задание 2. Векторы",
        prototypes: [
            {
                desc: "Длина вектора по координатам",
                svg_code: "",
                theory_task: "Найдите длину вектора $\\vec{a}(8;-6)$.",
                theory_sol: "Формула длины вектора: $|\\vec{a}| = \\sqrt{x^2+y^2}$.<br>$|\\vec{a}| = \\sqrt{8^2 + (-6)^2} = \\sqrt{64+36} = \\sqrt{100} = 10$.<br><br><b>Ответ:</b> 10",
                tasks: [
                    { text: "Найдите длину вектора $\\vec{a}(3;-4)$.", answer: "5" },
                    { text: "Найдите длину вектора $\\vec{a}(6;-8)$.", answer: "10" },
                    { text: "Найдите длину вектора $\\vec{a}(5;-12)$.", answer: "13" },
                    { text: "Найдите длину вектора $\\vec{a}(8;-15)$.", answer: "17" },
                    { text: "Найдите длину вектора $\\vec{a}(9;-12)$.", answer: "15" }
                ]
            },
            {
                desc: "Длина суммы/разности векторов",
                svg_code: "",
                theory_task: "Даны векторы $\\vec{a}(4; 1)$ и $\\vec{b}(2; 3)$. Найдите длину вектора $\\vec{a} - 2\\vec{b}$.",
                theory_sol: "1) Найдём координаты вектора $2\\vec{b}$: $(2 \\cdot 2; 2 \\cdot 3) = (4; 6)$.<br>2) Найдём координаты разности векторов $\\vec{a} - 2\\vec{b}$: $(4 - 4; 1 - 6) = (0; -5)$.<br>3) Вычислим длину полученного вектора: $\\sqrt{0^2 + (-5)^2} = \\sqrt{25} = 5$.<br><br><b>Ответ:</b> 5",
                tasks: [
                    { text: "Даны векторы $\\vec{a}(2;0)$ и $\\vec{b}(1;4)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "13" },
                    { text: "Даны векторы $\\vec{a}(4;5)$ и $\\vec{b}(2;2)$. Найдите длину вектора $2\\vec{a}-\\vec{b}$.", answer: "10" },
                    { text: "Даны векторы $\\vec{a}(10;-5)$ и $\\vec{b}(1;5)$. Найдите длину вектора $\\vec{a}-2\\vec{b}$.", answer: "17" },
                    { text: "Даны векторы $\\vec{a}(-2;3)$ и $\\vec{b}(-3;3)$. Найдите длину вектора $3\\vec{a}+\\vec{b}$.", answer: "15" },
                    { text: "Даны векторы $\\vec{a}(1;0)$ и $\\vec{b}(2;6)$. Найдите длину вектора $-\\vec{a}+4\\vec{b}$.", answer: "25" }
                ]
            },
            {
                desc: "Длина вектора по чертежу",
                svg_code: makeSvg(-1.5, -1.5, 6.5, 7.5, [
                    { x1: 1, y1: 1, x2: 4, y2: 7, name: "a", dx: -20, dy: -5 },
                    { x1: 1, y1: 1, x2: 6, y2: 1, name: "b", dx: 0, dy: 20 }
                ]),
                theory_task: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$. Найдите длину вектора $\\vec{a}+\\vec{b}$.",
                theory_sol: "1) Определим координаты по чертежу (конец минус начало):<br>$\\vec{a} = (4-1; 7-1) = (3; 6)$.<br>$\\vec{b} = (6-1; 1-1) = (5; 0)$.<br>2) Сложим векторы: $\\vec{a}+\\vec{b} = (3+5; 6+0) = (8; 6)$.<br>3) Длина вектора: $\\sqrt{8^2 + 6^2} = \\sqrt{64+36} = \\sqrt{100} = 10$.<br><br><b>Ответ:</b> 10",
                tasks: [
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}+3\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 1, y1: 1, x2: 3, y2: 4, name: "a", dx: -25, dy: -10 },
                            { x1: 4, y1: 4, x2: 6, y2: 3, name: "b", dx: 15, dy: 5 }
                        ]),
                        answer: "8"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}-\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 1, y1: 2, x2: 4, y2: 4, name: "a", dx: -20, dy: -10 },
                            { x1: 2, y1: 1, x2: 3, y2: 3, name: "b", dx: 10, dy: 5 }
                        ]),
                        answer: "2"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $2\\vec{a}-\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 5.5, 5.5, [
                            { x1: 2, y1: 1, x2: 1, y2: 4, name: "a", dx: -20, dy: 0 },
                            { x1: 3, y1: 1, x2: 5, y2: 4, name: "b", dx: 15, dy: 0 }
                        ]),
                        answer: "5"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $-\\vec{a}+3\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 7.5, 8.5, [
                            { x1: 1, y1: 1, x2: 1, y2: 7, name: "a", dx: -20, dy: 0 },
                            { x1: 3, y1: 2, x2: 6, y2: 4, name: "b", dx: 15, dy: 20 }
                        ], 19.5),
                        answer: "9"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}-5\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 7.5, [
                            { x1: 1, y1: 2, x2: 4, y2: 7, name: "a", dx: -20, dy: 0 },
                            { x1: 2, y1: 0, x2: 6, y2: 1, name: "b", dx: 0, dy: 20 }
                        ], 22),
                        answer: "17"
                    }
                ]
            },
            {
                desc: "Скалярное произведение через угол",
                svg_code: "",
                theory_task: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $3$ и $4$, а угол между ними $60^{\\circ}$. Найдите $\\vec{a}\\cdot\\vec{b}$.",
                theory_sol: "Скалярное произведение через угол: $\\vec{a}\\cdot\\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos \\angle(\\vec{a}, \\vec{b})$.<br>$\\vec{a}\\cdot\\vec{b} = 3 \\cdot 4 \\cdot \\cos 60^{\\circ} = 12 \\cdot 0{,}5 = 6$.<br><br><b>Ответ:</b> 6",
                tasks: [
                    { text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $5$ и $7$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "17.5" },
                    { text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $4$ и $9$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "18" },
                    { text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $8$ и $15$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "60" },
                    { text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $6$ и $11$, а угол между ними равен $120^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-33" },
                    { text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $10$ и $13$, а угол между ними равен $120^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-65" }
                ]
            },
            {
                desc: "Скалярное произведение по координатам",
                svg_code: "",
                theory_task: "Даны векторы $\\vec{a}(2;-5)$ и $\\vec{b}(3;1)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.",
                theory_sol: "Скалярное произведение в координатах: $\\vec{a}\\cdot\\vec{b} = x_1 x_2 + y_1 y_2$.<br>$\\vec{a}\\cdot\\vec{b} = 2 \\cdot 3 + (-5) \\cdot 1 = 6 - 5 = 1$.<br><br><b>Ответ:</b> 1",
                tasks: [
                    { text: "Даны векторы $\\vec{a}(11;-3)$ и $\\vec{b}(4;5)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "29" },
                    { text: "Даны векторы $\\vec{a}(5;-2)$ и $\\vec{b}(3;4)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "7" },
                    { text: "Даны векторы $\\vec{a}(-3;6)$ и $\\vec{b}(2;5)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "24" },
                    { text: "Даны векторы $\\vec{a}(8;-4)$ и $\\vec{b}(-1;-3)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "4" },
                    { text: "Даны векторы $\\vec{a}(-4;-7)$ и $\\vec{b}(-2;3)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-13" }
                ]
            },
            {
                desc: "Скалярное произведение по чертежу",
                svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                    { x1: 1, y1: 1, x2: 3, y2: 4, name: "a", dx: -20, dy: 0 },
                    { x1: 1, y1: 2, x2: 5, y2: 1, name: "b", dx: 0, dy: 20 }
                ]),
                theory_task: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.",
                theory_sol: "1) Определим координаты векторов:<br>$\\vec{a} = (3-1; 4-1) = (2; 3)$.<br>$\\vec{b} = (5-1; 1-2) = (4; -1)$.<br>2) Перемножим векторы: $\\vec{a}\\cdot\\vec{b} = 2 \\cdot 4 + 3 \\cdot (-1) = 8 - 3 = 5$.<br><br><b>Ответ:</b> 5",
                tasks: [
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 1, y1: 1, x2: 4, y2: 5, name: "a", dx: -25, dy: -10 },
                            { x1: 2, y1: 1, x2: 6, y2: 2, name: "b", dx: 5, dy: 20 }
                        ]),
                        answer: "16"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 6.5, [
                            { x1: 1, y1: 4, x2: 5, y2: 6, name: "a", dx: -25, dy: -10 },
                            { x1: 1, y1: 2, x2: 4, y2: 1, name: "b", dx: -20, dy: 20 }
                        ]),
                        answer: "10"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $2\\vec{a}\\cdot\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 2, y1: 1, x2: 1, y2: 4, name: "a", dx: -20, dy: 0 },
                            { x1: 3, y1: 1, x2: 6, y2: 4, name: "b", dx: 15, dy: 0 }
                        ]),
                        answer: "12"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot(-\\vec{b})$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 1, y1: 2, x2: 4, y2: 5, name: "a", dx: -20, dy: 0 },
                            { x1: 5, y1: 2, x2: 3, y2: 4, name: "b", dx: 15, dy: 0 }
                        ]),
                        answer: "0"
                    },
                    {
                        text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot 2\\vec{b}$.",
                        svg_code: makeSvg(-1.5, -1.5, 6.5, 5.5, [
                            { x1: 2, y1: 1, x2: 4, y2: 4, name: "a", dx: -25, dy: -10 },
                            { x1: 4, y1: 1, x2: 3, y2: 3, name: "b", dx: 15, dy: 0 }
                        ]),
                        answer: "8"
                    }
                ]
            }
        ]
    };

    // Поддерживаем оба формата ключа: старый генератор использовал "task2", новые файлы — числовой ключ.
    window.database[2] = task2Data;
    window.database["task2"] = task2Data;
})();
