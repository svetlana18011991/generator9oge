(function(){
    window.database = window.database || {};

    const promptOne = 'Рассмотрите рисунок и запишите номер верного утверждения.';
    const promptTwo = 'Рассмотрите рисунок и запишите номер верного утверждения.';
    const promptThree = 'Рассмотрите рисунок и запишите номер верного неравенства.';
    const promptFour = 'Рассмотрите рисунок и запишите номер верного ответа.';
    const img = (name) => `<img src="${name}" alt="Задание 7" style="display:block;max-width:100%;height:auto;margin:0 auto;">`;

    const task7 = {
        title: 'Задание 7. Координатная прямая',
        prototypes: [
            {
                desc: 'Координатная прямая: одно число',
                svg_code: img('task7_proto1.png'),
                theory_task: promptOne,
                theory_sol:
                    'По рисунку видно, что число <b>\\(a\\)</b> расположено между 4 и 5, то есть <b>\\(4<a<5\\)</b>.<br>' +
                    'Проверим утверждения:<br>' +
                    '1) \\(3-a>0\\) — неверно, так как число \\(a\\) больше 3.<br>' +
                    '2) \\(a-6>0\\) — неверно, так как \\(a<6\\).<br>' +
                    '3) \\(a-5<0\\) — <b>верно</b>, потому что \\(a<5\\).<br>' +
                    '4) \\(4-a>0\\) — неверно, так как \\(a>4\\).<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: promptOne, svg_code: img('task7_proto2.png'), answer: '3' },
                    { text: promptOne, svg_code: img('task7_proto3.png'), answer: '3' },
                    { text: promptOne, svg_code: img('task7_proto4.png'), answer: '2' },
                    { text: promptOne, svg_code: img('task7_proto5.png'), answer: '3' },
                    { text: promptOne, svg_code: img('task7_proto6.png'), answer: '4' }
                ]
            },
            {
                desc: 'Координатная прямая: два числа x и y',
                svg_code: img('task7_proto2_1.png'),
                theory_task: promptTwo,
                theory_sol:
                    'На координатной прямой \\(x<0<y\\), причём точка \\(x\\) расположена дальше от нуля, чем точка \\(y\\). Значит, \\(x+y<0\\).<br>' +
                    'В вариантах ответа это утверждение стоит под номером 1.<br><br><b>Ответ:</b> 1',
                tasks: [
                    { text: promptTwo, svg_code: img('task7_proto2_2.png'), answer: '4' },
                    { text: promptTwo, svg_code: img('task7_proto2_3.png'), answer: '2' },
                    { text: promptTwo, svg_code: img('task7_proto2_4.png'), answer: '3' }
                ]
            },
            {
                desc: 'Координатная прямая: два числа a и b',
                svg_code: img('task7_proto3_1.png'),
                theory_task: promptThree,
                theory_sol:
                    'По рисунку видно, что \\(b<0<a\\). Тогда \\(b^2>0\\), а произведение \\(ab^2\\) имеет знак числа \\(a\\), то есть положительно.<br>' +
                    'Следовательно, верно неравенство \\(ab^2>0\\). В вариантах ответа оно стоит под номером 2.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: promptThree, svg_code: img('task7_proto3_2.png'), answer: '2' },
                    { text: promptThree, svg_code: img('task7_proto3_3.png'), answer: '2' },
                    { text: promptThree, svg_code: img('task7_proto3_4.png'), answer: '3' },
                    { text: promptThree, svg_code: img('task7_proto3_5.png'), answer: '2' },
                    { text: promptThree, svg_code: img('task7_proto3_6.png'), answer: '1' }
                ]
            },
            {
                desc: 'Координатная прямая: три числа',
                svg_code: img('task7_proto4_1.png'),
                theory_task: promptFour,
                theory_sol:
                    'На координатной прямой точки расположены слева направо так: \\(a\\), \\(b\\), \\(c\\). Значит, \\(a<b<c\\).<br>' +
                    'Тогда разности \\(a-b\\) и \\(a-c\\) отрицательны, а разность \\(c-b\\) положительна.<br>' +
                    'Следовательно, верный ответ — \\(c-b\\). В списке это вариант 3.<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: promptFour, svg_code: img('task7_proto4_2.png'), answer: '4' },
                    { text: promptFour, svg_code: img('task7_proto4_3.png'), answer: '2' },
                    { text: promptFour, svg_code: img('task7_proto4_4.png'), answer: '2' },
                    { text: promptFour, svg_code: img('task7_proto4_5.png'), answer: '1' },
                    { text: promptFour, svg_code: img('task7_proto4_6.png'), answer: '1' }
                ]
            }            ,
            {
                desc: 'Координатная прямая: три числа, отрицательная разность',
                svg_code: img('task7_proto5_1.png'),
                theory_task: promptFour,
                theory_sol:
                    'На координатной прямой точки расположены слева направо так: \\(p\\), \\(q\\), \\(r\\). Значит, \\(p<q<r\\).<br>' +
                    'Разность \\(q-p\\) положительна, разность \\(r-p\\) тоже положительна, а разность \\(q-r\\) отрицательна.<br>' +
                    'Следовательно, верный ответ — \\(q-r\\). В списке это вариант 2.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: promptFour, svg_code: img('task7_proto5_2.png'), answer: '2' },
                    { text: promptFour, svg_code: img('task7_proto5_3.png'), answer: '4' },
                    { text: promptFour, svg_code: img('task7_proto5_4.png'), answer: '1' },
                    { text: promptFour, svg_code: img('task7_proto5_5.png'), answer: '3' },
                    { text: promptFour, svg_code: img('task7_proto5_6.png'), answer: '2' }
                ]
            },
            {
                desc: 'Координатная прямая: определить точку по дроби',
                svg_code: img('task7_proto6_1.png'),
                theory_task: promptFour,
                theory_sol:
                    'Вычислим значение дроби: \\(\\frac{107}{13}=8\\frac{3}{13}\\approx 8{,}23\\).<br>' +
                    'На координатной прямой это число расположено между 8 и 9, ближе к 8. Этому положению соответствует точка \\(A\\).<br>' +
                    'В вариантах ответа точка \\(A\\) стоит под номером 1.<br><br><b>Ответ:</b> 1',
                tasks: [
                    { text: promptFour, svg_code: img('task7_proto6_2.png'), answer: '2' },
                    { text: promptFour, svg_code: img('task7_proto6_3.png'), answer: '2' },
                    { text: promptFour, svg_code: img('task7_proto6_4.png'), answer: '4' },
                    { text: promptFour, svg_code: img('task7_proto6_5.png'), answer: '3' },
                    { text: promptFour, svg_code: img('task7_proto6_6.png'), answer: '1' }
                ]
            },
            {
                desc: 'Координатная прямая: соответствие точки десятичному числу',
                svg_code: img('task7_proto7_1.png'),
                theory_task: '',
                theory_sol:
                    'Расположим числа по возрастанию: \\(-0{,}205<-0{,}052<0{,}008<0{,}02\\).<br>' +
                    'На координатной прямой точки идут слева направо в порядке \\(A,B,C,D\\). Поэтому числу \\(0{,}02\\) соответствует точка \\(D\\).<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: '', svg_code: img('task7_proto7_2.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto7_3.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto7_4.png'), answer: '4' },
                    { text: '', svg_code: img('task7_proto7_5.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto7_6.png'), answer: '1' }
                ]
            },
            {
                desc: 'Координатная прямая: выбрать дробь по положению точки',
                svg_code: img('task7_proto8_1.png'),
                theory_task: '',
                theory_sol:
                    'Сравним значения дробей: \\(\\frac{43}{15}\\approx2{,}87\\), \\(\\frac{49}{15}\\approx3{,}27\\), \\(\\frac{58}{15}\\approx3{,}87\\), \\(\\frac{64}{15}\\approx4{,}27\\).<br>' +
                    'На рисунке точка \\(A\\) расположена между 4 и 5, немного правее 4. Следовательно, отмечено число \\(\\frac{64}{15}\\).<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: '', svg_code: img('task7_proto8_2.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto8_3.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto8_4.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto8_5.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto8_6.png'), answer: '1' }
                ]
            },
            {
                desc: 'Координатная прямая: выбрать дробь по положению точки на отрезке от 0 до 1',
                svg_code: img('task7_proto9_1.png'),
                theory_task: '',
                theory_sol:
                    'Сравним значения дробей: \\(\\frac{6}{23}\\approx0{,}26\\), \\(\\frac{9}{23}\\approx0{,}39\\), \\(\\frac{10}{23}\\approx0{,}43\\), \\(\\frac{12}{23}\\approx0{,}52\\).<br>' +
                    'На рисунке точка \\(A\\) расположена немного правее 0,4, значит ей соответствует число \\(\\frac{10}{23}\\).<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: '', svg_code: img('task7_proto9_2.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto9_3.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto9_4.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto9_5.png'), answer: '4' },
                    { text: '', svg_code: img('task7_proto9_6.png'), answer: '1' }
                ]
            }
