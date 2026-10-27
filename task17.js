"use strict";
(function(){
  window.database = window.database || {};
  const styles = "<style id=\"t17-math-css\">.t17eq{white-space:nowrap}.t17rad{display:inline-flex;white-space:nowrap;vertical-align:middle;align-items:flex-start}.t17radsign{font-size:1.13em;line-height:1.06;margin-right:-2px}.t17radbar{border-top:1.4px solid currentColor;line-height:1.1;padding:0 2px 0 3px;margin-top:2px}.t17frac{display:inline-flex;flex-direction:column;align-items:center;white-space:nowrap;vertical-align:middle;line-height:1.03;margin:0 2px}.t17fnum{border-bottom:1.4px solid currentColor;padding:0 3px 2px}.t17fden{padding:2px 3px 0}</style>";
  if (typeof document !== "undefined" && document.head && !document.getElementById("t17-math-css")) document.head.insertAdjacentHTML("beforeend",styles);
  const data = {
  "title": "Задание 17. Четырёхугольники",
  "prototypes": [
    {
      "desc": "17.1. Один из углов параллелограмма равен 26°. Найдите больший угол этого паралл",
      "theory_task": "Один из углов параллелограмма равен 26°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
      "theory_sol": "Соседние углы параллелограмма в сумме дают 180°. Поэтому больший угол равен 180° − 26°&nbsp;=&nbsp;154°. Ответ: 154",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 171.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 245.00 L 93.00 200.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 200.00 L 194.00 200.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 200.00 L 171.00 245.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 245.00 L 70.00 245.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"254.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"194.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"198.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"254.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов параллелограмма равен 41°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "139"
        },
        {
          "text": "Один из углов параллелограмма равен 33°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "147"
        },
        {
          "text": "Один из углов параллелограмма равен 74°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "106"
        },
        {
          "text": "Один из углов параллелограмма равен 61°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "119"
        },
        {
          "text": "Один из углов параллелограмма равен 58°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "122"
        }
      ],
      "source": "Рабочая тетрадь, прототип 1"
    },
    {
      "desc": "17.2. Один из углов параллелограмма равен 91°. Найдите меньший угол этого паралл",
      "theory_task": "Один из углов параллелограмма равен 91°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
      "theory_sol": "Соседние углы параллелограмма дополняют друг друга до 180°. Меньший угол: 180° − 91°&nbsp;=&nbsp;89°. Ответ: 89",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 328.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 402.00 L 93.00 357.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 357.00 L 194.00 357.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 357.00 L 171.00 402.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 402.00 L 70.00 402.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"411.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"351.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"355.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"411.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов параллелограмма равен 102°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "78"
        },
        {
          "text": "Один из углов параллелограмма равен 111°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "69"
        },
        {
          "text": "Один из углов параллелограмма равен 128°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "52"
        },
        {
          "text": "Один из углов параллелограмма равен 139°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "41"
        },
        {
          "text": "Один из углов параллелограмма равен 116°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "64"
        }
      ],
      "source": "Рабочая тетрадь, прототип 2"
    },
    {
      "desc": "17.3. Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует",
      "theory_task": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 9°. Ответ дайте в градусах.",
      "theory_sol": "BC ∥ AD. Угол между биссектрисой и BC равен половине угла A. Поэтому острый угол параллелограмма равен 2 · 9°&nbsp;=&nbsp;18°. Ответ: 18",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 485.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 559.00 L 93.00 514.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 514.00 L 194.00 514.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 514.00 L 171.00 559.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 559.00 L 70.00 559.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 559.00 L 151.84 514.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"568.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"508.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"512.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"568.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 78.2 544.8 A 16 16 0 0 1 84.6 552.0\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 84.6 552.0 A 16 16 0 0 1 86.6 559.0\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div>",
      "tasks": [
        {
          "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 33°. Ответ дайте в градусах.",
          "answer": "66"
        },
        {
          "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 16°. Ответ дайте в градусах.",
          "answer": "32"
        },
        {
          "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 21°. Ответ дайте в градусах.",
          "answer": "42"
        },
        {
          "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 44°. Ответ дайте в градусах.",
          "answer": "88"
        },
        {
          "text": "Найдите острый угол параллелограмма ABCD, если биссектриса угла A образует со стороной BC угол, равный 28°. Ответ дайте в градусах.",
          "answer": "56"
        }
      ],
      "source": "Рабочая тетрадь, прототип 3"
    },
    {
      "desc": "17.4. Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 25",
      "theory_task": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 25° и 30°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
      "theory_sol": "Диагональ разбивает угол A на углы 25° и 30°, значит угол A равен 55°. Больший угол: 180° − 55°&nbsp;=&nbsp;125°. Ответ: 125",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">25°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">30°</text></svg></div>",
      "tasks": [
        {
          "text": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 30° и 45°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "105",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">30°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">45°</text></svg></div>"
        },
        {
          "text": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 40° и 35°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "105",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">40°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">35°</text></svg></div>"
        },
        {
          "text": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 35° и 30°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "115",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">35°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">30°</text></svg></div>"
        },
        {
          "text": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 22° и 37°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "121",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">22°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">37°</text></svg></div>"
        },
        {
          "text": "Диагональ AC параллелограмма ABCD образует с его сторонами углы, равные 28° и 41°. Найдите больший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "111",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 642.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 716.00 L 93.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 671.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 671.00 L 171.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 716.00 L 70.00 716.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 716.00 L 194.00 671.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"665.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"669.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"725.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\"></text><path d=\"M 77.2 701.9 A 15.8 15.8 0 0 1 83.1 710.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 81.5 716 A 11.5 11.5 0 0 0 80.9 711.5\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 85.8 716 A 15.8 15.8 0 0 0 84.7 711.2\" fill=\"none\" stroke=\"#1565A9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"83\" y=\"698\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">28°</text><text x=\"104\" y=\"711\" fill=\"#1565A9\" font-family=\"Georgia,serif\" font-size=\"9.5\" text-anchor=\"start\">41°</text></svg></div>"
        }
      ],
      "source": "Рабочая тетрадь, прототип 4"
    },
    {
      "desc": "17.5. Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 50",
      "theory_task": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 50° и 85°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
      "theory_sol": "Диагональ разбивает один угол на 50° и 85°. Смежный с ним меньший угол равен 180° − (50° + 85°)&nbsp;=&nbsp;45°. Ответ: 45",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 123.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 197.00 L 93.00 152.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 152.00 L 194.00 152.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 152.00 L 171.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 197.00 L 70.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 152.00 L 171.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"146.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"150.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 60° и 55°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "65"
        },
        {
          "text": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 65° и 80°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "35"
        },
        {
          "text": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 50° и 75°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "55"
        },
        {
          "text": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 48° и 72°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "60"
        },
        {
          "text": "Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 55° и 70°. Найдите меньший угол этого параллелограмма. Ответ дайте в градусах.",
          "answer": "55"
        }
      ],
      "source": "Рабочая тетрадь, прототип 5"
    },
    {
      "desc": "17.6. Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC = 6, BD",
      "theory_task": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;6, BD&nbsp;=&nbsp;12, AB&nbsp;=&nbsp;4. Найдите DO.",
      "theory_sol": "Диагонали параллелограмма точкой пересечения делятся пополам. Поэтому DO&nbsp;=&nbsp;BD : 2&nbsp;=&nbsp;12 : 2&nbsp;=&nbsp;6. Ответ: 6",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 280.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 354.00 L 93.00 309.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 309.00 L 194.00 309.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 309.00 L 171.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 354.00 L 70.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 354.00 L 194.00 309.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 309.00 L 171.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"303.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"307.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"135.00\" y=\"327.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">O</text></svg></div>",
      "tasks": [
        {
          "text": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;10, BD&nbsp;=&nbsp;22, AB&nbsp;=&nbsp;9. Найдите DO.",
          "answer": "11"
        },
        {
          "text": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;16, BD&nbsp;=&nbsp;20, AB&nbsp;=&nbsp;5. Найдите DO.",
          "answer": "10"
        },
        {
          "text": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;8, BD&nbsp;=&nbsp;14, AB&nbsp;=&nbsp;6. Найдите DO.",
          "answer": "7"
        },
        {
          "text": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;12, BD&nbsp;=&nbsp;18, AB&nbsp;=&nbsp;7. Найдите DO.",
          "answer": "9"
        },
        {
          "text": "Диагонали AC и BD параллелограмма ABCD пересекаются в точке O, AC&nbsp;=&nbsp;14, BD&nbsp;=&nbsp;16, AB&nbsp;=&nbsp;8. Найдите DO.",
          "answer": "8"
        }
      ],
      "source": "Рабочая тетрадь, прототип 6"
    },
    {
      "desc": "17.7. Найдите площадь параллелограмма, изображённого на рисунке",
      "theory_task": "Найдите площадь параллелограмма, изображённого на рисунке.",
      "theory_sol": "Основание равно 3 + 2&nbsp;=&nbsp;5, высота равна 4. Поэтому S&nbsp;=&nbsp;5 · 4&nbsp;=&nbsp;20. Ответ: 20",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"49.00 428.10 173.18 91.40\" width=\"310\" height=\"163.61\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 489.50 L 108.28 451.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 108.28 451.50 L 199.00 451.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 199.00 451.50 L 163.72 489.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 163.72 489.50 L 73.00 489.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 108.28 451.50 L 108.28 489.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 108.28 489.50 L 112.28 489.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 112.28 489.50 L 112.28 485.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 112.28 485.50 L 108.28 485.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"63.00\" y=\"497.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"105.28\" y=\"449.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"203.00\" y=\"449.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"167.72\" y=\"497.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"85.60\" y=\"468.22\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">5</text><text x=\"95.68\" y=\"502.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">3</text><text x=\"133.30\" y=\"502.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">2</text><text x=\"115.30\" y=\"473.30\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">4</text></svg></div>",
      "tasks": [
        {
          "text": "Найдите площадь параллелограмма, изображённого на рисунке.",
          "answer": "21",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"35\" y=\"98\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"56\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">4</text><text x=\"154\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text></svg></div>"
        },
        {
          "text": "Найдите площадь параллелограмма, изображённого на рисунке.",
          "answer": "36",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"35\" y=\"98\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"56\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text><text x=\"154\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">6</text></svg></div>"
        },
        {
          "text": "Найдите площадь параллелограмма, изображённого на рисунке.",
          "answer": "75",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"35\" y=\"98\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">13</text><text x=\"56\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">12</text><text x=\"154\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text></svg></div>"
        },
        {
          "text": "Найдите площадь параллелограмма, изображённого на рисунке.",
          "answer": "72",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"35\" y=\"98\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">10</text><text x=\"56\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">8</text><text x=\"154\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">4</text></svg></div>"
        },
        {
          "text": "Найдите площадь параллелограмма, изображённого на рисунке.",
          "answer": "60",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"30\" y1=\"139\" x2=\"91\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"275\" y2=\"40\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"40\" x2=\"214\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"139\" x2=\"30\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"40\" x2=\"91\" y2=\"139\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 139 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"16\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"281\" y=\"31\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"222\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"155\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"35\" y=\"98\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"56\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text><text x=\"154\" y=\"160\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">12</text></svg></div>"
        }
      ],
      "source": "Рабочая тетрадь, прототип 7"
    },
    {
      "desc": "17.8. Площадь параллелограмма равна 30, а две его стороны равны 6 и 10. Найдите",
      "theory_task": "Площадь параллелограмма равна 30, а две его стороны равны 6 и 10. Найдите его высоты. В ответе укажите большую высоту.",
      "theory_sol": "Высоты равны 30 : 6&nbsp;=&nbsp;5 и 30 : 10&nbsp;=&nbsp;3. Большая высота равна 5. Ответ: 5",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 594.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 668.00 L 93.00 623.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 623.00 L 194.00 623.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 623.00 L 171.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 668.00 L 70.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 623.00 L 93.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 664.30 L 96.70 664.30\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 96.70 664.30 L 96.70 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 623.00 L 175.60 659.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 174.05 662.03 L 171.03 660.48\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.03 660.48 L 172.57 657.45\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"617.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"621.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Площадь параллелограмма равна 32, а две его стороны равны 8 и 16. Найдите его высоты. В ответе укажите большую высоту.",
          "answer": "4"
        },
        {
          "text": "Площадь параллелограмма равна 54, а две его стороны равны 9 и 18. Найдите его высоты. В ответе укажите большую высоту.",
          "answer": "6"
        },
        {
          "text": "Площадь параллелограмма равна 60, а две его стороны равны 4 и 20. Найдите его высоты. В ответе укажите большую высоту.",
          "answer": "15"
        },
        {
          "text": "Площадь параллелограмма равна 48, а две его стороны равны 8 и 16. Найдите его высоты. В ответе укажите большую высоту.",
          "answer": "6"
        },
        {
          "text": "Площадь параллелограмма равна 72, а две его стороны равны 9 и 24. Найдите его высоты. В ответе укажите большую высоту.",
          "answer": "8"
        }
      ],
      "source": "Рабочая тетрадь, прототип 8"
    },
    {
      "desc": "17.9. Площадь параллелограмма равна 48, а две его стороны равны 8 и 16. Найдите",
      "theory_task": "Площадь параллелограмма равна 48, а две его стороны равны 8 и 16. Найдите его высоты. В ответе укажите меньшую высоту.",
      "theory_sol": "Высоты равны 48 : 8&nbsp;=&nbsp;6 и 48 : 16&nbsp;=&nbsp;3. Меньшая высота равна 3. Ответ: 3",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"44.00 123.80 173.74 99.20\" width=\"310\" height=\"177.00\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 197.00 L 93.00 152.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 152.00 L 194.00 152.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.00 152.00 L 171.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.00 197.00 L 70.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 152.00 L 93.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 193.30 L 96.70 193.30\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 96.70 193.30 L 96.70 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 93.00 152.00 L 175.60 188.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 174.05 191.03 L 171.03 189.48\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 171.03 189.48 L 172.57 186.45\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"58.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"88.00\" y=\"146.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"198.00\" y=\"150.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"174.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Площадь параллелограмма равна 60, а две его стороны равны 10 и 15. Найдите его высоты. В ответе укажите меньшую высоту.",
          "answer": "4"
        },
        {
          "text": "Площадь параллелограмма равна 84, а две его стороны равны 12 и 21. Найдите его высоты. В ответе укажите меньшую высоту.",
          "answer": "4"
        },
        {
          "text": "Площадь параллелограмма равна 96, а две его стороны равны 12 и 24. Найдите его высоты. В ответе укажите меньшую высоту.",
          "answer": "4"
        },
        {
          "text": "Площадь параллелограмма равна 72, а две его стороны равны 8 и 18. Найдите его высоты. В ответе укажите меньшую высоту.",
          "answer": "4"
        },
        {
          "text": "Площадь параллелограмма равна 100, а две его стороны равны 10 и 20. Найдите его высоты. В ответе укажите меньшую высоту.",
          "answer": "5"
        }
      ],
      "source": "Рабочая тетрадь, прототип 9"
    },
    {
      "desc": "17.10. Диагональ прямоугольника образует угол 44° с одной из его сторон. Найдите",
      "theory_task": "Диагональ прямоугольника образует угол 44° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
      "theory_sol": "Диагонали прямоугольника симметричны относительно его сторон. Острый угол между ними равен 88°. Ответ: 88",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"46.00 324.80 165.74 98.20\" width=\"310\" height=\"183.67\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 397.00 L 70.00 352.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 352.00 L 188.00 352.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 188.00 352.00 L 188.00 397.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 188.00 397.00 L 70.00 397.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 397.00 L 188.00 352.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 352.00 L 188.00 397.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"60.00\" y=\"406.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"60.00\" y=\"347.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"192.00\" y=\"348.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"192.00\" y=\"406.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"131.00\" y=\"371.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">O</text></svg></div>",
      "tasks": [
        {
          "text": "Диагональ прямоугольника образует угол 51° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
          "answer": "78"
        },
        {
          "text": "Диагональ прямоугольника образует угол 86° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
          "answer": "8"
        },
        {
          "text": "Диагональ прямоугольника образует угол 63° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
          "answer": "54"
        },
        {
          "text": "Диагональ прямоугольника образует угол 70° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
          "answer": "40"
        },
        {
          "text": "Диагональ прямоугольника образует угол 42° с одной из его сторон. Найдите острый угол между диагоналями этого прямоугольника. Ответ дайте в градусах.",
          "answer": "84"
        }
      ],
      "source": "Рабочая тетрадь, прототип 10"
    },
    {
      "desc": "17.11. Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO = 7, AB =",
      "theory_task": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;7, AB&nbsp;=&nbsp;6. Найдите AC.",
      "theory_sol": "Диагонали прямоугольника равны и точкой пересечения делятся пополам. Поэтому AC&nbsp;=&nbsp;BD&nbsp;=&nbsp;2 · BO&nbsp;=&nbsp;2 · 7&nbsp;=&nbsp;14. Ответ: 14",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"46.00 481.80 165.74 98.20\" width=\"310\" height=\"183.67\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 554.00 L 70.00 509.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 509.00 L 188.00 509.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 188.00 509.00 L 188.00 554.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 188.00 554.00 L 70.00 554.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 554.00 L 188.00 509.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 509.00 L 188.00 554.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"60.00\" y=\"563.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"60.00\" y=\"504.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"192.00\" y=\"505.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"192.00\" y=\"563.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"131.00\" y=\"528.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">O</text></svg></div>",
      "tasks": [
        {
          "text": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;37, AB&nbsp;=&nbsp;56. Найдите AC.",
          "answer": "74"
        },
        {
          "text": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;24, AB&nbsp;=&nbsp;45. Найдите AC.",
          "answer": "48"
        },
        {
          "text": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;13, AB&nbsp;=&nbsp;11. Найдите AC.",
          "answer": "26"
        },
        {
          "text": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;11, AB&nbsp;=&nbsp;10. Найдите AC.",
          "answer": "22"
        },
        {
          "text": "Диагонали AC и BD прямоугольника ABCD пересекаются в точке O, BO&nbsp;=&nbsp;15, AB&nbsp;=&nbsp;18. Найдите AC.",
          "answer": "30"
        }
      ],
      "source": "Рабочая тетрадь, прототип 11"
    },
    {
      "desc": "17.12. Сторона квадрата равна 2√2. Найдите диагональ этого квадрата",
      "theory_task": "Сторона квадрата равна 2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
      "theory_sol": "Диагональ квадрата равна стороне, умноженной на <span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>: d&nbsp;=&nbsp;2<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span> · <span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>&nbsp;=&nbsp;4. Ответ: 4",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"83.00 620.30 105.74 111.20\" width=\"310\" height=\"326.01\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 107.00 705.50 L 107.00 647.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 107.00 647.50 L 165.00 647.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 165.00 647.50 L 165.00 705.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 165.00 705.50 L 107.00 705.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 107.00 705.50 L 165.00 647.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"97.00\" y=\"714.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"97.00\" y=\"642.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"169.00\" y=\"643.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"169.00\" y=\"714.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Сторона квадрата равна 7<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
          "answer": "14"
        },
        {
          "text": "Сторона квадрата равна 11<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
          "answer": "22"
        },
        {
          "text": "Сторона квадрата равна 3<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
          "answer": "6"
        },
        {
          "text": "Сторона квадрата равна 9<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
          "answer": "18"
        },
        {
          "text": "Сторона квадрата равна 13<span class=\"t17rad\"><span class=\"t17radsign\">√</span><span class=\"t17radbar\">2</span></span>. Найдите диагональ этого квадрата.",
          "answer": "26"
        }
      ],
      "source": "Рабочая тетрадь, прототип 12"
    },
    {
      "desc": "17.13. В ромбе ABCD угол ABC равен 40°. Найдите угол ACD. Ответ дайте в градусах",
      "theory_task": "В ромбе ABCD угол ABC равен 40°. Найдите угол ACD. Ответ дайте в градусах.",
      "theory_sol": "Угол C равен 180° − 40°&nbsp;=&nbsp;140°. Диагональ AC делит угол C пополам, поэтому ∠ACD&nbsp;=&nbsp;70°. Ответ: 70",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"43.00 128.30 177.74 108.20\" width=\"310\" height=\"188.71\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 183.00 L 133.50 156.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 156.50 L 197.00 183.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 183.00 L 133.50 209.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 209.50 L 70.00 183.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 183.00 L 197.00 183.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"57.00\" y=\"187.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"129.50\" y=\"150.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"201.00\" y=\"186.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"129.50\" y=\"219.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "В ромбе ABCD угол ABC равен 82°. Найдите угол ACD. Ответ дайте в градусах.",
          "answer": "49"
        },
        {
          "text": "В ромбе ABCD угол ABC равен 84°. Найдите угол ACD. Ответ дайте в градусах.",
          "answer": "48"
        },
        {
          "text": "В ромбе ABCD угол ABC равен 68°. Найдите угол ACD. Ответ дайте в градусах.",
          "answer": "56"
        },
        {
          "text": "В ромбе ABCD угол ABC равен 56°. Найдите угол ACD. Ответ дайте в градусах.",
          "answer": "62"
        },
        {
          "text": "В ромбе ABCD угол ABC равен 134°. Найдите угол ACD. Ответ дайте в градусах.",
          "answer": "23"
        }
      ],
      "source": "Рабочая тетрадь, прототип 13"
    },
    {
      "desc": "17.14. Один из углов ромба равен 24°. Найдите больший угол этого ромба. Ответ дай",
      "theory_task": "Один из углов ромба равен 24°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
      "theory_sol": "Соседние углы ромба в сумме дают 180°. Больший угол равен 180° − 24°&nbsp;=&nbsp;156°. Ответ: 156",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"43.00 285.30 177.74 108.20\" width=\"310\" height=\"188.71\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 340.00 L 133.50 313.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 313.50 L 197.00 340.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 340.00 L 133.50 366.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 366.50 L 70.00 340.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"57.00\" y=\"344.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"129.50\" y=\"307.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"201.00\" y=\"343.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"129.50\" y=\"376.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов ромба равен 76°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
          "answer": "104"
        },
        {
          "text": "Один из углов ромба равен 35°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
          "answer": "145"
        },
        {
          "text": "Один из углов ромба равен 43°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
          "answer": "137"
        },
        {
          "text": "Один из углов ромба равен 62°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
          "answer": "118"
        },
        {
          "text": "Один из углов ромба равен 58°. Найдите больший угол этого ромба. Ответ дайте в градусах.",
          "answer": "122"
        }
      ],
      "source": "Рабочая тетрадь, прототип 14"
    },
    {
      "desc": "17.15. Один из углов ромба равен 93°. Найдите меньший угол этого ромба. Ответ дай",
      "theory_task": "Один из углов ромба равен 93°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
      "theory_sol": "Соседние углы ромба дополняют друг друга до 180°. Меньший угол равен 180° − 93°&nbsp;=&nbsp;87°. Ответ: 87",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"43.00 442.30 177.74 108.20\" width=\"310\" height=\"188.71\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 497.00 L 133.50 470.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 470.50 L 197.00 497.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 497.00 L 133.50 523.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 523.50 L 70.00 497.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"57.00\" y=\"501.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"129.50\" y=\"464.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"201.00\" y=\"500.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"129.50\" y=\"533.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов ромба равен 99°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
          "answer": "81"
        },
        {
          "text": "Один из углов ромба равен 104°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
          "answer": "76"
        },
        {
          "text": "Один из углов ромба равен 127°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
          "answer": "53"
        },
        {
          "text": "Один из углов ромба равен 111°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
          "answer": "69"
        },
        {
          "text": "Один из углов ромба равен 116°. Найдите меньший угол этого ромба. Ответ дайте в градусах.",
          "answer": "64"
        }
      ],
      "source": "Рабочая тетрадь, прототип 15"
    },
    {
      "desc": "17.16. Сторона ромба равна 4, а один из углов этого ромба равен 150°. Найдите выс",
      "theory_task": "Сторона ромба равна 4, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
      "theory_sol": "Высота равна произведению стороны на sin 150°. Так как sin 150°&nbsp;=&nbsp;0,5, получаем h&nbsp;=&nbsp;4 · 0,5&nbsp;=&nbsp;2. Ответ: 2",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"48\" y1=\"140\" x2=\"108\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"42\" x2=\"222\" y2=\"42\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"42\" x2=\"162\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"162\" y1=\"140\" x2=\"48\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"42\" x2=\"108\" y2=\"140\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M97 140 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"34\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"102\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"228\" y=\"33\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"170\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"104\" y=\"156\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text></svg></div>",
      "tasks": [
        {
          "text": "Сторона ромба равна 38, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
          "answer": "19"
        },
        {
          "text": "Сторона ромба равна 22, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
          "answer": "11"
        },
        {
          "text": "Сторона ромба равна 14, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
          "answer": "7"
        },
        {
          "text": "Сторона ромба равна 18, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
          "answer": "9"
        },
        {
          "text": "Сторона ромба равна 30, а один из углов этого ромба равен 150°. Найдите высоту этого ромба.",
          "answer": "15"
        }
      ],
      "source": "Рабочая тетрадь, прототип 16"
    },
    {
      "desc": "17.17. Периметр ромба равен 20, а один из углов равен 30°. Найдите площадь этого",
      "theory_task": "Периметр ромба равен 20, а один из углов равен 30°. Найдите площадь этого ромба.",
      "theory_sol": "Сторона ромба равна 20 : 4&nbsp;=&nbsp;5. Площадь S&nbsp;=&nbsp;a² · sin 30°&nbsp;=&nbsp;12,5. Ответ: 12,5",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"43.00 109.30 177.74 108.20\" width=\"310\" height=\"188.71\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 164.00 L 133.50 137.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 137.50 L 197.00 164.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 164.00 L 133.50 190.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 190.50 L 70.00 164.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"57.00\" y=\"168.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"129.50\" y=\"131.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"201.00\" y=\"167.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"129.50\" y=\"200.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Периметр ромба равен 28, а один из углов равен 30°. Найдите площадь этого ромба.",
          "answer": "24,5"
        },
        {
          "text": "Периметр ромба равен 56, а один из углов равен 30°. Найдите площадь этого ромба.",
          "answer": "98"
        },
        {
          "text": "Периметр ромба равен 48, а один из углов равен 30°. Найдите площадь этого ромба.",
          "answer": "72"
        },
        {
          "text": "Периметр ромба равен 40, а один из углов равен 30°. Найдите площадь этого ромба.",
          "answer": "50"
        },
        {
          "text": "Периметр ромба равен 36, а один из углов равен 30°. Найдите площадь этого ромба.",
          "answer": "40,5"
        }
      ],
      "source": "Рабочая тетрадь, прототип 17"
    },
    {
      "desc": "17.18. Острый угол ромба равен 52°. Сколько градусов составляет угол между сторон",
      "theory_task": "Острый угол ромба равен 52°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
      "theory_sol": "Меньшая диагональ соединяет вершины тупых углов и делит тупой угол ромба пополам. Искомый угол равен (180° − 52°) : 2&nbsp;=&nbsp;64°. Ответ: 64",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 185\" width=\"310\" height=\"185\" style=\"display:block;max-width:100%;overflow:visible\"><path d=\"M 58 86 L 155 26 L 252 86 L 155 148 Z\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"58\" y1=\"86\" x2=\"252\" y2=\"86\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M 142 138 Q 155 122 168 138\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 147 142 Q 155 132 163 142\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"43\" y=\"92\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">A</text><text x=\"155\" y=\"18\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">B</text><text x=\"266\" y=\"92\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">C</text><text x=\"155\" y=\"167\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Острый угол ромба равен 78°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
          "answer": "51"
        },
        {
          "text": "Острый угол ромба равен 44°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
          "answer": "68"
        },
        {
          "text": "Острый угол ромба равен 66°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
          "answer": "57"
        },
        {
          "text": "Острый угол ромба равен 40°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
          "answer": "70"
        },
        {
          "text": "Острый угол ромба равен 70°. Сколько градусов составляет угол между стороной и меньшей диагональю ромба?",
          "answer": "55"
        }
      ],
      "source": "Рабочая тетрадь, прототип 18"
    },
    {
      "desc": "17.19. Один из углов ромба равен 134°. Сколько градусов составляет угол между выс",
      "theory_task": "Один из углов ромба равен 134°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
      "theory_sol": "Большая диагональ ромба делит острый угол пополам. Искомый угол равен 90° − (180° − 134°) : 2&nbsp;=&nbsp;67°. Ответ: 67",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 230\" width=\"310\" height=\"230\" style=\"display:block;max-width:100%;overflow:visible\"><path d=\"M 75 105 L 155 10 L 235 105 L 155 200 Z\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"155\" y1=\"10\" x2=\"155\" y2=\"200\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><line x1=\"75\" y1=\"105\" x2=\"168.61\" y2=\"183.83\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M 174.4 176.9 L 167.5 171.2 L 161.7 178.0\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 150 169 Q 143 171 140 179\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.45\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 224 91 Q 214 105 224 119\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.45\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"58\" y=\"109\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">A</text><text x=\"155\" y=\"8\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">B</text><text x=\"252\" y=\"109\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">C</text><text x=\"155\" y=\"218\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов ромба равен 118°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
          "answer": "59"
        },
        {
          "text": "Один из углов ромба равен 150°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
          "answer": "75"
        },
        {
          "text": "Один из углов ромба равен 122°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
          "answer": "61"
        },
        {
          "text": "Один из углов ромба равен 146°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
          "answer": "73"
        },
        {
          "text": "Один из углов ромба равен 126°. Сколько градусов составляет угол между высотой и большей диагональю ромба?",
          "answer": "63"
        }
      ],
      "source": "Рабочая тетрадь, прототип 19"
    },
    {
      "desc": "17.20. Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его сто",
      "theory_task": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 35°. Сколько градусов составляет острый угол ромба?",
      "theory_sol": "Перпендикуляр к стороне и диагональ образуют угол, равный половине острого угла ромба. Поэтому острый угол равен 2 · 35°&nbsp;=&nbsp;70°. Ответ: 70",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 194\" width=\"310\" height=\"194\" style=\"display:block;max-width:100%;overflow:visible\"><path d=\"M 48 89 L 155 20 L 262 89 L 155 163 Z\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"48\" y1=\"89\" x2=\"262\" y2=\"89\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><line x1=\"155\" y1=\"20\" x2=\"155\" y2=\"163\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><line x1=\"155\" y1=\"89\" x2=\"123.57\" y2=\"40.27\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M 132.0 34.8 L 137.4 43.3 L 129.0 48.7\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 144.15 72.20 A 20 20 0 0 1 155 69\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.55\" stroke-linecap=\"round\"/><path d=\"M 66.48 77.08 A 22 22 0 0 1 66.07 101.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.55\" stroke-linecap=\"round\"/><text x=\"32\" y=\"94\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">A</text><text x=\"155\" y=\"14\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">B</text><text x=\"279\" y=\"94\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">C</text><text x=\"155\" y=\"181\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">D</text><text x=\"167\" y=\"83\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">O</text></svg></div>",
      "tasks": [
        {
          "text": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 40°. Сколько градусов составляет острый угол ромба?",
          "answer": "80"
        },
        {
          "text": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 28°. Сколько градусов составляет острый угол ромба?",
          "answer": "56"
        },
        {
          "text": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 39°. Сколько градусов составляет острый угол ромба?",
          "answer": "78"
        },
        {
          "text": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 41°. Сколько градусов составляет острый угол ромба?",
          "answer": "82"
        },
        {
          "text": "Перпендикуляр, проведённый из точки пересечения диагоналей ромба к его стороне, образует с одной из его диагоналей угол 36°. Сколько градусов составляет острый угол ромба?",
          "answer": "72"
        }
      ],
      "source": "Рабочая тетрадь, прототип 20"
    },
    {
      "desc": "17.21. Диагональ AC ромба ABCD равна 8, а tgBCA = 0,5. Найдите площадь ромба",
      "theory_task": "Диагональ AC ромба ABCD равна 8, а tgBCA&nbsp;=&nbsp;0,5. Найдите площадь ромба.",
      "theory_sol": "Диагонали ромба перпендикулярны и делятся пополам. Из tgBCA&nbsp;=&nbsp;0,5 получаем BD&nbsp;=&nbsp;AC · tgBCA&nbsp;=&nbsp;4. Тогда S&nbsp;=&nbsp;AC · BD : 2&nbsp;=&nbsp;16. Ответ: 16",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"43.00 109.30 177.74 108.20\" width=\"310\" height=\"188.71\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 70.00 164.00 L 133.50 137.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 137.50 L 197.00 164.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 164.00 L 133.50 190.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 133.50 190.50 L 70.00 164.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 70.00 164.00 L 197.00 164.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"57.00\" y=\"168.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"129.50\" y=\"131.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"201.00\" y=\"167.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"129.50\" y=\"200.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Диагональ AC ромба ABCD равна 60, а tgBCA&nbsp;=&nbsp;0,4. Найдите площадь ромба.",
          "answer": "720"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 8, а tgBCA&nbsp;=&nbsp;0,75. Найдите площадь ромба.",
          "answer": "24"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 20, а tgBCA&nbsp;=&nbsp;0,7. Найдите площадь ромба.",
          "answer": "140"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 10, а tgBCA&nbsp;=&nbsp;0,8. Найдите площадь ромба.",
          "answer": "40"
        },
        {
          "text": "Диагональ AC ромба ABCD равна 40, а tgBCA&nbsp;=&nbsp;0,3. Найдите площадь ромба.",
          "answer": "240"
        }
      ],
      "source": "Рабочая тетрадь, прототип 21"
    },
    {
      "desc": "17.22. Один из углов прямоугольной трапеции равен 37°. Найдите больший угол этой",
      "theory_task": "Один из углов прямоугольной трапеции равен 37°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Два угла прямоугольной трапеции равны 90°, а два других в сумме дают 180°. Больший угол равен 180° − 37°&nbsp;=&nbsp;143°. Ответ: 143",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"48.00 325.80 172.74 96.20\" width=\"310\" height=\"172.64\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 74.00 396.00 L 74.00 353.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 74.00 353.00 L 150.00 353.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 150.00 353.00 L 197.00 396.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 396.00 L 74.00 396.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 74.00 396.00 L 79.00 396.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 79.00 396.00 L 79.00 391.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 79.00 391.00 L 74.00 391.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"62.00\" y=\"405.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"67.00\" y=\"348.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"154.00\" y=\"349.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"201.00\" y=\"405.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов прямоугольной трапеции равен 41°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "139"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 65°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "115"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 72°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "108"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 83°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "97"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 58°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "122"
        }
      ],
      "source": "Рабочая тетрадь, прототип 22"
    },
    {
      "desc": "17.23. Один из углов прямоугольной трапеции равен 102°. Найдите меньший угол этой",
      "theory_task": "Один из углов прямоугольной трапеции равен 102°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Непрямые углы прямоугольной трапеции в сумме дают 180°. Меньший угол равен 180° − 102°&nbsp;=&nbsp;78°. Ответ: 78",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"48.00 482.80 172.74 96.20\" width=\"310\" height=\"172.64\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 74.00 553.00 L 74.00 510.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 74.00 510.00 L 150.00 510.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 150.00 510.00 L 197.00 553.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.00 553.00 L 74.00 553.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 74.00 553.00 L 79.00 553.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 79.00 553.00 L 79.00 548.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 79.00 548.00 L 74.00 548.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"62.00\" y=\"562.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"67.00\" y=\"505.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"154.00\" y=\"506.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"201.00\" y=\"562.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов прямоугольной трапеции равен 139°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "41"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 113°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "67"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 108°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "72"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 121°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "59"
        },
        {
          "text": "Один из углов прямоугольной трапеции равен 132°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "48"
        }
      ],
      "source": "Рабочая тетрадь, прототип 23"
    },
    {
      "desc": "17.24. Один из углов равнобедренной трапеции равен 131°. Найдите меньший угол это",
      "theory_task": "Один из углов равнобедренной трапеции равен 131°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Углы при каждом основании равнобедренной трапеции равны, а соседние углы в сумме дают 180°. Меньший угол: 180° − 131°&nbsp;=&nbsp;49°. Ответ: 49",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 639.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 710.00 L 100.50 667.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 667.00 L 175.50 667.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 667.00 L 203.00 710.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 710.00 L 73.00 710.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"719.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"662.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"663.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"719.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов равнобедренной трапеции равен 108°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "72"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 120°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "60"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 136°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "44"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 114°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "66"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 126°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "54"
        }
      ],
      "source": "Рабочая тетрадь, прототип 24"
    },
    {
      "desc": "17.25. Один из углов равнобедренной трапеции равен 66°. Найдите больший угол этой",
      "theory_task": "Один из углов равнобедренной трапеции равен 66°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Соседние углы равнобедренной трапеции дополняют друг друга до 180°. Больший угол: 180° − 66°&nbsp;=&nbsp;114°. Ответ: 114",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 126.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 197.00 L 100.50 154.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 154.00 L 175.50 154.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 154.00 L 203.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 197.00 L 73.00 197.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"149.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"150.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"206.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Один из углов равнобедренной трапеции равен 74°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "106"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 55°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "125"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 62°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "118"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 48°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "132"
        },
        {
          "text": "Один из углов равнобедренной трапеции равен 69°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "111"
        }
      ],
      "source": "Рабочая тетрадь, прототип 25"
    },
    {
      "desc": "17.26. Сумма двух углов равнобедренной трапеции равна 196°. Найдите меньший угол",
      "theory_task": "Сумма двух углов равнобедренной трапеции равна 196°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Равные тупые углы имеют сумму 196°, значит каждый равен 98°. Меньший угол равен 180° − 98°&nbsp;=&nbsp;82°. Ответ: 82",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 283.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 354.00 L 100.50 311.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 311.00 L 175.50 311.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 311.00 L 203.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 354.00 L 73.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"306.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"307.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 218°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "71"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 268°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "46"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 244°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "58"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 352°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "4"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 230°. Найдите меньший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "65"
        }
      ],
      "source": "Рабочая тетрадь, прототип 26"
    },
    {
      "desc": "17.27. Сумма двух углов равнобедренной трапеции равна 46°. Найдите больший угол э",
      "theory_task": "Сумма двух углов равнобедренной трапеции равна 46°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
      "theory_sol": "Равные острые углы имеют сумму 46°, значит каждый равен 23°. Больший угол равен 180° − 23°&nbsp;=&nbsp;157°. Ответ: 157",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 440.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 511.00 L 100.50 468.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 468.00 L 175.50 468.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 468.00 L 203.00 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 511.00 L 73.00 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"520.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"463.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"464.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"520.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 78°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "141"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 102°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "129"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 94°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "133"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 66°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "147"
        },
        {
          "text": "Сумма двух углов равнобедренной трапеции равна 120°. Найдите больший угол этой трапеции. Ответ дайте в градусах.",
          "answer": "120"
        }
      ],
      "source": "Рабочая тетрадь, прототип 27"
    },
    {
      "desc": "17.28. Основания трапеции равны 2 и 9. Найдите больший из отрезков, на которые де",
      "theory_task": "Основания трапеции равны 2 и 9. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
      "theory_sol": "Диагональ делит среднюю линию трапеции на отрезки, равные половинам оснований. Больший отрезок равен 9 : 2&nbsp;=&nbsp;4,5. Ответ: 4,5",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 597.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 668.00 L 100.50 625.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 625.00 L 175.50 625.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 625.00 L 203.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 668.00 L 73.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 86.75 646.50 L 189.25 646.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 73.00 668.00 L 175.50 625.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"620.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"621.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Основания трапеции равны 14 и 19. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
          "answer": "9,5"
        },
        {
          "text": "Основания трапеции равны 3 и 11. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
          "answer": "5,5"
        },
        {
          "text": "Основания трапеции равны 1 и 17. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
          "answer": "8,5"
        },
        {
          "text": "Основания трапеции равны 6 и 20. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
          "answer": "10"
        },
        {
          "text": "Основания трапеции равны 8 и 13. Найдите больший из отрезков, на которые делит среднюю линию этой трапеции одна из её диагоналей.",
          "answer": "6,5"
        }
      ],
      "source": "Рабочая тетрадь, прототип 28"
    },
    {
      "desc": "17.29. Основания трапеции равны 1 и 5, а высота равна 3. Найдите среднюю линию эт",
      "theory_task": "Основания трапеции равны 1 и 5, а высота равна 3. Найдите среднюю линию этой трапеции.",
      "theory_sol": "Средняя линия равна полусумме оснований: (1 + 5) : 2&nbsp;=&nbsp;3. Ответ: 3",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 114.30 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 184.50 L 100.50 141.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 141.50 L 175.50 141.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 141.50 L 203.00 184.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 184.50 L 73.00 184.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 86.75 163.00 L 189.25 163.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"193.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"136.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"137.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"193.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Основания трапеции равны 3 и 9, а высота равна 5. Найдите среднюю линию этой трапеции.",
          "answer": "6"
        },
        {
          "text": "Основания трапеции равны 2 и 12, а высота равна 6. Найдите среднюю линию этой трапеции.",
          "answer": "7"
        },
        {
          "text": "Основания трапеции равны 5 и 11, а высота равна 7. Найдите среднюю линию этой трапеции.",
          "answer": "8"
        },
        {
          "text": "Основания трапеции равны 4 и 14, а высота равна 7. Найдите среднюю линию этой трапеции.",
          "answer": "9"
        },
        {
          "text": "Основания трапеции равны 7 и 13, а высота равна 4. Найдите среднюю линию этой трапеции.",
          "answer": "10"
        }
      ],
      "source": "Рабочая тетрадь, прототип 29"
    },
    {
      "desc": "17.30. В равнобедренной трапеции известны высота, меньшее основание и угол при ос",
      "theory_task": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
      "theory_sol": "При угле 45° проекция каждой боковой стороны на большее основание равна высоте. Поэтому большее основание равно 5 + 2 · 3&nbsp;=&nbsp;11. Ответ: 11",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"48.00 325.00 176.74 96.00\" width=\"310\" height=\"168.38\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 74.00 394.00 L 104.50 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 354.00 L 170.50 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 170.50 354.00 L 201.00 394.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 201.00 394.00 L 74.00 394.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 354.00 L 104.50 394.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 394.00 L 109.50 394.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 109.50 394.00 L 109.50 389.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 109.50 389.00 L 104.50 389.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"104.50\" y=\"404.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">H</text><text x=\"62.00\" y=\"403.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"97.50\" y=\"349.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"174.50\" y=\"350.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"205.00\" y=\"403.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"79.00\" y=\"392.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">45°</text><text x=\"134.32\" y=\"349.00\" font-size=\"10.00\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">5</text><text x=\"110.50\" y=\"378.00\" font-size=\"10.10\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">3</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
          "answer": "17",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"150\" y=\"34\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">7</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
          "answer": "13",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"150\" y=\"34\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
          "answer": "14",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"150\" y=\"34\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">6</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">4</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
          "answer": "14",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"150\" y=\"34\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">8</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, меньшее основание и угол при основании (см. рисунок). Найдите большее основание.",
          "answer": "22",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"150\" y=\"34\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">10</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">6</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        }
      ],
      "source": "Рабочая тетрадь, прототип 30"
    },
    {
      "desc": "17.31. В равнобедренной трапеции известны высота, большее основание и угол при ос",
      "theory_task": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
      "theory_sol": "При угле 45° на каждом краю большего основания отсекается отрезок, равный высоте. Поэтому меньшее основание равно 15 − 2 · 5&nbsp;=&nbsp;5. Ответ: 5",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"48.00 483.80 176.74 96.20\" width=\"310\" height=\"168.73\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 74.00 551.00 L 104.50 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 511.00 L 170.50 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 170.50 511.00 L 201.00 551.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 201.00 551.00 L 74.00 551.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 511.00 L 104.50 551.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 104.50 551.00 L 109.50 551.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 109.50 551.00 L 109.50 546.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 109.50 546.00 L 104.50 546.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"104.50\" y=\"561.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">H</text><text x=\"62.00\" y=\"560.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"97.50\" y=\"506.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"174.50\" y=\"507.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"205.00\" y=\"560.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text><text x=\"79.00\" y=\"549.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">45°</text><text x=\"110.50\" y=\"535.00\" font-size=\"10.10\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">5</text><text x=\"131.20\" y=\"563.00\" font-size=\"9.90\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">15</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
          "answer": "10",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"143\" y=\"172\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">18</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">4</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
          "answer": "8",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"143\" y=\"172\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">20</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">6</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
          "answer": "7",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"143\" y=\"172\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">17</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">5</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
          "answer": "8",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"143\" y=\"172\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">22</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">7</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        },
        {
          "text": "В равнобедренной трапеции известны высота, большее основание и угол при основании (см. рисунок). Найдите меньшее основание.",
          "answer": "8",
          "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"310\" height=\"185\" viewBox=\"0 0 310 185\" style=\"display:block;max-width:100%;overflow:visible\"><line x1=\"28\" y1=\"141\" x2=\"91\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"209\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"209\" y1=\"45\" x2=\"274\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"141\" x2=\"28\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"91\" y1=\"45\" x2=\"91\" y2=\"141\" stroke=\"#111827\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M80 141 v-11 h11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"14\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">A</text><text x=\"85\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">B</text><text x=\"215\" y=\"36\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">C</text><text x=\"282\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">D</text><text x=\"87\" y=\"157\" font-family=\"Georgia, serif\" font-size=\"16\" fill=\"#111827\">H</text><text x=\"143\" y=\"172\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">14</text><text x=\"101\" y=\"104\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">3</text><text x=\"52\" y=\"135\" font-family=\"Georgia, serif\" font-size=\"15\" fill=\"#111827\">45°</text></svg></div>"
        }
      ],
      "source": "Рабочая тетрадь, прототип 31"
    },
    {
      "desc": "17.32. Высота равнобедренной трапеции, проведённая из вершины C, делит основание",
      "theory_task": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 1 и 11. Найдите длину основания BC.",
      "theory_sol": "В равнобедренной трапеции разность полученных отрезков основания равна меньшему основанию. Поэтому BC&nbsp;=&nbsp;11 − 1&nbsp;=&nbsp;10. Ответ: 10",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"48.00 638.80 177.74 99.20\" width=\"310\" height=\"173.02\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 74.00 711.00 L 101.00 666.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 101.00 666.00 L 175.00 666.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.00 666.00 L 202.00 711.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 202.00 711.00 L 74.00 711.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.00 666.00 L 175.00 711.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.00 711.00 L 180.00 711.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 180.00 711.00 L 180.00 706.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 180.00 706.00 L 175.00 706.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"175.00\" y=\"721.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">H</text><text x=\"62.00\" y=\"720.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"94.00\" y=\"661.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.00\" y=\"662.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"206.00\" y=\"720.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 11 и 14. Найдите длину основания BC.",
          "answer": "3"
        },
        {
          "text": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 17 и 19. Найдите длину основания BC.",
          "answer": "2"
        },
        {
          "text": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 8 и 18. Найдите длину основания BC.",
          "answer": "10"
        },
        {
          "text": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 8 и 17. Найдите длину основания BC.",
          "answer": "9"
        },
        {
          "text": "Высота равнобедренной трапеции, проведённая из вершины C, делит основание AD на отрезки длиной 12 и 20. Найдите длину основания BC.",
          "answer": "8"
        }
      ],
      "source": "Рабочая тетрадь, прототип 32"
    },
    {
      "desc": "17.33. Основания трапеции равны 2 и 4, а высота равна 11. Найдите площадь этой тр",
      "theory_task": "Основания трапеции равны 2 и 4, а высота равна 11. Найдите площадь этой трапеции.",
      "theory_sol": "Площадь трапеции равна произведению полусуммы оснований на высоту: S&nbsp;=&nbsp;(2 + 4) · 11 : 2&nbsp;=&nbsp;33. Ответ: 33",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 114.30 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 184.50 L 100.50 141.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 141.50 L 175.50 141.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 141.50 L 203.00 184.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 184.50 L 73.00 184.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.00 184.50 L 193.03 183.70\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.03 183.70 L 193.13 182.90\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.13 182.90 L 193.29 182.11\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.29 182.11 L 193.51 181.33\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.51 181.33 L 193.80 180.58\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 193.80 180.58 L 194.15 179.85\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.15 179.85 L 194.55 179.16\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 194.55 179.16 L 195.01 178.49\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 195.01 178.49 L 195.51 177.87\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 195.51 177.87 L 196.07 177.29\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 196.07 177.29 L 196.68 176.75\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 196.68 176.75 L 197.32 176.27\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 197.32 176.27 L 198.00 175.84\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"193.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"136.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"137.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"193.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Основания трапеции равны 4 и 10, а высота равна 5. Найдите площадь этой трапеции.",
          "answer": "35"
        },
        {
          "text": "Основания трапеции равны 7 и 19, а высота равна 6. Найдите площадь этой трапеции.",
          "answer": "78"
        },
        {
          "text": "Основания трапеции равны 13 и 23, а высота равна 5. Найдите площадь этой трапеции.",
          "answer": "90"
        },
        {
          "text": "Основания трапеции равны 6 и 14, а высота равна 8. Найдите площадь этой трапеции.",
          "answer": "80"
        },
        {
          "text": "Основания трапеции равны 8 и 20, а высота равна 4. Найдите площадь этой трапеции.",
          "answer": "56"
        }
      ],
      "source": "Рабочая тетрадь, прототип 33"
    },
    {
      "desc": "17.34. В равнобедренной трапеции основания равны 3 и 5, а один из углов между бок",
      "theory_task": "В равнобедренной трапеции основания равны 3 и 5, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
      "theory_sol": "Высота равна половине разности оснований: h&nbsp;=&nbsp;(5 − 3) : 2&nbsp;=&nbsp;1. Тогда S&nbsp;=&nbsp;(3 + 5) · h : 2&nbsp;=&nbsp;4. Ответ: 4",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 283.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 354.00 L 100.50 311.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 311.00 L 175.50 311.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 311.00 L 203.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 354.00 L 73.00 354.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"306.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"307.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"363.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции основания равны 4 и 8, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
          "answer": "12"
        },
        {
          "text": "В равнобедренной трапеции основания равны 3 и 5, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
          "answer": "4"
        },
        {
          "text": "В равнобедренной трапеции основания равны 3 и 9, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
          "answer": "18"
        },
        {
          "text": "В равнобедренной трапеции основания равны 3 и 7, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
          "answer": "10"
        },
        {
          "text": "В равнобедренной трапеции основания равны 6 и 10, а один из углов между боковой стороной и основанием равен 45°. Найдите площадь этой трапеции.",
          "answer": "16"
        }
      ],
      "source": "Рабочая тетрадь, прототип 34"
    },
    {
      "desc": "17.35. В равнобедренной трапеции ABCD угол D равен 68°. Найдите градусную меру уг",
      "theory_task": "В равнобедренной трапеции ABCD угол D равен 68°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
      "theory_sol": "Угол A равен углу D, то есть 68°. Так как AC — биссектриса, ∠CAD&nbsp;=&nbsp;34°. Угол C равен 112°, поэтому ∠ACD&nbsp;=&nbsp;112° − 34°&nbsp;=&nbsp;78°. Ответ: 78",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 440.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 511.00 L 100.50 468.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 468.00 L 175.50 468.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 468.00 L 203.00 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 511.00 L 73.00 511.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 73.00 511.00 L 175.50 468.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"520.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"463.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"464.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"520.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции ABCD угол D равен 58°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
          "answer": "93"
        },
        {
          "text": "В равнобедренной трапеции ABCD угол D равен 54°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
          "answer": "99"
        },
        {
          "text": "В равнобедренной трапеции ABCD угол D равен 64°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
          "answer": "84"
        },
        {
          "text": "В равнобедренной трапеции ABCD угол D равен 56°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
          "answer": "96"
        },
        {
          "text": "В равнобедренной трапеции ABCD угол D равен 48°. Найдите градусную меру угла ACD, если луч AC является биссектрисой угла BAD.",
          "answer": "108"
        }
      ],
      "source": "Рабочая тетрадь, прототип 35"
    },
    {
      "desc": "17.36. Диагональ равнобедренной трапеции образует с боковыми сторонами углы 24° и",
      "theory_task": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 24° и 78°. Сколько градусов составляет угол при большем основании трапеции?",
      "theory_sol": "Используя равенство углов при основаниях равнобедренной трапеции, получаем угол при большем основании: (180° + 24° − 78°) : 2&nbsp;=&nbsp;63°. Ответ: 63",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 597.80 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 668.00 L 100.50 625.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 625.00 L 175.50 625.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 625.00 L 203.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 668.00 L 73.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 625.00 L 203.00 668.00\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"620.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"621.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"677.00\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 25° и 67°. Сколько градусов составляет угол при большем основании трапеции?",
          "answer": "69"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 26° и 84°. Сколько градусов составляет угол при большем основании трапеции?",
          "answer": "61"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 18° и 64°. Сколько градусов составляет угол при большем основании трапеции?",
          "answer": "67"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 25° и 73°. Сколько градусов составляет угол при большем основании трапеции?",
          "answer": "66"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с боковыми сторонами углы 18° и 58°. Сколько градусов составляет угол при большем основании трапеции?",
          "answer": "70"
        }
      ],
      "source": "Рабочая тетрадь, прототип 36"
    },
    {
      "desc": "17.37. В равнобедренной трапеции с основаниями AD и BC угол D равен 64°. Диагонал",
      "theory_task": "В равнобедренной трапеции с основаниями AD и BC угол D равен 64°. Диагональ AC образует со стороной СD угол 81°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
      "theory_sol": "Угол C равен 180° − 64°&nbsp;=&nbsp;116°. Он разделён диагональю AC на угол 81° и искомый угол. Поэтому искомый угол равен 116° − 81°&nbsp;=&nbsp;35°. Ответ: 35",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 139.30 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 209.50 L 100.50 166.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 166.50 L 175.50 166.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 166.50 L 203.00 209.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 209.50 L 73.00 209.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 73.00 209.50 L 175.50 166.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"218.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"161.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"162.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"218.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 83°. Диагональ AC образует со стороной СD угол 51°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "46"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 74°. Диагональ AC образует со стороной СD угол 58°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "48"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 76°. Диагональ AC образует со стороной СD угол 49°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "55"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 78°. Диагональ AC образует со стороной СD угол 56°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "46"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 61°. Диагональ AC образует со стороной СD угол 81°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "38"
        }
      ],
      "source": "Рабочая тетрадь, прототип 37"
    },
    {
      "desc": "17.38. В равнобедренной трапеции с основаниями AD и BC угол D равен 78°. Диагонал",
      "theory_task": "В равнобедренной трапеции с основаниями AD и BC угол D равен 78°. Диагональ AC образует со стороной AB угол 32°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
      "theory_sol": "Угол B равен 180° − 78°. В треугольнике ABC угол BAC равен 32°, поэтому угол ACB&nbsp;=&nbsp;180° − (180° − 78°) − 32°&nbsp;=&nbsp;46°. Ответ: 46",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47.00 296.30 179.74 96.20\" width=\"310\" height=\"165.92\" style=\"max-width:100%;display:block;overflow:visible\"><path d=\"M 73.00 366.50 L 100.50 323.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 100.50 323.50 L 175.50 323.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 175.50 323.50 L 203.00 366.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 203.00 366.50 L 73.00 366.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M 73.00 366.50 L 175.50 323.50\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.25\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"61.00\" y=\"375.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">A</text><text x=\"93.50\" y=\"318.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">B</text><text x=\"179.50\" y=\"319.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">C</text><text x=\"207.00\" y=\"375.50\" font-size=\"9.50\" font-family=\"Georgia, Times New Roman, serif\" fill=\"#111827\">D</text></svg></div>",
      "tasks": [
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 74°. Диагональ AC образует со стороной AB угол 21°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "53"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 73°. Диагональ AC образует со стороной AB угол 19°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "54"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 80°. Диагональ AC образует со стороной AB угол 30°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "50"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 74°. Диагональ AC образует со стороной AB угол 26°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "48"
        },
        {
          "text": "В равнобедренной трапеции с основаниями AD и BC угол D равен 61°. Диагональ AC образует со стороной AB угол 23°. Сколько градусов составляет угол между этой диагональю и меньшим основанием трапеции?",
          "answer": "38"
        }
      ],
      "source": "Рабочая тетрадь, прототип 38"
    },
    {
      "desc": "17.39. Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найди",
      "theory_task": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 3 и 5.",
      "theory_sol": "Горизонтальная проекция диагонали равна полусумме оснований. При угле 45° высота равна этой проекции: h&nbsp;=&nbsp;(3 + 5) : 2&nbsp;=&nbsp;4. Ответ: 4",
      "svg_code": "<div style=\"width:100%;max-width:310px;margin:5px auto\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 310 178\" width=\"310\" height=\"178\" style=\"display:block;max-width:100%;overflow:visible\"><path d=\"M 45 140 L 101 55 L 208 55 L 266 140 Z\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"45\" y1=\"140\" x2=\"208\" y2=\"55\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M 70 140 A 25 25 0 0 0 67 128\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"45\" y=\"162\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">A</text><text x=\"101\" y=\"46\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">B</text><text x=\"208\" y=\"46\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">C</text><text x=\"274\" y=\"162\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"16\" text-anchor=\"middle\">D</text><text x=\"87\" y=\"133\" fill=\"#111827\" font-family=\"Georgia,serif\" font-size=\"14\" text-anchor=\"middle\">45°</text><line x1=\"71\" y1=\"99\" x2=\"82\" y2=\"107\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><line x1=\"231\" y1=\"108\" x2=\"241\" y2=\"100\" stroke=\"#111827\" stroke-width=\"2.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg></div>",
      "tasks": [
        {
          "text": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 2 и 7.",
          "answer": "4,5"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 3 и 9.",
          "answer": "6"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 2 и 5.",
          "answer": "3,5"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 3 и 10.",
          "answer": "6,5"
        },
        {
          "text": "Диагональ равнобедренной трапеции образует с её основанием угол 45°. Найдите высоту трапеции, если её основания равны 4 и 9.",
          "answer": "6,5"
        }
      ],
      "source": "Рабочая тетрадь, прототип 39"
    }
  ]
};
  window.database[17] = data;
  window.database["task17"] = data;
})();
