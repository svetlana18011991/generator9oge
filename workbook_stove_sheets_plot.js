(function () {
    'use strict';

    // «Задания 1–5», Быкова С., 2026: тренажёр, страницы 65–76.
    // Каталоги сохраняют все прототипы из раздела 1; каждый комплект ниже
    // воспроизводит ровно пять заданий соответствующего варианта тетради.
    const db = window.ogePracticeDatabase || {};

    function findTask(list, id) {
        const task = list.find(item => item.id === id);
        if (!task) throw new Error(`Не найден прототип тетради: ${id}`);
        return task;
    }

    function exactTasks(list, ids) {
        return Object.fromEntries(ids.map((id, index) => {
            const task = findTask(list, id);
            return [index + 1, [{ ...task, typeId: task.typeId || task.id,
                typeTitle: task.typeTitle || `${task.id} — ${task.title}`,
                sourcePrototypeId: task.id, accepts: [...(task.accepts || [task.answer])] }]];
        }));
    }

    function catalogVariants(themeKey, variants, firstPage) {
        const theme = db[themeKey];
        if (!theme) return;
        const base = theme.scenarios[0];
        theme.scenarios = variants.map((ids, index) => ({
            id: `${themeKey}-plot-${index + 1}`,
            title: `Вариант ${index + 1}. ${theme.title}`,
            common: base.common,
            imageHTML: base.imageHTML || '',
            workbookVariant: index + 1,
            workbookPage: firstPage + index,
            tasks: exactTasks(theme.catalog.prototypes, ids)
        }));
    }

    catalogVariants('stove', [
        ['1.1', '2.1', '3.1', '4.1', '5.1'],
        ['1.2', '2.2', '3.2', '4.2', '5.2'],
        ['1.1', '2.3', '3.1', '4.1', '5.1']
    ], 65);

    // Итоговая тетрадь: стр. 32–35 (разбор) и 68–70 (тренажёр).
    // В тренажёре варианта 2 задания №3 и №4 НЕ совпадают с прототипами 3.2 и 4.2
    // из раздела «Разбор». Выше сохранили сценарные пятёрки дословно,
    // ниже уточняем именно каталог разобранных прототипов.
    const stove = db.stove;
    if (stove) {
        const catalog = stove.catalog.prototypes;
        const lookup = id => catalog.find(task => String(task.id) === id);
        const source = lookup('1.1');
        function newPrototype(id, number, title, question, answer, solution) {
            return {
                ...source,
                id, typeId: id, typeTitle: `${id} — ${title}`, examNumber: number, title,
                text: question, answer: String(answer), accepts: [String(answer)], solution,
                imageHTML: '', theoryImageHTML: '', showImageInTask: false,
                printLayout: 'grid', printGridHeight: 96, printCompact: false, sourceCode: 'corrected-workbook-2026'
            };
        }
        const matchTable = (caption, values) => `<div class="common-table-wrap"><table class="common-table">` +
            `<tr><th>${caption}</th>${values.map(x => `<td>${x}</td>`).join('')}</tr>` +
            `<tr><th>Номер печи</th>${values.map(() => '<td></td>').join('')}</tr></table></div>`;
        const proto13 = newPrototype('1.3', 1, 'Соответствие минимальных объёмов помещения',
            `<p>Установите соответствие между объёмами помещения и номерами печей, для которых ` +
            `данный объём является наименьшим для отопления помещений. Заполните таблицу, ` +
            `в ответ запишите последовательность трёх цифр.</p>` + matchTable('Объём (куб. м)', ['8', '9', '10']),
            '132', '<p>Минимальный объём: печь №1 — 8 м³, печь №3 — 9 м³, печь №2 — 10 м³.</p><p><b>Ответ: 132</b></p>');
        const proto14 = newPrototype('1.4', 1, 'Соответствие максимальных объёмов помещения',
            `<p>Установите соответствие между объёмами помещения и номерами печей, для которых ` +
            `данный объём является наибольшим для отопления помещений. Заполните таблицу, ` +
            `в ответ запишите три цифры.</p>` + matchTable('Объём (куб. м)', ['12', '15,5', '16']),
            '132', '<p>Наибольший объём: печь №1 — 12 м³, печь №3 — 15,5 м³, печь №2 — 16 м³.</p><p><b>Ответ: 132</b></p>');
        const proto32 = newPrototype('3.2', 3, 'Электрическая печь с установкой и доставкой',
            `<p>Во сколько рублей обойдётся покупка электрической печи с установкой и доставкой, ` +
            `если доставка печи до участка будет стоить 1200 рублей?</p>`,
            '22700', '<p>15 000 + 6500 + 1200 = 22 700 руб.</p><p><b>Ответ: 22700</b></p>');
        const proto42 = newPrototype('4.2', 4, 'Цена до скидки 25 процентов',
            `<p>В прошлом году печи из таблицы стоили дороже. На печь № 1 сделали скидку 25%. ` +
            `Сколько рублей стоила печь № 1 в прошлом году?</p>`,
            '24000', '<p>18 000 руб. после скидки составляют 75% цены. 18000 : 0,75 = 24000 руб.</p><p><b>Ответ: 24000</b></p>');
        const proto43 = newPrototype('4.3', 4, 'Скидка на печь и доставку',
            `<p>Доставка любой печи из магазина до участка стоит 1200 рублей. При покупке печи ` +
            `дороже 19 000 рублей магазин делает скидку 10% на товар и 25% на доставку. ` +
            `Сколько будет стоить покупка печи № 2 с доставкой на этих условиях?</p>`,
            '18450', '<p>Печь №2 со скидкой: 19500 · 0,9 = 17550 руб. Доставка: 1200 · 0,75 = 900 руб. ' +
            `Итого 17550 + 900 = 18450 руб.</p><p><b>Ответ: 18450</b></p>`);
        // В каталоге сохраняем нумерацию разбора, в сценариях — вопросы тренажёра.
        for (const replacement of [proto13, proto14, proto32, proto42, proto43]) {
            const i = catalog.findIndex(t => String(t.id) === replacement.id);
            if (i >= 0) catalog[i] = replacement;
            else catalog.push(replacement);
        }
        catalog.sort((a,b) => Number(a.examNumber) - Number(b.examNumber) ||
            Number(String(a.id).split('.')[1]) - Number(String(b.id).split('.')[1]));
        // Дословная формулировка задачи о радиусе арки: общая для обоих рисунков.
        const archText = `<p>Печь снабжена кожухом вокруг дверцы топки. Верхняя часть кожуха ` +
            `выполнена в виде арки, приваренной к передней стенке печки по дуге окружности ` +
            `с центром в середине нижней части кожуха (рис. 2). Для установки печки ` +
            `хозяину понадобилось узнать радиус закругления арки R. Размеры кожуха ` +
            `в сантиметрах показаны на рисунке. Найдите радиус закругления арки в сантиметрах.</p>`;
        for (const id of ['5.1','5.2']) {
            const prototype = lookup(id); if (prototype) prototype.text = archText;
            for (const scenario of stove.scenarios) for (const task of (scenario.tasks[5] || [])) {
                if (String(task.sourcePrototypeId || task.id) === id) task.text = archText;
            }
        }
    }

    catalogVariants('sheets', [
        ['1.1', '2.1', '3.1', '4.1', '5.1'],
        ['1.2', '2.2', '3.2', '4.2', '5.2'],
        ['1.3', '2.3', '3.3', '4.1', '5.3']
    ], 68);

    const plot = db.plot;
    if (!plot) return;

    const selections = [
        ['plot-s1-1.1', 'plot-s1-2.1', 'plot-s1-3.1', 'plot-s1-4.1', 'plot-s1-5.1'],
        ['plot-s2-1.2', 'plot-s2-2.2', 'plot-s2-3.2', 'plot-s2-4.1', 'plot-s2-5.2'],
        ['1.1', '2.1', '3.1', '4.1', '5.1']
    ];
    const scenarioIds = ['plot-story-1-sosnovka', 'plot-story-2-avdeevo', 'plot-story-3-trainer'];
    plot.scenarios = scenarioIds.map((id, index) => {
        const base = plot.scenarios.find(item => item.id === id);
        if (!base) throw new Error(`Не найден сюжет тетради: ${id}`);
        const tasks = Object.values(base.tasks).flat();
        return {
            ...base,
            title: base.title.replace(/^Сюжет \d+\./, `Вариант ${index + 1}.`),
            workbookVariant: index + 1,
            workbookPage: 71 + index * 2,
            tasks: exactTasks(tasks, selections[index])
        };
    });

    function correction(variant, number, answer, steps) {
        const task = plot.scenarios[variant - 1].tasks[number][0];
        task.answer = answer;
        task.accepts = [answer];
        task.solution = `<div style="line-height:1.48;">${steps.map(step => `<p>${step}</p>`).join('')}<p><b>Ответ: ${answer}</b></p></div>`;
    }

    correction(1, 2, '9', [
        'На площадку между гаражом и сараем требуется 40 плиток размером 1 м × 1 м. На дорожки, включая короткие участки к дому и бане, требуется ещё 25 плиток.',
        'Всего 40 + 25 = 65 плиток. В одной упаковке 8 плиток: 65 : 8 = 8,125.',
        'Восьми упаковок не хватит, поэтому нужно купить 9 упаковок.'
    ]);
    correction(1, 4, '29', [
        'Весь участок занимает 15 × 10 = 150 клеток.',
        'Жилой дом занимает 17 клеток, гараж — 12, сарай — 6, баня — 3 × 3 = 9 клеток. Вместе: 17 + 12 + 6 + 9 = 44 клетки.',
        'Доля строений: 44 : 150 · 100% ≈ 29,33%. Округляем до целого: 29%.'
    ]);
    correction(2, 2, '6', [
        'По плану на дорожки требуется 26 плиток размером 1 м × 1 м. Площадка между баней и гаражом в этот подсчёт не входит.',
        'В упаковке 5 плиток: 26 : 5 = 5,2. Пяти упаковок не хватит, поэтому покупают 6 упаковок.'
    ]);
    correction(2, 3, '72', [
        'Огород занимает прямоугольник 7 × 3 = 21 клетка. Теплица внутри него занимает 3 клетки.',
        'Площадь открытого грунта: (21 − 3) · 2² = 18 · 4 = 72 м².'
    ]);
    correction(2, 4, '14', [
        'Площадь всего огорода равна 21 клетке, а теплица занимает 3 клетки.',
        'Доля теплицы: 3 : 21 · 100% ≈ 14,29%. После округления до целого получаем 14%.'
    ]);
})();
