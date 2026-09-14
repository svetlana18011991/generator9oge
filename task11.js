(function() {
    const task11Data = {
    "title": "Задание 11. Графики функций",
    "prototypes": [
        {
            "desc": "Линейная функция: значение по графику",
            "svg_code": "<img src='" + window.task11Images["t1.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(-5)$.",
            "theory_sol": "По графику возьмём две удобные точки прямой:<br>\\[<br>A(-1;-3), &nbsp;&nbsp;&nbsp;&nbsp; B(3;4).<br>\\]<br><br>\t\t\t<b>1 способ. Через тангенс угла наклона.</b><br><br>\t\t\tЧерез точки $A$ и $B$ достроим прямоугольный треугольник: горизонтальный катет равен $4$, вертикальный катет равен $7$. Угол при горизонтальном катете равен углу между прямой и положительным направлением оси абсцисс. Поэтому<br>\\[<br>k=\\tg\\alpha=\\frac{\\Delta y}{\\Delta x}=\\frac{7}{4}.<br>\\]<br><br>\t\t\t<b>2 способ. Через уравнение прямой.</b><br><br>\t\t\tПрямая имеет вид $y=kx+b$. Подставим координаты точек $A(-1;-3)$ и $B(3;4)$:<br>\\[<br>\\begin{cases}<br>-3=-k+b,\\\\<br>4=3k+b.<br>\\end{cases}<br>\\]<br>Вычтем из второго уравнения первое:<br>\\[<br>4-(-3)=(3k+b)-(-k+b), &nbsp;&nbsp;&nbsp;&nbsp; 7=4k, &nbsp;&nbsp;&nbsp;&nbsp; k=\\frac{7}{4}.<br>\\]<br>Найдём $b$:<br>\\[<br>-3=-\\frac{7}{4}+b, &nbsp;&nbsp;&nbsp;&nbsp; b=-\\frac{5}{4}.<br>\\]<br>Тогда<br>\\[<br>f(x)=\\frac{7}{4}x-\\frac{5}{4}.<br>\\]<br>Найдём значение функции:<br>\\[<br>f(-5)=\\frac{7}{4}\\cdot(-5)-\\frac{5}{4}<br>=-\\frac{35}{4}-\\frac{5}{4}=-10.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $-10$",
            "tasks": [
                {
                    "text": "На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(-9)$.",
                    "svg_code": "<img src='" + window.task11Images["t2.png"] + "' style='max-width: 100%;'>",
                    "answer": "-10,5"
                },
                {
                    "text": "На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(12)$.",
                    "svg_code": "<img src='" + window.task11Images["t3.png"] + "' style='max-width: 100%;'>",
                    "answer": "4"
                },
                {
                    "text": "На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(-16)$.",
                    "svg_code": "<img src='" + window.task11Images["t4.png"] + "' style='max-width: 100%;'>",
                    "answer": "14,5"
                }
            ]
        },
        {
            "desc": "Две прямые: абсцисса точки пересечения",
            "svg_code": "<img src='" + window.task11Images["t5.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображены графики двух функций. Найдите абсциссу точки пересечения графиков.",
            "theory_sol": "<b>Первая прямая: 1 способ, через тангенс.</b><br><br>\t\t\tВозьмём точки $A(0;1)$ и $B(1;0)$. Через них достроим прямоугольный треугольник: вправо $1$, вниз $1$. Поэтому<br>\\[<br>k_1=\\tg\\alpha_1=\\frac{\\Delta y}{\\Delta x}=\\frac{-1}{1}=-1.<br>\\]<br>Так как точка $A(0;1)$ лежит на прямой, то $b_1=1$. Значит,<br>\\[<br>y=-x+1.<br>\\]<br><br>\t\t\t<b>Вторая прямая: 2 способ, через точки и систему.</b><br><br>\t\t\tВозьмём точки $C(-2;4)$ и $D(-1;-1)$. Пусть уравнение второй прямой имеет вид $y=k_2x+b_2$. Тогда<br>\\[<br>\\begin{cases}<br>4=-2k_2+b_2,\\\\<br>-1=-k_2+b_2.<br>\\end{cases}<br>\\]<br>Вычтем из второго уравнения первое:<br>\\[<br>-1-4=(-k_2+b_2)-(-2k_2+b_2), &nbsp;&nbsp;&nbsp;&nbsp; -5=k_2.<br>\\]<br>Найдём $b_2$:<br>\\[<br>-1=-5\\cdot(-1)+b_2, &nbsp;&nbsp;&nbsp;&nbsp; b_2=-6.<br>\\]<br>Значит,<br>\\[<br>y=-5x-6.<br>\\]<br><br>\t\t\tПриравняем правые части:<br>\\[<br>-x+1=-5x-6, &nbsp;&nbsp;&nbsp;&nbsp; 4x=-7, &nbsp;&nbsp;&nbsp;&nbsp; x=-1{,}75.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $-1{,}75$",
            "tasks": [
                {
                    "text": "На рисунке изображены графики двух функций. Найдите абсциссу точки пересечения графиков.",
                    "svg_code": "<img src='" + window.task11Images["t6.png"] + "' style='max-width: 100%;'>",
                    "answer": "0,5"
                },
                {
                    "text": "На рисунке изображены графики двух функций. Найдите абсциссу точки пересечения графиков.",
                    "svg_code": "<img src='" + window.task11Images["t7.png"] + "' style='max-width: 100%;'>",
                    "answer": "1,2"
                },
                {
                    "text": "На рисунке изображены графики двух функций. Найдите абсциссу точки пересечения графиков.",
                    "svg_code": "<img src='" + window.task11Images["t8.png"] + "' style='max-width: 100%;'>",
                    "answer": "-1,2"
                },
                {
                    "text": "На рисунке изображены графики двух функций. Найдите абсциссу точки пересечения графиков.",
                    "svg_code": "<img src='" + window.task11Images["t9.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,8"
                }
            ]
        },
        {
            "desc": "Квадратичная функция: значение по графику",
            "svg_code": "<img src='" + window.task11Images["t10.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображён график функции $f(x)=2x^2+bx+c$. Найдите $f(-5)$.",
            "theory_sol": "Функция имеет вид<br>\\[<br>f(x)=2x^2+bx+c.<br>\\]<br><br>\t\t\tПо графику возьмём две отмеченные точки параболы:<br>\\[<br>A(-2;-2), &nbsp;&nbsp;&nbsp;&nbsp; B(1;1).<br>\\]<br><br>\t\t\tПодставим координаты точки $A(-2;-2)$:<br>\\[<br>-2=2\\cdot(-2)^2+b\\cdot(-2)+c,<br>&nbsp;&nbsp;&nbsp;&nbsp; -2=8-2b+c.<br>\\]<br><br>\t\t\tПодставим координаты точки $B(1;1)$:<br>\\[<br>1=2\\cdot1^2+b\\cdot1+c,<br>&nbsp;&nbsp;&nbsp;&nbsp; 1=2+b+c.<br>\\]<br><br>\t\t\tПолучили систему:<br>\\[<br>\\begin{cases}<br>-2=8-2b+c,\\\\<br>1=2+b+c.<br>\\end{cases}<br>&nbsp;&nbsp; \\Rightarrow &nbsp;&nbsp;<br>\\begin{cases}<br>-2b+c=-10,\\\\<br>b+c=-1.<br>\\end{cases}<br>\\]<br><br>\t\t\tВычтем из первого уравнения второе:<br>\\[<br>(-2b+c)-(b+c)=-10-(-1),<br>&nbsp;&nbsp;&nbsp;&nbsp; -3b=-9,<br>&nbsp;&nbsp;&nbsp;&nbsp; b=3.<br>\\]<br><br>\t\t\tНайдём $c$:<br>\\[<br>b+c=-1, &nbsp;&nbsp;&nbsp;&nbsp; 3+c=-1, &nbsp;&nbsp;&nbsp;&nbsp; c=-4.<br>\\]<br><br>\t\t\tЗначит,<br>\\[<br>f(x)=2x^2+3x-4.<br>\\]<br><br>\t\t\tНайдём $f(-5)$:<br>\\[<br>f(-5)=2\\cdot(-5)^2+3\\cdot(-5)-4<br>=50-15-4=31.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $31$",
            "tasks": [
                {
                    "text": "На рисунке изображён график функции $f(x)=ax^2-4x+c$. Найдите $f(-3)$.",
                    "svg_code": "<img src='" + window.task11Images["t11.png"] + "' style='max-width: 100%;'>",
                    "answer": "26"
                },
                {
                    "text": "На рисунке изображён график функции $f(x)=ax^2+bx-6$. Найдите $f(-6)$.",
                    "svg_code": "<img src='" + window.task11Images["t12.png"] + "' style='max-width: 100%;'>",
                    "answer": "48"
                },
                {
                    "text": "На рисунке изображён график функции $f(x)=ax^2+bx+c$. Найдите $f(-9)$.",
                    "svg_code": "<img src='" + window.task11Images["t13.png"] + "' style='max-width: 100%;'>",
                    "answer": "31"
                },
                {
                    "text": "На рисунке изображён график функции $f(x)=ax^2+bx+c$, где числа $a$, $b$ и $c$ — целые. Найдите $f(1)$.",
                    "svg_code": "<img src='" + window.task11Images["t14.png"] + "' style='max-width: 100%;'>",
                    "answer": "11"
                }
            ]
        },
        {
            "desc": "Парабола и прямая: точка пересечения",
            "svg_code": "<img src='" + window.task11Images["t15.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображены графики функций видов $f(x)=ax^2+bx+c$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
            "theory_sol": "Точка $A$ находится в начале координат, значит обе функции проходят через точку $(0;0)$.<br><br>\t\t\tТак как $g(x)=kx$, найдём $k$ по отмеченной точке прямой. По графику прямая проходит через точку $(1;3)$, поэтому<br>\\[<br>k=\\frac{3}{1}=3, &nbsp;&nbsp;&nbsp;&nbsp; g(x)=3x.<br>\\]<br><br>\t\t\tПарабола проходит через начало координат, значит $c=0$. Также по графику видно, что второй нуль параболы равен $4$, поэтому<br>\\[<br>f(x)=a x(x-4).<br>\\]<br><br>\t\t\tНа параболе отмечена точка $(5;5)$. Подставим её координаты:<br>\\[<br>5=a\\cdot5\\cdot(5-4), &nbsp;&nbsp;&nbsp;&nbsp; a=1.<br>\\]<br>Значит,<br>\\[<br>f(x)=x^2-4x.<br>\\]<br><br>\t\t\tТочки пересечения найдём из уравнения:<br>\\[<br>x^2-4x=3x, &nbsp;&nbsp;&nbsp;&nbsp; x^2-7x=0, &nbsp;&nbsp;&nbsp;&nbsp; x(x-7)=0.<br>\\]<br>Получили $x=0$ или $x=7$. Точка $A$ имеет абсциссу $0$, значит точка $B$ имеет абсциссу $7$.<br><br>\t\t\t<b>Ответ:</b> $7$",
            "tasks": [
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=ax^2+bx+c$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t16.png"] + "' style='max-width: 100%;'>",
                    "answer": "4"
                },
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=ax^2+bx+c$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t17.png"] + "' style='max-width: 100%;'>",
                    "answer": "5"
                },
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=ax^2+bx+c$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t18.png"] + "' style='max-width: 100%;'>",
                    "answer": "6"
                }
            ]
        },
        {
            "desc": "Обратная пропорциональность: значение функции",
            "svg_code": "<img src='" + window.task11Images["t19.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображён график функции вида $f(x)=\\dfrac{k}{x}$. Найдите значение $f(10)$.",
            "theory_sol": "Функция имеет вид<br>\\[<br>f(x)=\\frac{k}{x}.<br>\\]<br><br>\t\t\tПо графику возьмём отмеченную точку $(2;1)$. Подставим её координаты:<br>\\[<br>1=\\frac{k}{2}, &nbsp;&nbsp;&nbsp;&nbsp; k=2.<br>\\]<br>Значит,<br>\\[<br>f(x)=\\frac{2}{x}.<br>\\]<br><br>\t\t\tНайдём значение функции:<br>\\[<br>f(10)=\\frac{2}{10}=0{,}2.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $0{,}2$",
            "tasks": [
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\dfrac{k}{x}$. Найдите значение $f(30)$.",
                    "svg_code": "<img src='" + window.task11Images["t20.png"] + "' style='max-width: 100%;'>",
                    "answer": "0,1"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\dfrac{k}{x}$. Найдите значение $f(10)$.",
                    "svg_code": "<img src='" + window.task11Images["t21.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,1"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\dfrac{k}{x}$. Найдите значение $f(10)$.",
                    "svg_code": "<img src='" + window.task11Images["t22.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,2"
                }
            ]
        },
        {
            "desc": "Гипербола и прямая: точка пересечения",
            "svg_code": "<img src='" + window.task11Images["t23.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображены графики функций $f(x)=\\dfrac{k}{x}$ и $g(x)=ax+b$, которые пересекаются в точках $A$ и $B$. Найдите абсциссу точки $B$.",
            "theory_sol": "По графику точка $A$ имеет координаты $A(2;1)$.<br><br>\t\t\tТак как $A$ лежит на графике $f(x)=\\dfrac{k}{x}$:<br>\\[<br>1=\\frac{k}{2}, &nbsp;&nbsp;&nbsp;&nbsp; k=2.<br>\\]<br>Значит,<br>\\[<br>f(x)=\\frac{2}{x}.<br>\\]<br><br>\t\t\tНайдём уравнение прямой $g(x)=ax+b$ через систему. По графику прямая проходит через точки $(1;-4)$ и $(2;1)$:<br>\\[<br>\\begin{cases}<br>-4=a+b,\\\\<br>1=2a+b.<br>\\end{cases}<br>\\]<br>Вычтем из второго уравнения первое:<br>\\[<br>1-(-4)=(2a+b)-(a+b), &nbsp;&nbsp;&nbsp;&nbsp; 5=a.<br>\\]<br>Найдём $b$:<br>\\[<br>-4=5+b, &nbsp;&nbsp;&nbsp;&nbsp; b=-9.<br>\\]<br>Значит,<br>\\[<br>g(x)=5x-9.<br>\\]<br><br>\t\t\tВ точках пересечения:<br>\\[<br>\\frac{2}{x}=5x-9.<br>\\]<br>Умножим на $x$:<br>\\[<br>2=5x^2-9x, &nbsp;&nbsp;&nbsp;&nbsp; 5x^2-9x-2=0.<br>\\]<br>Разложим:<br>\\[<br>5x^2-10x+x-2=0,<br>\\]<br>\\[<br>5x(x-2)+(x-2)=0,<br>\\]<br>\\[<br>(x-2)(5x+1)=0.<br>\\]<br>Тогда<br>\\[<br>x=2 &nbsp;&nbsp; \\text{или} &nbsp;&nbsp; x=-0{,}2.<br>\\]<br>Абсцисса точки $A$ равна $2$, значит абсцисса точки $B$ равна $-0{,}2$.<br><br>\t\t\t<b>Ответ:</b> $-0{,}2$",
            "tasks": [
                {
                    "text": "На рисунке изображены графики функций $f(x)=\\dfrac{k}{x}$ и $g(x)=ax+b$, которые пересекаются в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t24.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,25"
                },
                {
                    "text": "На рисунке изображены графики функций $f(x)=\\dfrac{k}{x}$ и $g(x)=ax+b$, которые пересекаются в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t25.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,25"
                },
                {
                    "text": "На рисунке изображены графики функций $f(x)=\\dfrac{k}{x}$ и $g(x)=ax+b$, которые пересекаются в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t26.png"] + "' style='max-width: 100%;'>",
                    "answer": "-0,25"
                }
            ]
        },
        {
            "desc": "Корень и прямая: точка пересечения",
            "svg_code": "<img src='" + window.task11Images["t27.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображены графики функций видов $f(x)=a\\sqrt{x}$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
            "theory_sol": "Графики пересекаются в точке $A(0;0)$. Нужно найти абсциссу второй точки пересечения $B$.<br><br>\t\t\tПо графику точка $(1;2)$ лежит на графике $f(x)=a\\sqrt{x}$:<br>\\[<br>2=a\\sqrt{1}, &nbsp;&nbsp;&nbsp;&nbsp; a=2.<br>\\]<br>Значит,<br>\\[<br>f(x)=2\\sqrt{x}.<br>\\]<br><br>\t\t\tПо графику точка $(2;1)$ лежит на прямой $g(x)=kx$:<br>\\[<br>1=2k, &nbsp;&nbsp;&nbsp;&nbsp; k=0{,}5.<br>\\]<br>Значит,<br>\\[<br>g(x)=0{,}5x.<br>\\]<br><br>\t\t\tВ точках пересечения:<br>\\[<br>2\\sqrt{x}=0{,}5x.<br>\\]<br>Пусть $t=\\sqrt{x}$, тогда $x=t^2$:<br>\\[<br>2t=0{,}5t^2,<br>\\]<br>\\[<br>0{,}5t^2-2t=0,<br>\\]<br>\\[<br>t(0{,}5t-2)=0.<br>\\]<br>Получили $t=0$ или $t=4$. Если $t=0$, то $x=0$ — это точка $A$. Если $t=4$, то<br>\\[<br>x=t^2=16.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $16$",
            "tasks": [
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=a\\sqrt{x}$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t28.png"] + "' style='max-width: 100%;'>",
                    "answer": "36"
                },
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=a\\sqrt{x}$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t29.png"] + "' style='max-width: 100%;'>",
                    "answer": "100"
                },
                {
                    "text": "На рисунке изображены графики функций видов $f(x)=a\\sqrt{x}$ и $g(x)=kx$, пересекающихся в точках $A$ и $B$. Найдите абсциссу точки $B$.",
                    "svg_code": "<img src='" + window.task11Images["t30.png"] + "' style='max-width: 100%;'>",
                    "answer": "25"
                }
            ]
        },
        {
            "desc": "Показательная функция: значение функции",
            "svg_code": "<img src='" + window.task11Images["t31.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображён график функции вида $f(x)=a^x$. Найдите значение $f(-3)$.",
            "theory_sol": "Функция имеет вид<br>\\[<br>f(x)=a^x.<br>\\]<br><br>\t\t\tПо графику возьмём отмеченную узловую точку $(-1;4)$. Подставим её координаты в уравнение функции:<br>\\[<br>4=a^{-1}, &nbsp;&nbsp;&nbsp;&nbsp; \\frac{1}{a}=4, &nbsp;&nbsp;&nbsp;&nbsp; a=\\frac{1}{4}=0{,}25.<br>\\]<br>Значит, уравнение функции имеет вид<br>\\[<br>f(x)=\\left(\\frac{1}{4}\\right)^x=4^{-x}.<br>\\]<br><br>\t\t\tНайдём значение функции при $x=-3$:<br>\\[<br>f(-3)=4^{-(-3)}=4^3=64.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $64$",
            "tasks": [
                {
                    "text": "На рисунке изображён график функции вида $f(x)=a^x$. Найдите значение $f(5)$.",
                    "svg_code": "<img src='" + window.task11Images["t32.png"] + "' style='max-width: 100%;'>",
                    "answer": "32"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=a^x$. Найдите значение $f(2)$.",
                    "svg_code": "<img src='" + window.task11Images["t33.png"] + "' style='max-width: 100%;'>",
                    "answer": "25"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=a^x$. Найдите значение $f(-3)$.",
                    "svg_code": "<img src='" + window.task11Images["t34.png"] + "' style='max-width: 100%;'>",
                    "answer": "27"
                }
            ]
        },
        {
            "desc": "Логарифмическая функция: значение функции",
            "svg_code": "<img src='" + window.task11Images["t35.png"] + "' style='max-width: 100%;'>",
            "theory_task": "На рисунке изображён график функции вида $f(x)=\\log_a x$. Найдите значение $f(8)$.",
            "theory_sol": "Функция имеет вид<br>\\[<br>f(x)=\\log_a x.<br>\\]<br><br>\t\t\tПо графику возьмём отмеченную узловую точку $(2;-1)$. Подставим её координаты в уравнение функции:<br>\\[<br>-1=\\log_a 2, &nbsp;&nbsp;&nbsp;&nbsp; a^{-1}=2, &nbsp;&nbsp;&nbsp;&nbsp; a=\\frac{1}{2}=0{,}5.<br>\\]<br>Значит, уравнение функции имеет вид<br>\\[<br>f(x)=\\log_{0{,}5} x.<br>\\]<br><br>\t\t\tНайдём значение функции при $x=8$:<br>\\[<br>f(8)=\\log_{0{,}5} 8=\\log_{2^{-1}} 2^3=-3\\log_2 2=-3.<br>\\]<br><br>\t\t\t<b>Ответ:</b> $-3$",
            "tasks": [
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\log_a x$. Найдите значение $f(8)$.",
                    "svg_code": "<img src='" + window.task11Images["t36.png"] + "' style='max-width: 100%;'>",
                    "answer": "3"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\log_a x$. Найдите значение $f(25)$.",
                    "svg_code": "<img src='" + window.task11Images["t37.png"] + "' style='max-width: 100%;'>",
                    "answer": "-2"
                },
                {
                    "text": "На рисунке изображён график функции вида $f(x)=\\log_a x$. Найдите значение $f(16)$.",
                    "svg_code": "<img src='" + window.task11Images["t38.png"] + "' style='max-width: 100%;'>",
                    "answer": "4"
                }
            ]
        }
    ]
};
    window.database[11] = task11Data;
    window.database["task11"] = task11Data;
})();
