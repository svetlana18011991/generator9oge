(function () {
    'use strict';

    const STOVE_FIGURE_51_BASE64 = "assets/bank/4046a4a78aeb5d6d7fa1f4a9.webp";
    const STOVE_FIGURE_52_BASE64 = "assets/bank/56f64dbf9381fa10b31423f4.webp";

    const figure51HTML = `<img src="${STOVE_FIGURE_51_BASE64}" alt="Дровяная печь и чертёж кожуха: ширина 50 см, высота до начала арки 60 см" style="display:block;width:100%;max-width:620px;height:auto;margin:10px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;
    const figure52HTML = `<img src="${STOVE_FIGURE_52_BASE64}" alt="Дровяная печь и чертёж кожуха: ширина 60 см, высота до начала арки 40 см" style="display:block;width:100%;max-width:620px;height:auto;margin:10px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;

    const stoveTable = `<div class="common-table-wrap"><table class="common-table">
        <thead><tr><th>Номер печи</th><th>Тип</th><th>Объём помещения (куб. м)</th><th>Масса (кг)</th><th>Стоимость (руб.)</th></tr></thead>
        <tbody>
            <tr><td>1</td><td>дровяная</td><td>8–12</td><td>40</td><td>18 000</td></tr>
            <tr><td>2</td><td>дровяная</td><td>10–16</td><td>48</td><td>19 500</td></tr>
            <tr><td>3</td><td>электрическая</td><td>9–15,5</td><td>15</td><td>15 000</td></tr>
        </tbody>
    </table></div>`;

    const commonText = `
        <p>Хозяин дачного участка строит баню с парным отделением. Парное отделение имеет размеры: <b>длина 3,5 м, ширина 2,2 м, высота 2 м</b>. Окон в парном отделении нет. Для доступа внутрь планируется дверь шириной <b>60 см</b>, высота дверного проёма <b>1,8 м</b>.</p>
        <p>Для прогрева парного отделения можно использовать электрическую или дровяную печь. В таблице представлены характеристики трёх печей.</p>
        ${stoveTable}
        <p>Для установки дровяной печи дополнительных затрат не потребуется. Установка электрической печи потребует подведения специального кабеля, что обойдётся в <b>6500 руб.</b></p>`;

    function solutionBlock(steps, answer) {
        return `<div style="line-height:1.48;">${steps.map((step,index)=>`<div style="display:grid;grid-template-columns:30px 1fr;gap:8px;align-items:start;margin:7px 0;"><div style="width:26px;height:26px;border-radius:50%;background:#ccfbf1;color:#0f766e;font-weight:800;display:flex;align-items:center;justify-content:center;">${index+1}</div><div>${step}</div></div>`).join('')}<div style="margin-top:10px;padding:8px 11px;border:2px solid #fbbf24;border-radius:8px;background:#fffbeb;"><b>Ответ: ${answer}</b></div></div>`;
    }

    function proto(id, examNumber, title, text, answer, solution, options={}) {
        return {
            id,
            typeId: id,
            typeTitle: `${id} — ${title}`,
            examNumber: Number(examNumber),
            title,
            text,
            answer: String(answer),
            accepts: (options.accepts || [String(answer)]).map(String),
            solution,
            imageHTML: options.imageHTML || '',
            theoryImageHTML: options.theoryImageHTML !== undefined ? options.theoryImageHTML : (options.imageHTML || ''),
            printLayout: options.imageHTML ? 'image-grid' : 'grid',
            printGridHeight: options.imageHTML ? 110 : 96,
            printCompact: Boolean(options.printCompact),
            showImageInTask: Boolean(options.showImageInTask),
            sourceCode: options.sourceCode || ''
        };
    }

    const catalogPrototypes = [
        proto('1.1', 1, 'Соответствие масс и номеров печей',
            `<p>Установите соответствие между указанными массами и номерами печей. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p>
             <div class="common-table-wrap"><table class="common-table"><tr><th>Масса (кг)</th><td>15</td><td>40</td><td>48</td></tr><tr><th>Номер печи</th><td></td><td></td><td></td></tr></table></div>`,
            '312',
            solutionBlock([
                `По таблице масса <b>15 кг</b> соответствует электрической печи №<b>3</b>.`,
                `Масса <b>40 кг</b> соответствует дровяной печи №<b>1</b>.`,
                `Масса <b>48 кг</b> соответствует дровяной печи №<b>2</b>.`,
                `Записываем номера в указанном порядке: <b>312</b>.`
            ], '312')),

        proto('1.2', 1, 'Соответствие стоимости и номеров печей',
            `<p>Установите соответствие между указанными стоимостями и номерами печей. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p>
             <div class="common-table-wrap"><table class="common-table"><tr><th>Стоимость (руб.)</th><td>15 000</td><td>19 500</td><td>18 000</td></tr><tr><th>Номер печи</th><td></td><td></td><td></td></tr></table></div>`,
            '321',
            solutionBlock([
                `Стоимость <b>15 000 руб.</b> указана для печи №<b>3</b>.`,
                `Стоимость <b>19 500 руб.</b> — для печи №<b>2</b>.`,
                `Стоимость <b>18 000 руб.</b> — для печи №<b>1</b>.`,
                `Ответ: <b>321</b>.`
            ], '321'),
            {sourceCode:'74CB1E'}),

        proto('2.1', 2, 'Объём парного отделения',
            `Найдите объём парного отделения строящейся бани. Ответ дайте в кубических метрах.`,
            '15,4',
            solutionBlock([
                `Парное отделение — прямоугольный параллелепипед с размерами <b>3,5 м × 2,2 м × 2 м</b>.`,
                `Объём: <span style="white-space:nowrap;">V=3,5·2,2·2=15,4 м³</span>.`
            ], '15,4'),
            {accepts:['15,4','15.4'],sourceCode:'CD3CFF'}),

        proto('2.2', 2, 'Площадь пола парного отделения',
            `Найдите площадь пола парного отделения строящейся бани. Ответ дайте в квадратных метрах.`,
            '7,7',
            solutionBlock([
                `Пол — прямоугольник размером <b>3,5 м × 2,2 м</b>.`,
                `Площадь пола: <span style="white-space:nowrap;">S=3,5·2,2=7,7 м²</span>.`
            ], '7,7'),
            {accepts:['7,7','7.7']}),

        proto('2.3', 2, 'Суммарная площадь стен без дверного проёма',
            `Найдите суммарную площадь стен парного отделения строящейся бани <b>без площади двери</b>. Ответ дайте в квадратных метрах.`,
            '21,72',
            solutionBlock([
                `Площадь четырёх стен равна периметру пола, умноженному на высоту: <span style="white-space:nowrap;">2·(3,5+2,2)·2=22,8 м²</span>.`,
                `Размер дверного проёма: <b>0,6 м × 1,8 м</b>. Его площадь: <span style="white-space:nowrap;">0,6·1,8=1,08 м²</span>.`,
                `Искомая площадь: <span style="white-space:nowrap;">22,8−1,08=21,72 м²</span>.`
            ], '21,72'),
            {accepts:['21,72','21.72']}),

        proto('3.1', 3, 'Сравнение стоимости с учётом установки',
            `На сколько рублей покупка <b>дровяной печи, подходящей по объёму парного отделения</b>, обойдётся дешевле электрической <b>с учётом установки</b>?`,
            '2000',
            solutionBlock([
                `Объём парного отделения равен <b>15,4 м³</b>. Из дровяных печей подходит печь №2: её диапазон <b>10–16 м³</b>, стоимость <b>19 500 руб.</b>`,
                `Электрическая печь №3 подходит по объёму: <b>9–15,5 м³</b>. С учётом кабеля она стоит <span style="white-space:nowrap;">15 000+6500=21 500 руб.</span>`,
                `Разница: <span style="white-space:nowrap;">21 500−19 500=2000 руб.</span>`
            ], '2000'),
            {sourceCode:'88BF31'}),

        proto('3.2', 3, 'Сравнение стоимости без учёта установки',
            `На сколько рублей покупка <b>дровяной печи, подходящей по объёму парного отделения</b>, обойдётся дороже электрической <b>без учёта установки</b>?`,
            '4500',
            solutionBlock([
                `По объёму 15,4 м³ подходит дровяная печь №2 стоимостью <b>19 500 руб.</b>`,
                `Электрическая печь №3 без учёта установки стоит <b>15 000 руб.</b>`,
                `Разница: <span style="white-space:nowrap;">19 500−15 000=4500 руб.</span>`
            ], '4500'),
            {sourceCode:'908015'}),

        proto('4.1', 4, 'Скидка 10% на дровяную печь массой 40 кг',
            `На дровяную печь, масса которой <b>40 кг</b>, сделали скидку <b>10%</b>. Сколько рублей стала стоить печь?`,
            '16200',
            solutionBlock([
                `Печь массой 40 кг — это печь №1. Её первоначальная цена <b>18 000 руб.</b>`,
                `Скидка 10%: <span style="white-space:nowrap;">18 000·0,10=1800 руб.</span>`,
                `Новая цена: <span style="white-space:nowrap;">18 000−1800=16 200 руб.</span>`
            ], '16200'),
            {sourceCode:'8A06F1'}),

        proto('4.2', 4, 'Скидка 10% на дровяную печь массой 48 кг',
            `На дровяную печь, масса которой <b>48 кг</b>, сделали скидку <b>10%</b>. Сколько рублей стала стоить печь?`,
            '17550',
            solutionBlock([
                `Печь массой 48 кг — печь №2. Её цена <b>19 500 руб.</b>`,
                `После скидки 10% остаётся 90% цены: <span style="white-space:nowrap;">19 500·0,9=17 550 руб.</span>`
            ], '17550')),

        proto('5.1', 5, 'Радиус закругления арки кожуха: 50 и 60 см',
            `<p>Хозяин выбрал дровяную печь. Чертёж передней панели печи показан на рисунке. Печь снабжена кожухом вокруг дверцы топки. Верхняя часть кожуха выполнена в виде арки по дуге окружности с центром в середине нижней части кожуха.</p><p>Для установки печи хозяину понадобилось узнать радиус закругления арки <b>R</b>. Размеры кожуха в сантиметрах показаны на рисунке. Найдите радиус закругления арки в сантиметрах.</p>`,
            '65',
            solutionBlock([
                `Центр окружности находится в середине нижней стороны кожуха. Половина ширины кожуха: <span style="white-space:nowrap;">50:2=25 см</span>.`,
                `До точки начала арки по вертикали <b>60 см</b>. Радиус является гипотенузой прямоугольного треугольника с катетами 25 и 60.`,
                `По теореме Пифагора: <span style="white-space:nowrap;">R=√(25²+60²)=√4225=65 см</span>.`
            ], '65'),
            {imageHTML:figure51HTML,theoryImageHTML:figure51HTML,showImageInTask:true}),

        proto('5.2', 5, 'Радиус закругления арки кожуха: 60 и 40 см',
            `<p>Хозяин выбрал дровяную печь. Чертёж передней панели печи показан на рисунке. Печь снабжена кожухом вокруг дверцы топки. Верхняя часть кожуха выполнена в виде арки по дуге окружности с центром в середине нижней части кожуха.</p><p>Для установки печи хозяину понадобилось узнать радиус закругления арки <b>R</b>. Размеры кожуха в сантиметрах показаны на рисунке. Найдите радиус закругления арки в сантиметрах.</p>`,
            '50',
            solutionBlock([
                `Половина ширины кожуха: <span style="white-space:nowrap;">60:2=30 см</span>.`,
                `Вертикальный катет равен <b>40 см</b>.`,
                `Радиус: <span style="white-space:nowrap;">R=√(30²+40²)=√2500=50 см</span>.`
            ], '50'),
            {imageHTML:figure52HTML,theoryImageHTML:figure52HTML,showImageInTask:true})
    ];

    // В банке ФИПИ для этой темы представлен один сюжет, поэтому в комплекте
    // используются те же прототипы: генератор выбирает по одному варианту №1–5.
    const scenario = {
        id: 'stove-plot-1',
        title: 'Сюжет 1. Печь',
        common: commonText,
        imageHTML: '',
        tasks: {
            1: catalogPrototypes.filter(t => t.examNumber === 1),
            2: catalogPrototypes.filter(t => t.examNumber === 2),
            3: catalogPrototypes.filter(t => t.examNumber === 3),
            4: catalogPrototypes.filter(t => t.examNumber === 4),
            5: catalogPrototypes.filter(t => t.examNumber === 5)
        }
    };

    window.ogePracticeDatabase = window.ogePracticeDatabase || {};
    window.ogePracticeDatabase.stove = {
        title: 'Печь',
        sourceStatus: 'active',
        catalog: {
            title: 'Каталог прототипов',
            common: commonText,
            imageHTML: '',
            prototypes: catalogPrototypes
        },
        scenarios: [scenario]
    };
})();
