(function(){
    window.database = window.database || {};

    const promptOne = 'Рассмотрите рисунок и запишите номер верного утверждения.';
    const promptTwo = 'Рассмотрите рисунок и запишите номер верного утверждения.';
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
            }
        ]
    };

    window.database[7] = task7;
    window.database['task7'] = task7;
})();
