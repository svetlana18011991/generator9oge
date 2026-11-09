(function () {
    'use strict';

    // База практического блока ОГЭ: тема «Тропинки», каталог прототипов и два связанных сюжета.
    const TROPINKA_CATALOG_BASE64 = "assets/bank/1e242bcec99d20e89171ad56.webp";
    const TROPINKA_PLOT_1_BASE64 = "assets/bank/6f872c8c4537305ef1c34e96.webp";
    window.TROPINKA_1_BASE64 = TROPINKA_CATALOG_BASE64;
    window.TROPINKA_PLOT_1_BASE64 = TROPINKA_PLOT_1_BASE64;

    const TROPINKA_PLOT_2_BASE64 = "assets/bank/cb8f1061f92a73410af385e0.webp";
    window.TROPINKA_PLOT_2_BASE64 = TROPINKA_PLOT_2_BASE64;

    const catalogImageHTML = `<img src="${TROPINKA_CATALOG_BASE64}" alt="План для каталога прототипов темы Тропинки" style="display:block;width:100%;max-width:520px;height:auto;margin:8px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;
    const plot1ImageHTML = `<img src="${TROPINKA_PLOT_1_BASE64}" alt="План сюжета 1 темы Тропинки" style="display:block;width:100%;max-width:560px;height:auto;margin:8px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;

    // Подписи используются только в разборе и не меняют исходный рисунок.
    const catalogTheoryImageHTML = `<div style="position:relative;width:100%;max-width:520px;margin:8px auto;"><img src="${TROPINKA_CATALOG_BASE64}" alt="План с буквенными обозначениями" style="display:block;width:100%;height:auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;"><span style="position:absolute;left:12%;top:68%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">Л</span><span style="position:absolute;left:58%;top:68%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">К</span><span style="position:absolute;left:91%;top:68%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">М</span><span style="position:absolute;left:89%;top:8%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">В</span></div>`;

    const plot1TheoryImageHTML = `<div style="position:relative;width:100%;max-width:560px;margin:8px auto;"><img src="${TROPINKA_PLOT_1_BASE64}" alt="План сюжета 1 с буквенными обозначениями" style="display:block;width:100%;height:auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;"><span style="position:absolute;left:11%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">Я</span><span style="position:absolute;left:64%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">К</span><span style="position:absolute;left:89%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">Х</span><span style="position:absolute;left:89%;top:13%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">М</span></div>`;

    const plot2ImageHTML = `<img src="${TROPINKA_PLOT_2_BASE64}" alt="План сюжета 2 темы Тропинки" style="display:block;width:100%;max-width:560px;height:auto;margin:8px auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;image-rendering:auto;">`;

    const plot2TheoryImageHTML = `<div style="position:relative;width:100%;max-width:560px;margin:8px auto;"><img src="${TROPINKA_PLOT_2_BASE64}" alt="План сюжета 2 с буквенными обозначениями" style="display:block;width:100%;height:auto;border:1px solid #cbd5e1;border-radius:7px;background:#fff;"><span style="position:absolute;left:10.5%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">В</span><span style="position:absolute;left:57.5%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">К</span><span style="position:absolute;left:89.5%;top:78%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">Ж</span><span style="position:absolute;left:89.5%;top:13%;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);border:1px solid #94a3b8;border-radius:6px;padding:1px 6px;font-weight:800;font-size:18px;">И</span></div>`;

    const speedNoteCatalog = `<div style="font-style:italic;color:#59636f;margin-top:6px;">По шоссе скорость 25 км/ч, по лесной дорожке и тропинке — 15 км/ч.</div>`;
    const speedNotePlot1 = `<div style="font-style:italic;color:#59636f;margin-top:6px;">По шоссе скорость 20 км/ч, по лесной дорожке и тропинке — 15 км/ч.</div>`;

    const catalogCommon = `<p>Никита и папа летом живут в деревне <b>Лягушкино</b>. В субботу они собираются съездить на велосипедах в село <b>Вятское</b> в спортивный магазин. Из деревни <b>Лягушкино</b> в село <b>Вятское</b> можно проехать по прямой лесной дорожке. Есть более длинный путь: по прямолинейному шоссе через деревню <b>Куровка</b> до деревни <b>Марусино</b>, где нужно повернуть под прямым углом налево на другое шоссе, ведущее в село <b>Вятское</b>. Есть и третий маршрут: в деревне <b>Куровка</b> можно свернуть на прямую тропинку в село <b>Вятское</b>, которая идёт мимо пруда. Лесная дорожка и тропинка образуют с шоссе прямоугольные треугольники.</p><p>По шоссе Никита с папой едут со скоростью <b>25 км/ч</b>, а по лесной дорожке и тропинке — со скоростью <b>15 км/ч</b>. На плане изображено взаимное расположение населённых пунктов, длина стороны каждой клетки равна <b>1 км</b>.</p>`;

    const catalogPrices = `<div class="common-table-wrap"><table class="common-table"><thead><tr><th>Продукт</th><th>д. Лягушкино</th><th>с. Вятское</th><th>д. Куровка</th><th>д. Марусино</th></tr></thead><tbody><tr><td>Молоко (1 л)</td><td>32</td><td>38</td><td>31</td><td>44</td></tr><tr><td>Хлеб (1 батон)</td><td>26</td><td>28</td><td>35</td><td>25</td></tr><tr><td>Сыр «Российский» (1 кг)</td><td>220</td><td>260</td><td>230</td><td>240</td></tr><tr><td>Говядина (1 кг)</td><td>360</td><td>350</td><td>330</td><td>400</td></tr><tr><td>Картофель (1 кг)</td><td>16</td><td>15</td><td>22</td><td>17</td></tr></tbody></table></div>`;

    function catalogPrototype(id, examNumber, title, text, answer, solution, accepts) {
        const isPrice = examNumber === 5;
        return {
            id, typeId: id, sourcePrototypeId: id, examNumber, title, text, answer: String(answer),
            accepts: (accepts || [String(answer)]).map(String),
            solution,
            imageHTML: catalogImageHTML,
            theoryImageHTML: catalogTheoryImageHTML,
            printLayout: 'image-grid',
            printGridHeight: isPrice ? 72 : (['1.2','2.1','2.2'].includes(id) ? 82 : 105),
            printCompact: isPrice || ['1.2','2.1','2.2'].includes(id),
            printBreakBefore: id === '5.1'
        };
    }

    const catalogPrototypes = [
        catalogPrototype('1.1',1,'Определение пунктов: Лягушкино, Вятское, Куровка',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>д. Лягушкино</td><td>с. Вятское</td><td>д. Куровка</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'421',`Марусино находится в точке поворота двух шоссе — это 3. Из Куровки к Вятскому идёт тропинка мимо пруда, поэтому Куровка — 1. Тогда Лягушкино — 4, Вятское — 2. Ответ: 421.`),
        catalogPrototype('1.2',1,'Определение пунктов: Марусино, Вятское, Куровка',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>д. Марусино</td><td>с. Вятское</td><td>д. Куровка</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'321',`Марусино — точка 3, где шоссе поворачивает под прямым углом. Вятское — верхняя точка 2. Куровка — точка 1, откуда начинается тропинка мимо пруда. Ответ: 321.`),
        catalogPrototype('2.1',2,'Длина пути по шоссе из Лягушкино через Марусино',`Сколько километров проедут Никита с папой от деревни <b>Лягушкино</b> до села <b>Вятское</b>, если они поедут по шоссе через деревню <b>Марусино</b>?`,'23',`От Лягушкино до Марусино по горизонтальному шоссе 15 км, от Марусино до Вятского по вертикальному шоссе 8 км. Всего 15+8=23 км.`),
        catalogPrototype('2.2',2,'Длина пути по шоссе из Куровки через Марусино',`Сколько километров проедут Никита с папой от деревни <b>Куровка</b> до села <b>Вятское</b>, если они поедут по шоссе через деревню <b>Марусино</b>?`,'14',`От Куровки до Марусино 6 км, от Марусино до Вятского 8 км. Получаем 6+8=14 км.`),
        catalogPrototype('3.1',3,'Расстояние по прямой Лягушкино — Вятское',`Найдите расстояние от деревни <b>Лягушкино</b> до села <b>Вятское</b> по прямой. Ответ дайте в километрах.`,'17',`Катеты прямоугольного треугольника равны 15 км и 8 км. По теореме Пифагора: <span style="white-space:nowrap;">√<span style="text-decoration:overline;">15²+8²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">289</span></span> = 17 км.`),
        catalogPrototype('3.2',3,'Расстояние по прямой Куровка — Вятское',`Найдите расстояние от деревни <b>Куровка</b> до села <b>Вятское</b> по прямой. Ответ дайте в километрах.`,'10',`Катеты равны 6 км и 8 км. По теореме Пифагора: <span style="white-space:nowrap;">√<span style="text-decoration:overline;">6²+8²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">100</span></span> = 10 км.`),
        catalogPrototype('4.1',4,'Время пути через Марусино',`Сколько минут затратят на дорогу из деревни <b>Лягушкино</b> в село <b>Вятское</b> Никита с папой, если они поедут по шоссе через деревню <b>Марусино</b>?`,'55,2',`Весь маршрут проходит по шоссе и имеет длину 23 км. Время равно 23/25 часа. Переводим в минуты: 23/25·60=55,2 минуты.<br><div class="common-table-wrap"><table class="common-table"><thead><tr><th>Участок пути</th><th>Скорость, км/ч</th><th>Время, мин</th><th>Расстояние, км</th></tr></thead><tbody><tr><td>Лягушкино — Вятское (шоссе)</td><td>25</td><td>55,2</td><td>23</td></tr></tbody></table></div>`,['55,2']),
        catalogPrototype('4.2',4,'Время пути через Куровку и тропинку',`Сколько минут затратят на дорогу из деревни <b>Лягушкино</b> в село <b>Вятское</b> Никита с папой, если они поедут сначала по шоссе, а затем свернут в деревне <b>Куровка</b> на прямую тропинку, которая проходит мимо пруда?`,'61,6',`По шоссе от Лягушкино до Куровки 9 км: 9/25·60=21,6 минуты. Тропинка Куровка–Вятское имеет длину 10 км: 10/15·60=40 минут. Всего 61,6 минуты.<br><div class="common-table-wrap"><table class="common-table"><thead><tr><th>Участок пути</th><th>Скорость, км/ч</th><th>Время, мин</th><th>Расстояние, км</th></tr></thead><tbody><tr><td>Лягушкино — Куровка</td><td>25</td><td>21,6</td><td>9</td></tr><tr><td>Куровка — Вятское</td><td>15</td><td>40</td><td>10</td></tr></tbody></table></div>`,['61,6']),
        catalogPrototype('5.1',5,'Минимальная стоимость набора: хлеб, говядина, картофель',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Лягушкино, селе Вятское, деревне Куровка и деревне Марусино.</p>${catalogPrices}<p>Никита с папой хотят купить <b>3 батона хлеба</b>, <b>2 кг говядины</b> и <b>3 кг картофеля</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'829',`Стоимость набора в четырёх магазинах: 846 руб., 829 руб., 831 руб. и 926 руб. Минимальная сумма — 829 руб.`),
        catalogPrototype('5.2',5,'Минимальная стоимость набора: молоко, хлеб, говядина',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Лягушкино, селе Вятское, деревне Куровка и деревне Марусино.</p>${catalogPrices}<p>Никита с папой хотят купить <b>6 л молока</b>, <b>4 батона хлеба</b> и <b>3 кг говядины</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'1316',`Стоимость набора в четырёх магазинах: 1376 руб., 1390 руб., 1316 руб. и 1564 руб. Минимальная сумма — 1316 руб.`)
    ];

    const plot1CommonText = `<p>Полина проводит лето у дедушки в деревне <b>Ясная</b>. В четверг они собираются поехать на велосипедах в село <b>Майское</b> за покупками. Из деревни <b>Ясная</b> в село <b>Майское</b> можно проехать по прямой лесной дорожке. Есть более длинный путь: по прямолинейному шоссе через деревню <b>Камышёвка</b> до деревни <b>Холмово</b>, где нужно повернуть под прямым углом налево на другое шоссе, ведущее в село <b>Майское</b>. Есть и третий маршрут: в деревне <b>Камышёвка</b> можно свернуть на прямую тропинку в село <b>Майское</b>, которая идёт мимо пруда. Лесная дорожка и тропинка образуют с шоссе прямоугольные треугольники.</p><p>По шоссе Полина с дедушкой едут со скоростью <b>20 км/ч</b>, а по лесной дорожке и тропинке — со скоростью <b>15 км/ч</b>. На плане изображено взаимное расположение населённых пунктов, длина стороны каждой клетки равна <b>2 км</b>.</p>`;

    const plot1Prices = `<div class="common-table-wrap"><table class="common-table"><thead><tr><th>Продукт</th><th>д. Ясная</th><th>с. Майское</th><th>д. Камышёвка</th><th>д. Холмово</th></tr></thead><tbody><tr><td>Молоко (1 л)</td><td>42</td><td>38</td><td>41</td><td>33</td></tr><tr><td>Хлеб (1 батон)</td><td>25</td><td>21</td><td>29</td><td>30</td></tr><tr><td>Сыр «Российский» (1 кг)</td><td>310</td><td>320</td><td>290</td><td>280</td></tr><tr><td>Говядина (1 кг)</td><td>340</td><td>380</td><td>410</td><td>390</td></tr><tr><td>Картофель (1 кг)</td><td>15</td><td>20</td><td>17</td><td>18</td></tr></tbody></table></div>`;

    const plot2CommonText = `<p>Саша летом отдыхает у дедушки в деревне <b>Васильково</b>. В субботу они собираются съездить на велосипедах в село <b>Иваново</b> в магазин. Из деревни <b>Васильково</b> в село <b>Иваново</b> можно проехать по прямой лесной дорожке. Есть более длинный путь: по прямолинейному шоссе через деревню <b>Камышино</b> до деревни <b>Журавушка</b>, где нужно повернуть под прямым углом направо на другое шоссе, ведущее в село <b>Иваново</b>. Есть и третий маршрут: в деревне <b>Камышино</b> можно свернуть на прямую тропинку в село <b>Иваново</b>, которая идёт мимо пруда.</p><p>Лесная дорожка и тропинка образуют с шоссе прямоугольные треугольники. По шоссе Саша с дедушкой едут со скоростью <b>20 км/ч</b>, а по лесной дорожке и тропинке — со скоростью <b>15 км/ч</b>. На плане изображено взаимное расположение населённых пунктов, длина стороны каждой клетки равна <b>1 км</b>.</p>`;

    const plot2Prices = `<div class="common-table-wrap"><table class="common-table"><thead><tr><th>Продукт</th><th>д. Васильково</th><th>с. Иваново</th><th>д. Камышино</th><th>д. Журавушка</th></tr></thead><tbody><tr><td>Молоко (1 л)</td><td>35</td><td>34</td><td>33</td><td>31</td></tr><tr><td>Хлеб (1 батон)</td><td>28</td><td>25</td><td>30</td><td>24</td></tr><tr><td>Сыр «Российский» (1 кг)</td><td>270</td><td>260</td><td>310</td><td>220</td></tr><tr><td>Говядина (1 кг)</td><td>390</td><td>420</td><td>400</td><td>380</td></tr><tr><td>Картофель (1 кг)</td><td>16</td><td>24</td><td>20</td><td>22</td></tr></tbody></table></div>`;

    function scenarioTask(typeId, typeTitle, text, answer, solution, accepts) {
        return {
            typeId,
            typeTitle,
            text,
            answer: String(answer),
            accepts: (accepts || [String(answer)]).map(String),
            solution,
            imageHTML: plot1ImageHTML,
            theoryImageHTML: plot1TheoryImageHTML,
            printLayout: 'image-grid',
            printGridHeight: Number(typeId.split('.')[0]) === 5 ? 72 : 105,
            printCompact: Number(typeId.split('.')[0]) === 5
        };
    }

    function scenarioTaskFor(imageHTML, theoryImageHTML, typeId, typeTitle, text, answer, solution, accepts) {
        return {
            typeId,
            typeTitle,
            text,
            answer: String(answer),
            accepts: (accepts || [String(answer)]).map(String),
            solution,
            imageHTML,
            theoryImageHTML,
            printLayout: 'image-grid',
            printGridHeight: Number(typeId.split('.')[0]) === 5 ? 72 : 105,
            printCompact: Number(typeId.split('.')[0]) === 5
        };
    }

    // Первый связанный сюжет использует те же актуальные прототипы, что и каталог тренажёра.
    const catalogScenario = {
        id: 'tropinki-catalog-1',
        title: 'Сюжет 1. Лягушкино — Вятское',
        common: `${catalogCommon}${catalogImageHTML}`,
        imageHTML: catalogImageHTML,
        tasks: {
            1: catalogPrototypes.filter(t => t.examNumber === 1),
            2: catalogPrototypes.filter(t => t.examNumber === 2),
            3: catalogPrototypes.filter(t => t.examNumber === 3),
            4: catalogPrototypes.filter(t => t.examNumber === 4),
            5: catalogPrototypes.filter(t => t.examNumber === 5)
        }
    };

    const plot1Scenario = {
        id: 'tropinki-plot-1',
        title: 'Сюжет 2. Ясная — Майское',
        common: `${plot1CommonText}${plot1ImageHTML}`,
        imageHTML: plot1ImageHTML,
        tasks: {
            1: [
                scenarioTask('1.1','1.1 — Камышёвка, Ясная, Холмово',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>д. Камышёвка</td><td>д. Ясная</td><td>д. Холмово</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'213',`Холмово находится в точке поворота двух шоссе — это 3. Из Камышёвки к Майскому идёт тропинка мимо пруда, поэтому Камышёвка — 2. Тогда Ясная обозначена цифрой 1. Ответ: 213.`),
                scenarioTask('1.2','1.2 — Майское, Холмово, Ясная',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>с. Майское</td><td>д. Холмово</td><td>д. Ясная</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'431',`Майское — верхняя точка 4. Холмово — точка 3, где шоссе поворачивает под прямым углом. Ясная — точка 1. Получаем 431.`)
            ],
            2: [
                scenarioTask('2.1','2.1 — путь Ясная → Холмово → Майское',`Сколько километров проедут Полина с дедушкой от деревни <b>Ясная</b> до села <b>Майское</b>, если они поедут по шоссе через деревню <b>Холмово</b>?`,'56',`По горизонтальному шоссе от Ясной до Холмова 16 клеток, то есть 16·2=32 км. От Холмова до Майского 12 клеток: 12·2=24 км. Общий путь равен 32+24=56 км.`),
                scenarioTask('2.2','2.2 — путь Камышёвка → Холмово → Майское',`Сколько километров проедут Полина с дедушкой от деревни <b>Камышёвка</b> до села <b>Майское</b>, если они поедут по шоссе через деревню <b>Холмово</b>?`,'34',`От Камышёвки до Холмова 5 клеток, или 10 км. От Холмова до Майского 12 клеток, или 24 км. Всего 10+24=34 км.`)
            ],
            3: [
                scenarioTask('3.1','3.1 — расстояние Ясная — Майское по прямой',`Найдите расстояние от деревни <b>Ясная</b> до села <b>Майское</b> по прямой. Ответ дайте в километрах.`,'40',`Катеты прямоугольного треугольника равны 32 км и 24 км. По теореме Пифагора: <span style="white-space:nowrap;">√<span style="text-decoration:overline;">32²+24²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">1600</span></span> = 40 км.`),
                scenarioTask('3.2','3.2 — расстояние Камышёвка — Майское по прямой',`Найдите расстояние от деревни <b>Камышёвка</b> до села <b>Майское</b> по прямой. Ответ дайте в километрах.`,'26',`Катеты равны 10 км и 24 км. Поэтому <span style="white-space:nowrap;">√<span style="text-decoration:overline;">10²+24²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">676</span></span> = 26 км.`)
            ],
            4: [
                scenarioTask('4.1','4.1 — время пути через Холмово',`Сколько минут затратят Полина с дедушкой на дорогу из деревни <b>Ясная</b> в село <b>Майское</b>, если поедут через деревню <b>Холмово</b>?${speedNotePlot1}`,'168',`Весь маршрут проходит по шоссе и имеет длину 56 км. Время равно 56/20=2,8 часа. Переводим в минуты: 2,8·60=168 минут.`),
                scenarioTask('4.2','4.2 — время пути через Камышёвку и тропинку',`Сколько минут затратят на дорогу из деревни <b>Ясная</b> в село <b>Майское</b> Полина с дедушкой, если они поедут сначала по шоссе, а затем свернут в деревне <b>Камышёвка</b> на прямую тропинку, которая проходит мимо пруда?`,'170',`От Ясной до Камышёвки по шоссе 11 клеток, то есть 22 км. На этот участок уйдёт 22/20·60=66 минут. Тропинка Камышёвка–Майское имеет длину 26 км, время на ней 26/15·60=104 минуты. Итого 66+104=170 минут.`)
            ],
            5: [
                scenarioTask('5.1','5.1 — минимальная стоимость: молоко, говядина, картофель',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Ясная, селе Майское, деревне Камышёвка и деревне Холмово.</p>${plot1Prices}<p>Полина с дедушкой хотят купить <b>2 л молока</b>, <b>3 кг говядины</b> и <b>2 кг картофеля</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'1134',`Стоимость набора: в Ясной — 2·42+3·340+2·15=1134 руб.; в Майском — 1256 руб.; в Камышёвке — 1346 руб.; в Холмове — 1272 руб. Минимум — 1134 руб.`),
                scenarioTask('5.2','5.2 — минимальная стоимость: молоко, сыр, картофель',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Ясная, селе Майское, деревне Камышёвка и деревне Холмово.</p>${plot1Prices}<p>Полина с дедушкой хотят купить <b>3 л молока</b>, <b>1 кг сыра «Российский»</b> и <b>3 кг картофеля</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'433',`Стоимость набора: в Ясной — 481 руб.; в Майском — 494 руб.; в Камышёвке — 464 руб.; в Холмове — 433 руб. Самая маленькая сумма — 433 руб.`)
            ]
        }
    };

    const plot2Scenario = {
        id: 'tropinki-plot-2',
        title: 'Сюжет 3. Васильково — Иваново',
        common: `${plot2CommonText}${plot2ImageHTML}`,
        imageHTML: plot2ImageHTML,
        tasks: {
            1: [
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '1.1','1.1 — Васильково, Иваново, Камышино',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>д. Васильково</td><td>с. Иваново</td><td>д. Камышино</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'421',`Из деревни Камышино идёт прямая тропинка к Иванову мимо пруда, поэтому Камышино — это точка 1. Село Иваново расположено в конце обоих прямых маршрутов — это точка 2. Тогда деревня Васильково обозначена цифрой 4. Получаем 421.`),
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '1.2','1.2 — Журавушка, Камышино, Иваново',`<p>Пользуясь описанием, определите, какими цифрами на плане обозначены населённые пункты. Заполните таблицу, в бланк ответов перенесите последовательность трёх цифр без пробелов, запятых и других дополнительных символов.</p><div class="common-table-wrap"><table class="common-table"><tbody><tr><td>Насел. пункты</td><td>д. Журавушка</td><td>д. Камышино</td><td>с. Иваново</td></tr><tr><td>Цифры</td><td></td><td></td><td></td></tr></tbody></table></div>`,'312',`Журавушка — точка поворота двух шоссе под прямым углом, это 3. Камышино — точка 1, откуда начинается тропинка к Иванову мимо пруда. Иваново — верхняя точка 2. Ответ: 312.`)
            ],
            2: [
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '2.1','2.1 — путь Васильково → Журавушка → Иваново',`Сколько километров проедут Саша с дедушкой от деревни <b>Васильково</b> до села <b>Иваново</b>, если они поедут по шоссе через деревню <b>Журавушка</b>?`,'23',`По горизонтальному шоссе от Василькова до Журавушки 15 клеток, то есть 15 км. От Журавушки до Иванова по вертикальному шоссе 8 клеток, то есть 8 км. Общая длина пути: 15+8=23 км.`),
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '2.2','2.2 — путь Камышино → Журавушка → Иваново',`Сколько километров проедут Саша с дедушкой от деревни <b>Камышино</b> до села <b>Иваново</b>, если они поедут по шоссе через деревню <b>Журавушка</b>?`,'14',`От Камышина до Журавушки по горизонтальному шоссе 6 клеток, то есть 6 км. От Журавушки до Иванова — 8 клеток, то есть 8 км. Итого 6+8=14 км.`)
            ],
            3: [
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '3.1','3.1 — расстояние Васильково — Иваново по прямой',`Найдите расстояние от деревни <b>Васильково</b> до села <b>Иваново</b> по прямой. Ответ дайте в километрах.`,'17',`Катеты прямоугольного треугольника равны 15 км и 8 км. По теореме Пифагора: <span style="white-space:nowrap;">√<span style="text-decoration:overline;">15²+8²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">289</span></span> = 17 км.`),
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '3.2','3.2 — расстояние Камышино — Иваново по прямой',`Найдите расстояние от деревни <b>Камышино</b> до села <b>Иваново</b> по прямой. Ответ дайте в километрах.`,'10',`Катеты равны 6 км и 8 км. По теореме Пифагора: <span style="white-space:nowrap;">√<span style="text-decoration:overline;">6²+8²</span></span> = <span style="white-space:nowrap;">√<span style="text-decoration:overline;">100</span></span> = 10 км.`)
            ],
            4: [
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '4.1','4.1 — время пути по лесной дорожке',`Сколько минут затратят на дорогу из деревни <b>Васильково</b> в село <b>Иваново</b> Саша с дедушкой, если они поедут по прямой лесной дорожке?`,'68',`Прямая лесная дорожка из Василькова в Иваново имеет длину 17 км. Скорость по лесной дорожке — 15 км/ч. Тогда время равно 17/15 часа, то есть 17/15·60=68 минут.`),
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '4.2','4.2 — время пути через Камышино и тропинку',`Сколько минут затратят на дорогу из деревни <b>Васильково</b> в село <b>Иваново</b> Саша с дедушкой, если они поедут сначала по шоссе, а затем свернут в <b>Камышино</b> на прямую тропинку, которая проходит мимо пруда?${speedNotePlot1}`,'67',`От Василькова до Камышина по шоссе 9 клеток, то есть 9 км. На этот участок уйдёт 9/20·60=27 минут. Тропинка Камышино–Иваново имеет длину 10 км, время на ней: 10/15·60=40 минут. Итого 27+40=67 минут.`)
            ],
            5: [
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '5.1','5.1 — минимальная стоимость: молоко, говядина, картофель',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Васильково, селе Иваново, деревне Камышино и деревне Журавушка.</p>${plot2Prices}<p>Саша с дедушкой хотят купить <b>2 л молока</b>, <b>3 кг говядины</b> и <b>2 кг картофеля</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'1246',`Стоимость набора: в Василькове — 2·35+3·390+2·16=1272 руб.; в Иванове — 1376 руб.; в Камышине — 1306 руб.; в Журавушке — 1246 руб. Самая маленькая сумма — 1246 руб.`),
                scenarioTaskFor(plot2ImageHTML, plot2TheoryImageHTML, '5.2','5.2 — минимальная стоимость: хлеб, сыр, говядина',`<p>В таблице указана стоимость (в рублях) некоторых продуктов в четырёх магазинах, расположенных в деревне Васильково, селе Иваново, деревне Камышино и деревне Журавушка.</p>${plot2Prices}<p>Саша с дедушкой хотят купить <b>3 батона хлеба</b>, <b>2 кг сыра «Российский»</b> и <b>2 кг говядины</b>. В каком магазине такой набор продуктов будет стоить дешевле всего? В ответ запишите стоимость данного набора в этом магазине.</p>`,'1272',`Стоимость набора: в Василькове — 3·28+2·270+2·390=1404 руб.; в Иванове — 1435 руб.; в Камышине — 1510 руб.; в Журавушке — 1272 руб. Минимальная стоимость — 1272 руб.`)
            ]
        }
    };

    // Тема «Тропинки»: каталог тренажёра и три связанных сюжета.
    window.ogePracticeDatabase = {
        tropinki: {
            title: 'Тропинки',
            sourceStatus: 'active',
            catalog: {
                title: 'Каталог прототипов',
                common: catalogCommon,
                imageHTML: catalogImageHTML,
                prototypes: catalogPrototypes
            },
            scenarios: [catalogScenario, plot1Scenario, plot2Scenario]
        }
    };
})();