,
            {
                desc: 'Координатная прямая: выбрать дробь, принадлежащую отрезку',
                svg_code: img('task7_proto10_1.png'),
                theory_task: '',
                theory_sol:
                    'Проверим значения дробей: \\(\\frac{67}{12}=5\\frac{7}{12}\\), \\(\\frac{71}{12}=5\\frac{11}{12}\\), \\(\\frac{83}{12}=6\\frac{11}{12}\\), \\(\\frac{91}{12}=7\\frac{7}{12}\\).<br>' +
                    'Отрезку \\([6;7]\\) принадлежит только число \\(\\frac{83}{12}\\).<br><br><b>Ответ:</b> 3',
                tasks: [
                    { text: '', svg_code: img('task7_proto10_2.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto10_3.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto10_4.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto10_5.png'), answer: '4' },
                    { text: '', svg_code: img('task7_proto10_6.png'), answer: '3' }
                ]
            }
,
            {
                desc: 'Координатная прямая: определить целые числа, между которыми заключена дробь',
                svg_code: img('task7_proto11_1.png'),
                theory_task: '',
                theory_sol:
                    'Найдём целую часть дроби: \(\frac{230}{19}=12\frac{2}{19}\). Значит, число \(\frac{230}{19}\) больше 12, но меньше 13.<br>' +
                    'Следовательно, оно заключено между числами 12 и 13.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: '', svg_code: img('task7_proto11_2.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto11_3.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto11_4.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto11_5.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto11_6.png'), answer: '1' }
                ]
            }
