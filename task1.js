(function() {
    window.database = window.database || {};
    const task = {
    "title": "Задание 1. Планиметрия",
    "prototypes": [
        {
            "desc": "Внешний угол равнобедренного треугольника",
            "svg_code": "<svg width=\"240\" height=\"150\" viewBox=\"0 0 240 150\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L140,140 L80,40 Z M140,140 L200,140\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M46.8,88 L53.2,92 M106.8,92 L113.2,88\"/>\n  <text x=\"5\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"135\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"75\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"205\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $100^{\\circ}$. Найдите угол С. Ответ дайте в градусах.",
            "theory_sol": "1) Внешний угол при вершине В равен $100^{\\circ}$, а смежный с ним внутренний $\\angle B = 180^{\\circ} - 100^{\\circ} = 80^{\\circ}$.<br>2) $\\Delta ABC$ — равнобедренный $\\Rightarrow$ $\\angle A = \\angle B = 80^{\\circ}$.<br>3) $\\angle C = 180^{\\circ} - (\\angle A + \\angle B) = 180^{\\circ} - 160^{\\circ} = 20^{\\circ}$.<br><br><b>Ответ:</b> 20",
            "tasks": [
                {
                    "text": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $113^{\\circ}$. Найдите угол С.",
                    "answer": "46"
                },
                {
                    "text": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $104^{\\circ}$. Найдите угол С.",
                    "answer": "28"
                },
                {
                    "text": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $122^{\\circ}$. Найдите угол С.",
                    "answer": "64"
                },
                {
                    "text": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $136^{\\circ}$. Найдите угол С.",
                    "answer": "92"
                },
                {
                    "text": "В треугольнике АВС стороны АС и ВС равны. Внешний угол при вершине В равен $144^{\\circ}$. Найдите угол С.",
                    "answer": "108"
                }
            ]
        },
        {
            "desc": "Угол между биссектрисой и медианой",
            "svg_code": "<svg width=\"250\" height=\"160\" viewBox=\"0 0 250 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L220,140 L92,44 Z M92,44 L105.6,140 M92,44 L120,140\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M87.2,50.4 L93.6,55.2 L98.4,48.8\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M204,128 A 20,20 0 0,0 200,140\"/>\n  <text x=\"5\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"85\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"115\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text>\n</svg>",
            "theory_task": "Острый угол В прямоугольного треугольника АВС равен $20^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С. Ответ дайте в градусах.",
            "theory_sol": "1) В прямоугольном $\\Delta$ острый угол $\\angle B = 20^{\\circ}$ $\\Rightarrow$ $\\angle A = 70^{\\circ}$.<br>2) $CD$ — биссектриса $\\Rightarrow$ $\\angle ACD = 45^{\\circ}$.<br>3) Медиана к гипотенузе равна её половине. $\\Delta AMC$ равнобедренный, $\\angle ACM = \\angle A = 70^{\\circ}$.<br>4) Искомый $\\angle DCM = \\angle ACM - \\angle ACD = 70^{\\circ} - 45^{\\circ} = 25^{\\circ}$.<br><br><b>Ответ:</b> 25",
            "tasks": [
                {
                    "text": "Острый угол В прямоугольного треугольника АВС равен $19^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С.",
                    "answer": "26"
                },
                {
                    "text": "Острый угол В прямоугольного треугольника АВС равен $24^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С.",
                    "answer": "21"
                },
                {
                    "text": "Острый угол В прямоугольного треугольника АВС равен $38^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С.",
                    "answer": "7"
                },
                {
                    "text": "Острый угол В прямоугольного треугольника АВС равен $12^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С.",
                    "answer": "33"
                },
                {
                    "text": "Острый угол В прямоугольного треугольника АВС равен $21^{\\circ}$. Найдите величину угла между биссектрисой CD и медианой СМ, проведёнными из вершины прямого угла С.",
                    "answer": "24"
                }
            ]
        },
        {
            "desc": "Поиск высоты параллелограмма",
            "svg_code": "<svg width=\"270\" height=\"160\" viewBox=\"0 0 270 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L180,140 L240,20 L80,20 Z M80,20 L80,140 M80,20 L208,84\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M72,140 L72,132 L80,132 M211.6,76.8 L204.4,73.2 L200.8,80.4\"/>\n  <text x=\"5\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"185\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"245\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"15\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text>\n</svg>",
            "theory_task": "Стороны параллелограмма равны 12 и 18. Высота, опущенная на меньшую из этих сторон, равна 15. Найдите высоту, опущенную на большую сторону параллелограмма.",
            "theory_sol": "Площадь параллелограмма: $S = a \\cdot h_a = b \\cdot h_b$.<br>$12 \\cdot 15 = 18 \\cdot h_b \\Rightarrow h_b = \\frac{180}{18} = 10$.<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "Стороны параллелограмма равны 14 и 28. Высота, опущенная на меньшую из этих сторон, равна 16. Найдите высоту, опущенную на большую сторону.",
                    "answer": "8"
                },
                {
                    "text": "Стороны параллелограмма равны 15 и 25. Высота, опущенная на меньшую из этих сторон, равна 20. Найдите высоту, опущенную на большую сторону.",
                    "answer": "12"
                },
                {
                    "text": "Стороны параллелограмма равны 16 и 32. Высота, опущенная на меньшую из этих сторон, равна 22. Найдите высоту, опущенную на большую сторону.",
                    "answer": "11"
                },
                {
                    "text": "Стороны параллелограмма равны 10 и 24. Высота, опущенная на меньшую из этих сторон, равна 12. Найдите высоту, опущенную на большую сторону.",
                    "answer": "5"
                },
                {
                    "text": "Стороны параллелограмма равны 12 и 16. Высота, опущенная на меньшую из этих сторон, равна 20. Найдите высоту, опущенную на большую сторону.",
                    "answer": "15"
                }
            ]
        },
        {
            "desc": "Площадь трапеции внутри параллелограмма",
            "svg_code": "<svg width=\"270\" height=\"160\" viewBox=\"0 0 270 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L180,140 L240,20 L80,20 Z M240,20 L50,80\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M31.2,108 L38.4,112 M61.6,48 L68.8,52\"/>\n  <text x=\"5\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"185\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"245\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"15\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"30\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text>\n</svg>",
            "theory_task": "Площадь параллелограмма ABCD равна 96. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
            "theory_sol": "1) Диагональ $AC$ делит площадь пополам: $S_{ACD} = 48$.<br>2) $CH$ — медиана в $\\Delta ABC$, значит $S_{AHC} = 24$.<br>3) $S_{AHCD} = 48 + 24 = 72$.<br><br><b>Ответ:</b> 72",
            "tasks": [
                {
                    "text": "Площадь параллелограмма ABCD равна 72. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
                    "answer": "54"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 84. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
                    "answer": "63"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 68. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
                    "answer": "51"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 104. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
                    "answer": "78"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 112. Точка Н — середина стороны АВ. Найдите площадь трапеции AHCD.",
                    "answer": "84"
                }
            ]
        },
        {
            "desc": "Площадь треугольника в параллелограмме",
            "svg_code": "<svg width=\"270\" height=\"160\" viewBox=\"0 0 270 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L180,140 L240,20 L80,20 Z M80,20 L100,140\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M72,144 L76,136 M124,144 L128,136\"/>\n  <text x=\"5\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"185\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"245\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"65\" y=\"15\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"94\" y=\"158\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text>\n</svg>",
            "theory_task": "Площадь параллелограмма ABCD равна 60. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
            "theory_sol": "Треугольник $ABD$ занимает половину площади параллелограмма: $S_{ABD}=30$.<br>Так как $E$ — середина $AD$, то $BE$ — медиана в $\\Delta ABD$, значит $S_{ABE}=\\frac{1}{2}S_{ABD}=15$.<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Площадь параллелограмма ABCD равна 64. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
                    "answer": "16"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 88. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
                    "answer": "22"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 100. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
                    "answer": "25"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 72. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
                    "answer": "18"
                },
                {
                    "text": "Площадь параллелограмма ABCD равна 116. Точка E — середина стороны AD. Найдите площадь треугольника ABE.",
                    "answer": "29"
                }
            ]
        },
        {
            "desc": "Поиск высоты треугольника",
            "svg_code": "<svg width=\"250\" height=\"180\" viewBox=\"0 0 250 180\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,160 L220,160 L100,0 Z M20,160 L148,64 M220,160 L60,80\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M143.2,57.6 L136.8,62.4 L141.6,68.8 M63.6,72.8 L70.8,76.4 L67.2,83.6\"/>\n  <text x=\"5\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"175\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"95\" y=\"-5\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text>\n</svg>",
            "theory_task": "Две стороны треугольника равны 15 и 25. Высота, опущенная на большую из этих сторон, равна 12. Найдите высоту, опущенную на меньшую из этих сторон треугольника.",
            "theory_sol": "$S = \\frac{1}{2} a \\cdot h_a = \\frac{1}{2} b \\cdot h_b$.<br>$\\frac{1}{2} \\cdot 25 \\cdot 12 = \\frac{1}{2} \\cdot 15 \\cdot h_b \\Rightarrow h_b = \\frac{300}{15} = 20$.<br><br><b>Ответ:</b> 20",
            "tasks": [
                {
                    "text": "Две стороны треугольника равны 24 и 32. Высота, опущенная на большую из сторон, равна 21. Найдите высоту к меньшей.",
                    "answer": "28"
                },
                {
                    "text": "Две стороны треугольника равны 15 и 20. Высота, опущенная на большую из сторон, равна 12. Найдите высоту к меньшей.",
                    "answer": "16"
                },
                {
                    "text": "Две стороны треугольника равны 10 и 18. Высота, опущенная на большую из сторон, равна 5. Найдите высоту к меньшей.",
                    "answer": "9"
                },
                {
                    "text": "Две стороны треугольника равны 14 и 21. Высота, опущенная на большую из сторон, равна 10. Найдите высоту к меньшей.",
                    "answer": "15"
                },
                {
                    "text": "Две стороны треугольника равны 12 и 18. Высота, опущенная на большую из сторон, равна 10. Найдите высоту к меньшей.",
                    "answer": "15"
                }
            ]
        },
        {
            "desc": "Площадь отсечённого треугольника CDE",
            "svg_code": "<svg width=\"250\" height=\"160\" viewBox=\"0 0 250 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L220,140 L140,20 Z M80,80 L180,80\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M47.2,107.2 L52.8,112.8 M107.2,47.2 L112.8,52.8 M155.6,50.8 L162,46 M158,54 L164.4,49.2 M195.6,110.8 L202,106 M198,114 L204.4,109.2\"/>\n  <text x=\"5\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"135\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"60\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text>\n</svg>",
            "theory_task": "Площадь треугольника АВС равна 40, DE — средняя линия, параллельная стороне АВ. Найдите площадь треугольника CDE.",
            "theory_sol": "Отношение площадей подобных треугольников равно квадрату коэффициента подобия ($k=2$).<br>$S_{CDE} = \\frac{40}{4} = 10$.<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "Площадь треугольника АВС равна 28, DE — средняя линия, параллельная стороне АВ. Найдите площадь $\\Delta CDE$.",
                    "answer": "7"
                },
                {
                    "text": "Площадь треугольника АВС равна 56, DE — средняя линия, параллельная стороне АВ. Найдите площадь $\\Delta CDE$.",
                    "answer": "14"
                },
                {
                    "text": "Площадь треугольника АВС равна 104, DE — средняя линия, параллельная стороне АВ. Найдите площадь $\\Delta CDE$.",
                    "answer": "26"
                },
                {
                    "text": "Площадь треугольника АВС равна 72, DE — средняя линия, параллельная стороне АВ. Найдите площадь $\\Delta CDE$.",
                    "answer": "18"
                },
                {
                    "text": "Площадь треугольника АВС равна 96, DE — средняя линия, параллельная стороне АВ. Найдите площадь $\\Delta CDE$.",
                    "answer": "24"
                }
            ]
        },
        {
            "desc": "Площадь трапеции через среднюю линию треугольника",
            "svg_code": "<svg width=\"250\" height=\"160\" viewBox=\"0 0 250 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L220,140 L140,20 Z M80,80 L180,80\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M47.2,107.2 L52.8,112.8 M107.2,47.2 L112.8,52.8 M155.6,50.8 L162,46 M158,54 L164.4,49.2 M195.6,110.8 L202,106 M198,114 L204.4,109.2\"/>\n  <text x=\"5\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"135\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"60\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text>\n</svg>",
            "theory_task": "Площадь треугольника АВС равна 40, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
            "theory_sol": "Средняя линия отсекает треугольник $CDE$, площадь которого в 4 раза меньше площади исходного треугольника: $S_{CDE}=\\frac{40}{4}=10$.<br>Тогда $S_{ABED}=S_{ABC}-S_{CDE}=40-10=30$.<br><br><b>Ответ:</b> 30",
            "tasks": [
                {
                    "text": "Площадь треугольника АВС равна 32, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
                    "answer": "24"
                },
                {
                    "text": "Площадь треугольника АВС равна 48, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
                    "answer": "36"
                },
                {
                    "text": "Площадь треугольника АВС равна 80, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
                    "answer": "60"
                },
                {
                    "text": "Площадь треугольника АВС равна 108, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
                    "answer": "81"
                },
                {
                    "text": "Площадь треугольника АВС равна 124, DE — средняя линия, параллельная стороне АВ. Найдите площадь трапеции ABED.",
                    "answer": "93"
                }
            ]
        },
        {
            "desc": "Поиск большей площади через среднюю линию",
            "svg_code": "<svg width=\"200\" height=\"150\" viewBox=\"0 0 200 150\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L180,140 L60,20 Z M100,140 L120,80\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M56,144 L60,136 M60,144 L64,136 M136,144 L140,136 M140,144 L144,136 M87.2,52.8 L92.8,47.2 M147.2,112.8 L152.8,107.2\"/>\n  <text x=\"5\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"185\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"55\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"95\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">F</text><text x=\"130\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text>\n</svg>",
            "theory_task": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 12. Найдите площадь треугольника АВС.",
            "theory_sol": "Средняя линия отсекает треугольник с площадью, в 4 раза меньшей исходной.<br>$S_{ABC} = 12 \\cdot 4 = 48$.<br><br><b>Ответ:</b> 48",
            "tasks": [
                {
                    "text": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 8. Найдите площадь $\\Delta ABC$.",
                    "answer": "32"
                },
                {
                    "text": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 15. Найдите площадь $\\Delta ABC$.",
                    "answer": "60"
                },
                {
                    "text": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 21. Найдите площадь $\\Delta ABC$.",
                    "answer": "84"
                },
                {
                    "text": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 11. Найдите площадь $\\Delta ABC$.",
                    "answer": "44"
                },
                {
                    "text": "В треугольнике АВС EF — средняя линия. Площадь треугольника BEF равна 13. Найдите площадь $\\Delta ABC$.",
                    "answer": "52"
                }
            ]
        },
        {
            "desc": "Отрезки средней линии трапеции",
            "svg_code": "<svg width=\"200\" height=\"130\" viewBox=\"0 0 200 130\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,100 L160,100 L120,20 L60,20 Z M40,60 L140,60 M20,100 L120,20\"/>\n  <text x=\"5\" y=\"115\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"165\" y=\"115\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"125\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"50\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text>\n</svg>",
            "theory_task": "Основания трапеции равны 9 и 21. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
            "theory_sol": "Диагональ делит среднюю линию на два отрезка, которые являются средними линиями образованных треугольников. Больший отрезок равен половине большего основания: $\\frac{21}{2} = 10{,}5$.<br><br><b>Ответ:</b> 10,5",
            "tasks": [
                {
                    "text": "Основания трапеции равны 5 и 13. Найдите больший из отрезков, на которые делит среднюю линию диагональ.",
                    "answer": "6,5"
                },
                {
                    "text": "Основания трапеции равны 7 и 19. Найдите больший из отрезков, на которые делит среднюю линию диагональ.",
                    "answer": "9,5"
                },
                {
                    "text": "Основания трапеции равны 11 и 25. Найдите больший из отрезков, на которые делит среднюю линию диагональ.",
                    "answer": "12,5"
                },
                {
                    "text": "Основания трапеции равны 4 и 16. Найдите больший из отрезков, на которые делит среднюю линию диагональ.",
                    "answer": "8"
                },
                {
                    "text": "Основания трапеции равны 8 и 22. Найдите больший из отрезков, на которые делит среднюю линию диагональ.",
                    "answer": "11"
                }
            ]
        },
        {
            "desc": "Синус острого угла прямоугольного треугольника",
            "svg_code": "<svg width=\"230\" height=\"160\" viewBox=\"0 0 230 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L92,44 L220,140 Z\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M87.2,50.4 L93.6,55.2 L98.4,48.8\"/>\n  <text x=\"5\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"85\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text>\n</svg>",
            "theory_task": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=12$, $AC=6\\sqrt{3}$. Найдите $\\sin A$.",
            "theory_sol": "По теореме Пифагора $BC = \\sqrt{144 - 108} = 6$.<br>Синус угла — отношение противолежащего катета к гипотенузе: $\\sin A = \\frac{6}{12} = 0{,}5$.<br><br><b>Ответ:</b> 0,5",
            "tasks": [
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=10$, $AC=3\\sqrt{11}$. Найдите $\\sin A$.",
                    "answer": "0,1"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=15$, $AC=3\\sqrt{21}$. Найдите $\\sin A$.",
                    "answer": "0,4"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=8$, $AC=2\\sqrt7$. Найдите $\\sin A$.",
                    "answer": "0,75"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=20$, $AC=4\\sqrt{21}$. Найдите $\\sin A$.",
                    "answer": "0,4"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=12$, $AC=6\\sqrt3$. Найдите $\\sin A$.",
                    "answer": "0,5"
                }
            ]
        },
        {
            "desc": "Косинус острого угла прямоугольного треугольника",
            "svg_code": "<svg width=\"230\" height=\"160\" viewBox=\"0 0 230 160\" overflow=\"visible\">\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20,140 L92,44 L220,140 Z\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M87.2,50.4 L93.6,55.2 L98.4,48.8\"/>\n  <text x=\"5\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"85\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text>\n</svg>",
            "theory_task": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=15$, $BC=6\\sqrt6$. Найдите $\\cos A$.",
            "theory_sol": "По теореме Пифагора $AC = \\sqrt{225 - 216} = 3$.<br>Косинус — отношение прилежащего катета к гипотенузе: $\\cos A = \\frac{3}{15} = 0{,}2$.<br><br><b>Ответ:</b> 0,2",
            "tasks": [
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=20$, $BC=8\\sqrt6$. Найдите $\\cos A$.",
                    "answer": "0,2"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=25$, $BC=10\\sqrt6$. Найдите $\\cos A$.",
                    "answer": "0,2"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=25$, $BC=5\\sqrt{21}$. Найдите $\\cos A$.",
                    "answer": "0,4"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=10$, $BC=2\\sqrt{21}$. Найдите $\\cos A$.",
                    "answer": "0,4"
                },
                {
                    "text": "В треугольнике АВС угол С равен $90^{\\circ}$, $AB=20$, $BC=10\\sqrt3$. Найдите $\\cos A$.",
                    "answer": "0,5"
                }
            ]
        },
        {
            "desc": "Разность центрального и вписанного углов",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"black\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34,118.6 L80,80 L126,118.6 M34,118.6 L80,20 L126,118.6\"/>\n  <text x=\"20\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"135\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"75\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"80\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Найдите центральный угол, если он на $30^{\\circ}$ больше острого вписанного угла, опирающегося на ту же дугу. Ответ дайте в градусах.",
            "theory_sol": "Центральный угол в 2 раза больше вписанного, опирающегося на ту же дугу. Пусть вписанный угол равен $x$, тогда центральный равен $2x$.<br>Составим уравнение: $2x - x = 30^{\\circ} \\Rightarrow x = 30^{\\circ}$ (вписанный).<br>Центральный: $2 \\cdot 30^{\\circ} = 60^{\\circ}$.<br><br><b>Ответ:</b> 60",
            "tasks": [
                {
                    "text": "Найдите центральный угол, если он на $34^{\\circ}$ больше вписанного.",
                    "answer": "68"
                },
                {
                    "text": "Найдите центральный угол, если он на $42^{\\circ}$ больше вписанного.",
                    "answer": "84"
                },
                {
                    "text": "Найдите центральный угол, если он на $28^{\\circ}$ больше вписанного.",
                    "answer": "56"
                },
                {
                    "text": "Найдите центральный угол, если он на $56^{\\circ}$ больше вписанного.",
                    "answer": "112"
                },
                {
                    "text": "Найдите центральный угол, если он на $48^{\\circ}$ больше вписанного.",
                    "answer": "96"
                }
            ]
        },
        {
            "desc": "Поиск вписанного угла через разность",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"black\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M34,118.6 L80,80 L126,118.6 M34,118.6 L80,20 L126,118.6\"/>\n  <text x=\"20\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"135\" y=\"135\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"75\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"80\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Центральный угол на $40^{\\circ}$ больше острого вписанного угла, опирающегося на ту же дугу окружности. Найдите вписанный угол. Ответ дайте в градусах.",
            "theory_sol": "Центральный угол в 2 раза больше вписанного, опирающегося на ту же дугу. Пусть вписанный угол равен $x$, тогда центральный равен $2x$.<br>Составим уравнение: $2x - x = 40^{\\circ} \\Rightarrow x = 40^{\\circ}$.<br><br><b>Ответ:</b> 40",
            "tasks": [
                {
                    "text": "Центральный угол на $20^{\\circ}$ больше вписанного. Найдите вписанный угол.",
                    "answer": "20"
                },
                {
                    "text": "Центральный угол на $36^{\\circ}$ больше вписанного. Найдите вписанный угол.",
                    "answer": "36"
                },
                {
                    "text": "Центральный угол на $18^{\\circ}$ больше вписанного. Найдите вписанный угол.",
                    "answer": "18"
                },
                {
                    "text": "Центральный угол на $44^{\\circ}$ больше вписанного. Найдите вписанный угол.",
                    "answer": "44"
                },
                {
                    "text": "Центральный угол на $27^{\\circ}$ больше вписанного. Найдите вписанный угол.",
                    "answer": "27"
                }
            ]
        },
        {
            "desc": "Вписанный угол через диаметры",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"black\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M41,126 L119,34 M20,80 L140,80 L119,34\"/>\n  <text x=\"25\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"125\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"5\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"145\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"80\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $110^{\\circ}$. Найдите вписанный угол АСВ. Ответ дайте в градусах.",
            "theory_sol": "$\\angle BOC = \\angle AOD = 110^{\\circ}$ (вертикальные).<br>В равнобедренном $\\Delta BOC$: $\\angle OCB = \\frac{180^{\\circ} - 110^{\\circ}}{2} = 35^{\\circ}$.<br><br><b>Ответ:</b> 35",
            "tasks": [
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $122^{\\circ}$. Найдите вписанный угол АСВ.",
                    "answer": "29"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $114^{\\circ}$. Найдите вписанный угол АСВ.",
                    "answer": "33"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $136^{\\circ}$. Найдите вписанный угол АСВ.",
                    "answer": "22"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $108^{\\circ}$. Найдите вписанный угол АСВ.",
                    "answer": "36"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол AOD равен $148^{\\circ}$. Найдите вписанный угол АСВ.",
                    "answer": "16"
                }
            ]
        },
        {
            "desc": "Центральный угол через диаметры",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"black\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M41,126 L119,34 M20,80 L140,80 L119,34\"/>\n  <text x=\"25\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"125\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"5\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"145\" y=\"85\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"80\" y=\"100\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $30^{\\circ}$. Найдите угол AOD. Ответ дайте в градусах.",
            "theory_sol": "$\\Delta BOC$ равнобедренный, $\\angle OBC = 30^{\\circ}$ $\\Rightarrow$ $\\angle BOC = 180^{\\circ} - 60^{\\circ} = 120^{\\circ}$.<br>$\\angle AOD = \\angle BOC = 120^{\\circ}$.<br><br><b>Ответ:</b> 120",
            "tasks": [
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $44^{\\circ}$. Найдите угол AOD.",
                    "answer": "92"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $38^{\\circ}$. Найдите угол AOD.",
                    "answer": "104"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $52^{\\circ}$. Найдите угол AOD.",
                    "answer": "76"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $26^{\\circ}$. Найдите угол AOD.",
                    "answer": "128"
                },
                {
                    "text": "Отрезки АС и BD — диаметры окружности с центром О. Угол АСВ равен $21^{\\circ}$. Найдите угол AOD.",
                    "answer": "138"
                }
            ]
        },
        {
            "desc": "Касательная и секущая: найти дугу",
            "svg_code": "<svg width=\"180\" height=\"130\" viewBox=\"0 0 180 130\" overflow=\"visible\">\n  <circle cx=\"60\" cy=\"80\" r=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"80\" x2=\"60\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"40\" x2=\"150\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"80\" x2=\"150\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <text x=\"45\" y=\"35\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">A</text><text x=\"155\" y=\"45\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">C</text><text x=\"95\" y=\"80\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">B</text><text x=\"45\" y=\"100\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Угол АСО равен $40^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ окружности. Ответ дайте в градусах.",
            "theory_sol": "Радиус, проведённый в точку касания, перпендикулярен касательной, поэтому $\\angle OAC = 90^{\\circ}$.<br>В прямоугольном $\\Delta OAC$: $\\angle AOC = 90^{\\circ} - 40^{\\circ} = 50^{\\circ}$.<br>Градусная мера дуги равна величине опирающегося на неё центрального угла: дуга $AB = 50^{\\circ}$.<br><br><b>Ответ:</b> 50",
            "tasks": [
                {
                    "text": "Угол АСО равен $31^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ.",
                    "answer": "59"
                },
                {
                    "text": "Угол АСО равен $24^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ.",
                    "answer": "66"
                },
                {
                    "text": "Угол АСО равен $42^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ.",
                    "answer": "48"
                },
                {
                    "text": "Угол АСО равен $17^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ.",
                    "answer": "73"
                },
                {
                    "text": "Угол АСО равен $26^{\\circ}$, где О — центр окружности. Его сторона СА касается окружности. Сторона СО пересекает окружность в точке В. Найдите величину меньшей дуги АВ.",
                    "answer": "64"
                }
            ]
        },
        {
            "desc": "Касательная и секущая: найти угол",
            "svg_code": "<svg width=\"180\" height=\"130\" viewBox=\"0 0 180 130\" overflow=\"visible\">\n  <circle cx=\"60\" cy=\"80\" r=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"80\" x2=\"60\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"40\" x2=\"150\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"80\" x2=\"150\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <text x=\"45\" y=\"35\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">A</text><text x=\"155\" y=\"45\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">C</text><text x=\"95\" y=\"80\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">B</text><text x=\"45\" y=\"100\" font-family=\"Times New Roman\" font-size=\"18\" font-style=\"italic\">O</text>\n</svg>",
            "theory_task": "Найдите угол АСО, если его сторона СА касается окружности с центром О, отрезок СО пересекает окружность в точке В, а дуга АВ окружности равна $32^{\\circ}$. Ответ дайте в градусах.",
            "theory_sol": "Центральный угол равен дуге, на которую он опирается, поэтому $\\angle AOB = 32^{\\circ}$.<br>Так как радиус, проведённый в точку касания, перпендикулярен касательной, то $\\angle OAC = 90^{\\circ}$.<br>В прямоугольном $\\Delta OAC$ сумма острых углов равна $90^{\\circ}$, поэтому $\\angle ACO = 90^{\\circ} - 32^{\\circ} = 58^{\\circ}$.<br><br><b>Ответ:</b> 58",
            "tasks": [
                {
                    "text": "Найдите угол АСО, если СА касается окружности в точке А, а меньшая\\\\ дуга AB равна $43^{\\circ}$.",
                    "answer": "47"
                },
                {
                    "text": "Найдите угол АСО, если СА касается окружности в точке А, а меньшая\\\\ дуга AB равна $36^{\\circ}$.",
                    "answer": "54"
                },
                {
                    "text": "Найдите угол АСО, если СА касается окружности в точке А, а меньшая\\\\ дуга AB равна $51^{\\circ}$.",
                    "answer": "39"
                },
                {
                    "text": "Найдите угол АСО, если СА касается окружности в точке А, а меньшая\\\\ дуга AB равна $28^{\\circ}$.",
                    "answer": "62"
                },
                {
                    "text": "Найдите угол АСО, если СА касается окружности в точке А, а меньшая\\\\ дуга AB равна $37^{\\circ}$.",
                    "answer": "53"
                }
            ]
        },
        {
            "desc": "Периметр описанного четырёхугольника",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"48\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16,128 L144,128 L116,32 L44,32 Z\"/>\n  <text x=\"5\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"150\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"125\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"30\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "В четырёхугольник ABCD вписана окружность, $AB=15$, $CD=25$. Найдите периметр четырёхугольника ABCD.",
            "theory_sol": "По свойству описанного четырёхугольника, суммы длин его противоположных сторон равны: $AB + CD = AD + BC = 15 + 25 = 40$.<br>Периметр $P = (AB + CD) + (AD + BC) = 40 + 40 = 80$.<br><br><b>Ответ:</b> 80",
            "tasks": [
                {
                    "text": "В четырёхугольник ABCD вписана окружность, $AB=34$, $CD=20$. Найдите периметр.",
                    "answer": "108"
                },
                {
                    "text": "В четырёхугольник ABCD вписана окружность, $AB=25$, $CD=15$. Найдите периметр.",
                    "answer": "80"
                },
                {
                    "text": "В четырёхугольник ABCD вписана окружность, $AB=42$, $CD=18$. Найдите периметр.",
                    "answer": "120"
                },
                {
                    "text": "В четырёхугольник ABCD вписана окружность, $AB=30$, $CD=28$. Найдите периметр.",
                    "answer": "116"
                },
                {
                    "text": "В четырёхугольник ABCD вписана окружность, $AB=22$, $CD=14$. Найдите периметр.",
                    "answer": "72"
                }
            ]
        },
        {
            "desc": "Угол вписанного четырёхугольника через диагонали",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24,101 L50,28 L126,41 L126,119 Z M24,101 L126,41 M50,28 L126,119\"/>\n  <text x=\"5\" y=\"105\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"30\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"135\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $60^{\\circ}$, угол CAD равен $40^{\\circ}$. Найдите угол АВС. Ответ дайте в градусах.",
            "theory_sol": "Углы $DBC$ и $CAD$ опираются на одну дугу $\\Rightarrow$ $\\angle DBC = 40^{\\circ}$.<br>$\\angle ABC = \\angle ABD + \\angle DBC = 60^{\\circ} + 40^{\\circ} = 100^{\\circ}$.<br><br><b>Ответ:</b> 100",
            "tasks": [
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $75^{\\circ}$, угол CAD равен $31^{\\circ}$. Найдите угол АВС.",
                    "answer": "106"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $68^{\\circ}$, угол CAD равен $42^{\\circ}$. Найдите угол АВС.",
                    "answer": "110"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $55^{\\circ}$, угол CAD равен $38^{\\circ}$. Найдите угол АВС.",
                    "answer": "93"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $82^{\\circ}$, угол CAD равен $25^{\\circ}$. Найдите угол АВС.",
                    "answer": "107"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен $63^{\\circ}$, угол CAD равен $29^{\\circ}$. Найдите угол АВС.",
                    "answer": "92"
                }
            ]
        },
        {
            "desc": "Угол вписанного четырёхугольника: вычитание",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24,101 L50,28 L126,41 L126,119 Z M24,101 L126,41 M50,28 L126,119\"/>\n  <text x=\"5\" y=\"105\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"30\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"135\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $100^{\\circ}$, угол CAD равен $45^{\\circ}$. Найдите угол ABD. Ответ дайте в градусах.",
            "theory_sol": "Вписанные углы, опирающиеся на одну и ту же дугу, равны. Углы $DBC$ и $CAD$ опираются на дугу $CD$, значит, $\\angle DBC = \\angle CAD = 45^{\\circ}$.<br>Угол $ABC$ состоит из двух углов: $\\angle ABC = \\angle ABD + \\angle DBC$.<br>Отсюда $\\angle ABD = \\angle ABC - \\angle DBC = 100^{\\circ} - 45^{\\circ} = 55^{\\circ}$.<br><br><b>Ответ:</b> 55",
            "tasks": [
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $110^{\\circ}$, угол CAD равен $74^{\\circ}$. Найдите угол ABD.",
                    "answer": "36"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $105^{\\circ}$, угол CAD равен $62^{\\circ}$. Найдите угол ABD.",
                    "answer": "43"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $120^{\\circ}$, угол CAD равен $85^{\\circ}$. Найдите угол ABD.",
                    "answer": "35"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $98^{\\circ}$, угол CAD равен $54^{\\circ}$. Найдите угол ABD.",
                    "answer": "44"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $115^{\\circ}$, угол CAD равен $61^{\\circ}$. Найдите угол ABD.",
                    "answer": "54"
                }
            ]
        },
        {
            "desc": "Угол вписанного четырёхугольника: найти CAD",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M24,101 L50,28 L126,41 L126,119 Z M24,101 L126,41 M50,28 L126,119\"/>\n  <text x=\"5\" y=\"105\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"30\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"135\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол АВС равен $120^{\\circ}$, угол ABD равен $43^{\\circ}$. Найдите угол CAD. Ответ дайте в градусах.",
            "theory_sol": "Угол $ABC$ состоит из углов $ABD$ и $DBC$, поэтому $\\angle DBC=120^{\\circ}-43^{\\circ}=77^{\\circ}$.<br>Углы $DBC$ и $CAD$ опираются на одну дугу $CD$, значит $\\angle CAD=77^{\\circ}$.<br><br><b>Ответ:</b> 77",
            "tasks": [
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен $118^{\\circ}$, угол ABD равен $43^{\\circ}$. Найдите угол CAD.",
                    "answer": "75"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен $109^{\\circ}$, угол ABD равен $62^{\\circ}$. Найдите угол CAD.",
                    "answer": "47"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен $126^{\\circ}$, угол ABD равен $58^{\\circ}$. Найдите угол CAD.",
                    "answer": "68"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен $101^{\\circ}$, угол ABD равен $37^{\\circ}$. Найдите угол CAD.",
                    "answer": "64"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен $114^{\\circ}$, угол ABD равен $69^{\\circ}$. Найдите угол CAD.",
                    "answer": "45"
                }
            ]
        },
        {
            "desc": "Противоположный угол вписанного четырёхугольника",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28,110 L41,34 L132,50 L119,126 Z\"/>\n  <text x=\"10\" y=\"125\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"140\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $110^{\\circ}$. Найдите угол BCD. Ответ дайте в градусах.",
            "theory_sol": "Вписанный четырёхугольник обладает важным свойством: сумма его противоположных углов равна $180^{\\circ}$. Значит, $\\angle BAD + \\angle BCD = 180^{\\circ}$.<br>Отсюда $\\angle BCD = 180^{\\circ} - \\angle BAD = 180^{\\circ} - 110^{\\circ} = 70^{\\circ}$.<br><br><b>Ответ:</b> 70",
            "tasks": [
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $134^{\\circ}$. Найдите угол BCD.",
                    "answer": "46"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $102^{\\circ}$. Найдите угол BCD.",
                    "answer": "78"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $115^{\\circ}$. Найдите угол BCD.",
                    "answer": "65"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $142^{\\circ}$. Найдите угол BCD.",
                    "answer": "38"
                },
                {
                    "text": "Четырёхугольник ABCD вписан в окружность. Угол BAD равен $123^{\\circ}$. Найдите угол BCD.",
                    "answer": "57"
                }
            ]
        },
        {
            "desc": "Меньший из оставшихся углов",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28,110 L41,34 L132,50 L119,126 Z\"/>\n  <text x=\"10\" y=\"125\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"140\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Два угла вписанного в окружность четырёхугольника равны $50^{\\circ}$ и $80^{\\circ}$. Найдите меньший из оставшихся углов. Ответ дайте в градусах.",
            "theory_sol": "Сумма противоположных углов вписанного четырёхугольника равна $180^{\\circ}$. Значит, напротив угла $50^{\\circ}$ лежит угол $180^{\\circ} - 50^{\\circ} = 130^{\\circ}$, а напротив угла $80^{\\circ}$ лежит угол $180^{\\circ} - 80^{\\circ} = 100^{\\circ}$.<br>Оставшиеся углы равны $130^{\\circ}$ и $100^{\\circ}$. Меньший из них — $100^{\\circ}$.<br><br><b>Ответ:</b> 100",
            "tasks": [
                {
                    "text": "Два угла вписанного четырёхугольника равны $61^{\\circ}$ и $87^{\\circ}$. Найдите меньший из оставшихся углов.",
                    "answer": "93"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $75^{\\circ}$ и $92^{\\circ}$. Найдите меньший из оставшихся углов.",
                    "answer": "88"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $54^{\\circ}$ и $81^{\\circ}$. Найдите меньший из оставшихся углов.",
                    "answer": "99"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $68^{\\circ}$ и $95^{\\circ}$. Найдите меньший из оставшихся углов.",
                    "answer": "85"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $72^{\\circ}$ и $88^{\\circ}$. Найдите меньший из оставшихся углов.",
                    "answer": "92"
                }
            ]
        },
        {
            "desc": "Больший из оставшихся углов",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28,110 L41,34 L132,50 L119,126 Z\"/>\n  <text x=\"10\" y=\"125\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"25\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"140\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"130\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text>\n</svg>",
            "theory_task": "Два угла вписанного в окружность четырёхугольника равны $70^{\\circ}$ и $100^{\\circ}$. Найдите больший из оставшихся углов. Ответ дайте в градусах.",
            "theory_sol": "По свойству вписанного четырёхугольника сумма противоположных углов равна $180^{\\circ}$. Следовательно, напротив угла $70^{\\circ}$ находится угол $180^{\\circ} - 70^{\\circ} = 110^{\\circ}$, а напротив угла $100^{\\circ}$ находится угол $180^{\\circ} - 100^{\\circ} = 80^{\\circ}$.<br>Из двух найденных углов ($110^{\\circ}$ и $80^{\\circ}$) большим является $110^{\\circ}$.<br><br><b>Ответ:</b> 110",
            "tasks": [
                {
                    "text": "Два угла вписанного четырёхугольника равны $79^{\\circ}$ и $108^{\\circ}$. Найдите больший из оставшихся углов.",
                    "answer": "101"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $65^{\\circ}$ и $112^{\\circ}$. Найдите больший из оставшихся углов.",
                    "answer": "115"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $84^{\\circ}$ и $105^{\\circ}$. Найдите больший из оставшихся углов.",
                    "answer": "96"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $52^{\\circ}$ и $126^{\\circ}$. Найдите больший из оставшихся углов.",
                    "answer": "128"
                },
                {
                    "text": "Два угла вписанного четырёхугольника равны $64^{\\circ}$ и $102^{\\circ}$. Найдите больший из оставшихся углов.",
                    "answer": "116"
                }
            ]
        },
        {
            "desc": "Радиус описанной окружности",
            "svg_code": "<svg width=\"170\" height=\"170\" viewBox=\"0 0 170 170\" overflow=\"visible\">\n  <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M28,110 L132,110 L80,20 Z\"/>\n  <text x=\"10\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"80\" y=\"10\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text>\n</svg>",
            "theory_task": "В треугольнике АВС сторона АВ равна $14\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус описанной окружности.",
            "theory_sol": "По теореме синусов: $2R = \\frac{AB}{\\sin C} = \\frac{14\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = 28 \\Rightarrow R = 14$.<br><br><b>Ответ:</b> 14",
            "tasks": [
                {
                    "text": "В треугольнике АВС сторона АВ равна $6\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус.",
                    "answer": "6"
                },
                {
                    "text": "В треугольнике АВС сторона АВ равна $8\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус.",
                    "answer": "8"
                },
                {
                    "text": "В треугольнике АВС сторона АВ равна $10\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус.",
                    "answer": "10"
                },
                {
                    "text": "В треугольнике АВС сторона АВ равна $12\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус.",
                    "answer": "12"
                },
                {
                    "text": "В треугольнике АВС сторона АВ равна $16\\sqrt{3}$, угол С равен $120^{\\circ}$. Найдите радиус.",
                    "answer": "16"
                }
            ]
        }
    ]
};
    window.database[1] = task;
    window.database["task1"] = task;
})();