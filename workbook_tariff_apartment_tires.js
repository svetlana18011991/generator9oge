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

    // Сверка с итоговой тетрадью «ОГЭ_1-5_правки_тропинки_печь.pdf»,
    // стр. 25, 63–64: 850 Мб оплачивается за ОДИН месяц (1000 руб.),
    // а ограничение модели стиральной машины — по ВЫСОТЕ, не по глубине.
    const apartment = db.apartment;
    if (apartment) {
        const apCatalog = apartment.catalog.prototypes;
        const apScenario = (v, n) => apartment.scenarios[v - 1].tasks[n][0];
        const original = (id) => apCatalog.find(t => String(t.id) === id);
        // Задание №1 (все три варианта): в тетради имеется таблица для записи
        // последовательности цифр, а не только короткий вопрос без таблицы.
        for (const [variant, objects] of [
            [1, ['коридор','кладовая','спальня','кухня']],
            [2, ['коридор','кладовая','кухня','гостиная']],
            [3, ['коридор','санузел','спальня','гостиная']]
        ]) {
            const n = `1.${variant}`;
            const answerTable = `<div class="common-table-wrap"><table class="common-table">` +
                `<tr><th>Объекты</th>${objects.map(x=>`<td>${x}</td>`).join('')}</tr>` +
                `<tr><th>Цифры</th>${objects.map(()=>'<td></td>').join('')}</tr></table></div>`;
            const text = `<p>Для объектов, указанных в таблице, определите, какими цифрами ` +
                `они обозначены на плане. Заполните таблицу, в бланк перенесите ` +
                `последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>` + answerTable;
            for (const task of [original(n), apScenario(variant,1)]) task.text = text;
        }
        // Задание 5 первого варианта: восстановлены вводная фраза и правило доставки.
        const machine1 = original('5.1');
        const machineTable = machine1.text.match(/<div class="common-table-wrap">[\s\S]*?<\/div>/);
        if (!machineTable) throw new Error('Не найдена таблица стиральных машин 5.1');
        const machineText = `<p>В квартире планируется установить стиральную машину. ` +
            `Характеристики стиральных машин, условия подключения и доставки приведены в таблице.</p>` +
            machineTable[0] + `<p>Планируется купить стиральную машину с вертикальной загрузкой ` +
            `вместимостью не менее 6 кг. Сколько рублей будет стоить наиболее дешёвый подходящий ` +
            `вариант вместе с подключением и доставкой? Стоимость доставки указана ` +
            `в процентах от цены машины.</p>`;
        for (const task of [machine1, apScenario(1,5)]) task.text = machineText;
        const internet = original('5.2');
        const internetQuestion = `<p>В квартире планируется подключить интернет. Предполагается, что трафик составит <b>850 Мб в месяц</b>, и исходя из этого выбирается наиболее дешёвый вариант. Интернет-провайдер предлагает три тарифных плана.</p>`;
        // Сохраняем таблицу тарифов и заменяем только исходную ошибку про три месяца.
        const internetTable = internet.text.match(/<div class="common-table-wrap">[\s\S]*?<\/div>/);
        if (!internetTable) throw new Error('Не найдена таблица интернет-тарифов прототипа квартиры 5.2');
        const correctInternet = internetQuestion + internetTable[0] +
            `<p>Сколько рублей он заплатит за интернет <b>за месяц</b>, если трафик действительно будет равен <b>850 Мб в месяц</b>?</p>`;
        const internetSolution = `<p>План «800»: 900 + (850 − 800) · 2 = <b>1000 руб. в месяц</b>. ` +
            `План «1000» стоит 1050 руб. в месяц, безлимитный — 1100 руб. Выбираем минимальный платеж.</p><p><b>Ответ: 1000</b></p>`;
        for (const task of [internet, apScenario(2, 5)]) {
            task.text = correctInternet;
            task.answer = '1000'; task.accepts = ['1000']; task.solution = internetSolution;
        }
        // Третий вариант: на рисунке/в таблице В×Ш×Г, предел именно ВЫСОТЫ 85 см.
        const washer = original('5.3');
        const washerProblem = `<p>В квартире планируется установить стиральную машину. ` +
            `Характеристики стиральных машин, условия подключения и доставки приведены в таблице.</p>`;
        const washerTable = washer.text.match(/<div class="common-table-wrap">[\s\S]*?<\/div>/);
        if (!washerTable) throw new Error('Не найдена таблица стиральных машин прототипа квартиры 5.3');
        const washerText = washerProblem + washerTable[0] +
            `<p>Планируется купить стиральную машину с <b>вертикальной загрузкой</b>, ` +
            `<b>не превосходящую 85 см по высоте</b>. Сколько рублей будет стоить наиболее дешёвый ` +
            `подходящий вариант вместе с подключением и доставкой? ` +
            `Стоимость доставки указана в процентах от цены машины.</p>`;
        const washerSolution = `<p>Подходят модели А и К: их высота 85 см, загрузка вертикальная. ` +
            `Модели Е и Ж имеют высоту 89 см и не подходят.</p><p>Модель А: 28000 + 1700 = 29700 руб.; ` +
            `модель К: 27000 + 1800 = <b>28800 руб.</b> Доставка для обеих бесплатная.</p>` +
            `<p><b>Ответ: 28800</b></p>`;
        for (const task of [washer, apScenario(3, 5)]) {
            task.text = washerText;
            task.answer = '28800'; task.accepts = ['28800']; task.solution = washerSolution;
        }
    }

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
