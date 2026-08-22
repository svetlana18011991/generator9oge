(function(){
    window.extraDatabase = window.extraDatabase || {};

    const optRow = (items) => `<div style="margin-top:8px;display:grid;grid-template-columns:repeat(2,minmax(160px,1fr));gap:5px 18px;">${items.map((v,i)=>`<div>${i+1}) ${v}</div>`).join('')}</div>`;

    const valueChoiceText = (expr, options) => `Какое из данных ниже чисел является значением выражения \\(${expr}\\)?${optRow(options)}`;
    const numberedAnswerText = (expr, options) => `Найдите значение выражения \\(${expr}\\). В ответе укажите номер правильного варианта.${optRow(options)}`;

    const task8Extra = {
        title: 'Дополнительно',
        source: 'Дополнительные прототипы по файлам «допы8.pdf» и «ауа.pdf», отсутствующие как отдельные типы в основном сборнике задания 8. Формулировки сохранены, в аналогах изменены только числовые данные.',
        prototypes: [
            {
                desc: '8.Д1. Произведение и частное квадратных корней со степенями переменных',
                svg_code: '',
                theory_task: 'Найдите значение выражения \\(\\dfrac{\\sqrt{25a^{9}}\\cdot\\sqrt{16b^{8}}}{\\sqrt{a^{5}b^{8}}}\\) при \\(a=4\\) и \\(b=7\\).',
                theory_sol: 'Объединим корни: \\(\\dfrac{\\sqrt{25a^9}\\cdot\\sqrt{16b^8}}{\\sqrt{a^5b^8}}=\\sqrt{\\dfrac{25a^9\\cdot16b^8}{a^5b^8}}=\\sqrt{400a^4}=20a^2\\). При \\(a=4\\) получаем \\(20\\cdot16=320\\).<br><br><b>Ответ:</b> 320',
                tasks: [
                    { text: 'Найдите значение выражения \\(\\dfrac{\\sqrt{9a^{11}}\\cdot\\sqrt{25b^{6}}}{\\sqrt{a^{7}b^{6}}}\\) при \\(a=2\\) и \\(b=5\\).', answer: '60' },
                    { text: 'Найдите значение выражения \\(\\dfrac{\\sqrt{16a^{13}}\\cdot\\sqrt{9b^{10}}}{\\sqrt{a^{9}b^{10}}}\\) при \\(a=3\\) и \\(b=2\\).', answer: '108' },
                    { text: 'Найдите значение выражения \\(\\dfrac{\\sqrt{4a^{15}}\\cdot\\sqrt{49b^{4}}}{\\sqrt{a^{11}b^{4}}}\\) при \\(a=5\\) и \\(b=6\\).', answer: '350' },
                    { text: 'Найдите значение выражения \\(\\dfrac{\\sqrt{36a^{9}}\\cdot\\sqrt{25b^{12}}}{\\sqrt{a^{5}b^{12}}}\\) при \\(a=2\\) и \\(b=3\\).', answer: '120' },
                    { text: 'Найдите значение выражения \\(\\dfrac{\\sqrt{49a^{17}}\\cdot\\sqrt{4b^{8}}}{\\sqrt{a^{13}b^{8}}}\\) при \\(a=4\\) и \\(b=5\\).', answer: '224' }
                ]
            },
            {
                desc: '8.Д2. Значение выражения со степенями — выбор из четырёх чисел',
                svg_code: '',
                theory_task: valueChoiceText('\\dfrac{4^{-5}\\cdot4^{-4}}{4^{-8}}', ['\\(4\\)', '\\(\\dfrac14\\)', '\\(-4\\)', '\\(-\\dfrac14\\)']),
                theory_sol: 'Используем свойства степеней: \\(\\dfrac{4^{-5}\\cdot4^{-4}}{4^{-8}}=4^{-5-4+8}=4^{-1}=\\dfrac14\\). Это вариант 2.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: valueChoiceText('\\dfrac{3^{-4}\\cdot3^{-3}}{3^{-5}}', ['\\(9\\)', '\\(\\dfrac19\\)', '\\(-9\\)', '\\(-\\dfrac19\\)']), answer: '2' },
                    { text: valueChoiceText('\\dfrac{5^{-2}\\cdot5^{-3}}{5^{-6}}', ['\\(5\\)', '\\(\\dfrac15\\)', '\\(-5\\)', '\\(-\\dfrac15\\)']), answer: '1' },
                    { text: valueChoiceText('\\dfrac{2^{-6}\\cdot2^{-2}}{2^{-5}}', ['\\(8\\)', '\\(-8\\)', '\\(\\dfrac18\\)', '\\(-\\dfrac18\\)']), answer: '3' },
                    { text: valueChoiceText('\\dfrac{7^{-3}\\cdot7^{-4}}{7^{-8}}', ['\\(\\dfrac17\\)', '\\(-7\\)', '\\(7\\)', '\\(-\\dfrac17\\)']), answer: '3' },
                    { text: valueChoiceText('\\dfrac{10^{-4}\\cdot10^{-2}}{10^{-5}}', ['\\(10\\)', '\\(-0{,}1\\)', '\\(0{,}1\\)', '\\(-10\\)']), answer: '3' }
                ]
            },
            {
                desc: '8.Д3. Выражение с квадратными корнями — номер правильного варианта',
                svg_code: '',
                theory_task: numberedAnswerText('\\dfrac{\\sqrt{720}\\cdot\\sqrt{15}}{\\sqrt{600}}', ['\\(3\\sqrt6\\)', '\\(6\\)', '\\(3\\sqrt2\\)', '\\(3\\sqrt{10}\\)']),
                theory_sol: 'Объединим корни: \\(\\dfrac{\\sqrt{720}\\cdot\\sqrt{15}}{\\sqrt{600}}=\\sqrt{\\dfrac{720\\cdot15}{600}}=\\sqrt{18}=3\\sqrt2\\). Это вариант 3.<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: numberedAnswerText('\\dfrac{\\sqrt{192}\\cdot\\sqrt6}{\\sqrt8}', ['\\(6\\)', '\\(12\\)', '\\(4\\sqrt3\\)', '\\(6\\sqrt2\\)']), answer: '2' },
                    { text: numberedAnswerText('\\dfrac{\\sqrt{300}\\cdot\\sqrt6}{\\sqrt8}', ['\\(5\\sqrt3\\)', '\\(15\\)', '\\(3\\sqrt5\\)', '\\(5\\sqrt6\\)']), answer: '2' },
                    { text: numberedAnswerText('\\dfrac{\\sqrt{98}\\cdot\\sqrt{12}}{\\sqrt6}', ['\\(7\\sqrt2\\)', '\\(14\\)', '\\(2\\sqrt{14}\\)', '\\(7\\)']), answer: '2' },
                    { text: numberedAnswerText('\\dfrac{\\sqrt{96}\\cdot\\sqrt{15}}{\\sqrt{10}}', ['\\(4\\sqrt3\\)', '\\(6\\sqrt2\\)', '\\(12\\)', '\\(3\\sqrt6\\)']), answer: '3' },
                    { text: numberedAnswerText('\\dfrac{\\sqrt{150}\\cdot\\sqrt{24}}{\\sqrt{10}}', ['\\(6\\sqrt5\\)', '\\(6\\sqrt{10}\\)', '\\(12\\sqrt2\\)', '\\(18\\)']), answer: '2' }
                ]
            }
        ]
    };

    window.extraDatabase[8] = task8Extra;
    window.extraDatabase['task8'] = task8Extra;
})();
