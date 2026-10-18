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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACoCAIAAADywpKZAAACDElEQVR4nO3WQYrjMBRAwTfDHNA6qX1Dz8IQEsfEu6Q7rlqZRg2C/yLpz7qucW1/P70BPk8EiIDTCMYY79kH77Qf6/rkQxvjHaZpep74w0kwxvDT/3oHI95FMU3TB/bFG52cBFzE7jD492LpdirM8zzGmOd5++ftg5/vftLLsmwft5k+LH1xHRw+IviNXkx8dR1cweljXwTf7/7wP3z4iwARIAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBFcwRjj9r0sy/MCEXy/eZ5fLziJYIvoltJ9U/xw487tj9M0HSxdHx0v4otsU74fuuvginYXxEMETvuvN03TwZTXJ5/YG2+yuwg2f15PfYxx+rbk19mN9SQCrsDDEBEgAqr/4CCuomYAUnwAAAAASUVORK5CYII=\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACoCAIAAADywpKZAAACDElEQVR4nO3WQYrjMBRAwTfDHNA6qX1Dz8IQEsfEu6Q7rlqZRg2C/yLpz7qucW1/P70BPk8EiIDTCMYY79kH77Qf6/rkQxvjHaZpep74w0kwxvDT/3oHI95FMU3TB/bFG52cBFzE7jD492LpdirM8zzGmOd5++ftg5/vftLLsmwft5k+LH1xHRw+IviNXkx8dR1cweljXwTf7/7wP3z4iwARIAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBGQCEgEJAISAYmAREAiIBFcwRjj9r0sy/MCEXy/eZ5fLziJYIvoltJ9U/xw487tj9M0HSxdHx0v4otsU74fuuvginYXxEMETvuvN03TwZTXJ5/YG2+yuwg2f15PfYxx+rbk19mN9SQCrsDDEBEgAqr/4CCuomYAUnwAAAAASUVORK5CYII=\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC0CAIAAABdbfpbAAAFeElEQVR4nO2dUa7jIAxF6egtMFlps8PMBxJKSeOQJoBtzvmq3rSjSjkycGvgta5rADjgX+8vAKrBD5DAD5A492Oe5wbfA7owz3N8vulFxt/+T6/X6/Qv4In4fKdp+vJv64Zpmr6/CcZgmqb1k9yP3t8QOpMpEj51QZGh2dePL/OPo0++3+/4ep7n+Dqb0aQ3ZBzNcI/eD22Iz2VZFulN5fVjLxdYJ5tx7h/xhfxjWRbWuv6Q68e1fOykFoE13u+3POM88WP/YbKQoTjx46tfSRGGG/dIfkzTFJcqR4qwAHHPef2QFQlUEdecz09jkaCKjEnp+kWoItQPx5T6karIuutHjIteLHFJab6+ZV3XbJX7er323oADfuwf29tALuKS3/sLWdGMwI9+kIsMwo9+CNNVqognJD8Kf407WvRSRRxwd3/D0UBDM4AP7vpxmouAaU5+n7v0f7Ho9cfD++foF3HGw37Iv9EwIzHH8/tvhbkIKxpz1NqfTbrqg1p+kK76oOL5DvSLOKDu+R/kItZpcT4MuYhdGp0fRC5ilEZ+0AFvlEZ+0C9ilHb1I9AvYpAO5xdSRQzR2o840LCisUJrP1KRQBET9DwfF0X00/n8ZBRRTv/ztekX0UxnP46mq/SLKKGzH8kA0lWd9B9fIqSrOtHiRzhOV6kfHVHkR4R+EVWo8yOw6NWERj8CiqhBqR+BFY0OfjlfqgFp+//+IKvtTRJQG6X1Q8hF0nSVKtIApX4kyEX6ot0PoV+E+tEA7X4I/SLkIg3Q7scWqkh7LPkRqCLNMeZHoF+kLcb8kI/DY0XzOMb84Di8xhjzYwt7ehtg1Q/uo2mDVT8YaNpg1Y8tNAPUw4MfAUWq4cSPQC5SByd+CPtoyEXu4MQP+kUq4cSPhLDopYr8gDc/5IGmy1cyjTc/6Bd5Fm9+bGHRex/PfgQUuY1zPwK5yD2c+0EuchPnfpTkIiDg3I+EfMA3HKF0f2UNhA2bgd1WBwzkR2Rd10yRZVn2ExSIjDK+bGEfTTkj+hGYrhYzqB/c01vIoH6QixQyqB/kIoUM6keCTRIyo/tBv4jM6H7QLyIzuh9byEX24McHVJEM/MghF9mCHx+Qi2TgxwfkIhn48R1ykQh+HEIuEvDjlMFXNPhxzsi5CH4UMex0FT+KGLZfBD9KGTMXwY9rjHa+CH5cY7TzRfDjGqP1i+DHNUbrF8GP3xkhF8GPW7ivIvhxF9+5CH7cwn2/CH7comS6arqK4MdjuLynFz+ewes9vfjxDF5zEfx4Hk9VBD+q4KaK4EctfOQi+FEFN7kIflTBzX00+FEX6/0i+FEd0/0i+NEIoysa/GiHxctG8KMp5hTBj9bYykXwoynmchH8aIq5n/Hwoxsm7qPBjz5Y6RfBjz5YGWjwoz+aqwh+qEBtFcEPLejMRfBDBWpzEfxQgdwv0rGK4IcuvvaLdKwi+KEOVf0i+KEUJSsa/NDLUS7SspAMd3+2Lbrf9k390E7fXAQ/VNM9F8EP1XS/jwY/bNDrPhr8sEGvc1fxwwa9+kXwwx4t+0XwwyTNqgh+WKVNLoIfJmmWi+CHSZqdu4of5ql6vgh+2KZ2LoIftqmdi0h+KGmxh0Jq5CLUD1c8XkXwwxvP5iL44YrHcxHJj72JoJzHcxHmp245mq5eqiKMLz6JReJ+LoIfPjkdaAotwQ//CIdqzvMszyKYnw6BsKKRnzLz01EQTgYQkPbPUT/ckJYt+9148gepH0Mg7KOROZmfKjklDZ7idMKRcT4/7X4EFtwnPb6SOekWaf6Rxpc4aCk83RfKSY/v0nN8ZSsfJBiczId8fGHNMjL7p/9l/oEikMjHFxiHkt9y8QMk+H0OJPADJPADJP4DAnoMGTPzhckAAAAASUVORK5CYII=\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACwCAIAAAAwkGr8AAAQWElEQVR4nO2d3ZbjKg5GnVnnAZMnrbwhc8EchiAhY0Ag4NsXvbqrUzZGCP2avJxzFwDgSP4zewAAgGlA/wE4F+g/AOfyz+wBgOvz+fz9/fk/439e1xX+AkAgXhV+zVzXFRZM8k/6yR8cmMr7/XZIwQJ9/EpLgP8/E783v16v2QMB+/P9fukP4f9Pw/v5UH4wEdj/OXjLj9geDOP9ftMfvhB8zuLz+bAu2RWJis/ZgOOhliO3ljzv95tdS9D/aQief05aACQIViQgLCf4/xP4fD6J8r/f79g9u5UoAH4VPVX+xHGA/s+HDcyQGgAx8Xoo1HyW1BEYXO4+k6T0mogk/G+yEdBfBCfgncH4n/Hfc4qduJDJ0soB+z+CeNOlnr8Q6iMLcBShaS9u4wtdoTmbz2r+dV2uILWH/N8g2Go/Vf4knQPpgJI6kSf+mP+vW/sB+z+CuKU/UJLkRxbgZGSbH2yDX0X0Y0XOo0YAAyjUQ3OZ8J5mAcBpyHF++Ezuw644cwT7PwLqwjnnQmh3+7tawwL2KLH58at+dHn4z5RmjjR2L5DACjJAt2q4AEfhF8Btbr/EW4w/VuICYG2pQyWk8StgUXLZ+0T0uYpgTvkLgf6rkJNQuTGHC7ANLfX8nD6zx0ZU2AksLBVyHt0jCcEFWB1ZgWXNv714u/I76L8qrITK5QQXYBse2Xz2t5Kr9YoQsaq0aJQQdfDC4oAvsCglcX78YeFSXYy/g/4rwZZk26/Td5BAG6FE36K6vZTfof6vAa32C+J/euUu1wFj8E2fJT185SRrwDnX8pII9F+dd9thHsne8fl8sAsYJxzuVvLGzqO1kZiWDnal2nMALELYXx+kZS4IbCKrZZ0E2TaB9qFC/3uiISF6WWwBZmmv6uUu67qG/QGc/90H7/Iphf3ALPHX7Oid5lr38mgR7VsI8Khaab0rgzoKc/tdhKW3tKD/fchJqKeoFBYWaOFRnF8hr9DuoWezcf5PB9jXe7vfJTk7CIKbCBvuBXqJhj0zqrPcO+4lZ6K6Pcd3cYgCDNDd2x/T55e9ft/LnQatymjfDnv3LAbE+fIdNW6BNVRDLvczwCZD/8ejUc9Prl9y08a7sGANNdF9KciMWRMgoK358Y2Sn4wRNPp/K2G/w2vAcf3JykAvsBK33buurfH+9u7JHekP+6C0r+wNNQsjs3HIAmgQtHp8nE9HQpeW0n1h/5/B7sFjLH9uAHgjqAtegsL36nkpx9/M0/Hu4ZWhXB9h7rTfRlD/f8yYar8MegH6In+L9sjpHRxUwv4/w4LyX9xLwePHsAclcf7TC7YMJhkAVf7OstYIKjaGxmaD+3BCNBiPBL1AFUyP8ynJGJz+WW/Q/yLYzND0Jny6XEAJw6p6LUMac1/E/6Wwp3rN/X5uZAGecvuW7iyBzhIl4v972KzsdOW/kAUoIMxJyWlcswTKVvsHMcbNWJ1k0uw42+gFuMVgnC8Pb+TdYf95Yrsxc3t+CFyAGMHmX6SeP5hQ8Ge/GHrYMBD/32Ck4CeALABlzPv5jeTOiR+6JY10NlaBrbEFCcWfsQDbLnos3XP7evNpIXaD/vPYLPjlOLwXwEjf/iNyu/bgoUL/eajxt7aAEhYaagvso8maP36QMmxP4Sy/8mj9F+Za8PxtYsGZHEasLQvZfKd5kn8dmy+Up+Q8SYMribLcgCso13yDmRqPKb8S+s9gSkLlJGowezidWdfmx1hbWrutknasSaicdUdeTk7z6fPaefzgVDpLnr8H/T8/0JKs0rkLGvz9/b037Qj2nTxJp0PAL+WkbD69O5sy5cA4Gej/D7lmrOlyqkA40MI48bYlHIlz/Ws/qy8+AP8dHvTnT4etxUTfwxpL+89seGw/HhaQO3lmj+4ZZhtJFptHPQTlNyKqctbdxQKC5sfhtH1oI4mpzcvQUCZiWUIVLPcswR6y2rLuXmYz5xezwOLQZjPld+sEMkmVvrCwZ/ZxWIzLYvm13ghddtYkVMfbfDtgST1/dXHYX1rI///kyUNJZunKGfsdAVNGIvD39ye/n+8X6GVy8CXkasm2mLv9zIXdng1u0nVYdgFkbz98hv7W8JHWkzyUzdVla1mMZL+wP8Gm81ni7T8aqpHnSshNvrXR7rboC9k17E9IegHsDCan+Xuw0NI6S/9zOSfLEmrByGPu1MlTwkIPeEr+L27jlb/sbTNi3dN+6vjQ1PCXvt279qHHMZrOX87egCaQzMCuxt9x/SdjHrakmG82JG7BiMNVznH6v5yE2hlTCCip58dqvyV0aRl/3rP0/0zlH/bUp8X5Adbfcb974tQBZjno/H/7J/nrEQelb4VD5pc4b18V+m7/ZbPhJ2Hy/jOK7av9MnouwDlVvRy3HpblSTgl/5/gDrBIHr3k8+23azlyJs9++OM92BbygOVJOML/Tzx/KqFDiH3UarnLrn7LlVdk9aByN/vPmrtzqv0ysZuaO0uPJZnVo+r5MnO/vbMD80IPddjlOHtQM6nIApRX9SxHuUpsUE7aXB82kFBfyt8IQD1fhl1ay83Gbvofr9qc8i8npL6Ub4gluf0zJ3ObctK2+b/VEzN60AZ1+pm6en7urOv9KJnDNZi6+3QmtkjJY55pplhui9Wyw19xu35jN8FOS2sr/XeZL/BcWkIaJJPDTlpulR8+mXRpLR0H7ab/DspfAJ2iEs0HLm/8F52lDfUfy7cEQeExdTn2My2b6H+QBFZwCXKQj3lj2bKctIn+e9hFvLR4OvI0zgcx+1l+z/L1v3CwF23yv2y/ejEe+eCzeMbOqeQVsk/B75fl9d+Dar/M7Us7V5QFhOYn0Hf795miue5HF9hmLDj/HtnbTyiJaU+b0mQCZw+nMzvY/1WPXlGmxNtPPoCpS9j+zfHl3/9NXrfcT0IVlJzMwf7X9/v1mRTFwS1F7gv8tpmif2YPoImciTttC4iToFcmzi+07a/XDi5hIz79yfqVnn0W2OT4o43kWU4LTV3t+/lyIfDAaaTsWvBLWFj/D5FQjhLNv6IGdfYKW1qFdtiM8pas+mCHK7+nsZNHdhnGPIJBzlF+t6j+HyUhFrmBt/wiscIfPqUBdivcdUNcL/9/eKtPyO3nknzVs5FsAdukuB+RKyftk/D7ZTH9p4vyUX/L0hSet3+m3nZh+2o/w2T/o4xcrmtXryxB6Y2dxP+nvsMh0+sOPip6jfq/XNnej471/BYOme3ruuRq/8as5P/TsH8/9yxo/vWvO0qVMCT/NB7f/ZrBQ6KJc7tIZzsgRdB092auaVylr67nV9yUnc+933ih5JbWZmuMZQ3p7q38AaU4v+R28aI/YbZDVY/OOW2U3Jg19D+RkNtCMMk6G9+Nx+b/PNvrf2DMVJvFevzvi17xT7YpU4cgPxfnX/O+UTOe5O/3u+4kC/iZj3+yzdIqx7r+J3gJxadTrZunKdH8kfX8sB+x/7ulMuRe72X/uSezHZD/Q+OuXQNR2dsf9pi5/F/A5jrpAp3/2SOag5XHvl1/S0uoML0/eIO71f8tCwFsSNWxqrIWVvz/xNeiYb9buck/uNa5Bl6//ow7nBuEAD5yZKv9xidfCUP9f8KZ00s3Y8mdi5bVnnbFrQ57TrzZ+R+AFft//R6utoeE5Hf1vAN22barOxUCjmohL8SQ/ffQ13tXVH55qcVqb/zpEhdgaeWh7oxzbukdrQMTcw8UNiu7VmKmIrc/6wFv83/0Y/InLcP2NYYy0+zRTcO0/ied2GblJDSTWlabQv1/9EmDhAELS+tYDOn/onZGVnvLD/JIq5d4ohxUQNB/j6H4f6Gwv+T9/GvlzGVCEiQvnQW4fuWyh4Dqmb0B/Y9kVGZ35bhRRJhVs+OPofZfHvZyD+hZ1K8cgwn9X0tCy8X5OZ5G9TYthwybUQaBafX/4FIuVO0vPHt3y5LS5/N5r/Z6HHtUtP1hD2Xu9iMkZkyxjc2PKa//Pf0VC6yytOYyWf/pZmRNSFtqvqdCme1HarnsjMGhWmBm/y99DUN4BWAkSWwiv58/dGTzyHUr2nSn6ajOkdQzZm08li3JovX8p1Q78/Znw8git88c+08TM3OJDb4wttNsfgkGXwo68yT/SqbsOskYJtqQ+NbCLNm0co1U2/+FfDdTYzPIBP03IqHQybNxhk+mJZlvwYpQUO1/yugJMqL8ufHQscUNf5vRov/W5Ohhld/I2GwyVP/tbM/H2vyYxmK+EVHmxnOIEBsZl/+jebUpiZnCU7eHj2s9TLUD5r7Az1pu0hxjthlqb8fcVx5DTDAX59iN9mY+dgLHwwYj7HjOEW4hunoYK9XEtQJvn6Vd/52NLWCKSdsD3ff/hTfkVVv9Tns//2RQ7W9Ce4PJ5fx62QrhOrD5Ml3s/3TPDmJtYbT+D5AQvP1Cuui/IyLuOELhjvS+QtgPcqjH/yN1r0TzN67nP6WX/Z9ihO3UkpdGcdZYCSktDtj8Cjra/+RSAyacVX4I+ila+T/26BWlG13I8Fni+/2qJuFoST/cDrJ+yqD+n6D8fSV028nT8V4gJlbC8VpHD4xDn08lGk6FdkAIb78Lvfz/QEcpCL8+YAGfQ2f7r/QVi/T9fHTvGqdxDeRMevJDh/M8G+m1kSi1+uUumwCbX0F3+z/A70uuD7k30tl96rgCoPnadNd/1885T8bDRnzNgwWd9F/ox2i/MjRfCQ39V1oDdBlA+l3o6f933J6R4RuAhv47nfxcshi6XBO4jvm/li9aiT+JDN/qJLranp+j3xDVeEEQ6NP/Q09fuJ6UheOjGtDJszp/f3/JO3mNQPkVKfQTBP+wS8gHb3881P9XigKqL4uwX5vWUKpOQnFuH5o/i/b4X69Lh23fjJdNxWgBpVL/gwCeamz8AVnzIWNtlPJ/7NqouH7Or8Ta6EiT/j/qxyjX/Lohgack+t995hPJVo+t4tdBIZX5f9+eSV/DkH/luq7P5/N6veQ3dtDRuQGfz6euEMCmgR1e5VKibtt4uj3LcX7dGEAjSv5/TCzl8lskywMuoR4P7L+vzPu/y9vz03p++RjAWsRbTOE3heZO8gcqVOwZQtifBPm3cT629onE0tG7S26p3A5Je2DAVeT/ypVf1nwwnQH+v6dQ+qj2j6d/VhaavwpT9D9n0qH8UyiK/31IlvsCvxCwvV4vIbePQO5YbgsB7JF+WC0DKOr/Zw9jiZVf6PeOBan6nT/ALCVvBCRmA+tkDA/y/7nXMIQ3dtxvPR9CPRYXRQFJIeDWrwSKlAQJbGwmXBOR2xIMi/89dOHluki1RwIC9/ovqzo0f10G6z+r51D+udz4/+U+2BsncwARujao559bP4gFtMhtDGEnvr0C9uxFGW//ETZaI2v/fc5fTtvSql7cIwxM8fmX8M/4f2lOLhR92c9X3F32DZHzm8LL5S1831OcwNJ4/ez+zS7h4ogcp5C1/9iJQUzuDa5eYL1NIWv/YfzBGGD8J/Jj/+M9+FHZD4A6oPxzYex/SNX47YAt24QPxL29/i/s53sPG1xXWz9lEK4XYi4/J8u6fJzxXdhrgilI+T8APMM0FjvCYKD/AJxLt+//AgAsB/QfgHOB/gNwLv8FDyrTKQhjinIAAAAASUVORK5CYII=\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABUCAIAAADieH5kAAAFk0lEQVR4nO2dW5bjKgxFnV53gGakZIa+H+72UsTD2ICQ4OyvSqoqQUJCD7C9HSrZ9z31cvtFfGja2fed6mffd6bMRTilPsVnCqF/ZsyA8sKAE6jo5JQ9v2L+2ezgnPt+v9dL5gzggmrm1JhzbtRgBuK9/3w+9J3QH8xEgNTav/IKlyGqq9WI2ozVFIj57bKTWgib+9HDGUBhtmwjBWIR/AgDGfjFe09fUgWukA6xbHn7p5CI7LJu+QYUvu9YWW/lRq49AoSFb9KVwS8sCJysoDcm402zRMwp38FGu9QyVs9qlUDY97zdBlGtlJWDeCtCBc6qxmjX/1ZY1Q4A669nqY3hlPVnRFZaAzjn6BbGlfqDp4R6W0ST1B8yIqtzgFSVtkL11okVNobDFdM5V+TqQsHpCUj927KCPkOrLhRTnQOsMFvChCciR4+oMcz6wzonY0W6dBG2bEePaB5m1WrliqmoBggT0wNHHtpBDeXz+TjnJqgEUvukD+jjlqXQRhWSn97Mp956iVREw+gG3uhBTUhYCZjWc5OlXEsKxC5cWKRXLcnZFqQ+UNooVEmrA8IjHSCVg57CTJChKuHUpPeeqZQdGDZEy2sDW8ak5yD1lyeqbf1qpyNsaMPjU6DaKh48JNwYNgTb8d1I8vMyZah1zArKu/761ydbUJ0bCgJHhwPeQg5AlXv9rMcVV8PuxnDzYcsJH+5OM2FMrEDTwIKACeVHA1ftZzb5lEeg8NWAuSDQacDSKRCsXw/6Z4GaTaeQNSYCpJIfndMwK4aCQD9flRbbkNJXQHMlsP+7gnn7pe23iBbB+eTnElhsSIujOR1NtQqbj1B0DY66sh6lT0zuipBEOjoK1jHv7Z+NHSA6xPCwJ5IfPfSrLyuRiU5yXSCdoRYcmioBmgbL5AsSDoA9L+Uo7Eyk8gVLDhCt4vVEWEBRFZ+j+YKxFEisigdN0BMEhLPlvqIi+TGEhnUq1fXvN57P0e3OCw2u2AeCsPnqZxgZwrP+1yn/XsbTybEOHSsKeARdgOWnbEirsNcVYcyVL3ClrxW+36/wZI2JPz28Cl1/u0hOHP18ZpZiNtPeAVLWDzcwgXDfItUrp7/tSvujEFj7rSMcBMZ2YMffFQJog1qkwPMEWKtQukps6ExY/qdBZh6jXX9hs2nmAHq2EkE9ArNZcqWLmRqgRBhghfAwZqcv0pAvVNUAqXQt9AdgiHPPlU5ialenBi0PQax0oLCKR+o/DU2mNXqWU4/BVDlAGCth/TPRsBKghqGqXHz59dH9i+HCgOY0X90kz/qX8MZk6UYdlv+5aTLFmg2mas3WJgxoSz7FfTrjOvOF94OA9S9Cq2WbWf/ZPjlGHxJ76QChK8MHJqY+a1dV+FJe1gCw/kWIdjtefI7afCEnTNTXcdp5TWosOMwX9PBgNNjzWorbha9w9tUmPyc3A6ILfKqKhxsswou1T7n1H4URIJoIlq8BYA6e1n4mDKbUKfW7MhCAmsGtNZvIlu9Pgzrn8g/mxo0e1uQyiagBRA+QajSVEi+J/otanwZdSRlP5ribZlO5b4My69csDOhN2Au53qc/GDKY+y6QIWGADHmTeJFiDCRXA+RTf7As1BLYbSPCm3vKDesdoU+kmp7SvglUEprH9U7UZpRbTiQCnFdn0rUfgAvvPWvmXHcRtXgzcO4ApyRMwkN/IAOyeO/Zeh9dMZ1zyt2APx8g6sob8Xvl8gAZQjuhXDYjOKKX/Be+FUoF6wflWEl+/sJqgtHDAbZRXvKG/NQAGneqgUEMGdJPCuS973EPMLAIh8EMIvKQPEPuCzRAS0T9bR9Gx6dEgkUwZ/QUPCADPCCaHdi1/o05AJIfkCdj60aN58cBLvGMCgNGQbMgW8aDGgAsDWoAsDRwALA0cACwNP8DvbECIpD7eOEAAAAASUVORK5CYII=\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
      "svg_code": "<img alt=\"Чертёж из расширенного блока Ширяевой\" style=\"display:block;width:100%;height:auto;max-width:320px;margin:4px auto\" src=\"data:image/png;base64,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\">"
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
