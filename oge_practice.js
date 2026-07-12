(function () {
    'use strict';

    const fmt = (value, digits = 2) => {
        const rounded = Math.round((Number(value) + Number.EPSILON) * 10 ** digits) / 10 ** digits;
        return String(rounded).replace('.', ',');
    };

    const money = value => new Intl.NumberFormat('ru-RU').format(Math.round(value));

    function task(typeId, typeTitle, text, answer, solution) {
        return { typeId, typeTitle, text, answer: String(answer), solution };
    }

    function table(headers, rows) {
        return `
            <div class="common-table-wrap">
                <table class="common-table">
                    <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
                </table>
            </div>`;
    }

    function mapSvg(names, x, y, z) {
        const scale = 13;
        const ax = 45, ay = 55;
        const bx = ax + x * scale;
        const by = ay;
        const cx = bx;
        const cy = by + y * scale;
        const dx = cx + z * scale;
        const dy = cy;
        const width = Math.max(620, dx + 80);
        const height = cy + 90;
        return `
        <svg class="practice-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="План местности">
            <defs>
                <pattern id="grid-map-${x}-${y}-${z}" width="26" height="26" patternUnits="userSpaceOnUse">
                    <path d="M 26 0 L 0 0 0 26" fill="none" stroke="#d8dee9" stroke-width="1"/>
                </pattern>
            </defs>
            <rect x="10" y="10" width="${width - 20}" height="${height - 20}" rx="14" fill="url(#grid-map-${x}-${y}-${z})" stroke="#c6ceda"/>
            <path d="M${ax},${ay} L${bx},${by} L${cx},${cy} L${dx},${dy}" fill="none" stroke="#4b5563" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M${ax},${ay} L${cx},${cy}" fill="none" stroke="#2f855a" stroke-width="5" stroke-dasharray="10 8"/>
            <path d="M${bx},${by} L${dx},${dy}" fill="none" stroke="#b7791f" stroke-width="4" stroke-dasharray="8 7"/>
            ${[[ax, ay, 1], [bx, by, 2], [cx, cy, 3], [dx, dy, 4]].map(([px, py, n]) => `
                <circle cx="${px}" cy="${py}" r="18" fill="#fff" stroke="#003399" stroke-width="4"/>
                <text x="${px}" y="${py + 6}" text-anchor="middle" font-size="18" font-weight="800" fill="#003399">${n}</text>`).join('')}
            <text x="${(ax + bx) / 2}" y="${ay - 14}" text-anchor="middle" font-size="15" fill="#374151">${x} км</text>
            <text x="${bx + 12}" y="${(by + cy) / 2}" font-size="15" fill="#374151">${y} км</text>
            <text x="${(cx + dx) / 2}" y="${cy - 14}" text-anchor="middle" font-size="15" fill="#374151">${z} км</text>
            <text x="24" y="${height - 24}" font-size="13" fill="#4b5563">Зелёная линия — лесная дорожка, пунктир — тропинка.</text>
        </svg>`;
    }

    function makeMapScenario(cfg) {
        const { id, names, x, y, z, roadSpeed, trailSpeed } = cfg;
        const ac = Math.sqrt(x * x + y * y);
        const bd = Math.sqrt(y * y + z * z);
        const roadAD = x + y + z;
        const roadAC = x + y;
        const roadBD = y + z;
        const roadTime = roadAD / roadSpeed * 60;
        const directTime = ac / trailSpeed * 60;
        const mixedTime = x / roadSpeed * 60 + bd / trailSpeed * 60;
        const common = `
            <p><b>${names[0]}</b> — самый западный пункт. Из него по прямому шоссе можно доехать до <b>${names[1]}</b>. Затем шоссе поворачивает под прямым углом к <b>${names[2]}</b>, а оттуда продолжается к <b>${names[3]}</b>.</p>
            <p>Из ${names[0]} в ${names[2]} проходит прямая лесная дорожка. Из ${names[1]} в ${names[3]} проходит прямая тропинка. По шоссе едут со скоростью <b>${roadSpeed} км/ч</b>, по дорожке и тропинке — <b>${trailSpeed} км/ч</b>.</p>
            ${mapSvg(names, x, y, z)}`;
        return {
            id,
            title: `План местности: ${names[0]} — ${names[3]}`,
            common,
            tasks: {
                1: [
                    task('map-match-three', 'Соответствие населённых пунктов', `Запишите последовательность цифр, которыми обозначены пункты: ${names[0]}, ${names[2]}, ${names[1]}.`, '132', `По описанию ${names[0]} обозначен цифрой 1, ${names[2]} — цифрой 3, ${names[1]} — цифрой 2. Ответ: 132.`),
                    task('map-find-order', 'Определение порядка пунктов', `Запишите последовательность цифр, которыми обозначены пункты: ${names[3]}, ${names[1]}, ${names[2]}.`, '423', `На плане ${names[3]} — 4, ${names[1]} — 2, ${names[2]} — 3. Ответ: 423.`)
                ],
                2: [
                    task('map-road-full', 'Длина пути по шоссе', `Сколько километров составляет путь по шоссе из ${names[0]} в ${names[3]}?`, fmt(roadAD), `${x}+${y}+${z}=${fmt(roadAD)} км.`),
                    task('map-road-part', 'Длина части маршрута', `Сколько километров составляет путь по шоссе из ${names[1]} в ${names[3]} через ${names[2]}?`, fmt(roadBD), `${y}+${z}=${fmt(roadBD)} км.`)
                ],
                3: [
                    task('map-pythagoras-main', 'Расстояние по прямой', `Найдите длину лесной дорожки из ${names[0]} в ${names[2]}.`, fmt(ac), `По теореме Пифагора: √(${x}²+${y}²)=${fmt(ac)} км.`),
                    task('map-pythagoras-second', 'Длина тропинки', `Найдите длину прямой тропинки из ${names[1]} в ${names[3]}.`, fmt(bd), `По теореме Пифагора: √(${y}²+${z}²)=${fmt(bd)} км.`)
                ],
                4: [
                    task('map-time-road', 'Время движения по шоссе', `Сколько минут займёт путь из ${names[0]} в ${names[3]} только по шоссе?`, fmt(roadTime), `t=${roadAD}:${roadSpeed}=${fmt(roadAD / roadSpeed)} ч. В минутах: ${fmt(roadTime)}.`),
                    task('map-time-direct', 'Время по прямой дорожке', `Сколько минут займёт путь по лесной дорожке из ${names[0]} в ${names[2]}?`, fmt(directTime), `t=${fmt(ac)}:${trailSpeed} ч, то есть ${fmt(directTime)} мин.`)
                ],
                5: [
                    task('map-route-saving', 'Сравнение длин маршрутов', `На сколько километров лесная дорожка из ${names[0]} в ${names[2]} короче пути по шоссе между этими пунктами?`, fmt(roadAC - ac), `Путь по шоссе: ${x}+${y}=${roadAC} км. Прямая: ${fmt(ac)} км. Разность: ${fmt(roadAC - ac)} км.`),
                    task('map-mixed-time', 'Комбинированный маршрут', `Сколько минут займёт путь из ${names[0]} в ${names[3]}, если сначала ехать по шоссе до ${names[1]}, а затем по прямой тропинке?`, fmt(mixedTime), `По шоссе: ${x}:${roadSpeed}·60=${fmt(x / roadSpeed * 60)} мин. По тропинке: ${fmt(bd)}:${trailSpeed}·60=${fmt(bd / trailSpeed * 60)} мин. Всего ${fmt(mixedTime)} мин.`),
                    task('map-time-difference', 'Сравнение времени', `На сколько минут путь только по шоссе из ${names[0]} в ${names[3]} отличается от пути по лесной дорожке из ${names[0]} в ${names[2]}? Запишите модуль разности.`, fmt(Math.abs(roadTime - directTime)), `|${fmt(roadTime)}−${fmt(directTime)}|=${fmt(Math.abs(roadTime - directTime))} мин.`)
                ]
            }
        };
    }

    function makeTariffScenario(cfg) {
        const { id, company, tariffs, usages } = cfg;
        const rows = tariffs.map(t => [t.name, money(t.fee), t.included, money(t.extra), t.note || '—']);
        const common = `
            <p>Оператор «${company}» предлагает три тарифа мобильного интернета. Плата за каждый гигабайт сверх включённого пакета начисляется полностью.</p>
            ${table(['Тариф', 'Абонентская плата, руб.', 'Включено, ГБ', '1 ГБ сверх пакета, руб.', 'Примечание'], rows)}`;
        const cost = (tariff, usage) => tariff.extra === 0 ? tariff.fee : tariff.fee + Math.max(0, usage - tariff.included) * tariff.extra;
        const u1 = usages[0], u2 = usages[1], u3 = usages[2];
        const cheapest = usage => tariffs.map(t => ({ t, c: cost(t, usage) })).sort((a, b) => a.c - b.c)[0];
        const ch2 = cheapest(u2), ch3 = cheapest(u3);
        return {
            id,
            title: `Тарифы оператора «${company}»`,
            common,
            tasks: {
                1: [
                    task('tariff-read-included', 'Чтение тарифной таблицы', `Сколько гигабайт включено в тариф «${tariffs[1].name}»?`, tariffs[1].included, `По таблице в тариф включено ${tariffs[1].included} ГБ.`),
                    task('tariff-read-fee', 'Определение абонентской платы', `Какова абонентская плата по тарифу «${tariffs[0].name}»?`, tariffs[0].fee, `По таблице: ${money(tariffs[0].fee)} руб.`)
                ],
                2: [
                    task('tariff-overage-volume', 'Объём сверх пакета', `Абонент тарифа «${tariffs[0].name}» использовал ${u1} ГБ. Сколько гигабайт оплачивается сверх пакета?`, Math.max(0, u1 - tariffs[0].included), `${u1}−${tariffs[0].included}=${Math.max(0, u1 - tariffs[0].included)} ГБ.`),
                    task('tariff-overage-cost', 'Стоимость превышения', `Сколько рублей составит доплата за интернет на тарифе «${tariffs[1].name}» при расходе ${u2} ГБ?`, Math.max(0, u2 - tariffs[1].included) * tariffs[1].extra, `Сверх пакета: ${Math.max(0, u2 - tariffs[1].included)} ГБ. Доплата: ${Math.max(0, u2 - tariffs[1].included)}·${tariffs[1].extra}=${money(Math.max(0, u2 - tariffs[1].included) * tariffs[1].extra)} руб.`)
                ],
                3: [
                    task('tariff-total-basic', 'Полная стоимость тарифа', `Сколько рублей заплатит абонент тарифа «${tariffs[0].name}», если использует ${u1} ГБ?`, cost(tariffs[0], u1), `Абонентская плата и доплата: ${tariffs[0].fee}+${Math.max(0, u1 - tariffs[0].included)}·${tariffs[0].extra}=${money(cost(tariffs[0], u1))} руб.`),
                    task('tariff-total-middle', 'Расчёт платежа', `Сколько рублей заплатит абонент тарифа «${tariffs[1].name}», если использует ${u2} ГБ?`, cost(tariffs[1], u2), `${tariffs[1].fee}+${Math.max(0, u2 - tariffs[1].included)}·${tariffs[1].extra}=${money(cost(tariffs[1], u2))} руб.`)
                ],
                4: [
                    task('tariff-cheapest', 'Выбор выгодного тарифа', `Какова наименьшая возможная плата при расходе ${u2} ГБ?`, ch2.c, `Сравниваем стоимость всех тарифов. Минимальная стоимость — ${money(ch2.c)} руб. по тарифу «${ch2.t.name}».`),
                    task('tariff-cheapest-high', 'Выбор тарифа при большом расходе', `Какова наименьшая возможная плата при расходе ${u3} ГБ?`, ch3.c, `Минимум среди трёх тарифов равен ${money(ch3.c)} руб.`)
                ],
                5: [
                    task('tariff-saving', 'Экономия при выборе тарифа', `На сколько рублей самый выгодный тариф при расходе ${u2} ГБ дешевле самого дорогого?`, Math.max(...tariffs.map(t => cost(t, u2))) - ch2.c, `Разность максимальной и минимальной стоимости: ${money(Math.max(...tariffs.map(t => cost(t, u2))))}−${money(ch2.c)}=${money(Math.max(...tariffs.map(t => cost(t, u2))) - ch2.c)} руб.`),
                    task('tariff-year', 'Годовая стоимость', `Абонент каждый месяц расходует ${u3} ГБ и выбирает самый выгодный тариф. Сколько рублей он заплатит за 12 месяцев?`, ch3.c * 12, `${money(ch3.c)}·12=${money(ch3.c * 12)} руб.`),
                    task('tariff-switch', 'Выгода перехода', `Абонент при расходе ${u2} ГБ пользовался тарифом «${tariffs[0].name}», а затем перешёл на самый выгодный. Сколько рублей он экономит в месяц?`, cost(tariffs[0], u2) - ch2.c, `${money(cost(tariffs[0], u2))}−${money(ch2.c)}=${money(cost(tariffs[0], u2) - ch2.c)} руб.`)
                ]
            }
        };
    }

    const paperFormats = [
        ['A0', 841, 1189, 1],
        ['A1', 594, 841, 1 / 2],
        ['A2', 420, 594, 1 / 4],
        ['A3', 297, 420, 1 / 8],
        ['A4', 210, 297, 1 / 16]
    ];

    function makePaperScenario(cfg) {
        const { id, density, packSheets, packPrice, boxSheets, boxPrice } = cfg;
        const common = `
            <p>Формат A0 имеет площадь 1 м². Каждый следующий формат получают делением предыдущего листа пополам параллельно короткой стороне.</p>
            ${table(['Формат', 'Ширина, мм', 'Длина, мм'], paperFormats.map(f => [f[0], f[1], f[2]]))}
            <p>Плотность бумаги — <b>${density} г/м²</b>. Магазин продаёт пачки по ${packSheets} листов A4 за ${money(packPrice)} руб. и коробки по ${boxSheets} листов A4 за ${money(boxPrice)} руб.</p>`;
        const sheetMass = density / 16;
        const needed = boxSheets;
        const packsNeeded = Math.ceil(needed / packSheets);
        return {
            id,
            title: `Листы бумаги плотностью ${density} г/м²`,
            common,
            tasks: {
                1: [
                    task('paper-recognize', 'Определение формата по размерам', `Какой формат имеет размеры 297×420 мм? В ответ запишите только номер после буквы A.`, '3', `По таблице это формат A3. Ответ: 3.`),
                    task('paper-side', 'Чтение размеров листа', `Чему равна длинная сторона листа A4 в миллиметрах?`, '297', `По таблице длинная сторона A4 равна 297 мм.`)
                ],
                2: [
                    task('paper-count-halves', 'Количество листов после разрезания', `Сколько листов A4 получится из одного листа A1?`, '8', `A1→2 листа A2→4 листа A3→8 листов A4.`),
                    task('paper-count-a0', 'Переход между форматами', `Сколько листов A3 получится из двух листов A0?`, '16', `Из одного A0 получается 8 листов A3, из двух — 16.`)
                ],
                3: [
                    task('paper-area', 'Площадь формата', `Какова площадь листа A2 в квадратных метрах?`, '0,25', `A2 составляет четверть листа A0: 1:4=0,25 м².`),
                    task('paper-total-area', 'Суммарная площадь листов', `Найдите суммарную площадь 40 листов A4 в квадратных метрах.`, '2,5', `Площадь A4 равна 1/16 м². 40:16=2,5 м².`)
                ],
                4: [
                    task('paper-mass-pack', 'Масса пачки бумаги', `Найдите массу ${packSheets} листов A4 в граммах.`, fmt(packSheets * sheetMass), `Масса одного листа: ${density}:16=${fmt(sheetMass)} г. Масса пачки: ${fmt(sheetMass)}·${packSheets}=${fmt(packSheets * sheetMass)} г.`),
                    task('paper-mass-kg', 'Перевод массы в килограммы', `Найдите массу ${boxSheets} листов A4 в килограммах.`, fmt(boxSheets * sheetMass / 1000), `${boxSheets}·${fmt(sheetMass)}=${fmt(boxSheets * sheetMass)} г = ${fmt(boxSheets * sheetMass / 1000)} кг.`)
                ],
                5: [
                    task('paper-cheapest', 'Сравнение способов покупки', `Нужно купить не менее ${needed} листов A4. Какова наименьшая стоимость покупки?`, Math.min(packsNeeded * packPrice, boxPrice), `Пачками потребуется ${packsNeeded} шт.: ${packsNeeded}·${money(packPrice)}=${money(packsNeeded * packPrice)} руб. Коробка стоит ${money(boxPrice)} руб. Выбираем ${money(Math.min(packsNeeded * packPrice, boxPrice))} руб.`),
                    task('paper-price-sheet', 'Стоимость одного листа', `Сколько копеек стоит один лист A4 при покупке коробки?`, Math.round(boxPrice * 100 / boxSheets), `${money(boxPrice)} руб. = ${boxPrice * 100} коп. Делим на ${boxSheets}: ${Math.round(boxPrice * 100 / boxSheets)} коп.`),
                    task('paper-two-boxes', 'Стоимость крупной покупки', `Какова стоимость ${boxSheets * 2} листов, если покупать их коробками?`, boxPrice * 2, `${money(boxPrice)}·2=${money(boxPrice * 2)} руб.`)
                ]
            }
        };
    }

    function plotSvg(cfg) {
        const { width, height, houseW, houseH, garageW, garageH, greenhouseW, greenhouseH } = cfg;
        const sx = 12, sy = 12;
        const W = width * sx, H = height * sy;
        return `
        <svg class="practice-svg" viewBox="0 0 ${W + 80} ${H + 70}" role="img" aria-label="План участка">
            <rect x="40" y="25" width="${W}" height="${H}" fill="#edf7ed" stroke="#2f855a" stroke-width="4"/>
            <rect x="${40 + 2 * sx}" y="${25 + 2 * sy}" width="${houseW * sx}" height="${houseH * sy}" fill="#ffe0b2" stroke="#b45309" stroke-width="3"/>
            <text x="${40 + (2 + houseW / 2) * sx}" y="${25 + (2 + houseH / 2) * sy + 6}" text-anchor="middle" font-size="20" font-weight="700">1</text>
            <rect x="${40 + (width - garageW - 2) * sx}" y="${25 + 2 * sy}" width="${garageW * sx}" height="${garageH * sy}" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
            <text x="${40 + (width - garageW / 2 - 2) * sx}" y="${25 + (2 + garageH / 2) * sy + 6}" text-anchor="middle" font-size="20" font-weight="700">2</text>
            <rect x="${40 + (width - greenhouseW - 2) * sx}" y="${25 + (height - greenhouseH - 2) * sy}" width="${greenhouseW * sx}" height="${greenhouseH * sy}" fill="#d1fae5" stroke="#059669" stroke-width="3"/>
            <text x="${40 + (width - greenhouseW / 2 - 2) * sx}" y="${25 + (height - greenhouseH / 2 - 2) * sy + 6}" text-anchor="middle" font-size="20" font-weight="700">3</text>
            <path d="M40,${25 + H - 16} H${40 + W}" stroke="#9ca3af" stroke-width="12"/>
            <text x="${40 + W / 2}" y="${25 + H - 9}" text-anchor="middle" font-size="18" font-weight="700">4</text>
            <text x="${40 + W / 2}" y="${H + 55}" text-anchor="middle" font-size="15">${width} м</text>
            <text x="12" y="${25 + H / 2}" text-anchor="middle" font-size="15" transform="rotate(-90 12 ${25 + H / 2})">${height} м</text>
        </svg>`;
    }

    function makePlotScenario(cfg) {
        const totalArea = cfg.width * cfg.height;
        const houseArea = cfg.houseW * cfg.houseH;
        const garageArea = cfg.garageW * cfg.garageH;
        const greenhouseArea = cfg.greenhouseW * cfg.greenhouseH;
        const pathArea = cfg.width * cfg.pathW;
        const lawn = totalArea - houseArea - garageArea - greenhouseArea - pathArea;
        const fence = 2 * (cfg.width + cfg.height) - cfg.gateW;
        const common = `
            <p>Прямоугольный участок имеет размеры <b>${cfg.width}×${cfg.height} м</b>. На плане цифрой 1 обозначен жилой дом (${cfg.houseW}×${cfg.houseH} м), цифрой 2 — гараж (${cfg.garageW}×${cfg.garageH} м), цифрой 3 — теплица (${cfg.greenhouseW}×${cfg.greenhouseH} м), цифрой 4 — дорожка шириной ${cfg.pathW} м вдоль всей стороны участка.</p>
            <p>В заборе предусмотрены ворота шириной ${cfg.gateW} м. Плитка стоит ${money(cfg.tilePrice)} руб. за 1 м², один погонный метр забора — ${money(cfg.fencePrice)} руб.</p>
            ${plotSvg(cfg)}`;
        return {
            id: cfg.id,
            title: `План участка ${cfg.width}×${cfg.height} м`,
            common,
            tasks: {
                1: [
                    task('plot-match', 'Соответствие объектов', `Запишите последовательность цифр, которыми обозначены гараж, дом и теплица.`, '213', `Гараж — 2, дом — 1, теплица — 3. Ответ: 213.`),
                    task('plot-object', 'Определение объекта на плане', `Какой цифрой обозначена дорожка?`, '4', `Дорожка обозначена цифрой 4.`)
                ],
                2: [
                    task('plot-fence', 'Длина забора', `Сколько метров забора потребуется, если ворота не учитывать?`, fence, `Периметр: 2·(${cfg.width}+${cfg.height})=${2 * (cfg.width + cfg.height)} м. Вычитаем ${cfg.gateW} м ворот: ${fence} м.`),
                    task('plot-path-area', 'Площадь дорожки', `Найдите площадь дорожки в квадратных метрах.`, pathArea, `${cfg.width}·${cfg.pathW}=${pathArea} м².`)
                ],
                3: [
                    task('plot-house-area', 'Площадь строения', `Найдите площадь жилого дома.`, houseArea, `${cfg.houseW}·${cfg.houseH}=${houseArea} м².`),
                    task('plot-buildings-area', 'Суммарная площадь строений', `Найдите суммарную площадь дома, гаража и теплицы.`, houseArea + garageArea + greenhouseArea, `${houseArea}+${garageArea}+${greenhouseArea}=${houseArea + garageArea + greenhouseArea} м².`)
                ],
                4: [
                    task('plot-lawn', 'Площадь свободной части участка', `Найдите площадь участка, не занятую домом, гаражом, теплицей и дорожкой.`, lawn, `${totalArea}−${houseArea}−${garageArea}−${greenhouseArea}−${pathArea}=${lawn} м².`),
                    task('plot-tiles', 'Количество упаковок плитки', `Одна упаковка плитки покрывает 3 м². Сколько упаковок потребуется для дорожки?`, Math.ceil(pathArea / 3), `${pathArea}:3=${fmt(pathArea / 3)}. Требуется ${Math.ceil(pathArea / 3)} упаковок.`)
                ],
                5: [
                    task('plot-paving-cost', 'Стоимость покрытия', `Сколько рублей стоит плитка для всей дорожки?`, pathArea * cfg.tilePrice, `${pathArea}·${money(cfg.tilePrice)}=${money(pathArea * cfg.tilePrice)} руб.`),
                    task('plot-fence-cost', 'Стоимость ограждения', `Сколько рублей стоит необходимый забор без учёта ворот?`, fence * cfg.fencePrice, `${fence}·${money(cfg.fencePrice)}=${money(fence * cfg.fencePrice)} руб.`),
                    task('plot-total-cost', 'Общая стоимость работ', `Найдите общую стоимость плитки для дорожки и забора без ворот.`, pathArea * cfg.tilePrice + fence * cfg.fencePrice, `${money(pathArea * cfg.tilePrice)}+${money(fence * cfg.fencePrice)}=${money(pathArea * cfg.tilePrice + fence * cfg.fencePrice)} руб.`)
                ]
            }
        };
    }

    function makeStoveScenario(cfg) {
        const rows = cfg.models.map((m, i) => [i + 1, m.name, `${m.min}–${m.max}`, m.weight, money(m.price), m.glass ? 'да' : 'нет']);
        const suitable = volume => cfg.models.map((m, i) => ({ ...m, number: i + 1 })).filter(m => m.min <= volume && volume <= m.max);
        const s1 = suitable(cfg.volume1);
        const s2 = suitable(cfg.volume2).filter(m => m.glass);
        const cheapest1 = [...s1].sort((a, b) => a.price - b.price)[0];
        const cheapest2 = [...s2].sort((a, b) => a.price - b.price)[0];
        const common = `
            <p>Для бани выбирают печь так, чтобы объём парной входил в рекомендуемый диапазон. Ниже приведены характеристики моделей.</p>
            ${table(['№', 'Модель', 'Объём парной, м³', 'Масса, кг', 'Цена, руб.', 'Стеклянная дверца'], rows)}
            <p>Монтаж стоит ${money(cfg.install)} руб., комплект дымохода — ${money(cfg.chimney)} руб.</p>`;
        return {
            id: cfg.id,
            title: `Печи для бани: каталог «${cfg.catalog}»`,
            common,
            tasks: {
                1: [
                    task('stove-glass', 'Отбор по характеристике', `Запишите номера моделей со стеклянной дверцей в порядке возрастания без пробелов.`, cfg.models.map((m, i) => m.glass ? i + 1 : '').filter(Boolean).join(''), `По таблице выбираем модели со значением «да».`),
                    task('stove-volume-models', 'Отбор по объёму', `Сколько моделей подходит для парной объёмом ${cfg.volume1} м³?`, s1.length, `Подходят ${s1.length} модели.`)
                ],
                2: [
                    task('stove-cheapest', 'Самая дешёвая подходящая модель', `Какова цена самой дешёвой печи для парной объёмом ${cfg.volume1} м³?`, cheapest1.price, `Из подходящих моделей минимальная цена — ${money(cheapest1.price)} руб.`),
                    task('stove-cheapest-glass', 'Выбор с дополнительным условием', `Какова цена самой дешёвой печи со стеклянной дверцей для парной объёмом ${cfg.volume2} м³?`, cheapest2.price, `Подходящие модели со стеклом сравниваем по цене. Минимум — ${money(cheapest2.price)} руб.`)
                ],
                3: [
                    task('stove-weight-difference', 'Разность масс', `На сколько килограммов самая тяжёлая модель тяжелее самой лёгкой?`, Math.max(...cfg.models.map(m => m.weight)) - Math.min(...cfg.models.map(m => m.weight)), `${Math.max(...cfg.models.map(m => m.weight))}−${Math.min(...cfg.models.map(m => m.weight))}=${Math.max(...cfg.models.map(m => m.weight)) - Math.min(...cfg.models.map(m => m.weight))} кг.`),
                    task('stove-price-difference', 'Разность цен', `На сколько рублей модель 4 дороже модели 1?`, cfg.models[3].price - cfg.models[0].price, `${money(cfg.models[3].price)}−${money(cfg.models[0].price)}=${money(cfg.models[3].price - cfg.models[0].price)} руб.`)
                ],
                4: [
                    task('stove-markup', 'Цена после наценки', `Цена модели 2 увеличилась на ${cfg.markup}% . Какова новая цена?`, Math.round(cfg.models[1].price * (1 + cfg.markup / 100)), `${money(cfg.models[1].price)}·${1 + cfg.markup / 100}=${money(Math.round(cfg.models[1].price * (1 + cfg.markup / 100)))} руб.`),
                    task('stove-discount', 'Цена после скидки', `На модель 3 действует скидка ${cfg.discount}% . Какова цена со скидкой?`, Math.round(cfg.models[2].price * (1 - cfg.discount / 100)), `${money(cfg.models[2].price)}·${1 - cfg.discount / 100}=${money(Math.round(cfg.models[2].price * (1 - cfg.discount / 100)))} руб.`)
                ],
                5: [
                    task('stove-full-set', 'Стоимость комплекта с установкой', `Сколько рублей потребуется на покупку самой дешёвой подходящей печи для ${cfg.volume1} м³, монтаж и дымоход?`, cheapest1.price + cfg.install + cfg.chimney, `${money(cheapest1.price)}+${money(cfg.install)}+${money(cfg.chimney)}=${money(cheapest1.price + cfg.install + cfg.chimney)} руб.`),
                    task('stove-glass-set', 'Комплект с дополнительным условием', `Сколько рублей потребуется на самую дешёвую подходящую печь со стеклянной дверцей для ${cfg.volume2} м³ вместе с монтажом и дымоходом?`, cheapest2.price + cfg.install + cfg.chimney, `${money(cheapest2.price)}+${money(cfg.install)}+${money(cfg.chimney)}=${money(cheapest2.price + cfg.install + cfg.chimney)} руб.`),
                    task('stove-budget-rest', 'Остаток бюджета', `На покупку модели 2, монтаж и дымоход выделено ${money(cfg.budget)} руб. Сколько рублей останется?`, cfg.budget - cfg.models[1].price - cfg.install - cfg.chimney, `${money(cfg.budget)}−${money(cfg.models[1].price)}−${money(cfg.install)}−${money(cfg.chimney)}=${money(cfg.budget - cfg.models[1].price - cfg.install - cfg.chimney)} руб.`)
                ]
            }
        };
    }

    function tireDiameter(width, profile, rim) {
        return rim * 25.4 + 2 * width * profile / 100;
    }

    function makeTireScenario(cfg) {
        const baseD = tireDiameter(cfg.width, cfg.profile, cfg.rim);
        const altD = tireDiameter(cfg.altWidth, cfg.altProfile, cfg.rim);
        const side = cfg.width * cfg.profile / 100;
        const circumference = baseD * 3.14;
        const rows = cfg.offers.map((o, i) => [i + 1, o.label, money(o.price), money(o.fitting)]);
        const setCosts = cfg.offers.map(o => 4 * (o.price + o.fitting));
        const minSet = Math.min(...setCosts);
        const common = `
            <p>Маркировка шины имеет вид <b>${cfg.width}/${cfg.profile} R${cfg.rim}</b>. Первое число — ширина шины в миллиметрах, второе — высота боковины в процентах от ширины, число после R — диаметр диска в дюймах. 1 дюйм = 25,4 мм.</p>
            <p>Наружный диаметр колеса вычисляют по формуле: диаметр диска в миллиметрах плюс две высоты боковины. При расчёте длины окружности используйте π=3,14.</p>
            ${table(['№ предложения', 'Маркировка', 'Цена одной шины, руб.', 'Шиномонтаж одной шины, руб.'], rows)}`;
        return {
            id: cfg.id,
            title: `Шины ${cfg.width}/${cfg.profile} R${cfg.rim}`,
            common,
            tasks: {
                1: [
                    task('tire-width', 'Расшифровка маркировки', `Какова ширина шины в миллиметрах?`, cfg.width, `Первое число маркировки равно ${cfg.width}.`),
                    task('tire-rim-mm', 'Перевод диаметра диска', `Чему равен диаметр диска в миллиметрах?`, fmt(cfg.rim * 25.4), `${cfg.rim}·25,4=${fmt(cfg.rim * 25.4)} мм.`)
                ],
                2: [
                    task('tire-sidewall', 'Высота боковины', `Найдите высоту боковины шины в миллиметрах.`, fmt(side), `${cfg.width}·${cfg.profile}:100=${fmt(side)} мм.`),
                    task('tire-diameter', 'Наружный диаметр колеса', `Найдите наружный диаметр колеса в миллиметрах.`, fmt(baseD), `${cfg.rim}·25,4+2·${fmt(side)}=${fmt(baseD)} мм.`)
                ],
                3: [
                    task('tire-alt-difference', 'Сравнение диаметров шин', `На сколько миллиметров наружный диаметр шины ${cfg.altWidth}/${cfg.altProfile} R${cfg.rim} отличается от исходного? Запишите модуль разности.`, fmt(Math.abs(altD - baseD)), `Диаметр альтернативной шины ${fmt(altD)} мм. Разность: ${fmt(Math.abs(altD - baseD))} мм.`),
                    task('tire-circumference', 'Длина окружности колеса', `Найдите длину окружности исходного колеса в миллиметрах. Ответ округлите до целого.`, Math.round(circumference), `${fmt(baseD)}·3,14≈${Math.round(circumference)} мм.`)
                ],
                4: [
                    task('tire-clearance', 'Изменение дорожного просвета', `На сколько миллиметров изменится дорожный просвет при замене исходных шин на ${cfg.altWidth}/${cfg.altProfile} R${cfg.rim}? Запишите модуль изменения.`, fmt(Math.abs(altD - baseD) / 2), `Просвет изменяется на половину разности диаметров: ${fmt(Math.abs(altD - baseD))}:2=${fmt(Math.abs(altD - baseD) / 2)} мм.`),
                    task('tire-revolutions', 'Путь за несколько оборотов', `Какой путь в метрах пройдёт автомобиль за 1000 оборотов колеса? Ответ округлите до целого.`, Math.round(circumference), `За 1000 оборотов колесо проходит ${Math.round(circumference)}·1000 мм = ${Math.round(circumference)} м.`)
                ],
                5: [
                    task('tire-set-price', 'Стоимость комплекта', `Сколько рублей стоит комплект из четырёх шин по предложению 1 вместе с шиномонтажом?`, setCosts[0], `4·(${money(cfg.offers[0].price)}+${money(cfg.offers[0].fitting)})=${money(setCosts[0])} руб.`),
                    task('tire-cheapest-set', 'Выбор выгодного предложения', `Какова наименьшая стоимость четырёх шин вместе с шиномонтажом?`, minSet, `Сравниваем полную стоимость трёх предложений. Минимум — ${money(minSet)} руб.`),
                    task('tire-saving-set', 'Экономия при выборе предложения', `На сколько рублей самое дешёвое предложение на комплект с шиномонтажом дешевле самого дорогого?`, Math.max(...setCosts) - minSet, `${money(Math.max(...setCosts))}−${money(minSet)}=${money(Math.max(...setCosts) - minSet)} руб.`)
                ]
            }
        };
    }

    window.ogePracticeDatabase = {
        map: {
            title: 'План местности',
            sourceStatus: 'active',
            scenarios: [
                makeMapScenario({ id: 'map-01', names: ['Берёзово', 'Лесное', 'Речное', 'Сосново'], x: 6, y: 8, z: 6, roadSpeed: 20, trailSpeed: 12 }),
                makeMapScenario({ id: 'map-02', names: ['Ольховка', 'Заречье', 'Полевое', 'Никольское'], x: 9, y: 12, z: 5, roadSpeed: 26, trailSpeed: 15 }),
                makeMapScenario({ id: 'map-03', names: ['Ягодное', 'Ключи', 'Луговое', 'Дубровка'], x: 12, y: 16, z: 9, roadSpeed: 24, trailSpeed: 20 })
            ]
        },
        tariff: {
            title: 'Тарифы',
            sourceStatus: 'active',
            scenarios: [
                makeTariffScenario({ id: 'tariff-01', company: 'Сигнал', tariffs: [
                    { name: 'Старт', fee: 360, included: 5, extra: 75 },
                    { name: 'Баланс', fee: 570, included: 12, extra: 45 },
                    { name: 'Безлимит', fee: 890, included: 999, extra: 0, note: 'без ограничений' }
                ], usages: [9, 15, 24] }),
                makeTariffScenario({ id: 'tariff-02', company: 'Линия', tariffs: [
                    { name: 'Мини', fee: 310, included: 4, extra: 90 },
                    { name: 'Оптима', fee: 610, included: 14, extra: 40 },
                    { name: 'Макси', fee: 930, included: 999, extra: 0, note: 'без ограничений' }
                ], usages: [8, 18, 27] }),
                makeTariffScenario({ id: 'tariff-03', company: 'Импульс', tariffs: [
                    { name: 'Лайт', fee: 420, included: 7, extra: 65 },
                    { name: 'Смарт', fee: 640, included: 16, extra: 35 },
                    { name: 'Свобода', fee: 960, included: 999, extra: 0, note: 'без ограничений' }
                ], usages: [11, 20, 31] })
            ]
        },
        paper: {
            title: 'Листы бумаги',
            sourceStatus: 'active',
            scenarios: [
                makePaperScenario({ id: 'paper-01', density: 80, packSheets: 500, packPrice: 345, boxSheets: 2500, boxPrice: 1590 }),
                makePaperScenario({ id: 'paper-02', density: 96, packSheets: 400, packPrice: 390, boxSheets: 2000, boxPrice: 1770 }),
                makePaperScenario({ id: 'paper-03', density: 72, packSheets: 500, packPrice: 315, boxSheets: 3000, boxPrice: 1810 })
            ]
        },
        plot: {
            title: 'План участка',
            sourceStatus: 'active',
            scenarios: [
                makePlotScenario({ id: 'plot-01', width: 30, height: 20, houseW: 10, houseH: 8, garageW: 6, garageH: 4, greenhouseW: 8, greenhouseH: 3, pathW: 2, gateW: 4, tilePrice: 680, fencePrice: 1150 }),
                makePlotScenario({ id: 'plot-02', width: 28, height: 24, houseW: 9, houseH: 8, garageW: 7, garageH: 4, greenhouseW: 6, greenhouseH: 4, pathW: 2, gateW: 5, tilePrice: 720, fencePrice: 1080 }),
                makePlotScenario({ id: 'plot-03', width: 32, height: 18, houseW: 12, houseH: 7, garageW: 5, garageH: 5, greenhouseW: 7, greenhouseH: 3, pathW: 2, gateW: 4, tilePrice: 640, fencePrice: 1220 })
            ]
        },
        stove: {
            title: 'Печи для бани',
            sourceStatus: 'active',
            scenarios: [
                makeStoveScenario({ id: 'stove-01', catalog: 'Тёплый пар', volume1: 15, volume2: 18, install: 4600, chimney: 7800, markup: 10, discount: 12, budget: 45000, models: [
                    { name: 'Искра', min: 8, max: 13, weight: 39, price: 18600, glass: false },
                    { name: 'Ладога', min: 11, max: 17, weight: 47, price: 22400, glass: true },
                    { name: 'Тайга', min: 14, max: 22, weight: 55, price: 26300, glass: true },
                    { name: 'Гранит', min: 18, max: 29, weight: 66, price: 30900, glass: false }
                ]}),
                makeStoveScenario({ id: 'stove-02', catalog: 'Банный мастер', volume1: 16, volume2: 20, install: 5200, chimney: 8400, markup: 8, discount: 15, budget: 50000, models: [
                    { name: 'Роса', min: 9, max: 14, weight: 36, price: 17900, glass: true },
                    { name: 'Волна', min: 12, max: 18, weight: 45, price: 21800, glass: false },
                    { name: 'Кедр', min: 15, max: 24, weight: 58, price: 27600, glass: true },
                    { name: 'Скала', min: 20, max: 31, weight: 70, price: 32800, glass: true }
                ]}),
                makeStoveScenario({ id: 'stove-03', catalog: 'Пар и жар', volume1: 17, volume2: 21, install: 4900, chimney: 8100, markup: 12, discount: 10, budget: 52000, models: [
                    { name: 'Малая', min: 7, max: 12, weight: 34, price: 17100, glass: false },
                    { name: 'Средняя', min: 10, max: 18, weight: 44, price: 21600, glass: true },
                    { name: 'Север', min: 16, max: 25, weight: 57, price: 28100, glass: true },
                    { name: 'Большая', min: 22, max: 34, weight: 73, price: 34600, glass: false }
                ]})
            ]
        },
        tire: {
            title: 'Шины',
            sourceStatus: 'active',
            scenarios: [
                makeTireScenario({ id: 'tire-01', width: 205, profile: 55, rim: 16, altWidth: 205, altProfile: 60, offers: [
                    { label: '205/55 R16', price: 6100, fitting: 350 },
                    { label: '205/55 R16', price: 6350, fitting: 250 },
                    { label: '205/55 R16', price: 5900, fitting: 520 }
                ]}),
                makeTireScenario({ id: 'tire-02', width: 195, profile: 65, rim: 15, altWidth: 205, altProfile: 60, offers: [
                    { label: '195/65 R15', price: 5400, fitting: 300 },
                    { label: '195/65 R15', price: 5150, fitting: 480 },
                    { label: '195/65 R15', price: 5650, fitting: 220 }
                ]}),
                makeTireScenario({ id: 'tire-03', width: 215, profile: 60, rim: 17, altWidth: 225, altProfile: 55, offers: [
                    { label: '215/60 R17', price: 7600, fitting: 450 },
                    { label: '215/60 R17', price: 7950, fitting: 280 },
                    { label: '215/60 R17', price: 7350, fitting: 600 }
                ]})
            ]
        }
    };
})();
