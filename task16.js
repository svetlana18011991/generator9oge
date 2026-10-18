"use strict";
(function(){
  window.database = window.database || {};
  const task16Data = {
  "title": "Задание 16. Окружность, круг и их элементы",
  "prototypes": [
    {
      "desc": "16.1. Центральный и вписанный угол при двух диаметрах",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105.21\" y1=\"47.21\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"209.82\" y1=\"55.44\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"153\" y=\"91\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"92\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"99\" y=\"32\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"213\" y=\"40\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"226\" y=\"158\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "В окружности с центром в точке O отрезки AC и BD — диаметры. Угол AOD равен 44°. Найдите угол ACB. Ответ дайте в градусах.",
      "theory_sol": "Лучи OB и OD противоположны, поэтому \\(\\angle AOB=180^\\circ-44^\\circ=136^\\circ\\). Вписанный угол, опирающийся на дугу AB, вдвое меньше центрального: \\(\\angle ACB=136^\\circ:2=68^\\circ\\).<br><br><b>Ответ:</b> 68",
      "tasks": [
        {
          "text": "В окружности с центром O отрезки AC и BD — диаметры. Угол AOD равен 146°. Найдите угол ACB. Ответ дайте в градусах.",
          "answer": "17"
        },
        {
          "text": "В окружности с центром O отрезки AC и BD — диаметры. Угол AOD равен 108°. Найдите угол ACB. Ответ дайте в градусах.",
          "answer": "36"
        },
        {
          "text": "В окружности с центром O отрезки AC и BD — диаметры. Угол AOD равен 42°. Найдите угол ACB. Ответ дайте в градусах.",
          "answer": "69"
        },
        {
          "text": "В окружности с центром O отрезки AC и BD — диаметры. Угол AOD равен 50°. Найдите угол ACB. Ответ дайте в градусах.",
          "answer": "65"
        },
        {
          "text": "В окружности с центром O отрезки AC и BD — диаметры. Угол AOD равен 72°. Найдите угол ACB. Ответ дайте в градусах.",
          "answer": "54"
        }
      ]
    },
    {
      "desc": "16.2. Центральный угол по вписанному при двух диаметрах",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105.21\" y1=\"47.21\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"209.82\" y1=\"55.44\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"153\" y=\"91\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"92\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"99\" y=\"32\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"213\" y=\"40\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"226\" y=\"158\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 16°. Найдите угол AOD. Ответ дайте в градусах.",
      "theory_sol": "\\(\\angle AOB=2\\angle ACB=32^\\circ\\). Поскольку OB и OD — противоположные лучи, \\(\\angle AOD=180^\\circ-32^\\circ=148^\\circ\\).<br><br><b>Ответ:</b> 148",
      "tasks": [
        {
          "text": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 19°. Найдите угол AOD. Ответ дайте в градусах.",
          "answer": "142"
        },
        {
          "text": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 54°. Найдите угол AOD. Ответ дайте в градусах.",
          "answer": "72"
        },
        {
          "text": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 78°. Найдите угол AOD. Ответ дайте в градусах.",
          "answer": "24"
        },
        {
          "text": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 21°. Найдите угол AOD. Ответ дайте в градусах.",
          "answer": "138"
        },
        {
          "text": "Отрезки AC и BD — диаметры окружности с центром O. Угол ACB равен 31°. Найдите угол AOD. Ответ дайте в градусах.",
          "answer": "118"
        }
      ]
    },
    {
      "desc": "16.3. Вписанный угол и диаметр между точками двух дуг",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"183.16\" y2=\"33.46\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"183.16\" y1=\"33.46\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"177.60\" y1=\"160.84\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"177.60\" y1=\"160.84\" x2=\"183.16\" y2=\"33.46\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"69\" y=\"101\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"235\" y=\"103\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"185\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">N</text><text x=\"180\" y=\"181\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">M</text></svg></div>",
      "theory_task": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 32°. Найдите угол NMB. Ответ дайте в градусах.",
      "theory_sol": "Угол ANB опирается на диаметр, значит он прямой. В треугольнике ANB \\(\\angle NAB=90^\\circ-32^\\circ=58^\\circ\\). Вписанные углы NAB и NMB опираются на одну хорду NB, поэтому равны.<br><br><b>Ответ:</b> 58",
      "tasks": [
        {
          "text": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 43°. Найдите угол NMB. Ответ дайте в градусах.",
          "answer": "47"
        },
        {
          "text": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 71°. Найдите угол NMB. Ответ дайте в градусах.",
          "answer": "19"
        },
        {
          "text": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 68°. Найдите угол NMB. Ответ дайте в градусах.",
          "answer": "22"
        },
        {
          "text": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 27°. Найдите угол NMB. Ответ дайте в градусах.",
          "answer": "63"
        },
        {
          "text": "На окружности по разные стороны от диаметра AB взяты точки M и N. Известно, что угол NBA равен 36°. Найдите угол NMB. Ответ дайте в градусах.",
          "answer": "54"
        }
      ]
    },
    {
      "desc": "16.4. Вписанный угол при указанной полуплоскости",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"97.48\" y1=\"135.58\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"151\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"164\" y=\"16\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 59°.",
      "theory_sol": "Точка C расположена на большей дуге AB, поэтому угол ACB опирается на меньшую дугу AB. \\(\\angle ACB=\\frac{59^\\circ}{2}=29{,}5^\\circ\\).<br><br><b>Ответ:</b> 29,5",
      "tasks": [
        {
          "text": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 47°. Ответ дайте в градусах.",
          "answer": "23,5"
        },
        {
          "text": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 113°. Ответ дайте в градусах.",
          "answer": "56,5"
        },
        {
          "text": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 173°. Ответ дайте в градусах.",
          "answer": "86,5"
        },
        {
          "text": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 91°. Ответ дайте в градусах.",
          "answer": "45,5"
        },
        {
          "text": "Треугольник ABC вписан в окружность с центром O. Точки O и C лежат по одну сторону от прямой AB. Найдите угол ACB, если угол AOB равен 126°. Ответ дайте в градусах.",
          "answer": "63"
        }
      ]
    },
    {
      "desc": "16.5. Центр описанной окружности на стороне: острый угол",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"185.33\" y2=\"34.52\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"185.33\" y1=\"34.52\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"154\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"69\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"236\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"184\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 9°.",
      "theory_sol": "Сторона AB проходит через центр окружности и является диаметром. Следовательно, угол ACB прямой. \\(\\angle ABC=90^\\circ-9^\\circ=81^\\circ\\).<br><br><b>Ответ:</b> 81",
      "tasks": [
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 24°. Ответ дайте в градусах.",
          "answer": "66"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 17°. Ответ дайте в градусах.",
          "answer": "73"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 7°. Ответ дайте в градусах.",
          "answer": "83"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 32°. Ответ дайте в градусах.",
          "answer": "58"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Найдите угол ABC, если угол BAC равен 41°. Ответ дайте в градусах.",
          "answer": "49"
        }
      ]
    },
    {
      "desc": "16.6. Катет AC по радиусу окружности и катету BC",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"185.33\" y2=\"34.52\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"185.33\" y1=\"34.52\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"154\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"69\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"236\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"184\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 6,5. Найдите AC, если BC = 12.",
      "theory_sol": "AB — диаметр окружности, поэтому \\(AB=2R=13\\) и угол C прямой. По теореме Пифагора \\(AC=\\sqrt{13^2-12^2}=5\\).<br><br><b>Ответ:</b> 5",
      "tasks": [
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 14,5. Найдите AC, если BC = 21.",
          "answer": "20"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 25. Найдите AC, если BC = 48.",
          "answer": "14"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 13. Найдите AC, если BC = 24.",
          "answer": "10"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 10. Найдите AC, если BC = 16.",
          "answer": "12"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 17. Найдите AC, если BC = 30.",
          "answer": "16"
        }
      ]
    },
    {
      "desc": "16.7. Катет BC по радиусу окружности и катету AC",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"85.00\" y1=\"96.00\" x2=\"185.33\" y2=\"34.52\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"185.33\" y1=\"34.52\" x2=\"223.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"154\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"69\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"236\" y=\"104\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"184\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 20. Найдите BC, если AC = 32.",
      "theory_sol": "Гипотенуза AB — диаметр длиной 40. По теореме Пифагора \\(BC=\\sqrt{40^2-32^2}=24\\).<br><br><b>Ответ:</b> 24",
      "tasks": [
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 15. Найдите BC, если AC = 24.",
          "answer": "18"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 10. Найдите BC, если AC = 16.",
          "answer": "12"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 8,5. Найдите BC, если AC = 8.",
          "answer": "15"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 20,5. Найдите BC, если AC = 9.",
          "answer": "40"
        },
        {
          "text": "Центр описанной около треугольника ABC окружности лежит на стороне AB. Радиус окружности равен 13. Найдите BC, если AC = 10.",
          "answer": "24"
        }
      ]
    },
    {
      "desc": "16.8. Радиус описанной окружности прямоугольного треугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"45,152 250,38 250,152\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"239.00\" y1=\"152.00\" x2=\"239.00\" y2=\"141.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"239.00\" y1=\"141.00\" x2=\"250.00\" y2=\"141.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"32\" y=\"171\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"251\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"269\" y=\"169\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "В треугольнике ABC известно, что AC = 6, BC = 8, угол C равен 90°. Найдите радиус описанной окружности.",
      "theory_sol": "Гипотенуза \\(AB=\\sqrt{6^2+8^2}=10\\). В прямоугольном треугольнике центр описанной окружности — середина гипотенузы, поэтому \\(R=10:2=5\\).<br><br><b>Ответ:</b> 5",
      "tasks": [
        {
          "text": "В треугольнике ABC известно, что AC = 5, BC = 12, угол C равен 90°. Найдите радиус описанной окружности этого треугольника.",
          "answer": "6,5"
        },
        {
          "text": "В треугольнике ABC известно, что AC = 7, BC = 24, угол C равен 90°. Найдите радиус описанной окружности этого треугольника.",
          "answer": "12,5"
        },
        {
          "text": "В треугольнике ABC известно, что AC = 9, BC = 12, угол C равен 90°. Найдите радиус описанной окружности этого треугольника.",
          "answer": "7,5"
        },
        {
          "text": "В треугольнике ABC известно, что AC = 8, BC = 15, угол C равен 90°. Найдите радиус описанной окружности этого треугольника.",
          "answer": "8,5"
        },
        {
          "text": "В треугольнике ABC известно, что AC = 20, BC = 21, угол C равен 90°. Найдите радиус описанной окружности этого треугольника.",
          "answer": "14,5"
        }
      ]
    },
    {
      "desc": "16.9. Радиус окружности по стороне и противолежащему углу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"97.48\" y1=\"135.58\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"151\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"164\" y=\"16\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "В треугольнике ABC угол C равен 30°, AB = 16. Найдите радиус описанной окружности.",
      "theory_sol": "По расширенной теореме синусов \\(\\frac{AB}{\\sin C}=2R\\). Поскольку \\(\\sin30^\\circ=\\frac12\\), получаем \\(R=\\frac{16}{2\\sin30^\\circ}=16\\).<br><br><b>Ответ:</b> 16",
      "tasks": [
        {
          "text": "В треугольнике ABC угол C равен 45°, AB = \\(8\\sqrt{2}\\). Найдите радиус описанной окружности.",
          "answer": "8"
        },
        {
          "text": "В треугольнике ABC угол C равен 60°, AB = \\(12\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "12"
        },
        {
          "text": "В треугольнике ABC угол C равен 120°, AB = \\(18\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "18"
        },
        {
          "text": "В треугольнике ABC угол C равен 135°, AB = \\(14\\sqrt{2}\\). Найдите радиус описанной окружности.",
          "answer": "14"
        },
        {
          "text": "В треугольнике ABC угол C равен 150°, AB = 20. Найдите радиус описанной окружности.",
          "answer": "20"
        }
      ]
    },
    {
      "desc": "16.10. Радиус описанной окружности равностороннего треугольника по стороне",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"94.24424713887373,130.5 154.0,27.0 213.75575286112624,130.50000000000003\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"94.24\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"27.00\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"213.76\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"156\" y=\"18\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"155\" y=\"100\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Сторона равностороннего треугольника равна \\(2\\sqrt{3}\\). Найдите радиус описанной окружности.",
      "theory_sol": "Для равностороннего треугольника \\(R=\\frac{a}{\\sqrt3}\\). При \\(a=2\\sqrt3\\) получаем \\(R=2\\).<br><br><b>Ответ:</b> 2",
      "tasks": [
        {
          "text": "Сторона равностороннего треугольника равна \\(4\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "4"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(8\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "8"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(14\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "14"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(16\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "16"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(10\\sqrt{3}\\). Найдите радиус описанной окружности.",
          "answer": "10"
        }
      ]
    },
    {
      "desc": "16.11. Сторона равностороннего треугольника по описанному радиусу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"94.24424713887373,130.5 154.0,27.0 213.75575286112624,130.50000000000003\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"94.24\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"27.00\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"213.76\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"156\" y=\"18\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"155\" y=\"100\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Радиус описанной около равностороннего треугольника окружности равен \\(2\\sqrt{3}\\). Найдите сторону треугольника.",
      "theory_sol": "Для равностороннего треугольника \\(a=R\\sqrt3=2\\sqrt3\\cdot\\sqrt3=6\\).<br><br><b>Ответ:</b> 6",
      "tasks": [
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен \\(3\\sqrt{3}\\). Найдите длину стороны треугольника.",
          "answer": "9"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен \\(5\\sqrt{3}\\). Найдите длину стороны треугольника.",
          "answer": "15"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен \\(7\\sqrt{3}\\). Найдите длину стороны треугольника.",
          "answer": "21"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен \\(9\\sqrt{3}\\). Найдите длину стороны треугольника.",
          "answer": "27"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен \\(4\\sqrt{3}\\). Найдите длину стороны треугольника.",
          "answer": "12"
        }
      ]
    },
    {
      "desc": "16.12. Сторона равностороннего треугольника по расстоянию от центра до стороны",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"94.24424713887373,130.5 154.0,27.0 213.75575286112624,130.50000000000003\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"94.24\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"27.00\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"213.76\" y1=\"130.50\" x2=\"154.00\" y2=\"96.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"156\" y=\"18\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"221\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"155\" y=\"100\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до его сторон равно \\(\\dfrac{\\sqrt3}{2}\\). Найдите сторону треугольника.",
      "theory_sol": "Центр описанной окружности равностороннего треугольника одновременно является центром вписанной. \\(r=\\frac{a\\sqrt3}{6}\\); при \\(r=\\frac{\\sqrt3}{2}\\) получаем \\(a=3\\).<br><br><b>Ответ:</b> 3",
      "tasks": [
        {
          "text": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до сторон треугольника равно \\(4\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "24"
        },
        {
          "text": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до сторон треугольника равно \\(5\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "30"
        },
        {
          "text": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до сторон треугольника равно \\(\\dfrac{\\sqrt3}{3}\\). Найдите сторону треугольника.",
          "answer": "2"
        },
        {
          "text": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до сторон треугольника равно \\(\\sqrt3\\). Найдите сторону треугольника.",
          "answer": "6"
        },
        {
          "text": "В окружность с центром O вписан равносторонний треугольник. Расстояние от O до сторон треугольника равно \\(\\dfrac{2\\sqrt3}{3}\\). Найдите сторону треугольника.",
          "answer": "4"
        }
      ]
    },
    {
      "desc": "16.13. Угол B трапеции, вписанной в окружность, по углу A",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 211\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"111\" r=\"85\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"89.88622233488687,165.63694682335583 112.50000000000003,37.3878406783227 197.5,37.38784067832272 220.1137776651131,165.63694682335586\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"77.88622233488687\" y=\"179.63694682335583\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"105.50000000000003\" y=\"28.387840678322704\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"205.5\" y=\"28.387840678322718\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"232.1137776651131\" y=\"179.63694682335586\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 31°. Найдите угол B.",
      "theory_sol": "Углы при боковой стороне трапеции дополняют друг друга до 180°. Вписанная трапеция равнобедренная, поэтому углы B и C равны. \\(\\angle B=180^\\circ-31^\\circ=149^\\circ\\).<br><br><b>Ответ:</b> 149",
      "tasks": [
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 66°. Найдите угол B. Ответ дайте в градусах.",
          "answer": "114"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 54°. Найдите угол B. Ответ дайте в градусах.",
          "answer": "126"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 79°. Найдите угол B. Ответ дайте в градусах.",
          "answer": "101"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 62°. Найдите угол B. Ответ дайте в градусах.",
          "answer": "118"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 111°. Найдите угол B. Ответ дайте в градусах.",
          "answer": "69"
        }
      ]
    },
    {
      "desc": "16.14. Угол C трапеции, вписанной в окружность, по углу A",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 211\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"111\" r=\"85\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"89.88622233488687,165.63694682335583 112.50000000000003,37.3878406783227 197.5,37.38784067832272 220.1137776651131,165.63694682335586\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"77.88622233488687\" y=\"179.63694682335583\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"105.50000000000003\" y=\"28.387840678322704\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"205.5\" y=\"28.387840678322718\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"232.1137776651131\" y=\"179.63694682335586\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 32°. Найдите угол C.",
      "theory_sol": "Углы при боковой стороне трапеции дополняют друг друга до 180°. Вписанная трапеция равнобедренная, поэтому углы B и C равны. \\(\\angle C=180^\\circ-32^\\circ=148^\\circ\\).<br><br><b>Ответ:</b> 148",
      "tasks": [
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 111°. Найдите угол C. Ответ дайте в градусах.",
          "answer": "69"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 114°. Найдите угол C. Ответ дайте в градусах.",
          "answer": "66"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 81°. Найдите угол C. Ответ дайте в градусах.",
          "answer": "99"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 47°. Найдите угол C. Ответ дайте в градусах.",
          "answer": "133"
        },
        {
          "text": "Угол A трапеции ABCD с основаниями AD и BC, вписанной в окружность, равен 73°. Найдите угол C. Ответ дайте в градусах.",
          "answer": "107"
        }
      ]
    },
    {
      "desc": "16.15. Угол ABD по двум углам вписанного четырёхугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"95.4846813652066,132.56442923209113 113.44281759181936,40.17782738812863 216.0167891946425,65.75239087155366 191.58009341603685,153.86826918823428\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"216.02\" y2=\"65.75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"113.44\" y1=\"40.18\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"84\" y=\"146\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"227\" y=\"76\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"193\" y=\"177\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 92°, угол CAD равен 60°. Найдите угол ABD.",
      "theory_sol": "Углы CAD и CBD опираются на одну хорду CD, поэтому \\(\\angle CBD=60^\\circ\\). Следовательно, \\(\\angle ABD=92^\\circ-60^\\circ=32^\\circ\\).<br><br><b>Ответ:</b> 32",
      "tasks": [
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 134°, угол CAD равен 81°. Найдите угол ABD. Ответ дайте в градусах.",
          "answer": "53"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 120°, угол CAD равен 74°. Найдите угол ABD. Ответ дайте в градусах.",
          "answer": "46"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 70°, угол CAD равен 49°. Найдите угол ABD. Ответ дайте в градусах.",
          "answer": "21"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 80°, угол CAD равен 34°. Найдите угол ABD. Ответ дайте в градусах.",
          "answer": "46"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABC равен 101°, угол CAD равен 37°. Найдите угол ABD. Ответ дайте в градусах.",
          "answer": "64"
        }
      ]
    },
    {
      "desc": "16.16. Угол ABC по углам ABD и CAD",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"95.4846813652066,132.56442923209113 113.44281759181936,40.17782738812863 216.0167891946425,65.75239087155366 191.58009341603685,153.86826918823428\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"216.02\" y2=\"65.75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"113.44\" y1=\"40.18\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"84\" y=\"146\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"227\" y=\"76\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"193\" y=\"177\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 25°, угол CAD равен 41°. Найдите угол ABC.",
      "theory_sol": "Вписанные углы CAD и CBD опираются на одну хорду CD, следовательно, \\(\\angle ABC=\\angle ABD+\\angle CBD=25^\\circ+41^\\circ=66^\\circ\\).<br><br><b>Ответ:</b> 66",
      "tasks": [
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 51°, угол CAD равен 42°. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "93"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 16°, угол CAD равен 32°. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "48"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 78°, угол CAD равен 40°. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "118"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 39°, угол CAD равен 55°. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "94"
        },
        {
          "text": "Четырёхугольник ABCD вписан в окружность. Угол ABD равен 27°, угол CAD равен 36°. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "63"
        }
      ]
    },
    {
      "desc": "16.17. Противоположные углы вписанного четырёхугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"95.4846813652066,132.56442923209113 113.44281759181936,40.17782738812863 216.0167891946425,65.75239087155366 191.58009341603685,153.86826918823428\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"216.02\" y2=\"65.75\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"113.44\" y1=\"40.18\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"95.48\" y1=\"132.56\" x2=\"191.58\" y2=\"153.87\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"84\" y=\"146\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"227\" y=\"76\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"193\" y=\"177\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 33°. Найдите угол C.",
      "theory_sol": "Сумма противоположных углов вписанного четырёхугольника равна 180°. \\(\\angle C=180^\\circ-33^\\circ=147^\\circ\\).<br><br><b>Ответ:</b> 147",
      "tasks": [
        {
          "text": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 56°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.",
          "answer": "124"
        },
        {
          "text": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 71°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.",
          "answer": "109"
        },
        {
          "text": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 37°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.",
          "answer": "143"
        },
        {
          "text": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 89°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.",
          "answer": "91"
        },
        {
          "text": "Угол A четырёхугольника ABCD, вписанного в окружность, равен 102°. Найдите угол C этого четырёхугольника. Ответ дайте в градусах.",
          "answer": "78"
        }
      ]
    },
    {
      "desc": "16.18. Радиус описанной окружности квадрата по стороне",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"107.48023074035522\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"79.00\" y1=\"35.00\" x2=\"231.00\" y2=\"187.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"164\" y=\"116\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Сторона квадрата равна \\(4\\sqrt{2}\\). Найдите радиус описанной окружности.",
      "theory_sol": "Диагональ квадрата равна \\(d=a\\sqrt2=4\\sqrt2\\cdot\\sqrt2=8\\), диаметр описанной окружности совпадает с диагональю, значит \\(R=4\\).<br><br><b>Ответ:</b> 4",
      "tasks": [
        {
          "text": "Сторона квадрата равна \\(8\\sqrt{2}\\). Найдите радиус окружности, описанной около этого квадрата.",
          "answer": "8"
        },
        {
          "text": "Сторона квадрата равна \\(12\\sqrt{2}\\). Найдите радиус окружности, описанной около этого квадрата.",
          "answer": "12"
        },
        {
          "text": "Сторона квадрата равна \\(24\\sqrt{2}\\). Найдите радиус окружности, описанной около этого квадрата.",
          "answer": "24"
        },
        {
          "text": "Сторона квадрата равна \\(38\\sqrt{2}\\). Найдите радиус окружности, описанной около этого квадрата.",
          "answer": "38"
        },
        {
          "text": "Сторона квадрата равна \\(10\\sqrt{2}\\). Найдите радиус окружности, описанной около этого квадрата.",
          "answer": "10"
        }
      ]
    },
    {
      "desc": "16.19. Сторона квадрата по радиусу описанной окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"107.48023074035522\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"79.00\" y1=\"35.00\" x2=\"231.00\" y2=\"187.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"164\" y=\"116\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Радиус описанной около квадрата окружности равен \\(4\\sqrt{2}\\). Найдите сторону квадрата.",
      "theory_sol": "Диагональ квадрата равна \\(d=2R\\), а сторона \\(a=\\frac{d}{\\sqrt2}=R\\sqrt2=8\\).<br><br><b>Ответ:</b> 8",
      "tasks": [
        {
          "text": "Радиус окружности, описанной около квадрата, равен \\(22\\sqrt{2}\\). Найдите длину стороны квадрата.",
          "answer": "44"
        },
        {
          "text": "Радиус окружности, описанной около квадрата, равен \\(26\\sqrt{2}\\). Найдите длину стороны квадрата.",
          "answer": "52"
        },
        {
          "text": "Радиус окружности, описанной около квадрата, равен \\(34\\sqrt{2}\\). Найдите длину стороны квадрата.",
          "answer": "68"
        },
        {
          "text": "Радиус окружности, описанной около квадрата, равен \\(28\\sqrt{2}\\). Найдите длину стороны квадрата.",
          "answer": "56"
        },
        {
          "text": "Радиус окружности, описанной около квадрата, равен \\(10\\sqrt{2}\\). Найдите длину стороны квадрата.",
          "answer": "20"
        }
      ]
    },
    {
      "desc": "16.20. Площадь прямоугольника по синусу угла и диагонали",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"67,38 247,38 247,163 67,163\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"67.00\" y1=\"38.00\" x2=\"247.00\" y2=\"163.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"56\" y=\"31\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"260\" y=\"32\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"260\" y=\"181\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"56\" y=\"181\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Синус угла между стороной и диагональю прямоугольника равен \\(\\dfrac{12}{13}\\). Диаметр описанной окружности равен 13. Найдите площадь прямоугольника.",
      "theory_sol": "Диагональ прямоугольника равна диаметру окружности: 13. Катет против указанного угла \\(13\\cdot\\frac{12}{13}=12\\), другой катет \\(\\sqrt{13^2-12^2}=5\\). Площадь равна \\(S=12\\cdot5=60\\).<br><br><b>Ответ:</b> 60",
      "tasks": [
        {
          "text": "Синус угла между стороной и диагональю прямоугольника равен 0,6. Диаметр описанной около него окружности равен 10. Найдите площадь прямоугольника.",
          "answer": "48"
        },
        {
          "text": "Синус угла между стороной и диагональю прямоугольника равен 0,28. Диаметр описанной около него окружности равен 25. Найдите площадь прямоугольника.",
          "answer": "168"
        },
        {
          "text": "Синус угла между стороной и диагональю прямоугольника равен 0,6. Диаметр описанной около него окружности равен 5. Найдите площадь прямоугольника.",
          "answer": "12"
        },
        {
          "text": "Синус угла между стороной и диагональю прямоугольника равен 0,96. Диаметр описанной около него окружности равен 25. Найдите площадь прямоугольника.",
          "answer": "168"
        },
        {
          "text": "Синус угла между стороной и диагональю прямоугольника равен \\(\\dfrac{8}{17}\\). Диаметр описанной около него окружности равен 17. Найдите площадь прямоугольника.",
          "answer": "120"
        }
      ]
    },
    {
      "desc": "16.21. Площадь квадрата: центр окружности в середине стороны",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 275\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"145\" cy=\"165\" r=\"102\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"43\" y1=\"165\" x2=\"247\" y2=\"165\" stroke=\"#111827\" stroke-width=\"2\"/><polygon points=\"96,75 184,75 184,165 96,165\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"86\" y=\"68\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"194\" y=\"68\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"194\" y=\"180\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"86\" y=\"180\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"145\" y=\"180\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Точка O — середина стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен 2. Найдите площадь квадрата.",
      "theory_sol": "Пусть сторона квадрата равна a. Тогда \\(OA^2=a^2+(a/2)^2=\\frac54 a^2\\). Радиус OA = 2, следовательно, \\(a^2=\\frac45\\cdot4=3{,}2\\).<br><br><b>Ответ:</b> 3,2",
      "tasks": [
        {
          "text": "Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен \\(2\\sqrt{5}\\). Найдите площадь квадрата.",
          "answer": "16"
        },
        {
          "text": "Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен \\(3\\sqrt{5}\\). Найдите площадь квадрата.",
          "answer": "36"
        },
        {
          "text": "Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен \\(\\sqrt{10}\\). Найдите площадь квадрата.",
          "answer": "8"
        },
        {
          "text": "Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен 2,5. Найдите площадь квадрата.",
          "answer": "5"
        },
        {
          "text": "Точка O является серединой стороны CD квадрата ABCD. Радиус окружности с центром O, проходящей через вершину A, равен 1,5. Найдите площадь квадрата.",
          "answer": "1,8"
        }
      ]
    },
    {
      "desc": "16.22. Угол между касательными и радиус к точке касания",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"158.75\" y=\"49.90\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.75\" y=\"182.10\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Касательные в точках A и B к окружности с центром O пересекаются под углом 72°. Найдите угол ABO.",
      "theory_sol": "Радиусы OA и OB перпендикулярны касательным. В четырёхугольнике AOBС получаем \\(\\angle AOB=180^\\circ-72^\\circ=108^\\circ\\). Треугольник AOB равнобедренный, поэтому \\(\\angle ABO=\\frac{180^\\circ-108^\\circ}{2}=36^\\circ\\).<br><br><b>Ответ:</b> 36",
      "tasks": [
        {
          "text": "Касательные в точках A и B к окружности с центром O пересекаются под углом 56°. Найдите угол ABO. Ответ дайте в градусах.",
          "answer": "28"
        },
        {
          "text": "Касательные в точках A и B к окружности с центром O пересекаются под углом 42°. Найдите угол ABO. Ответ дайте в градусах.",
          "answer": "21"
        },
        {
          "text": "Касательные в точках A и B к окружности с центром O пересекаются под углом 86°. Найдите угол ABO. Ответ дайте в градусах.",
          "answer": "43"
        },
        {
          "text": "Касательные в точках A и B к окружности с центром O пересекаются под углом 38°. Найдите угол ABO. Ответ дайте в градусах.",
          "answer": "19"
        },
        {
          "text": "Касательные в точках A и B к окружности с центром O пересекаются под углом 64°. Найдите угол ABO. Ответ дайте в градусах.",
          "answer": "32"
        }
      ]
    },
    {
      "desc": "16.23. Сторона равностороннего треугольника по вписанному радиусу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"48,154 153,35 257,154\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"173\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"151\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"174\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><circle cx=\"153\" cy=\"106.6935364315803\" r=\"47.306463568419694\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"153\" y=\"111.6935364315803\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Радиус вписанной в равносторонний треугольник окружности равен \\(2\\sqrt{3}\\). Найдите сторону треугольника.",
      "theory_sol": "В равностороннем треугольнике \\(r=\\frac{a\\sqrt3}{6}\\). Отсюда \\(a=\\frac{6r}{\\sqrt3}=2\\sqrt3\\cdot2\\sqrt3=12\\).<br><br><b>Ответ:</b> 12",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен \\(5\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "30"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен \\(7\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "42"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен \\(11\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "66"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен \\(9\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "54"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен \\(3\\sqrt{3}\\). Найдите сторону треугольника.",
          "answer": "18"
        }
      ]
    },
    {
      "desc": "16.24. Вписанный радиус равностороннего треугольника по стороне",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"48,154 153,35 257,154\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"173\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"151\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"174\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><circle cx=\"153\" cy=\"106.6935364315803\" r=\"47.306463568419694\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"153\" y=\"111.6935364315803\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Сторона равностороннего треугольника равна \\(6\\sqrt{3}\\). Найдите радиус вписанной окружности.",
      "theory_sol": "Используем формулу \\(r=\\frac{a\\sqrt3}{6}\\). Тогда \\(r=\\frac{6\\sqrt3\\cdot\\sqrt3}{6}=3\\).<br><br><b>Ответ:</b> 3",
      "tasks": [
        {
          "text": "Сторона равностороннего треугольника равна \\(10\\sqrt{3}\\). Найдите радиус окружности, вписанной в треугольник.",
          "answer": "5"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(18\\sqrt{3}\\). Найдите радиус окружности, вписанной в треугольник.",
          "answer": "9"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(20\\sqrt{3}\\). Найдите радиус окружности, вписанной в треугольник.",
          "answer": "10"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(8\\sqrt{3}\\). Найдите радиус окружности, вписанной в треугольник.",
          "answer": "4"
        },
        {
          "text": "Сторона равностороннего треугольника равна \\(14\\sqrt{3}\\). Найдите радиус окружности, вписанной в треугольник.",
          "answer": "7"
        }
      ]
    },
    {
      "desc": "16.25. Площадь треугольника по периметру и вписанному радиусу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"48,154 153,35 257,154\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"173\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"151\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"174\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><circle cx=\"153\" cy=\"106.6935364315803\" r=\"47.306463568419694\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"153\" y=\"111.6935364315803\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Периметр треугольника равен 33, одна сторона равна 7, радиус вписанной окружности равен 2. Найдите площадь треугольника.",
      "theory_sol": "Площадь любого треугольника равна произведению вписанного радиуса на полупериметр: \\(S=pr=\\frac{33}{2}\\cdot2=33\\).<br><br><b>Ответ:</b> 33",
      "tasks": [
        {
          "text": "Периметр треугольника равен 48, одна из сторон равна 8, радиус вписанной окружности равен 3. Найдите площадь треугольника.",
          "answer": "72"
        },
        {
          "text": "Периметр треугольника равен 56, одна из сторон равна 15, радиус вписанной окружности равен 5. Найдите площадь треугольника.",
          "answer": "140"
        },
        {
          "text": "Периметр треугольника равен 140, одна из сторон равна 25, радиус вписанной окружности равен 9. Найдите площадь треугольника.",
          "answer": "630"
        },
        {
          "text": "Периметр треугольника равен 71, одна из сторон равна 17, радиус вписанной окружности равен 6. Найдите площадь треугольника.",
          "answer": "213"
        },
        {
          "text": "Периметр треугольника равен 64, одна из сторон равна 10, радиус вписанной окружности равен 4. Найдите площадь треугольника.",
          "answer": "128"
        }
      ]
    },
    {
      "desc": "16.26. Радиус окружности, вписанной в квадрат, по стороне",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"76\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/></svg></div>",
      "theory_task": "Сторона квадрата равна 6. Найдите радиус окружности, вписанной в квадрат.",
      "theory_sol": "Диаметр вписанной окружности равен стороне квадрата. \\(r=\\frac{6}{2}=3\\).<br><br><b>Ответ:</b> 3",
      "tasks": [
        {
          "text": "Сторона квадрата равна 16. Найдите радиус окружности, вписанной в этот квадрат.",
          "answer": "8"
        },
        {
          "text": "Сторона квадрата равна 22. Найдите радиус окружности, вписанной в этот квадрат.",
          "answer": "11"
        },
        {
          "text": "Сторона квадрата равна 34. Найдите радиус окружности, вписанной в этот квадрат.",
          "answer": "17"
        },
        {
          "text": "Сторона квадрата равна 62. Найдите радиус окружности, вписанной в этот квадрат.",
          "answer": "31"
        },
        {
          "text": "Сторона квадрата равна 18. Найдите радиус окружности, вписанной в этот квадрат.",
          "answer": "9"
        }
      ]
    },
    {
      "desc": "16.27. Площадь квадрата, описанного около окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"76\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/></svg></div>",
      "theory_task": "Найдите площадь квадрата, описанного около окружности радиуса 7.",
      "theory_sol": "Сторона квадрата равна диаметру окружности: \\(a=2r=14\\). Тогда \\(S=a^2=196\\).<br><br><b>Ответ:</b> 196",
      "tasks": [
        {
          "text": "Найдите площадь квадрата, описанного около окружности радиуса 40.",
          "answer": "6400"
        },
        {
          "text": "Найдите площадь квадрата, описанного около окружности радиуса 9.",
          "answer": "324"
        },
        {
          "text": "Найдите площадь квадрата, описанного около окружности радиуса 18.",
          "answer": "1296"
        },
        {
          "text": "Найдите площадь квадрата, описанного около окружности радиуса 5.",
          "answer": "100"
        },
        {
          "text": "Найдите площадь квадрата, описанного около окружности радиуса 12.",
          "answer": "576"
        }
      ]
    },
    {
      "desc": "16.28. Диагональ квадрата по радиусу вписанной окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"76\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/></svg></div>",
      "theory_task": "Радиус вписанной в квадрат окружности равен \\(2\\sqrt{2}\\). Найдите диагональ квадрата.",
      "theory_sol": "Сторона квадрата равна \\(a=2r\\) и диагональ \\(d=a\\sqrt2=2r\\sqrt2\\). При \\(r=2\\sqrt2\\) получаем \\(d=8\\).<br><br><b>Ответ:</b> 8",
      "tasks": [
        {
          "text": "Радиус вписанной в квадрат окружности равен \\(6\\sqrt{2}\\). Найдите диагональ квадрата.",
          "answer": "24"
        },
        {
          "text": "Радиус вписанной в квадрат окружности равен \\(14\\sqrt{2}\\). Найдите диагональ квадрата.",
          "answer": "56"
        },
        {
          "text": "Радиус вписанной в квадрат окружности равен \\(18\\sqrt{2}\\). Найдите диагональ квадрата.",
          "answer": "72"
        },
        {
          "text": "Радиус вписанной в квадрат окружности равен \\(24\\sqrt{2}\\). Найдите диагональ квадрата.",
          "answer": "96"
        },
        {
          "text": "Радиус вписанной в квадрат окружности равен \\(5\\sqrt{2}\\). Найдите диагональ квадрата.",
          "answer": "20"
        }
      ]
    },
    {
      "desc": "16.29. Радиус вписанной окружности равнобедренной трапеции",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Радиус окружности, вписанной в равнобедренную трапецию, равен 12. Найдите высоту трапеции.",
      "theory_sol": "Вписанная окружность касается обоих параллельных оснований трапеции, поэтому высота равна её диаметру: \\(h=2r\\).<br><br><b>Ответ:</b> 24",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в равнобедренную трапецию, равен 30. Найдите высоту этой трапеции.",
          "answer": "60"
        },
        {
          "text": "Радиус окружности, вписанной в равнобедренную трапецию, равен 44. Найдите высоту этой трапеции.",
          "answer": "88"
        },
        {
          "text": "Радиус окружности, вписанной в равнобедренную трапецию, равен 15. Найдите высоту этой трапеции.",
          "answer": "30"
        },
        {
          "text": "Радиус окружности, вписанной в равнобедренную трапецию, равен 21. Найдите высоту этой трапеции.",
          "answer": "42"
        },
        {
          "text": "Радиус окружности, вписанной в равнобедренную трапецию, равен 35. Найдите высоту этой трапеции.",
          "answer": "70"
        }
      ]
    },
    {
      "desc": "16.30. Радиус вписанной окружности прямоугольной трапеции",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Радиус окружности, вписанной в прямоугольную трапецию, равен 10. Найдите высоту трапеции.",
      "theory_sol": "Вписанная окружность касается обоих параллельных оснований трапеции, поэтому высота равна её диаметру: \\(h=2r\\).<br><br><b>Ответ:</b> 20",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в прямоугольную трапецию, равен 28. Найдите высоту этой трапеции.",
          "answer": "56"
        },
        {
          "text": "Радиус окружности, вписанной в прямоугольную трапецию, равен 32. Найдите высоту этой трапеции.",
          "answer": "64"
        },
        {
          "text": "Радиус окружности, вписанной в прямоугольную трапецию, равен 14. Найдите высоту этой трапеции.",
          "answer": "28"
        },
        {
          "text": "Радиус окружности, вписанной в прямоугольную трапецию, равен 18. Найдите высоту этой трапеции.",
          "answer": "36"
        },
        {
          "text": "Радиус окружности, вписанной в прямоугольную трапецию, равен 25. Найдите высоту этой трапеции.",
          "answer": "50"
        }
      ]
    },
    {
      "desc": "16.31. Радиус вписанной окружности произвольной трапеции",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Радиус окружности, вписанной в трапецию, равен 16. Найдите высоту трапеции.",
      "theory_sol": "Вписанная окружность касается обоих параллельных оснований трапеции, поэтому высота равна её диаметру: \\(h=2r\\).<br><br><b>Ответ:</b> 32",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в трапецию, равен 18. Найдите высоту этой трапеции.",
          "answer": "36"
        },
        {
          "text": "Радиус окружности, вписанной в трапецию, равен 26. Найдите высоту этой трапеции.",
          "answer": "52"
        },
        {
          "text": "Радиус окружности, вписанной в трапецию, равен 12. Найдите высоту этой трапеции.",
          "answer": "24"
        },
        {
          "text": "Радиус окружности, вписанной в трапецию, равен 20. Найдите высоту этой трапеции.",
          "answer": "40"
        },
        {
          "text": "Радиус окружности, вписанной в трапецию, равен 33. Найдите высоту этой трапеции.",
          "answer": "66"
        }
      ]
    },
    {
      "desc": "16.32. Неизвестная сторона описанного четырёхугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Четырёхугольник ABCD описан около окружности. AB = 6, BC = 8, CD = 11. Найдите AD.",
      "theory_sol": "Суммы противоположных сторон описанного четырёхугольника равны: \\(AB+CD=BC+AD\\). Поэтому \\(AD=6+11-8=9\\).<br><br><b>Ответ:</b> 9",
      "tasks": [
        {
          "text": "Четырёхугольник ABCD описан около окружности. AB = 5, BC = 12, CD = 16. Найдите AD.",
          "answer": "9"
        },
        {
          "text": "Четырёхугольник ABCD описан около окружности. AB = 8, BC = 20, CD = 17. Найдите AD.",
          "answer": "5"
        },
        {
          "text": "Четырёхугольник ABCD описан около окружности. AB = 11, BC = 15, CD = 12. Найдите AD.",
          "answer": "8"
        },
        {
          "text": "Четырёхугольник ABCD описан около окружности. AB = 14, BC = 21, CD = 23. Найдите AD.",
          "answer": "16"
        },
        {
          "text": "Четырёхугольник ABCD описан около окружности. AB = 10, BC = 18, CD = 13. Найдите AD.",
          "answer": "5"
        }
      ]
    },
    {
      "desc": "16.33. Основание трапеции, описанной около окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 7, BC = 5, CD = 17. Найдите AD.",
      "theory_sol": "В трапеции, описанной около окружности, \\(AB+CD=AD+BC\\). Тогда \\(AD=7+17-5=19\\).<br><br><b>Ответ:</b> 19",
      "tasks": [
        {
          "text": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 14, BC = 13, CD = 22. Найдите AD.",
          "answer": "23"
        },
        {
          "text": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 10, BC = 16, CD = 12. Найдите AD.",
          "answer": "6"
        },
        {
          "text": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 13, BC = 14, CD = 11. Найдите AD.",
          "answer": "10"
        },
        {
          "text": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 9, BC = 7, CD = 15. Найдите AD.",
          "answer": "17"
        },
        {
          "text": "Трапеция ABCD с основаниями AD и BC описана около окружности. AB = 12, BC = 10, CD = 18. Найдите AD.",
          "answer": "20"
        }
      ]
    },
    {
      "desc": "16.34. Вписанный радиус ромба по диагонали и тангенсу угла",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"52,113 153,47 254,113 153,179\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"52\" y1=\"113\" x2=\"254\" y2=\"113\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"153\" y1=\"47\" x2=\"153\" y2=\"179\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"153\" cy=\"113\" r=\"55\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"162\" y1=\"113\" x2=\"162\" y2=\"104\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"162\" y1=\"104\" x2=\"153\" y2=\"104\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"35\" y=\"118\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"153\" y=\"39\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"118\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"153\" y=\"198\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"164\" y=\"108\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Диагональ AC ромба ABCD равна 48, а \\(\\operatorname{tg}\\angle BCA=\\frac7{24}\\). Найдите радиус окружности, вписанной в ромб.",
      "theory_sol": "Диагонали ромба перпендикулярны и делятся пополам: \\(CO=24\\). Из \\(\\operatorname{tg}\\angle BCA=\\frac{BO}{CO}=\\frac7{24}\\) следует \\(BO=7\\). Сторона равна \\(\\sqrt{24^2+7^2}=25\\), площадь \\(S=\\frac{48\\cdot14}{2}=336\\), полупериметр \\(p=50\\). Искомый радиус \\(r=\\frac Sp=6{,}72\\).<br><br><b>Ответ:</b> 6,72",
      "tasks": [
        {
          "text": "Диагональ AC ромба ABCD равна 30, а \\(\\operatorname{tg}\\angle BCA\\) = \\(\\dfrac{4}{3}\\). Найдите радиус окружности, вписанной в ромб.",
          "answer": "12"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 32, а \\(\\operatorname{tg}\\angle BCA\\) = 0,75. Найдите радиус окружности, вписанной в ромб.",
          "answer": "9,6"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 16, а \\(\\operatorname{tg}\\angle BCA\\) = 0,75. Найдите радиус окружности, вписанной в ромб.",
          "answer": "4,8"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 6, а \\(\\operatorname{tg}\\angle BCA\\) = \\(\\dfrac{4}{3}\\). Найдите радиус окружности, вписанной в ромб.",
          "answer": "2,4"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 36, а \\(\\operatorname{tg}\\angle BCA\\) = \\(\\dfrac{4}{3}\\). Найдите радиус окружности, вписанной в ромб.",
          "answer": "14,4"
        }
      ]
    }
  ]
};
  window.database[16] = task16Data;
  window.database["task16"] = task16Data;
})();
