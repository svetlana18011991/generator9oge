"use strict";
(function(){
  window.extraDatabase = window.extraDatabase || {};
  const styles = "<style id=\"t17-math-css\">.t17eq{white-space:nowrap}.t17rad{display:inline-flex;white-space:nowrap;vertical-align:middle;align-items:flex-start}.t17radsign{font-size:1.13em;line-height:1.06;margin-right:-2px}.t17radbar{border-top:1.4px solid currentColor;line-height:1.1;padding:0 2px 0 3px;margin-top:2px}.t17frac{display:inline-flex;flex-direction:column;align-items:center;white-space:nowrap;vertical-align:middle;line-height:1.03;margin:0 2px}.t17fnum{border-bottom:1.4px solid currentColor;padding:0 3px 2px}.t17fden{padding:2px 3px 0}</style>";
  if (typeof document !== "undefined" && document.head && !document.getElementById("t17-math-css")) document.head.insertAdjacentHTML("beforeend",styles);
  const data = {
  "title": "Задание 17. Дополнительные задачи",
  "preserveTopicOrder": true,
  "prototypes": [
    {
      "desc": "17.Д1. Углы выпуклого четырёхугольника с попарно равными сторонами",
      "topic": "I. Углы и свойства четырёхугольников",
      "theory_task": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;60°, ∠D&nbsp;=&nbsp;110°. Найдите угол A. Ответ дайте в градусах.",
      "theory_sol": "В таком четырёхугольнике углы при вершинах A и C равны. Поэтому 2∠A + 60° + 110°&nbsp;=&nbsp;360°, откуда ∠A&nbsp;=&nbsp;95°.<br><b>Ответ:</b> 95",
      "tasks": [
        {
          "text": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;14°, ∠D&nbsp;=&nbsp;74°. Найдите угол A. Ответ дайте в градусах.",
          "answer": "136"
        },
        {
          "text": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;8°, ∠D&nbsp;=&nbsp;166°. Найдите угол A. Ответ дайте в градусах.",
          "answer": "93"
        },
        {
          "text": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;77°, ∠D&nbsp;=&nbsp;141°. Найдите угол A. Ответ дайте в градусах.",
          "answer": "71"
        },
        {
          "text": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;46°, ∠D&nbsp;=&nbsp;98°. Найдите угол A. Ответ дайте в градусах.",
          "answer": "108"
        },
        {
          "text": "В выпуклом четырехугольнике ABCD AB&nbsp;=&nbsp;BC, AD&nbsp;=&nbsp;CD, ∠B&nbsp;=&nbsp;64°, ∠D&nbsp;=&nbsp;126°. Найдите угол A. Ответ дайте в градусах.",
          "answer": "85"
        }
      ],
      "source": "Ширяева, блок 2, № 1",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"32\" y1=\"85\" x2=\"150\" y2=\"20\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"20\" x2=\"275\" y2=\"85\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"85\" x2=\"150\" y2=\"150\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"150\" x2=\"32\" y2=\"85\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"136\" y=\"166\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"26\" y=\"76\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"156\" y=\"11\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"283\" y=\"101\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д2. Угол между диагоналями параллелограмма при AC = 2AB",
      "topic": "I. Углы и свойства четырёхугольников",
      "theory_task": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;104°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
      "theory_sol": "Пусть O — точка пересечения диагоналей. Тогда AO&nbsp;=&nbsp;AC/2&nbsp;=&nbsp;AB. Из параллельности AB и CD угол BAO равен углу ACD, то есть 104°. В равнобедренном треугольнике ABO угол AOB равен (180° − 104°)/2&nbsp;=&nbsp;38°.<br><b>Ответ:</b> 38",
      "tasks": [
        {
          "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;122°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "answer": "29"
        },
        {
          "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;168°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "answer": "6"
        },
        {
          "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;146°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "answer": "17"
        },
        {
          "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;90°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "answer": "45"
        },
        {
          "text": "В параллелограмме ABCD диагональ AC в 2 раза больше стороны AB и ∠ACD&nbsp;=&nbsp;136°. Найдите угол между диагоналями параллелограмма. Ответ дайте в градусах.",
          "answer": "22"
        }
      ],
      "source": "Ширяева, блок 2, № 5",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"94\" x2=\"150\" y2=\"29\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"273\" y1=\"94\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"159\" x2=\"28\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"94\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"110\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"144\" y=\"20\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"279\" y=\"85\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"158\" y=\"175\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д3. Площадь треугольника CBE при E — середине AB",
      "topic": "II. Параллелограмм: площади и дополнительные построения",
      "theory_task": "Площадь параллелограмма ABCD равна 68. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
      "theory_sol": "Площадь треугольника CBA равна половине площади параллелограмма. Поскольку E — середина AB, площадь CBE равна половине площади CBA, то есть <span class=\"t17frac\"><span class=\"t17fnum\">68</span><span class=\"t17fden\">4</span></span>&nbsp;=&nbsp;17.<br><b>Ответ:</b> 17",
      "tasks": [
        {
          "text": "Площадь параллелограмма ABCD равна 44. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
          "answer": "11"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 132. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
          "answer": "33"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 196. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
          "answer": "49"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 80. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
          "answer": "20"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 150. Точка E — середина стороны AB. Найдите площадь треугольника CBE.",
          "answer": "37,5"
        }
      ],
      "source": "Ширяева, блок 2, № 41",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"60.5\" y2=\"89.5\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"64.5\" y=\"82.5\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">E</text><text x=\"52\" y=\"80\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\"></text></svg></div>"
    },
    {
      "desc": "17.Д4. Площадь трапеции DAEC внутри параллелограмма",
      "topic": "II. Параллелограмм: площади и дополнительные построения",
      "theory_task": "Площадь параллелограмма ABCD равна 60. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
      "theory_sol": "Треугольник CBE занимает четверть площади параллелограмма, поэтому площадь оставшейся трапеции DAEC равна 60 − <span class=\"t17frac\"><span class=\"t17fnum\">60</span><span class=\"t17fden\">4</span></span>&nbsp;=&nbsp;45.<br><b>Ответ:</b> 45",
      "tasks": [
        {
          "text": "Площадь параллелограмма ABCD равна 76. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
          "answer": "57"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 180. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
          "answer": "135"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 128. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
          "answer": "96"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 84. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
          "answer": "63"
        },
        {
          "text": "Площадь параллелограмма ABCD равна 160. Точка E — середина стороны AB. Найдите площадь трапеции DAEC.",
          "answer": "120"
        }
      ],
      "source": "Ширяева, блок 2, № 45",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"60.5\" y2=\"89.5\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"64.5\" y=\"82.5\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">E</text></svg></div>"
    },
    {
      "desc": "17.Д5. Площадь квадрата по его периметру",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "Периметр квадрата равен 24. Найдите площадь квадрата.",
      "theory_sol": "Сторона квадрата равна <span class=\"t17frac\"><span class=\"t17fnum\">24</span><span class=\"t17fden\">4</span></span>&nbsp;=&nbsp;6, следовательно, площадь равна 6²&nbsp;=&nbsp;36.<br><b>Ответ:</b> 36",
      "tasks": [
        {
          "text": "Периметр квадрата равен 56. Найдите площадь квадрата.",
          "answer": "196"
        },
        {
          "text": "Периметр квадрата равен 68. Найдите площадь квадрата.",
          "answer": "289"
        },
        {
          "text": "Периметр квадрата равен 160. Найдите площадь квадрата.",
          "answer": "1600"
        },
        {
          "text": "Периметр квадрата равен 40. Найдите площадь квадрата.",
          "answer": "100"
        },
        {
          "text": "Периметр квадрата равен 30. Найдите площадь квадрата.",
          "answer": "56,25"
        }
      ],
      "source": "Ширяева, блок 2, № 32",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"66\" y1=\"140\" x2=\"66\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"40\" x2=\"166\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"40\" x2=\"166\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"140\" x2=\"66\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д6. Площадь квадрата по стороне с квадратным корнем",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "Сторона квадрата равна 2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите площадь этого квадрата.",
      "theory_sol": "Площадь квадрата S&nbsp;=&nbsp;a²&nbsp;=&nbsp;(2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>)²&nbsp;=&nbsp;4 · 2&nbsp;=&nbsp;8.<br><b>Ответ:</b> 8",
      "tasks": [
        {
          "text": "Сторона квадрата равна 3<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">3</span></span>. Найдите площадь этого квадрата.",
          "answer": "27"
        },
        {
          "text": "Сторона квадрата равна 5<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">3</span></span>. Найдите площадь этого квадрата.",
          "answer": "75"
        },
        {
          "text": "Сторона квадрата равна 7<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите площадь этого квадрата.",
          "answer": "98"
        },
        {
          "text": "Сторона квадрата равна 4<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">5</span></span>. Найдите площадь этого квадрата.",
          "answer": "80"
        },
        {
          "text": "Сторона квадрата равна 6<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите площадь этого квадрата.",
          "answer": "72"
        }
      ],
      "source": "Ширяева, блок 2, № 28",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"66\" y1=\"140\" x2=\"66\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"40\" x2=\"166\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"40\" x2=\"166\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"140\" x2=\"66\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д7. Площадь фигуры после вырезания прямоугольника из квадрата",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "Из квадрата со стороной 8 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 4 и 1.",
      "theory_sol": "Из площади исходного квадрата вычитаем площадь прямоугольника: 8² − 4 · 1&nbsp;=&nbsp;60.<br><b>Ответ:</b> 60",
      "tasks": [
        {
          "text": "Из квадрата со стороной 7 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 5 и 3.",
          "answer": "34"
        },
        {
          "text": "Из квадрата со стороной 6 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 2 и 3.",
          "answer": "30"
        },
        {
          "text": "Из квадрата со стороной 9 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 3 и 6.",
          "answer": "63"
        },
        {
          "text": "Из квадрата со стороной 10 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 4 и 5.",
          "answer": "80"
        },
        {
          "text": "Из квадрата со стороной 12 вырезали прямоугольник. Найдите площадь получившейся фигуры, если стороны прямоугольника: 5 и 7.",
          "answer": "109"
        }
      ],
      "source": "Ширяева, блок 2, № 36",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"66\" y1=\"140\" x2=\"66\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"40\" x2=\"166\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"40\" x2=\"166\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"140\" x2=\"66\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"99\" y1=\"72\" x2=\"143\" y2=\"72\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"143\" y1=\"72\" x2=\"143\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"143\" y1=\"120\" x2=\"99\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"99\" y1=\"120\" x2=\"99\" y2=\"72\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д8. Площадь квадрата по диагонали",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "Найдите площадь квадрата, если его диагональ равна 1.",
      "theory_sol": "Диагональ d квадрата связана со стороной формулой d²&nbsp;=&nbsp;2a². Поэтому S&nbsp;=&nbsp;a²&nbsp;=&nbsp;d²/2&nbsp;=&nbsp;0,5.<br><b>Ответ:</b> 0.5",
      "tasks": [
        {
          "text": "Найдите площадь квадрата, если его диагональ равна 21.",
          "answer": "220,5"
        },
        {
          "text": "Найдите площадь квадрата, если его диагональ равна 50.",
          "answer": "1250"
        },
        {
          "text": "Найдите площадь квадрата, если его диагональ равна 38.",
          "answer": "722"
        },
        {
          "text": "Найдите площадь квадрата, если его диагональ равна 12.",
          "answer": "72"
        },
        {
          "text": "Найдите площадь квадрата, если его диагональ равна 7.",
          "answer": "24,5"
        }
      ],
      "source": "Ширяева, блок 2, № 70",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"66\" y1=\"140\" x2=\"66\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"40\" x2=\"166\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"40\" x2=\"166\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"140\" x2=\"66\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"40\" x2=\"166\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д9. Площадь прямоугольника по стороне и диагонали",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "В прямоугольнике одна сторона равна 6, а диагональ равна 10. Найдите площадь прямоугольника.",
      "theory_sol": "По теореме Пифагора вторая сторона равна √(10² − 6²)&nbsp;=&nbsp;8. Площадь равна 6 · 8&nbsp;=&nbsp;48.<br><b>Ответ:</b> 48",
      "tasks": [
        {
          "text": "В прямоугольнике одна сторона равна 84, а диагональ равна 91. Найдите площадь прямоугольника.",
          "answer": "2940"
        },
        {
          "text": "В прямоугольнике одна сторона равна 52, а диагональ равна 65. Найдите площадь прямоугольника.",
          "answer": "2028"
        },
        {
          "text": "В прямоугольнике одна сторона равна 24, а диагональ равна 74. Найдите площадь прямоугольника.",
          "answer": "1680"
        },
        {
          "text": "В прямоугольнике одна сторона равна 9, а диагональ равна 15. Найдите площадь прямоугольника.",
          "answer": "108"
        },
        {
          "text": "В прямоугольнике одна сторона равна 20, а диагональ равна 29. Найдите площадь прямоугольника.",
          "answer": "420"
        }
      ],
      "source": "Ширяева, блок 2, № 74",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"46\" y1=\"140\" x2=\"46\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"42\" x2=\"260\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"42\" x2=\"260\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"140\" x2=\"46\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"42\" x2=\"260\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д10. Расстояние ED в прямоугольнике при угле EAB = 45°",
      "topic": "III. Квадрат и прямоугольник",
      "theory_task": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;24 и AD&nbsp;=&nbsp;31, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
      "theory_sol": "Треугольник ABE прямоугольный и равнобедренный, поэтому BE&nbsp;=&nbsp;AB&nbsp;=&nbsp;24. Тогда EC&nbsp;=&nbsp;31 − 24&nbsp;=&nbsp;7. По теореме Пифагора ED&nbsp;=&nbsp;√(24² + 7²)&nbsp;=&nbsp;25.<br><b>Ответ:</b> 25",
      "tasks": [
        {
          "text": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;10 и AD&nbsp;=&nbsp;34, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
          "answer": "26"
        },
        {
          "text": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;72 и AD&nbsp;=&nbsp;126, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
          "answer": "90"
        },
        {
          "text": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;30 и AD&nbsp;=&nbsp;102, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
          "answer": "78"
        },
        {
          "text": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;12 и AD&nbsp;=&nbsp;17, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
          "answer": "13"
        },
        {
          "text": "На стороне BC прямоугольника ABCD, у которого AB&nbsp;=&nbsp;15 и AD&nbsp;=&nbsp;23, отмечена точка E так, что ∠EAB&nbsp;=&nbsp;45°. Найдите ED.",
          "answer": "17"
        }
      ],
      "source": "Ширяева, блок 2, № 66",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"46\" y1=\"140\" x2=\"46\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"42\" x2=\"260\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"42\" x2=\"260\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"140\" x2=\"46\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"140\" x2=\"196\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"196\" y1=\"42\" x2=\"260\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"32\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"40\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"266\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"268\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"200\" y=\"35\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">E</text></svg></div>"
    },
    {
      "desc": "17.Д11. Высота ромба по площади и периметру",
      "topic": "IV. Ромб: площади, диагонали и высоты",
      "theory_task": "Площадь ромба равна 15, а периметр равен 20. Найдите высоту ромба.",
      "theory_sol": "Сторона ромба <span class=\"t17frac\"><span class=\"t17fnum\">20</span><span class=\"t17fden\">4</span></span>&nbsp;=&nbsp;5, площадь S&nbsp;=&nbsp;ah, следовательно, h&nbsp;=&nbsp;<span class=\"t17frac\"><span class=\"t17fnum\">15</span><span class=\"t17fden\">5</span></span>&nbsp;=&nbsp;3.<br><b>Ответ:</b> 3",
      "tasks": [
        {
          "text": "Площадь ромба равна 18, а периметр равен 36. Найдите высоту ромба.",
          "answer": "2"
        },
        {
          "text": "Площадь ромба равна 5, а периметр равен 20. Найдите высоту ромба.",
          "answer": "1"
        },
        {
          "text": "Площадь ромба равна 6, а периметр равен 24. Найдите высоту ромба.",
          "answer": "1"
        },
        {
          "text": "Площадь ромба равна 35, а периметр равен 28. Найдите высоту ромба.",
          "answer": "5"
        },
        {
          "text": "Площадь ромба равна 45, а периметр равен 36. Найдите высоту ромба.",
          "answer": "5"
        }
      ],
      "source": "Ширяева, блок 2, № 49",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"48\" y1=\"140\" x2=\"108\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"42\" x2=\"222\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"42\" x2=\"162\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"162\" y1=\"140\" x2=\"48\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д12. Площадь ромба по диагоналям",
      "topic": "IV. Ромб: площади, диагонали и высоты",
      "theory_task": "Найдите площадь ромба, если его диагонали равны 10 и 6.",
      "theory_sol": "Площадь ромба равна половине произведения диагоналей: S&nbsp;=&nbsp;10 · <span class=\"t17frac\"><span class=\"t17fnum\">6</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;30.<br><b>Ответ:</b> 30",
      "tasks": [
        {
          "text": "Найдите площадь ромба, если его диагонали равны 32 и 4.",
          "answer": "64"
        },
        {
          "text": "Найдите площадь ромба, если его диагонали равны 19 и 6.",
          "answer": "57"
        },
        {
          "text": "Найдите площадь ромба, если его диагонали равны 34 и 4.",
          "answer": "68"
        },
        {
          "text": "Найдите площадь ромба, если его диагонали равны 15 и 8.",
          "answer": "60"
        },
        {
          "text": "Найдите площадь ромба, если его диагонали равны 13 и 5.",
          "answer": "32,5"
        }
      ],
      "source": "Ширяева, блок 2, № 53",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"94\" x2=\"150\" y2=\"29\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"273\" y1=\"94\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"159\" x2=\"28\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"94\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д13. Площадь ромба по расстоянию от пересечения диагоналей до стороны",
      "topic": "IV. Ромб: площади, диагонали и высоты",
      "theory_task": "Сторона ромба равна 5, а расстояние от точки пересечения диагоналей ромба до неё равно 2. Найдите площадь ромба.",
      "theory_sol": "Точка пересечения диагоналей — центр вписанной окружности ромба. Расстояние до стороны составляет половину высоты: h&nbsp;=&nbsp;4. Площадь S&nbsp;=&nbsp;5 · 4&nbsp;=&nbsp;20.<br><b>Ответ:</b> 20",
      "tasks": [
        {
          "text": "Сторона ромба равна 9, а расстояние от точки пересечения диагоналей ромба до неё равно 1. Найдите площадь ромба.",
          "answer": "18"
        },
        {
          "text": "Сторона ромба равна 12, а расстояние от точки пересечения диагоналей ромба до неё равно 4. Найдите площадь ромба.",
          "answer": "96"
        },
        {
          "text": "Сторона ромба равна 7, а расстояние от точки пересечения диагоналей ромба до неё равно 3. Найдите площадь ромба.",
          "answer": "42"
        },
        {
          "text": "Сторона ромба равна 11, а расстояние от точки пересечения диагоналей ромба до неё равно 2. Найдите площадь ромба.",
          "answer": "44"
        },
        {
          "text": "Сторона ромба равна 15, а расстояние от точки пересечения диагоналей ромба до неё равно 4. Найдите площадь ромба.",
          "answer": "120"
        }
      ],
      "source": "Ширяева, блок 2, № 57",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"94\" x2=\"150\" y2=\"29\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"273\" y1=\"94\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"159\" x2=\"28\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"94\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"94\" x2=\"123.0\" y2=\"144.6\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"110\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"144\" y=\"20\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"279\" y=\"85\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"158\" y=\"175\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"154\" y=\"87\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">O</text><text x=\"119.0\" y=\"160.6\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text></svg></div>"
    },
    {
      "desc": "17.Д14. Площадь ромба по высоте, делящей его сторону на отрезки",
      "topic": "IV. Ромб: площади, диагонали и высоты",
      "theory_task": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;54 и HD&nbsp;=&nbsp;36. Найдите площадь ромба.",
      "theory_sol": "Сторона ромба AD&nbsp;=&nbsp;54 + 36&nbsp;=&nbsp;90. В прямоугольном треугольнике ABH гипотенуза AB&nbsp;=&nbsp;90, катет AH&nbsp;=&nbsp;54. Значит, BH&nbsp;=&nbsp;√(90² − 54²)&nbsp;=&nbsp;72 и S&nbsp;=&nbsp;90 · 72&nbsp;=&nbsp;6480.<br><b>Ответ:</b> 6480",
      "tasks": [
        {
          "text": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;15 и HD&nbsp;=&nbsp;2. Найдите площадь ромба.",
          "answer": "136"
        },
        {
          "text": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;21 и HD&nbsp;=&nbsp;54. Найдите площадь ромба.",
          "answer": "5400"
        },
        {
          "text": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;11 и HD&nbsp;=&nbsp;50. Найдите площадь ромба.",
          "answer": "3660"
        },
        {
          "text": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;9 и HD&nbsp;=&nbsp;6. Найдите площадь ромба.",
          "answer": "180"
        },
        {
          "text": "Высота BH ромба ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;16 и HD&nbsp;=&nbsp;9. Найдите площадь ромба.",
          "answer": "375"
        }
      ],
      "source": "Ширяева, блок 2, № 78",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"48\" y1=\"140\" x2=\"108\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"42\" x2=\"222\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"42\" x2=\"162\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"162\" y1=\"140\" x2=\"48\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"42\" x2=\"108\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M97 140 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"34\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"102\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"228\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"170\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"104\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text></svg></div>"
    },
    {
      "desc": "17.Д15. Площадь ромба по стороне и диагонали",
      "topic": "IV. Ромб: площади, диагонали и высоты",
      "theory_task": "Сторона ромба равна 29, а диагональ равна 42. Найдите площадь ромба.",
      "theory_sol": "Диагонали ромба перпендикулярны и делятся пополам. Половина второй диагонали равна √(29² − 21²)&nbsp;=&nbsp;20. Поэтому другая диагональ 40, площадь S&nbsp;=&nbsp;42 · <span class=\"t17frac\"><span class=\"t17fnum\">40</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;840.<br><b>Ответ:</b> 840",
      "tasks": [
        {
          "text": "Сторона ромба равна 73, а диагональ равна 110. Найдите площадь ромба.",
          "answer": "5280"
        },
        {
          "text": "Сторона ромба равна 95, а диагональ равна 114. Найдите площадь ромба.",
          "answer": "8664"
        },
        {
          "text": "Сторона ромба равна 52, а диагональ равна 96. Найдите площадь ромба.",
          "answer": "1920"
        },
        {
          "text": "Сторона ромба равна 25, а диагональ равна 30. Найдите площадь ромба.",
          "answer": "600"
        },
        {
          "text": "Сторона ромба равна 13, а диагональ равна 24. Найдите площадь ромба.",
          "answer": "120"
        }
      ],
      "source": "Ширяева, блок 2, № 86",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"94\" x2=\"150\" y2=\"29\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"273\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"273\" y1=\"94\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"159\" x2=\"28\" y2=\"94\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"29\" x2=\"150\" y2=\"159\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg></div>"
    },
    {
      "desc": "17.Д16. Угол ABC равнобедренной трапеции по двум углам диагонали AC",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 30° и 80° соответственно.",
      "theory_sol": "В треугольнике ACD угол D равен 180° − 30° − 80°&nbsp;=&nbsp;70°. В равнобедренной трапеции углы B и D в сумме дают 180°, поэтому ∠ABC&nbsp;=&nbsp;110°.<br><b>Ответ:</b> 110",
      "tasks": [
        {
          "text": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 20° и 100° соответственно.",
          "answer": "120"
        },
        {
          "text": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 25° и 95° соответственно.",
          "answer": "120"
        },
        {
          "text": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 35° и 85° соответственно.",
          "answer": "120"
        },
        {
          "text": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 40° и 70° соответственно.",
          "answer": "110"
        },
        {
          "text": "Найдите угол ABC равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной CD углы, равные 28° и 92° соответственно.",
          "answer": "120"
        }
      ],
      "source": "Ширяева, блок 2, № 9",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д17. Угол ADC трапеции по двум углам диагонали AC",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 30° и 50° соответственно.",
      "theory_sol": "В треугольнике ABC угол ABC&nbsp;=&nbsp;180° − 30° − 50°&nbsp;=&nbsp;100°. В равнобедренной трапеции ∠ADC&nbsp;=&nbsp;180° − ∠ABC&nbsp;=&nbsp;80°.<br><b>Ответ:</b> 80",
      "tasks": [
        {
          "text": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 30° и 40° соответственно.",
          "answer": "70"
        },
        {
          "text": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 25° и 45° соответственно.",
          "answer": "70"
        },
        {
          "text": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 35° и 55° соответственно.",
          "answer": "90"
        },
        {
          "text": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 20° и 60° соответственно.",
          "answer": "80"
        },
        {
          "text": "Найдите угол ADC равнобедренной трапеции ABCD, если диагональ AC образует с основанием BC и боковой стороной AB углы, равные 45° и 50° соответственно.",
          "answer": "95"
        }
      ],
      "source": "Ширяева, блок 2, № 11",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д18. Больший угол трапеции по двум углам при диагонали AC",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 62° и 9° соответственно.",
      "theory_sol": "Диагональ AC делит угол A на углы 62° и 9°. Поэтому ∠A&nbsp;=&nbsp;71°, больший угол трапеции 180° − 71°&nbsp;=&nbsp;109°.<br><b>Ответ:</b> 109",
      "tasks": [
        {
          "text": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 46° и 1° соответственно.",
          "answer": "133"
        },
        {
          "text": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 33° и 13° соответственно.",
          "answer": "134"
        },
        {
          "text": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 11° и 60° соответственно.",
          "answer": "109"
        },
        {
          "text": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 24° и 25° соответственно.",
          "answer": "131"
        },
        {
          "text": "Найдите больший угол равнобедренной трапеции ABCD, если диагональ AC образует с основанием AD и боковой стороной AB углы, равные 38° и 14° соответственно.",
          "answer": "128"
        }
      ],
      "source": "Ширяева, блок 2, № 15",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"154\" y=\"86\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">F</text></svg></div>"
    },
    {
      "desc": "17.Д19. Равнобедренная трапеция: угол ABD по диагонали BD",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;38° и ∠BDC&nbsp;=&nbsp;32°. Найдите ∠ABD. Ответ дайте в градусах.",
      "theory_sol": "В равнобедренной трапеции ∠BAD&nbsp;=&nbsp;∠ADC&nbsp;=&nbsp;∠BDA + ∠BDC&nbsp;=&nbsp;70°. В треугольнике ABD искомый угол равен 180° − 70° − 38°&nbsp;=&nbsp;72°.<br><b>Ответ:</b> 72",
      "tasks": [
        {
          "text": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;40° и ∠BDC&nbsp;=&nbsp;24°. Найдите ∠ABD. Ответ дайте в градусах.",
          "answer": "76"
        },
        {
          "text": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;14° и ∠BDC&nbsp;=&nbsp;106°. Найдите ∠ABD. Ответ дайте в градусах.",
          "answer": "46"
        },
        {
          "text": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;18° и ∠BDC&nbsp;=&nbsp;97°. Найдите ∠ABD. Ответ дайте в градусах.",
          "answer": "47"
        },
        {
          "text": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;29° и ∠BDC&nbsp;=&nbsp;48°. Найдите ∠ABD. Ответ дайте в градусах.",
          "answer": "74"
        },
        {
          "text": "В трапеции ABCD AB&nbsp;=&nbsp;CD, ∠BDA&nbsp;=&nbsp;32° и ∠BDC&nbsp;=&nbsp;53°. Найдите ∠ABD. Ответ дайте в градусах.",
          "answer": "63"
        }
      ],
      "source": "Ширяева, блок 2, № 19",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д20. Равнобедренная трапеция с AC = AD: найти CAD",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;95°. Найдите угол CAD. Ответ дайте в градусах.",
      "theory_sol": "Трапеция равнобедренная, поэтому ∠ADC&nbsp;=&nbsp;180° − ∠ABC&nbsp;=&nbsp;85°. Так как AC&nbsp;=&nbsp;AD, треугольник ACD равнобедренный с равными углами при C и D. Следовательно, ∠CAD&nbsp;=&nbsp;180° − 2 · 85°&nbsp;=&nbsp;10°.<br><b>Ответ:</b> 10",
      "tasks": [
        {
          "text": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;103°. Найдите угол CAD. Ответ дайте в градусах.",
          "answer": "26"
        },
        {
          "text": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;115°. Найдите угол CAD. Ответ дайте в градусах.",
          "answer": "50"
        },
        {
          "text": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;109°. Найдите угол CAD. Ответ дайте в градусах.",
          "answer": "38"
        },
        {
          "text": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;98°. Найдите угол CAD. Ответ дайте в градусах.",
          "answer": "16"
        },
        {
          "text": "В трапеции ABCD известно, что AB&nbsp;=&nbsp;CD, AC&nbsp;=&nbsp;AD и ∠ABC&nbsp;=&nbsp;121°. Найдите угол CAD. Ответ дайте в градусах.",
          "answer": "62"
        }
      ],
      "source": "Ширяева, блок 2, № 23",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д21. Биссектрисы углов при боковой стороне трапеции",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;12, BF&nbsp;=&nbsp;5.",
      "theory_sol": "Углы A и B трапеции при боковой стороне AB смежные в сумме 180°, их половины — 90°. Следовательно, треугольник AFB прямоугольный, AB&nbsp;=&nbsp;√(12² + 5²)&nbsp;=&nbsp;13.<br><b>Ответ:</b> 13",
      "tasks": [
        {
          "text": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;8, BF&nbsp;=&nbsp;15.",
          "answer": "17"
        },
        {
          "text": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;24, BF&nbsp;=&nbsp;10.",
          "answer": "26"
        },
        {
          "text": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;24, BF&nbsp;=&nbsp;32.",
          "answer": "40"
        },
        {
          "text": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;9, BF&nbsp;=&nbsp;12.",
          "answer": "15"
        },
        {
          "text": "Биссектрисы углов A и B при боковой стороне AB трапеции ABCD пересекаются в точке F. Найдите AB, если AF&nbsp;=&nbsp;20, BF&nbsp;=&nbsp;21.",
          "answer": "29"
        }
      ],
      "source": "Ширяева, блок 2, № 98",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"155\" y2=\"102\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"159\" y=\"95\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">F</text></svg></div>"
    },
    {
      "desc": "17.Д22. Отрезки в равнобедренной трапеции по средней линии",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 10, а меньшее основание BC равно 4.",
      "theory_sol": "Большое основание AD&nbsp;=&nbsp;2 · 10 − 4&nbsp;=&nbsp;16. В равнобедренной трапеции проекция одной боковой стороны на большее основание равна (AD − BC)/2&nbsp;=&nbsp;6. Значит, HD&nbsp;=&nbsp;6.<br><b>Ответ:</b> 6",
      "tasks": [
        {
          "text": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 16, а меньшее основание BC равно 6.",
          "answer": "10"
        },
        {
          "text": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 12, а меньшее основание BC равно 4.",
          "answer": "8"
        },
        {
          "text": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 16, а меньшее основание BC равно 4.",
          "answer": "12"
        },
        {
          "text": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 15, а меньшее основание BC равно 7.",
          "answer": "8"
        },
        {
          "text": "В трапеции ABCD боковые стороны AB и CD равны, CH — высота, проведённая к большему основанию AD. Найдите длину отрезка HD, если средняя линия KM трапеции равна 21, а меньшее основание BC равно 9.",
          "answer": "12"
        }
      ],
      "source": "Ширяева, блок 2, № 122",
      "svg_code": ""
    },
    {
      "desc": "17.Д23. Диагонали трапеции и подобие треугольников: найти AO",
      "topic": "V. Трапеция: углы, биссектрисы и подобие",
      "theory_task": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;6, AD&nbsp;=&nbsp;13, AC&nbsp;=&nbsp;38. Найдите AO.",
      "theory_sol": "Треугольники AOD и COB подобны, поэтому AO/OC&nbsp;=&nbsp;AD/BC&nbsp;=&nbsp;<span class=\"t17frac\"><span class=\"t17fnum\">13</span><span class=\"t17fden\">6</span></span>. Следовательно, AO&nbsp;=&nbsp;AC · AD/(AD + BC)&nbsp;=&nbsp;38 · <span class=\"t17frac\"><span class=\"t17fnum\">13</span><span class=\"t17fden\">19</span></span>&nbsp;=&nbsp;26.<br><b>Ответ:</b> 26",
      "tasks": [
        {
          "text": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;2, AD&nbsp;=&nbsp;8, AC&nbsp;=&nbsp;40. Найдите AO.",
          "answer": "32"
        },
        {
          "text": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;7, AD&nbsp;=&nbsp;9, AC&nbsp;=&nbsp;32. Найдите AO.",
          "answer": "18"
        },
        {
          "text": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;11, AD&nbsp;=&nbsp;15, AC&nbsp;=&nbsp;52. Найдите AO.",
          "answer": "30"
        },
        {
          "text": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;3, AD&nbsp;=&nbsp;7, AC&nbsp;=&nbsp;30. Найдите AO.",
          "answer": "21"
        },
        {
          "text": "Диагонали AC и BD трапеции ABCD с основаниями BC и AD пересекаются в точке O, BC&nbsp;=&nbsp;4, AD&nbsp;=&nbsp;6, AC&nbsp;=&nbsp;25. Найдите AO.",
          "answer": "15"
        }
      ],
      "source": "Ширяева, блок 2, № 110",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"155\" y=\"88\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">O</text></svg></div>"
    },
    {
      "desc": "17.Д24. Площадь трапеции по боковой стороне и углу 30°",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Боковая сторона трапеции равна 3, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 2 и 6.",
      "theory_sol": "Высота равна 3 · sin 30°&nbsp;=&nbsp;1,5. Площадь равна (2 + 6) · 1,<span class=\"t17frac\"><span class=\"t17fnum\">5</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;6.<br><b>Ответ:</b> 6",
      "tasks": [
        {
          "text": "Боковая сторона трапеции равна 4, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 2 и 5.",
          "answer": "7"
        },
        {
          "text": "Боковая сторона трапеции равна 5, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 3 и 9.",
          "answer": "15"
        },
        {
          "text": "Боковая сторона трапеции равна 4, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 2 и 7.",
          "answer": "9"
        },
        {
          "text": "Боковая сторона трапеции равна 6, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 5 и 11.",
          "answer": "24"
        },
        {
          "text": "Боковая сторона трапеции равна 8, а один из прилегающих к ней углов равен 30°. Найдите площадь трапеции, если её основания равны 4 и 9.",
          "answer": "26"
        }
      ],
      "source": "Ширяева, блок 2, № 62",
      "svg_code": ""
    },
    {
      "desc": "17.Д25. Площадь параллелограмма через высоту и диагональ",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;7 и HD&nbsp;=&nbsp;24. Диагональ параллелограмма BD равна 51. Найдите площадь параллелограмма.",
      "theory_sol": "По теореме Пифагора BH&nbsp;=&nbsp;√(BD² − HD²)&nbsp;=&nbsp;√(51² − 24²)&nbsp;=&nbsp;45. Основание AD&nbsp;=&nbsp;7 + 24&nbsp;=&nbsp;31. Площадь S&nbsp;=&nbsp;31 · 45&nbsp;=&nbsp;1395.<br><b>Ответ:</b> 1395",
      "tasks": [
        {
          "text": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;8 и HD&nbsp;=&nbsp;40. Диагональ параллелограмма BD равна 50. Найдите площадь параллелограмма.",
          "answer": "1440"
        },
        {
          "text": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;2 и HD&nbsp;=&nbsp;64. Диагональ параллелограмма BD равна 80. Найдите площадь параллелограмма.",
          "answer": "3168"
        },
        {
          "text": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;6 и HD&nbsp;=&nbsp;75. Диагональ параллелограмма BD равна 85. Найдите площадь параллелограмма.",
          "answer": "3240"
        },
        {
          "text": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;7 и HD&nbsp;=&nbsp;24. Диагональ параллелограмма BD равна 25. Найдите площадь параллелограмма.",
          "answer": "217"
        },
        {
          "text": "Высота BH параллелограмма ABCD делит его сторону AD на отрезки AH&nbsp;=&nbsp;5 и HD&nbsp;=&nbsp;12. Диагональ параллелограмма BD равна 13. Найдите площадь параллелограмма.",
          "answer": "85"
        }
      ],
      "source": "Ширяева, блок 2, № 82",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text></svg></div>"
    },
    {
      "desc": "17.Д26. Площадь равнобедренной трапеции по основаниям и боковой стороне",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Основания равнобедренной трапеции равны 6 и 18, а её боковые стороны равны 10. Найдите площадь трапеции.",
      "theory_sol": "Проекция боковой стороны на большее основание (18 − 6)/2&nbsp;=&nbsp;6, высота √(10² − 6²)&nbsp;=&nbsp;8. Площадь (6 + 18) · <span class=\"t17frac\"><span class=\"t17fnum\">8</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;96.<br><b>Ответ:</b> 96",
      "tasks": [
        {
          "text": "Основания равнобедренной трапеции равны 7 и 13, а её боковые стороны равны 5. Найдите площадь трапеции.",
          "answer": "40"
        },
        {
          "text": "Основания равнобедренной трапеции равны 5 и 15, а её боковые стороны равны 13. Найдите площадь трапеции.",
          "answer": "120"
        },
        {
          "text": "Основания равнобедренной трапеции равны 2 и 14, а её боковые стороны равны 10. Найдите площадь трапеции.",
          "answer": "64"
        },
        {
          "text": "Основания равнобедренной трапеции равны 8 и 18, а её боковые стороны равны 13. Найдите площадь трапеции.",
          "answer": "156"
        },
        {
          "text": "Основания равнобедренной трапеции равны 3 и 13, а её боковые стороны равны 13. Найдите площадь трапеции.",
          "answer": "96"
        }
      ],
      "source": "Ширяева, блок 2, № 90",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д27. Длина диагонали равнобедренной трапеции по сторонам",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Основания равнобедренной трапеции равны 33 и 75, боковая сторона 75. Найдите длину диагонали трапеции.",
      "theory_sol": "Горизонтальная проекция боковой стороны (75 − 33)/2&nbsp;=&nbsp;21; высота √(75² − 21²)&nbsp;=&nbsp;72. Проекция диагонали (75 + 33)/2&nbsp;=&nbsp;54. Диагональ √(72² + 54²)&nbsp;=&nbsp;90.<br><b>Ответ:</b> 90",
      "tasks": [
        {
          "text": "Основания равнобедренной трапеции равны 21 и 57, боковая сторона 82. Найдите длину диагонали трапеции.",
          "answer": "89"
        },
        {
          "text": "Основания равнобедренной трапеции равны 41 и 69, боковая сторона 50. Найдите длину диагонали трапеции.",
          "answer": "73"
        },
        {
          "text": "Основания равнобедренной трапеции равны 27 и 63, боковая сторона 30. Найдите длину диагонали трапеции.",
          "answer": "51"
        },
        {
          "text": "Основания равнобедренной трапеции равны 66 и 150, боковая сторона 150. Найдите длину диагонали трапеции.",
          "answer": "180"
        },
        {
          "text": "Основания равнобедренной трапеции равны 33 и 75, боковая сторона 75. Найдите длину диагонали трапеции.",
          "answer": "90"
        }
      ],
      "source": "Ширяева, блок 2, № 94",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д28. Площадь трапеции по боковой стороне с корнем и углу 135°",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Основания трапеции равны 6 и 20, одна из боковых сторон равна 13<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
      "theory_sol": "Высота h&nbsp;=&nbsp;13<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span> · sin 135°&nbsp;=&nbsp;13. Площадь S&nbsp;=&nbsp;(6 + 20) · <span class=\"t17frac\"><span class=\"t17fnum\">13</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;169.<br><b>Ответ:</b> 169",
      "tasks": [
        {
          "text": "Основания трапеции равны 3 и 21, одна из боковых сторон равна 16<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
          "answer": "192"
        },
        {
          "text": "Основания трапеции равны 6 и 30, одна из боковых сторон равна 7<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
          "answer": "126"
        },
        {
          "text": "Основания трапеции равны 1 и 7, одна из боковых сторон равна 23<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
          "answer": "92"
        },
        {
          "text": "Основания трапеции равны 4 и 20, одна из боковых сторон равна 9<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
          "answer": "108"
        },
        {
          "text": "Основания трапеции равны 8 и 22, одна из боковых сторон равна 12<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>, а угол между ней и одним из оснований равен 135°. Найдите площадь трапеции.",
          "answer": "180"
        }
      ],
      "source": "Ширяева, блок 2, № 102",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"27\" y1=\"141\" x2=\"87\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"87\" y1=\"45\" x2=\"212\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"45\" x2=\"277\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"277\" y1=\"141\" x2=\"27\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"13\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"81\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"218\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"285\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д29. Площадь треугольника ABC по площади трапеции",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;4, BC&nbsp;=&nbsp;2, а её площадь равна 69. Найдите площадь треугольника ABC.",
      "theory_sol": "Треугольник ABC и трапеция имеют одну высоту; площади равны BC·h/2 и (AD+BC)·h/2. Значит, S(ABC)&nbsp;=&nbsp;69 · 2/(4+2)&nbsp;=&nbsp;23.<br><b>Ответ:</b> 23",
      "tasks": [
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;6, BC&nbsp;=&nbsp;5, а её площадь равна 22. Найдите площадь треугольника ABC.",
          "answer": "10"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;9, BC&nbsp;=&nbsp;6, а её площадь равна 75. Найдите площадь треугольника ABC.",
          "answer": "30"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;7, BC&nbsp;=&nbsp;5, а её площадь равна 72. Найдите площадь треугольника ABC.",
          "answer": "30"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;8, BC&nbsp;=&nbsp;4, а её площадь равна 36. Найдите площадь треугольника ABC.",
          "answer": "12"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;5, BC&nbsp;=&nbsp;3, а её площадь равна 64. Найдите площадь треугольника ABC.",
          "answer": "24"
        }
      ],
      "source": "Ширяева, блок 2, № 106",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"141\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д30. Площадь трапеции по боковой стороне и синусу угла",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Основания трапеции равны 9 и 72, одна из боковых сторон равна 30, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">5</span><span class=\"t17fden\">9</span></span>. Найдите площадь трапеции.",
      "theory_sol": "Высота h&nbsp;=&nbsp;30 · <span class=\"t17frac\"><span class=\"t17fnum\">5</span><span class=\"t17fden\">9</span></span>. Площадь трапеции S&nbsp;=&nbsp;(9 + 72) · h/2&nbsp;=&nbsp;675.<br><b>Ответ:</b> 675",
      "tasks": [
        {
          "text": "Основания трапеции равны 5 и 45, одна из боковых сторон равна 13, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">2</span><span class=\"t17fden\">5</span></span>. Найдите площадь трапеции.",
          "answer": "130"
        },
        {
          "text": "Основания трапеции равны 9 и 54, одна из боковых сторон равна 27, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">4</span><span class=\"t17fden\">9</span></span>. Найдите площадь трапеции.",
          "answer": "378"
        },
        {
          "text": "Основания трапеции равны 7 и 56, одна из боковых сторон равна 21, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">2</span><span class=\"t17fden\">7</span></span>. Найдите площадь трапеции.",
          "answer": "189"
        },
        {
          "text": "Основания трапеции равны 4 и 16, одна из боковых сторон равна 20, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">3</span><span class=\"t17fden\">5</span></span>. Найдите площадь трапеции.",
          "answer": "120"
        },
        {
          "text": "Основания трапеции равны 8 и 32, одна из боковых сторон равна 25, а синус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">3</span><span class=\"t17fden\">5</span></span>. Найдите площадь трапеции.",
          "answer": "300"
        }
      ],
      "source": "Ширяева, блок 2, № 114",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"27\" y1=\"141\" x2=\"87\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"87\" y1=\"45\" x2=\"212\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"45\" x2=\"277\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"277\" y1=\"141\" x2=\"27\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"87\" y1=\"45\" x2=\"277\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"13\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"81\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"218\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"285\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д31. Площадь трапеции по боковой стороне и косинусу угла",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Основания трапеции равны 9 и 54, одна из боковых сторон равна 27, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\"><span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">65</span></span></span><span class=\"t17fden\">9</span></span>. Найдите площадь трапеции.",
      "theory_sol": "Из основного тригонометрического тождества sin²α + cos²α&nbsp;=&nbsp;1 получаем sinα&nbsp;=&nbsp;√(1 − <span class=\"t17frac\"><span class=\"t17fnum\">65</span><span class=\"t17fden\">81</span></span>)&nbsp;=&nbsp;<span class=\"t17frac\"><span class=\"t17fnum\">4</span><span class=\"t17fden\">9</span></span>. Высота h&nbsp;=&nbsp;27 · <span class=\"t17frac\"><span class=\"t17fnum\">4</span><span class=\"t17fden\">9</span></span>&nbsp;=&nbsp;12, площадь S&nbsp;=&nbsp;(9 + 54) · <span class=\"t17frac\"><span class=\"t17fnum\">12</span><span class=\"t17fden\">2</span></span>&nbsp;=&nbsp;378.<br><b>Ответ:</b> 378",
      "tasks": [
        {
          "text": "Основания трапеции равны 7 и 56, одна из боковых сторон равна 21, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">6</span></span></span><span class=\"t17fden\">7</span></span>. Найдите площадь трапеции.",
          "answer": "472,5"
        },
        {
          "text": "Основания трапеции равны 4 и 20, одна из боковых сторон равна 12, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\"><span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">5</span></span></span><span class=\"t17fden\">3</span></span>. Найдите площадь трапеции.",
          "answer": "96"
        },
        {
          "text": "Основания трапеции равны 6 и 14, одна из боковых сторон равна 25, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\"><span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">21</span></span></span><span class=\"t17fden\">5</span></span>. Найдите площадь трапеции.",
          "answer": "100"
        },
        {
          "text": "Основания трапеции равны 5 и 13, одна из боковых сторон равна 27, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\">2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span></span><span class=\"t17fden\">3</span></span>. Найдите площадь трапеции.",
          "answer": "81"
        },
        {
          "text": "Основания трапеции равны 7 и 28, одна из боковых сторон равна 21, а косинус угла между ней и одним из оснований равен <span class=\"t17frac\"><span class=\"t17fnum\"><span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">13</span></span></span><span class=\"t17fden\">7</span></span>. Найдите площадь трапеции.",
          "answer": "315"
        }
      ],
      "source": "Ширяева, блок 2, № 116",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text></svg></div>"
    },
    {
      "desc": "17.Д32. Большое основание прямоугольной трапеции по тангенсу угла",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">7</span><span class=\"t17fden\">6</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 14.",
      "theory_sol": "Тангенс острого угла равен отношению высоты к разности оснований. Разность оснований&nbsp;=&nbsp;14 · <span class=\"t17frac\"><span class=\"t17fnum\">6</span><span class=\"t17fden\">7</span></span>&nbsp;=&nbsp;12, большое основание 14 + 12&nbsp;=&nbsp;26.<br><b>Ответ:</b> 26",
      "tasks": [
        {
          "text": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">2</span><span class=\"t17fden\">5</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 58.",
          "answer": "203"
        },
        {
          "text": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">3</span><span class=\"t17fden\">2</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 66.",
          "answer": "110"
        },
        {
          "text": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">9</span><span class=\"t17fden\">2</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 54.",
          "answer": "66"
        },
        {
          "text": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">5</span><span class=\"t17fden\">3</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 20.",
          "answer": "32"
        },
        {
          "text": "Тангенс острого угла прямоугольной трапеции равен <span class=\"t17frac\"><span class=\"t17fnum\">4</span><span class=\"t17fden\">3</span></span>. Найдите её большее основание, если меньшее основание равно высоте и равно 24.",
          "answer": "42"
        }
      ],
      "source": "Ширяева, блок 2, № 118",
      "svg_code": ""
    },
    {
      "desc": "17.Д33. Площадь верхней трапеции по средней линии",
      "topic": "VI. Трапеция: площади, высоты и диагонали",
      "theory_task": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;4, BC&nbsp;=&nbsp;3, а её площадь равна 84. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
      "theory_sol": "Средняя линия равна (4 + 3)/2&nbsp;=&nbsp;3,5. Высота BCNM вдвое меньше высоты ABCD. Поэтому отношение площадей равно (BC + MN)/(2(AD + BC))&nbsp;=&nbsp;(3 + 3,5)/(2·7)&nbsp;=&nbsp;<span class=\"t17frac\"><span class=\"t17fnum\">13</span><span class=\"t17fden\">28</span></span>. Искомая площадь&nbsp;=&nbsp;84·<span class=\"t17frac\"><span class=\"t17fnum\">13</span><span class=\"t17fden\">28</span></span>&nbsp;=&nbsp;39.<br><b>Ответ:</b> 39",
      "tasks": [
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;8, BC&nbsp;=&nbsp;5, а её площадь равна 52. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
          "answer": "23"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;5, BC&nbsp;=&nbsp;1, а её площадь равна 12. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
          "answer": "4"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;4, BC&nbsp;=&nbsp;2, а её площадь равна 60. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
          "answer": "25"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;6, BC&nbsp;=&nbsp;2, а её площадь равна 64. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
          "answer": "24"
        },
        {
          "text": "В трапеции ABCD известно, что AD&nbsp;=&nbsp;7, BC&nbsp;=&nbsp;3, а её площадь равна 80. Найдите площадь трапеции BCNM, где MN — средняя линия трапеции ABCD.",
          "answer": "32"
        }
      ],
      "source": "Ширяева, блок 2, № 126",
      "svg_code": ""
    }
  ]
};
  window.extraDatabase[17] = data;
  window.extraDatabase["task17"] = data;
})();
