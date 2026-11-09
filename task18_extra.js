"use strict";
(function(){
window.extraDatabase=window.extraDatabase||{};
const data = {
  "title": "Дополнительно. Задание 18",
  "preserveTopicOrder": true,
  "prototypes": [
    {
        "desc": "18.Д1. Медиана из вершины прямого угла",
        "topic": "I. Длины и периметры",
        "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"160\" viewBox=\"0 0 140 160\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 3 и 4\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"140\" height=\"160\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 10.000 0 V 160.000\"/><path d=\"M 30.000 0 V 160.000\"/><path d=\"M 50.000 0 V 160.000\"/><path d=\"M 70.000 0 V 160.000\"/><path d=\"M 90.000 0 V 160.000\"/><path d=\"M 110.000 0 V 160.000\"/><path d=\"M 130.000 0 V 160.000\"/><path d=\"M 0 10.000 H 140.000\"/><path d=\"M 0 30.000 H 140.000\"/><path d=\"M 0 50.000 H 140.000\"/><path d=\"M 0 70.000 H 140.000\"/><path d=\"M 0 90.000 H 140.000\"/><path d=\"M 0 110.000 H 140.000\"/><path d=\"M 0 130.000 H 140.000\"/><path d=\"M 0 150.000 H 140.000\"/></g><path d=\"M 30.0 30.0 L 30.0 110.0 L 90.0 110.0 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 30.0 99.0 H 41.0 V 110.0\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>",
        "theory_task": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
        "theory_sol": "По клеткам определим длины катетов: 3 и 4. По теореме Пифагора гипотенуза равна \\(\\sqrt{3^2+4^2}=5\\). Медиана прямоугольного треугольника, проведённая из вершины прямого угла к гипотенузе, равна половине гипотенузы: \\(m=\\frac{5}{2}=2{,}5\\).<br><b>Ответ:</b> 2,5",
        "tasks": [
            {
                "text": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
                "answer": "5",
                "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"240\" viewBox=\"0 0 200 240\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 6 и 8\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"200\" height=\"240\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 10.000 0 V 240.000\"/><path d=\"M 30.000 0 V 240.000\"/><path d=\"M 50.000 0 V 240.000\"/><path d=\"M 70.000 0 V 240.000\"/><path d=\"M 90.000 0 V 240.000\"/><path d=\"M 110.000 0 V 240.000\"/><path d=\"M 130.000 0 V 240.000\"/><path d=\"M 150.000 0 V 240.000\"/><path d=\"M 170.000 0 V 240.000\"/><path d=\"M 190.000 0 V 240.000\"/><path d=\"M 0 10.000 H 200.000\"/><path d=\"M 0 30.000 H 200.000\"/><path d=\"M 0 50.000 H 200.000\"/><path d=\"M 0 70.000 H 200.000\"/><path d=\"M 0 90.000 H 200.000\"/><path d=\"M 0 110.000 H 200.000\"/><path d=\"M 0 130.000 H 200.000\"/><path d=\"M 0 150.000 H 200.000\"/><path d=\"M 0 170.000 H 200.000\"/><path d=\"M 0 190.000 H 200.000\"/><path d=\"M 0 210.000 H 200.000\"/><path d=\"M 0 230.000 H 200.000\"/></g><path d=\"M 30.0 30.0 L 30.0 190.0 L 150.0 190.0 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 30.0 179.0 H 41.0 V 190.0\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>"
            },
            {
                "text": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
                "answer": "6,5",
                "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140.62\" height=\"250.0\" viewBox=\"0 0 140.62 250.0\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 5 и 12\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"140.62\" height=\"250.0\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 7.820 0 V 250.000\"/><path d=\"M 23.440 0 V 250.000\"/><path d=\"M 39.060 0 V 250.000\"/><path d=\"M 54.680 0 V 250.000\"/><path d=\"M 70.300 0 V 250.000\"/><path d=\"M 85.920 0 V 250.000\"/><path d=\"M 101.540 0 V 250.000\"/><path d=\"M 117.160 0 V 250.000\"/><path d=\"M 132.780 0 V 250.000\"/><path d=\"M 0 7.820 H 140.620\"/><path d=\"M 0 23.440 H 140.620\"/><path d=\"M 0 39.060 H 140.620\"/><path d=\"M 0 54.680 H 140.620\"/><path d=\"M 0 70.300 H 140.620\"/><path d=\"M 0 85.920 H 140.620\"/><path d=\"M 0 101.540 H 140.620\"/><path d=\"M 0 117.160 H 140.620\"/><path d=\"M 0 132.780 H 140.620\"/><path d=\"M 0 148.400 H 140.620\"/><path d=\"M 0 164.020 H 140.620\"/><path d=\"M 0 179.640 H 140.620\"/><path d=\"M 0 195.260 H 140.620\"/><path d=\"M 0 210.880 H 140.620\"/><path d=\"M 0 226.500 H 140.620\"/><path d=\"M 0 242.120 H 140.620\"/></g><path d=\"M 23.44 23.44 L 23.44 210.94 L 101.56 210.94 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 23.44 200.0 H 34.38 V 210.94\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>"
            },
            {
                "text": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
                "answer": "8,5",
                "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"157.89\" height=\"250.0\" viewBox=\"0 0 157.89 250.0\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 8 и 15\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"157.89\" height=\"250.0\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 6.580 0 V 250.000\"/><path d=\"M 19.740 0 V 250.000\"/><path d=\"M 32.900 0 V 250.000\"/><path d=\"M 46.060 0 V 250.000\"/><path d=\"M 59.220 0 V 250.000\"/><path d=\"M 72.380 0 V 250.000\"/><path d=\"M 85.540 0 V 250.000\"/><path d=\"M 98.700 0 V 250.000\"/><path d=\"M 111.860 0 V 250.000\"/><path d=\"M 125.020 0 V 250.000\"/><path d=\"M 138.180 0 V 250.000\"/><path d=\"M 151.340 0 V 250.000\"/><path d=\"M 0 6.580 H 157.890\"/><path d=\"M 0 19.740 H 157.890\"/><path d=\"M 0 32.900 H 157.890\"/><path d=\"M 0 46.060 H 157.890\"/><path d=\"M 0 59.220 H 157.890\"/><path d=\"M 0 72.380 H 157.890\"/><path d=\"M 0 85.540 H 157.890\"/><path d=\"M 0 98.700 H 157.890\"/><path d=\"M 0 111.860 H 157.890\"/><path d=\"M 0 125.020 H 157.890\"/><path d=\"M 0 138.180 H 157.890\"/><path d=\"M 0 151.340 H 157.890\"/><path d=\"M 0 164.500 H 157.890\"/><path d=\"M 0 177.660 H 157.890\"/><path d=\"M 0 190.820 H 157.890\"/><path d=\"M 0 203.980 H 157.890\"/><path d=\"M 0 217.140 H 157.890\"/><path d=\"M 0 230.300 H 157.890\"/><path d=\"M 0 243.460 H 157.890\"/></g><path d=\"M 19.74 19.74 L 19.74 217.11 L 125.0 217.11 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 19.74 207.9 H 28.95 V 217.11\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>"
            },
            {
                "text": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
                "answer": "7,5",
                "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"203.12\" height=\"250.0\" viewBox=\"0 0 203.12 250.0\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 9 и 12\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"203.12\" height=\"250.0\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 7.820 0 V 250.000\"/><path d=\"M 23.440 0 V 250.000\"/><path d=\"M 39.060 0 V 250.000\"/><path d=\"M 54.680 0 V 250.000\"/><path d=\"M 70.300 0 V 250.000\"/><path d=\"M 85.920 0 V 250.000\"/><path d=\"M 101.540 0 V 250.000\"/><path d=\"M 117.160 0 V 250.000\"/><path d=\"M 132.780 0 V 250.000\"/><path d=\"M 148.400 0 V 250.000\"/><path d=\"M 164.020 0 V 250.000\"/><path d=\"M 179.640 0 V 250.000\"/><path d=\"M 195.260 0 V 250.000\"/><path d=\"M 0 7.820 H 203.120\"/><path d=\"M 0 23.440 H 203.120\"/><path d=\"M 0 39.060 H 203.120\"/><path d=\"M 0 54.680 H 203.120\"/><path d=\"M 0 70.300 H 203.120\"/><path d=\"M 0 85.920 H 203.120\"/><path d=\"M 0 101.540 H 203.120\"/><path d=\"M 0 117.160 H 203.120\"/><path d=\"M 0 132.780 H 203.120\"/><path d=\"M 0 148.400 H 203.120\"/><path d=\"M 0 164.020 H 203.120\"/><path d=\"M 0 179.640 H 203.120\"/><path d=\"M 0 195.260 H 203.120\"/><path d=\"M 0 210.880 H 203.120\"/><path d=\"M 0 226.500 H 203.120\"/><path d=\"M 0 242.120 H 203.120\"/></g><path d=\"M 23.44 23.44 L 23.44 210.94 L 164.06 210.94 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 23.44 200.0 H 34.38 V 210.94\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>"
            },
            {
                "text": "На клетчатой бумаге с размером клетки 1×1 изображён прямоугольный треугольник. Найдите длину медианы треугольника, проведённой из вершины прямого угла.",
                "answer": "10",
                "svg_code": "<div style=\"width:100%;max-width:270px;margin:4px auto 8px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200.0\" height=\"250.0\" viewBox=\"0 0 200.0 250.0\" role=\"img\" aria-label=\"Прямоугольный треугольник на квадратной сетке с катетами 12 и 16\" style=\"display:block;width:100%;height:auto;overflow:visible\"><rect width=\"200.0\" height=\"250.0\" fill=\"#fff\"/><g fill=\"none\" stroke=\"#8F979F\" stroke-width=\"0.72\"><path d=\"M 6.250 0 V 250.000\"/><path d=\"M 18.750 0 V 250.000\"/><path d=\"M 31.250 0 V 250.000\"/><path d=\"M 43.750 0 V 250.000\"/><path d=\"M 56.250 0 V 250.000\"/><path d=\"M 68.750 0 V 250.000\"/><path d=\"M 81.250 0 V 250.000\"/><path d=\"M 93.750 0 V 250.000\"/><path d=\"M 106.250 0 V 250.000\"/><path d=\"M 118.750 0 V 250.000\"/><path d=\"M 131.250 0 V 250.000\"/><path d=\"M 143.750 0 V 250.000\"/><path d=\"M 156.250 0 V 250.000\"/><path d=\"M 168.750 0 V 250.000\"/><path d=\"M 181.250 0 V 250.000\"/><path d=\"M 193.750 0 V 250.000\"/><path d=\"M 0 6.250 H 200.000\"/><path d=\"M 0 18.750 H 200.000\"/><path d=\"M 0 31.250 H 200.000\"/><path d=\"M 0 43.750 H 200.000\"/><path d=\"M 0 56.250 H 200.000\"/><path d=\"M 0 68.750 H 200.000\"/><path d=\"M 0 81.250 H 200.000\"/><path d=\"M 0 93.750 H 200.000\"/><path d=\"M 0 106.250 H 200.000\"/><path d=\"M 0 118.750 H 200.000\"/><path d=\"M 0 131.250 H 200.000\"/><path d=\"M 0 143.750 H 200.000\"/><path d=\"M 0 156.250 H 200.000\"/><path d=\"M 0 168.750 H 200.000\"/><path d=\"M 0 181.250 H 200.000\"/><path d=\"M 0 193.750 H 200.000\"/><path d=\"M 0 206.250 H 200.000\"/><path d=\"M 0 218.750 H 200.000\"/><path d=\"M 0 231.250 H 200.000\"/><path d=\"M 0 243.750 H 200.000\"/></g><path d=\"M 18.75 18.75 L 18.75 218.75 L 168.75 218.75 Z\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M 18.75 210.0 H 27.5 V 218.75\" fill=\"none\" stroke=\"#C66A10\" stroke-width=\"1.65\"/></svg></div>"
            }
        ],
        "source": "РЕШУ ОГЭ, вариант 83496164, задание № 6, тип 18 № 311958 (математический тип, числа изменены)"
    },
    {
      "desc": "18.Д2. Периметр ступенчатого многоугольника",
      "topic": "I. Длины и периметры",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/84f176437c707389eb224b65.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
      "theory_sol": "Посчитаем длины всех сторон по клеткам. Сумма длин горизонтальных сторон равна 12, вертикальных — также 12. Поэтому \\(P=12+12=24\\).<br><b>Ответ:</b> 24",
      "tasks": [
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
          "answer": "24",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/84f176437c707389eb224b65.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
          "answer": "24",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/0791deb63925b87837934e51.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
          "answer": "24",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/51be9408bfa9ad4c79e16425.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
          "answer": "20",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/2fad2886a2b9d04ddca0d171.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена ступенчатая фигура. Найдите её периметр.",
          "answer": "32",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/81b018bc21ac3cbc300d44ce.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, составные ортогональные фигуры"
    },
    {
      "desc": "18.Д3. Площадь фигуры в форме ступенчатого многоугольника",
      "topic": "II. Площади составных фигур",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/ff60b67a479f22f2eda9614e.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
      "theory_sol": "Разобьём фигуру на горизонтальные полосы высотой в одну клетку. Их площади равны 2, 5, 4, 4 и 1. Тогда \\(S=2+5+4+4+1=16\\).<br><b>Ответ:</b> 16",
      "tasks": [
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
          "answer": "16",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/ff60b67a479f22f2eda9614e.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
          "answer": "11",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/2e543c56ff3e9420fc661dd8.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
          "answer": "9",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/138f8b8526f7f82fd99f4c31.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
          "answer": "11",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/d640f72c8cbf01f4d32c8e1f.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображена фигура. Найдите её площадь.",
          "answer": "14",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/c5056a16a37c9ba583b04fab.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, площадь ортогональных фигур"
    },
    {
      "desc": "18.Д4. Площадь наклонного четырёхугольника",
      "topic": "II. Площади составных фигур",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/e7e0357cd5e63c85b64f0b13.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
      "theory_sol": "Дополним фигуру до прямоугольника размером \\(6\\times6\\). Вне фигуры находятся два прямоугольных треугольника площадями \\(1\\) и \\(12\\). Поэтому \\(S=36-1-12=23\\).<br><b>Ответ:</b> 23",
      "tasks": [
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
          "answer": "23",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/e7e0357cd5e63c85b64f0b13.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
          "answer": "28",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/d20611ba6132b14668096399.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
          "answer": "18,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/f6161985360789da31a7e48f.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
          "answer": "17",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/26e41c0e13ab318c75ef74d9.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге с размером клетки 1×1 изображён четырёхугольник. Найдите его площадь.",
          "answer": "12",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:230px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/debe0a5b7eff8151c083d3d5.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, площади произвольных фигур"
    },
    {
      "desc": "18.Д5. Тангенс острого угла при вершине треугольника",
      "topic": "III. Углы и тангенсы",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/8e19659481587c62d41a5a53.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "Найдите тангенс угла A треугольника ABC, изображённого на рисунке.",
      "theory_sol": "Треугольник \\(ABC\\) прямоугольный при \\(C\\). По рисунку \\(BC=3\\), \\(AC=2\\). Поэтому \\(\\tan A=\\dfrac{BC}{AC}=\\dfrac32=1{,}5\\).<br><b>Ответ:</b> 1,5",
      "tasks": [
        {
          "text": "Найдите тангенс угла A треугольника ABC, изображённого на рисунке.",
          "answer": "1,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/8e19659481587c62d41a5a53.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла A треугольника ABC, изображённого на рисунке.",
          "answer": "0,6",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/2b67bdbb1faa1c95834e9c58.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла B треугольника ABC, изображённого на рисунке.",
          "answer": "1,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/409b242fab02e97b079ee0e6.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла B треугольника ABC, изображённого на рисунке.",
          "answer": "2,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/7573cb5237b780773cd32902.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла C треугольника ABC, изображённого на рисунке.",
          "answer": "0,75",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:190px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/21751a07c5171e92b1dbae87.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, задания 7–9"
    },
    {
      "desc": "18.Д6. Тангенс угла между двумя наклонными лучами",
      "topic": "III. Углы и тангенсы",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/f69956d4d86af17e340a190d.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "Найдите тангенс угла AOB, изображённого на рисунке.",
      "theory_sol": "По клеткам найдём тангенсы углов наклона лучей к горизонтали: для \\(OA\\) это \\(\\dfrac{5}{10}=0{,}5\\), для \\(OB\\) — \\(\\dfrac93=3\\). По формуле тангенса разности углов получаем \\(\\tan\\angle AOB=\\dfrac{3-0{,}5}{1+3\\cdot0{,}5}=1\\).<br><b>Ответ:</b> 1",
      "tasks": [
        {
          "text": "Найдите тангенс угла AOB, изображённого на рисунке.",
          "answer": "1",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/f69956d4d86af17e340a190d.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла AOB, изображённого на рисунке.",
          "answer": "2",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/7cd8322070fc5d33fdad5612.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла AOB, изображённого на рисунке.",
          "answer": "0,6",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/126096096a350bb892291ad6.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла AOB, изображённого на рисунке.",
          "answer": "1,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/e0fa526d558b2c572f3fcbb4.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "Найдите тангенс угла AOB, изображённого на рисунке.",
          "answer": "1",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:210px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/483dfa889286d7bdd79d4095.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, задание 11"
    },
    {
      "desc": "18.Д7. Вписанные углы на окружности",
      "topic": "III. Углы и тангенсы",
      "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/034facef5c4fc19cd02c5d3d.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>",
      "theory_task": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
      "theory_sol": "Вписанный угол \\(ABC\\) опирается на дугу \\(AC\\), не содержащую \\(B\\). Дуга \\(AC\\) соответствует четверти окружности, то есть \\(90^\\circ\\). Поэтому \\(\\angle ABC=\\dfrac{90^\\circ}{2}=45^\\circ\\).<br><b>Ответ:</b> 45",
      "tasks": [
        {
          "text": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "45",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/034facef5c4fc19cd02c5d3d.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "22,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/55762542347dd905fe5cf47d.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "90",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/e3303deffc8e2eaca9670799.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "45",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/a4cf2421ff878cb196433d3a.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        },
        {
          "text": "На клетчатой бумаге изображена окружность и вписанный треугольник ABC. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "112,5",
          "svg_code": "<div class=\"t18-source-figure\" style=\"width:100%;max-width:220px;margin:4px auto 8px;line-height:0;padding:6px 8px;box-sizing:border-box;background:#fff;border:0\"><img alt=\"Чертёж из тетради на клетчатой бумаге\" loading=\"lazy\" src=\"assets/bank/9e1d8ff83e1889204644b0bc.png\" style=\"display:block;width:100%;height:auto;margin:0 auto;image-rendering:auto\"/></div>"
        }
      ],
      "source": "Ширяева ОГЭ 2026, задание 18 блок 2, задание 6"
    }
  ]
};
window.extraDatabase[18]=data;
})();
