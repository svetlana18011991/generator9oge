(function () {
    'use strict';
    // Correction layer applied AFTER all workbook/variant overrides.
    // Source: «Задания 1–5.pdf», Быкова С., 2026. Text-only changes
    // preserve existing figures, tables, mathematical data and answers.
    const db = window.ogePracticeDatabase;
    if (!db) return;
    const each = (theme, fn) => {
        if (!db[theme]) return;
        for (const task of db[theme].catalog.prototypes) fn(task, 'catalog', null);
        for (const scenario of db[theme].scenarios || [])
            for (const list of Object.values(scenario.tasks || {}))
                for (const task of list) fn(task, 'scenario', scenario);
    };
    const uniq = (list) => [...new Set(list)];
    const updateCommon = (theme, edit) => {
        if (!db[theme]) return;
        db[theme].catalog.common = edit(db[theme].catalog.common);
        for (const scenario of db[theme].scenarios || []) {
            scenario.common = edit(scenario.common);
            for (const list of Object.values(scenario.tasks || {}))
                for (const task of list)
                    if (typeof task.common === 'string') task.common = edit(task.common);
        }
    };
    const getTable = (value) => (String(value).match(/<div class="common-table-wrap">[\s\S]*?<\/div>/) || [''])[0];
    const renderTable = (objects, label) => `<div class="common-table-wrap"><table class="common-table"><tr><th>${label || 'Объекты'}</th>${objects.map(x => `<td>${x}</td>`).join('')}</tr><tr><th>Цифры</th>${objects.map(() => '<td></td>').join('')}</tr></table></div>`;
    const firstParagraph = (value, p) => {
        const text = String(value);
        return /^\s*<p[\s>]/i.test(text)
            ? text.replace(/<p\b[^>]*>[\s\S]*?<\/p>/i, `<p>${p}</p>`)
            : `<p>${p}</p>${text}`;
    };
    const asP = s => `<p>${s}</p>`;

    // 1.2 Тарифы, PDF p.7, p.60,62,64: complete common condition,
    // NOT 150 SMS and NOT "120 in each month".
    updateCommon('tariff', previous => {
        const old = String(previous);
        const picture = (old.match(/<img\b[^>]*>/gi) || []).join('');
        const extraTable = getTable(old);
        return `${picture}<p>На рисунке точками показано количество минут исходящих вызовов и трафик мобильного интернета в гигабайтах, израсходованных абонентом в процессе пользования смартфоном, за каждый месяц 2019 года. Для удобства точки, соответствующие минутам и гигабайтам, соединены сплошными и пунктирными линиями соответственно. В течение года абонент пользовался тарифом «Стандартный», абонентская плата по которому составляла 350 рублей в месяц. При условии нахождения абонента на территории РФ в абонентскую плату тарифа «Стандартный» входит:</p>
        <ul><li>пакет минут, включающий 300 минут исходящих вызовов на номера, зарегистрированные на территории РФ;</li><li>пакет интернета, включающий 3 гигабайта мобильного интернета;</li><li>пакет SMS, включающий 120 SMS в месяц;</li><li>безлимитные бесплатные входящие вызовы.</li></ul>
        <p>Стоимость минут, интернета и SMS сверх пакета тарифа указана в таблице.</p>${extraTable}
        <p>Абонент не пользовался услугами связи в роуминге. За весь год абонент отправил 110 SMS.</p>`;
    });

    // 1.3 План квартиры: "попасть", not "выйти" (common condition).
    updateCommon('apartment', value => String(value).replace(/Из кухни также можно выйт[ьи] на застеклённую лоджию/g,
        'Из кухни также можно попасть на застеклённую лоджию'));
    const apartmentNames = {
        '1.1':['коридор','кладовая','спальня','кухня'],
        '1.2':['коридор','кладовая','кухня','гостиная'],
        '1.3':['коридор','санузел','спальня','гостиная'],
        '1.4':['коридор','кладовая','спальня','гостиная'],
        '1.5':['санузел','кладовая','спальня','гостиная']
    };
    each('apartment', (task, zone) => {
        const id = String(task.sourcePrototypeId || task.typeId || task.id);
        const names = apartmentNames[id];
        if (['1.4','1.5'].includes(id)) {
            task.text = asP('Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.') + renderTable(names);
        } else if (names && zone === 'catalog') {
            const question = `Определите, какими цифрами на плане обозначены ${names.join(', ').replace(/, ([^,]*)$/, ' и $1')}. Запишите четыре цифры подряд в указанном порядке.`;
            task.text = asP(question) + renderTable(names);
        }
        if (String(task.text).includes('Сколько рублей нужно будет заплатить за интернет за')) {
            // The source uses "Сколько рублей он заплатит ..."; preserve tables.
            task.text = String(task.text).replace('Сколько рублей нужно будет заплатить', 'Сколько рублей он заплатит');
        }
        if (/^[5]\.[45678]$/.test(id) && zone === 'catalog' && !String(task.text).startsWith('<p>В квартире планируется')) {
            // Wording of internet / washing-machine source question is in the PDF's prototype.
            if (['5.4','5.5'].includes(id)) {
                task.text = asP('В квартире планируется установить стиральную машину. Характеристики стиральных машин, условия подключения и доставки приведены в таблице.') + String(task.text);
            } else {
                const match = String(task.text).match(/(\d+) Мб/);
                task.text = asP(`В квартире планируется подключить интернет. Предполагается, что трафик составит ${match ? match[1] : '850'} Мб в месяц, и исходя из этого выбирается наиболее дешёвый вариант. Интернет-провайдер предлагает три тарифных плана.`) + String(task.text);
            }
        }
    });

    // 1.4 Шины: introductory sentences before the permitted-size table,
    // and the source wording "заводские колёса" (PDF p.30–31,72–76).
    each('tires', (task, zone) => {
        if (Number(task.examNumber) === 1) {
            const preface = 'Завод допускает установку шин с другими маркировками. В таблице показаны разрешённые размеры шин.';
            if (!String(task.text).includes(preface)) task.text = asP(preface) + task.text;
        }
        if (zone === 'catalog' && String(task.id) === '4.1')
            task.text = String(task.text).replace(/колёса, установленные на заводе/g, 'заводские колёса');
    });

    // 1.5 Печь: do not insert the word "указанными" in comparison instructions.
    each('stove', (task) => {
        if (Number(task.examNumber) === 1 && /между указанными (массами|стоимостями)/.test(task.text))
            task.text = String(task.text).replace('между указанными массами', 'между массами')
                .replace('между указанными стоимостями', 'между стоимостями');
    });

    // 1.6 Листы: rewrite the common wording as printed in the PDF (p.37).
    updateCommon('sheets', prev => {
        const picture = (String(prev).match(/<img\b[^>]*>/gi) || []).join('');
        return `${picture}<p>Общепринятые форматы листов бумаги обозначают буквой А и цифрой: А0, А1, А2 и так далее. Лист формата А0 имеет форму прямоугольника площадью 1 кв. м. Если лист формата А0 разрезать пополам параллельно меньшей стороне, получатся два одинаковых листа формата А1. Если лист А1 разрезать пополам таким же образом, получатся два листа формата А2 и т. д. Отношение большей стороны к меньшей стороне листа каждого формата одно и то же, поэтому листы всех форматов подобны. Это нужно, чтобы пропорции текста и его расположение на листе сохранялись при изменении формата листа.</p>`;
    });
    each('sheets', (task, zone) => {
        const id = String(task.id);
        if (Number(task.examNumber) === 1) {
            task.text = String(task.text)
                .replace('четырёх цифр без пробелов, запятых и других дополнительных символов',
                         'четырёх цифр, соответствующих номерам листов, без пробелов, запятых и дополнительных символов');
        }
        if (zone === 'catalog' && (id === '5.3' || id === '5.4')) {
            const original = String(task.text);
            const target = id === '5.3' ? ['А3','15'] : ['А5','16'];
            task.text = asP(`Высота типографского шрифта измеряется в пунктах. Один пункт равен 1/72 дюйма, то есть 0,3528 мм. Какой высоты нужен шрифт, чтобы расположение текста сохранилось на листе ${target[0]} по сравнению с листом А4, на котором использован шрифт высотой ${target[1]} пунктов? Округлите до целого.`);
        }
        if (id === '5.1' || id === '5.2') task.text = String(task.text).replace('бумаги площадью 1 кв. м', 'бумаги площадью 1 м²');
    });

    // 1.7 Участок: in the workbook the first two prototype groups are
    // 2.1/2.2 = tile packaging; 3.1/3.2 = area; 2.3 = distance.
    if (db.plot) {
        const all = db.plot.catalog.prototypes;
        for (const task of all) {
            const current = String(task.id);
            const map = {'2.1':'3.1','2.2':'3.2','3.1':'2.1','3.2':'2.2','4.2':'2.3'};
            if (!map[current]) continue;
            const target = map[current];
            task.id = task.typeId = target;
            task.examNumber = Number(target.split('.')[0]);
            task.typeTitle = `${target} — ${task.title}`;
        }
        all.sort((a,b) => Number(a.examNumber) - Number(b.examNumber) ||
            Number(String(a.id).split('.')[1]) - Number(String(b.id).split('.')[1]));
    }

    // 1.8 Деревни: restore proper place name and source question wording.
    const namesById = {
      '1.1':['Ванютино','Горюново','Егорка','Жилино'],
      '1.2':['Егорка','Ванютино','Доломино','Жилино'],
      '1.3':['Богданово','Горюново','Доломино','Егорка'],
      '1.4':['Богданово','Ванютино','Егорка','Жилино']
    };
    const fixVillage = value => String(value).replace(/Горионово/g, 'Горюново');
    updateCommon('villages', fixVillage);
    each('villages', (task, zone, scenario) => {
        task.text = fixVillage(task.text);
        if (task.solution) task.solution = fixVillage(task.solution);
        const typeId = String(task.sourcePrototypeId || task.typeId || task.id);
        if (Number(task.examNumber) === 1) {
            if (zone === 'catalog' && namesById[String(task.id)]) {
                task.text = asP('Пользуясь описанием, определите, какими цифрами на плане обозначены деревни. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.') + renderTable(namesById[String(task.id)], 'Населённые пункты');
            } else if (zone === 'scenario') {
                const v2 = scenario && String(scenario.id).endsWith('-2');
                const names = v2 ? ['Новая','Арбузово','Благое','Ивушка']
                    : namesById[typeId] || namesById[String(task.id)] || namesById['1.1'];
                const intro = v2
                    ? `Пользуясь описанием, определите по плану цифры, которыми обозначены деревня Новая, деревня Арбузово, село Благое и деревня Ивушка. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.`
                    : 'Пользуясь описанием, определите, какими цифрами на плане обозначены деревни. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.';
                task.text = asP(intro) + renderTable(names, 'Населённые пункты');
            }
        }
        if (Number(task.examNumber) === 4) {
            task.text = String(task.text).replace('Сколько минут затратят на дорогу из Антоновки в Богданово Таня с дедушкой,',
                'Сколько минут затратят на дорогу Таня с дедушкой из Антоновки в Богданово,');
        }
        if (Number(task.examNumber) === 5 && !(zone === 'scenario' && scenario && String(scenario.id).endsWith('-2'))) {
            task.text = String(task.text).replace(/(\d+,\d+) л бензина/g, '$1 литра бензина')
                .replace('и на путь через', 'и путь через')
                .replace('ей требуется один и тот же объём бензина', 'ей необходим один и тот же объём бензина');
        }
    });

    // 1.1 Тропинки: direction at the turn in variant 3 (PDF p.58).
    if (db.tropinki) {
        const third = (db.tropinki.scenarios || [])[2];
        if (third) {
            third.common = String(third.common).replace('повернуть под прямым углом направо',
                'повернуть под прямым углом налево');
            for (const list of Object.values(third.tasks || {}))
                for (const task of list)
                    if (task.common) task.common = String(task.common).replace('повернуть под прямым углом направо',
                        'повернуть под прямым углом налево');
        }
    }

    // Distinguish the TRAINER wording from the worked-example wording.
    // Apartment task 5 (variant 2), PDF p.69, uses "нужно будет заплатить".
    const aptV2 = db.apartment && db.apartment.scenarios[1] && db.apartment.scenarios[1].tasks[5][0];
    if (aptV2) aptV2.text = String(aptV2.text).replace(
        /Сколько рублей (?:он заплатит|нужно будет заплатить) за интернет за месяц,? если трафик действительно будет равен 850 Мб в месяц\??/,
        'Сколько рублей нужно будет заплатить за интернет за месяц, если трафик действительно будет равен 850 Мб?');
    // Sheets trainer 3/5, PDF p.89, has its own, longer sentence.
    const sheetsV3 = db.sheets && db.sheets.scenarios[2] && db.sheets.scenarios[2].tasks[5][0];
    if (sheetsV3) sheetsV3.text = asP('Размер (высота) типографского шрифта измеряется в пунктах. Один пункт равен 1/72 дюйма, то есть 0,3528 мм. Какой высоты нужен шрифт (в пунктах), чтобы текст был расположен на листе формата А3 так же, как этот же текст, напечатанный шрифтом высотой 15 пунктов на листе формата А4? Размер шрифта округляется до целого.');
    // Full rural-scenery common condition: workbook PDF pp.48 and 96/100.
    // The other storyline (Sтарая) already has the source's full wording.
    const antonovka = `На рисунке изображён план сельской местности. Таня на летних каникулах приезжает в гости к дедушке в деревню Антоновка (на плане обозначена цифрой 1). В конце каникул дедушка на машине собирается отвезти Таню на автобусную станцию, которая находится в деревне Богданово. Из Антоновки в Богданово можно проехать по просёлочной дороге мимо реки. Есть другой путь — по шоссе до деревни Ванютино, где необходимо повернуть под прямым углом налево на другое шоссе, ведущее в Богданово. Третий маршрут проходит по просёлочной дороге мимо пруда до деревни Горюново, где можно свернуть на шоссе до Богданово. Четвёртый маршрут идёт по шоссе до деревни Доломино, затем по просёлочной дороге мимо конюшни до Горюново и от Горюново по шоссе до Богданово. Ещё один маршрут проходит по шоссе до деревни Егорка, далее по просёлочной дороге мимо конюшни от Егорки до Жилино и по шоссе от Жилино до Богданово. Шоссе и просёлочные дороги образуют прямоугольные треугольники. По шоссе Таня с дедушкой едут со скоростью 50 км/ч, а по просёлочным дорогам — 30 км/ч. Расстояния: Антоновка — Доломино 12 км, Доломино — Егорка 4 км, Егорка — Ванютино 12 км, Горюново — Ванютино 15 км, Ванютино — Жилино 9 км, Жилино — Богданово 12 км.`;
    if (db.villages) {
        const picture = input => (String(input).match(/<img\b[^>]*>/gi) || []).join('');
        db.villages.catalog.common = picture(db.villages.catalog.common) + asP(antonovka);
        for (const [index, scenario] of db.villages.scenarios.entries()) {
            if (index === 1) continue; // Story "Старая": text already matches p.98.
            scenario.common = picture(scenario.common) + asP(antonovka);
            for (const list of Object.values(scenario.tasks || {}))
                for (const task of list) if (task.common) task.common = picture(task.common) + asP(antonovka);
        }
    }
    if (db.tires) {
        // Catalog corresponds to factory marking 225/55 R16 (PDF p.30),
        // not the first training variant's 245/45 R18 (PDF p.72).
        const first = db.tires.scenarios[0];
        if (first) db.tires.catalog.common = String(first.common).replace(/245\/45 R18/g, '225/55 R16');
    }
})();
