(function () {
    'use strict';

    // Задания из «Задания 1–5», раздел «Тренажёр», стр. 50–52 и 77–79.
    // Каталог содержит прототипы раздела 1; комплекты повторяют пять заданий
    // каждого варианта тетради и не смешивают задания разных вариантов.
    const db = window.ogePracticeDatabase;
    if (!db) return;

    function plan(src, alt) {
        return `<img src="${src}" alt="${alt}" style="display:block;width:100%;max-width:620px;height:auto;margin:10px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;">`;
    }

    function variant(themeId, number, source, picks, title, imageHTML) {
        if (!source) throw new Error(`Не найден сюжет тетради: ${themeId}, вариант ${number}`);
        const common = String(source.common || '').replace(/<img\b[^>]*>/gi, '');
        const image = imageHTML || source.imageHTML;
        const tasks = {};
        for (let examNumber = 1; examNumber <= 5; examNumber++) {
            const group = source.tasks[examNumber] || [];
            const code = picks[examNumber - 1];
            const original = code === null ? group[0] : group.find(task => String(task.id || task.typeId) === code);
            if (!original) throw new Error(`Не найдено задание тетради: ${themeId}, ${number}, ${examNumber}`);
            tasks[examNumber] = [{
                ...original,
                id: `${themeId}-workbook-${number}-${examNumber}`,
                typeId: String(original.typeId || original.id),
                examNumber,
                common,
                imageHTML: image,
                theoryImageHTML: image,
                showImageInTask: false
            }];
        }
        return {
            id: `${themeId}-workbook-${number}`,
            title: `Вариант ${number}. ${title}`,
            workbookVariant: number,
            common,
            imageHTML: image,
            tasks,
            sourceCode: `workbook-variant-${number}`
        };
    }

    const trails = db.tropinki;
    if (trails) {
        const scenarios = trails.scenarios || [];
        const maslovka = scenarios.find(s => s.id === 'trails-plot-maslovka');
        const yasnaya = scenarios.find(s => s.id === 'tropinki-plot-1');
        const vasilkovo = scenarios.find(s => s.id === 'tropinki-plot-2');
        trails.catalog.prototypes = trails.catalog.prototypes.filter(task => /^\d+\.\d+$/.test(String(task.id || task.typeId)));
        trails.scenarios = [
            variant('tropinki', 1, maslovka, [null, null, null, null, null], 'Масловка — Захарово', plan('workbook_trails_maslovka.png', 'План из тетради: Масловка — Захарово')),
            variant('tropinki', 2, yasnaya, ['1.2', '2.2', '3.2', '4.2', '5.2'], 'Ясная — Майское'),
            variant('tropinki', 3, vasilkovo, ['1.1', '2.1', '3.1', '4.1', '5.1'], 'Васильково — Иваново')
        ];
    }

    const villages = db.villages;
    if (villages) {
        const antonovka = (villages.scenarios || []).find(s => s.id === 'villages-plot-1');
        const staraia = (villages.scenarios || []).find(s => s.id === 'villages-plot-2');
        villages.catalog.prototypes = villages.catalog.prototypes.filter(task => /^\d+\.\d+$/.test(String(task.id || task.typeId)));
        villages.scenarios = [
            variant('villages', 1, antonovka, ['1.1', '2.1', '3.1', '4.1', '5.1'], 'Антоновка — Богданово'),
            variant('villages', 2, staraia, [null, null, null, null, null], 'Старая — Мишино', plan('workbook_villages_staraia.png', 'План из тетради: Старая — Мишино')),
            variant('villages', 3, antonovka, ['1.3', '2.3', '3.3', '4.3', '5.3'], 'Антоновка — Богданово')
        ];
        const second = villages.scenarios[1].tasks;
        const solutions = {
            1: 'Старая — 7. Новая — 5, Арбузово — 2, Благое — 6, Ивушка — 3. В указанном порядке: 5263.',
            2: 'Ивушка находится между Арбузово и Мишино. Поэтому расстояние по шоссе: 30−6=24 км.',
            3: 'От Речного до Арбузово: 16−6=10 км; от Речного до Благого — 24 км. По теореме Пифагора: √(10²+24²)=26 км.',
            4: 'От Старой до Новой по шоссе 18 км. От Новой до Речного: 24−12=12 км. Просёлочная дорога Новая–Ивушка: √(12²+16²)=20 км. От Ивушки до Мишино по шоссе 24 км. Время: 18/40·60+20/25·60+24/40·60=27+48+36=111 мин.',
            5: 'От Старой до Речного: 18−12+24=30 км. От Речного до Мишино: 16−6+30=40 км. Путь по шоссе равен 70 км. Просёлочная дорога Старая–Ивушка: √(30²+16²)=34 км; затем по шоссе 24 км. Пусть x — расход на шоссе. Тогда 70x=34·9,2+24x; 46x=312,8; x=6,8 л на 100 км.'
        };
        for (let n = 1; n <= 5; n++) {
            const task = second[n][0];
            task.solution = `<p>${solutions[n]}</p><p><b>Ответ: ${task.answer}</b></p>`;
        }
    }
})();
