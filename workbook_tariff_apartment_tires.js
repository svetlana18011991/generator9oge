/* Задания 1–5 по рабочей тетради «Задания 1-5.pdf», издание 2026.
 * Подключать после practice_scenario_overrides.js и practice_solution_overrides.js.
 * Каталог сохраняет все разобранные прототипы. В тарифных комплектах пять
 * вопросов тетради выбраны по умолчанию, остальные доступны по своему номеру.
 */
(function () {
    'use strict';
    const db = window.ogePracticeDatabase || {};

    function workbookScenarios(themeId, selections) {
        const theme = db[themeId];
        if (!theme || !theme.catalog) return;
        const byId = new Map(theme.catalog.prototypes.map(task => [String(task.id), task]));
        theme.scenarios = selections.map((ids, index) => {
            const tasks = {};
            ids.forEach((id, offset) => {
                const source = byId.get(id);
                if (!source || Number(source.examNumber) !== offset + 1) {
                    throw new Error(`Нет прототипа ${themeId}/${id} для варианта тетради ${index + 1}`);
                }
                const candidates = themeId === 'tariff'
                    ? [source, ...theme.catalog.prototypes.filter(task =>
                        Number(task.examNumber) === offset + 1 && String(task.id) !== id)]
                    : [source];
                tasks[offset + 1] = candidates.map((task, taskIndex) => ({
                    ...task,
                    typeId: task.typeId || task.id,
                    typeTitle: task.typeTitle || `${task.id} — ${task.title}`,
                    sourcePrototypeId: task.id,
                    ...(themeId === 'tariff' ? {workbookDefault: taskIndex === 0} : {}),
                    accepts: (task.accepts || [task.answer]).slice()
                }));
            });
            return {
                id: `${themeId}-plot-${index + 1}`,
                title: `Вариант ${index + 1}. ${theme.title}`,
                workbookVariant: index + 1,
                common: theme.catalog.common,
                imageHTML: theme.catalog.imageHTML,
                tasks
            };
        });
    }

    workbookScenarios('tariff', [
        ['1.1', '2.1', '3.1', '4.1', '5.1'],
        ['1.2', '2.2', '3.2', '4.2', '5.2'],
        ['1.3', '2.3', '3.3', '4.3', '5.3']
    ]);
    workbookScenarios('apartment', [
        ['1.1', '2.1', '3.1', '4.1', '5.1'],
        ['1.2', '2.2', '3.2', '4.2', '5.2'],
        ['1.3', '2.3', '3.3', '4.3', '5.3']
    ]);

    // Во втором варианте тетради требуется сравнение радиусов, а не высота
    // боковины 215/55 R17 из прежнего сюжетного банка.
    const tires = db.tires;
    const secondTireScenario = tires && (tires.scenarios || []).find(s => s.id === 'tires-plot-2');
    if (secondTireScenario) {
        const previous = secondTireScenario.tasks[2][0];
        secondTireScenario.tasks[2] = [{
            ...previous,
            id: '2',
            typeId: '2.2',
            sourcePrototypeId: '2.2',
            typeTitle: '2.2 — Сравнение радиусов колёс с разными шинами',
            title: 'Сравнение радиусов: 205/55 R14 и 165/65 R14',
            text: '<p>На сколько миллиметров радиус колеса с шиной 205/55 R14 больше, чем радиус колеса с шиной 165/65 R14?</p>',
            answer: '5,5',
            accepts: ['5,5', '5.5'],
            solution: '<p>Диаметры дисков одинаковы, поэтому их половины в разности радиусов сокращаются. Сравним высоты боковин.</p><p>Первая шина: 205·0,55=112,75 мм. Вторая шина: 165·0,65=107,25 мм.</p><p>Разность радиусов: 112,75−107,25=5,5 мм.</p><p><b>Ответ: 5,5</b></p>'
        }];
    }
    // В третьем варианте таблица тетради начинается с ширины 195 мм.
    const thirdTireScenario = tires && (tires.scenarios || []).find(s => s.id === 'tires-plot-3');
    if (thirdTireScenario) {
        const tableTask = thirdTireScenario.tasks[1][0];
        tableTask.text = tableTask.text.replace('<tr><td>185</td><td>185/60</td><td>185/55</td><td>—</td></tr>', '');
    }
    if (tires) {
        // В тетради ровно эти три заводские комплектации.
        const expectedIds = ['tires-plot-1', 'tires-plot-2', 'tires-plot-3'];
        tires.scenarios = expectedIds.map(id => (tires.scenarios || []).find(s => s.id === id)).filter(Boolean);
        tires.scenarios.forEach((scenario, index) => { scenario.workbookVariant = index + 1; });
    }
})();
