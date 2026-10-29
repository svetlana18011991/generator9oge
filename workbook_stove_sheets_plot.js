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
