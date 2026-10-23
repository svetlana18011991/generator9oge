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
            ${xs.map((x,i)=>`<circle cx="${x.toFixed(1)}" cy="${y}" r="4" fill="#111"/><text x="${x.toFixed(1)}" y="${i>0 && x-xs[i-1]<24 ? 84 : 30}" text-anchor="middle" font-size="20" font-family="serif" font-style="italic">${labels[i]}</text>`).join('')}
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
                desc: 'Какому числу соответствует заданная точка',
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
                desc: 'К какому целому промежутку принадлежит квадратный корень',
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
                desc: 'Какой точке соответствует квадратный корень',
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
                desc: 'Наибольшее из степеней числа от 0 до 1',
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
                desc: 'Сравнение выражений при 0<a<b<1',
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

    // Прототипы, встречающиеся у Е. А. Ширяевой и отсутствующие как отдельные виды
    // в основном блоке / прежних дополнительных заданиях. Исходные формулировки сохранены.
    const math = s => '\\(' + s + '\\)';
    const fraction = (n,d) => math(String.raw`\frac{${n}}{${d}}`);
    const signedFraction = (n,d) => n < 0 ? math(String.raw`-\frac{${-n}}{${d}}`) : fraction(n,d);
    const pointOptions = () => optRow(['A', 'B', 'C', 'D']);
    const niceNumber = v => String(v).replace('.', ',');
    const svgAxis = (points, min, max, ticks=[]) => {
        const pos = v => 62 + 406*(v-min)/(max-min);
        return `<svg viewBox="0 0 525 106" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;max-width:100%;height:auto;">
          <line x1="46" y1="53" x2="488" y2="53" stroke="#1e293b" stroke-width="2.2"/><path d="M488 53l-11 -5v10z" fill="#1e293b"/>
          ${ticks.map(([n,label])=>`<line x1="${pos(n)}" y1="46" x2="${pos(n)}" y2="60" stroke="#1e293b" stroke-width="1.4"/><text x="${pos(n)}" y="84" text-anchor="middle" font-family="Georgia,serif" font-size="18">${label}</text>`).join('')}
          ${points.map(([name,n])=>`<circle cx="${pos(n)}" cy="53" r="4.4" fill="#1e293b"/><text x="${pos(n)}" y="35" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="21">${name}</text>`).join('')}
          </svg>`;
    };
    const newExtra = [];
    // A. Отрицательная дробь на отрезке (Ширяева, блок 3, задание 1).
    const negativeSegment = (lo,hi,den,nums) =>
        `Какое из данных чисел принадлежит отрезку ${math(`[${lo}; ${hi}]`)}?${optRow(nums.map(n=>signedFraction(-n,den)))}`;
    const negSegmentCases = [
        [-4,-3,17,[37,49,60,72],3],
        [-7,-6,11,[54,64,75,83],3],
        [-9,-8,13,[118,109,103,91],2],
        [-6,-5,19,[92,98,115,121],2],
        [-11,-10,8,[72,78,85,92],3]
    ];
    newExtra.push({desc:'Отрицательные обыкновенные дроби на заданном отрезке',svg_code:'',
        theory_task:negativeSegment(-5,-4,13,[47,54,68,71]),
        theory_sol:`${math(String.raw`-\frac{54}{13}`)} находится между −5 и −4, остальные варианты вне отрезка.<br><br><b>Ответ:</b> 2`,
        tasks:negSegmentCases.map(([a,b,d,nn,ans])=>({text:negativeSegment(a,b,d,nn),answer:String(ans)}))
    });

    // B. Отрицательная неправильная дробь и соседние целые (блок 3, задание 6).
    const minusBetween = (num,den,options) => `Между какими целыми числами заключено число ${signedFraction(-num,den)}?${optRow(options.map(([a,b])=>`${a} и ${b}`))}`;
    const negBetweenCases = [
        [147,13,[[-11,-10],[-13,-12],[-12,-11],[-14,-13]],3],
        [129,17,[[-8,-7],[-9,-8],[-7,-6],[-10,-9]],1],
        [169,12,[[-11,-10],[-13,-12],[-14,-13],[-15,-14]],4],
        [107,9,[[-14,-13],[-12,-11],[-13,-12],[-10,-9]],2],
        [156,19,[[-8,-7],[-11,-10],[-9,-8],[-10,-9]],3]
    ];
    newExtra.push({desc:'Между какими отрицательными целыми числами лежит дробь',svg_code:'',
        theory_task:minusBetween(104,9,[[-12,-11],[-13,-12],[-14,-13],[-15,-14]]),
        theory_sol:`${signedFraction(-104,9)}≈−11,56, поэтому число заключено между −12 и −11.<br><br><b>Ответ:</b> 1`,
        tasks:negBetweenCases.map(([n,d,opts,ans])=>({text:minusBetween(n,d,opts),answer:String(ans)}))
    });

    // C. Отрицательные и положительные дроби у точек A–D (блок 3, задания 2–5).
    const signedPointsText = (vals,target) => `На координатной прямой точки ${math('A')}, ${math('B')}, ${math('C')} и ${math('D')} соответствуют числам ${vals.map(([n,d])=>signedFraction(n,d)).join('; ')}. Какой точке соответствует число ${signedFraction(target[0],target[1])}?${optRow(['A','B','C','D'])}`;
    const signedPointCases = [
      [[[-5,9],[-3,7],[2,9],[3,5]],[-3,7]],
      [[[-4,7],[-4,11],[4,9],[-4,13]],[-4,11]],
      [[[3,11],[-3,5],[3,4],[-3,8]],[3,11]],
      [[[-2,7],[2,11],[-2,9],[2,5]],[-2,9]],
      [[[-5,6],[-5,12],[5,8],[5,11]],[5,11]]
    ];
    const signedPoint = ([vals,target]) => {
      const raw=vals.map(([n,d])=>n/d), ordered=[...raw].sort((a,b)=>a-b), answer=ordered.findIndex(v=>Math.abs(v-target[0]/target[1])<1e-10)+1;
      return {text:signedPointsText(vals,target),svg_code:lineSvgABCD(raw),answer:String(answer)};
    };
    newExtra.push({desc:'Соответствие точки положительной или отрицательной дроби',
      svg_code:lineSvgABCD([-3/8,5/12,-5/9,4/5]),
      theory_task:signedPointsText([[-3,8],[5,12],[-5,9],[4,5]],[5,12]),
      theory_sol:'Сначала расположим положительные и отрицательные дроби по возрастанию. Искомая дробь вторая справа, значит это точка C.<br><br><b>Ответ:</b> 3',
      tasks:signedPointCases.map(signedPoint)
    });

    // D. Точки C и D по смешанным обыкновенным и десятичным дробям (блок 2, задание 6).
    const mixCases = [
      {v:[4/7,11/5,2.6,.3],label:'C',ans:2,opts:[fraction(4,7),fraction(11,5),'2,6','0,3']},
      {v:[11/7,3/2,1.8,2.15],label:'D',ans:4,opts:[fraction(11,7),fraction(3,2),'1,8','2,15']},
      {v:[8/3,9/4,2.55,2.4],label:'C',ans:3,opts:[fraction(8,3),fraction(9,4),'2,55','2,4']},
      {v:[4/13,5/14,.29,.3],label:'D',ans:2,opts:[fraction(4,13),fraction(5,14),'0,29','0,3']},
      {v:[7/6,11/8,1.48,1.6],label:'C',ans:3,opts:[fraction(7,6),fraction(11,8),'1,48','1,6']}
    ];
    const mixCaseText = c => `На координатной прямой точками отмечены числа ${c.opts.join('; ')}.<br>Какому числу соответствует точка ${c.label}?${optRow(c.opts)}`;
    newExtra.push({desc:'Какому числу соответствует точка C или D (дроби и десятичные числа)',
      svg_code:lineSvgABCD([5/8,3/2,1.9,2.4]),
      theory_task:mixCaseText({opts:[fraction(5,8),fraction(3,2),'1,9','2,4'],label:'C'}),
      theory_sol:'Упорядочим числа по возрастанию. Точка C третья слева, ей соответствует 1,9.<br><br><b>Ответ:</b> 3',
      tasks:mixCases.map(c=>({text:mixCaseText(c),svg_code:lineSvgABCD(c.v),answer:String(c.ans)}))
    });

    // E. Отмеченная правильная дробь – определить точку (блок 2, задание 7).
    const properPointText = (n,d)=>`Одна из точек, отмеченных на координатной прямой, соответствует числу ${fraction(n,d)}. Какая это точка?${optRow(['точка A','точка B','точка C','точка D'])}`;
    const properCase = (n,d,labels,ticks) => {
       const pts=labels.map(([label,val])=>[label,val]); const j=pts.findIndex(x=>Math.abs(x[1]-n/d)<1e-8);
       return {text:properPointText(n,d),svg_code:svgAxis(pts,0,1,ticks.map((v,i)=>[v,i===0?'0':i===ticks.length-1?'1':niceNumber(Math.round(v*100)/100)])),answer:String(j+1)};
    };
    // Use equally spaced fractional markings; correct location follows exact rational value.
    const properCases=[
      properCase(3,14,[['A',3/14],['B',5/14],['C',9/14],['D',11/14]],[0,1/2,1]),
      properCase(5,13,[['A',2/13],['B',5/13],['C',7/13],['D',10/13]],[0,1/2,1]),
      properCase(7,15,[['A',3/15],['B',5/15],['C',7/15],['D',12/15]],[0,1/2,1]),
      properCase(8,17,[['A',2/17],['B',6/17],['C',8/17],['D',13/17]],[0,1/2,1]),
      properCase(4,11,[['A',1/11],['B',4/11],['C',6/11],['D',9/11]],[0,1/2,1])
    ];
    newExtra.push({desc:'Определить точку по правильной обыкновенной дроби',
      svg_code:svgAxis([['A',1/8],['B',3/8],['C',5/8],['D',7/8]],0,1,[[0,'0'],[.5,'0,5'],[1,'1']]),
      theory_task:properPointText(3,8),
      theory_sol:'Дробь 3/8 равна 0,375. На координатной прямой это точка B.<br><br><b>Ответ:</b> 2',
      tasks:properCases
    });

    // F. Сравнение порядка и модулей чисел (блок 2, задание 1).
    const absText = (l,r) => `На координатной прямой отмечены числа. Какое из следующих утверждений верно?${optRow([
       math(String.raw`${l}<${r}\ \text{и}\ |${l}|<|${r}|`), math(String.raw`${l}<${r}\ \text{и}\ |${l}|>|${r}|`),
       math(String.raw`${l}>${r}\ \text{и}\ |${l}|>|${r}|`), math(String.raw`${l}>${r}\ \text{и}\ |${l}|<|${r}|`)
    ])}`;
    const absCase=(l,r,x,y)=>({text:absText(l,r),svg_code:svgAxis([[l,x],[r,y]],-5,5,[[0,'0']]),answer:String(x<y?(Math.abs(x)<Math.abs(y)?1:2):(Math.abs(x)>Math.abs(y)?3:4))});
    newExtra.push({desc:'Одновременное сравнение чисел и их модулей',
        svg_code:svgAxis([['x',-1.1],['y',3.4]],-5,5,[[0,'0']]),theory_task:absText('x','y'),
        theory_sol:'Из рисунка x < y и |x| < |y|, то есть верен первый вариант.<br><br><b>Ответ:</b> 1',
        tasks:[absCase('x','y',-1.5,3.2),absCase('x','y',-4.3,1.4),absCase('x','y',2.4,-3.5),absCase('x','y',4.1,-1.8),absCase('x','y',-2.3,3.8)]
    });

    // G. Положительные a,b: сравнение обратных величин (блок 2, задание 3).
    const invText = (num, relation) => `Сравните числа, если ${math('a')}, ${math('b')} – положительные числа и ${math(`a${relation}b`)}:${optRow([
      math(String.raw`\frac{${num}}{a}>\frac{${num}}{b}`),math(String.raw`\frac{${num}}{a}<\frac{${num}}{b}`),
      math(String.raw`\frac{${num}}{a}=\frac{${num}}{b}`),'невозможно определить'
    ])}`;
    newExtra.push({desc:'Сравнение дробей с одинаковым числителем',svg_code:'',
      theory_task:invText(3,'<'),theory_sol:'Для положительных a < b обратные величины удовлетворяют 1/a > 1/b. Умножение на 3 сохраняет знак.<br><br><b>Ответ:</b> 1',
      tasks:[[5,'<',1],[2,'>',2],[7,'<',1],[4,'>',2],[9,'<',1]].map(([n,rel,ans])=>({text:invText(n,rel),answer:String(ans)}))
    });

    // H. Изменение направления неравенства при умножении на отрицательное число (блок 2, задание 4).
    const falseIneqText=(u,v,n,m)=>`Какие из данных утверждений неверны, если ${math('a<c')}?${optRow([
      math(`a-${u}<c-${u}`),math(`a+${v}<c+${v}`),
      math(String.raw`-\frac{a}{${n}}<-\frac{c}{${n}}`),math(String.raw`\frac{a}{${m}}<\frac{c}{${m}}`)
    ])}`;
    newExtra.push({desc:'Какие утверждения о неравенстве неверны',svg_code:'',
      theory_task:falseIneqText(18,21,7,9),
      theory_sol:'При умножении неравенства на отрицательное число знак должен измениться. Поэтому неверно третье утверждение.<br><br><b>Ответ:</b> 3',
      tasks:[[25,14,11,5],[43,18,13,7],[39,26,8,17],[51,22,9,19],[17,34,15,23]].map(z=>({text:falseIneqText(...z),answer:'3'}))
    });

    // I. Минимальная степень числа в диапазонах a<−1, −1<a<0, 0<a<1, a>1 (блок 2, задание 2).
    const minPowerText=exps=>`На координатной прямой отмечены числа. Какое из перечисленных чисел наименьшее?${optRow(exps.map(k=>math(`a^{${k}}`)).concat('нет данных'))}`;
    const powerMin=(a,exps)=>{
      const vals=exps.map(n=>a**n), mn=Math.min(...vals), j=vals.findIndex(x=>Math.abs(x-mn)<1e-8);
      return {text:minPowerText(exps),svg_code:svgAxis([['a',a]],-2.2,2.4,[[-1,'−1'],[0,'0'],[1,'1']]),answer:String(j+1)};
    };
    newExtra.push({desc:'Наименьшая степень отмеченного числа',
      svg_code:svgAxis([['a',-0.5]],-2.2,2.4,[[-1,'−1'],[0,'0'],[1,'1']]),
      theory_task:minPowerText([1,2,3]),theory_sol:'Если −1 < a < 0, то a отрицательно, a² положительно и a³ ближе к нулю, чем a. Меньше всех число a.<br><br><b>Ответ:</b> 1',
      tasks:[powerMin(-.6,[1,2,3]),powerMin(.55,[2,3,4]),powerMin(1.6,[2,3,4]),powerMin(-1.4,[1,2,3]),powerMin(.7,[3,4,5])]
    });

    // J. Расположить 1/a, 1/b, 1 по возрастанию (блок 2, задание 5).
    const orderOptions=()=>[
      [math(String.raw`\frac1a`),'1',math(String.raw`\frac1b`)],
      [math(String.raw`\frac1b`),'1',math(String.raw`\frac1a`)],
      [math(String.raw`\frac1a`),math(String.raw`\frac1b`),'1'],
      [math(String.raw`\frac1b`),math(String.raw`\frac1a`),'1']
    ];
    const orderText = () => `Расположите в порядке возрастания числа.${optRow(orderOptions().map(a=>a.join(', ')))}`;
    const orderCase=(a,b,ans)=>({text:orderText(),svg_code:svgAxis([['a',a],['b',b]],-2.2,2.6,[[0,'0'],[1,'1']]),answer:String(ans)});
    newExtra.push({desc:'Порядок возрастания обратных величин и единицы',
      svg_code:svgAxis([['a',-.7],['b',.6]],-2.2,2.6,[[0,'0'],[1,'1']]),
      theory_task:orderText(),theory_sol:'При a < 0 < b < 1 величина 1/a отрицательна, а 1/b больше 1. Поэтому 1/a < 1 < 1/b.<br><br><b>Ответ:</b> 1',
      tasks:[orderCase(-.5,.7,1),orderCase(.4,1.8,2),orderCase(-.8,1.6,3),orderCase(1.2,2.1,4),orderCase(1.8,1.3,3)]
    });

    // K. Квадратный корень у точки A на оси (блок 2, задание 9).
    const sqrtMarkedText=(ns)=>`Одно из чисел отмечено на прямой точкой A. Какое это число?${optRow(ns.map(n=>math(String.raw`\sqrt{${n}}`)))}`;
    const sqrtMarked=(ns,which,from,to)=>({text:sqrtMarkedText(ns),svg_code:svgAxis([['A',Math.sqrt(ns[which-1])]],from,to,Array.from({length:to-from+1},(_,i)=>[from+i,String(from+i)])),answer:String(which)});
    newExtra.push({desc:'Найти отмеченный на прямой квадратный корень',
      svg_code:svgAxis([['A',Math.sqrt(54)]],6,8,[[6,'6'],[7,'7'],[8,'8']]),
      theory_task:sqrtMarkedText([42,49-1,54,62]),
      theory_sol:'Точка A находится примерно в 7,35. Этому соответствует √54.<br><br><b>Ответ:</b> 3',
      tasks:[
        sqrtMarked([41,48,53,63],3,6,8),sqrtMarked([28,33,38,47],2,5,7),
        sqrtMarked([17,22,28,32],1,4,6),sqrtMarked([29,33,39,44],3,5,7),
        sqrtMarked([18,24,26,32],3,4,6)
      ]
    });

    // L. Количество целых чисел между иррациональными границами (блок 2, задание 10).
    const rootExpr=(n,k=1)=>math((k===1?'':String(k))+String.raw`\sqrt{${n}}`);
    const countBetween=(left,right)=>`Сколько целых чисел расположено между ${rootExpr(left[0],left[1])} и ${rootExpr(right[0],right[1])}?`;
    const countCase=(lo,hi)=>{
      const a=Math.sqrt(lo[0])*lo[1],b=Math.sqrt(hi[0])*hi[1],k=Array.from({length:250},(_,i)=>i-40).filter(v=>v>Math.min(a,b)+1e-9&&v<Math.max(a,b)-1e-9).length;
      return {text:countBetween(lo,hi),answer:String(k)};
    };
    newExtra.push({desc:'Количество целых чисел между выражениями с корнями',svg_code:'',
      theory_task:countBetween([7,1],[82,1]),
      theory_sol:'√7 ≈ 2,65, а √82 ≈ 9,06. Между ними расположены целые числа 3, 4, 5, 6, 7, 8, 9 — всего 7.<br><br><b>Ответ:</b> 7',
      tasks:[countCase([22,1],[121,1]),countCase([3,4],[7,3]),countCase([38,1],[138,1]),countCase([13,3],[6,5]),countCase([10,2],[2,10])]
    });

    // Переупорядочение: не смешиваем базовые навыки, степени и корни.
    // Прежние пять прототипов сохранены без изменения условия и данных.
    const oldExtra = task7Extra.prototypes;
    task7Extra.prototypes = [
      newExtra[1], newExtra[0], newExtra[2], newExtra[3], oldExtra[0], newExtra[4],
      newExtra[5], newExtra[6], newExtra[7], newExtra[8], oldExtra[3],
      newExtra[9], oldExtra[4], oldExtra[1], newExtra[10], oldExtra[2], newExtra[11]
    ];
    task7Extra.source = 'Дополнительные прототипы по сборнику Е. А. Ширяевой «Задачник ОГЭ 2026 (тренажёр)», задание 07, блоки 2 и 3, а также ранее добавленные по варианту РЕШУ ОГЭ № 82086855. Формулировки прототипов сохранены; изменены числовые данные и соответствующие рисунки.';

    window.extraDatabase[7] = task7Extra;
    window.extraDatabase['task7'] = task7Extra;
})();
