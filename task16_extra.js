"use strict";
(function(){
  window.extraDatabase = window.extraDatabase || {};
  const task16Data = {
  "title": "Задание 16. Дополнительные задачи",
  "prototypes": [
    {
      "desc": "16.Д1. Радиус по хорде и углу основания в треугольнике AOB",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"115\" r=\"72\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"155.00\" y1=\"115.00\" x2=\"96.02\" y2=\"156.30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"155.00\" y1=\"115.00\" x2=\"161.28\" y2=\"186.73\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"96.02\" y1=\"156.30\" x2=\"161.28\" y2=\"186.73\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"149\" y=\"108\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"84.02105281119259\" y=\"169.29750341727532\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"164.27521347783136\" y=\"204.7260182626057\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Центральный угол AOB опирается на хорду AB длиной 9. При этом угол OAB равен 60°. Найдите радиус окружности.",
      "theory_sol": "Радиусы OA и OB равны. Значит, углы OAB и OBA равны 60°, третий угол также 60°. Треугольник AOB равносторонний, поэтому \\(R=OA=AB=9\\).<br><br><b>Ответ:</b> 9",
      "tasks": [
        {
          "text": "Центральный угол AOB опирается на хорду AB длиной 7. Угол OAB равен 60°. Найдите радиус окружности.",
          "answer": "7"
        },
        {
          "text": "Центральный угол AOB опирается на хорду AB длиной 13. Угол OAB равен 60°. Найдите радиус окружности.",
          "answer": "13"
        },
        {
          "text": "Центральный угол AOB опирается на хорду AB длиной 15. Угол OAB равен 60°. Найдите радиус окружности.",
          "answer": "15"
        },
        {
          "text": "Центральный угол AOB опирается на хорду AB длиной 18. Угол OAB равен 60°. Найдите радиус окружности.",
          "answer": "18"
        },
        {
          "text": "Центральный угол AOB опирается на хорду AB длиной 24. Угол OAB равен 60°. Найдите радиус окружности.",
          "answer": "24"
        }
      ],
      "topic": "I. Хорды и геометрия окружности",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д2. Ромб OABC, вершины которого лежат на окружности с центром O",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"135\" cy=\"110\" r=\"70\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"135,110 170,49.3782217350893 205,110 170,170.6217782649107\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"135.00\" y1=\"110.00\" x2=\"205.00\" y2=\"110.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"122\" y=\"115\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"178\" y=\"42.3782217350893\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"221\" y=\"114\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"178\" y=\"186.6217782649107\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол OAB. Ответ дайте в градусах.",
      "theory_sol": "Все стороны ромба равны радиусу окружности. В ромбе OA=AB=BC=CO, а точка B также находится на окружности. Треугольники OAB и OCB равносторонние. Поэтому угол OAB равен 60° (углы AOC и ABC равны 120°).<br><br><b>Ответ:</b> 60",
      "tasks": [
        {
          "text": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол OAB. Ответ дайте в градусах.",
          "answer": "60"
        },
        {
          "text": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "120"
        },
        {
          "text": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол OCB. Ответ дайте в градусах.",
          "answer": "60"
        },
        {
          "text": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол AOC. Ответ дайте в градусах.",
          "answer": "120"
        },
        {
          "text": "Точка O — центр окружности, точки A, B и C лежат на ней так, что OABC — ромб. Найдите угол OBA. Ответ дайте в градусах.",
          "answer": "60"
        }
      ],
      "topic": "I. Хорды и геометрия окружности",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д3. Диаметр окружности по длине хорды и расстоянию до неё",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"150\" cy=\"105\" r=\"75\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"83.67\" y1=\"70.00\" x2=\"216.33\" y2=\"70.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"150.00\" y1=\"70.00\" x2=\"150.00\" y2=\"105.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"139.00\" y1=\"70.00\" x2=\"139.00\" y2=\"81.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"139.00\" y1=\"81.00\" x2=\"150.00\" y2=\"81.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"162\" y=\"116\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"149\" y=\"61\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text><text x=\"72.667504192892\" y=\"65\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"227.332495807108\" y=\"65\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Длина хорды окружности равна 72, а расстояние от центра до хорды равно 27. Найдите диаметр окружности.",
      "theory_sol": "Перпендикуляр из центра к хорде делит её пополам. Половина хорды равна 36, расстояние до хорды — 27, значит, \\(R=\\sqrt{36^2+27^2}=45\\). Диаметр \\(d=2R=90\\).<br><br><b>Ответ:</b> 90",
      "tasks": [
        {
          "text": "Длина хорды окружности равна 72, расстояние от центра до этой хорды равно 27. Найдите диаметр окружности.",
          "answer": "90"
        },
        {
          "text": "Длина хорды окружности равна 48, расстояние от центра до этой хорды равно 70. Найдите диаметр окружности.",
          "answer": "148"
        },
        {
          "text": "Длина хорды окружности равна 30, расстояние от центра до этой хорды равно 36. Найдите диаметр окружности.",
          "answer": "78"
        },
        {
          "text": "Длина хорды окружности равна 96, расстояние от центра до этой хорды равно 20. Найдите диаметр окружности.",
          "answer": "104"
        },
        {
          "text": "Длина хорды окружности равна 80, расстояние от центра до этой хорды равно 42. Найдите диаметр окружности.",
          "answer": "116"
        }
      ],
      "topic": "I. Хорды и геометрия окружности",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д4. Расстояние от хорды до параллельной ей касательной",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"150\" cy=\"105\" r=\"75\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"83.67\" y1=\"140.00\" x2=\"216.33\" y2=\"140.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"65.00\" y1=\"30.00\" x2=\"235.00\" y2=\"30.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"150.00\" y1=\"140.00\" x2=\"150.00\" y2=\"105.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"141.00\" y1=\"140.00\" x2=\"141.00\" y2=\"131.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"141.00\" y1=\"131.00\" x2=\"150.00\" y2=\"131.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"163\" y=\"102\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"151\" y=\"156\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text><text x=\"72.667504192892\" y=\"145\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"227.332495807108\" y=\"145\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Радиус окружности с центром O равен 65, длина хорды AB равна 66. Найдите расстояние от хорды AB до касательной, параллельной ей и расположенной по другую сторону центра.",
      "theory_sol": "Половина хорды \\(AB/2=33\\). Расстояние от хорды до центра \\(h=\\sqrt{65^2-33^2}=56\\). Касательная расположена с другой стороны от центра, поэтому \\(d=R+h=65+56=121\\).<br><br><b>Ответ:</b> 121",
      "tasks": [
        {
          "text": "Радиус окружности равен 65, хорда AB имеет длину 66. Найдите расстояние от AB до параллельной ей касательной, расположенной по другую сторону центра.",
          "answer": "121"
        },
        {
          "text": "Радиус окружности равен 82, хорда AB имеет длину 36. Найдите расстояние от AB до параллельной ей касательной, расположенной по другую сторону центра.",
          "answer": "162"
        },
        {
          "text": "Радиус окружности равен 65, хорда AB имеет длину 126. Найдите расстояние от AB до параллельной ей касательной, расположенной по другую сторону центра.",
          "answer": "81"
        },
        {
          "text": "Радиус окружности равен 90, хорда AB имеет длину 144. Найдите расстояние от AB до параллельной ей касательной, расположенной по другую сторону центра.",
          "answer": "144"
        },
        {
          "text": "Радиус окружности равен 85, хорда AB имеет длину 80. Найдите расстояние от AB до параллельной ей касательной, расположенной по другую сторону центра.",
          "answer": "160"
        }
      ],
      "topic": "I. Хорды и геометрия окружности",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д5. Угол в равнобедренном треугольнике из радиусов по касательной и хорде",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"197.00\" y1=\"14.00\" x2=\"197.00\" y2=\"198.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"103.00\" x2=\"189.00\" y2=\"103.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"189.00\" y1=\"103.00\" x2=\"189.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"128\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"207\" y=\"117\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"125\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">M</text></svg></div>",
      "theory_task": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 54°. Найдите угол OMK, где O — центр окружности.",
      "theory_sol": "Радиус OK перпендикулярен касательной. \\(\\angle OKM=90^\\circ-54^\\circ=36^\\circ\\). Поскольку OK=OM, углы при основании KM равны, следовательно, \\(\\angle OMK=36^\\circ\\).<br><br><b>Ответ:</b> 36",
      "tasks": [
        {
          "text": "Хорда KM образует с касательной в точке K угол 75°. O — центр окружности. Найдите угол OMK.",
          "answer": "15"
        },
        {
          "text": "Хорда KM образует с касательной в точке K угол 69°. O — центр окружности. Найдите угол OMK.",
          "answer": "21"
        },
        {
          "text": "Хорда KM образует с касательной в точке K угол 52°. O — центр окружности. Найдите угол OMK.",
          "answer": "38"
        },
        {
          "text": "Хорда KM образует с касательной в точке K угол 42°. O — центр окружности. Найдите угол OMK.",
          "answer": "48"
        },
        {
          "text": "Хорда KM образует с касательной в точке K угол 63°. O — центр окружности. Найдите угол OMK.",
          "answer": "27"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д6. Центральный угол между радиусами по углу хорды с касательной",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"197.00\" y1=\"14.00\" x2=\"197.00\" y2=\"198.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"103.00\" x2=\"189.00\" y2=\"103.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"189.00\" y1=\"103.00\" x2=\"189.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"128\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"207\" y=\"117\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"125\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">M</text></svg></div>",
      "theory_task": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 69°. Найдите угол KOM, где O — центр окружности.",
      "theory_sol": "Угол между радиусом OK и касательной прямой. Поэтому угол OKM равен 90°−69°=21°. Углы при основании равнобедренного треугольника KOM по 21°, следовательно, \\(\\angle KOM=180^\\circ-42^\\circ=138^\\circ\\).<br><br><b>Ответ:</b> 138",
      "tasks": [
        {
          "text": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 52°. Найдите угол KOM, где O — центр окружности.",
          "answer": "104"
        },
        {
          "text": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 55°. Найдите угол KOM, где O — центр окружности.",
          "answer": "110"
        },
        {
          "text": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 60°. Найдите угол KOM, где O — центр окружности.",
          "answer": "120"
        },
        {
          "text": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 75°. Найдите угол KOM, где O — центр окружности.",
          "answer": "150"
        },
        {
          "text": "Прямая касается окружности в точке K. Хорда KM образует с касательной угол 38°. Найдите угол KOM, где O — центр окружности.",
          "answer": "76"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д7. Угол между хордой и касательной по градусной мере дуги",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"197.00\" y1=\"14.00\" x2=\"197.00\" y2=\"198.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"111.00\" x2=\"137.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"137.00\" y2=\"51.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"197.00\" y1=\"103.00\" x2=\"189.00\" y2=\"103.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"189.00\" y1=\"103.00\" x2=\"189.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"128\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"207\" y=\"117\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"125\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">M</text></svg></div>",
      "theory_task": "Меньшая дуга AB равна 152°. Прямая BC касается окружности в точке B так, что угол ABC острый. Найдите угол ABC.",
      "theory_sol": "Угол между касательной и хордой равен половине градусной меры дуги, заключённой внутри угла. \\(\\angle ABC=\\frac{152^\\circ}{2}=76^\\circ\\).<br><br><b>Ответ:</b> 76",
      "tasks": [
        {
          "text": "Меньшая дуга AB равна 168°. Касательная BC образует с хордой BA острый угол ABC. Найдите этот угол.",
          "answer": "84"
        },
        {
          "text": "Меньшая дуга AB равна 66°. Касательная BC образует с хордой BA острый угол ABC. Найдите этот угол.",
          "answer": "33"
        },
        {
          "text": "Меньшая дуга AB равна 50°. Касательная BC образует с хордой BA острый угол ABC. Найдите этот угол.",
          "answer": "25"
        },
        {
          "text": "Меньшая дуга AB равна 118°. Касательная BC образует с хордой BA острый угол ABC. Найдите этот угол.",
          "answer": "59"
        },
        {
          "text": "Меньшая дуга AB равна 84°. Касательная BC образует с хордой BA острый угол ABC. Найдите этот угол.",
          "answer": "42"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д8. Расстояние от точки пересечения двух касательных до центра",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Из точки A к окружности с центром O проведены две касательные. Угол между ними равен 60°, радиус окружности равен 6. Найдите AO.",
      "theory_sol": "Отрезок AO делит угол между касательными пополам. В прямоугольном треугольнике с катетом r напротив угла 30° гипотенуза AO вдвое больше радиуса: \\(AO=2r=12\\).<br><br><b>Ответ:</b> 12",
      "tasks": [
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, радиус окружности равен 8. Найдите AO.",
          "answer": "16"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, радиус окружности равен 10. Найдите AO.",
          "answer": "20"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, радиус окружности равен 12. Найдите AO.",
          "answer": "24"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, радиус окружности равен 15. Найдите AO.",
          "answer": "30"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, радиус окружности равен 21. Найдите AO.",
          "answer": "42"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д9. Радиус по расстоянию до центра и углу между касательными",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Из точки A проведены две касательные к окружности с центром O. Угол между ними 60°, AO = 10. Найдите радиус окружности.",
      "theory_sol": "В прямоугольном треугольнике угол при A равен половине 60°, то есть 30°. Радиус напротив него равен половине гипотенузы AO: \\(r=10/2=5\\).<br><br><b>Ответ:</b> 5",
      "tasks": [
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между касательными равен 60°, AO = 12. Найдите радиус окружности.",
          "answer": "6"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между касательными равен 60°, AO = 16. Найдите радиус окружности.",
          "answer": "8"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между касательными равен 60°, AO = 20. Найдите радиус окружности.",
          "answer": "10"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между касательными равен 60°, AO = 24. Найдите радиус окружности.",
          "answer": "12"
        },
        {
          "text": "Из точки A проведены две касательные к окружности с центром O. Угол между касательными равен 60°, AO = 34. Найдите радиус окружности.",
          "answer": "17"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д10. Угол между касательной и прямой через центр по дуге",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"140\" cy=\"108\" r=\"65\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"171.30\" y2=\"51.03\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"75.00\" y2=\"108.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"140.00\" y1=\"108.00\" x2=\"171.30\" y2=\"51.03\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"180.06\" y1=\"55.85\" x2=\"175.25\" y2=\"64.61\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"175.25\" y1=\"64.61\" x2=\"166.48\" y2=\"59.79\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"137\" y=\"103\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"163.2962962962963\" y=\"39.03034282941111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"290\" y=\"121\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"66\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 130°. Найдите угол ACO.",
      "theory_sol": "Центральный угол AOD равен 130°. Лучи OC и OD противоположны, поэтому \\(\\angle AOC=180^\\circ-130^\\circ=50^\\circ\\). Радиус OA перпендикулярен касательной AC, следовательно, \\(\\angle ACO=90^\\circ-50^\\circ=40^\\circ\\).<br><br><b>Ответ:</b> 40",
      "tasks": [
        {
          "text": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 140°. Найдите угол ACO.",
          "answer": "50"
        },
        {
          "text": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 120°. Найдите угол ACO.",
          "answer": "30"
        },
        {
          "text": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 100°. Найдите угол ACO.",
          "answer": "10"
        },
        {
          "text": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 135°. Найдите угол ACO.",
          "answer": "45"
        },
        {
          "text": "Луч CA касается окружности в точке A, луч CO проходит через центр O. Дуга AD внутри угла ACO равна 150°. Найдите угол ACO.",
          "answer": "60"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д11. Угол между радиусами к двум точкам касания вписанной в угол окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "В угол C величиной 79° вписана окружность, касающаяся сторон угла в точках A и B. O — центр окружности. Найдите угол AOB.",
      "theory_sol": "Радиусы OA и OB перпендикулярны сторонам угла C. Сумма углов четырёхугольника CAOB равна 360°. Значит, \\(\\angle AOB=180^\\circ-79^\\circ=101^\\circ\\).<br><br><b>Ответ:</b> 101",
      "tasks": [
        {
          "text": "В угол C величиной 83° вписана окружность, касающаяся его сторон в точках A и B. O — центр окружности. Найдите угол AOB.",
          "answer": "97"
        },
        {
          "text": "В угол C величиной 107° вписана окружность, касающаяся его сторон в точках A и B. O — центр окружности. Найдите угол AOB.",
          "answer": "73"
        },
        {
          "text": "В угол C величиной 115° вписана окружность, касающаяся его сторон в точках A и B. O — центр окружности. Найдите угол AOB.",
          "answer": "65"
        },
        {
          "text": "В угол C величиной 65° вписана окружность, касающаяся его сторон в точках A и B. O — центр окружности. Найдите угол AOB.",
          "answer": "115"
        },
        {
          "text": "В угол C величиной 42° вписана окружность, касающаяся его сторон в точках A и B. O — центр окружности. Найдите угол AOB.",
          "answer": "138"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д12. Радиус по длине касательной и расстоянию от внешней точки до центра",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "К окружности с центром O проведена касательная AB, а прямая AO проходит через центр. AB = 24, AO = 26. Найдите радиус окружности.",
      "theory_sol": "Радиус OB перпендикулярен касательной AB. По теореме Пифагора \\(OB=\\sqrt{AO^2-AB^2}=\\sqrt{26^2-24^2}=10\\).<br><br><b>Ответ:</b> 10",
      "tasks": [
        {
          "text": "Из точки A проведена касательная AB к окружности с центром O. Известно, что AB = 24, AO = 26. Найдите радиус окружности.",
          "answer": "10"
        },
        {
          "text": "Из точки A проведена касательная AB к окружности с центром O. Известно, что AB = 40, AO = 85. Найдите радиус окружности.",
          "answer": "75"
        },
        {
          "text": "Из точки A проведена касательная AB к окружности с центром O. Известно, что AB = 21, AO = 75. Найдите радиус окружности.",
          "answer": "72"
        },
        {
          "text": "Из точки A проведена касательная AB к окружности с центром O. Известно, что AB = 14, AO = 50. Найдите радиус окружности.",
          "answer": "48"
        },
        {
          "text": "Из точки A проведена касательная AB к окружности с центром O. Известно, что AB = 15, AO = 17. Найдите радиус окружности.",
          "answer": "8"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д13. Расстояние от внешней точки до ближнего пересечения с окружностью",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Отрезок AB длиной 48 касается окружности радиуса 14 с центром O в точке B. Окружность пересекает AO в точке D. Найдите AD.",
      "theory_sol": "Треугольник ABO прямоугольный: \\(AO=\\sqrt{48^2+14^2}=50\\). Так как OD — радиус, \\(AD=AO-OD=50-14=36\\).<br><br><b>Ответ:</b> 36",
      "tasks": [
        {
          "text": "AB = 48 — отрезок касательной к окружности радиуса 14 с центром O. Окружность пересекает отрезок AO в точке D. Найдите AD.",
          "answer": "36"
        },
        {
          "text": "AB = 32 — отрезок касательной к окружности радиуса 24 с центром O. Окружность пересекает отрезок AO в точке D. Найдите AD.",
          "answer": "16"
        },
        {
          "text": "AB = 51 — отрезок касательной к окружности радиуса 68 с центром O. Окружность пересекает отрезок AO в точке D. Найдите AD.",
          "answer": "17"
        },
        {
          "text": "AB = 20 — отрезок касательной к окружности радиуса 21 с центром O. Окружность пересекает отрезок AO в точке D. Найдите AD.",
          "answer": "8"
        },
        {
          "text": "AB = 12 — отрезок касательной к окружности радиуса 5 с центром O. Окружность пересекает отрезок AO в точке D. Найдите AD.",
          "answer": "8"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д14. Длина касательной из точки за пределами окружности при известном радиусе",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"137\" cy=\"111\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"258.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"58.90\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"166.75\" y2=\"163.10\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"137.00\" y1=\"111.00\" x2=\"258.00\" y2=\"111.00\" stroke=\"#111827\" stroke-width=\"1.5\"/><line x1=\"173.70\" y1=\"62.86\" x2=\"169.73\" y2=\"69.81\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"169.73\" y1=\"69.81\" x2=\"162.79\" y2=\"65.84\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"130\" y=\"111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"275\" y=\"113\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"158.7520661157025\" y=\"49.89611759334178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"158.7520661157025\" y=\"182.10388240665822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Точка C расположена на отрезке AB, AC = 6, BC = 4. Окружность с центром A проходит через C. Найдите длину касательной из B к окружности.",
      "theory_sol": "Радиус окружности AC=6, а \\(AB=AC+BC=10\\). Проведённый к касанию радиус перпендикулярен касательной. \\(BK=\\sqrt{AB^2-AC^2}=\\sqrt{10^2-6^2}=8\\).<br><br><b>Ответ:</b> 8",
      "tasks": [
        {
          "text": "На отрезке AB взята точка C так, что AC = 6, BC = 4. Построена окружность с центром A, проходящая через C. Найдите длину касательной, проведённой из точки B к окружности.",
          "answer": "8"
        },
        {
          "text": "На отрезке AB взята точка C так, что AC = 14, BC = 36. Построена окружность с центром A, проходящая через C. Найдите длину касательной, проведённой из точки B к окружности.",
          "answer": "48"
        },
        {
          "text": "На отрезке AB взята точка C так, что AC = 75, BC = 10. Построена окружность с центром A, проходящая через C. Найдите длину касательной, проведённой из точки B к окружности.",
          "answer": "40"
        },
        {
          "text": "На отрезке AB взята точка C так, что AC = 24, BC = 16. Построена окружность с центром A, проходящая через C. Найдите длину касательной, проведённой из точки B к окружности.",
          "answer": "32"
        },
        {
          "text": "На отрезке AB взята точка C так, что AC = 3, BC = 2. Построена окружность с центром A, проходящая через C. Найдите длину касательной, проведённой из точки B к окружности.",
          "answer": "4"
        }
      ],
      "topic": "II. Касательные и дуги",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д15. Центральный угол по вписанному, опирающемуся на ту же дугу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"97.48\" y1=\"135.58\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"151\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"164\" y=\"16\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "O — центр окружности, угол ACB равен 62°. Найдите угол AOB, опирающийся на ту же дугу.",
      "theory_sol": "Центральный угол в два раза больше вписанного, опирающегося на ту же дугу: \\(\\angle AOB=2\\cdot62^\\circ=124^\\circ\\).<br><br><b>Ответ:</b> 124",
      "tasks": [
        {
          "text": "O — центр окружности. Вписанный угол ACB равен 58°. Найдите центральный угол AOB, опирающийся на ту же дугу.",
          "answer": "116"
        },
        {
          "text": "O — центр окружности. Вписанный угол ACB равен 24°. Найдите центральный угол AOB, опирающийся на ту же дугу.",
          "answer": "48"
        },
        {
          "text": "O — центр окружности. Вписанный угол ACB равен 35°. Найдите центральный угол AOB, опирающийся на ту же дугу.",
          "answer": "70"
        },
        {
          "text": "O — центр окружности. Вписанный угол ACB равен 41°. Найдите центральный угол AOB, опирающийся на ту же дугу.",
          "answer": "82"
        },
        {
          "text": "O — центр окружности. Вписанный угол ACB равен 72°. Найдите центральный угол AOB, опирающийся на ту же дугу.",
          "answer": "144"
        }
      ],
      "topic": "III. Центральные и вписанные углы: дополнительные приёмы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д16. Вписанный угол по центральному, опирающемуся на ту же дугу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"97.48\" y1=\"135.58\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"151\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"164\" y=\"16\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "O — центр окружности, угол AOB равен 118°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
      "theory_sol": "Вписанный угол в два раза меньше центрального угла, опирающегося на ту же дугу: \\(\\angle ACB=118^\\circ/2=59^\\circ\\).<br><br><b>Ответ:</b> 59",
      "tasks": [
        {
          "text": "O — центр окружности. Центральный угол AOB равен 134°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
          "answer": "67"
        },
        {
          "text": "O — центр окружности. Центральный угол AOB равен 72°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
          "answer": "36"
        },
        {
          "text": "O — центр окружности. Центральный угол AOB равен 86°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
          "answer": "43"
        },
        {
          "text": "O — центр окружности. Центральный угол AOB равен 98°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
          "answer": "49"
        },
        {
          "text": "O — центр окружности. Центральный угол AOB равен 146°. Найдите вписанный угол ACB, опирающийся на ту же дугу.",
          "answer": "73"
        }
      ],
      "topic": "III. Центральные и вписанные углы: дополнительные приёмы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д17. Два вписанных угла по одну дугу при двух диаметрах",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105.21\" y1=\"47.21\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202.79\" y1=\"144.79\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"154\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"86.17782738812862\" y=\"150.55718240818064\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"95.20963209812822\" y=\"35.20963209812822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"214.79036790187178\" y=\"162.79036790187178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"223.82217261187137\" y=\"48.442817591819356\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 37°. Найдите угол OCD.",
      "theory_sol": "Углы OAB и OCD опираются на одну дугу BD (OA лежит на AD, а OC — на CB). Следовательно, они равны: \\(\\angle OCD=37^\\circ\\).<br><br><b>Ответ:</b> 37",
      "tasks": [
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 65°. Найдите угол OCD.",
          "answer": "65"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 30°. Найдите угол OCD.",
          "answer": "30"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 75°. Найдите угол OCD.",
          "answer": "75"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 50°. Найдите угол OCD.",
          "answer": "50"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол OAB равен 42°. Найдите угол OCD.",
          "answer": "42"
        }
      ],
      "topic": "III. Центральные и вписанные углы: дополнительные приёмы",
      "source": "Ширяева, блок 2; Решу ОГЭ, каталог №116"
    },
    {
      "desc": "16.Д18. Угол у точки D при диаметрах через угол ABO",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"105.21\" y1=\"47.21\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"105.21\" y2=\"47.21\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"202.79\" y1=\"144.79\" x2=\"209.82\" y2=\"55.44\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"98.18\" y1=\"136.56\" x2=\"202.79\" y2=\"144.79\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"154\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"86.17782738812862\" y=\"150.55718240818064\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"95.20963209812822\" y=\"35.20963209812822\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"214.79036790187178\" y=\"162.79036790187178\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"223.82217261187137\" y=\"48.442817591819356\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 55°. Найдите угол ODC.",
      "theory_sol": "Углы ABO и ODC опираются на одну дугу AC. Следовательно, \\(\\angle ODC=\\angle ABO=55^\\circ\\).<br><br><b>Ответ:</b> 55",
      "tasks": [
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 30°. Найдите угол ODC.",
          "answer": "30"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 77°. Найдите угол ODC.",
          "answer": "77"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 82°. Найдите угол ODC.",
          "answer": "82"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 45°. Найдите угол ODC.",
          "answer": "45"
        },
        {
          "text": "В окружности с центром O проведены диаметры AD и BC. Угол ABO равен 64°. Найдите угол ODC.",
          "answer": "64"
        }
      ],
      "topic": "III. Центральные и вписанные углы: дополнительные приёмы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д19. Угол BCO по углу ABC и углу OAB (радиусы в треугольниках)",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"96\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"97.48\" y1=\"135.58\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"162.41\" y1=\"27.51\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"97.48\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"96.00\" x2=\"210.52\" y2=\"135.58\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"151\" y=\"92\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"87\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"218\" y=\"152\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"164\" y=\"16\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "O — центр окружности, точки A, B и C лежат на ней. Угол ABC равен 56°, угол OAB равен 15°. На рисунке луч BO лежит внутри угла ABC. Найдите угол BCO.",
      "theory_sol": "Радиусы OA и OB равны, поэтому \\(\\angle ABO=\\angle OAB=15^\\circ\\). Тогда \\(\\angle OBC=56^\\circ-15^\\circ=41^\\circ\\). Поскольку OB=OC, \\(\\angle BCO=\\angle OBC=41^\\circ\\).<br><br><b>Ответ:</b> 41",
      "tasks": [
        {
          "text": "O — центр окружности, точки A, B и C лежат на ней. Луч BO лежит внутри угла ABC. Угол ABC равен 56°, угол OAB равен 15°. Найдите угол BCO.",
          "answer": "41"
        },
        {
          "text": "O — центр окружности, точки A, B и C лежат на ней. Луч BO лежит внутри угла ABC. Угол ABC равен 62°, угол OAB равен 53°. Найдите угол BCO.",
          "answer": "9"
        },
        {
          "text": "O — центр окружности, точки A, B и C лежат на ней. Луч BO лежит внутри угла ABC. Угол ABC равен 69°, угол OAB равен 15°. Найдите угол BCO.",
          "answer": "54"
        },
        {
          "text": "O — центр окружности, точки A, B и C лежат на ней. Луч BO лежит внутри угла ABC. Угол ABC равен 46°, угол OAB равен 27°. Найдите угол BCO.",
          "answer": "19"
        },
        {
          "text": "O — центр окружности, точки A, B и C лежат на ней. Луч BO лежит внутри угла ABC. Угол ABC равен 60°, угол OAB равен 24°. Найдите угол BCO.",
          "answer": "36"
        }
      ],
      "topic": "III. Центральные и вписанные углы: дополнительные приёмы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д20. Пересечение двух хорд: произведения отрезков",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"150\" cy=\"105\" r=\"75\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"76.14\" y1=\"118.02\" x2=\"222.44\" y2=\"85.59\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130.59\" y1=\"32.56\" x2=\"198.21\" y2=\"162.45\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"70.1394185240844\" y=\"132.02361332501977\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"126.58857161731095\" y=\"22.55556302831988\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"230.44443697168012\" y=\"91.58857161731095\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"207.20907072649044\" y=\"179.45333323392336\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"178\" y=\"91\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">P</text></svg></div>",
      "theory_task": "Хорды AC и BD окружности пересекаются в точке P. BP = 15, CP = 6, DP = 10. Найдите AP.",
      "theory_sol": "По теореме о пересекающихся хордах \\(AP\\cdot CP=BP\\cdot DP\\). Значит, \\(AP=\\frac{15\\cdot10}{6}=25\\).<br><br><b>Ответ:</b> 25",
      "tasks": [
        {
          "text": "Хорды AC и BD окружности пересекаются в точке P. BP = 15, CP = 6, DP = 10. Найдите AP.",
          "answer": "25"
        },
        {
          "text": "Хорды AC и BD окружности пересекаются в точке P. BP = 12, CP = 15, DP = 25. Найдите AP.",
          "answer": "20"
        },
        {
          "text": "Хорды AC и BD окружности пересекаются в точке P. BP = 4, CP = 12, DP = 21. Найдите AP.",
          "answer": "7"
        },
        {
          "text": "Хорды AC и BD окружности пересекаются в точке P. BP = 8, CP = 24, DP = 18. Найдите AP.",
          "answer": "6"
        },
        {
          "text": "Хорды AC и BD окружности пересекаются в точке P. BP = 10, CP = 8, DP = 12. Найдите AP.",
          "answer": "15"
        }
      ],
      "topic": "IV. Пересекающиеся хорды, касательная и секущая",
      "source": "Ширяева, блок 2; Решу ОГЭ №356618"
    },
    {
      "desc": "16.Д21. Касательная и секущая: известны внешний отрезок и вся секущая",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"140\" cy=\"108\" r=\"65\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"75.00\" y2=\"108.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"171.30\" y2=\"51.03\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"171.30\" y1=\"51.03\" x2=\"140.00\" y2=\"108.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"178.31\" y1=\"54.88\" x2=\"174.46\" y2=\"61.89\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"174.46\" y1=\"61.89\" x2=\"167.44\" y2=\"58.04\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"293\" y=\"123\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"208\" y=\"129\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"66\" y=\"122\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"166.2962962962963\" y=\"41.03034282941111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"140\" y=\"101\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Из точки A вне окружности проведены касательная AK и секущая, пересекающая окружность в точках B и C. AB = 2, AC = 8. Найдите AK.",
      "theory_sol": "По теореме о касательной и секущей \\(AK^2=AB\\cdot AC\\), поэтому \\(AK=\\sqrt{2\\cdot8}=4\\).<br><br><b>Ответ:</b> 4",
      "tasks": [
        {
          "text": "Из точки A вне окружности проведены касательная AK и секущая ABC (B — ближняя точка пересечения). AB = 2, AC = 8. Найдите AK.",
          "answer": "4"
        },
        {
          "text": "Из точки A вне окружности проведены касательная AK и секущая ABC (B — ближняя точка пересечения). AB = 3, AC = 12. Найдите AK.",
          "answer": "6"
        },
        {
          "text": "Из точки A вне окружности проведены касательная AK и секущая ABC (B — ближняя точка пересечения). AB = 6, AC = 54. Найдите AK.",
          "answer": "18"
        },
        {
          "text": "Из точки A вне окружности проведены касательная AK и секущая ABC (B — ближняя точка пересечения). AB = 5, AC = 45. Найдите AK.",
          "answer": "15"
        },
        {
          "text": "Из точки A вне окружности проведены касательная AK и секущая ABC (B — ближняя точка пересечения). AB = 4, AC = 25. Найдите AK.",
          "answer": "10"
        }
      ],
      "topic": "IV. Пересекающиеся хорды, касательная и секущая",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д22. Касательная и секущая: внешний и внутренний отрезки",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"140\" cy=\"108\" r=\"65\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"75.00\" y2=\"108.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"275.00\" y1=\"108.00\" x2=\"171.30\" y2=\"51.03\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"171.30\" y1=\"51.03\" x2=\"140.00\" y2=\"108.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"178.31\" y1=\"54.88\" x2=\"174.46\" y2=\"61.89\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"174.46\" y1=\"61.89\" x2=\"167.44\" y2=\"58.04\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"293\" y=\"123\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"208\" y=\"129\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"66\" y=\"122\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"166.2962962962963\" y=\"41.03034282941111\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"140\" y=\"101\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Через точку A вне окружности проведены касательная AK и секущая ABC. AB = 5, BC = 15. Найдите AK.",
      "theory_sol": "Полная длина секущей \\(AC=AB+BC=20\\). По теореме о касательной и секущей \\(AK=\\sqrt{AB\\cdot AC}=\\sqrt{5\\cdot20}=10\\).<br><br><b>Ответ:</b> 10",
      "tasks": [
        {
          "text": "Из точки A к окружности проведены касательная AK и секущая ABC. AB = 5, BC = 15. Найдите AK.",
          "answer": "10"
        },
        {
          "text": "Из точки A к окружности проведены касательная AK и секущая ABC. AB = 7, BC = 21. Найдите AK.",
          "answer": "14"
        },
        {
          "text": "Из точки A к окружности проведены касательная AK и секущая ABC. AB = 4, BC = 32. Найдите AK.",
          "answer": "12"
        },
        {
          "text": "Из точки A к окружности проведены касательная AK и секущая ABC. AB = 8, BC = 24. Найдите AK.",
          "answer": "16"
        },
        {
          "text": "Из точки A к окружности проведены касательная AK и секущая ABC. AB = 9, BC = 16. Найдите AK.",
          "answer": "15"
        }
      ],
      "topic": "IV. Пересекающиеся хорды, касательная и секущая",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д23. Периметр параллелограмма, в который вписана окружность",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"51,113 153,45 255,113 153,181\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"51.00\" y1=\"113.00\" x2=\"255.00\" y2=\"113.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"153.00\" y1=\"45.00\" x2=\"153.00\" y2=\"181.00\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"153\" cy=\"113\" r=\"56.579\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"162.00\" y1=\"113.00\" x2=\"162.00\" y2=\"104.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"162.00\" y1=\"104.00\" x2=\"153.00\" y2=\"104.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"34\" y=\"117\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"153\" y=\"39\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"273\" y=\"118\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"153\" y=\"201\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"164\" y=\"108\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 8.",
      "theory_sol": "У описанного четырёхугольника суммы противоположных сторон равны. У параллелограмма противоположные стороны и так равны. Поэтому все четыре стороны равны 8, периметр \\(P=4\\cdot8=32\\).<br><br><b>Ответ:</b> 32",
      "tasks": [
        {
          "text": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 8.",
          "answer": "32"
        },
        {
          "text": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 11.",
          "answer": "44"
        },
        {
          "text": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 9.",
          "answer": "36"
        },
        {
          "text": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 13.",
          "answer": "52"
        },
        {
          "text": "В параллелограмм вписана окружность. Найдите его периметр, если одна из сторон равна 14.",
          "answer": "56"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д24. Средняя линия трапеции, в которую вписана окружность",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"65,170 115,50 195,50 245,170\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"110\" r=\"60\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><text x=\"53\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"110\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"201\" y=\"43\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"257\" y=\"182\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "В трапецию, сумма боковых сторон которой равна 30, вписана окружность. Найдите длину средней линии трапеции.",
      "theory_sol": "В описанной трапеции сумма оснований равна сумме боковых сторон: 30. Средняя линия равна половине суммы оснований, поэтому \\(m=\\frac{30}{2}=15\\).<br><br><b>Ответ:</b> 15",
      "tasks": [
        {
          "text": "В трапецию вписана окружность. Сумма длин боковых сторон трапеции равна 30. Найдите длину её средней линии.",
          "answer": "15"
        },
        {
          "text": "В трапецию вписана окружность. Сумма длин боковых сторон трапеции равна 20. Найдите длину её средней линии.",
          "answer": "10"
        },
        {
          "text": "В трапецию вписана окружность. Сумма длин боковых сторон трапеции равна 12. Найдите длину её средней линии.",
          "answer": "6"
        },
        {
          "text": "В трапецию вписана окружность. Сумма длин боковых сторон трапеции равна 26. Найдите длину её средней линии.",
          "answer": "13"
        },
        {
          "text": "В трапецию вписана окружность. Сумма длин боковых сторон трапеции равна 42. Найдите длину её средней линии.",
          "answer": "21"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д25. Высота равностороннего треугольника по радиусу вписанной окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"48,154 153,35 257,154\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"173\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"151\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"174\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><line x1=\"153.00\" y1=\"35.00\" x2=\"153.00\" y2=\"154.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"142.00\" y1=\"154.00\" x2=\"142.00\" y2=\"143.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"142.00\" y1=\"143.00\" x2=\"153.00\" y2=\"143.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"155\" y=\"175\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text></svg></div>",
      "theory_task": "Радиус окружности, вписанной в равносторонний треугольник, равен 7. Найдите высоту треугольника.",
      "theory_sol": "Центр вписанной окружности делит высоту равностороннего треугольника в отношении 2:1. Поэтому \\(h=3r=3\\cdot7=21\\).<br><br><b>Ответ:</b> 21",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен 7. Найдите его высоту.",
          "answer": "21"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен 9. Найдите его высоту.",
          "answer": "27"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен 15. Найдите его высоту.",
          "answer": "45"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен 14. Найдите его высоту.",
          "answer": "42"
        },
        {
          "text": "Радиус окружности, вписанной в равносторонний треугольник, равен 12. Найдите его высоту.",
          "answer": "36"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д26. Центральный угол в равнобедренном треугольнике, вписанном в окружность",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"154\" cy=\"110\" r=\"78\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"85.13008775700371,146.61878189729947 154.0,32.0 222.8699122429963,146.61878189729947\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"110.00\" x2=\"154.00\" y2=\"32.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"154.00\" y1=\"110.00\" x2=\"222.87\" y2=\"146.62\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"149\" y=\"117\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"74.13008775700371\" y=\"162.61878189729947\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"154.0\" y=\"21.0\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"233.8699122429963\" y=\"162.61878189729947\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text></svg></div>",
      "theory_task": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 66°. Найдите угол BOC.",
      "theory_sol": "Углы при основании равнобедренного треугольника по \\(\\frac{180^\\circ-66^\\circ}{2}=57^\\circ\\). Центральный угол BOC опирается на ту же дугу, что вписанный угол BAC: \\(\\angle BOC=2\\cdot57^\\circ=114^\\circ\\).<br><br><b>Ответ:</b> 114",
      "tasks": [
        {
          "text": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 66°. Найдите центральный угол BOC.",
          "answer": "114"
        },
        {
          "text": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 32°. Найдите центральный угол BOC.",
          "answer": "148"
        },
        {
          "text": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 123°. Найдите центральный угол BOC.",
          "answer": "57"
        },
        {
          "text": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 107°. Найдите центральный угол BOC.",
          "answer": "73"
        },
        {
          "text": "Окружность с центром O описана около равнобедренного треугольника ABC, AB = BC, угол ABC равен 40°. Найдите центральный угол BOC.",
          "answer": "140"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д27. Сторона вписанного четырёхугольника через точку пересечения продолжений",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"136\" cy=\"110\" r=\"69\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"277.00\" y1=\"112.00\" x2=\"122.36\" y2=\"177.64\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"277.00\" y1=\"112.00\" x2=\"111.96\" y2=\"45.32\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"194.13\" y1=\"147.18\" x2=\"198.22\" y2=\"80.17\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"122.36\" y1=\"177.64\" x2=\"111.96\" y2=\"45.32\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"289\" y=\"116\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">K</text><text x=\"113.36384270618103\" y=\"170.63915444665332\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"190.12800665977767\" y=\"136.17707414201448\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"193.21891621600264\" y=\"101.17037605154829\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"102.96485519532953\" y=\"58.32147331441041\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text></svg></div>",
      "theory_task": "Четырёхугольник ABCD вписан в окружность. Прямые AB и CD пересекаются в точке K вне окружности. BK = 7, DK = 14, BC = 10. Найдите AD.",
      "theory_sol": "Треугольники KBC и KDA подобны: вписанные углы, опирающиеся на одинаковые дуги, равны, а угол K общий. Поэтому \\(\\frac{AD}{BC}=\\frac{KD}{KB}\\), откуда \\(AD=\\frac{14\\cdot10}{7}=20\\).<br><br><b>Ответ:</b> 20",
      "tasks": [
        {
          "text": "Вписанный в окружность четырёхугольник ABCD имеет продолжения сторон AB и CD, пересекающиеся в точке K вне окружности. BK = 7, DK = 14, BC = 10. Найдите AD.",
          "answer": "20"
        },
        {
          "text": "Вписанный в окружность четырёхугольник ABCD имеет продолжения сторон AB и CD, пересекающиеся в точке K вне окружности. BK = 12, DK = 16, BC = 24. Найдите AD.",
          "answer": "32"
        },
        {
          "text": "Вписанный в окружность четырёхугольник ABCD имеет продолжения сторон AB и CD, пересекающиеся в точке K вне окружности. BK = 14, DK = 10, BC = 21. Найдите AD.",
          "answer": "15"
        },
        {
          "text": "Вписанный в окружность четырёхугольник ABCD имеет продолжения сторон AB и CD, пересекающиеся в точке K вне окружности. BK = 20, DK = 15, BC = 12. Найдите AD.",
          "answer": "9"
        },
        {
          "text": "Вписанный в окружность четырёхугольник ABCD имеет продолжения сторон AB и CD, пересекающиеся в точке K вне окружности. BK = 8, DK = 12, BC = 18. Найдите AD.",
          "answer": "27"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д28. Описанная около квадрата окружность по радиусу вписанной",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"76\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/></svg></div>",
      "theory_task": "Радиус окружности, вписанной в квадрат, равен \\(7\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
      "theory_sol": "Сторона квадрата равна \\(a=2r\\); радиус описанной окружности \\(R=\\frac{a\\sqrt2}{2}=r\\sqrt2\\). При \\(r=7\\sqrt2\\) получаем \\(R=14\\).<br><br><b>Ответ:</b> 14",
      "tasks": [
        {
          "text": "Радиус окружности, вписанной в квадрат, равен \\(7\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
          "answer": "14"
        },
        {
          "text": "Радиус окружности, вписанной в квадрат, равен \\(10\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
          "answer": "20"
        },
        {
          "text": "Радиус окружности, вписанной в квадрат, равен \\(16\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
          "answer": "32"
        },
        {
          "text": "Радиус окружности, вписанной в квадрат, равен \\(22\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
          "answer": "44"
        },
        {
          "text": "Радиус окружности, вписанной в квадрат, равен \\(9\\sqrt{2}\\). Найдите радиус окружности, описанной около квадрата.",
          "answer": "18"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д29. Вписанная в квадрат окружность по радиусу описанной",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 220\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"79,35 231,35 231,187 79,187\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"72\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"240\" y=\"28\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"242\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"71\" y=\"200\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><circle cx=\"155\" cy=\"111\" r=\"107.48023074035522\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"79.00\" y1=\"35.00\" x2=\"231.00\" y2=\"187.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"164\" y=\"116\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text></svg></div>",
      "theory_task": "Радиус окружности, описанной около квадрата, равен \\(6\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
      "theory_sol": "Для квадрата \\(R=r\\sqrt2\\), поэтому \\(r=\\frac R{\\sqrt2}\\). При \\(R=6\\sqrt2\\) получаем \\(r=6\\).<br><br><b>Ответ:</b> 6",
      "tasks": [
        {
          "text": "Радиус описанной около квадрата окружности равен \\(6\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
          "answer": "6"
        },
        {
          "text": "Радиус описанной около квадрата окружности равен \\(42\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
          "answer": "42"
        },
        {
          "text": "Радиус описанной около квадрата окружности равен \\(56\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
          "answer": "56"
        },
        {
          "text": "Радиус описанной около квадрата окружности равен \\(64\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
          "answer": "64"
        },
        {
          "text": "Радиус описанной около квадрата окружности равен \\(8\\sqrt{2}\\). Найдите радиус вписанной в этот квадрат окружности.",
          "answer": "8"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д30. Высота равностороннего треугольника по радиусу описанной окружности",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><polygon points=\"48,154 153,35 257,154\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"33\" y=\"173\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"151\" y=\"29\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"272\" y=\"174\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><line x1=\"153.00\" y1=\"35.00\" x2=\"153.00\" y2=\"154.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"142.00\" y1=\"154.00\" x2=\"142.00\" y2=\"143.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><line x1=\"142.00\" y1=\"143.00\" x2=\"153.00\" y2=\"143.00\" stroke=\"#111827\" stroke-width=\"2.5\"/><text x=\"155\" y=\"175\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text></svg></div>",
      "theory_task": "Радиус окружности, описанной около равностороннего треугольника, равен 4. Найдите его высоту.",
      "theory_sol": "Центр описанной окружности равностороннего треугольника делит высоту в отношении 2:1. Значит, \\(h=\\frac{3R}{2}=6\\).<br><br><b>Ответ:</b> 6",
      "tasks": [
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен 4. Найдите высоту треугольника.",
          "answer": "6"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен 6. Найдите высоту треугольника.",
          "answer": "9"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен 12. Найдите высоту треугольника.",
          "answer": "18"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен 18. Найдите высоту треугольника.",
          "answer": "27"
        },
        {
          "text": "Радиус окружности, описанной около равностороннего треугольника, равен 20. Найдите высоту треугольника.",
          "answer": "30"
        }
      ],
      "topic": "V. Вписанные и описанные многоугольники",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д31. Внутренний угол правильного многоугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"105\" r=\"79\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"155.0,26.0 210.86143571373725,49.13856428626274 234.0,105.0 210.86143571373725,160.86143571373725 155.0,184.0 99.13856428626275,160.86143571373725 76.0,105.00000000000001 99.13856428626273,49.138564286262756\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"155.0\" y=\"14.2\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"220.91649414220996\" y=\"41.96627714351529\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"248.22\" y=\"109.0\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"220.91649414220996\" y=\"176.0337228564847\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"155.0\" y=\"203.8\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">E</text><text x=\"89.08350585779004\" y=\"176.0337228564847\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">F</text><text x=\"61.78\" y=\"109.00000000000001\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">G</text><text x=\"89.08350585779003\" y=\"41.966277143515306\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text></svg></div>",
      "theory_task": "ABCDEFGH — правильный восьмиугольник. Найдите угол EFG. Ответ дайте в градусах.",
      "theory_sol": "Внутренний угол правильного n-угольника равен \\(\\alpha=\\frac{(n-2)180^\\circ}{n}\\). При n=8 получаем \\(\\alpha=135^\\circ\\).<br><br><b>Ответ:</b> 135",
      "tasks": [
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол EFG. Ответ дайте в градусах.",
          "answer": "135"
        },
        {
          "text": "ABCDEFGHI — правильный девятиугольник. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "140"
        },
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол GHI. Ответ дайте в градусах.",
          "answer": "144"
        },
        {
          "text": "ABCDEF — правильный шестиугольник. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "120"
        },
        {
          "text": "ABCDEFGHIJKL — правильный двенадцатиугольник. Найдите угол ABC. Ответ дайте в градусах.",
          "answer": "150"
        }
      ],
      "topic": "VI. Правильные многоугольники, дуги и секторы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д32. Вписанный угол правильного многоугольника по дуге",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"105\" r=\"79\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"155.0,26.0 210.86143571373725,49.13856428626274 234.0,105.0 210.86143571373725,160.86143571373725 155.0,184.0 99.13856428626275,160.86143571373725 76.0,105.00000000000001 99.13856428626273,49.138564286262756\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"155.0\" y=\"14.2\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"220.91649414220996\" y=\"41.96627714351529\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"248.22\" y=\"109.0\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"220.91649414220996\" y=\"176.0337228564847\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"155.0\" y=\"203.8\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">E</text><text x=\"89.08350585779004\" y=\"176.0337228564847\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">F</text><text x=\"61.78\" y=\"109.00000000000001\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">G</text><text x=\"89.08350585779003\" y=\"41.966277143515306\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text></svg></div>",
      "theory_task": "ABCDEFGH — правильный восьмиугольник. Найдите угол ADF. Ответ дайте в градусах.",
      "theory_sol": "Каждая дуга между соседними вершинами правильного восьмиугольника равна \\(360^\\circ/8=45^\\circ\\). Дуга AF, не содержащая D, состоит из трёх таких дуг, поэтому \\(\\angle ADF=\\frac{3\\cdot45^\\circ}{2}=67{,}5^\\circ\\).<br><br><b>Ответ:</b> 67,5",
      "tasks": [
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол ADF. Ответ дайте в градусах.",
          "answer": "67,5"
        },
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол DBE. Ответ дайте в градусах.",
          "answer": "22,5"
        },
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол ADG. Ответ дайте в градусах.",
          "answer": "45"
        },
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол CAF. Ответ дайте в градусах.",
          "answer": "67,5"
        },
        {
          "text": "ABCDEFGH — правильный восьмиугольник. Найдите угол DAC. Ответ дайте в градусах.",
          "answer": "22,5"
        }
      ],
      "topic": "VI. Правильные многоугольники, дуги и секторы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д33. Вписанные углы правильного десятиугольника",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"105\" r=\"79\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><polygon points=\"155.0,26.0 201.43503493110538,41.087657444379154 230.1334647873171,80.58765744437915 230.13346478731714,129.41234255562085 201.43503493110538,168.91234255562085 155.0,184.0 108.56496506889462,168.91234255562085 79.86653521268288,129.41234255562085 79.86653521268286,80.58765744437918 108.56496506889461,41.08765744437916\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"155.0\" y=\"14.2\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"209.79334121870434\" y=\"32.30518893325498\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text><text x=\"243.6574884490342\" y=\"79.70518893325497\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">C</text><text x=\"243.65748844903422\" y=\"138.294811066745\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">D</text><text x=\"209.79334121870434\" y=\"185.69481106674502\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">E</text><text x=\"155.0\" y=\"203.8\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">F</text><text x=\"100.20665878129566\" y=\"185.69481106674502\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">G</text><text x=\"66.3425115509658\" y=\"138.294811066745\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">H</text><text x=\"66.34251155096578\" y=\"79.70518893325502\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">I</text><text x=\"100.20665878129563\" y=\"32.305188933254996\" font-size=\"13\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">J</text></svg></div>",
      "theory_task": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол ADI. Ответ дайте в градусах.",
      "theory_sol": "Дуга между соседними вершинами составляет \\(360^\\circ/10=36^\\circ\\). Дуга AI, не содержащая D, состоит из двух шагов, поэтому \\(\\angle ADI=\\frac{2\\cdot36^\\circ}{2}=36^\\circ\\).<br><br><b>Ответ:</b> 36",
      "tasks": [
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол ADI. Ответ дайте в градусах.",
          "answer": "36"
        },
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол DBJ. Ответ дайте в градусах.",
          "answer": "108"
        },
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол DBH. Ответ дайте в градусах.",
          "answer": "72"
        },
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол GHI. Ответ дайте в градусах.",
          "answer": "144"
        },
        {
          "text": "ABCDEFGHIJ — правильный десятиугольник. Найдите угол CBG. Ответ дайте в градусах.",
          "answer": "72"
        }
      ],
      "topic": "VI. Правильные многоугольники, дуги и секторы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д34. Длина большей дуги по длине меньшей и центральному углу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"107\" r=\"72\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"155.00\" y1=\"107.00\" x2=\"83.00\" y2=\"107.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"155.00\" y1=\"107.00\" x2=\"191.00\" y2=\"45.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"160\" y=\"112\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"70\" y=\"110\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"205\" y=\"41\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "В окружности с центром O центральный угол AOB равен 120°. Длина меньшей дуги AB равна 67. Найдите длину большей дуги AB.",
      "theory_sol": "Длины дуг относятся как соответствующие центральные углы. Для большей дуги угол составляет 360°−120°=240°. Поэтому \\(L=67\\cdot\\frac{240}{120}=134\\).<br><br><b>Ответ:</b> 134",
      "tasks": [
        {
          "text": "Центральный угол AOB равен 120°. Длина меньшей дуги AB равна 67. Найдите длину большей дуги AB.",
          "answer": "134"
        },
        {
          "text": "Центральный угол AOB равен 140°. Длина меньшей дуги AB равна 98. Найдите длину большей дуги AB.",
          "answer": "154"
        },
        {
          "text": "Центральный угол AOB равен 45°. Длина меньшей дуги AB равна 91. Найдите длину большей дуги AB.",
          "answer": "637"
        },
        {
          "text": "Центральный угол AOB равен 80°. Длина меньшей дуги AB равна 58. Найдите длину большей дуги AB.",
          "answer": "203"
        },
        {
          "text": "Центральный угол AOB равен 60°. Длина меньшей дуги AB равна 35. Найдите длину большей дуги AB.",
          "answer": "175"
        }
      ],
      "topic": "VI. Правильные многоугольники, дуги и секторы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д35. Площадь сектора по площади всего круга и центральному углу",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><circle cx=\"155\" cy=\"107\" r=\"72\" stroke=\"#111827\" stroke-width=\"2\" fill=\"none\"/><line x1=\"155.00\" y1=\"107.00\" x2=\"83.00\" y2=\"107.00\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"155.00\" y1=\"107.00\" x2=\"191.00\" y2=\"45.00\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"160\" y=\"112\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">O</text><text x=\"70\" y=\"110\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">A</text><text x=\"205\" y=\"41\" font-size=\"16\" font-family=\"Cambria, Georgia, serif\" text-anchor=\"middle\" fill=\"#111827\">B</text></svg></div>",
      "theory_task": "Площадь круга равна 123. Найдите площадь сектора этого круга с центральным углом 120°.",
      "theory_sol": "Площадь сектора составляет такую же долю площади круга, как центральный угол — от полного угла 360°. \\(S_{\\text{сектора}}=123\\cdot\\frac{120}{360}=41\\).<br><br><b>Ответ:</b> 41",
      "tasks": [
        {
          "text": "Площадь круга равна 123. Найдите площадь его сектора, центральный угол которого равен 120°.",
          "answer": "41"
        },
        {
          "text": "Площадь круга равна 88. Найдите площадь его сектора, центральный угол которого равен 45°.",
          "answer": "11"
        },
        {
          "text": "Площадь круга равна 72. Найдите площадь его сектора, центральный угол которого равен 90°.",
          "answer": "18"
        },
        {
          "text": "Площадь круга равна 180. Найдите площадь его сектора, центральный угол которого равен 30°.",
          "answer": "15"
        },
        {
          "text": "Площадь круга равна 240. Найдите площадь его сектора, центральный угол которого равен 60°.",
          "answer": "40"
        }
      ],
      "topic": "VI. Правильные многоугольники, дуги и секторы",
      "source": "Ширяева, блок 2"
    },
    {
      "desc": "16.Д36. Площадь прямоугольного треугольника и катет при угле 30°",
      "svg_code": "<div style=\"width:100%;max-width:330px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 205\" style=\"width:100%;height:auto;display:block;overflow:visible\"><path d=\"M 45 158 L 245 158 L 245 42.53 Z\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linejoin=\"round\"/><path d=\"M 231 158 V 144 H 245\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 83 158 A 38 38 0 0 0 77.9 139\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.45\"/><g font-size=\"16\" font-family=\"Cambria, Georgia, serif\" fill=\"#111827\"><text x=\"29\" y=\"177\">A</text><text x=\"250\" y=\"38\">B</text><text x=\"250\" y=\"177\">C</text><text x=\"92\" y=\"145\" font-size=\"14\">30°</text></g></svg></div>",
      "theory_task": "Площадь прямоугольного треугольника равна \\(\\frac{392\\sqrt{3}}{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
      "theory_sol": "Обозначим искомый катет через \\(a\\), а гипотенузу — через \\(c\\). Площадь равна половине произведения двух сторон на синус угла между ними: \\(S=\\frac12 ac\\sin30^\\circ\\). Так как \\(c=\\frac{a}{\\cos30^\\circ}\\), получаем \\(S=\\frac12a^2\\operatorname{tg}30^\\circ=\\frac{a^2\\sqrt3}{6}\\). По условию \\(\\frac{a^2\\sqrt3}{6}=\\frac{392\\sqrt3}{3}\\), поэтому \\(a^2=784\\), \\(a=28\\).<br><br><b>Ответ:</b> 28",
      "tasks": [
        {
          "text": "Площадь прямоугольного треугольника равна \\(24\\sqrt{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
          "answer": "12"
        },
        {
          "text": "Площадь прямоугольного треугольника равна \\(54\\sqrt{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
          "answer": "18"
        },
        {
          "text": "Площадь прямоугольного треугольника равна \\(\\frac{200\\sqrt{3}}{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
          "answer": "20"
        },
        {
          "text": "Площадь прямоугольного треугольника равна \\(96\\sqrt{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
          "answer": "24"
        },
        {
          "text": "Площадь прямоугольного треугольника равна \\(\\frac{512\\sqrt{3}}{3}\\). Один из острых углов равен 30°. Найдите длину катета, прилежащего к этому углу.",
          "answer": "32"
        }
      ],
      "topic": "VII. Комбинированные задачи на площадь и тригонометрию",
      "source": "Решу ОГЭ, тип 16 № 352811, вариант 83269810"
    }
  ],
  "preserveTopicOrder": true
};
  window.extraDatabase[16] = task16Data;
  window.extraDatabase["task16"] = task16Data;
})();
