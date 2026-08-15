(function(){
    window.extraDatabase = window.extraDatabase || {};

    const lineSvgABCD = (values) => {
        const sorted = [...values].sort((a,b)=>a-b);
        const min = sorted[0], max = sorted[sorted.length-1];
        const x0 = 52, x1 = 468, y = 52;
        const span = Math.max(max-min, 0.001);
        const xs = sorted.map(v => x0 + 28 + (v-min)/span * (x1-x0-86));
        const labels = ['A','B','C','D'];
        return `<svg viewBox="0 0 520 92" xmlns="http://www.w3.org/2000/svg" style="display:block;max-width:100%;height:auto;">
            <line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#111" stroke-width="2"/>
            <path d="M ${x1} ${y} l -12 -6 l 4 6 l -4 6 z" fill="#111"/>
            ${xs.map((x,i)=>`<circle cx="${x.toFixed(1)}" cy="${y}" r="4" fill="#111"/><text x="${x.toFixed(1)}" y="30" text-anchor="middle" font-size="20" font-family="serif" font-style="italic">${labels[i]}</text>`).join('')}
            <text x="480" y="69" font-size="18" font-family="serif" font-style="italic">x</text>
        </svg>`;
    };

    const rootPointsSvg = () => {
        const x = v => 85 + (v-6)*170;
        const pts = [['M',6.20],['N',6.75],['P',7.20],['Q',7.75]];
        return `<svg viewBox="0 0 520 105" xmlns="http://www.w3.org/2000/svg" style="display:block;max-width:100%;height:auto;">
            <line x1="55" y1="55" x2="470" y2="55" stroke="#111" stroke-width="2"/>
            <path d="M 470 55 l -12 -6 l 4 6 l -4 6 z" fill="#111"/>
            ${[6,7,8].map(v=>`<line x1="${x(v)}" y1="49" x2="${x(v)}" y2="61" stroke="#111" stroke-width="1.5"/><text x="${x(v)}" y="82" text-anchor="middle" font-size="18" font-family="serif">${v}</text>`).join('')}
            ${pts.map(([lab,v])=>`<circle cx="${x(v)}" cy="55" r="4" fill="#d97706"/><text x="${x(v)}" y="33" text-anchor="middle" font-size="20" font-family="serif" font-style="italic" fill="#d97706">${lab}</text>`).join('')}
            <text x="482" y="72" font-size="18" font-family="serif" font-style="italic">x</text>
        </svg>`;
    };

    const oneA01Svg = () => `<svg viewBox="0 0 520 92" xmlns="http://www.w3.org/2000/svg" style="display:block;max-width:100%;height:auto;">
        <line x1="62" y1="50" x2="462" y2="50" stroke="#111" stroke-width="2"/>
        <path d="M 462 50 l -12 -6 l 4 6 l -4 6 z" fill="#111"/>
        <line x1="128" y1="43" x2="128" y2="57" stroke="#111"/><text x="128" y="79" text-anchor="middle" font-size="18" font-family="serif">0</text>
        <line x1="396" y1="43" x2="396" y2="57" stroke="#111"/><text x="396" y="79" text-anchor="middle" font-size="18" font-family="serif">1</text>
        <circle cx="260" cy="50" r="4" fill="#111"/><text x="260" y="32" text-anchor="middle" font-size="20" font-family="serif" font-style="italic">a</text>
        <text x="476" y="67" font-size="18" font-family="serif" font-style="italic">x</text>
    </svg>`;

    const twoAB01Svg = () => `<svg viewBox="0 0 520 92" xmlns="http://www.w3.org/2000/svg" style="display:block;max-width:100%;height:auto;">
        <line x1="62" y1="50" x2="462" y2="50" stroke="#111" stroke-width="2"/>
        <path d="M 462 50 l -12 -6 l 4 6 l -4 6 z" fill="#111"/>
        <line x1="120" y1="43" x2="120" y2="57" stroke="#111"/><text x="120" y="79" text-anchor="middle" font-size="18" font-family="serif">0</text>
        <line x1="405" y1="43" x2="405" y2="57" stroke="#111"/><text x="405" y="79" text-anchor="middle" font-size="18" font-family="serif">1</text>
        <circle cx="215" cy="50" r="4" fill="#111"/><text x="215" y="32" text-anchor="middle" font-size="20" font-family="serif" font-style="italic">a</text>
        <circle cx="315" cy="50" r="4" fill="#111"/><text x="315" y="32" text-anchor="middle" font-size="20" font-family="serif" font-style="italic">b</text>
        <text x="476" y="67" font-size="18" font-family="serif" font-style="italic">x</text>
    </svg>`;

    const optRow = (items) => `<div style="margin-top:8px;display:grid;grid-template-columns:repeat(2,minmax(160px,1fr));gap:5px 18px;">${items.map((v,i)=>`<div>${i+1}) ${v}</div>`).join('')}</div>`;

    const pointNumberText = (vals) => `На координатной прямой точками отмечены числа ${vals.join('; ')}.<br>Какому числу соответствует точка B?${optRow(vals)}`;
    const rootIntervalText = (n) => `Какому промежутку принадлежит число \\(\\sqrt{${n}}\\)?<br><i>В ответе укажите номер правильного варианта.</i>${optRow(['[4; 5]','[5; 6]','[6; 7]','[7; 8]'])}`;
    const rootPointText = (n) => `Одна из точек, отмеченных на координатной прямой, соответствует числу \\(\\sqrt{${n}}\\). Какая это точка?${optRow(['точка \\(M\\)','точка \\(N\\)','точка \\(P\\)','точка \\(Q\\)'])}`;
    const powerText = (e1,e2,e3) => `На координатной прямой отмечено число \\(a\\)<br>Найдите наибольшее из чисел \\(a^{${e1}}, a^{${e2}}, a^{${e3}}\\)${optRow([`\\(a^{${e1}}\\)`,`\\(a^{${e2}}\\)`,`\\(a^{${e3}}\\)`,'не хватает данных для ответа'])}`;
    const twoNumberText = (pow,num) => `На координатной прямой отмечены числа \\(a\\) и \\(b\\)<br>Какое из следующих утверждений относительно этих чисел является верным?${optRow(['\\(b-a<0\\)',`\\(a^{${pow}}-b^{${pow}}<0\\)`,`\\(\\dfrac{${num}}a<b\\)`,'\\(a+b<0\\)'])}`;

    const task7Extra = {
        title: 'Дополнительно',
        source: 'Дополнительные прототипы по материалам варианта РЕШУ ОГЭ № 82086855; формулировки сохранены, в тренировочных задачах изменены только числовые данные.',
        prototypes: [
            {
                desc: 'Доп. прототип 1. Какому числу соответствует заданная точка',
                svg_code: lineSvgABCD([7/3,9/7,1.82,2.5]),
                theory_task: pointNumberText(['\\(\\frac73\\)','\\(\\frac97\\)','1,82','2,5']),
                theory_sol: 'Расположим числа по возрастанию: \\(\\frac97\\approx1{,}29<1{,}82<\\frac73\\approx2{,}33<2{,}5\\). Точки на прямой идут слева направо как \\(A,B,C,D\\), поэтому точке \\(B\\) соответствует число \\(1{,}82\\).<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: pointNumberText(['\\(\\frac{11}{5}\\)','\\(\\frac74\\)','1,9','2,6']), svg_code: lineSvgABCD([11/5,7/4,1.9,2.6]), answer: '3' },
                    { text: pointNumberText(['\\(\\frac{13}{6}\\)','1,6','2,4','1,95']), svg_code: lineSvgABCD([13/6,1.6,2.4,1.95]), answer: '4' },
                    { text: pointNumberText(['1,4','\\(\\frac95\\)','\\(\\frac73\\)','2,1']), svg_code: lineSvgABCD([1.4,9/5,7/3,2.1]), answer: '2' },
                    { text: pointNumberText(['\\(\\frac54\\)','2,05','\\(\\frac{11}{6}\\)','2,4']), svg_code: lineSvgABCD([5/4,2.05,11/6,2.4]), answer: '3' },
                    { text: pointNumberText(['2,6','\\(\\frac73\\)','1,9','2,1']), svg_code: lineSvgABCD([2.6,7/3,1.9,2.1]), answer: '4' }
                ]
            },
            {
                desc: 'Доп. прототип 2. К какому целому промежутку принадлежит квадратный корень',
                svg_code: '',
                theory_task: rootIntervalText(53),
                theory_sol: 'Сравним число 53 с квадратами целых чисел: \\(7^2=49\\), \\(8^2=64\\). Так как \\(49<53<64\\), получаем \\(7<\\sqrt{53}<8\\). Значит, число принадлежит промежутку \\([7;8]\\).<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: rootIntervalText(21), answer: '1' },
                    { text: rootIntervalText(31), answer: '2' },
                    { text: rootIntervalText(44), answer: '3' },
                    { text: rootIntervalText(60), answer: '4' },
                    { text: rootIntervalText(35), answer: '2' }
                ]
            },
            {
                desc: 'Доп. прототип 3. Какой точке соответствует квадратный корень',
                svg_code: rootPointsSvg(),
                theory_task: rootPointText(52),
                theory_sol: 'Так как \\(7^2=49<52<64=8^2\\), число \\(\\sqrt{52}\\) находится между 7 и 8. Приближённо \\(\\sqrt{52}\\approx7{,}21\\), что соответствует точке \\(P\\).<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: rootPointText(40), svg_code: rootPointsSvg(), answer: '1' },
                    { text: rootPointText(45), svg_code: rootPointsSvg(), answer: '2' },
                    { text: rootPointText(50), svg_code: rootPointsSvg(), answer: '3' },
                    { text: rootPointText(59), svg_code: rootPointsSvg(), answer: '4' },
                    { text: rootPointText(47), svg_code: rootPointsSvg(), answer: '2' }
                ]
            },
            {
                desc: 'Доп. прототип 4. Наибольшее из степеней числа от 0 до 1',
                svg_code: oneA01Svg(),
                theory_task: powerText(2,3,4),
                theory_sol: 'По рисунку \\(0<a<1\\). При умножении положительного числа, меньшего 1, на \\(a\\) значение уменьшается: \\(a^2>a^3>a^4\\). Поэтому наибольшее число — \\(a^2\\).<br><br><b>Ответ:</b> 1',
                tasks: [
                    { text: powerText(3,4,6), svg_code: oneA01Svg(), answer: '1' },
                    { text: powerText(5,2,7), svg_code: oneA01Svg(), answer: '2' },
                    { text: powerText(6,8,4), svg_code: oneA01Svg(), answer: '3' },
                    { text: powerText(9,5,7), svg_code: oneA01Svg(), answer: '2' },
                    { text: powerText(4,10,6), svg_code: oneA01Svg(), answer: '1' }
                ]
            },
            {
                desc: 'Доп. прототип 5. Сравнение выражений при 0<a<b<1',
                svg_code: twoAB01Svg(),
                theory_task: twoNumberText(2,1),
                theory_sol: 'По рисунку \\(0<a<b<1\\). Для положительных чисел возведение в квадрат сохраняет порядок: \\(a^2<b^2\\), поэтому \\(a^2-b^2<0\\). Остальные утверждения неверны.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: twoNumberText(3,2), svg_code: twoAB01Svg(), answer: '2' },
                    { text: twoNumberText(4,3), svg_code: twoAB01Svg(), answer: '2' },
                    { text: twoNumberText(5,4), svg_code: twoAB01Svg(), answer: '2' },
                    { text: twoNumberText(6,5), svg_code: twoAB01Svg(), answer: '2' },
                    { text: twoNumberText(7,6), svg_code: twoAB01Svg(), answer: '2' }
                ]
            }
        ]
    };

    // Совместимость с генераторами, которые умеют отдельный блок «Дополнительно».
    window.extraDatabase[7] = task7Extra;
    window.extraDatabase['task7'] = task7Extra;

})();