,
            {
                desc: 'Координатная прямая: выбрать десятичное число между двумя дробями',
                svg_code: img('task7_proto12_1.png'),
                theory_task: '',
                theory_sol:
                    'Сравним дроби с десятичными числами: \(\frac{5}{17}\approx0{,}294\), \(\frac{7}{19}\approx0{,}368\).<br>' +
                    'Из предложенных чисел только \(0{,}3\) заключено между этими значениями.<br><br><b>Ответ:</b> 2',
                tasks: [
                    { text: '', svg_code: img('task7_proto12_2.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto12_3.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto12_4.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto12_5.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto12_6.png'), answer: '2' }
                ]
            }
,
            {
                desc: 'Координатная прямая: определить промежуток, которому принадлежит дробь',
                svg_code: img('task7_proto13_1.png'),
                theory_task: '',
                theory_sol:
                    'Преобразуем дробь в десятичную: \(\frac{3}{7}\approx0{,}43\).<br>' +
                    'Число \(0{,}43\) принадлежит промежутку \([0{,}4; 0{,}5]\).<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: '', svg_code: img('task7_proto13_2.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto13_3.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto13_4.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto13_5.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto13_6.png'), answer: '3' }
                ]
            }
,
            {
                desc: 'Координатная прямая: определить число под корнем, принадлежащее заданному промежутку',
                svg_code: img('task7_proto14_1.png'),
                theory_task: '',
                theory_sol:
                    'Проверим, квадрат какого числа находится между 25 и 36, ведь \([5;6]\) — это значения корня из чисел от 25 до 36.<br>' +
                    'Из предложенных чисел только 32 лежит между 25 и 36, значит \(\sqrt{32}\) принадлежит промежутку \([5;6]\).<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: '', svg_code: img('task7_proto14_2.png'), answer: '4' },
                    { text: '', svg_code: img('task7_proto14_3.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto14_4.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto14_5.png'), answer: '3' },
                    { text: '', svg_code: img('task7_proto14_6.png'), answer: '3' }
                ]
            }
,
            {
                desc: 'Координатная прямая: определить, между какими целыми числами заключён квадратный корень',
                svg_code: img('task7_proto15_1.png'),
                theory_task: '',
                theory_sol:
                    'Сравним число 56 с квадратами соседних целых чисел: \(7^2=49\), \(8^2=64\).<br>' +
                    'Так как \(49<56<64\), то \(\sqrt{56}\) заключено между 7 и 8.<br><br><b>Ответ:</b> 4',
                tasks: [
                    { text: '', svg_code: img('task7_proto15_2.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto15_3.png'), answer: '4' },
                    { text: '', svg_code: img('task7_proto15_4.png'), answer: '1' },
                    { text: '', svg_code: img('task7_proto15_5.png'), answer: '2' },
                    { text: '', svg_code: img('task7_proto15_6.png'), answer: '3' }
                ]
            }

        ]
    };

    window.database[7] = task7;
    window.database['task7'] = task7;
})();
