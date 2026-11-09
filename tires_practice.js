(function () {
    'use strict';

    const TIRES_FIGURES_BASE64 = 'assets/bank/d98045bdef725d5672bcf594.png';
    window.TIRES_FIGURES_BASE64 = TIRES_FIGURES_BASE64;

    const imageHTML = `<img src="${TIRES_FIGURES_BASE64}" alt="Маркировка шины и схема автомобильного колеса" style="display:block;width:100%;max-width:720px;height:auto;margin:8px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;
    const theoryImageHTML = imageHTML;

    const commonText = `
        <p>Автомобильное колесо состоит из металлического диска и установленной на него резиновой шины. Диаметр диска совпадает с диаметром внутреннего отверстия шины.</p>
        <p>Маркировка шины записывается, например, так: <b>195/65 R15</b>. Первое число показывает ширину шины <b>B</b> в миллиметрах. Второе число показывает высоту боковины <b>H</b> в процентах от ширины. Поэтому для шины 195/65 R15: <b>B=195 мм</b>, а <b>H=195·0,65=126,75 мм</b>.</p>
        <p>Буква <b>R</b> означает радиальную конструкцию шины. Число после R — диаметр диска <b>d</b> в дюймах; <b>1 дюйм = 25,4 мм</b>. Общий диаметр колеса равен диаметру диска плюс высоты двух боковин.</p>
        <div style="margin:10px 0;padding:9px 12px;border-left:4px solid #14b8a6;background:#f0fdfa;border-radius:7px;color:#123;">
            <b>Удобные формулы:</b><br>
            <span style="white-space:nowrap;">H = B·p/100</span>, где p — второе число маркировки;<br>
            <span style="white-space:nowrap;">D = 25,4·d + 2H = 25,4·d + 2·B·p/100</span>.
        </div>
        <p>На заводе на автомобили этой модели устанавливают колёса с шинами <b>225/55 R16</b>.</p>`;

    const allowedSizesTable = `<div class="common-table-wrap"><table class="common-table"><thead><tr><th rowspan="2">Ширина шины, мм</th><th colspan="3">Диаметр диска, дюймы</th></tr><tr><th>16</th><th>17</th><th>18</th></tr></thead><tbody><tr><td>225</td><td>225/55</td><td>225/50</td><td>—</td></tr><tr><td>235</td><td>235/55; 235/50</td><td>235/50; 235/45</td><td>235/45</td></tr><tr><td>245</td><td>—</td><td>245/45</td><td>245/40</td></tr></tbody></table></div>`;

    function solutionBlock(steps, answer) {
        const rows = steps.map((step, index) => `<div style="display:grid;grid-template-columns:30px 1fr;gap:8px;align-items:start;margin:7px 0;"><div style="width:26px;height:26px;border-radius:50%;background:#ccfbf1;color:#0f766e;font-weight:800;display:flex;align-items:center;justify-content:center;">${index + 1}</div><div>${step}</div></div>`).join('');
        return `<div style="line-height:1.48;">${rows}<div style="margin-top:10px;padding:8px 11px;border:2px solid #fbbf24;border-radius:8px;background:#fffbeb;"><b>Ответ: ${answer}</b></div></div>`;
    }

    function proto(id, examNumber, title, text, answer, solution, accepts) {
        const n = Number(examNumber);
        return {
            id,
            typeId: id,
            typeTitle: `${id} — ${title}`,
            examNumber: n,
            title,
            text,
            answer: String(answer),
            accepts: (accepts || [String(answer)]).map(String),
            solution,
            imageHTML,
            theoryImageHTML,
            printLayout: 'image-grid',
            printGridHeight: n === 1 ? 78 : 96,
            printCompact: false
        };
    }

    const catalogPrototypes = [
        proto(
            '1.1', 1, 'Выбор минимальной ширины шины для диска 18 дюймов',
            `${allowedSizesTable}<p>Шины какой <b>наименьшей ширины</b> можно устанавливать на автомобиль, если диаметр диска равен <b>18 дюймам</b>? Ответ дайте в миллиметрах.</p>`,
            '235',
            solutionBlock([
                `Смотрим только столбец <b>18 дюймов</b>. В нём разрешены маркировки <b>235/45</b> и <b>245/40</b>.`,
                `Первое число маркировки — ширина шины. Возможные ширины: 235 мм и 245 мм.`,
                `Меньшая из них равна <b>235 мм</b>.`
            ], '235')
        ),
        proto(
            '2.1', 2, 'Высота боковины шины 225/60 R17',
            `Сколько миллиметров составляет высота боковины шины с маркировкой <b>225/60 R17</b>?`,
            '135',
            solutionBlock([
                `В маркировке 225/60 R17 ширина шины <b>B=225 мм</b>, а высота боковины составляет <b>60%</b> от ширины.`,
                `Находим 60% от 225: <span style="white-space:nowrap;">H=225·60/100=225·0,6</span>.`,
                `Удобно вычислить: 225·6=1350, затем разделить на 10. Получаем <b>135 мм</b>.`
            ], '135')
        ),
        proto(
            '3.1', 3, 'Диаметр заводского колеса 225/55 R16',
            `Найдите диаметр колеса автомобиля, выходящего с завода. Ответ дайте в миллиметрах.`,
            '653,9',
            solutionBlock([
                `Заводская маркировка — <b>225/55 R16</b>. Диаметр диска в миллиметрах: <span style="white-space:nowrap;">16·25,4=406,4 мм</span>.`,
                `Рационально сразу найти суммарную высоту двух боковин: <span style="white-space:nowrap;">2H=2·225·0,55=225·1,1=247,5 мм</span>.`,
                `Складываем диаметр диска и две боковины: <span style="white-space:nowrap;">D=406,4+247,5=653,9 мм</span>.`
            ], '653,9'),
            ['653,9', '653.9']
        ),
        proto(
            '4.1', 4, 'Изменение диаметра при замене на 235/45 R18',
            `На сколько миллиметров увеличится диаметр колеса, если заменить колёса, установленные на заводе, колёсами с шинами <b>235/45 R18</b>?`,
            '14,8',
            solutionBlock([
                `Диаметр заводского колеса 225/55 R16: <span style="white-space:nowrap;">D₀=16·25,4+2·225·0,55=406,4+247,5=653,9 мм</span>.`,
                `Для нового колеса 235/45 R18 удобно сначала найти две боковины: <span style="white-space:nowrap;">2H=2·235·0,45=235·0,9=211,5 мм</span>. Диаметр диска: <span style="white-space:nowrap;">18·25,4=457,2 мм</span>.`,
                `Новый диаметр: <span style="white-space:nowrap;">D₁=457,2+211,5=668,7 мм</span>. Увеличение: <span style="white-space:nowrap;">668,7−653,9=14,8 мм</span>.`
            ], '14,8'),
            ['14,8', '14.8']
        ),
        proto(
            '5.1', 5, 'Изменение пробега за оборот при замене на 235/55 R16',
            `На сколько процентов увеличится пробег автомобиля при одном обороте колеса, если заменить колёса, установленные на заводе, колёсами с шинами <b>235/55 R16</b>? Результат округлите до десятых.`,
            '1,7',
            solutionBlock([
                `За один оборот колесо проходит длину окружности <b>L=πD</b>. Поэтому процентное изменение пробега равно процентному изменению диаметра: множитель π сократится.`,
                `Заводской диаметр: <span style="white-space:nowrap;">D₀=16·25,4+2·225·0,55=653,9 мм</span>.`,
                `Новый диаметр: <span style="white-space:nowrap;">D₁=16·25,4+2·235·0,55=406,4+258,5=664,9 мм</span>.`,
                `Диаметр увеличился на <span style="white-space:nowrap;">664,9−653,9=11 мм</span>. Процент увеличения: <span style="white-space:nowrap;">11/653,9·100%≈1,682%</span>. Округляем до десятых: <b>1,7%</b>.`
            ], '1,7'),
            ['1,7', '1.7']
        )
    ];

    const scenario = {
        id: 'tires-plot-1',
        title: 'Сюжет 1. Маркировка автомобильных шин',
        common: `${commonText}${imageHTML}`,
        imageHTML,
        tasks: {
            1: catalogPrototypes.filter(t => t.examNumber === 1),
            2: catalogPrototypes.filter(t => t.examNumber === 2),
            3: catalogPrototypes.filter(t => t.examNumber === 3),
            4: catalogPrototypes.filter(t => t.examNumber === 4),
            5: catalogPrototypes.filter(t => t.examNumber === 5)
        }
    };

    window.ogePracticeDatabase = window.ogePracticeDatabase || {};
    window.ogePracticeDatabase.tires = {
        title: 'Шины',
        sourceStatus: 'active',
        catalog: {
            title: 'Каталог прототипов',
            common: `${commonText}${imageHTML}`,
            imageHTML,
            prototypes: catalogPrototypes
        },
        scenarios: [scenario]
    };
})();
