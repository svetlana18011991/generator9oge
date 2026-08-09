(function () {
    'use strict';

    // Тема «Тарифы»: каталог прототипов для тренажёра заданий ОГЭ 1–5.
    // Сюжетные генераторы, уже находящиеся в oge_practice.js, не изменяются.
    // График берётся из вшитого base64-изображения, как в прежней логике.

    const minutes = [175, 275, 150, 350, 300, 325, 375, 325, 200, 200, 325, 350];
    const gigabytes = [2.5, 3.5, 2, 4, 2.75, 3, 1, 1.5, 2.75, 3.25, 3.75, 2.25];

    function fmtRu(value) {
        return String(value).replace('.', ',');
    }

    function buildGraphSvg() {
        const W = 760, H = 430;
        const L = 76, R = 676, T = 66, B = 356;
        const plotW = R - L, plotH = B - T;
        const x = month => L + (month - 1) * plotW / 11;
        const yMin = value => B - value / 400 * plotH;
        const yGb = value => B - value / 4 * plotH;

        let grid = '';
        for (let v = 0; v <= 400; v += 25) {
            const yy = yMin(v);
            const major = v % 50 === 0;
            grid += `<line x1="${L}" y1="${yy}" x2="${R}" y2="${yy}" stroke="${major ? '#aeb7c4' : '#d8dee7'}" stroke-width="${major ? 1.2 : 1}" ${major ? '' : 'stroke-dasharray="2 5"'}/>`;
            if (major) grid += `<text x="${L - 12}" y="${yy + 5}" text-anchor="end" font-size="14" fill="#222">${v}</text>`;
        }
        for (let m = 1; m <= 12; m++) {
            const xx = x(m);
            grid += `<line x1="${xx}" y1="${T}" x2="${xx}" y2="${B}" stroke="#c4cbd5" stroke-width="1"/>`;
            grid += `<text x="${xx}" y="${B + 25}" text-anchor="middle" font-size="14" fill="#222">${m}</text>`;
        }
        let rightLabels = '';
        for (let g = 0; g <= 4.0001; g += 0.5) {
            const yy = yGb(g);
            rightLabels += `<text x="${R + 13}" y="${yy + 5}" text-anchor="start" font-size="14" fill="#222">${fmtRu(g)}</text>`;
        }

        const minutePoints = minutes.map((v, i) => `${x(i + 1)},${yMin(v)}`).join(' ');
        const gbPoints = gigabytes.map((v, i) => `${x(i + 1)},${yGb(v)}`).join(' ');
        const minuteDots = minutes.map((v, i) => `<circle cx="${x(i + 1)}" cy="${yMin(v)}" r="4.2" fill="#111"/>`).join('');
        const gbDots = gigabytes.map((v, i) => `<circle cx="${x(i + 1)}" cy="${yGb(v)}" r="4.2" fill="#555"/>`).join('');

        return `<svg class="practice-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="График минут исходящих вызовов и мобильного интернет-трафика по месяцам 2019 года">
            <rect x="0" y="0" width="${W}" height="${H}" fill="#fff"/>
            <text x="${L}" y="26" font-size="17" font-weight="700" fill="#111">минуты</text>
            <line x1="${L}" y1="38" x2="${L + 75}" y2="38" stroke="#111" stroke-width="4"/>
            <text x="${R - 78}" y="26" font-size="17" font-weight="700" fill="#111">гигабайты</text>
            <line x1="${R - 78}" y1="38" x2="${R}" y2="38" stroke="#555" stroke-width="3" stroke-dasharray="4 5"/>
            ${grid}
            ${rightLabels}
            <line x1="${L}" y1="${T}" x2="${L}" y2="${B}" stroke="#111" stroke-width="2"/>
            <line x1="${L}" y1="${B}" x2="${R}" y2="${B}" stroke="#111" stroke-width="2"/>
            <line x1="${R}" y1="${T}" x2="${R}" y2="${B}" stroke="#111" stroke-width="2"/>
            <polygon points="${L - 5},${T + 7} ${L},${T - 6} ${L + 5},${T + 7}" fill="#111"/>
            <polygon points="${R - 5},${T + 7} ${R},${T - 6} ${R + 5},${T + 7}" fill="#111"/>
            <polyline points="${minutePoints}" fill="none" stroke="#111" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
            ${minuteDots}
            <polyline points="${gbPoints}" fill="none" stroke="#555" stroke-width="3" stroke-dasharray="4 5" stroke-linejoin="round" stroke-linecap="round"/>
            ${gbDots}
        </svg>`;
    }

    const tariffPlotSrc = window.TARIFF_PLOT_BASE64 || '';
    const imageHTML = tariffPlotSrc
        ? `<img src="${tariffPlotSrc}" alt="График минут исходящих вызовов и мобильного интернет-трафика по месяцам 2019 года" class="practice-tariff-plot" loading="eager">`
        : buildGraphSvg();
    const theoryImageHTML = imageHTML;

    const overageTable = `<div class="common-table-wrap"><table class="common-table"><tbody>
        <tr><td><b>Исходящие вызовы</b></td><td>3 руб./мин.</td></tr>
        <tr><td><b>Мобильный интернет (пакет)</b></td><td>90 руб. за 0,5 ГБ</td></tr>
        <tr><td><b>SMS</b></td><td>2 руб./шт.</td></tr>
    </tbody></table></div>`;

    const commonText = `
        <p>На графике показано, сколько минут исходящих вызовов и сколько гигабайт мобильного интернета израсходовал абонент в каждом месяце 2019 года. <b>Минуты соединены сплошной линией, интернет-трафик — пунктирной.</b></p>
        <p>В течение 2019 года абонент пользовался тарифом <b>«Стандартный»</b>. Абонентская плата — <b>350 рублей в месяц</b>. В неё включены:</p>
        <ul style="margin-top:6px;">
            <li>300 минут исходящих вызовов;</li>
            <li>3 ГБ мобильного интернета;</li>
            <li>150 SMS;</li>
            <li>бесплатные входящие вызовы.</li>
        </ul>
        <p>При превышении лимитов дополнительные услуги оплачиваются по таблице:</p>
        ${overageTable}
        <p style="font-size:.92em;color:#555;">Дополнительный интернет подключается пакетами по 0,5 ГБ: если превышение требует неполного пакета, оплачивается целый пакет.</p>`;

    function solutionBlock(steps, answer) {
        const rows = steps.map((step, index) => `<div style="display:grid;grid-template-columns:30px 1fr;gap:8px;align-items:start;margin:7px 0;"><div style="width:26px;height:26px;border-radius:50%;background:#ccfbf1;color:#0f766e;font-weight:800;display:flex;align-items:center;justify-content:center;">${index + 1}</div><div>${step}</div></div>`).join('');
        return `<div style="line-height:1.48;">${rows}<div style="margin-top:10px;padding:8px 11px;border:2px solid #fbbf24;border-radius:8px;background:#fffbeb;"><b>Ответ: ${answer}</b></div></div>`;
    }

    function proto(id, examNumber, title, text, answer, solution, accepts, options) {
        const n = Number(examNumber);
        const opts = options || {};
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
            imageHTML: opts.imageHTML !== undefined ? opts.imageHTML : imageHTML,
            theoryImageHTML: opts.theoryImageHTML !== undefined ? opts.theoryImageHTML : theoryImageHTML,
            printLayout: opts.printLayout || 'image-grid',
            printGridHeight: opts.printGridHeight || (n === 1 ? 78 : (n === 5 ? 78 : 96)),
            printCompact: opts.printCompact !== undefined ? Boolean(opts.printCompact) : n === 5,
            printBreakBefore: Boolean(opts.printBreakBefore)
        };
    }

    const monthLookup = {
        minutes: Object.fromEntries(minutes.map((v, i) => [String(v), i + 1])),
        gb: Object.fromEntries(gigabytes.map((v, i) => [String(v), i + 1]))
    };

    const oldMonthlyCosts = [350, 440, 350, 680, 350, 425, 575, 425, 350, 440, 605, 500];
    const oldYearCost = oldMonthlyCosts.reduce((a, b) => a + b, 0); // 5490

    function tableAnswerTask(id, values, mode, answer, title) {
        const isGb = mode === 'gb';
        const cells = values.map(v => `<td>${fmtRu(v)} ${isGb ? 'ГБ' : 'мин.'}</td>`).join('');
        const table = `<div class="common-table-wrap"><table class="common-table"><tbody><tr><td><b>${isGb ? 'Мобильный интернет' : 'Исходящие вызовы'}</b></td>${cells}</tr><tr><td><b>Номер месяца</b></td>${values.map(() => '<td></td>').join('')}</tr></tbody></table></div>`;
        const months = values.map(v => isGb ? monthLookup.gb[String(v)] : monthLookup.minutes[String(v)]);
        return proto(
            id, 1, title,
            `<p>Определите, какие месяцы соответствуют указанным в таблице значениям ${isGb ? 'трафика мобильного интернета' : 'количества минут исходящих вызовов'}. Запишите номера месяцев подряд, без пробелов и других символов.</p>${table}`,
            answer,
            solutionBlock([
                `По графику находим месяцы для значений: ${values.map((v, i) => `<b>${fmtRu(v)} ${isGb ? 'ГБ' : 'мин.'} → ${months[i]}-й месяц</b>`).join('; ')}.`,
                `Записываем номера месяцев подряд в заданном порядке: <b>${answer}</b>.`
            ], answer)
        );
    }

    function monthlyCostTask(id, monthName, monthIndex, title) {
        const m = minutes[monthIndex - 1];
        const g = gigabytes[monthIndex - 1];
        const extraMin = Math.max(0, m - 300);
        const extraMinCost = extraMin * 3;
        const extraGb = Math.max(0, g - 3);
        const extraPackets = extraGb > 0 ? Math.ceil((extraGb / 0.5) - 1e-10) : 0;
        const extraGbCost = extraPackets * 90;
        const total = 350 + extraMinCost + extraGbCost;
        const steps = [
            `В ${monthName} по графику: <b>${m} минут</b> и <b>${fmtRu(g)} ГБ</b>. В тариф включено 300 минут и 3 ГБ.`
        ];
        if (extraMin > 0) steps.push(`Сверх пакета использовано ${extraMin} минут: <b>${extraMin}·3=${extraMinCost} руб.</b>`);
        else steps.push(`Лимит минут не превышен, доплата за звонки равна <b>0 руб.</b>`);
        if (extraGb > 0) steps.push(`Интернет превышен на ${fmtRu(extraGb)} ГБ. Нужно ${extraPackets} доп. пакет(а) по 0,5 ГБ: <b>${extraPackets}·90=${extraGbCost} руб.</b>`);
        else steps.push(`Лимит интернета не превышен, доплата за интернет равна <b>0 руб.</b>`);
        steps.push(`Итого: <b>350+${extraMinCost}+${extraGbCost}=${total} руб.</b>`);
        return proto(id, 2, title, `<p>Сколько рублей потратил абонент на услуги связи в <b>${monthName}</b>?</p>`, String(total), solutionBlock(steps, String(total)));
    }

    function newTariffTable(fee, calls, gb, sms, outgoing, internetHalfGb, smsPrice) {
        return `<div class="common-table-wrap"><table class="common-table"><tbody>
            <tr><td>Стоимость перехода на тариф</td><td>0 руб.</td></tr>
            <tr><td>Абонентская плата в месяц</td><td>${fee} руб.</td></tr>
            <tr><td colspan="2"><b>В абонентскую плату включены пакеты:</b></td></tr>
            <tr><td>пакет исходящих вызовов</td><td>${calls} минут</td></tr>
            <tr><td>пакет мобильного интернета</td><td>${gb} ГБ</td></tr>
            <tr><td>пакет SMS</td><td>${sms} SMS</td></tr>
            <tr><td colspan="2"><b>После расходования пакетов:</b></td></tr>
            <tr><td>входящие вызовы</td><td>0 руб./мин.</td></tr>
            <tr><td>исходящие вызовы*</td><td>${outgoing} руб./мин.</td></tr>
            <tr><td>мобильный интернет (пакет)</td><td>${internetHalfGb} руб. за 0,5 ГБ</td></tr>
            <tr><td>SMS</td><td>${smsPrice} руб./шт.</td></tr>
        </tbody></table><div style="font-size:.86em;font-style:italic;">*исходящие вызовы на номера, зарегистрированные на территории РФ</div></div>`;
    }

    function compareTariffTask(id, fee, calls, gbLimit, sms, outgoing, internetHalfGb, title) {
        let newYear = 0;
        const monthlyNew = [];
        for (let i = 0; i < 12; i++) {
            const extraMin = Math.max(0, minutes[i] - calls);
            const extraGb = Math.max(0, gigabytes[i] - gbLimit);
            const packets = extraGb > 0 ? Math.ceil((extraGb / 0.5) - 1e-10) : 0;
            const cost = fee + extraMin * outgoing + packets * internetHalfGb;
            monthlyNew.push(cost);
            newYear += cost;
        }
        const chosenFee = newYear < oldYearCost ? fee : 350;
        const decision = newYear < oldYearCost ? 'Новый тариф дешевле, поэтому абонент перейдёт на него.' : 'Новый тариф не дешевле, поэтому абонент останется на «Стандартном».';
        return proto(
            id, 5, title,
            `<p>В конце 2019 года оператор связи предложил абоненту перейти на новый тариф:</p>${newTariffTable(fee, calls, gbLimit, sms, outgoing, internetHalfGb, 2)}<p>Абонент сравнивает, сколько бы он потратил на услуги связи за 2019 год при том же фактическом потреблении. Если новый тариф дал бы меньшую сумму, он сменит тариф. <b>В ответе запишите ежемесячную абонентскую плату по тарифу, который абонент выберет на 2020 год.</b></p>`,
            String(chosenFee),
            solutionBlock([
                `По тарифу «Стандартный» фактические расходы за 2019 год составили: ${oldMonthlyCosts.join('+')}=<b>${oldYearCost} руб.</b>`,
                `По новому тарифу месячные расходы составили: ${monthlyNew.join('+')}=<b>${newYear} руб.</b>`,
                decision,
                `Ежемесячная абонентская плата выбранного тарифа — <b>${chosenFee} руб.</b>`
            ], String(chosenFee)),
            undefined,
            { printCompact: true }
        );
    }

    function omegaTable(rows) {
        return `<div class="common-table-wrap"><table class="common-table"><thead><tr><th>Тарифный план</th><th>Абонентская плата</th><th>Плата за трафик</th></tr></thead><tbody>${rows.map(r => `<tr><td>«${r.name}»</td><td>${r.feeText}</td><td>${r.extraText}</td></tr>`).join('')}</tbody></table></div>`;
    }

    const catalogPrototypes = [
        tableAnswerTask('1.1', [1, 3, 3.25, 1.5], 'gb', '76108', 'Месяцы по интернет-трафику: 1; 3; 3,25; 1,5 ГБ'),
        tableAnswerTask('1.2', [1.5, 2, 3.75, 1], 'gb', '83117', 'Месяцы по интернет-трафику: 1,5; 2; 3,75; 1 ГБ'),
        tableAnswerTask('1.3', [2, 2.25, 4, 3.5], 'gb', '31242', 'Месяцы по интернет-трафику: 2; 2,25; 4; 3,5 ГБ'),
        tableAnswerTask('1.4', [150, 300, 175, 375], 'minutes', '3517', 'Месяцы по исходящим вызовам: 150; 300; 175; 375 минут'),
        tableAnswerTask('1.5', [175, 300, 275, 150], 'minutes', '1523', 'Месяцы по исходящим вызовам: 175; 300; 275; 150 минут'),
        tableAnswerTask('1.6', [375, 150, 275, 300], 'minutes', '7325', 'Месяцы по исходящим вызовам: 375; 150; 275; 300 минут'),

        monthlyCostTask('2.1', 'феврале', 2, 'Стоимость услуг связи в феврале'),
        monthlyCostTask('2.2', 'июне', 6, 'Стоимость услуг связи в июне'),
        monthlyCostTask('2.3', 'июле', 7, 'Стоимость услуг связи в июле'),
        monthlyCostTask('2.4', 'августе', 8, 'Стоимость услуг связи в августе'),
        monthlyCostTask('2.5', 'апреле', 4, 'Стоимость услуг связи в апреле'),
        monthlyCostTask('2.6', 'декабре', 12, 'Стоимость услуг связи в декабре'),

        proto('3.1', 3, 'Количество месяцев с превышением интернет-пакета',
            `<p>Сколько месяцев в 2019 году абонент <b>превысил лимит по пакету мобильного интернета</b>?</p>`,
            '4',
            solutionBlock([
                `В тариф включено <b>3 ГБ</b>. Ищем на графике месяцы, где пунктирная линия выше 3 ГБ.`,
                `Это февраль (3,5), апрель (4), октябрь (3,25) и ноябрь (3,75). Всего <b>4 месяца</b>.`
            ], '4')),
        proto('3.2', 3, 'Количество месяцев без превышения обоих пакетов',
            `<p>Сколько месяцев в 2019 году абонент <b>не превышал лимит ни по пакету минут, ни по пакету мобильного интернета</b>?</p>`,
            '4',
            solutionBlock([
                `Одновременно должны выполняться два условия: минут не больше <b>300</b>, интернета не больше <b>3 ГБ</b>.`,
                `Оба условия выполняются в январе, марте, мае и сентябре.`,
                `Таких месяцев <b>4</b>.`
            ], '4')),
        proto('3.3', 3, 'Минимальное количество минут исходящих вызовов',
            `<p>Какое <b>наименьшее количество минут исходящих вызовов</b> за месяц было в 2019 году?</p>`,
            '150',
            solutionBlock([
                `Смотрим только сплошную линию — она показывает минуты.`,
                `Самая низкая точка находится в марте и соответствует <b>150 минутам</b>.`
            ], '150')),
        proto('3.4', 3, 'Минимальный мобильный интернет-трафик',
            `<p>Какой <b>наименьший трафик мобильного интернета</b> в гигабайтах за месяц был в 2019 году?</p>`,
            '1',
            solutionBlock([
                `Смотрим пунктирную линию — интернет-трафик.`,
                `Минимум достигается в июле: <b>1 ГБ</b>.`
            ], '1')),

        proto('4.1', 4, 'Рост интернет-трафика в феврале по сравнению с январём',
            `<p>На сколько процентов увеличился трафик мобильного интернета в <b>феврале</b> по сравнению с <b>январём</b> 2019 года?</p>`,
            '40',
            solutionBlock([
                `В январе использовано 2,5 ГБ, в феврале — 3,5 ГБ. Увеличение: <b>3,5−2,5=1 ГБ</b>.`,
                `Процент увеличения относительно января: <b>1:2,5·100%=40%</b>.`
            ], '40')),
        proto('4.2', 4, 'Рост интернет-трафика в августе по сравнению с июлем',
            `<p>На сколько процентов увеличился трафик мобильного интернета в <b>августе</b> по сравнению с <b>июлем</b> 2019 года?</p>`,
            '50',
            solutionBlock([
                `В июле использован 1 ГБ, в августе — 1,5 ГБ. Увеличение: <b>0,5 ГБ</b>.`,
                `Процент увеличения: <b>0,5:1·100%=50%</b>.`
            ], '50')),
        proto('4.3', 4, 'Процент роста абонентской платы с 200 до 350 рублей',
            `<p>Известно, что в 2018 году абонентская плата по тарифу «Стандартный» составляла <b>200 рублей</b>. На сколько процентов выросла абонентская плата в 2019 году по сравнению с 2018 годом?</p>`,
            '75',
            solutionBlock([
                `В 2019 году плата равна 350 руб. Рост: <b>350−200=150 руб.</b>`,
                `Относительно старой платы: <b>150:200·100%=75%</b>.`
            ], '75')),
        proto('4.4', 4, 'Восстановление абонентской платы 2018 года по росту на 75%',
            `<p>Известно, что в 2019 году абонентская плата по тарифу «Стандартный» выросла на <b>75%</b> по сравнению с 2018 годом. Сколько рублей составляла абонентская плата в 2018 году?</p>`,
            '200',
            solutionBlock([
                `Плата 2019 года 350 руб. составляет <b>175%</b> от платы 2018 года.`,
                `Плата 2018 года: <b>350:1,75=200 руб.</b>`
            ], '200')),
        proto('4.5', 4, 'Восстановление абонентской платы 2018 года по снижению на 30%',
            `<p>Известно, что в 2019 году абонентская плата по тарифу «Стандартный» снизилась на <b>30%</b> по сравнению с 2018 годом. Сколько рублей составляла абонентская плата в 2018 году?</p>`,
            '500',
            solutionBlock([
                `После снижения на 30% осталось <b>70%</b> прежней платы.`,
                `350 руб. — это 70%, поэтому старая плата: <b>350:0,7=500 руб.</b>`
            ], '500')),
        proto('4.6', 4, 'Процент роста абонентской платы до 490 рублей в 2020 году',
            `<p>В январе 2020 года абонентская плата по тарифу «Стандартный» повысилась и составила <b>490 рублей</b>. На сколько процентов повысилась абонентская плата?</p>`,
            '40',
            solutionBlock([
                `До повышения плата была 350 руб. Увеличение: <b>490−350=140 руб.</b>`,
                `Процент повышения: <b>140:350·100%=40%</b>.`
            ], '40')),

        compareTariffTask('5.1', 440, 400, 4, 120, 4, 180, 'Сравнение с новым тарифом: абонентская плата 440 рублей'),
        compareTariffTask('5.2', 460, 400, 4, 130, 4, 160, 'Сравнение с новым тарифом: абонентская плата 460 рублей'),
        compareTariffTask('5.3', 430, 400, 4, 120, 4, 180, 'Сравнение с новым тарифом: абонентская плата 430 рублей'),
        compareTariffTask('5.4', 470, 400, 4, 120, 4, 160, 'Сравнение с новым тарифом: абонентская плата 470 рублей'),

        proto('5.5', 5, 'Выбор самого дешёвого домашнего интернет-тарифа при 700 МБ',
            `<p>Помимо мобильного интернета, абонент использует домашний интернет от провайдера «Омега». Провайдер предлагает три тарифных плана:</p>${omegaTable([
                {name:'0', feeText:'Нет', extraText:'1,5 руб. за 1 МБ'},
                {name:'200', feeText:'204 руб. за 200 МБ трафика в месяц', extraText:'1,2 руб. за 1 МБ сверх 200 МБ'},
                {name:'700', feeText:'672 руб. за 700 МБ трафика в месяц', extraText:'0,5 руб. за 1 МБ сверх 700 МБ'}
            ])}<p>Абонент предполагает, что трафик составит <b>700 МБ</b> в месяц, и выбирает наиболее дешёвый тарифный план. Сколько рублей он заплатит за месяц, если трафик действительно будет равен 700 МБ?</p>`,
            '672',
            solutionBlock([
                `План «0»: <b>700·1,5=1050 руб.</b>`,
                `План «200»: <b>204+(700−200)·1,2=204+600=804 руб.</b>`,
                `План «700»: <b>672 руб.</b>, доплаты нет.`,
                `Минимальная стоимость — <b>672 руб.</b>`
            ], '672'),
            undefined,
            { imageHTML: '', theoryImageHTML: '', printCompact: true }),
        proto('5.6', 5, 'Выбор самого дешёвого домашнего интернет-тарифа при 800 МБ',
            `<p>Помимо мобильного интернета, абонент использует домашний интернет от провайдера «Омега». Провайдер предлагает три тарифных плана:</p>${omegaTable([
                {name:'0', feeText:'Нет', extraText:'1,1 руб. за 1 МБ'},
                {name:'300', feeText:'290 руб. за 300 МБ трафика в месяц', extraText:'1,2 руб. за 1 МБ сверх 300 МБ'},
                {name:'800', feeText:'930 руб. за 800 МБ трафика в месяц', extraText:'0,5 руб. за 1 МБ сверх 800 МБ'}
            ])}<p>Абонент предполагает, что трафик составит <b>800 МБ</b> в месяц, и выбирает наиболее дешёвый тарифный план. Сколько рублей он заплатит за месяц, если трафик действительно будет равен 800 МБ?</p>`,
            '880',
            solutionBlock([
                `План «0»: <b>800·1,1=880 руб.</b>`,
                `План «300»: <b>290+(800−300)·1,2=290+600=890 руб.</b>`,
                `План «800»: <b>930 руб.</b>.`,
                `Минимальная стоимость — <b>880 руб.</b>`
            ], '880'),
            undefined,
            { imageHTML: '', theoryImageHTML: '', printCompact: true })
    ];

    // В актуальном банке ФИПИ для темы «Тарифы» используется один сюжет.
    // Как и в теме «План квартиры», комплект собирается из этого единственного
    // сюжета: генератор выбирает по одному варианту каждого задания №1–5.
    const scenario = {
        id: 'tariff-plot-1',
        title: 'Сюжет 1. Тарифы',
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
    window.ogePracticeDatabase.tariff = {
        title: 'Тарифы',
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
