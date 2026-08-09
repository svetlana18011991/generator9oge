(function () {
    'use strict';

    const planSrc = window.PLOT_PLAN_BASE64 || '';
    const imageHTML = planSrc
        ? `<img src="${planSrc}" alt="План участка СНТ «Прибор»" class="practice-plot-plan" loading="eager">`
        : '';

    const commonText = `
        <p>На плане изображено домохозяйство по адресу: <b>СНТ «Прибор», 2-я Линия, д. 26</b> (сторона каждой клетки на плане равна <b>2 м</b>). Участок имеет прямоугольную форму. Выезд и въезд осуществляются через единственные ворота.</p>
        <p>При входе на участок справа от ворот находится гараж, а слева в углу участка расположен сарай, отмеченный на плане цифрой <b>1</b>. Площадь, занятая сараем, равна <b>24 кв. м</b>.</p>
        <p>Жилой дом находится в глубине территории и обозначен на плане цифрой <b>6</b>. Помимо гаража, жилого дома и сарая, на участке имеется летняя беседка, расположенная напротив входа в дом, и мангал рядом с ней. На участке также растут ели. В центре участка расположен цветник.</p>
        <p>Все дорожки внутри участка имеют ширину <b>1 м</b> и вымощены тротуарной плиткой размером <b>50 см × 50 см</b>. Перед гаражом и между домом и беседкой имеются площадки площадью <b>40 и 16 кв. м</b> соответственно, вымощенные такой же плиткой.</p>
        <p>К домохозяйству подведено электричество. Имеется магистральное газоснабжение.</p>`;

    const heatingTable = (gasBoiler, gasInstall, gasUse, gasPrice, elBoiler, elInstall, elPower, elPrice) => `
        <div class="common-table-wrap"><table class="common-table">
            <thead><tr><th>Вид отопления</th><th>Нагреватель (котёл)</th><th>Прочее оборудование и монтаж</th><th>Средн. расход газа / средн. потребл. мощность</th><th>Стоимость газа / электроэнергии</th></tr></thead>
            <tbody>
                <tr><td>Газовое отопление</td><td>${gasBoiler} руб.</td><td>${gasInstall} руб.</td><td>${gasUse} куб. м/ч</td><td>${gasPrice} руб./куб. м</td></tr>
                <tr><td>Электр. отопление</td><td>${elBoiler} руб.</td><td>${elInstall} руб.</td><td>${elPower} кВт</td><td>${elPrice} руб./(кВт · ч)</td></tr>
            </tbody>
        </table></div>`;

    const answerBox = answer => `<div style="margin-top:10px;padding:8px 11px;border:2px solid #fbbf24;border-radius:8px;background:#fffbeb;"><b>Ответ: ${answer}</b></div>`;
    const steps = (items, answer) => `<div style="line-height:1.48;">${items.map((x,i)=>`<div style="display:grid;grid-template-columns:30px 1fr;gap:8px;align-items:start;margin:7px 0;"><div style="width:26px;height:26px;border-radius:50%;background:#ccfbf1;color:#0f766e;font-weight:800;display:flex;align-items:center;justify-content:center;">${i+1}</div><div>${x}</div></div>`).join('')}${answerBox(answer)}</div>`;

    const proto = (id, examNumber, title, text, answer, solution, options={}) => ({
        id,
        examNumber,
        title,
        text,
        answer: String(answer),
        accepts: (options.accepts || [String(answer)]).map(String),
        solution,
        imageHTML: options.withPlan === false ? '' : imageHTML,
        theoryImageHTML: options.withPlan === false ? '' : imageHTML,
        printLayout: options.printLayout || (examNumber === 5 ? 'grid' : 'image-grid'),
        printGridHeight: options.printGridHeight || (examNumber === 5 ? 100 : 110),
        printCompact: Boolean(options.printCompact),
        sourceCode: options.sourceCode || ''
    });

    const catalogPrototypes = [
        proto('1.1', 1, 'Соответствие объектов: цветник, гараж, мангал, беседка',
            `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
             <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>цветник</td><td>гараж</td><td>мангал</td><td>беседка</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
            '4235',
            steps([
                `В центре участка расположен <b>цветник</b>, на плане это объект <b>4</b>.`,
                `Справа от единственных ворот расположен <b>гараж</b> — объект <b>2</b>.`,
                `Напротив входа в дом находится <b>беседка</b> — объект <b>5</b>, а рядом с ней расположен <b>мангал</b> — объект <b>3</b>.`,
                `Записываем цифры в требуемом порядке: <b>4, 2, 3, 5</b>.`
            ], '4235'),
            {sourceCode:'variant-1'}),

        proto('1.2', 1, 'Соответствие объектов: беседка, ели, гараж, мангал',
            `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
             <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>беседка</td><td>ели</td><td>гараж</td><td>мангал</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
            '5723',
            steps([
                `Напротив входа в жилой дом (объект 6) расположена <b>беседка</b>, значит, это объект <b>5</b>.`,
                `Ели на плане отмечены возле объекта <b>7</b>.`,
                `Справа от ворот расположен <b>гараж</b> — объект <b>2</b>.`,
                `Рядом с беседкой находится <b>мангал</b> — объект <b>3</b>. Записываем: <b>5723</b>.`
            ], '5723'),
            {sourceCode:'20232F'}),

        proto('2.1', 2, 'Площадь цветника',
            `Найдите площадь, которую занимает <b>цветник</b>. Ответ дайте в квадратных метрах.`,
            '32',
            steps([
                `Цветник занимает на плане <b>8 клеток</b>.`,
                `Сторона клетки равна 2 м, поэтому площадь одной клетки: <span style="white-space:nowrap;">2·2=4 м²</span>.`,
                `Площадь цветника: <span style="white-space:nowrap;">8·4=32 м²</span>.`
            ], '32'),
            {sourceCode:'37804F'}),

        proto('2.2', 2, 'Площадь жилого дома',
            `Найдите площадь, которую занимает <b>жилой дом</b>. Ответ дайте в квадратных метрах.`,
            '88',
            steps([
                `Жилой дом занимает <b>21 целую клетку и две половины клетки</b>, то есть всего <b>22 клетки</b>.`,
                `Площадь одной клетки: <span style="white-space:nowrap;">2·2=4 м²</span>.`,
                `Площадь дома: <span style="white-space:nowrap;">22·4=88 м²</span>.`
            ], '88'),
            {sourceCode:'A93638'}),

        proto('3.1', 3, 'Упаковки плитки для всех дорожек и площадок',
            `Тротуарная плитка продаётся в упаковках, рассчитанных на <b>3,5 кв. м</b>. Сколько упаковок такой плитки понадобилось, чтобы выложить <b>все дорожки и обе площадки</b>?`,
            '31',
            steps([
                `По плану на обе площадки и все дорожки требуется <b>428 плиток</b> размером 50×50 см.`,
                `Площадь одной плитки: <span style="white-space:nowrap;">0,5·0,5=0,25 м²</span>. В упаковке на 3,5 м² содержится <span style="white-space:nowrap;">3,5:0,25=14</span> плиток.`,
                `Получаем <span style="white-space:nowrap;">428:14≈30,57</span>. Нужное число упаковок округляем вверх: <b>31</b>.`
            ], '31'),
            {sourceCode:'A62909'}),

        proto('3.2', 3, 'Упаковки плитки только для дорожек',
            `Тротуарная плитка продаётся в упаковках по <b>8 штук</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>только дорожки</b>?`,
            '26',
            steps([
                `На дорожки требуется <b>204 плитки</b>.`,
                `В одной упаковке 8 плиток: <span style="white-space:nowrap;">204:8=25,5</span>.`,
                `25 упаковок не хватит, поэтому понадобится <b>26 упаковок</b>.`
            ], '26'),
            {sourceCode:'packs-8'}),

        proto('4.1', 4, 'Процент площади сарая',
            `Сколько процентов площади всего участка занимает <b>сарай</b>?`,
            '4',
            steps([
                `Участок имеет размеры <b>15×10 клеток</b>, значит, его площадь равна 150 клеткам.`,
                `Сарай занимает <b>3×2=6 клеток</b>.`,
                `Доля сарая: <span style="white-space:nowrap;">6:150·100%=4%</span>.`
            ], '4'),
            {sourceCode:'E5CF7F'}),

        proto('4.2', 4, 'Расстояние от гаража до жилого дома',
            `Найдите расстояние от <b>гаража</b> до <b>жилого дома</b> (расстояние между двумя ближайшими точками по прямой) в метрах.`,
            '10',
            steps([
                `Между ближайшими точками гаража и дома получается прямоугольный треугольник с катетами <b>3 и 4 клетки</b>.`,
                `По теореме Пифагора: <span style="white-space:nowrap;">√(3²+4²)=5</span> клеток.`,
                `Одна клетка соответствует 2 м, поэтому расстояние равно <span style="white-space:nowrap;">5·2=10 м</span>.`
            ], '10'),
            {sourceCode:'BA4CA1'}),

        proto('5.1', 5, 'Окупаемость газового отопления — вариант 1',
            `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
             ${heatingTable('28 000','16 540','1,1','4,8','22 000','14 444','5,8','4,4')}
             <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
            '400',
            steps([
                `Первоначальные затраты: газ — <span style="white-space:nowrap;">28 000+16 540=44 540 руб.</span>, электричество — <span style="white-space:nowrap;">22 000+14 444=36 444 руб.</span>. Разница: <b>8096 руб.</b>`,
                `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,1·4,8=5,28 руб.</span>, электричество — <span style="white-space:nowrap;">5,8·4,4=25,52 руб.</span>. Экономия за час: <b>20,24 руб.</b>`,
                `Время окупаемости: <span style="white-space:nowrap;">8096:20,24=400</span> часов.`
            ], '400'),
            {withPlan:false, printCompact:true}),

        proto('5.2', 5, 'Окупаемость газового отопления — вариант 2',
            `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
             ${heatingTable('18 000','9980','1,2','4,8','13 000','10 500','6,4','4,4')}
             <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
            '200',
            steps([
                `Первоначальные затраты: газ — <span style="white-space:nowrap;">18 000+9980=27 980 руб.</span>, электричество — <span style="white-space:nowrap;">13 000+10 500=23 500 руб.</span>. Разница: <b>4480 руб.</b>`,
                `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,2·4,8=5,76 руб.</span>, электричество — <span style="white-space:nowrap;">6,4·4,4=28,16 руб.</span>. Экономия: <b>22,4 руб./ч</b>.`,
                `Время окупаемости: <span style="white-space:nowrap;">4480:22,4=200</span> часов.`
            ], '200'),
            {withPlan:false, printCompact:true, sourceCode:'A95345'})
    ];



    const story1PlanSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAC5CAYAAAAF8KXrAABfK0lEQVR4nO2dd1QTWxfFdwqhd5CiIoj6xF4RsBewd+y9l2d9NtRnF3vvgtgbioBYsBcUFUSpCoiioAjSayCBZL4/gHxAAuTmUXV+a7lczMyeezNJTmbuPXcfBkVRFMrgrft57Dp5EomUIdY4XIe1UVlH09DQ0NBUFIzyAjQNDQ0NTfXArO4O0NDQ0NBIhg7QNDQ0NDUUOkDT0NDQ1FDoAE1DQ0NTQ6EDNA0NDU0NhQ7QNDQ0NDUUOkDT0NDQ1FDoAE1DQ0NTQ6EDNA0NDU0NhQ7QNDQ0NDUUOkDT0NDQ1FDoAE1DQ0NTQ6EDNA0NDU0NhQ7QNDQ0NDUUOkDT0NDQ1FDoAE1DQ0NTQ6EDNA0NDU0NhQ0AfD4f8+fPR0BAAJFYKBRCIBBATk5Oao1AIIBQKCTSFMLj8SAvL0+k4fP5YLPZYDKl/y2SRQMAeXl5AAA2m12pGkC2a0FRFPLy8oivfU5ODuTl5cFgMIh0fD4fHA6HSJObmwsWi0V87WW5HgKBABRFVdm1z83NJb4ePB4PHA6H+NrL0se8vDwwGAywWKxKb0uW2AHkfxYVFBSINEDVxQ5Z2+rSpQt2794tfj0oiqIOHjxIPX36lCLFx8eHOnz4MJHmzZs31PHjx4nbysrKoqZNm0as27VrFxUaGkqk2b59O7GGoijK1dWVcnV1JdK4ublRbm5uxG3NmzePWBMZGUnt37+fWDdu3DgqKSmJWLdx40ZizcGDByl/f39i3eLFi4k1L168oK5cuUKsW7RoEbHm169f1KpVq4h1y5Yto378+EGsk+V6XLp0ifL09CTWLV++nFjz7t076syZM8S6GTNmEGsoipLp2u/atYsKCgqqkrbc3Nwkxg56iIOGhoamhkIHaBoaGpoaCh2gaWhoaGoodICmoaGhqaHQAZqGhoamhkIHaBoaGpoaCh2gaWhoaGoodICmoaGhqaHQAZqGhoamhkIHaBoaGpoaCpkJQQUgFApF/0h1FEXJpCNt77/0sej/laUBUGXXomhbxO1VQx9rcluy6GTR0Pw+VHmAXr5iBfz9/bF6zRpibU5ODlzd3Ig0fD4fW+3tic2Stu/YIbtZ0owZ5BpCw56cnBxcvnKFSEMVGPZs2ryZSJednY07d+/KZNhz4MABIo3MBjU5OTh77hyRptAsad78+US6nJwcnDt/nkhDURT4fD5OnDxJpOPxePj+/TuuXbtGpKP5PRBFhefPnyMxMZFIHBERgc+fP8PFxUVqTVxsLHJycpCTk0PUViG5ubnEGh6PVyWaqkaWawHI9toyMzNlaovP5xNrZL32fBmvhyzIeu1luR6RX78SfceA/O8mqcbHxwcqKirE73V4eDhxW5GRkYiKioKKigqR7qsM1wIAwsLCiHVBQUFgMpkIDw+v9LZ8fX1haWkptl0UoLt3744ePXoQn1RVVRW2trZSa7bv2AG15GSEhYYStcXlcrF27Vrs37+fSHfs2DFYW1ujcePGUmsOHz6Mfv36EWkA4O7duwCAAQMGSK3p3qMHhEIhXnh5EbVlZ2eHHTt2EGmio6Nx7949zJ49m0g3f/582NvbQ1NTk0i3d+9eLFu2jEhz6tQpWFhYoEWLFkS6devWYcuWLUQaH19fDB8+HGZmZujQvj2RtirIzcvDtWvXYGhgQPQdA4CXL18Sa/h8PrS0tNCvXz8inY+PD3Fb79+/R1BQELHu3r17xBoA8PPzI9Z9/foVNjY2aNmyZaW3xWazQVGU+Hais1QQDAYD+vr6RBoulwtFRUVinaqqKnR1dYl0smgAiAIYiW7J4sWgKIq4LSUlJWJNdnY21NTUiHUKCgrQ09ODlpYWkU5FRYW4LTU1Nejo6BDrlJWViTXaBa/H0sICq1atItKWJCUlBZ8iIsS216lTBybGxjKdMysrS6a7RZrfh2oJ0DT/x8DAoLq7QPMf+PnzJ44cPYrYnz/x6vVrsf0NGzZE27ZtMWrUKLRt06bqO0hTq6EDNA2NDOTl5cHDwwNHjx1DXFwc2Gw2hg4dCm1tbdExfD4fbm5uuHXrFu7du4dTp06hRfPmxFVVaP5c6ABNQ0NIXl4e9u/fj1NOTtDT08Px48cxY/p0yQefO4egoCB0srDAuHHj0LFjR5xydJSpbBPNnwe9UIWGhpAdO3bglJMTmjVrhs8REaUH5wJatWqFkOBgLFq4EG/fvsXUadOqqKc0tR06QFczmzZvxoaNG6u7GzRS4u/vj8tXrqBXr17wfvkSysrKon1CoRCxsbF48OAB0tLSiulMTU2xa9cuLFy4EAEBATh95kxVd52mFkIH6GqGz+fLlBtLU/VERkZi/YYN0NbWhvPVq1BXVy+2PysrC75v32LK1KkS1xRwOBxss7eHubk5HB0d8erVq6rqOk0t5Y8L0FwuFx8/fiz2Lzk5ubq7RVMLcL95E58+fcLff/9dbDKwEFVVVdhYWyM9PV1iTiuQnw64du1aJCcn4+ixY7ViQRRN9fFHTBKmpKTgzJkz+PTpE37ExODSpUvF9lv36YP2HTpg0cKFxLm0NH8OFy5cgJGREUbJsFCiKF27dEG3bt3g5eWFyMhImJmZVVAPaX43akWALjSMkcmkhqJg1bmzyNtBVVUVVlZWov2ZmZl49PgxHj1+jNOnT8Pl+nXk5eX9J7MkEoyMjEq926KpedSvXx9Nmzb9T+dQV1eHpYUFvAhXj9L8edSKAB0YGIh2BUtxSU1qgPyVi85Xr5a5/PLSpUuYNHkyunXvDgBYv2GDTH01MzPDyJEjpT5+DuGyaxoamj8HBkVR1KFDh3Dp0iWJ42plkZqaitTUVBgTLGV99eoVuNnZ6NO7t9Sa9PR0iau0pGHEiBFYvmwZzM3Ny3RIEwqFyMrKQs+ePfHe31+mtoD8McauXbpIfXxcXBwAsuXhv379QkBgILHjG5D/NELqSicUCmVqSxadLP0rbKtVq1YwILiOKSkp8PH1xfRp08pd6r1g4UI8fPgQLtevY8SIEaUel52dDR1dXQQGBKBRo0alHhccHIyO5uYwNDTE/Xv3JB6TlZUF806doKmpifbt2kn3ogr4+PEjmjVrRqSJiYkBh8OBrq4ukS40NJR4mCYtLQ0ZGRmoV68ekS4oKAitWrUi0gD5BkakTz6RkZHQ0dGBmppapbcVFxeHdevWYfjw4cW2i+6gV65cWezRXxr8/f3h7++P6eXkgRalb79+iIqKgpOTk9SakJAQ9O3XDwMGDMBqO7tyj7/r6Ynt27dj0KBBcHRwEDP5CQ4OxtOnTwEAFpaWMO/YEUwmE6qqqnjw4AH27t2L7Tt2YOjQoVhOYPYzcdIkcDgcotfm6ekJAOjfv7/Umtu3b2PO3Llo3bo18ZfwdyQsLAx+fn6YNXOm2Ae8LHx8fcsMtkXp1rUrnj59itNnzkitKQsPDw/w+Xx0keLHvHXr1kSfKQBYv349NhPayrq6ukJTUxM9e/Yk0m3evBnr168n0gQFBSE0NBRjxowh0i1btgx79+4l0gCAvb091q5dS6Q5duwYevbsSfzjI0tbhXGgJKIAra2tTewL8f37d6irqxPp5OTkwGQyiTS/fv0CkG/aU6dOnTKP/RQRgbNnz8LIyAgXzp+XmAp15OhRhIeFAQAaN2lSbL+WlhYWLVqE12/e4PXr1+Dz+VL/yrPZbLDZbKLXVmhARKIp/MHp3bs3ZhJ4T/+unL9wAX5+ftDQ0CC6jjoET4yjR4/G9h07xPKbi5KVlYWHDx9CIBDgyZMnUFdXL/VutNDS01aK4TAFeXni76aysjKxRlNTE1paWsQ6FRWVMjWvX70SSynkcrno3qMH0tPScPv2bTGNlZUVLCXcMCopKcnkX1NeHyWhpqYGXV3dCr8ektDS0qo5bnaVyfXr1xEbGwtHBwex4ExRFD59+oR5c+eiWbNmkJOTk/g4raenh9V2dhgxciQWLV4M1xs3Kq2/165dg5CiMGzYsEprg6biyMnJQWZmpkQf49zcXHC5XJwuuNvNzs6WeI7c3FykpKRUaj9rEukZGYiJiRHbrqCgAG52tsR96RkZVdG1Gs9vFaBTUlIQEREBJpMp0ds6JycH+/btQ0JiIrp27YqJEyagfv36EsdJra2tMWjgQNyS8OtekQQGBdEljWoJzZs3x9u3b3Hr9m2MGztWbL+GhgbGjx9f7nmio6Ph4OgIfX19aGhoVEJPf18oiiqz2AebzRZVKSqp4/F4orvUwhuzsjKocnNzwePxRO0pKCiAl8MDheIaJpNZ7Dtckd/n32qhys+fP/H69WtMmjgRpqamYvsVFRXh5OSEfXv34s3r1xg2fDgiJHj4FkUoFBJXmqH5PRk6dChYLBZWrFjxn84zqyBzp1OnTrTdLCE8Hg/16teHkrIy6hsZ4a+mTWFsYgIlZWUY1q2LG66u0NTSQt169fBX06ZQU1eHkrIyeHw+evXqBSVlZSgrK2Pc+PHo2rUrlJSVoaSsDHUNDTRu0gRKyspo1LgxtLS1sWHDRph36gQlZWU0aNAAfD4ff/31F1RVVWFgaAglZWWoqKpiwcKF0NPXh5KyMgwMDRFWMHxaEfxWAVoaOBwOmjVrBldXVwwfNqzMyZdly5YhJycHixYvrsIe0tRURtna4uCBA4iLi8Ou3btlOsfz58/x+vVrzJw5EzsJK+LQ5N/Ffvv6FUZGRjh+7Biivn3DlcuXoaWlhW9fv2LM6NF4+PAhtm7Zgqhv39CgQQMcPXIE8hwOHj96hCFDhmDuvHlwuX4dly9fBgDYrVqFVi1aIjAgAADg6+MDm959QAmFWLN6NYyMjBAQEIBmZs3gfM0ZERER+BoZiS5dumDTxo04eeIEXnl7AwCCAgMrdOL+twrQ9+7fl/pYOTk5jBkzpkzbR9ISTzS/P61atULjxo2xbt067Ny1i0j7+PFjDBs+HPLy8ujbt69M6YQ0+ZNwcnJyxbaxWCxROlzJyV9dXV0wGAwoKCpCRVkZaqqqiIqKwsABAwEA8+bNw3Ov58U0V5yvYuOmjdDU1ERaWhomT5kCoVCI5s2bw9jYGBoaGlBUUIC6ujrev3+P3r3y04ZJU/LK47cag7a0sICDg4PUx/P5/DLrBwYFBVVEt8pkxfLlld4GTcWhp6eHI4cPY8HChdiwYQPOnTsHN1dX/PXXX6VqkpOTYWtrC/+AAMjJyeHA/v1oRVjnrjbTrVs3mJubi21XUlICg8HAOgkpepXpl/3x40eMGzcOx44fg7WNDeTk5KCkpFRsbFtRURHy8vIA/r/y0/ult9gEsbe3N65evYq7np7o0LFDhff1twrQJbM2SuLn54eQDx/QpnVraGlpITU1FW3bti31+GvXrkFeXh7//vtvRXdVBD1JVPswMjLCiePH4fv2LdavX49Bgwejbt26MNDXx5o1a0THOTk5ISAwEBkZGQgKCsKkSZMwYvjwMoP570hwcDB8fX3Ftvfu3RtsNhv3JTz5mpubSwzq0hAT87PM/e/evYebm6vU+c1sNhtTp07F9u07MGb0aDx+8gRsdn7oDAwMhKura6XNJfxWAZrFYoHD4eDd+/dITEoSe9Rp0qQJfvz4gUePHmH48OGwsrICi8Uq95zNaDMbmhIYGhpi2NChyMnOxr79+5GYmAhvb284X7smOobBYEBVVRUMBgNTJk/+z4VpayspKSmI/PJFbLu5uTnk5OQk7mvcuLHEc1EUBS8vLyQnJeHmTQ/Y2trixg1XZGVm4uHDh/Dx8cGF8xewevVqvH71CsnJyXC+ehUNjI0RHByMwMBANGxogtatW+P48RMAgFu3bmHSpEm4fSs/Y+vYseNYv34dgPwq4snJyXj//j3+WboE+w4cgNdzL7DZLHz+/BltWrdBo0aNsLHA0/3JkycSs0hk5bcK0E2bNsXYsWNx/vx5pKakiAVoNTU1qfON4+Li8PPnT+KlqL87fD4f3t7eUFJWRicZ73B+J8aOHYuxBSl323fswLevX0X7lJSVsWvnTrHxUhrZyc3Nxa7du2FpZYU8QX4gzOJmoUfPnjh46BBYTCb6WPfBhIkTMHbsWFhaWiKbx4OQonD02DE0MDYGm8WCUCjEt29fMWDAANz08ICenh6uuVzHgAEDEBAYgODgYAAAPzcXVlZWuHzlClxv3EBCYiL2HdgPADBr1gzyigqgKArhnz5hwIABcDp9GkqKihX2emtVgM7Ly0NmVlaZx0yaNAnnz5+H7ahR8Hv7VvQoQkr//v0RGBSEWTNnlttmIbLkP9Z0P2ChUAhudjYGDRqEjIwMUBSFrKwsMBgMUTURK0tL7Ny5E0pKStXc2+pFGhsCmv8Gh8PB7Vu3im07c/q0xGNvFFlgZmdnh33Hjxfbv3///mJ/DxkypNjfT548wZHDh9GyyHzB6VLaul7kycmuAj8HtSpAe3h4SFwWKomgoCB07tIFL1+8IL6DcXFxweeCx65TTk5wKuVNKYlQKCRet79161YIKYrYk6Cq2LBxI1xcXIr9+PTq1Qvv3r0TLXt+8PAhXnp7Y8vmzRg0aFB1dVVmHjx8iMgid741hby8PAgEguruBk01IgrQFy5cwMuXL4nEP378wI8fP5Camiq1Ji4uDjk5Odi6davUGoFAgEWLFuHx48fo16+fVJqU5GScPnMGe/fuxaxZs6R26nNxccGMmTNhoK+PoYTLryMiIsBiMoleW3x8PCiASPPhwweifsnCmzdvsGz5ciQnJ6Nfv34YZWsrGh6Sk5NDXl6eaBXW0WPHcOrUKaxeswYnHRxw4fz5apn8dHd3R2RkpNTHR0VFAfj/57im8ikigujzAQA+Pj7EmsDAQCgqKsLPz49I9/r16zLb4nK5ROcD8vPF3759K7bd39+f+HUB+dkWpLoXL14gKiqKuIiHLG19/PgRo0aNEtsuCtCTJk2SuDy6LHx9feHr64sFCxZIrXFzdweXyyXOjOByuViQlobdUuaeRkdHIzw8HGv//Rev37zBv2vXomPHjhKP5fP5ePPmDVatWoWPoaFIT0+Hm6srevXqRdRHNzc3ACByVLty9SqEQiHR9XBxcSk2GVXR+Pn5Yek//0AgEMDdzQ2dO3cuMyd8zerVGDN6NC5fvowNGzdiytSpOO3kRGxf+18ZNmyYVEutC3n58iVMTU2l/tEvJCMzEw4nToht19bWxsRJk3D0yBGxiaJRo0cjNjYWL1+8ENMNGDgQfB4Pjx49KrY9NzcXLjduoEnjxsTfl8TERGLN5YIFH6TXIy0trcy2fH184OPjU2xbZmYmuFwuDA0NYWJiIqbp1KkTzDt1Etv+7ds3mbKqMjMziXW7d+9Gv379ig1xVFZb7u7uf4ZZUiFGRkZ48eIFJk+ejLuenujZqxcGFzx+c+TlsWnjRthv24bMjAxk5+TAw8MDLBYL69atQ+jHjzA0NKzmV1A9REZGYuGiRWAwGLh48SIGFuSJUxSF2NhYsQK3hoaG4HA4MDU1xerVq8Fis7Fx40bcvn0bEydOLDdLproxNjZGmzZtiDSpqakSXer09fXRqlUr1KlTB7m5ucX2mZmZQVlJSeSiWJQmTZqAl5ODwMDAYtv5fD7wGyxmMZcQbN+/f4+goCD06NEDTUo4StL8n982QBfSsmVLjB49Gh63buHcuXOi7RcuXACTyRQFkBbNm2PMmDFYu3YtdlThEtwunTvXmJJXAoEAbu7u4PF4uOnuXuwJIisrC0OHDSu2eEcoFCLi0ydRwQY2m401q1fjyuXL2LZ9O+rVq4feBIUZaGhoivNbLfUujUaNGsHh5EnwcnLAy8lBclISzMzMsGrlStG2oKAgYpPtiqB///5lrmasSpycnODg4IBmzZqJDe/Ex8fj4IEDouuVnpaGU6dOSUxDfPPmDdTU1HDX07NM5zEaGpqy+e3voCWhrKyMDyEh1d2NGgVFUaLH8h3bt4vtNzIyQoMGDUR/x8fHo2WLFhKHMJSVlTFw4EBcuXIF06dNQ/PmzSuv4zQ0vzF/ZICmEScnJwdHjh5Fw4YNJY4JlswnDw4OhpWV1R9p+KOoqIgREiqhKCspgcViYdiwYRCUyInX1dWFooIC5CV4TBjVr488gUDsnNlcLhxOnarYztPUKugATSNCKBTCwMAAdevWLfO4zMxMJCUllel9Ym5ujhs3bmDvvn2iCiO/CwwGQ2JFFUVFxfwFPCoqYouW2Gw25DgciTq2nBwYTKbYvpo+wUpT+dABuppxcHQEJRTWmpJXFEUhPDwc3bt3L/PuefGiRbC3t0d6enoV9q5q4HK5OF9kwrkQfX19LFm6FJcuXhTL4pg3fz6io6Jw584dMd2EiRPBy8mBi4tLse18Pp+utvOHQwfoaiYqKqpWfQn5ublITEwsNzc0KyurxmSn0NDUVv6ILA6aiiMtNRXx8fHgcDhlHjd7zhwkJSWhSSmuZDQ0NOVDB2gaAPnjqhoaGvD19YV3QfkeSYSFh2Pw4MFSn3fChAkV0T0amj8SOkDTAMivYDFj+nTk5uaKrRYsSreuXekiAzQ0VYRoDNrFxQUBBUUTpSUqKgrR0dFEBtXx8fHg8Xg4cOAAUVt8Ph8fPnwg1r148QLJycnQ09OTWvPy5UukpaURaYD/l8gqNOGRhrYFy4xJXlfJJcEVRYsWLaCiooJZs2fjcznVzsvC0dER169fx+jRo9G0adMK7GHZeN67h/j4eKmPj4yMRGpqKuLi4qTWGBoaYtSoUdguYbUpg8GAnJwcNm/ZIrZPTk4OJiYm6NK1q9i+whTG9h2Kl0zKzMyEo5MTIr9+Jf7c+/v7E2vevXsHJSUl4qrUfn5+xG19//4dsbGxREZrABASEkLcFgC8fftWptiRkJBAbPsgS1vBwcESnSBFAdrS0hKdJJiTlEVgYCCCgoKILCZPOTkhPT2d2JYyOzsbvr6+6Ny5s8h4ZfXq1SKv5jZt2mDG9Olgsdmw7tNHpIuNjUWPHj1gamoqdVs/fvwg1gAQjcva2NhIrSmse2ZtbS21hs1m49z580R9kwYrKytss7fH0n/+wYoVK2Bvb1/uWHNJkpOTsXnLFpg2bIjZs2ZVaapYu7ZtiT5Xfn5+iIuLI9IoKCggIyMDhw8fFtunq6ODadOn4+CBA8gtcdMyYcIE/Pz5E0+fPhXTDR06FHweD5737hXbzufxIBQIoFenDvH3JSAggFgjFAqhoaGBbt26EelCQkKI2/rw4QPCwsKIdd7e3jJZ2oaGhhLrYmNj0a1bN+ISZbK0VRgHSiIK0HXr1kWjRo2ITpqcnIzY2Fginby8PJhMJnFbXC4Xfu/eYeWqVXj+PL8CL4fDEeXsBgUFYdHixWCz2Rg6ZAg2bNiAFi1aQEdHBw0aNCBqTxYNAFEVBhJdSMGKRhINqf0hCebm5mjdujX27d8PMBiw37pV6iCdmJgI21GjEBMTg8OHD6N+/fqV1k9J6OnpEV3Hwjtn0vc5NTUVSYmJYtvl2GxQFIWkpCSxNLvc3Fxkc7kSdTweD7ycHLF9fD4fFPJXZpL2UUNDg1ijr68PLS0tYp2mpiaxJj09HSkpKcQ6dXV1Yg0gWx91dHRgZGRUJdcjJCSk9rrZ/fr1CycdHBAdHQ2BQCCq7da4USNMnz4dALBlyxZws7NFwyfPvbywdOlS4D+keqWkpCA4OFjqO4rnz5+je/fuMrdXE9DU1ITDyZOYMXMm9u7dCx6PhzmzZ5e7XNvZ2RkOjo7w8vLCxIkTYUPwREBDQyOZGh+gY2Ji0LtPH3z+/Bk9evTAaScnkXtaUdatyy/ySFEUunfvju3bt2Pt2rVgs9lE/sxFSU5OxqNHj9CqVSsoKCiUWQp+z969OHT4MHGAjoyMrHH5wqqqqjh39iz+WbYMp0+fhoODA3r37o3ly5YByL/TSkpORm7BZKKvry/W/vsvDAwMMHHiRKwtUtmahoZGdmp0gObxeOjdpw8iIyOxZ/duLFmypFwNg8HA0CFDYGNtDVtbW3jeu4eMjAyZ2hYIBKAoCi9evEDr1q1hZGQk8diUlJT8x1GhEHZ2doiPj8ecOXOkasfp9GkIhUIsKwh+NQVFRUUcP3YMvr6+WLxkCe7duwdPT08A+Y9+qamposlhOTk5mJqa4pSjY6UOv9D8GQgEAiQlJWH0mDGimp0P7t+HqqpqNfes6qnRAdrV1RVfvnzB9m3bSg3OsbGxcHd3h4KCAqZNmybarqioiDt37kBBUREjbW3hcfMmkTG7p6cnBEKhyAf5Wxk16wYPGSL6IKWlpxNXYKjJmJub4/WrV7hy5Qr4fD6yuFwcPHgQixctEhWNpX2faSqS/fv3Y2XBMGYhN27cwNSpU6unQ9VIjQ3QUVFRmDZ9OoyMjDB69Gix/Xl5ebh58yaePn2KWbNno6GEsjkAcO7sWcyaPRuurq5EAdrQ0BBb7e2lmsH1vHsXs2bPxs+fP6GhoQErKyup26ktjBs3DkD+TP/ECROgoqICJvPPTKNXV1eH/bZtYtsL0+w2btokto/D4cDY2BhWnTuL7Sssaty2Xbti2wvT7CqLr1+/IjIyslp/XL//+AGfN29Ef4d8+IBtEq7t+QsXiBZI/S7U2ABtt3o1cnNzMXnyZLGhhby8PLi6uiIyMhI7d+4U3clJYsyYMdi4aRNOnzmDefPmwcDAQKr2zc3N0b9/fxw5cgQ21tZISEhA/fr1JRoEqaqqoo6uLmJjY7FkyRL8+vWLOIe6tsBkMqGmplbd3ahWMjMz4STBBlRbWxtjx42D06lTYmsDRtraIi4uDt4SCjP3698ffD4fTx4/Lradx+NVmE+LQCBAaGhosW0xMTFYs2YN3r17VyFtyNKna87OWLFyZbnHPnv2DN179EBCfDwsLC1Rv359nHJ0LNNR8Xegxgboz58/g8PhYJWENy8qOhqnnJxw7uxZMJlMCAQCMJnMUt3VJk6YgHXr12Pv3r3Ys2ePVO37+vri58+fYLFYYLHZ6GhujqdPnohNAlIUhW3btuH169cA8rMZXFxc4PX8eam5jUUZPnz4f8o0oal6BAIBoqOjxbbz+XxQFIXv37+LpdnlFFShkaTLysoCLydHbF/h+f4rQqEQCxYsgIOjI1gsFoRCITgcDgQCAdq1bVf+CSqJjIwMqYJzIR8/fgQAJCQmwtfXF2NGj4atrW1lda9GUGMDdFm8ef0aaqqq8PHxwbXr19GqZUssWLBAotcukL8Ih5QpU6eKAn7h5FhERESxAC0UCnHh4kWsW79etO39+/cAgN59+kis4FySDu3bE/eNhoYUV1c3jBk1Cq3btMEr71e46XETly5dqtZJXTk5OXQyN4ePry+xVl1dHXUllFv73aiRg4iPHz9GcHAwDPT1Jd4Ve3h4QN/AAIMHD4ajgwN8fX1x+/btcs+bnJws3SMjgyFVpRChUFhsYpKGpqYix5HD8RMnMHfuXMTHx+Ps2bMwNzfH8hUrqq1PysrKePDgAZ4+eVLqzVVpdO3aFZYWFpXUs5pDjQzQWVlZ4PP5+HvBAomr2EwbNQKbxQKTyYSSkhKMjIzg4eFR7nlvenggOzu7wvrJZDJx5syZCjsfDU1loaiggMGDB8PV1RXy8vJYsmQpxo8fDyaqt2SZqqoqunTpAgvCYLtv795K6lHNokYOcRgbG0NHRwcbN27E3/Pniy0Q6du3L06cOIG8vDwwmUzk5uVhzJgx5Z538uTJUFJSKr8DFAWKosq9i2YymRg6ZEj556vFeHp6IiUlpbq7USbVNclVW2AwGPDz88O6f9dBRUUFh48cxsmTDhBSQhhV8XJ8SXz58gWPS0yQlseDBw9kWvJd22BQFEUdOnQId+7cIR6PSkhIQGJiIszMzKTW3LlzBxmZmRhbTkC9c/cusrKykJKcLBags7OzsX//fpiZmUFHVxefPn3C2DFjSs3mePLkCfpYW8PMzEyqMd/g4GD4BwSIBehhQ4eKJcsLhULcun27WGknJpOJPr17S5XJ8dzLCyhY/SgtUVFR8HrxAitWrMDMGTOk1snC0GHDiN3NqosunTvDpJR0S0n8+vULXC6XSNO4cWOsWbMGaWlpYvtYTCZU1dQkOrSpqKhAIBBIfIJTVlYGRVHgcrnFtufk5KBzly6Ii4uDjo4OTIyNJa6ilYSvry/Mzc0B5E9kv/J+hdy8XHTu3FmU1leSyMhIyMvLl1uTsiR+fn7oUMKJrzySkpJEXhxeL16U6gCpoKAgurt+9+6daNGZpqYmBg0cKHV77969Q3vC+Z6QkBDUrVsXmpqaRDpZ2oqOjsaiRYvEVj2L7qBXr16NHj16EJ3U19cXvr6+WLBggdSa9h06IDIyEuck1HQrSkdzc4SEhCAjI0MsQCsqKmLZsmWIiIgAk8nEhPHjy1yGffDgQTCZTIyytcXGjRvL7eOOHTvQoUMHnCqRg3rt2jWx6tZA/sRgt+7dRV8wRUVF3CvhTFYazVu0gFAoLPd6FMXFxQVeUkxAViRubm5QI1zJde7cOUyZMoVI4+rqilatWhHfHR05ehTHjh4ltpX98eMHxo4dS9RWZmYmLl++LLZdS0sLo0aNwjVnZ+QJBMX2DR06FPG/fuF1kZzfQqytrcHn80UmYEVpaGKC0aNGwfHUKXz/8QMtWrbEpo0boaOjU2YflyxZIrK8FAqF0NXVhbKSMo4dPQqNgoBDURSSk5Ohra0NALh8+TK0tLTQr18/qa5DIStWrMDu3buJNO/fv0dQUBCmTp0qcbJPSUkJXC4XO7Zvx6JFiwAA7u7uGDd+PHg8Hlq0aFHqdyYvLw/JyckA8heyrVi+AjY2Nti3bx9RH3fv3o1+/foRLzyzs7PDDgl2tGXh7u5eu8ySRtna4t27dxgwcCDu3L6NOnXqFNsvLy+PFi1alHse71ev8Or1a9SvX1+q4FzIgAED8Pr1a3woSO0pi3bt2hUL3KS2rbWBrl26QEtLi0jj5eWFnj17EmmCg4PRsWNHokVFAHDz5s0qyz3Py8vDl8+fxbZn6etDKBQiMjJSLM0uOzsbKSkpEnUWFhbg5eRI3JeakoKFCxdi6dKlOHjoEHbs2IGLFy9i6dKlWG1nJ1UqJwAoKSvj69evxexf/fz8MGPmTARVkr+4tEyZPBk7du4U/T1+/HjMmjkTAwcNwoGDB0UBetiwYRgzejSMTUywaOHCUs934MABrLKzEw1Tjh09ptYuqqqxvV62bBm2b9sGf39/PHr0SObznDt3DhRF4cTx40S6pk2bFvsB6NatW5lj0oUfIgDEEx40NOWhp6cH+61bEf/rFwYMGABHBwfUrVcPjo6OiImJKVefkZEBfQMD6NapI/rXu3efcnX/hRcvXmDw4MHQrVMHlpaWpXribN68GStXrkRfGxsEBwXhtJNTqUN+bDYbGzdsKPVm4cH9B7hz5w6uXrmC+F+/8CsuDqfPnJb45FsbqLG9ZrFYWLJkCY4fP47Zc+YADAbGFyw3lgYej4el//wDJycnjBkzBn379iXuw6xZs+B87RoA4Py5c2Waz8+aORMXLlxAbGwsdMt5/CyKro4OhPRCFRopYDAY0NHRwZXLlxEeHg7na9ewZetW7N6zB7a2tpg1c2ap4+lKSkq4cvlysc/wyxcvcfnqlQrrX3p6OpSVlcFisXD4yBHY2dmJxtyTkpLw/PlzDBw4UOxGh81mY8f27URteXl5YdOmzTBpaIIvX74AAFbb2WHb9m3IysrCtWvXcPTYMRjo6cPB0QHXXVzgHxCA+vXrIzkpCQmJifirSROcOnUKaWlpWG1nh/iEBCQkJEBHWwfnL5zH7Tt3cOXqVWhqamLatGlwcHAARVGiubq4uDiwWCyMsrXFrdu3kZWVBV0dXSgqlj7cSkqNvYMG8ocxXF1doampialTp+LatWtl1ssD8sfV3rx5g4ULF+LEiRNgMhhYX2BFSkoDY2OwCtL5UE5GR/369aGmqgpTU1MsXrxY6jaWLFmCf5Yulal/NH8uf/31F9avW4fnz57B1tYW+/btg4WlJVavXg0ulys2nikQCPDwwQO0a9cOXbp0QZcuXbBs+TKiz2ppfP/+HatXr8bkyZOxYsUKrF69GitWrBCbEB1pawsvLy/weDzw+XyiUnklmTVrNho0MMIpR0dERkaibdu2sLGxQUREBBLiE2BnZ4dhQ4biydOnmDF9Bozq14empiZOOTqio7k5Yn78wNatWwEAC/7+G/fu38eK5csxePBgPHn6FHNmz0afPn3g7++PZk3NMHbMGHTs0AHe3t5YbWeH9evWIT4+HnUNDDF37lx0seoMb29vLFq4sEILVdTYO+hC2rVrhyePH6OPtTUmTJyIZs2aiZZ/jxgxQjQ5GB0djZcvXyI7Jwfz58+HvLw8xo0diyZNmsjctomxMezs7PDkyRPUk2Jme+3atXBzd5e5PZraAYfDQdu2bcW2a2hogMlkonWbNhCUCD6qqqrQ09eXqNPS0kJubq7EfeVl0JiYmMB+61bYrVqFefPm4cTJkzh46BD6lii7NmLYMFy6dBnGxiZQUlYCk8mEqakpZhQUvPgvxMbF4dr16+Uel5ubC5u+fcFisUBRFOTl5dG0aVN06dKFuE0mk4E7d+4gJDi/ItHgghJT/NxcXLhwAe3bt0f79u3h6OgIVzc3LFjwN/hF5gXq1qsnuhN++uw5nJxOoZOFBTpZWODY0WNwdr4Gu9V2AIDOXTqDzWZj0qRJ2H/gAFq2bAk5OTkYN2gASytLfPv2DUeOHAEAtG3XFvfuS5cgIA01PkAD+alNz54+RZu2bREaGoqJkyYBAIzXrRM9smVmZuLXr1+iclpnz5yBhYUF8exyUZhMJpYuWYI5s2dLNckgJyeH0aNGydweTe1AXl4efSVkOrBYLLBYLFj36YOSg1YaGhr5plolJrsBQE1NDRRFSayWLinroyQMBgNqamq4dOkSoqOjcfToUURGRhbbP2/+fFx1dsaceXNhZGQEJpOJ7CwuXr1+JXXqXlntS0tubq5oApXH4+HQ4cMyBeiDBw9iyODBsB1li4SEhGL7iubtHz12FL3KcesTCAXFUiMvX7lczHVw165duHDxYrFU2kI+f/kC25G2cHN3Q2cZXkd51IoADeRPkowcMQJDhw1DVmYmPO/dw6VLl4ods3HjRpg1bYpRFRgktbS0iLMXaH5vMjIyJI6Z6uvrY8nSpdizZ49YFse8+fMRHRWFO3fuiOkmTJwIXk4OXFxcxPb5FhRIlhYjIyPs3LmzmH86RVHo3bs35s6dizZt2sDGxgZsNht2q1ZhlO0ovPV7S9RGSSgZHfcUFRXLzMY47eQE+VLSZ/X09CAQUpg4cSIcizgLsllsbN60GSNHjgQAOF91BotZduFiJpOJXTt3iRa71atXr5hm5cqVGDt2LAICAtCuRH7z+XPncefObTRr1qzsFysjNXoMWhJDhwzB+PHjceb0aXCzsor9+3ft2goNzlWBj6+vqEo5DU2lwWBgwoQJGDNmDDQ1NaGqqopZs2eDn1v2nI40dOjQAdysLJw7e5ZIx+Fwyrx7Hj16tMSVuuHh4Rg2dBi0tLRgY2ODrMxMPHnyBADQs0d3JCYn4fTp0wgPD8etW7fAZDJx8sRJRH6JzC8+/fYt4uLiRHfelp0skJCYiAvnzyPq2zdYWFhi0MCBkCuwmfDze4e8vDy4ubkBAD59+oTw8HDExMRg8KBBMDc3x5Ur+ZOtHz58ILoG5VFr7qBLwmaza23qTFE8PDwgFAqxnXAWm4aGBBaDCV8fXzRt2hRZWVmi4FUR3yEmkwk2m40oCVaqZbGSwGq0ED6fjzVr10LfwADTp0+Dvb09GjVujKfPnuHBgwc46eCARQsXwcnpNO7evQtLS0sYGBrAzc0dGzduwLlz5/Dz509oa2tjlZ0dTjs5wfGUI1YsXwGHU6dw5+5dtG/bFucvnMegQYPQsmVLfPv2FQKBAA8ePIC5uTnWrV8PBhhQUVXFr/hfEAqFuH7dBebm5uX605NS+yMcDQ1NmTAYDOzduxfz58/Hvfv3kJScjOfPn0NNVRWXL4mviJSF2NhYrC9iuysNjx49wmo7OyINh8PB+fPnRX/PmjVL7JgzZ8UNzJSUlGBhYQELCwvMmzev2D5NTU2cchIvwDBo0KBiKwkLPd8l8fjx/9dq2BG+prKgA3QtRigQiI11VjQ1reJ4TYDBYEicNC4sGsFkMsX2MwosbCXpyttXEf2dMHECsrIyEfLhA3R1ddHMzAydrTqjX3+yZd2lcfTYsVL3sdlskWeM96tXCA4OBvB/73Sa0hEF6I8fP5bpZyGJDx8+4OvXr3gjxUxzIVlZWRAIBEQaIN84JiEhgVgXFRWFgIAAiQY2pREdHU2sAfLHxgAQ9TE7OxtCoZBIExERAQA4fvw4zhCO+5FSaAr09u1b4vJC379/J36/vn37Bg0NDeTk5BDpYmNjidv68OED4uPjiXSqqqowMzPDBgm2AYWP+mv//Vfsh01RURFGRkboWGBgVJTC710LCZ4Pa9euxbt37/D9+3ep+whIvh6tWrdGq9ati20rekxERATU1NQkZpOURWHloZIUXoMRI0Zg8uTJAPIrCI0bPx7JycnIy8sjfs9I369CYmJiZIodgYGByMrKqvS2wsPDJaYE03fQ1cyc2bPLXQRTElbB+DuDyRRVEy8KRVHIlbSgh8GQ6K9dFgoKCsjJyamQO7nfBS6Xi9MSirlqaWlh7LhxOHv2rFge9IiRIxEXF4dX3t5iur79+oHP5+NpwURXUUKCg9Gnz39bki0UCjF40GAkp6ZATk4O8vLyyMnJgRybjdu3b0tnwVsOkyZNwnUXF/B4vPw1COPGYfasWVi3fj2Ui5xfVVUVt2/dQnh4OD5L8B6hKY4oQDdr1ozYQ4LJZCI7O5tIV7gUlLQtLpcLXV1dYt2LFy/Qpk0bNG3aVGrNs2fPiDVA/l0LQObFERcXR6yxsLDAt69fcayUx8qsrCys+/dfse2amprFynNJy/jx49GhQwfidMP79+8Tv1++vr5o1aoVsVmSgYEBcVt5eXlQV1cn1qWmpkq0x+TxePk1CaOjS61JKElXWJNQ0r709HS0b9+e2AK06PUQCoWgKApzZs3G2HFj0aNHD3h6euLChQtYuWIl/N75Aci3G9XS0iK+Hjdu3IC1tTX837/H7Tt3MHzYMJiamgIAdLS1UbdePbFzcjgcUBRF3FadOnVk8rpxd3eXKXa0bt2a2M1Olrbi4uJql5sdDQ1NxaGopIRVdqtEXh39+/eHoaEhpkydKjomODiYyJe8JE2bNiW+qaEpm1qXB01DQ0MGg8HAyhUrMG7sWPj4+CA4OBhPnz7F5EmTkMfPRXBwMOy32ov8o2lqDvQddDVTsooGDU1FQ1EUNm3ZjNTUVPQfMEBsPqFHz57I5nKJJ2ZpKh/6Drqasd+2DVsKXLVoaCqC4OBgsR9+DpuNbl26IjoqCkmJiWL/jh87ViGThTQVC30H/RuiqKhYahoYzX9HTU2t1OsrJycnMc1OWVkZRkZG6NCxo5hOUVERQH75s5L8K2GyVxIURSEmJgbjJ0yAv78/ehcxCGIwGHjv749FCxeiWbNmEFIU2CwWhg0digMHDwIApkydiuxKuIM+duxYmT7qNGVDB+jfkNzcXLgX+AYURUVFBSNtbauhR78X2dnZEq+vhoYGBg4aBA8PD7E0O5u+fZGYmIj3EiqQd+3WDbm5uXgjYaWaNKloSUlJmDNnDlwL+nTx4sViKXsURWHtmjW46XELTCYDW+3toSAvj1UrV0FJSRnbtm8DkP/DU9GQFlylKQ4doKsZi06dKny1Xl5eHgIl1JnT1NTEyApt6c8kNzdX4vXV19dH/wEDEBwUJJZmZ9W5M+J//ZKoa9GyJXg5ORL3JcTHl9mXK1eu4MTJk0hKSsKWLVuwcMECqKqqirng3fTwgLPzVfTp0wfKyspgMBgwa2qGlatWigI0Tc2DDtDVzODBg6u7CzS1jJycHHh5eWHtv/8iNjYWVlZWuHTxIupJqI5diLyCAlq3bl3sLjkjIwNCGa1CaaoGOkBXM4VLqWloyiMtLQ1BQUE4fOQIHj9+jJ49e8J+61bYlKieIok62jpYuHAhDh48iJiYGFy6eAmfIj6hriHZAhiaqoUO0NXMrt27IRQKMWXKlOruCk0NRSAQICYmBtOmTcOLly8xdepUUX1BaWAymXjj64NOnTqhTdu2EAqFYDIYaNOmDe7cFS8gQFNzqJYALRAIEBAQAEVFRfz1118SjwkPDy9WdLJkAUogfxls0dI+AFC3bl3o6uqK/tbV1cXXr1+L5XgymUy0atWqmC45ORnRBX62P2NjERoaCj09PbFJjpCQkGLFLlkslmgpaKGZUFxcnGgJdyGNGzcW84kNCgpCTk4OsT8GgDIfZ5lMJgwNDcW2k5odFdKgQQOZZuL19PSINTo6OqKsBhJIl0ID+ZkVpMZAQP57Lun6amtrg8FgwMDQEHklxqDl5eWhoqoqUaekpAR2KedUVlHBSQcHbN++HSYmJsiWMW9eUVERQUFBAPKHNiIjI2l/lVoAg6Io6tChQzhw4ACx0XR2dja4XC60tbWl1nyJjBQFSwV5edGa/bKOA/JnojU1NIp9ETMzM8VMwvX19aFdxDNi6tSpOOXkJHKaA/KzGdJLDC1cunQJkwoctwq5fOkSxo4dW2ybgaEhfv36JfpbXV0dKcnJxY7ZunUr1m/YUGzbK29vsfX5qmpqyMrKwl9//YXQjx/FLwLNHw2Xy0Wjxo3zfRqEQtSpU0diTUNJxMbGwsDAoPjGgoCcmZGBqOhoMJlMmBVZmp2amgo2mw0VFRWifsbFxYkKsEpLTk4OsrOzibM8YmJiZPoxlqWPiYmJUFFRIXb5lKWt9PR0HDhwAMOHDy+2XXQH7eDgQLwO/+3bt3j79i3mz58vtaaThQXCwsJgv3UrdHR0xAJgIdeuXUN8kRlsfm4uQj9+hKOjo2hbdHQ0PDw8ium6du2K1kUsFZlMJgIDA6FX5IPNZDLx5vVrsNhsOF+9CiA/Valb164A8u92NTU18eD+ffi9LV6vbdmyZXj96hWSkpIA5N9NLV+2DACwfMUK3PP0ROjHj6JzAUDDhg2Rl5cnOq6Qjh06QE9PD+3atRPbBwCLFi+G1/PnCAgIENs3a/ZsRHz6hGfPnhXbbmRkhLnz5uGuhNp3SkpKsOnbF6vt7MSyDKZNn45fcXG4e/eumG78hAkAReHyZXFz9x07d2LP7t1ITEwU27dx0yY4OjggJiam2Pa+ffvCwMAAZyVYpXbp0gUtW7bE8ePHxfYtX7ECtzw8iv3YijStWuG4BPOoNm3awNrGBrt37RLbZ2JignHjx2Obvb3Yvr///hsfPnwQu74mJiaYOHEitmzZIqbR19fHosWLsWH9erHrO3fePERHRZV6fXk5Obhx40ax7bm5uYiPj8eAAQPg5uoqpiuLf/75B/v27QOQb5ZkaFgXtrYjkZSUhJseHjh6+DBevX6NDyEf4OObn/Fx5coVaGlpoW/fvkRtrVq1Cjt37iTSvH//HsHBwcRDe3PmzMHJkyeJNACwZs0abNtGlq2yd+9e2NjYEJslydLWzZs3JW4XBWg2mw05OTmik7LZbLBYLCIdg8GAvLw8li5dWuZxEyZMKPY3l8vFggULirVlampa7nkAwKxpU+iUuMunKAoURYlmsTU1NUW/5r169UIDY2OcOX1abJZ79qxZUOBwig2tFD1GSFHQ09Mr9njfpWtX6Ovri52rTevWaNGiBQYOGoSdO3aId5yiICzSR2n2CYVC5ObmwsvLS0yiqakJm759IRQKxXQlr0fJfSitH8gfsiptn6S2hBQFCpCoKWtfmecrpX+F20j3UQXnlXR9S+17kfORXl9J+wQCAQCAyWAQfzeLfi+FQiEUlRSxb98++Pr6AgwGpkyditFjxqBX796i4wrLyP2XtqRFTk5OprYKFwORIksfCzVVcT3YbDbtZkdD86eSnZ2N4cOHg8FgIOLzZwwfPhyCAhtSmpoLHaBpaP4AhAIBmjVrjkaN/j/n4+/vX2wYkabmQQdoGpo/gPETJmDfvr3F/Fj4fD7WrVtXjb2iKY8/IkDLy8tDXl6+2DYWiwUWiyW2HcgfD2IymRL3MQrKRknaVzhWWHKfXBnnk5OTE43Li7VVMN4msS0WC3Jsttg+DodT6vnkC2ajFRQUxIyTCuvpSdIVpthJ2le4XWL/C/pTch+bxSr9erDZYJbSf2Yp117W6ytXkN4osS0mk/j6FqZLynJ9WRL2VZS5FZPJxNEjRyT2l3Ryj6aKoSiKOnjwIPX06VOKFB8fH+rw4cNEmnbt21MamprEbWVlZVHTpk0j1lEURTlfvUqdPHFC7F9WVpZM56OhqQoyMjIojrw8NXjwYGLt4sWLiTWXLl2iPD09iXXLly8n1rx79446c+YMsW7GjBnEGoqiqFWrVhFrdu3aRQUFBVVJW25ubpSrq6vY9j/iDvrLly9ISEgQ255XwnGskAMHDmDAgAESq+yWxe3btwEAgwYNklpzpyAdbuDAgURtLV++HHv27CHSRBWkec2bN49IN3v2bOzcuZM4Z3Xnzp1YtWoVkebkyZOwsrKqktSmN2/e4OfPnxgxYgSRLi0tDbsk3Hnq6elh3vz5sN+6VSzNbsbMmfj+/Tse3L8vphs9Zgx4OTliqVb83FxRJgfNn8kfEaBJycnJkclEpuSXsrI0gGyVWIRCocQq4OWRmZkp02y/LBU6eDyeTEFJluuRl5cHvqTq5+VAUZTEla05OTmifSXfV4FAgLzcXIm6vLw85OXlie2TpW80vxe0gzsNDQ1NDYUO0L8R2dnZyM7Oph+LaWodFEXJ/DT5OyMa4qAKVjORUKgh1QkEApFxi7RkZ2cjJSWFWAcAv379QlIJvwwg3/hIku9AbFwcYmNjSzVyKo3C60ByPWTRFB5fVBMVFYWWrVohKysL+/btw+JFi0rVyDJc8V8+H7JoSHSJiYlITEwk/mx8/vwZv+LjiXUZGRlIkLC0naIoBAcHIz4hQWx+Izw8HLGxsRJ1EZ8/g8/jie0rDFgU/vvng0RTGW1xuVwwmUyRr0XJtrhcLo4cPYqVK1b857YqSleZ10OSRhIis6StW7cSm4LweDzw+XyoqqpKrfkVH18rfikVFBTEloeXR+E4KEnxTVk0QL77nlYRU6jEpCTRmC+DwUBdCc5oeXl54HK5xKWNkpKSoKGhQexol5aWRuygl5GRAXl5eSKHv4zMzN/aV1uWz2JKSgrxpG5WVhaYTCaxm6A0bfF4PFFqKJA/vs7n80U3SEKhEFlZWeXGkqSkJCJztkJSU1OJnQvT09OhoKBA7DYpS1tcLheOjo6lmyVdvHgR3bp1Izrp27dv4efnR5QVYGllhbCwMPzzzz9EbVUle/bsQZ8+fXDN2ZlIVzgLP3ToUKk1hWZPQ4YMkboNp9On4ePjgwEDByI6Ohqenp7FrCOFQiH69++PgwUFQQv59u0bbt26hYULF0rdPwCYMmUK9u/fX+wHQRq2bt0qddHTQo4ePYouXboUM7wqj2PHjmH5ihUYMmQImjdvTtReTYbP52P//v3o2bMnbri4EGllyfK5evUqtLS0pCoAUJTVq1dj+/btEvclJyfDx8cH2tra6GNtjUaNGsHDwwMJ8fEICQnBpEmTcPToUTx6/Bht27bFtWvXsG/fPthYW0s839y5c3HixAmi/gH5xXe3bt1KpNm3bx9sbGzQQkIx34puq6TpWyGiAM3hcIjvoOXl5SEnJ0ekYzKZ4HA4mFqDDeoPHjwIFotFfD2KLlSoLM2ixYtFKYMODg4AIObry2AwcOXqVdwrktLVpEkTbN2yhfj9AiC6FqQ6WdoqXJhDomMX3JV169YNgwlSHGs6WVlZ+Z/FIkMD0sJms2X6/MoSB8pqq06dOggLC0PPnj3Rr18/3LlzBwoFC5sKPx9WVlZ4+uwZFBQU8heClfG5keV1yaqT5bMoa1scDoc2S/odyMzMlPq4osfWq1dPpg82Dc1/gc1mQ09PD38vWACUMjZraGiI1JQUnD9/HvXq1oW5uXm5583KykJISAgoisovgGtmhuSUFMTFxhY7TklREa1at0ZcXBx8fHxAURRYTCbatW8PAHj37h0oikKDBg0QFRUFiqKgoKCANm3aAACCg4ORlZUFIN9HvvBu+v379xLTIDt06EB0fcqDDtC1DBsbGzx58gQZGRlEOh1tbeKxZxqaimDixImYOWsWAGDYsGFicxl169aFkrIyIiMjMWfOHAiFQnC53FLnZXJycrB2zVq4urrCwtIST58+waCBgzBu/DhMnz4deQIB1qxejff+/vD3e4eX3t64fv06wkLDoKKmCv/377Fq1SrMmTMHNjZ9kZGZgT69ekNbRwf379+DUEjh9etX4GZnY/bs2Rg8eDCePXsOBgPw9vaGsbExzp07h9u3b2Px4sV47++PCxcuYMHfC9C2bdsKvXZ0ml0tw83VFffv3ycuJ9W+4I6BhqYqSUtPx/Xr1wHkD4mmp6dj3PjxomG66OhoHD5yBI8ePQKQb/5fR08Pe/buLfWc15yv4cKli3C54YJr15xx/fp1nL94AWGhoTh27Bg0NTWxaNEizJ41C9Y2Npg7dw4aNGgAVzdXPHr4EKtWrsLqNWvw5fNnnDh+DPLy8qhXrx4uX76Ec2fPIT0jHVFRUTh08BAWLlyEK1eu4OvXSCQmJqJZUzPk5eXh4MGDsLW1xaJFi9Cvb1+oqqri4MEDpfrVyAodoGsh7du1Q7NmzYg0M2bMqKTe0NCUztw5c0Sl5Hg8Hp48eQIvLy9RVZw3b95gmYRqQmUhpIQwMjISDYXIyclBjs1GXon8fysrK+zZuwd5AiH69u0rqvmooKAgKngxdtw4qKurY8LE/AIhgwYPgr6+vqiAwvjx40TnU1dTBy8vPwONz+fLtNqYFDpA10Juenjg6dOn1d0NGppqQSgU4uvXr3j16hWA/EBsaWUFRinuf0KhALdu38aPHz8AAHPnzYWikhLy/RZLgcGAkBKKyrLJy8vj/oP7YDLy27hy5QpeSKhaVNHQAboWsn79+lL31a1bF5s3bRIzbCK9S6lMNm/ZgoampjBt1AiPHj+u7u7Q1DJYLBYyMjIQWzAh+O3bN0R9iwKLITmcybHl8O3rV9Gk+evXryHIE4BZJD7fv5ef8eTp6Yn4X7/ABANsFguhoaEA8tcQODo6ivK4nz55it59+lTWSxRRaycJY2Ji8KVIXUAdHR00MzOrxh5VDXfv3sXPnz9L3X/k8GEMHToUCQkJeOPjg+nTpyMpKQkmJiZV2EvJZGdnY+TIkXjw8KHo8fDChQvo07t3NfeMprJoLMER0tDQEJqamhAIBLC2toaOjo7EosOlMXjQYAwZPAR2dqvx9u1bvPB6gUaNGqFtu7ZYuHARoqKiYG9vDzs7O7BYLGzbvg2u7m4YPXoMhg0biksXL2HqlCloWiRenDh5Amw5NlxcXDB0yFBYWFpg2rRpcHI6jX79+qFjhw64fv067j+4j927d8PFxQX//vsv7t27h8DAQGRmZuLQocOYN29uhVy3QmpVgM7MzMS27duRlpaG6OhofPr0SbSvTp06aNWqFeQ5HKxdu1am1Ua1gQEDBqBRo0Z4//49gPyK4cuXLcOZs2fx9u1b1K9fHwCgq6uLwYMGwd3NDfHx8ejXrx/i4uKqtK93PT0REBgo+js7OxsPHjwodoybmxvWr1sHExMTJCQkEH1Rq4qYmBiRv4mDgwO6d+8usgHQ09Or8Imh34np06aJLdqw7tMHzZs3R1BQEDQ1NdHAyKjY+66trY3Ro0aVek4tbS2cPXsGz549g1AohKWlJTp37ozY2Fhs2JD/dFm02IGxsTEGDxqECRMmgKIodOzQEf0H9BflzwPAihUr0KJFC5ibm6Nv375QUFCAnp4eNm3aiPr164PBYOCGyw1069YNFy9dAkeeAyaLiezsbLRv3x7NmpphydIlmDJlckVdOgC1JEALhULcu3cPd+7exZMnT0RfiKVLl4qWpR4/fhze3t7Izc1F5NevsLW1xbixY4mXJ9cGzp45g6lTp2LQoEHYuHEjAOB+icBXSOfOnauwZ8X5+vUr3r59W+YxmZmZaNykCdauWYObHh4ICQmBqqqqKA+1uhAKhcjMzMTFS5dw6tQpUS4sAFwvsqpvzOjRGDJ0KNq3aye2YIgGUFdXR7euXeH14kWpx1y8eBFmRSa9lZSU0LRp03LPW3LFro6OTqk+4qamphg2bJjYdj6fD4qi0KFjR/Tr21dsf8+ePcXOyeFwcPjwYUyYMEG0bdCgQegoRf42KTU+QKekpODNmzdY+s8/0NTUxIQJE3CuYOC+KFu3bAEA7Ny1C0eOHMGWLVsAioKNjQ3q1KlTxb2uXAp/6QuDc00kOjq61IIIkrAvYrZ/19MTK8oxzalsnj1/LrIw4HA4Epf7Zmdnw/naNThfu4azZ8+iTevWxD4WvzuampoYM3ZsmQFaXl4eKioqUi/CqigEAgHmz5uP+Ph4/LN0KTq+eCHVk/eRw4fFtikoKCBYBiO38qjxk4Senp5YsnQpFBQUEB4WJjE4F2XVypUI/fgRDRo0wJatW0WzsDRlM3PWLJg0bCj61+Svv5AswQFQWhQVFWW+o1xH6N9R0YweMwaLFy+GsrIyIr98weeICAQFBor9CwkOhl/BE8LUqVMxa/bsau13TWXG9Oll7jc2Nib2AaoIGAwG/l33LyK/fMHdu3eJTZGqApGbnbu7O/GdZlJSEpKSkohKQz14+BACgUD0wS4LZ2dnbNm6FWZmZvD18SG6gHw+H8OGD8eDBw8wbdq0cm0Mi9K2XTtoaGigC+HwQGEaT7169SpVAwB+fn7FlpW+9PbGz58/Yd2nT6nOYpmZmYiJiSlmo/r12zcEBAQgLy9PbBmunJwcgPwZ7CGDBxOPtQYGBiIuLg5p6elEOmtra2gSuIF9iohAQEAA9uzZ85+8OHg8HsaMHYvQ0FBsWL8eI0eOLNcop9DHeMuWLbDftg0dOnTAaSenChmXzsrKgnmnTtDV1UXXLl2ItO/fv0e7du2INFFRUeBwODAwMCDSBQQElDkkJRAI4OLiIkqD69+vH3Jzc5GWliaavPby8kJsXBwYDAasLC1L/T74+vpKtRS8JIGBgUQGXAAQGhoKAwMDYmc6Wdr68eMHli1bVrqb3Zw5c2BpaUl00oCAAAQEBGDq1KlSaz4MGoTo6Ohyj4uNjcWOnTvRsGFDnDt7VmJwzs3NxdatW1Gvfn3Mmjmz2D4Oh4OzZ89i2LBhePrkCcaPG0cUBJs3b45du3ZJfTwA3Lt3DwDQr1+/Uo8JDw/H48ePsWv3blhbW2Po0KHQ0NBAXwnjX2Wxdu1a2Nvbi/6eNXs2fv78icWLF5caVKKjo/Hw4UP06tULV52dceLECTRt2hQTJ06EnJwc1qxeLTr20ePH8Pb2RnZ2Nq5evQr3mzexcsUK/P3331L3sdCJbViJD11ZUEIhlixeTORKd+bMGQQEBEh9fGk8fPQInz9/xsYNG7By5cpi3iXJycl4/fo1lJSU0K5dO5GNamGV99WrVyMtLQ0nTp6Ej49Phd4RNjMzI/4sbty4kXgIzN3dHRoaGujRoweRzt7eHmvXri3zmAkTJ2LEiBGwtLDAzp07ERUVhbCwMIwqmAzMzc3FxEmT8OPHD2zevBmNGjWSeJ6VK1cSXwsA2L59O1YX+XxLw4kTJ9CjR49yx8Mroq37EmpVAkUCtJ6eHoyMjIhOGhcXBy0tLSKdtHfB+w8cQG5uLq5fu1ZqwImIiMD5CxewcMECifvr6Opi/rx5mD1nDtasXYvz585J3U8lJSXi66GrqwsApeqCgoKwcOFCfIqIAAA8fPgQDRs2RF8bG+K2VFVVi2n27t2LpMREtGvXrlRPXYFAgPSMDCxesgQRERGwsrKCo4ODxFWJ06dNw/Rp08Dn8zFn9mwsWLgQx0+cQFh4OG66u0vVRw0NDVy+coXodYHBgIGBAdH1IPU9lkRMTAz+/fdf6OvrY87cucWCc1JSEnbs2IHAwEBk5+SgSZMm2L5tW7EnTiUlJSxevBhXnZ2xctUqHDxwAJ06dfrP/QLyh4tIPx9qamrEGh0dHeLvs7RtaWhowNjYGBMmTkSLFi3A5/ORkJBQTNe/Xz/E/PyJXr16lXoeFRUV4v4B+ZOKpDpNTU3iz6Ksbenq6tYeN7vQ0FA8f/4campqpf6SpqWlITY2ttwv58SJE2G/bRuioqLKNGCpaPh8Ppb+80+xwqneL1+KgnMhJ06cQJfOnUFRFBITE8FgMKCtrU08fttCyjvOAwfy/QL27NmDBVLcDXM4HHTv3h3ubm44f/48du/Zg2PHjmHu3LnFUpkk8eTJE3z4+LHU/WpqaqIf7KSkJJEz2e3bt6s0iyMvLw/79u2DQCCA640b0Csx1Ofv7485c+bA1NQUUVFRmDJlCm7cuCHmg25qaoorV65gwIAB2LJ1K27fulVlr6Gmo6amhj179sCsjLvRwYMHw9TUtAp7VfOpkZOEP2NjkZqais2bNkm0yMzLy8O7d+9gZWUlVRpd+3btEBcXh8MSZl8rC19fXxw/fhxnzpwR/SsZnIH8R+SVq1bh3Llz0NPXh1GDBvj69Wul9OnVq1dgMBgYOnRoseBMURR4PB4CAwNx69Ytke1iUUxNTTF16lTo6+tjwcKF+PXrV7nthYWFiU00slgsNGnSBIaGhvB6/hzxv34hLjYWkydPBpvNBpPJFFsFWdkIBAI8efoUbDYbZhIWO9WvXx+NGjUCg8GAkZERGpqaSjwOAKwsLcHhcJCRkYGfJawv/3RGDB9e6nUDgLZt29KOiyWokQG6PKKjo6Guri61v/H0cmaRq5vY2FhMLzAzysnJwevXryu8jezsbOzdtw/q6uo4fuxYsX25ubk4dOgQRtraYvacOejeowe+fPkidg4TExM8f/YMANB/wIBiTweSmDlzJrp37w4AUFZWRof27ZGUmIhRo0ahY8eOaNWqFYD8RQVnTp9GYkICthUZV68qnJ2dweVyUadOHYlPLkUnVTMzM9GyRYtSx5gVFBRw7OhRxMXFyVQ/k4amKDUyQJd1p5ueno7EgrFWemGA9Dx89AgBAQFYv26d2LAQg8HArFmz8Ck8HKEfP8LIyKjUSTc9fX3Y2dkhKCiozNxWIH94xN3NDc+fPcM7Pz+8efMGampqpb5vampq1VJUILcgX9vN1bXc9sPCwjB48OBSh3cYDAadC01TYdTIAF0yI6Mo6enpeOntjUOHD+PgoUOIj4+H14sXuHP3bhX2sHwsLCyQkpxMXGFBRUUFI0aMqPD+3CoYD2UwmWIBUk5ODhoaGqKqy/379UPPnj0lnocjJ/f/tEopKherq6uja9euaNKkSblj1tUNU8K1KcrPnz+hra1Nj5PSVBk1cpJQoYw7kHr16uGfpUtFf1+8eBHdunbFwAEDStUEBwdXaP+kgc1mQ11dHa1atYKfn5/Uuh7du1dKwrynpyfq1q2LyZMmlXpMaFgYzp07h7TUVHC5XGhpaZUZsN74+KB3796/5XL6kmRmZoLJZMLExARCoRDh4eFo0qTJH/HaaaqPGnlLo6CgADk5OZw5c0Zi3a+iGBgYQK0gJ7U0Tpw8CS0tLbEk8KrgWcGYrbQwK/ELLycnV2ZlbhaTCTMzM7x7/x4bN24Ej8eTeFyvnj2hpqaGjRs3Ei3nrqkoKyuDwWBglZ2dxNf848cPzJ4zB3PnzcNIW1uMGDECjo6OEtOihEJhjTR8oqmd1Mg76M5WVmjZsiWCQ0KQnZ1d5h2lx82bZZ6rsPKBmpoa0YrH/wpFUdi9eze+ffsmcb+CggJYLJZoBV/hD9H9+/cRFhZGtFCjomjSpAmaNGmCtm3awNLKCjt37pQ4JmtgYPCf7vI5HA4UapAD3Ijhw7Fz5054eXmJXOuK8jE0VCzd09LSUuLdM4/Hw7Lly6GlpQXThg0rrc80fwY1MkADwK5du9CnTx9MnToVFy9ehLKyskzn+WfZMkRERODggQMV28FyoCgKT58+lXiXBQD3791D165d4e7ujqioKDhfu4Y3b96gU6dOxCuXKho1NTWMHDGi1AUvly5fRmJiIpo3by7TRO2/5aw6qy6EQiFiY2PFxphtrK1hY20t1Tm+fPkCoVAIbW1tNG7cuDK6SfMHUSOHOABAX08PQwYPxk0PD1FVA1L+XrAAx44dQ/v27avcdpPJZMLT01M0o89kMmFkZIR3EsajGzRogBdeXggMCMCD+/crZVxz7dq1iImJwcWLF8X2xcfHY9fu3QgLC0Nqairc3d1hZ2dX7l3y3j17aqTBDClsNhv79u0Dj8fDVWdnmWvNCQQC7Nq9G3l5eTX2R4imdlFjA7ScnBw2b94MDoeDfv37E+cy/7NsGW7evInu3bvj+LFjpd4NVjYPHzzAhfPncffOHXyOiCjVr5bFYqFly5aVFvDqGhoiNzcXiUlJYvs0NDTQo3t3BAQE4FtUFKZPnw4zM7M/Jo2RyWSiR/fuMDU1xYYNG7BTBq8HIL+s2KVLl9CrV68KW+ZN82cjGuJwcnLCY8L6cDExMfj586dUq8oKiS2jXFNJFBQUcPjQIbi6ueHsuXP4+fMn5s6dK9F4uxBvb2+cv3ABTk5O6Ny5M0aOGCEytiEhNDQU69atI9KEhYUBgKjaScl9L168EN2dnTp1Cg8ePBBp3r17R9SWj48PUf94PB7q6Orilbc3/p4/X+RUB+SPCZubm0vlEpaYmIhFixZBQ0MDjx8/xosycqGfP39OPIno6+uL4OBg6OvrS6+RwhmxPBgMBs6dPYvZc+Zg06ZN4HA4WPbPP1Lrz58/Dw8PD1hYWGDL5s0V+uMWFh5O/Fl89eoVsSYkJAQKCgrw9vYm0r18+ZK4rdjYWMTHx0tcEFUWfn5+xG0B+W55slzDz58/E7t8ytJWWFgYxo8fL7ZdFKBnzJhB7GLl6+sLX19fLCjFrEgSdz098fnzZ6mOZTAY6NGjBzp16gRVFRV4v3qFyVOmiJaL7t61CyoqKgCAZcuXg8vlIjo6Gjk5OejcuTP27d0r89JRMzOzfNN/Atzc3ACgzGyRvLw8bN+xA926dcPUqVNF+cll/ehIIikpibh/0d+/49q1azA2McGunTuJtADA5XLx77p1yMzMxNOnT9G9HMe2TZs2YcOGDURtHDp0CN26dSPy4jh06BAePnxI1I4kdHR0cOTIEfw9fz42bNgADw8POJ06VaofDJD/xTp37hz27tuHevXqYdLEiRVi3lSUpn/9RfxeZ2RkEGsuX74MLS2tMt0YJZGTk0Pc1vv37xEUFETkhAnkB3bStgCILGFJ2L17N/r161fqU29FtuXu7l57zJJKoqioCHt7e3z79g0zZs4U3XX27NVL9KLYbDYUFRUhLy+P4wXjzjWZWbNnY8yYMVXa5vZt2+Ds7Izr169j2rRpZRrXlITP5+Pt27dwdHSEdZ8+MO/YsRJ7Wn0YGhjgyJEjuHnzJo4fP46evXqJitp269YNw4cPR2pqKjZt2gQAuHP3LjIyMtCqVSscPXKkzDRGGhpSakWALsTY2BiPHz0S/b1r925wuVwA+Z65o0ePrq6u1Ro6W1nBx9cXffr0wYb16zF9+vRixTNLY9HixXBwcICOjk6p3rW/C3Xr1sX8+fPRqHFjuFy/jnPnzwMAzp0/jxkSfMcdHBxgaWFRHV2l+c2pVQG6JCRVUmoKLBYLP75/B4Aqsz4tiq2tLRYsWIDVa9Zg7rx5ePf+Pf5ZuhR169YVDRcB+WmCX758QUJCAmxHjUJcXBx69+qFCxcuVHmfqwsba2t079YNqWlpAIDZs2eDV2AQNXDQIIwePRoMBgN1CnzAaWgqmlodoGsjDAYDhoaG1dqHsWPHYvDgwRgzdiwcHR3h6OiIpk2bFiuYKRQK8fbtW9FCmju3b6Nr167Vlg1TXcjLy4v8oaUtVEBDU1HQAfoPRVlZGVevXMHeffvw4/t3OJ0+LXaMiYkJJkyYAFdXV1hYWPxxwZmGprqhA/QfjIqKCjasXw8ejyexppyCoiL09fTwWUKhARoamsqHDtA0kJeXh7GxcXV3g6YWkpmZifT0dKSlpRGtN0hOTkZKSkol9uz3oMauJKShoan5ODs7w/HUKRw/cYJIt2nzZmyWIZ/5T4MO0DQ0NDQ1FDpA09DQ0NRQqmUMOicnB3arV1dH01LB4/Hw/v17TJs2jUgXFR0NAPDw8JBaE12guVmOr3VJXr95Q9y/jIwMfP/+HYGBgUS6Nz4+WLBgAeQJPZwDAgJK9cMujY+hoXj8+DHRiryPBW6HV69eJfaRqMnk5eZK9Keuibhcv47wghW+0hBBTzxLBYOiKOrQoUN48eIF6tevTySOjY1FXFwc2rZtK7Xm0uXLSEhIIO0nDc0fi4mJCYYOGUKkefr0aal1JUsjNDQUCgoKMDExkVoTEhKCR4Qma4VwOBzMnzePSPPgwQPY2NgQt/XixQt07dqVSPP27VsYGxtDl3Ahkixtff78GdOmTRPz8RHdQf/9999VYpbUvXt3+Pv7Y+zYsURtZWdnY+vWrbC3tyfSOTk5oWfPnmhIUN3C0dERvXv3JtIA+ZWzAcC6Tx+pNY8KNH0INIBsRkQ/fvzA48ePMWXKFCLd8uXLsW7dOmJXwKNHj+Lvv/8m0ly4cAEdOnQQGWJJy7bt27GG8Kns3bt3+PXrFwaUUc9SEvbbtmHtmjVEmqSkJJw9d47IIQ/IL1zx999/E3vLLFmyBPv27SPSyGKWlJqain+WLSNe1fvx40dERERg1apVRLqZM2cSvy4AsLOzw44dO4g0spolydJWjTFL0tfXh76+PnHVEC6XC3V1dWJdnTp10LBhQyKdrq4usQaAqLAAia7Q+Im0LU1NTWKNvLw8QkJCiHVqampo3LgxsRGQjo4OcVt6enowMTEh1mnJcD0SExPBYrGqpK34+Hhoa2mRt6WlRWS9WtVoaGjI9Lq4XC7S09MrqVe/D3QeNA0NjcyEhYUhMDAQJ06cAJPJxNSpU3+LKjs1BTpA09DQyMTPnz8xZswYfP7yBUHBwUhISMCVK1fw+PFjMJl0glhFQF9FGhoamdi/fz+a/tUU48aOxT1PT6ipquFLZGSxYwQCAZKTk0UrB4uOs2ZmZiI5ORmpqalV3PPaAx2gaWhoZMLa2hoOjg7Q1NTEX3/9hb59bcBmFX8oz8jIwOjRo6Gjq4uGDU2LpQ0uXLQIurq6xKsQ/yToAE1DQyMTNjY2osye7OxsuLu548GD+8XqMWpoaMDZ2RkMMJCRmYGrV64AADZvzl/mPXDgwFrp615V0GPQNDQ0/wkej4dTp05h9JjRMDY2FiuYq6qqCrNmZuDz+LDftg2dO3dBXGwsgHzHRBaLVR3drhXQAZqGhuY/ERwcjNSUVJy/cL7UY1RVVZEnn4uAwABcdb6KgAD/Kuxh7YUe4qChoZGZ79HRqF+/Pk6czB9HLszikIT7TXewWCzs2rkLmzZvrspu1lroO2gaGhqZiI+Px/ARIxAWFobgkBAAwIeQELgXKQ2Wm5uLvXv3IiQkBB8/fsTw4SPAy8mBqakpAODx48d49+492rdvVx0vocZDB2gaGhqZ+PbtG+bPn4/r169j1KhR+RsZDLQqsjQ6JycHenp6OHjgAGLj4rBw4QIIhUIEBQVh+rRp6Ny5M75++0oH6FIQBehHjx7h58+fROLPnz/jy5cvuHz5MpHm27dvUFNTI2qLx+MhMjKSqC0A8Pf3B4PBwPv376XWBAQEgM1mE2mAfHMVIH9GW1r8/PwA5C99JeHTp0/E1yI+Ph7v3r0j1n379g0uLi7Fqn5LQ1BQEHFbfn5+yMzMxMePH4l0YWFhxG2Fh4cjKSkJQqGw0ttKS0vDx48fiXWhoaFwc3MjXmYvSx+9vb2hoqKC5ORkqTUKCgpgMplQUFAQbfN68ULsmEIK3Q1TUlLAZrOhoKAAPo8ndV8/f/5M/LoA4MOHDzLFDoFAgODg4Epvy8/PT6LBkihAN2/eHBYWFkQnVVRUhFAohKWlJZGGyWQSaYD8oHf37l1iXXBwMNq0aSN6pJKGgIAAYg0AkbcASR8zMjKINQBkuhbfv39HUlISsc7Z2RkdO3aEhoYGkc7X15e4rfDwcLRu3RrNmjUj0j18+JC4LTabjbi4OGLdgwcPiDWJiYkICgoi1j19+hTt27cn9uOQ5XrEx8dDQ0NDpj6SalRVVcHhcIh1N2/eJNYAgJeXl0yxo3Xr1sQ+I7K0VRgHSiIK0AYGBkQ2gwCQkJCAmJgYIl18fDx+/fpF3BaXy4WqqiqxTktLC/Xq1SPSyaIB8o1+ABDpZNEA+QZGpBoA0NbWJtYpKyujQYMGxHdxmpqaxG1pa2ujbt26xDp1dXViTUxMDIRCYZW0paysLJNOXV0dRkZGqFu3LrGOtK06depAS0uLWKehoUGsSUlJQVJSErFOlhgAyNZHWeOALG3p6elJdLOjszhoaGhoaij/A7PzJopqCoa6AAAAAElFTkSuQmCC';
    const story1ImageHTML = `<img src="${story1PlanSrc}" alt="План участка в посёлке Сосновка" class="practice-plot-plan" loading="eager">`;
    const story1CommonText = `
        <p>На плане изображён дачный участок по адресу: <b>п. Сосновка, ул. Зелёная, д. 19</b> (сторона каждой клетки на плане равна <b>2 м</b>). Участок имеет прямоугольную форму. Въезд и выезд осуществляются через единственные ворота.</p>
        <p>При входе слева от ворот находится гараж. Справа от ворот находится сарай площадью <b>24 кв. м</b>, а чуть дальше расположен жилой дом.</p>
        <p>Напротив жилого дома расположены яблоневые посадки. Также на участке есть баня, к которой ведут дорожки, вымощенные плиткой, и огород с теплицей внутри. Огород отмечен на плане цифрой <b>6</b>.</p>
        <p>Все дорожки внутри участка имеют ширину <b>1 м</b> и вымощены тротуарной плиткой размером <b>1 м × 1 м</b>. Между гаражом и сараем находится площадка, вымощенная такой же плиткой.</p>
        <p>К участку подведено электричество. Имеется магистральное газоснабжение.</p>`;

    const scenarioTask = (id, examNumber, title, text, answer, solution, options={}) => ({
        id,
        examNumber,
        title,
        text,
        answer: String(answer),
        accepts: (options.accepts || [String(answer)]).map(String),
        solution,
        imageHTML: options.withPlan === false ? '' : (options.imageHTML !== undefined ? options.imageHTML : ''),
        theoryImageHTML: options.withPlan === false ? '' : (options.theoryImageHTML !== undefined ? options.theoryImageHTML : ''),
        printLayout: options.printLayout || (examNumber === 5 ? 'grid' : 'image-grid'),
        printGridHeight: options.printGridHeight || (examNumber === 5 ? 100 : 110),
        printCompact: Boolean(options.printCompact),
        sourceCode: options.sourceCode || ''
    });

    const story1Scenario = {
        id: 'plot-story-1-sosnovka',
        title: 'Сюжет 1. п. Сосновка, ул. Зелёная, д. 19',
        common: `${story1CommonText}${story1ImageHTML}`,
        imageHTML: story1ImageHTML,
        tasks: {
            1: [
                scenarioTask('plot-s1-1.1', 1, '1.1 — жилой дом, баня, гараж, теплица',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                     <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>жилой дом</td><td>баня</td><td>гараж</td><td>теплица</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '7425',
                    steps([
                        `Жилой дом расположен в глубине участка и обозначен цифрой <b>7</b>.`,
                        `Баня находится в нижней левой части плана — это объект <b>4</b>.`,
                        `Слева от ворот расположен гараж — объект <b>2</b>.`,
                        `Внутри огорода находится теплица, обозначенная цифрой <b>5</b>.`,
                        `Записываем цифры в нужном порядке: <b>7425</b>.`
                    ], '7425'),
                    { sourceCode: 'AA5926' }),

                scenarioTask('plot-s1-1.2', 1, '1.2 — яблони, теплица, сарай, жилой дом',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                     <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>яблони</td><td>теплица</td><td>сарай</td><td>жилой дом</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '3517',
                    steps([
                        `Напротив жилого дома расположены яблоневые посадки — на плане они отмечены цифрой <b>3</b>.`,
                        `Теплица — объект <b>5</b>.`,
                        `Справа от ворот расположен сарай площадью 24 м², это объект <b>1</b>.`,
                        `Жилой дом — объект <b>7</b>.`,
                        `Ответ: <b>3517</b>.`
                    ], '3517')),

                scenarioTask('plot-s1-1.3', 1, '1.3 — жилой дом, яблони, теплица, гараж',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                     <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>жилой дом</td><td>яблони</td><td>теплица</td><td>гараж</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '7352',
                    steps([
                        `Жилой дом — <b>7</b>.`,
                        `Яблони — <b>3</b>.`,
                        `Теплица — <b>5</b>.`,
                        `Гараж расположен слева от ворот и обозначен цифрой <b>2</b>.`,
                        `Получаем <b>7352</b>.`
                    ], '7352'),
                    { sourceCode: '11E056' }),

                scenarioTask('plot-s1-1.4', 1, '1.4 — гараж, баня, жилой дом, яблони',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                     <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>гараж</td><td>баня</td><td>жилой дом</td><td>яблони</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '2473',
                    steps([
                        `Гараж — <b>2</b>.`,
                        `Баня — <b>4</b>.`,
                        `Жилой дом — <b>7</b>.`,
                        `Яблони — <b>3</b>.`,
                        `Ответ: <b>2473</b>.`
                    ], '2473')),

                scenarioTask('plot-s1-1.5', 1, '1.5 — упаковки плитки для дорожек и площадки',
                    `Плитки для садовых дорожек продаются в упаковках по <b>10 штук</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>все дорожки и площадку между сараем и гаражом</b>?`,
                    '7',
                    steps([
                        `Площадка между сараем и гаражом имеет размеры <b>4 м × 10 м</b>, значит, на неё нужно <b>40</b> плиток размером 1 м × 1 м.`,
                        `Горизонтальная дорожка имеет длину <b>20 м</b>, а дорожка к дому — <b>2 м</b>. Всего на дорожки требуется <b>22</b> плитки.`,
                        `Общее количество плиток: <span style="white-space:nowrap;"><b>40+22=62</b></span>.`,
                        `В одной упаковке 10 плиток, поэтому <span style="white-space:nowrap;">62:10=6,2</span>. Нужно взять <b>7 упаковок</b>.`
                    ], '7'),
                    { sourceCode: '39BF75' })
            ],
            2: [
                scenarioTask('plot-s1-2.1', 2, '2.1 — упаковки плитки по 8 штук',
                    `Плитки для садовых дорожек продаются в упаковках по <b>8 штук</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>все дорожки и площадку между сараем и гаражом</b>?`,
                    '8',
                    steps([
                        `Как и в предыдущем задании, на все дорожки и площадку требуется <b>62</b> плитки.`,
                        `Одна упаковка содержит 8 плиток: <span style="white-space:nowrap;">62:8=7,75</span>.`,
                        `Округляем вверх, потому что упаковки покупают целиком. Понадобится <b>8 упаковок</b>.`
                    ], '8'),
                    { sourceCode: 'A68DC9' }),

                scenarioTask('plot-s1-2.2', 2, '2.2 — упаковки плитки по 6 штук только для дорожек',
                    `Плитки для садовых дорожек продаются в упаковках по <b>6 штук</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>только дорожки</b>?`,
                    '4',
                    steps([
                        `На горизонтальную дорожку и дорожку к дому требуется <b>22</b> плитки.`,
                        `В упаковке 6 плиток: <span style="white-space:nowrap;">22:6≈3,67</span>.`,
                        `Трёх упаковок не хватит, поэтому нужно <b>4 упаковки</b>.`
                    ], '4'),
                    { sourceCode: 'B8AF6E' }),

                scenarioTask('plot-s1-2.3', 2, '2.3 — упаковки плитки по 4 штуки только для дорожек',
                    `Плитки для садовых дорожек продаются в упаковках по <b>4 штуки</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>только дорожки</b>?`,
                    '6',
                    steps([
                        `Для дорожек нужно <b>22</b> плитки.`,
                        `В одной упаковке 4 плитки: <span style="white-space:nowrap;">22:4=5,5</span>.`,
                        `Значит, понадобится <b>6 упаковок</b>.`
                    ], '6'))
            ],
            3: [
                scenarioTask('plot-s1-3.1', 3, '3.1 — периметр фундамента жилого дома',
                    `Найдите периметр фундамента <b>жилого дома</b>. Ответ дайте в метрах.`,
                    '36',
                    steps([
                        `Фундамент дома имеет Г-образную форму. Его стороны по плану составляют <b>5, 3, 3, 1, 2 и 4</b> клетки.`,
                        `Периметр в клетках: <span style="white-space:nowrap;">5+3+3+1+2+4=18</span> клеток.`,
                        `Сторона одной клетки равна 2 м, поэтому периметр равен <span style="white-space:nowrap;">18·2=36</span> м.`
                    ], '36'),
                    { sourceCode: 'E7B4F2' }),

                scenarioTask('plot-s1-3.2', 3, '3.2 — расстояние от жилого дома до гаража',
                    `Найдите расстояние от <b>жилого дома</b> до <b>гаража</b> (расстояние между двумя ближайшими точками по прямой) в метрах.`,
                    '6',
                    steps([
                        `Ближайшие точки дома и гаража лежат на одной вертикали.`,
                        `Между ними по плану <b>3 клетки</b>.`,
                        `Одна клетка соответствует 2 м, значит, расстояние равно <span style="white-space:nowrap;">3·2=6</span> м.`
                    ], '6'),
                    { sourceCode: '5F0063' }),

                scenarioTask('plot-s1-3.3', 3, '3.3 — площадь бани',
                    `Найдите площадь, которую занимает <b>баня</b>. Ответ дайте в квадратных метрах.`,
                    '48',
                    steps([
                        `Баня — прямоугольник размером <b>4×3 клетки</b>, то есть занимает <b>12 клеток</b>.`,
                        `Площадь одной клетки: <span style="white-space:nowrap;">2·2=4 м²</span>.`,
                        `Площадь бани: <span style="white-space:nowrap;">12·4=48</span> м².`
                    ], '48'),
                    { sourceCode: '6453AD' }),

                scenarioTask('plot-s1-3.4', 3, '3.4 — площадь открытого грунта огорода',
                    `Найдите площадь открытого грунта <b>огорода</b> (вне теплицы). Ответ дайте в квадратных метрах.`,
                    '88',
                    steps([
                        `Огород занимает прямоугольник размером <b>5×5 клеток</b>, то есть <b>25 клеток</b>.`,
                        `Теплица внутри огорода занимает <b>3 клетки</b>.`,
                        `Открытый грунт занимает <span style="white-space:nowrap;">25−3=22</span> клетки, значит площадь равна <span style="white-space:nowrap;">22·4=88</span> м².`
                    ], '88'))
            ],
            4: [
                scenarioTask('plot-s1-4.1', 4, '4.1 — процент площади участка под строениями',
                    `Сколько процентов от площади всего участка занимают <b>строения</b> (жилой дом, гараж, сарай, баня)? Ответ округлите до целого.`,
                    '31',
                    steps([
                        `Площадь всего участка: <span style="white-space:nowrap;">15·10=150</span> клеток.`,
                        `Площади строений в клетках: дом — <b>17</b>, гараж — <b>12</b>, сарай — <b>6</b>, баня — <b>12</b>. Всего <span style="white-space:nowrap;">17+12+6+12=47</span> клеток.`,
                        `Доля строений: <span style="white-space:nowrap;">47:150·100%≈31,3%</span>. Округляем до целого: <b>31%</b>.`
                    ], '31'),
                    { sourceCode: 'F05F09' }),

                scenarioTask('plot-s1-4.2', 4, '4.2 — доля теплицы в площади огорода',
                    `Сколько процентов от площади всего <b>огорода</b> занимает <b>теплица</b>?`,
                    '12',
                    steps([
                        `Площадь огорода — <b>25 клеток</b>.`,
                        `Теплица занимает <b>3 клетки</b>.`,
                        `Искомый процент: <span style="white-space:nowrap;">3:25·100%=12%</span>.`
                    ], '12')),

                scenarioTask('plot-s1-4.3', 4, '4.3 — на сколько процентов теплица меньше гаража',
                    `На сколько процентов площадь, которую занимает <b>теплица</b>, меньше площади, которую занимает <b>гараж</b>?`,
                    '75',
                    steps([
                        `Площадь теплицы равна <b>12 м²</b>, площадь гаража — <b>48 м²</b>.`,
                        `Разность площадей: <span style="white-space:nowrap;">48−12=36</span> м².`,
                        `Сравниваем с площадью гаража: <span style="white-space:nowrap;">36:48·100%=75%</span>.`
                    ], '75'),
                    { sourceCode: '88B632' }),

                scenarioTask('plot-s1-4.4', 4, '4.4 — на сколько процентов гараж больше теплицы',
                    `На сколько процентов площадь, которую занимает <b>гараж</b>, больше площади, которую занимает <b>теплица</b>?`,
                    '300',
                    steps([
                        `Гараж занимает <b>48 м²</b>, теплица — <b>12 м²</b>.`,
                        `Разность площадей: <span style="white-space:nowrap;">48−12=36</span> м².`,
                        `Сравниваем с площадью теплицы: <span style="white-space:nowrap;">36:12·100%=300%</span>.`
                    ], '300'))
            ],
            5: [
                scenarioTask('plot-s1-5.1', 5, '5.1 — окупаемость газового отопления, вариант 1',
                    `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                     ${heatingTable('20 000','15 370','1,6','4,9','15 000','14 000','4,9','4,2')}
                     <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '500',
                    steps([
                        `Первоначальные затраты: газ — <span style="white-space:nowrap;">20 000+15 370=35 370 руб.</span>, электричество — <span style="white-space:nowrap;">15 000+14 000=29 000 руб.</span>. Разница составляет <b>6370 руб.</b>`,
                        `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,6·4,9=7,84 руб.</span>, электричество — <span style="white-space:nowrap;">4,9·4,2=20,58 руб.</span>. Экономия за час: <b>12,74 руб.</b>`,
                        `Время окупаемости: <span style="white-space:nowrap;">6370:12,74=500</span> часов.`
                    ], '500'),
                    { withPlan: false, printCompact: true }),

                scenarioTask('plot-s1-5.2', 5, '5.2 — окупаемость газового отопления, вариант 2',
                    `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                     ${heatingTable('18 000','13 896','1,6','4,7','15 000','9 000','4,7','4,4')}
                     <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '600',
                    steps([
                        `Первоначальные затраты: газ — <span style="white-space:nowrap;">18 000+13 896=31 896 руб.</span>, электричество — <span style="white-space:nowrap;">15 000+9 000=24 000 руб.</span>. Разница: <b>7896 руб.</b>`,
                        `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,6·4,7=7,52 руб.</span>, электричество — <span style="white-space:nowrap;">4,7·4,4=20,68 руб.</span>. Экономия: <b>13,16 руб./ч</b>`,
                        `Время окупаемости: <span style="white-space:nowrap;">7896:13,16=600</span> часов.`
                    ], '600'),
                    { withPlan: false, printCompact: true }),

                scenarioTask('plot-s1-5.3', 5, '5.3 — окупаемость газового отопления, вариант 3',
                    `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                     ${heatingTable('25 000','17 552','1,3','5,2','21 000','15 000','5,2','4,1')}
                     <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '450',
                    steps([
                        `Первоначальные затраты: газ — <span style="white-space:nowrap;">25 000+17 552=42 552 руб.</span>, электричество — <span style="white-space:nowrap;">21 000+15 000=36 000 руб.</span>. Разница: <b>6552 руб.</b>`,
                        `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,3·5,2=6,76 руб.</span>, электричество — <span style="white-space:nowrap;">5,2·4,1=21,32 руб.</span>. Экономия: <b>14,56 руб./ч</b>`,
                        `Время окупаемости: <span style="white-space:nowrap;">6552:14,56=450</span> часов.`
                    ], '450'),
                    { withPlan: false, printCompact: true }),

                scenarioTask('plot-s1-5.4', 5, '5.4 — окупаемость газового отопления, вариант 4',
                    `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                     ${heatingTable('22 000','20 105','1,5','4,9','19 000','16 000','4,9','4,4')}
                     <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '500',
                    steps([
                        `Первоначальные затраты: газ — <span style="white-space:nowrap;">22 000+20 105=42 105 руб.</span>, электричество — <span style="white-space:nowrap;">19 000+16 000=35 000 руб.</span>. Разница: <b>7105 руб.</b>`,
                        `Стоимость часа работы: газ — <span style="white-space:nowrap;">1,5·4,9=7,35 руб.</span>, электричество — <span style="white-space:nowrap;">4,9·4,4=21,56 руб.</span>. Экономия: <b>14,21 руб./ч</b>`,
                        `Время окупаемости: <span style="white-space:nowrap;">7105:14,21=500</span> часов.`
                    ], '500'),
                    { withPlan: false, printCompact: true })
            ]
        }
    };


    const story2PlanSrc = 'data:image/png;base64,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';
    const story2ImageHTML = `<img src="${story2PlanSrc}" alt="План участка в селе Авдеево" class="practice-plot-plan" loading="eager">`;
    const story2CommonText = `
        <p>На плане изображено домохозяйство по адресу: <b>с. Авдеево, 3-й Поперечный пер., д. 13</b> (сторона каждой клетки на плане равна <b>2 м</b>). Участок имеет прямоугольную форму. Выезд и въезд осуществляются через единственные ворота.</p>
        <p>При входе на участок справа от ворот находится баня, а слева — гараж, отмеченный на плане цифрой <b>7</b>. Площадь, занятая гаражом, равна <b>32 кв. м</b>.</p>
        <p>Жилой дом находится в глубине территории. Помимо гаража, жилого дома и бани, на участке имеется сарай, расположенный рядом с гаражом, и теплица, построенная на территории огорода (огород отмечен цифрой <b>2</b>). Перед жилым домом имеются яблоневые посадки.</p>
        <p>Все дорожки внутри участка имеют ширину <b>1 м</b> и вымощены тротуарной плиткой размером <b>1 м × 1 м</b>. Между баней и гаражом имеется площадка площадью <b>64 кв. м</b>, вымощенная плиткой такого же размера, но другой фактуры и цвета.</p>
        <p>К домохозяйству подведено электричество. Имеется магистральное газоснабжение.</p>`;

    const story2Scenario = {
        id: 'plot-story-2-avdeevo',
        title: 'Сюжет 2. с. Авдеево, 3-й Поперечный пер., д. 13',
        common: `${story2CommonText}${story2ImageHTML}`,
        imageHTML: story2ImageHTML,
        tasks: {
            1: [
                scenarioTask('plot-s2-1.1', 1, '1.1 — жилой дом, сарай, баня, теплица',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                    <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>жилой дом</td><td>сарай</td><td>баня</td><td>теплица</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '3461',
                    steps([
                        `Жилой дом — это объект <b>3</b>.`,
                        `Сарай расположен рядом с гаражом и обозначен цифрой <b>4</b>.`,
                        `Баня находится справа от ворот — это объект <b>6</b>.`,
                        `Теплица расположена на территории огорода и обозначена цифрой <b>1</b>.`,
                        `Получаем ответ: <b>3461</b>.`
                    ], '3461'),
                    { sourceCode: '29F1E0' }),

                scenarioTask('plot-s2-1.2', 1, '1.2 — яблони, теплица, жилой дом, баня',
                    `<p>Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр без пробелов, запятых и других дополнительных символов.</p>
                    <div class="common-table-wrap"><table class="common-table"><tr><th>Объекты</th><td>яблони</td><td>теплица</td><td>жилой дом</td><td>баня</td></tr><tr><th>Цифры</th><td></td><td></td><td></td><td></td></tr></table></div>`,
                    '5136',
                    steps([
                        `Яблоневые посадки отмечены цифрой <b>5</b>.`,
                        `Теплица — объект <b>1</b>.`,
                        `Жилой дом — объект <b>3</b>.`,
                        `Баня — объект <b>6</b>.`,
                        `Ответ: <b>5136</b>.`
                    ], '5136'))
            ],
            2: [
                scenarioTask('plot-s2-2.1', 2, '2.1 — упаковки плитки по 4 штуки',
                    `Тротуарная плитка продаётся в упаковках по <b>4 штуки</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>все дорожки и площадку перед гаражом</b>?`,
                    '20',
                    steps([
                        `Площадка занимает <b>64 м²</b>, значит, на неё нужно <b>64</b> плитки размером 1 м × 1 м.`,
                        `По плану на все дорожки требуется ещё <b>14</b> плиток.`,
                        `Всего потребуется <span style="white-space:nowrap;"><b>64+14=78</b></span> плиток.`,
                        `В одной упаковке 4 плитки: <span style="white-space:nowrap;">78:4=19,5</span>. Значит, нужно купить <b>20 упаковок</b>.`
                    ], '20'),
                    { sourceCode: '47A37D' }),

                scenarioTask('plot-s2-2.2', 2, '2.2 — упаковки плитки по 5 штук только для дорожек',
                    `Тротуарная плитка продаётся в упаковках по <b>5 штук</b>. Сколько упаковок плитки понадобилось, чтобы выложить <b>все дорожки</b>?`,
                    '3',
                    steps([
                        `По плану длина всех дорожек в сумме соответствует <b>14</b> плиткам размером 1 м × 1 м.`,
                        `В упаковке 5 плиток, поэтому <span style="white-space:nowrap;">14:5=2,8</span>.`,
                        `Покупают только целые упаковки, значит, понадобится <b>3 упаковки</b>.`
                    ], '3'),
                    { sourceCode: '8A64A1' })
            ],
            3: [
                scenarioTask('plot-s2-3.1', 3, '3.1 — площадь жилого дома',
                    `Найдите площадь, которую занимает <b>жилой дом</b>. Ответ дайте в квадратных метрах.`,
                    '68',
                    steps([
                        `Жилой дом занимает <b>17 клеток</b> на плане.`,
                        `Площадь одной клетки равна <span style="white-space:nowrap;">2·2=4 м²</span>.`,
                        `Площадь дома: <span style="white-space:nowrap;">17·4=68</span> м².`
                    ], '68'),
                    { sourceCode: 'B10B55' }),

                scenarioTask('plot-s2-3.2', 3, '3.2 — площадь открытого грунта огорода',
                    `Найдите площадь <b>открытого грунта огорода</b> (вне теплицы). Ответ дайте в квадратных метрах.`,
                    '44',
                    steps([
                        `Огород — прямоугольник размером <b>7×2 клетки</b>, то есть занимает <b>14 клеток</b>.`,
                        `Теплица внутри огорода занимает <b>3 клетки</b>.`,
                        `Открытый грунт занимает <span style="white-space:nowrap;">14−3=11</span> клеток. Тогда его площадь равна <span style="white-space:nowrap;">11·4=44</span> м².`
                    ], '44')),

                scenarioTask('plot-s2-3.3', 3, '3.3 — расстояние от жилого дома до гаража',
                    `Найдите расстояние от <b>жилого дома</b> до <b>гаража</b> (расстояние между двумя ближайшими точками по прямой) в метрах.`,
                    '8.9',
                    steps([
                        `Ближайшие точки дома и гаража образуют прямоугольный треугольник с катетами <b>4 клетки</b> и <b>2 клетки</b>.`,
                        `Расстояние между ними в клетках равно <span style="white-space:nowrap;">√(4²+2²)=√20</span> клетки.`,
                        `Одна клетка соответствует 2 м, значит, расстояние равно <span style="white-space:nowrap;">2√20=4√5≈8,9</span> м.`
                    ], '8,9'),
                    { sourceCode: 'C80D83', accepts: ['8.9','8,9','8.94','8,94'] }),

                scenarioTask('plot-s2-3.4', 3, '3.4 — расстояние от ворот до сарая',
                    `Найдите расстояние от <b>ворот</b> до <b>сарая</b> (расстояние между двумя ближайшими точками по прямой) в метрах.`,
                    '10',
                    steps([
                        `Ближайшие точки ворот и сарая образуют прямоугольный треугольник с катетами <b>3 клетки</b> и <b>4 клетки</b>.`,
                        `Значит, расстояние между ними равно <span style="white-space:nowrap;">√(3²+4²)=5</span> клеток.`,
                        `Так как сторона клетки равна 2 м, получаем <span style="white-space:nowrap;">5·2=10</span> м.`
                    ], '10'))
            ],
            4: [
                scenarioTask('plot-s2-4.1', 4, '4.1 — доля теплицы в площади огорода',
                    `Сколько процентов от площади всего <b>огорода</b> занимает <b>теплица</b>? Ответ округлите до целого.`,
                    '21',
                    steps([
                        `Площадь огорода составляет <b>14 клеток</b>, а площадь теплицы — <b>3 клетки</b>.`,
                        `Находим долю: <span style="white-space:nowrap;">3:14·100%≈21,4%</span>.`,
                        `После округления получаем <b>21%</b>.`
                    ], '21'))
            ],
            5: [
                scenarioTask('plot-s2-5.1', 5, '5.1 — окупаемость газового отопления, вариант 1',
                    `<p>Хозяин участка планирует устроить в жилом доме зимнее отопление. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                    ${heatingTable('24 000','18 280','1,2','5,6','20 000','15 000','5,6','3,8')}
                    <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разность в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '500',
                    steps([
                        `Начальные затраты на газовое отопление: <span style="white-space:nowrap;">24 000+18 280=42 280</span> руб.`,
                        `Начальные затраты на электрическое отопление: <span style="white-space:nowrap;">20 000+15 000=35 000</span> руб.`,
                        `Разница в первоначальных затратах составляет <b>7280 руб.</b>`,
                        `Час работы газового отопления стоит <span style="white-space:nowrap;">1,2·5,6=6,72</span> руб., а электрического — <span style="white-space:nowrap;">5,6·3,8=21,28</span> руб.`,
                        `Экономия за час: <span style="white-space:nowrap;">21,28−6,72=14,56</span> руб.`,
                        `Время окупаемости: <span style="white-space:nowrap;">7280:14,56=500</span> часов.`
                    ], '500'),
                    { withPlan: false, printCompact: true }),

                scenarioTask('plot-s2-5.2', 5, '5.2 — окупаемость газового отопления, вариант 2',
                    `<p>Хозяин участка планирует установить в жилом доме систему отопления. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице.</p>
                    ${heatingTable('22 000','14 580','1,4','5,5','15 000','13 000','5,5','3,8')}
                    <p>Обдумав оба варианта, хозяин решил установить газовое отопление. Через сколько часов непрерывной работы отопления экономия от использования газа вместо электричества компенсирует разницу в стоимости покупки и установки газового и электрического оборудования?</p>`,
                    '650',
                    steps([
                        `Газовое оборудование и монтаж стоят <span style="white-space:nowrap;">22 000+14 580=36 580</span> руб.`,
                        `Электрическое оборудование и монтаж стоят <span style="white-space:nowrap;">15 000+13 000=28 000</span> руб.`,
                        `Разница в цене составляет <b>8580 руб.</b>`,
                        `Час работы газового отопления стоит <span style="white-space:nowrap;">1,4·5,5=7,7</span> руб., а электрического — <span style="white-space:nowrap;">5,5·3,8=20,9</span> руб.`,
                        `Экономия за час равна <span style="white-space:nowrap;">20,9−7,7=13,2</span> руб.`,
                        `Время окупаемости: <span style="white-space:nowrap;">8580:13,2=650</span> часов.`
                    ], '650'),
                    { withPlan: false, printCompact: true })
            ]
        }
    };

    // Третий сюжет формируем напрямую из уже существующих заданий тренажёра «Участок».
    // Никаких дополнительных/выдуманных прототипов здесь нет: используются catalogPrototypes.
    const story3Scenario = {
        id: 'plot-story-3-trainer',
        title: 'Сюжет 3. СНТ «Прибор», 2-я Линия, д. 26',
        common: `${commonText}${imageHTML}`,
        imageHTML,
        tasks: {
            1: catalogPrototypes.filter(task => task.examNumber === 1),
            2: catalogPrototypes.filter(task => task.examNumber === 2),
            3: catalogPrototypes.filter(task => task.examNumber === 3),
            4: catalogPrototypes.filter(task => task.examNumber === 4),
            5: catalogPrototypes.filter(task => task.examNumber === 5)
        }
    };

    window.ogePracticeDatabase = window.ogePracticeDatabase || {};
    window.ogePracticeDatabase.plot = {
        title: 'Участок',
        sourceStatus: 'active',
        catalog: {
            title: 'Каталог прототипов',
            common: `${commonText}${imageHTML}`,
            imageHTML,
            prototypes: catalogPrototypes
        },
        scenarios: [story1Scenario, story2Scenario, story3Scenario]
    };
})();
