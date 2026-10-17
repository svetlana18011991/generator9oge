"use strict";
(function () {
    window.extraDatabase = window.extraDatabase || {};
    // Задание 15 ЭКСТРА. Порядок: темы и усложнение внутри каждой темы.
    // Каждому прототипу соответствует один разбор и пять тренировочных аналогов.
    const task15Extra = {
        title: "Задание 15. Дополнительные задачи",
        // Порядок прототипов обязателен и при выключенном глобальном перемешивании.
        preserveTopicOrder: true,
        prototypes: [
        // I. Углы и биссектрисы
        {
          "desc": "15.Д1. Вертикальные углы с равными отметками",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"30\" x2=\"235\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"35\" y1=\"140\" x2=\"235\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"87\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">α</text><text x=\"225\" y=\"87\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">β</text><text x=\"136\" y=\"100\" font-size=\"11\" font-family=\"serif\" fill=\"#111827\">O</text></svg></div>",
          "theory_task": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 60°. Найдите ∠α. Ответ дайте в градусах.",
          "theory_sol": "Вертикальные углы равны. Поэтому отмеченный угол α равен 60°.<br><br><b>Ответ:</b> 60",
          "tasks": [
            {
              "text": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 40°. Найдите ∠α. Ответ дайте в градусах.",
              "answer": "40"
            },
            {
              "text": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 35°. Найдите ∠α. Ответ дайте в градусах.",
              "answer": "35"
            },
            {
              "text": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 72°. Найдите ∠α. Ответ дайте в градусах.",
              "answer": "72"
            },
            {
              "text": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 80°. Найдите ∠α. Ответ дайте в градусах.",
              "answer": "80"
            },
            {
              "text": "Две прямые пересекаются в точке O, образуя вертикальные углы α и β. Известно, что ∠β = 25°. Найдите ∠α. Ответ дайте в градусах.",
              "answer": "25"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д2. Смежный угол и две равные части",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"28\" y1=\"130\" x2=\"242\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"132\" y1=\"130\" x2=\"150\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"132\" y1=\"130\" x2=\"207\" y2=\"63\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"22\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"246\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"126\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text><text x=\"148\" y=\"36\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"211\" y=\"59\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Два равных угла вместе со смежным к ним углом 100° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
          "theory_sol": "Развёрнутый угол равен 180°. Два одинаковых угла равны \\(\\frac{180^\\circ-100^\\circ}{2}=40^\\circ\\).<br><br><b>Ответ:</b> 40",
          "tasks": [
            {
              "text": "Два равных угла вместе со смежным к ним углом 80° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
              "answer": "50"
            },
            {
              "text": "Два равных угла вместе со смежным к ним углом 120° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
              "answer": "30"
            },
            {
              "text": "Два равных угла вместе со смежным к ним углом 70° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
              "answer": "55"
            },
            {
              "text": "Два равных угла вместе со смежным к ним углом 90° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
              "answer": "45"
            },
            {
              "text": "Два равных угла вместе со смежным к ним углом 110° образуют развёрнутый угол. Найдите величину каждого из двух равных углов. Ответ дайте в градусах.",
              "answer": "35"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д3. Углы при параллельных прямых",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"25\" y1=\"48\" x2=\"240\" y2=\"48\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"25\" y1=\"127\" x2=\"240\" y2=\"127\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98\" y1=\"158\" x2=\"145\" y2=\"20\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"185\" y1=\"158\" x2=\"145\" y2=\"48\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"149\" y=\"38\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">1</text><text x=\"174\" y=\"119\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">2</text><text x=\"137\" y=\"77\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">3</text></svg></div>",
          "theory_task": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 77°, ∠2 = 88°. Ответ дайте в градусах.",
          "theory_sol": "По параллельности соответствующий угол равен 77°. В треугольнике сумма углов 180°, поэтому ∠3 = 180° − 77° − 88° = 15°.<br><br><b>Ответ:</b> 15",
          "tasks": [
            {
              "text": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 24°, ∠2 = 76°. Ответ дайте в градусах.",
              "answer": "80"
            },
            {
              "text": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 59°, ∠2 = 38°. Ответ дайте в градусах.",
              "answer": "83"
            },
            {
              "text": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 88°, ∠2 = 16°. Ответ дайте в градусах.",
              "answer": "76"
            },
            {
              "text": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 35°, ∠2 = 65°. Ответ дайте в градусах.",
              "answer": "80"
            },
            {
              "text": "Прямые m и n параллельны. Найдите ∠3, если ∠1 = 42°, ∠2 = 73°. Ответ дайте в градусах.",
              "answer": "65"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д4. Биссектриса угла при прямой",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"120\" x2=\"235\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"120\" x2=\"88\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"120\" x2=\"185\" y2=\"36\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"22\" y=\"142\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"241\" y=\"142\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"131\" y=\"141\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text><text x=\"75\" y=\"32\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">K</text><text x=\"190\" y=\"32\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 110° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
          "theory_sol": "Смежные углы AOD и DOB дают 180°. Поэтому \\(\\angle DOK=\\frac{180^\\circ-110^\\circ}{2}=35^\\circ\\).<br><br><b>Ответ:</b> 35",
          "tasks": [
            {
              "text": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 134° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
              "answer": "23"
            },
            {
              "text": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 78° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
              "answer": "51"
            },
            {
              "text": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 52° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
              "answer": "64"
            },
            {
              "text": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 68° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
              "answer": "56"
            },
            {
              "text": "Найдите величину угла DOK, если OK — биссектриса угла AOD, ∠DOB = 122° и A, O, B лежат на одной прямой. Ответ дайте в градусах.",
              "answer": "29"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д5. Биссектриса и смежный угол на прямой AB",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"35\" y1=\"120\" x2=\"235\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"120\" x2=\"93\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"120\" x2=\"173\" y2=\"39\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"22\" y=\"142\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"241\" y=\"142\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"131\" y=\"141\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"82\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"177\" y=\"32\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 48°. Найдите угол CMA. Ответ дайте в градусах.",
          "theory_sol": "Биссектриса делит угол CMB пополам: ∠CMB = 2·48° = 96°. Смежный с ним угол CMA равен 180° − 96° = 84°.<br><br><b>Ответ:</b> 84",
          "tasks": [
            {
              "text": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 39°. Найдите угол CMA. Ответ дайте в градусах.",
              "answer": "102"
            },
            {
              "text": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 78°. Найдите угол CMA. Ответ дайте в градусах.",
              "answer": "24"
            },
            {
              "text": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 81°. Найдите угол CMA. Ответ дайте в градусах.",
              "answer": "18"
            },
            {
              "text": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 55°. Найдите угол CMA. Ответ дайте в градусах.",
              "answer": "70"
            },
            {
              "text": "На прямой AB взята точка M. Луч MD — биссектриса угла CMB. Известно, что ∠DMC = 32°. Найдите угол CMA. Ответ дайте в градусах.",
              "answer": "116"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д6. Угол между двумя биссектрисами треугольника",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"180\" y2=\"76\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"135\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"28\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"133\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text><text x=\"230\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">P</text><text x=\"143\" y=\"97\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text></svg></div>",
          "theory_task": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 84°, а ∠M = 42°. Ответ дайте в градусах.",
          "theory_sol": "В треугольнике ANM углы при N и M равны половинам исходных: \\(\\angle NAM=180^\\circ-\\frac{84^\\circ+42^\\circ}{2}=117^\\circ\\).<br><br><b>Ответ:</b> 117",
          "tasks": [
            {
              "text": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 40°, а ∠M = 80°. Ответ дайте в градусах.",
              "answer": "120"
            },
            {
              "text": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 73°, а ∠M = 59°. Ответ дайте в градусах.",
              "answer": "114"
            },
            {
              "text": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 65°, а ∠M = 47°. Ответ дайте в градусах.",
              "answer": "124"
            },
            {
              "text": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 76°, а ∠M = 38°. Ответ дайте в градусах.",
              "answer": "123"
            },
            {
              "text": "Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите ∠NAM, если ∠N = 54°, а ∠M = 66°. Ответ дайте в градусах.",
              "answer": "120"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д7. Биссектриса AL и угол ALC",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"178\" y=\"70\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">L</text></svg></div>",
          "theory_task": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 148°, ∠ABC равен 132°. Найдите угол ACB. Ответ дайте в градусах.",
          "theory_sol": "Так как AL — биссектриса, угол A вдвое больше угла BAL. По внешнему углу ∠ALC = ∠B + ∠A/2. Поэтому \\(\\angle C=180^\\circ+132^\\circ-2\\cdot148^\\circ=16^\\circ\\).<br><br><b>Ответ:</b> 16",
          "tasks": [
            {
              "text": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 152°, ∠ABC равен 137°. Найдите угол ACB. Ответ дайте в градусах.",
              "answer": "13"
            },
            {
              "text": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 58°, ∠ABC равен 54°. Найдите угол ACB. Ответ дайте в градусах.",
              "answer": "118"
            },
            {
              "text": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 35°, ∠ABC равен 18°. Найдите угол ACB. Ответ дайте в градусах.",
              "answer": "128"
            },
            {
              "text": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 105°, ∠ABC равен 83°. Найдите угол ACB. Ответ дайте в градусах.",
              "answer": "53"
            },
            {
              "text": "В треугольнике ABC проведена биссектриса AL, ∠ALC равен 115°, ∠ABC равен 100°. Найдите угол ACB. Ответ дайте в градусах.",
              "answer": "50"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д8. Угол между высотой и биссектрисой",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,126 145,25 233,126 35,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"145\" y1=\"25\" x2=\"145\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"79\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">a</text><text x=\"180\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">b</text><text x=\"152\" y=\"88\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">h</text></svg></div>",
          "theory_task": "В треугольнике ABC углы A и C равны 20° и 60° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
          "theory_sol": "Угол между высотой и биссектрисой из вершины B равен половине разности углов при основании: \\(\\frac{|60^\\circ-20^\\circ|}{2}=20^\\circ\\).<br><br><b>Ответ:</b> 20",
          "tasks": [
            {
              "text": "В треугольнике ABC углы A и C равны 20° и 50° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
              "answer": "15"
            },
            {
              "text": "В треугольнике ABC углы A и C равны 40° и 60° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
              "answer": "10"
            },
            {
              "text": "В треугольнике ABC углы A и C равны 30° и 50° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
              "answer": "10"
            },
            {
              "text": "В треугольнике ABC углы A и C равны 24° и 64° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
              "answer": "20"
            },
            {
              "text": "В треугольнике ABC углы A и C равны 38° и 78° соответственно. Найдите угол между высотой BH и биссектрисой BD. Ответ дайте в градусах.",
              "answer": "20"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },
        {
          "desc": "15.Д9. Равные отрезки AD и AC: угол DCB",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,130 245,30 115,130 35,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"115\" y1=\"130\" x2=\"107\" y2=\"96\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"151\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"248\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"117\" y=\"151\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"103\" y=\"90\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 124° и ∠CAB = 39°. Найдите ∠DCB. Ответ дайте в градусах.",
          "theory_sol": "Треугольник ADC равнобедренный, поэтому \\(\\angle ACD=\\frac{180^\\circ-39^\\circ}{2}=70,5^\\circ\\). Тогда ∠DCB = 124° − 70,5° = 53,5°.<br><br><b>Ответ:</b> 53,5",
          "tasks": [
            {
              "text": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 150° и ∠CAB = 9°. Найдите ∠DCB. Ответ дайте в градусах.",
              "answer": "64,5"
            },
            {
              "text": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 66° и ∠CAB = 52°. Найдите ∠DCB. Ответ дайте в градусах.",
              "answer": "2"
            },
            {
              "text": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 86° и ∠CAB = 32°. Найдите ∠DCB. Ответ дайте в градусах.",
              "answer": "12"
            },
            {
              "text": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 98° и ∠CAB = 44°. Найдите ∠DCB. Ответ дайте в градусах.",
              "answer": "30"
            },
            {
              "text": "Точка D на стороне AB треугольника ABC выбрана так, что AD = AC. Известно, что ∠ACB = 112° и ∠CAB = 28°. Найдите ∠DCB. Ответ дайте в градусах.",
              "answer": "36"
            }
          ],
          "topic": "I. Углы и биссектрисы"
        },

        // II. Равнобедренный и равносторонний треугольники
        {
          "desc": "15.Д10. Медиана равнобедренного треугольника по трём сторонам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "В треугольнике ABC AB = BC = 25, AC = 40. Найдите длину медианы BM.",
          "theory_sol": "В равнобедренном треугольнике медиана BM одновременно является высотой. \\(BM=\\sqrt{25^2-(40/2)^2}=15\\).<br><br><b>Ответ:</b> 15",
          "tasks": [
            {
              "text": "В треугольнике ABC AB = BC = 75, AC = 120. Найдите длину медианы BM.",
              "answer": "45"
            },
            {
              "text": "В треугольнике ABC AB = BC = 91, AC = 168. Найдите длину медианы BM.",
              "answer": "35"
            },
            {
              "text": "В треугольнике ABC AB = BC = 65, AC = 50. Найдите длину медианы BM.",
              "answer": "60"
            },
            {
              "text": "В треугольнике ABC AB = BC = 13, AC = 24. Найдите длину медианы BM.",
              "answer": "5"
            },
            {
              "text": "В треугольнике ABC AB = BC = 17, AC = 16. Найдите длину медианы BM.",
              "answer": "15"
            }
          ],
          "topic": "II. Равнобедренный и равносторонний треугольники"
        },
        {
          "desc": "15.Д11. Периметр равностороннего треугольника по высоте",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Высота равностороннего треугольника равна $10\\sqrt{3}$. Найдите его периметр.",
          "theory_sol": "Для равностороннего треугольника \\(h=\\frac{a\\sqrt3}{2}\\). Поэтому при h = $10\\sqrt{3}$ сторона a = 20, а периметр равен 60.<br><br><b>Ответ:</b> 60",
          "tasks": [
            {
              "text": "Высота равностороннего треугольника равна $9\\sqrt{3}$. Найдите его периметр.",
              "answer": "54"
            },
            {
              "text": "Высота равностороннего треугольника равна $6\\sqrt{3}$. Найдите его периметр.",
              "answer": "36"
            },
            {
              "text": "Высота равностороннего треугольника равна $12\\sqrt{3}$. Найдите его периметр.",
              "answer": "72"
            },
            {
              "text": "Высота равностороннего треугольника равна $15\\sqrt{3}$. Найдите его периметр.",
              "answer": "90"
            },
            {
              "text": "Высота равностороннего треугольника равна $7\\sqrt{3}$. Найдите его периметр.",
              "answer": "42"
            }
          ],
          "topic": "II. Равнобедренный и равносторонний треугольники"
        },
        {
          "desc": "15.Д12. Равносторонний треугольник: радиус описанной окружности",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"140\" cy=\"88\" r=\"62\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"86\" y1=\"121\" x2=\"140\" y2=\"26\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"140\" y1=\"26\" x2=\"194\" y2=\"121\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"86\" y1=\"121\" x2=\"194\" y2=\"121\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"141\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"136\" y=\"21\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"198\" y=\"141\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Сторона равностороннего треугольника равна $2\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
          "theory_sol": "В равностороннем треугольнике высота \\(h=\\frac{a\\sqrt3}{2}=3\\). Центр описанной окружности делит высоту в отношении 2:1 от вершины: \\(R=\\frac{2h}{3}=2\\).<br><br><b>Ответ:</b> 2",
          "tasks": [
            {
              "text": "Сторона равностороннего треугольника равна $6\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
              "answer": "6"
            },
            {
              "text": "Сторона равностороннего треугольника равна $8\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
              "answer": "8"
            },
            {
              "text": "Сторона равностороннего треугольника равна $11\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
              "answer": "11"
            },
            {
              "text": "Сторона равностороннего треугольника равна $14\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
              "answer": "14"
            },
            {
              "text": "Сторона равностороннего треугольника равна $18\\sqrt{3}$. Найдите радиус окружности, описанной около этого треугольника.",
              "answer": "18"
            }
          ],
          "topic": "II. Равнобедренный и равносторонний треугольники"
        },

        // III. Медианы и высоты
        {
          "desc": "15.Д13. Медиана к гипотенузе",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"45,130 215,28 215,130 45,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"202,130 202,117 215,117\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"130\" y2=\"79\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"130\" cy=\"79\" r=\"2.5\" fill=\"#111827\"/><text x=\"29\" y=\"151\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"220\" y=\"24\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"221\" y=\"149\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"116\" y=\"73\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 26, BC = 18. Найдите CM.",
          "theory_sol": "В прямоугольном треугольнике медиана, проведённая к гипотенузе, равна её половине: CM = AB/2 = 13.<br><br><b>Ответ:</b> 13",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 32, BC = 12. Найдите CM.",
              "answer": "16"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 42, BC = 30. Найдите CM.",
              "answer": "21"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 64, BC = 44. Найдите CM.",
              "answer": "32"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 50, BC = 24. Найдите CM.",
              "answer": "25"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, M — середина стороны AB, AB = 72, BC = 36. Найдите CM.",
              "answer": "36"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д14. Медианы и точка пересечения: найти ON",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"134\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"226\" y1=\"126\" x2=\"88\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"78\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text><text x=\"131\" y=\"94\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text></svg></div>",
          "theory_task": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 15, CM = 18. Найдите ON.",
          "theory_sol": "Точка пересечения медиан делит каждую из них в отношении 2:1 от вершины. Поэтому \\(ON=\\frac{1}{3}\\cdot15=5\\).<br><br><b>Ответ:</b> 5",
          "tasks": [
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 33, CM = 36. Найдите ON.",
              "answer": "11"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 21, CM = 24. Найдите ON.",
              "answer": "7"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 27, CM = 30. Найдите ON.",
              "answer": "9"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 12, CM = 15. Найдите ON.",
              "answer": "4"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 18, CM = 21. Найдите ON.",
              "answer": "6"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д15. Медианы и точка пересечения: найти AO",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"134\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"226\" y1=\"126\" x2=\"88\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"78\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text><text x=\"131\" y=\"94\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text></svg></div>",
          "theory_task": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 27, CM = 30. Найдите AO.",
          "theory_sol": "Точка пересечения медиан делит каждую из них в отношении 2:1 от вершины. Поэтому \\(AO=\\frac{2}{3}\\cdot27=18\\).<br><br><b>Ответ:</b> 18",
          "tasks": [
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 24, CM = 27. Найдите AO.",
              "answer": "16"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 30, CM = 33. Найдите AO.",
              "answer": "20"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 21, CM = 24. Найдите AO.",
              "answer": "14"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 36, CM = 39. Найдите AO.",
              "answer": "24"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 15, CM = 18. Найдите AO.",
              "answer": "10"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д16. Медианы и точка пересечения: найти OM",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"134\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"226\" y1=\"126\" x2=\"88\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"78\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text><text x=\"131\" y=\"94\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text></svg></div>",
          "theory_task": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 39, CM = 36. Найдите OM.",
          "theory_sol": "Точка пересечения медиан делит каждую из них в отношении 2:1 от вершины. Поэтому \\(OM=\\frac{1}{3}\\cdot36=12\\).<br><br><b>Ответ:</b> 12",
          "tasks": [
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 30, CM = 27. Найдите OM.",
              "answer": "9"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 21, CM = 18. Найдите OM.",
              "answer": "6"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 24, CM = 21. Найдите OM.",
              "answer": "7"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 15, CM = 12. Найдите OM.",
              "answer": "4"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 36, CM = 33. Найдите OM.",
              "answer": "11"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д17. Медианы и точка пересечения: найти CO",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"134\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"226\" y1=\"126\" x2=\"88\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"78\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"76\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text><text x=\"131\" y=\"94\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">O</text></svg></div>",
          "theory_task": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 12, CM = 9. Найдите CO.",
          "theory_sol": "Точка пересечения медиан делит каждую из них в отношении 2:1 от вершины. Поэтому \\(CO=\\frac{2}{3}\\cdot9=6\\).<br><br><b>Ответ:</b> 6",
          "tasks": [
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 24, CM = 21. Найдите CO.",
              "answer": "14"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 15, CM = 12. Найдите CO.",
              "answer": "8"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 21, CM = 18. Найдите CO.",
              "answer": "12"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 30, CM = 27. Найдите CO.",
              "answer": "18"
            },
            {
              "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC соответственно. Отрезки AN и CM пересекаются в точке O, AN = 33, CM = 30. Найдите CO.",
              "answer": "20"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д18. Медиана и высота: найти AH при BC = BM",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"180\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"135\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"175\" y=\"20\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"129\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"178\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 59 и BC = BM. Найдите AH.",
          "theory_sol": "Так как BM — медиана, \\(AM=MC=\\frac{59}{2}=29{,}5\\). Треугольник BMC равнобедренный (BC = BM), а BH — его высота, поэтому \\(MH=HC=\\frac{29{,}5}{2}=14{,}75\\). Значит \\(AH=AM+MH=29{,}5+14{,}75=44{,}25\\).<br><br><b>Ответ:</b> 44,25",
          "tasks": [
            {
              "text": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 24 и BC = BM. Найдите AH.",
              "answer": "18"
            },
            {
              "text": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 36 и BC = BM. Найдите AH.",
              "answer": "27"
            },
            {
              "text": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 44 и BC = BM. Найдите AH.",
              "answer": "33"
            },
            {
              "text": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 52 и BC = BM. Найдите AH.",
              "answer": "39"
            },
            {
              "text": "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 68 и BC = BM. Найдите AH.",
              "answer": "51"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д19. Перпендикуляр к медиане, делящий её пополам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 90,48 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"90\" y1=\"48\" x2=\"135\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"112.5\" y2=\"87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"28\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"86\" y=\"43\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"135\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"116\" y=\"83\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 10.",
          "theory_sol": "Точка A лежит на серединном перпендикуляре к BM, значит AB = AM. Медиана даёт AM = AC/2 = 5.<br><br><b>Ответ:</b> 5",
          "tasks": [
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 18.",
              "answer": "9"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 24.",
              "answer": "12"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 36.",
              "answer": "18"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 44.",
              "answer": "22"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит её пополам. Найдите сторону AB, если сторона AC равна 50.",
              "answer": "25"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д20. Перпендикуляр к медиане и биссектриса вершины",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 90,48 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"90\" y1=\"48\" x2=\"135\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"42\" y1=\"126\" x2=\"112.5\" y2=\"87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"28\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"86\" y=\"43\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"135\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"116\" y=\"83\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 3.",
          "theory_sol": "В этой конфигурации AB = AM. Так как BM — медиана, AM = AC/2, поэтому AC = 2·3 = 6.<br><br><b>Ответ:</b> 6",
          "tasks": [
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 4.",
              "answer": "8"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 6.",
              "answer": "12"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 8.",
              "answer": "16"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 10.",
              "answer": "20"
            },
            {
              "text": "Прямая AD, перпендикулярная медиане BM треугольника ABC, делит угол BAC пополам. Найдите сторону AC, если сторона AB равна 12.",
              "answer": "24"
            }
          ],
          "topic": "III. Медианы и высоты"
        },
        {
          "desc": "15.Д21. Медиана и высота: угол AMB",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"180\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"135\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"175\" y=\"20\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"129\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"178\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 56, HC = 14 и ∠ACB = 38°. Найдите угол AMB. Ответ дайте в градусах.",
          "theory_sol": "Так как M — середина AC, \\(MC=28\\), а \\(HC=14\\), следовательно \\(HM=14=HC\\). Прямоугольные треугольники BHM и BHC равны по двум катетам, поэтому \\(\\angle BMH=\\angle ACB=38^\\circ\\). Лучи MA и MH противоположны, значит \\(\\angle AMB=180^\\circ-38^\\circ=142^\\circ\\).<br><br><b>Ответ:</b> 142",
          "tasks": [
            {
              "text": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 48, HC = 12 и ∠ACB = 32°. Найдите угол AMB. Ответ дайте в градусах.",
              "answer": "148"
            },
            {
              "text": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 60, HC = 15 и ∠ACB = 41°. Найдите угол AMB. Ответ дайте в градусах.",
              "answer": "139"
            },
            {
              "text": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 72, HC = 18 и ∠ACB = 53°. Найдите угол AMB. Ответ дайте в градусах.",
              "answer": "127"
            },
            {
              "text": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 80, HC = 20 и ∠ACB = 64°. Найдите угол AMB. Ответ дайте в градусах.",
              "answer": "116"
            },
            {
              "text": "В треугольнике ABC BM — медиана и BH — высота. Известно, что AC = 96, HC = 24 и ∠ACB = 72°. Найдите угол AMB. Ответ дайте в градусах.",
              "answer": "108"
            }
          ],
          "topic": "III. Медианы и высоты"
        },

        // IV. Параллелограмм
        {
          "desc": "15.Д22. Параллелограмм: биссектриса и острый угол",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"45,125 120,125 185,35 110,35 45,125\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"125\" x2=\"163.8\" y2=\"64.1\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"29\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"117\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"189\" y=\"29\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"99\" y=\"28\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 41°. Ответ дайте в градусах.",
          "theory_sol": "Так как \\(AD\\parallel BC\\), углы между биссектрисой и сторонами AD, BC равны как накрест лежащие. Угол A равен \\(2\\cdot41^\\circ=82^\\circ\\), смежный с ним угол равен 98°. Искомый острый угол равен 82°.<br><br><b>Ответ:</b> 82",
          "tasks": [
            {
              "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 22°. Ответ дайте в градусах.",
              "answer": "44"
            },
            {
              "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 27°. Ответ дайте в градусах.",
              "answer": "54"
            },
            {
              "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 34°. Ответ дайте в градусах.",
              "answer": "68"
            },
            {
              "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 38°. Ответ дайте в градусах.",
              "answer": "76"
            },
            {
              "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 43°. Ответ дайте в градусах.",
              "answer": "86"
            }
          ],
          "topic": "IV. Параллелограмм"
        },
        {
          "desc": "15.Д23. Параллелограмм: угол между диагоналями",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"125\" x2=\"190\" y2=\"125\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"190\" y1=\"125\" x2=\"230\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"230\" y1=\"55\" x2=\"95\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95\" y1=\"55\" x2=\"55\" y2=\"125\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"40\" y=\"145\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"190\" y=\"145\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"234\" y=\"52\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"82\" y=\"52\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">D</text><line x1=\"55\" y1=\"125\" x2=\"230\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95\" y1=\"55\" x2=\"190\" y2=\"125\" stroke=\"#111827\" stroke-width=\"2\"/></svg></div>",
          "theory_task": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 70°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "theory_sol": "Пусть O — точка пересечения диагоналей. Тогда \\(AO=OC=AC/2=AB=CD\\). Треугольник COD равнобедренный, следовательно, \\(\\angle COD=\\frac{180^\\circ-\\angle ACD}{2}=\\frac{180^\\circ-70^\\circ}{2}=55^\\circ\\). Это искомый угол между диагоналями.<br><br><b>Ответ:</b> 55",
          "tasks": [
            {
              "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 20°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
              "answer": "80"
            },
            {
              "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 36°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
              "answer": "72"
            },
            {
              "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 52°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
              "answer": "64"
            },
            {
              "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 68°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
              "answer": "56"
            },
            {
              "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD = 84°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
              "answer": "48"
            }
          ],
          "topic": "IV. Параллелограмм"
        },

        // V. Подобие и средние линии
        {
          "desc": "15.Д24. Параллельный отрезок: найти AM",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"82\" y1=\"82\" x2=\"178\" y2=\"82\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"71\" y=\"82\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"82\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text></svg></div>",
          "theory_task": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 24, AC = 21, MN = 14. Найдите AM.",
          "theory_sol": "По подобию BM/BA = MN/AC. Поэтому \\(AM=AB-BM=AB\\cdot(1-\\frac{MN}{AC})=24\\cdot(1-\\frac{14}{21})=8\\).<br><br><b>Ответ:</b> 8",
          "tasks": [
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 9, AC = 18, MN = 8. Найдите AM.",
              "answer": "5"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 54, AC = 48, MN = 40. Найдите AM.",
              "answer": "9"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 66, AC = 44, MN = 24. Найдите AM.",
              "answer": "30"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 30, AC = 25, MN = 15. Найдите AM.",
              "answer": "12"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AB = 48, AC = 32, MN = 20. Найдите AM.",
              "answer": "18"
            }
          ],
          "topic": "V. Подобие и средние линии"
        },
        {
          "desc": "15.Д25. Подобие: отношение BK:KA и средняя линия KM",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"86\" y1=\"78\" x2=\"181\" y2=\"77\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"28\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"133\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"73\" y=\"74\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">K</text><text x=\"186\" y=\"73\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 3 : 4, KM = 18.",
          "theory_sol": "Треугольники BKM и BAC подобны, поэтому \\(\\frac{KM}{AC}=\\frac{BK}{BA}=\\frac{3}{3+4}\\). Отсюда \\(AC=42\\).<br><br><b>Ответ:</b> 42",
          "tasks": [
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 3 : 7, KM = 12.",
              "answer": "40"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 1 : 4, KM = 13.",
              "answer": "65"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 4 : 5, KM = 16.",
              "answer": "36"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 2 : 3, KM = 14.",
              "answer": "35"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках K и M соответственно. Найдите AC, если BK : KA = 3 : 5, KM = 9.",
              "answer": "24"
            }
          ],
          "topic": "V. Подобие и средние линии"
        },
        {
          "desc": "15.Д26. Площадь подобных треугольников через параллельный отрезок",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"82\" y1=\"82\" x2=\"178\" y2=\"82\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"71\" y=\"82\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"183\" y=\"82\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text></svg></div>",
          "theory_task": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 18, MN = 8. Площадь треугольника ABC равна 81. Найдите площадь треугольника MBN.",
          "theory_sol": "Рассмотрим треугольники ABC и MBN: они подобны по двум углам (угол B общий, остальные соответственные при параллельных MN и AC). Площади относятся как квадраты сходственных сторон: \\(S_{MBN}=\\left(\\frac{MN}{AC}\\right)^2 S_{ABC}=\\left(\\frac{8}{18}\\right)^2\\cdot81=16\\).<br><br><b>Ответ:</b> 16",
          "tasks": [
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 36, MN = 27. Площадь треугольника ABC равна 96. Найдите площадь треугольника MBN.",
              "answer": "54"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 16, MN = 12. Площадь треугольника ABC равна 80. Найдите площадь треугольника MBN.",
              "answer": "45"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 48, MN = 40. Площадь треугольника ABC равна 72. Найдите площадь треугольника MBN.",
              "answer": "50"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 20, MN = 15. Площадь треугольника ABC равна 64. Найдите площадь треугольника MBN.",
              "answer": "36"
            },
            {
              "text": "Прямая, параллельная стороне AC треугольника ABC, пересекает стороны AB и BC в точках M и N соответственно, AC = 24, MN = 18. Площадь треугольника ABC равна 112. Найдите площадь треугольника MBN.",
              "answer": "63"
            }
          ],
          "source_url": "https://oge.sdamgia.ru/problem?id=356242",
          "topic": "V. Подобие и средние линии"
        },
        {
          "desc": "15.Д27. Средняя линия и площади подобных треугольников",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"135\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"25\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"225\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"130\" x2=\"180\" y2=\"77.5\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"20\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"150\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"129\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">D</text><text x=\"184\" y=\"77\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">E</text></svg></div>",
          "theory_task": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 57. Найдите площадь треугольника ABC.",
          "theory_sol": "Так как DE — средняя линия, \\(DE\\parallel AB\\). Треугольники CDE и CAB подобны по двум углам с коэффициентом подобия 1:2. Площади подобных фигур относятся как квадраты коэффициентов подобия: \\(S_{ABC}=4\\cdot S_{CDE}=4\\cdot57=228\\).<br><br><b>Ответ:</b> 228",
          "tasks": [
            {
              "text": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 18. Найдите площадь треугольника ABC.",
              "answer": "72"
            },
            {
              "text": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 25. Найдите площадь треугольника ABC.",
              "answer": "100"
            },
            {
              "text": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 32. Найдите площадь треугольника ABC.",
              "answer": "128"
            },
            {
              "text": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 45. Найдите площадь треугольника ABC.",
              "answer": "180"
            },
            {
              "text": "В треугольнике ABC известно, что DE — средняя линия. Площадь треугольника CDE равна 60. Найдите площадь треугольника ABC.",
              "answer": "240"
            }
          ],
          "topic": "V. Подобие и средние линии"
        },
        {
          "desc": "15.Д28. Площадь четырёхугольника между средними линиями",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"134\" y1=\"126\" x2=\"181\" y2=\"75\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"28\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"133\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"185\" y=\"72\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"125\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text></svg></div>",
          "theory_task": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 57. Найдите площадь четырёхугольника ABMN.",
          "theory_sol": "Треугольник CNM подобен ABC с коэффициентом 1/2, значит занимает четверть площади всего треугольника. Четырёхугольник ABMN занимает остальные три четверти, поэтому его площадь в 3 раза больше: 57·3=171.<br><br><b>Ответ:</b> 171",
          "tasks": [
            {
              "text": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 42. Найдите площадь четырёхугольника ABMN.",
              "answer": "126"
            },
            {
              "text": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 67. Найдите площадь четырёхугольника ABMN.",
              "answer": "201"
            },
            {
              "text": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 38. Найдите площадь четырёхугольника ABMN.",
              "answer": "114"
            },
            {
              "text": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 24. Найдите площадь четырёхугольника ABMN.",
              "answer": "72"
            },
            {
              "text": "В треугольнике ABC отмечены середины M и N сторон BC и AC соответственно. Площадь треугольника CNM равна 36. Найдите площадь четырёхугольника ABMN.",
              "answer": "108"
            }
          ],
          "topic": "V. Подобие и средние линии"
        },

        // VI. Площади треугольников
        {
          "desc": "15.Д29. Площадь по двум частям основания и высоте (рисунок)",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,126 145,25 233,126 35,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"145\" y1=\"25\" x2=\"145\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"87\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">a</text><text x=\"186\" y=\"146\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">b</text><text x=\"153\" y=\"87\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">h</text></svg></div>",
          "theory_task": "Найдите площадь треугольника, изображённого на рисунке: высота равна 8, основание разбито на отрезки 15 и 6.",
          "theory_sol": "Основание равно 15 + 6 = 21. Площадь \\(S=\\frac12 ah=\\frac{(15+6)\\cdot8}{2}=84\\).<br><br><b>Ответ:</b> 84",
          "tasks": [
            {
              "text": "Найдите площадь треугольника, изображённого на рисунке: высота равна 48, основание разбито на отрезки 55 и 20.",
              "answer": "1800"
            },
            {
              "text": "Найдите площадь треугольника, изображённого на рисунке: высота равна 16, основание разбито на отрезки 30 и 12.",
              "answer": "336"
            },
            {
              "text": "Найдите площадь треугольника, изображённого на рисунке: высота равна 192, основание разбито на отрезки 56 и 80.",
              "answer": "13056"
            },
            {
              "text": "Найдите площадь треугольника, изображённого на рисунке: высота равна 60, основание разбито на отрезки 32 и 11.",
              "answer": "1290"
            },
            {
              "text": "Найдите площадь треугольника, изображённого на рисунке: высота равна 168, основание разбито на отрезки 26 и 95.",
              "answer": "10164"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д30. Площадь части треугольника BCD",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105\" y1=\"126\" x2=\"135\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"103\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "На стороне AC треугольника ABC отмечена точка D так, что AD = 6, DC = 10. Площадь треугольника ABC равна 48. Найдите площадь треугольника BCD.",
          "theory_sol": "Оба треугольника имеют одинаковую высоту из B к AC. Поэтому \\(S_{BCD}=S_{ABC}\\cdot\\frac{DC}{AC}=48\\cdot\\frac{10}{6+10}=30\\).<br><br><b>Ответ:</b> 30",
          "tasks": [
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 2, DC = 7. Площадь треугольника ABC равна 27. Найдите площадь треугольника BCD.",
              "answer": "21"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 3, DC = 7. Площадь треугольника ABC равна 20. Найдите площадь треугольника BCD.",
              "answer": "14"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 4, DC = 8. Площадь треугольника ABC равна 36. Найдите площадь треугольника BCD.",
              "answer": "24"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 5, DC = 7. Площадь треугольника ABC равна 60. Найдите площадь треугольника BCD.",
              "answer": "35"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 6, DC = 9. Площадь треугольника ABC равна 45. Найдите площадь треугольника BCD.",
              "answer": "27"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д31. Площадь части треугольника ABD",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105\" y1=\"126\" x2=\"135\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"103\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
          "theory_task": "На стороне AC треугольника ABC отмечена точка D так, что AD = 5, DC = 7. Площадь треугольника ABC равна 60. Найдите площадь треугольника ABD.",
          "theory_sol": "Треугольники ABD и ABC имеют общую высоту к AC. Поэтому \\(S_{ABD}=60\\cdot\\frac{5}{5+7}=25\\).<br><br><b>Ответ:</b> 25",
          "tasks": [
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 4, DC = 7. Площадь треугольника ABC равна 55. Найдите площадь треугольника ABD.",
              "answer": "20"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 3, DC = 10. Площадь треугольника ABC равна 39. Найдите площадь треугольника ABD.",
              "answer": "9"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 2, DC = 13. Площадь треугольника ABC равна 75. Найдите площадь треугольника ABD.",
              "answer": "10"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 6, DC = 9. Площадь треугольника ABC равна 45. Найдите площадь треугольника ABD.",
              "answer": "18"
            },
            {
              "text": "На стороне AC треугольника ABC отмечена точка D так, что AD = 7, DC = 8. Площадь треугольника ABC равна 30. Найдите площадь треугольника ABD.",
              "answer": "14"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д32. Две высоты к разным сторонам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "У треугольника со сторонами 2 и 10 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 5. Чему равна высота, проведённая ко второй стороне?",
          "theory_sol": "Два выражения площади равны: \\(\\frac{2\\cdot5}{2}=\\frac{10\\cdot h_2}{2}\\), поэтому \\(h_2=1\\).<br><br><b>Ответ:</b> 1",
          "tasks": [
            {
              "text": "У треугольника со сторонами 15 и 5 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 1. Чему равна высота, проведённая ко второй стороне?",
              "answer": "3"
            },
            {
              "text": "У треугольника со сторонами 2 и 4 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 2. Чему равна высота, проведённая ко второй стороне?",
              "answer": "1"
            },
            {
              "text": "У треугольника со сторонами 8 и 6 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 3. Чему равна высота, проведённая ко второй стороне?",
              "answer": "4"
            },
            {
              "text": "У треугольника со сторонами 12 и 18 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 6. Чему равна высота, проведённая ко второй стороне?",
              "answer": "4"
            },
            {
              "text": "У треугольника со сторонами 9 и 15 проведены высоты к этим сторонам. Высота, проведённая к первой стороне, равна 5. Чему равна высота, проведённая ко второй стороне?",
              "answer": "3"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д33. Площадь прямоугольного треугольника с углом 45°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"80,130 200,130 200,10 80,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"188,130 188,118 200,118\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"66\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"11\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В прямоугольном треугольнике один из катетов равен 4, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
          "theory_sol": "Острые углы по 45°, поэтому катеты равны: оба по 4. Площадь равна \\(\\frac{4^2}{2}=8\\).<br><br><b>Ответ:</b> 8",
          "tasks": [
            {
              "text": "В прямоугольном треугольнике один из катетов равен 10, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
              "answer": "50"
            },
            {
              "text": "В прямоугольном треугольнике один из катетов равен 32, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
              "answer": "512"
            },
            {
              "text": "В прямоугольном треугольнике один из катетов равен 24, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
              "answer": "288"
            },
            {
              "text": "В прямоугольном треугольнике один из катетов равен 18, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
              "answer": "162"
            },
            {
              "text": "В прямоугольном треугольнике один из катетов равен 14, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.",
              "answer": "98"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д34. Площадь по гипотенузе и углу 45°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"80,130 200,130 200,10 80,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"188,130 188,118 200,118\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"66\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"11\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В прямоугольном треугольнике гипотенуза равна 82, а один из острых углов равен 45°. Найдите площадь треугольника.",
          "theory_sol": "Треугольник равнобедренный прямоугольный, \\(S=\\frac{c^2}{4}=\\frac{82^2}{4}=1681\\).<br><br><b>Ответ:</b> 1681",
          "tasks": [
            {
              "text": "В прямоугольном треугольнике гипотенуза равна 22, а один из острых углов равен 45°. Найдите площадь треугольника.",
              "answer": "121"
            },
            {
              "text": "В прямоугольном треугольнике гипотенуза равна 36, а один из острых углов равен 45°. Найдите площадь треугольника.",
              "answer": "324"
            },
            {
              "text": "В прямоугольном треугольнике гипотенуза равна 24, а один из острых углов равен 45°. Найдите площадь треугольника.",
              "answer": "144"
            },
            {
              "text": "В прямоугольном треугольнике гипотенуза равна 18, а один из острых углов равен 45°. Найдите площадь треугольника.",
              "answer": "81"
            },
            {
              "text": "В прямоугольном треугольнике гипотенуза равна 14, а один из острых углов равен 45°. Найдите площадь треугольника.",
              "answer": "49"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д35. Площадь равнобедренного треугольника по боковой стороне и основанию",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Боковая сторона равнобедренного треугольника равна 25, а основание равно 48. Найдите площадь этого треугольника.",
          "theory_sol": "Высота равна \\(h=\\sqrt{25^2-(48/2)^2}=7\\). Площадь равна \\(S=168\\).<br><br><b>Ответ:</b> 168",
          "tasks": [
            {
              "text": "Боковая сторона равнобедренного треугольника равна 50, а основание равно 60. Найдите площадь этого треугольника.",
              "answer": "1200"
            },
            {
              "text": "Боковая сторона равнобедренного треугольника равна 13, а основание равно 24. Найдите площадь этого треугольника.",
              "answer": "60"
            },
            {
              "text": "Боковая сторона равнобедренного треугольника равна 17, а основание равно 30. Найдите площадь этого треугольника.",
              "answer": "120"
            },
            {
              "text": "Боковая сторона равнобедренного треугольника равна 37, а основание равно 24. Найдите площадь этого треугольника.",
              "answer": "420"
            },
            {
              "text": "Боковая сторона равнобедренного треугольника равна 65, а основание равно 50. Найдите площадь этого треугольника.",
              "answer": "1500"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д36. Площадь равнобедренного треугольника по периметру и боковой стороне",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Периметр равнобедренного треугольника равен 48, а боковая сторона — 15. Найдите площадь треугольника.",
          "theory_sol": "Основание равно 48 − 2·15 = 18. Высота равна \\(\\sqrt{15^2-(9)^2}=12\\). Следовательно, площадь равна 108.<br><br><b>Ответ:</b> 108",
          "tasks": [
            {
              "text": "Периметр равнобедренного треугольника равен 196, а боковая сторона — 53. Найдите площадь треугольника.",
              "answer": "1260"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 80, а боковая сторона — 25. Найдите площадь треугольника.",
              "answer": "300"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 100, а боковая сторона — 29. Найдите площадь треугольника.",
              "answer": "420"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 90, а боковая сторона — 25. Найдите площадь треугольника.",
              "answer": "300"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 98, а боковая сторона — 37. Найдите площадь треугольника.",
              "answer": "420"
            }
          ],
          "topic": "VI. Площади треугольников"
        },
        {
          "desc": "15.Д37. Площадь равнобедренного треугольника по периметру и основанию",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Периметр равнобедренного треугольника равен 144, а основание — 64. Найдите площадь треугольника.",
          "theory_sol": "Боковая сторона равна (144−64)/2 = 40. Высота равна 24, поэтому площадь равна 768.<br><br><b>Ответ:</b> 768",
          "tasks": [
            {
              "text": "Периметр равнобедренного треугольника равен 162, а основание — 72. Найдите площадь треугольника.",
              "answer": "972"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 48, а основание — 18. Найдите площадь треугольника.",
              "answer": "108"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 64, а основание — 30. Найдите площадь треугольника.",
              "answer": "120"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 50, а основание — 24. Найдите площадь треугольника.",
              "answer": "60"
            },
            {
              "text": "Периметр равнобедренного треугольника равен 128, а основание — 60. Найдите площадь треугольника.",
              "answer": "480"
            }
          ],
          "topic": "VI. Площади треугольников"
        },

        // VII. Прямоугольный треугольник и теорема Пифагора
        {
          "desc": "15.Д38. Площадь прямоугольного треугольника по катету и гипотенузе",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 8 и 17.",
          "theory_sol": "По теореме Пифагора второй катет равен \\(\\sqrt{17^2-8^2}=15\\). Площадь равна 60.<br><br><b>Ответ:</b> 60",
          "tasks": [
            {
              "text": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 40 и 85.",
              "answer": "1500"
            },
            {
              "text": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 32 и 68.",
              "answer": "960"
            },
            {
              "text": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 15 и 39.",
              "answer": "270"
            },
            {
              "text": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 7 и 25.",
              "answer": "84"
            },
            {
              "text": "Найдите площадь прямоугольного треугольника, если его катет и гипотенуза равны соответственно 9 и 41.",
              "answer": "180"
            }
          ],
          "topic": "VII. Прямоугольный треугольник и теорема Пифагора"
        },
        {
          "desc": "15.Д39. Высота к гипотенузе по катетам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"226\" y1=\"126\" x2=\"148\" y2=\"87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"140\" y=\"82\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "Катеты прямоугольного треугольника равны 15 и 20. Найдите высоту, проведённую к гипотенузе.",
          "theory_sol": "Гипотенуза равна \\(c=\\sqrt{15^2+20^2}=25\\). Приравнивая площади, \\(\\frac{ab}{2}=\\frac{ch}{2}\\), получаем \\(h=12\\).<br><br><b>Ответ:</b> 12",
          "tasks": [
            {
              "text": "Катеты прямоугольного треугольника равны 21 и 72. Найдите высоту, проведённую к гипотенузе.",
              "answer": "20,16"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 24 и 7. Найдите высоту, проведённую к гипотенузе.",
              "answer": "6,72"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 12 и 16. Найдите высоту, проведённую к гипотенузе.",
              "answer": "9,6"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 9 и 12. Найдите высоту, проведённую к гипотенузе.",
              "answer": "7,2"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 18 и 24. Найдите высоту, проведённую к гипотенузе.",
              "answer": "14,4"
            }
          ],
          "topic": "VII. Прямоугольный треугольник и теорема Пифагора"
        },
        {
          "desc": "15.Д40. Высота к гипотенузе по её отрезкам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"45,130 215,130 215,28 45,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"170\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"166,63 174,68 178,60\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"220\" y=\"25\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"220\" y=\"149\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"156\" y=\"52\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 4, BH = 16. Найдите CH.",
          "theory_sol": "По свойству высоты к гипотенузе \\(CH^2=AH\\cdot BH=4\\cdot16\\). Поэтому \\(CH=8\\).<br><br><b>Ответ:</b> 8",
          "tasks": [
            {
              "text": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 7, BH = 28. Найдите CH.",
              "answer": "14"
            },
            {
              "text": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 6, BH = 54. Найдите CH.",
              "answer": "18"
            },
            {
              "text": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 3, BH = 27. Найдите CH.",
              "answer": "9"
            },
            {
              "text": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 9, BH = 16. Найдите CH.",
              "answer": "12"
            },
            {
              "text": "На гипотенузу AB прямоугольного треугольника ABC опущена высота CH, AH = 8, BH = 18. Найдите CH.",
              "answer": "12"
            }
          ],
          "topic": "VII. Прямоугольный треугольник и теорема Пифагора"
        },
        {
          "desc": "15.Д41. Катет по проекции на гипотенузу",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"45,130 135,40 225,130 45,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"40\" x2=\"135\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"135,118 147,118 147,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"31\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"136\" y=\"149\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 8, AC = 32.",
          "theory_sol": "Квадрат катета равен произведению гипотенузы и проекции катета на неё: \\(AB^2=AH\\cdot AC=8\\cdot32\\), откуда \\(AB=16\\).<br><br><b>Ответ:</b> 16",
          "tasks": [
            {
              "text": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 6, AC = 24.",
              "answer": "12"
            },
            {
              "text": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 10, AC = 40.",
              "answer": "20"
            },
            {
              "text": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 5, AC = 45.",
              "answer": "15"
            },
            {
              "text": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 4, AC = 25.",
              "answer": "10"
            },
            {
              "text": "Точка H является основанием высоты, проведённой из вершины прямого угла B треугольника ABC к гипотенузе AC. Найдите AB, если AH = 9, AC = 36.",
              "answer": "18"
            }
          ],
          "topic": "VII. Прямоугольный треугольник и теорема Пифагора"
        },

        // VIII. Тригонометрия и комбинированные задачи
        {
          "desc": "15.Д42. Прямоугольный треугольник: катет по тангенсу угла A",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202\" y1=\"130\" x2=\"202\" y2=\"117\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202\" y1=\"117\" x2=\"215\" y2=\"117\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"220\" y=\"25\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"220\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C равен 90°, AC = 16, tgA = 0,75. Найдите BC.",
          "theory_sol": "По определению тангенса \\(\\operatorname{tg}A=\\frac{BC}{AC}\\). Поэтому \\(BC=16\\cdot0{,}75=12\\).<br><br><b>Ответ:</b> 12",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 12, tgA = 0,5. Найдите BC.",
              "answer": "6"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 15, tgA = 0,6. Найдите BC.",
              "answer": "9"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 20, tgA = 0,75. Найдите BC.",
              "answer": "15"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 25, tgA = 1,2. Найдите BC.",
              "answer": "30"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 30, tgA = 1,4. Найдите BC.",
              "answer": "42"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д43. Прилежащий катет по тангенсу",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C прямой, BC = 18, tg A = 3/1. Найдите AC.",
          "theory_sol": "Так как \\(\\operatorname{tg}A=\\frac{BC}{AC}\\), то \\(AC=BC/\\operatorname{tg} A=6\\).<br><br><b>Ответ:</b> 6",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C прямой, BC = 12, tg A = 3/2. Найдите AC.",
              "answer": "8"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 20, tg A = 5/2. Найдите AC.",
              "answer": "8"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 27, tg A = 3/1. Найдите AC.",
              "answer": "9"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 15, tg A = 5/3. Найдите AC.",
              "answer": "9"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 36, tg A = 4/3. Найдите AC.",
              "answer": "27"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д44. Прямоугольный треугольник: гипотенуза по синусу",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202\" y1=\"130\" x2=\"202\" y2=\"117\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202\" y1=\"117\" x2=\"215\" y2=\"117\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"220\" y=\"25\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"220\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C прямой, BC = 10, sin A = 0,5. Найдите AB.",
          "theory_sol": "Так как \\(\\sin A=\\frac{BC}{AB}\\), то \\(AB=\\frac{10}{0{,}5}=20\\).<br><br><b>Ответ:</b> 20",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C прямой, BC = 9, sin A = 0,6. Найдите AB.",
              "answer": "15"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 12, sin A = 0,75. Найдите AB.",
              "answer": "16"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 14, sin A = 0,7. Найдите AB.",
              "answer": "20"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 18, sin A = 0,45. Найдите AB.",
              "answer": "40"
            },
            {
              "text": "В треугольнике ABC угол C прямой, BC = 24, sin A = 0,8. Найдите AB.",
              "answer": "30"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д45. Гипотенуза по косинусу острого угла",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C прямой, AC = 4, cos A = 4/5. Найдите AB.",
          "theory_sol": "По определению косинуса \\(\\cos A=\\frac{AC}{AB}\\), поэтому \\(AB=\\frac{4\\cdot5}{4}=5\\).<br><br><b>Ответ:</b> 5",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C прямой, AC = 15, cos A = 5/7. Найдите AB.",
              "answer": "21"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 18, cos A = 6/9. Найдите AB.",
              "answer": "27"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 12, cos A = 6/8. Найдите AB.",
              "answer": "16"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 24, cos A = 4/5. Найдите AB.",
              "answer": "30"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 9, cos A = 3/5. Найдите AB.",
              "answer": "15"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д46. Косинус при известной высоте в равнобедренном треугольнике",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"70,130 135,0 200,130 70,130\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"70\" y1=\"130\" x2=\"174\" y2=\"78\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"169,88 179,93 184,83\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"56\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"17\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"203\" y=\"150\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"178\" y=\"72\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 21 и CH = 14. Найдите cos B.",
          "theory_sol": "AB = BC = BH + CH = 35. В прямоугольном треугольнике ABH \\(\\cos B=\\frac{BH}{AB}=\\frac{21}{35}=0,6\\).<br><br><b>Ответ:</b> 0,6",
          "tasks": [
            {
              "text": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 2 и CH = 18. Найдите cos B.",
              "answer": "0,1"
            },
            {
              "text": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 14 и CH = 11. Найдите cos B.",
              "answer": "0,56"
            },
            {
              "text": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 48 и CH = 2. Найдите cos B.",
              "answer": "0,96"
            },
            {
              "text": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 15 и CH = 10. Найдите cos B.",
              "answer": "0,6"
            },
            {
              "text": "В треугольнике ABC AB = BC, а высота AH делит сторону BC на отрезки BH = 18 и CH = 12. Найдите cos B.",
              "answer": "0,6"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д47. Косинус острого угла по высоте и стороне",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"65,135 135,12 229,129 65,135\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"65\" y1=\"135\" x2=\"168\" y2=\"53\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"51\" y=\"154\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"127\" y=\"10\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"233\" y=\"149\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"172\" y=\"50\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "В остроугольном треугольнике ABC высота AH равна √2275, а сторона AB равна 50. Найдите cos B.",
          "theory_sol": "Из прямоугольного треугольника ABH получаем \\(BH=\\sqrt{AB^2-AH^2}=15\\). Поэтому \\(\\cos B=\\frac{BH}{AB}=\\frac{15}{50}=0,3\\).<br><br><b>Ответ:</b> 0,3",
          "tasks": [
            {
              "text": "В остроугольном треугольнике ABC высота AH равна √4116, а сторона AB равна 70. Найдите cos B.",
              "answer": "0,4"
            },
            {
              "text": "В остроугольном треугольнике ABC высота AH равна √1587, а сторона AB равна 46. Найдите cos B.",
              "answer": "0,5"
            },
            {
              "text": "В остроугольном треугольнике ABC высота AH равна √1183, а сторона AB равна 52. Найдите cos B.",
              "answer": "0,75"
            },
            {
              "text": "В остроугольном треугольнике ABC высота AH равна √576, а сторона AB равна 25. Найдите cos B.",
              "answer": "0,28"
            },
            {
              "text": "В остроугольном треугольнике ABC высота AH равна √2704, а сторона AB равна 65. Найдите cos B.",
              "answer": "0,6"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д48. Синус наименьшего угла при катетах с корнями",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Катеты прямоугольного треугольника равны 9 и √819. Найдите синус наименьшего угла этого треугольника.",
          "theory_sol": "Наименьший угол лежит против меньшего катета 9. Гипотенуза равна \\(\\sqrt{9^2+(819)}=30\\). Следовательно, синус равен \\(\\frac{9}{30}=0,3\\).<br><br><b>Ответ:</b> 0,3",
          "tasks": [
            {
              "text": "Катеты прямоугольного треугольника равны 5 и √375. Найдите синус наименьшего угла этого треугольника.",
              "answer": "0,25"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 3 и √216. Найдите синус наименьшего угла этого треугольника.",
              "answer": "0,2"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 1 и √99. Найдите синус наименьшего угла этого треугольника.",
              "answer": "0,1"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 6 и √864. Найдите синус наименьшего угла этого треугольника.",
              "answer": "0,2"
            },
            {
              "text": "Катеты прямоугольного треугольника равны 8 и √1536. Найдите синус наименьшего угла этого треугольника.",
              "answer": "0,2"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д49. Гипотенуза по синусу и прилежащему катету",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C прямой, AC = 9, sin A = 4/5. Найдите AB.",
          "theory_sol": "Из основного тригонометрического тождества \\(\\cos A=\\sqrt{1-\\sin^2 A}=\\frac{3}{5}\\). Поэтому \\(AB=\\frac{AC}{\\cos A}=15\\).<br><br><b>Ответ:</b> 15",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C прямой, AC = 5, sin A = 12/13. Найдите AB.",
              "answer": "13"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 12, sin A = 3/5. Найдите AB.",
              "answer": "15"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 15, sin A = 8/17. Найдите AB.",
              "answer": "17"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 21, sin A = 20/29. Найдите AB.",
              "answer": "29"
            },
            {
              "text": "В треугольнике ABC угол C прямой, AC = 16, sin A = 3/5. Найдите AB.",
              "answer": "20"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д50. Гипотенуза по катету и тангенсу",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол C равен 90°, AC = 6, tg A = $2\\sqrt{10}$/3. Найдите AB.",
          "theory_sol": "По определению тангенса \\(BC=AC\\cdot\\operatorname{tg}A=6\\cdot\\frac{2\\sqrt{10}}{3}=4\\sqrt{10}\\). По теореме Пифагора \\(AB=\\sqrt{6^2+(4\\sqrt{10})^2}=\\sqrt{196}=14\\).<br><br><b>Ответ:</b> 14",
          "tasks": [
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 12, tg A = 5/12. Найдите AB.",
              "answer": "13"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 15, tg A = 8/15. Найдите AB.",
              "answer": "17"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 16, tg A = 3/4. Найдите AB.",
              "answer": "20"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 20, tg A = 3/4. Найдите AB.",
              "answer": "25"
            },
            {
              "text": "В треугольнике ABC угол C равен 90°, AC = 12, tg A = 3/4. Найдите AB.",
              "answer": "15"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д51. Косинус по синусу с корнем",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Синус острого угла A треугольника ABC равен $3\\sqrt{11}$/10. Найдите cos A.",
          "theory_sol": "По тождеству \\(\\cos^2 A=1-\\sin^2 A=1-\\frac{99}{100}=\\frac{1}{100}\\). Так как угол острый, \\(\\cos A=0,1\\).<br><br><b>Ответ:</b> 0,1",
          "tasks": [
            {
              "text": "Синус острого угла A треугольника ABC равен $1\\sqrt{15}$/4. Найдите cos A.",
              "answer": "0,25"
            },
            {
              "text": "Синус острого угла A треугольника ABC равен $3\\sqrt{7}$/8. Найдите cos A.",
              "answer": "0,125"
            },
            {
              "text": "Синус острого угла A треугольника ABC равен $1\\sqrt{91}$/10. Найдите cos A.",
              "answer": "0,3"
            },
            {
              "text": "Синус острого угла A треугольника ABC равен $2\\sqrt{21}$/10. Найдите cos A.",
              "answer": "0,4"
            },
            {
              "text": "Синус острого угла A треугольника ABC равен $1\\sqrt{24}$/5. Найдите cos A.",
              "answer": "0,2"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д52. Синус по косинусу с корнем",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Косинус острого угла A треугольника ABC равен $2\\sqrt{6}$/5. Найдите sin A.",
          "theory_sol": "Используем \\(\\sin^2 A=1-\\cos^2 A=\\frac{1}{25}\\), угол острый. Поэтому \\(\\sin A=0,2\\).<br><br><b>Ответ:</b> 0,2",
          "tasks": [
            {
              "text": "Косинус острого угла A треугольника ABC равен $1\\sqrt{19}$/10. Найдите sin A.",
              "answer": "0,9"
            },
            {
              "text": "Косинус острого угла A треугольника ABC равен $1\\sqrt{7}$/4. Найдите sin A.",
              "answer": "0,75"
            },
            {
              "text": "Косинус острого угла A треугольника ABC равен $1\\sqrt{21}$/5. Найдите sin A.",
              "answer": "0,4"
            },
            {
              "text": "Косинус острого угла A треугольника ABC равен $3\\sqrt{11}$/10. Найдите sin A.",
              "answer": "0,1"
            },
            {
              "text": "Косинус острого угла A треугольника ABC равен $1\\sqrt{24}$/5. Найдите sin A.",
              "answer": "0,2"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д53. Прямоугольный треугольник: высота к гипотенузе и синус",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 280 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"130\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"130\" x2=\"215\" y2=\"28\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"215\" y1=\"130\" x2=\"170\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"170\" y1=\"55\" x2=\"178.6\" y2=\"49.9\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"178.6\" y1=\"49.9\" x2=\"183.7\" y2=\"58.4\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"183.7\" y1=\"58.4\" x2=\"175.1\" y2=\"63.6\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"175.1\" y1=\"63.6\" x2=\"170\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"220\" y=\"25\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"220\" y=\"149\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"156\" y=\"52\" font-size=\"14\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
          "theory_task": "В прямоугольном треугольнике ABC катет AC = 70, а высота CH, опущенная на гипотенузу, равна $7\\sqrt{19}$. Найдите sin ∠ABC.",
          "theory_sol": "По теореме Пифагора для треугольника ACH: \\(AH=\\sqrt{AC^2-CH^2}=\\sqrt{70^2-(7\\sqrt{19})^2}=63\\). Углы ABC и ACH равны как углы с взаимно перпендикулярными сторонами. Поэтому \\(\\sin\\angle ABC=\\sin\\angle ACH=\\frac{AH}{AC}=\\frac{63}{70}=0{,}9\\).<br><br><b>Ответ:</b> 0,9",
          "tasks": [
            {
              "text": "В прямоугольном треугольнике ABC катет AC&nbsp;=&nbsp;10, а высота CH, опущенная на гипотенузу, равна $5\\sqrt{3}$. Найдите sin&nbsp;∠ABC.",
              "answer": "0,5"
            },
            {
              "text": "В прямоугольном треугольнике ABC катет AC&nbsp;=&nbsp;20, а высота CH, опущенная на гипотенузу, равна $5\\sqrt{7}$. Найдите sin&nbsp;∠ABC.",
              "answer": "0,75"
            },
            {
              "text": "В прямоугольном треугольнике ABC катет AC&nbsp;=&nbsp;15, а высота CH, опущенная на гипотенузу, равна $3\\sqrt{21}$. Найдите sin&nbsp;∠ABC.",
              "answer": "0,4"
            },
            {
              "text": "В прямоугольном треугольнике ABC катет AC&nbsp;=&nbsp;20, а высота CH, опущенная на гипотенузу, равна $2\\sqrt{51}$. Найдите sin&nbsp;∠ABC.",
              "answer": "0,7"
            },
            {
              "text": "В прямоугольном треугольнике ABC катет AC&nbsp;=&nbsp;25, а высота CH, опущенная на гипотенузу, равна $10\\sqrt{6}$. Найдите sin&nbsp;∠ABC.",
              "answer": "0,2"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д54. Катет, прилежащий к заданному углу, по площади",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Площадь прямоугольного треугольника равна $800\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину катета, прилежащего к этому углу.",
          "theory_sol": "При угле 60° прилежащий катет — меньший. Обозначим его \\(x\\), тогда второй катет \\(x\\sqrt3\\). Из площади \\(\\frac{x^2\\sqrt3}{2}=800\\sqrt3\\) получаем \\(x^2=1600\\), значит \\(x=40\\).<br><br><b>Ответ:</b> 40",
          "tasks": [
            {
              "text": "Площадь прямоугольного треугольника равна $392\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину катета, прилежащего к этому углу.",
              "answer": "28"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $8\\sqrt{3}$/3. Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
              "answer": "4"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $50\\sqrt{3}$/3. Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
              "answer": "10"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $128\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину катета, прилежащего к этому углу.",
              "answer": "16"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $72\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину катета, прилежащего к этому углу.",
              "answer": "12"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д55. Катет напротив угла по площади и углу 60°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Площадь прямоугольного треугольника равна $200\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
          "theory_sol": "Пусть меньший катет равен \\(x\\), тогда катет напротив угла 60° равен \\(x\\sqrt3\\). Площадь: \\(S=\\frac{x^2\\sqrt3}{2}=\\frac{200\\sqrt3}{3}\\). Следовательно, \\(x^2=\\frac{400}{3}\\), а искомый катет \\(x\\sqrt3=\\sqrt{400}=20\\).<br><br><b>Ответ:</b> 20",
          "tasks": [
            {
              "text": "Площадь прямоугольного треугольника равна $32\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
              "answer": "8"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $72\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
              "answer": "12"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $98\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
              "answer": "14"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $128\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
              "answer": "16"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $162\\sqrt{3}$/3. Один из острых углов равен 60°. Найдите длину катета, лежащего напротив этого угла.",
              "answer": "18"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д56. Гипотенуза по площади и острому углу 30° или 60°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 226,126 226,25 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><polyline points=\"214,126 214,114 226,114\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"229\" y=\"21\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "Площадь прямоугольного треугольника равна $800\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину гипотенузы.",
          "theory_sol": "При углах 30° и 60° катеты равны c/2 и c√3/2. Поэтому \\(S=\\frac{c^2\\sqrt3}{8}\\). Получаем \\(c^2=6400\\), значит \\(c=80\\).<br><br><b>Ответ:</b> 80",
          "tasks": [
            {
              "text": "Площадь прямоугольного треугольника равна $49\\sqrt{3}$/2. Один из острых углов равен 60°. Найдите длину гипотенузы.",
              "answer": "14"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $50\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину гипотенузы.",
              "answer": "20"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $25\\sqrt{3}$/2. Один из острых углов равен 60°. Найдите длину гипотенузы.",
              "answer": "10"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $72\\sqrt{3}$. Один из острых углов равен 60°. Найдите длину гипотенузы.",
              "answer": "24"
            },
            {
              "text": "Площадь прямоугольного треугольника равна $81\\sqrt{3}$/2. Один из острых углов равен 60°. Найдите длину гипотенузы.",
              "answer": "18"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },
        {
          "desc": "15.Д57. Боковая сторона равнобедренного треугольника по площади и углу 120°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"35,128 135,23 235,128 35,128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135\" y1=\"23\" x2=\"135\" y2=\"128\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"20\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"132\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"238\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"139\" y=\"148\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
          "theory_task": "Площадь равнобедренного треугольника равна $4\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
          "theory_sol": "Если боковая сторона равна a, то \\(S=\\frac12 a^2\\sin120^\\circ=\\frac{a^2\\sqrt3}{4}\\). Поэтому \\(a^2=4\\cdot4\\), \\(a=4\\).<br><br><b>Ответ:</b> 4",
          "tasks": [
            {
              "text": "Площадь равнобедренного треугольника равна $196\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
              "answer": "28"
            },
            {
              "text": "Площадь равнобедренного треугольника равна $144\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
              "answer": "24"
            },
            {
              "text": "Площадь равнобедренного треугольника равна $225\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
              "answer": "30"
            },
            {
              "text": "Площадь равнобедренного треугольника равна $36\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
              "answer": "12"
            },
            {
              "text": "Площадь равнобедренного треугольника равна $100\\sqrt{3}$. Угол, лежащий напротив основания, равен 120°. Найдите длину боковой стороны.",
              "answer": "20"
            }
          ],
          "topic": "VIII. Тригонометрия и комбинированные задачи"
        },

        // IX. Теоремы синусов и косинусов
        {
          "desc": "15.Д58. Теорема синусов для углов 45°/60°/30°",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC угол A равен 45°, угол B равен 60°, BC = $4\\sqrt{6}$. Найдите AC.",
          "theory_sol": "По теореме синусов \\(\\frac{AC}{\\sin B}=\\frac{BC}{\\sin A}\\). Значит, \\(AC=\\frac{4\\sqrt6\\cdot\\sin60^\\circ}{\\sin45^\\circ}=\\frac{4\\sqrt6\\cdot\\sqrt3}{\\sqrt2}=12\\).<br><br><b>Ответ:</b> 12",
          "tasks": [
            {
              "text": "В треугольнике ABC угол A равен 45°, угол B равен 60°, BC = $6\\sqrt{6}$. Найдите AC.",
              "answer": "18"
            },
            {
              "text": "В треугольнике ABC угол A равен 60°, угол B равен 45°, BC = $7\\sqrt{6}$. Найдите AC.",
              "answer": "14"
            },
            {
              "text": "В треугольнике ABC угол A равен 45°, угол B равен 30°, BC = $6\\sqrt{2}$. Найдите AC.",
              "answer": "6"
            },
            {
              "text": "В треугольнике ABC угол A равен 30°, угол B равен 45°, BC = $11\\sqrt{2}$. Найдите AC.",
              "answer": "22"
            },
            {
              "text": "В треугольнике ABC угол A равен 45°, угол B равен 30°, BC = $8\\sqrt{2}$. Найдите AC.",
              "answer": "8"
            }
          ],
          "topic": "IX. Теоремы синусов и косинусов"
        },
        {
          "desc": "15.Д59. Теорема косинусов: косинус угла по трём сторонам",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:4px auto;\"><svg viewBox=\"0 0 270 165\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"42,126 135,25 226,126 42,126\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"27\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"131\" y=\"19\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"229\" y=\"147\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
          "theory_task": "В треугольнике ABC известно, что AB = 8, BC = 10, AC = 12. Найдите cos ∠ABC.",
          "theory_sol": "По теореме косинусов \\(AC^2=AB^2+BC^2-2\\cdot AB\\cdot BC\\cos B\\), поэтому \\(\\cos B=\\frac{8^2+10^2-12^2}{2\\cdot8\\cdot10}=0,125\\).<br><br><b>Ответ:</b> 0,125",
          "tasks": [
            {
              "text": "В треугольнике ABC известно, что AB = 5, BC = 10, AC = 11. Найдите cos ∠ABC.",
              "answer": "0,04"
            },
            {
              "text": "В треугольнике ABC известно, что AB = 2, BC = 3, AC = 4. Найдите cos ∠ABC.",
              "answer": "-0,25"
            },
            {
              "text": "В треугольнике ABC известно, что AB = 5, BC = 7, AC = 9. Найдите cos ∠ABC.",
              "answer": "-0,1"
            },
            {
              "text": "В треугольнике ABC известно, что AB = 6, BC = 8, AC = 4. Найдите cos ∠ABC.",
              "answer": "0,875"
            },
            {
              "text": "В треугольнике ABC известно, что AB = 3, BC = 8, AC = 7. Найдите cos ∠ABC.",
              "answer": "0,5"
            }
          ],
          "topic": "IX. Теоремы синусов и косинусов"
        }
        ]
    };
    window.extraDatabase[15] = task15Extra;
    window.extraDatabase["task15"] = task15Extra;
})();
