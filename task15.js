"use strict";
(function(){
    window.database = window.database || {};

    const task15Data = {
    "title": "Задание 15. Треугольники и их элементы",
    "prototypes": [
        {
            "desc": "15.1. Сумма углов треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике два угла равны 28° и 93°. Найдите его третий угол. Ответ дайте в градусах.",
            "theory_sol": "Сумма углов треугольника равна 180°: \\[180^\\circ-28^\\circ-93^\\circ=59^\\circ.\\]<br><br><b>Ответ:</b> 59",
            "tasks": [
                {
                    "text": "В треугольнике два угла равны 27° и 79°. Найдите его третий угол. Ответ дайте в градусах.",
                    "answer": "74"
                },
                {
                    "text": "В треугольнике два угла равны 31° и 94°. Найдите его третий угол. Ответ дайте в градусах.",
                    "answer": "55"
                },
                {
                    "text": "В треугольнике два угла равны 36° и 73°. Найдите его третий угол. Ответ дайте в градусах.",
                    "answer": "71"
                },
                {
                    "text": "В треугольнике два угла равны 38° и 89°. Найдите его третий угол. Ответ дайте в градусах.",
                    "answer": "53"
                },
                {
                    "text": "В треугольнике два угла равны 44° и 67°. Найдите его третий угол. Ответ дайте в градусах.",
                    "answer": "69"
                }
            ]
        },
        {
            "desc": "15.2. Внешний угол треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"235\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 171 120 A 22 22 0 0 0 182 101\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"183\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 97°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
            "theory_sol": "Внутренний и внешний углы при вершине C образуют развёрнутый угол: \\[180^\\circ-97^\\circ=83^\\circ.\\]<br><br><b>Ответ:</b> 83",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 106°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
                    "answer": "74"
                },
                {
                    "text": "В треугольнике ABC угол C равен 115°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
                    "answer": "65"
                },
                {
                    "text": "В треугольнике ABC угол C равен 124°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
                    "answer": "56"
                },
                {
                    "text": "В треугольнике ABC угол C равен 133°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
                    "answer": "47"
                },
                {
                    "text": "В треугольнике ABC угол C равен 157°. Найдите внешний угол при вершине C. Ответ дайте в градусах.",
                    "answer": "23"
                }
            ]
        },
        {
            "desc": "15.3. Острые углы прямоугольного треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "Один из острых углов прямоугольного треугольника равен 18°. Найдите другой острый угол. Ответ дайте в градусах.",
            "theory_sol": "Сумма острых углов прямоугольного треугольника равна 90°: \\[90^\\circ-18^\\circ=72^\\circ.\\]<br><br><b>Ответ:</b> 72",
            "tasks": [
                {
                    "text": "Один из острых углов прямоугольного треугольника равен 21°. Найдите его другой острый угол. Ответ дайте в градусах.",
                    "answer": "69"
                },
                {
                    "text": "Один из острых углов прямоугольного треугольника равен 23°. Найдите его другой острый угол. Ответ дайте в градусах.",
                    "answer": "67"
                },
                {
                    "text": "Один из острых углов прямоугольного треугольника равен 26°. Найдите его другой острый угол. Ответ дайте в градусах.",
                    "answer": "64"
                },
                {
                    "text": "Один из острых углов прямоугольного треугольника равен 34°. Найдите его другой острый угол. Ответ дайте в градусах.",
                    "answer": "56"
                },
                {
                    "text": "Один из острых углов прямоугольного треугольника равен 41°. Найдите его другой острый угол. Ответ дайте в градусах.",
                    "answer": "49"
                }
            ]
        },
        {
            "desc": "15.4. Равнобедренный треугольник: угол при основании",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"50\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"210\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"210\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"87\" y1=\"76\" x2=\"96\" y2=\"85\" stroke=\"#111827\" stroke-width=\"2.4\"/><line x1=\"164\" y1=\"85\" x2=\"173\" y2=\"76\" stroke=\"#111827\" stroke-width=\"2.4\"/><text x=\"36\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"214\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC известно, что AB = BC, ∠ABC = 102°. Найдите угол BCA. Ответ дайте в градусах.",
            "theory_sol": "Так как AB = BC, углы при основании A и C равны: \\[\\angle C=\\frac{180^\\circ-102^\\circ}{2}=39^\\circ.\\]<br><br><b>Ответ:</b> 39",
            "tasks": [
                {
                    "text": "В треугольнике ABC известно, что AB = BC, ∠ABC = 104°. Найдите угол BCA. Ответ дайте в градусах.",
                    "answer": "38"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = BC, ∠ABC = 106°. Найдите угол BCA. Ответ дайте в градусах.",
                    "answer": "37"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = BC, ∠ABC = 108°. Найдите угол BCA. Ответ дайте в градусах.",
                    "answer": "36"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = BC, ∠ABC = 122°. Найдите угол BCA. Ответ дайте в градусах.",
                    "answer": "29"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = BC, ∠ABC = 116°. Найдите угол BCA. Ответ дайте в градусах.",
                    "answer": "32"
                }
            ]
        },
        {
            "desc": "15.5. Внешний угол равнобедренного треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"235\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"90\" y1=\"80\" x2=\"99\" y2=\"89\" stroke=\"#111827\" stroke-width=\"2.4\"/><line x1=\"161\" y1=\"89\" x2=\"170\" y2=\"80\" stroke=\"#111827\" stroke-width=\"2.4\"/><path d=\"M 187 120 A 18 18 0 0 0 198 106\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"201\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 123°. Найдите величину угла ABC. Ответ дайте в градусах.",
            "theory_sol": "Внутренний угол C равен \\(180^\\circ-123^\\circ=57^\\circ\\). Углы при основании равны, поэтому \\(\\angle A=57^\\circ\\). \\[\\angle B=180^\\circ-57^\\circ-57^\\circ=66^\\circ.\\]<br><br><b>Ответ:</b> 66",
            "tasks": [
                {
                    "text": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 107°. Найдите величину угла ABC. Ответ дайте в градусах.",
                    "answer": "34"
                },
                {
                    "text": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 111°. Найдите величину угла ABC. Ответ дайте в градусах.",
                    "answer": "42"
                },
                {
                    "text": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 124°. Найдите величину угла ABC. Ответ дайте в градусах.",
                    "answer": "68"
                },
                {
                    "text": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 129°. Найдите величину угла ABC. Ответ дайте в градусах.",
                    "answer": "78"
                },
                {
                    "text": "В равнобедренном треугольнике ABC с основанием AC внешний угол при вершине C равен 138°. Найдите величину угла ABC. Ответ дайте в градусах.",
                    "answer": "96"
                }
            ]
        },
        {
            "desc": "15.6. Биссектриса угла треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"181\" y2=\"81\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 61 120 A 16 16 0 0 1 67 102\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><path d=\"M 63 116 A 20 20 0 0 1 80 98\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"185\" y=\"78\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">D</text></svg></div>",
            "theory_task": "В треугольнике ABC известно, что угол BAC = 24°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
            "theory_sol": "Биссектриса делит угол BAC на два равных угла: \\[\\angle BAD=24^\\circ:2=12^\\circ.\\]<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "В треугольнике ABC известно, что угол BAC = 26°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
                    "answer": "13"
                },
                {
                    "text": "В треугольнике ABC известно, что угол BAC = 28°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
                    "answer": "14"
                },
                {
                    "text": "В треугольнике ABC известно, что угол BAC = 42°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
                    "answer": "21"
                },
                {
                    "text": "В треугольнике ABC известно, что угол BAC = 46°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
                    "answer": "23"
                },
                {
                    "text": "В треугольнике ABC известно, что угол BAC = 74°, AD — биссектриса. Найдите угол BAD. Ответ дайте в градусах.",
                    "answer": "37"
                }
            ]
        },
        {
            "desc": "15.7. Биссектриса и равные отрезки",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"45\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"45\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"177\" y2=\"77\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 61 120 A 16 16 0 0 1 68 102\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><path d=\"M 63 116 A 20 20 0 0 1 81 98\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><line x1=\"115\" y1=\"88\" x2=\"119\" y2=\"98\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"191\" y1=\"92\" x2=\"184\" y2=\"100\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"40\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"181\" y=\"73\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">K</text></svg></div>",
            "theory_task": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 12° и AK = CK.",
            "theory_sol": "Из AK = CK следует, что треугольник AKC равнобедренный, поэтому \\(\\angle KAC=\\angle ACK=12^\\circ\\). AK — биссектриса, значит \\(\\angle A=24^\\circ\\). \\[\\angle B=180^\\circ-24^\\circ-12^\\circ=144^\\circ.\\]<br><br><b>Ответ:</b> 144",
            "tasks": [
                {
                    "text": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 23° и AK = CK.",
                    "answer": "111"
                },
                {
                    "text": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 20° и AK = CK.",
                    "answer": "120"
                },
                {
                    "text": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 11° и AK = CK.",
                    "answer": "147"
                },
                {
                    "text": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 22° и AK = CK.",
                    "answer": "114"
                },
                {
                    "text": "В треугольнике ABC проведена биссектриса AK. Найдите градусную меру угла B, если ∠C = 18° и AK = CK.",
                    "answer": "126"
                }
            ]
        },
        {
            "desc": "15.8. Высота в остроугольном треугольнике",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"120\" x2=\"138\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"138\" y1=\"120\" x2=\"138\" y2=\"107\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"107\" x2=\"138\" y2=\"107\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"120\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">H</text></svg></div>",
            "theory_task": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 9°. Найдите угол ABH. Ответ дайте в градусах.",
            "theory_sol": "BH перпендикулярна AC, поэтому \\(\\angle AHB=90^\\circ\\). \\[\\angle ABH=90^\\circ-9^\\circ=81^\\circ.\\]<br><br><b>Ответ:</b> 81",
            "tasks": [
                {
                    "text": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 19°. Найдите угол ABH. Ответ дайте в градусах.",
                    "answer": "71"
                },
                {
                    "text": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 28°. Найдите угол ABH. Ответ дайте в градусах.",
                    "answer": "62"
                },
                {
                    "text": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 37°. Найдите угол ABH. Ответ дайте в градусах.",
                    "answer": "53"
                },
                {
                    "text": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 46°. Найдите угол ABH. Ответ дайте в градусах.",
                    "answer": "44"
                },
                {
                    "text": "В остроугольном треугольнике ABC проведена высота BH, ∠BAC = 56°. Найдите угол ABH. Ответ дайте в градусах.",
                    "answer": "34"
                }
            ]
        },
        {
            "desc": "15.9. Медиана треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"132\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"84\" y1=\"114\" x2=\"84\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"176\" y1=\"114\" x2=\"176\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"127\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "В треугольнике ABC известно, что AC = 12, BM — медиана, BM = 11. Найдите AM.",
            "theory_sol": "Медиана делит сторону AC пополам: \\[AM=\\frac{AC}{2}=\\frac{12}{2}=6.\\]<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "В треугольнике ABC известно, что AC = 14, BM — медиана. BM = 11. Найдите AM.",
                    "answer": "7"
                },
                {
                    "text": "В треугольнике ABC известно, что AC = 16, BM — медиана. BM = 12. Найдите AM.",
                    "answer": "8"
                },
                {
                    "text": "В треугольнике ABC известно, что AC = 18, BM — медиана. BM = 13. Найдите AM.",
                    "answer": "9"
                },
                {
                    "text": "В треугольнике ABC известно, что AC = 32, BM — медиана. BM = 14. Найдите AM.",
                    "answer": "16"
                },
                {
                    "text": "В треугольнике ABC известно, что AC = 46, BM — медиана. BM = 15. Найдите AM.",
                    "answer": "23"
                }
            ]
        },
        {
            "desc": "15.10. Средняя линия треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"85\" y1=\"72\" x2=\"171\" y2=\"72\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"62\" y1=\"91\" x2=\"72\" y2=\"99\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"99\" y1=\"49\" x2=\"108\" y2=\"57\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"148\" y1=\"49\" x2=\"157\" y2=\"57\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"190\" y1=\"91\" x2=\"180\" y2=\"99\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"72\" y=\"72\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text><text x=\"176\" y=\"72\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">N</text></svg></div>",
            "theory_task": "Точки M и N — середины сторон AB и BC треугольника ABC. AB = 24, BC = 13, AC = 26. Найдите MN.",
            "theory_sol": "Отрезок MN соединяет середины двух сторон треугольника, поэтому MN — средняя линия: \\[MN=\\frac{AC}{2}=\\frac{26}{2}=13.\\]<br><br><b>Ответ:</b> 13",
            "tasks": [
                {
                    "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна 21, сторона BC равна 22, сторона AC равна 28. Найдите MN.",
                    "answer": "14"
                },
                {
                    "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна 28, сторона BC равна 19, сторона AC равна 34. Найдите MN.",
                    "answer": "17"
                },
                {
                    "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна 31, сторона BC равна 27, сторона AC равна 40. Найдите MN.",
                    "answer": "20"
                },
                {
                    "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна 37, сторона BC равна 33, сторона AC равна 48. Найдите MN.",
                    "answer": "24"
                },
                {
                    "text": "Точки M и N являются серединами сторон AB и BC треугольника ABC, сторона AB равна 30, сторона BC равна 41, сторона AC равна 52. Найдите MN.",
                    "answer": "26"
                }
            ]
        },
        {
            "desc": "15.11. Медиана и равные отрезки",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"132\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"79\" y1=\"114\" x2=\"79\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"176\" y1=\"114\" x2=\"176\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"123\" y1=\"72\" x2=\"133\" y2=\"73\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"127\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 66° и BM = AM = MC.",
            "theory_sol": "Из BM = AM = MC следует, что точка M равноудалена от A, B и C. Значит, AC — диаметр описанной окружности, \\(\\angle B=90^\\circ\\). \\[\\angle A=180^\\circ-90^\\circ-65^\\circ=25^\\circ.\\]<br><br><b>Ответ:</b> 25",
            "tasks": [
                {
                    "text": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 68° и BM = AM = MC.",
                    "answer": "22"
                },
                {
                    "text": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 71° и BM = AM = MC.",
                    "answer": "19"
                },
                {
                    "text": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 51° и BM = AM = MC.",
                    "answer": "39"
                },
                {
                    "text": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 61° и BM = AM = MC.",
                    "answer": "29"
                },
                {
                    "text": "В треугольнике ABC проведена медиана BM. Найдите градусную меру угла A, если ∠C = 57° и BM = AM = MC.",
                    "answer": "33"
                }
            ]
        },
        {
            "desc": "15.12. Медиана равностороннего треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"92\" y1=\"114\" x2=\"92\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"168\" y1=\"114\" x2=\"168\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Медиана равностороннего треугольника равна $10\\sqrt{3}$. Найдите сторону этого треугольника.",
            "theory_sol": "В равностороннем треугольнике медиана также является высотой: \\[BM=\\frac{AC\\sqrt3}{2},\\quad 10\\sqrt3=\\frac{AC\\sqrt3}{2},\\quad AC=20.\\]<br><br><b>Ответ:</b> 20",
            "tasks": [
                {
                    "text": "Медиана равностороннего треугольника равна 11√3. Найдите сторону этого треугольника.",
                    "answer": "22"
                },
                {
                    "text": "Медиана равностороннего треугольника равна 12√3. Найдите сторону этого треугольника.",
                    "answer": "24"
                },
                {
                    "text": "Медиана равностороннего треугольника равна 13√3. Найдите сторону этого треугольника.",
                    "answer": "26"
                },
                {
                    "text": "Медиана равностороннего треугольника равна 15√3. Найдите сторону этого треугольника.",
                    "answer": "30"
                },
                {
                    "text": "Медиана равностороннего треугольника равна 17√3. Найдите сторону этого треугольника.",
                    "answer": "34"
                }
            ]
        },
        {
            "desc": "15.13. Биссектриса равностороннего треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 120 49 A 18 18 0 0 1 130 60\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><path d=\"M 140 49 A 18 18 0 0 0 130 60\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Биссектриса равностороннего треугольника равна $11\\sqrt{3}$. Найдите сторону этого треугольника.",
            "theory_sol": "В равностороннем треугольнике биссектриса также является высотой и медианой: \\[BM=\\frac{AC\\sqrt3}{2},\\quad 11\\sqrt3=\\frac{AC\\sqrt3}{2},\\quad AC=22.\\]<br><br><b>Ответ:</b> 22",
            "tasks": [
                {
                    "text": "Биссектриса равностороннего треугольника равна 9√3. Найдите сторону этого треугольника.",
                    "answer": "18"
                },
                {
                    "text": "Биссектриса равностороннего треугольника равна 13√3. Найдите сторону этого треугольника.",
                    "answer": "26"
                },
                {
                    "text": "Биссектриса равностороннего треугольника равна 10√3. Найдите сторону этого треугольника.",
                    "answer": "20"
                },
                {
                    "text": "Биссектриса равностороннего треугольника равна 14√3. Найдите сторону этого треугольника.",
                    "answer": "28"
                },
                {
                    "text": "Биссектриса равностороннего треугольника равна 16√3. Найдите сторону этого треугольника.",
                    "answer": "32"
                }
            ]
        },
        {
            "desc": "15.14. Высота равностороннего треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"120\" x2=\"142\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"142\" y1=\"120\" x2=\"142\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"108\" x2=\"142\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Высота равностороннего треугольника равна $11\\sqrt{3}$. Найдите сторону этого треугольника.",
            "theory_sol": "В равностороннем треугольнике высота также является медианой и биссектрисой: \\[BM=\\frac{AC\\sqrt3}{2},\\quad 11\\sqrt3=\\frac{AC\\sqrt3}{2},\\quad AC=22.\\]<br><br><b>Ответ:</b> 22",
            "tasks": [
                {
                    "text": "Высота равностороннего треугольника равна 9√3. Найдите сторону этого треугольника.",
                    "answer": "18"
                },
                {
                    "text": "Высота равностороннего треугольника равна 13√3. Найдите сторону этого треугольника.",
                    "answer": "26"
                },
                {
                    "text": "Высота равностороннего треугольника равна 15√3. Найдите сторону этого треугольника.",
                    "answer": "30"
                },
                {
                    "text": "Высота равностороннего треугольника равна 6√3. Найдите сторону этого треугольника.",
                    "answer": "12"
                },
                {
                    "text": "Высота равностороннего треугольника равна 18√3. Найдите сторону этого треугольника.",
                    "answer": "36"
                }
            ]
        },
        {
            "desc": "15.15. Биссектриса равностороннего треугольника по стороне",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><path d=\"M 120 49 A 18 18 0 0 1 130 60\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><path d=\"M 140 49 A 18 18 0 0 0 130 60\" fill=\"none\" stroke=\"#111827\" stroke-width=\"1.8\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Сторона равностороннего треугольника равна $10\\sqrt{3}$. Найдите биссектрису этого треугольника.",
            "theory_sol": "В равностороннем треугольнике биссектриса, медиана и высота совпадают. \\[BM=\\frac{AC\\sqrt3}{2}=\\frac{10\\sqrt3\\cdot\\sqrt3}{2}=15.\\]<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Сторона равностороннего треугольника равна 12√3. Найдите биссектрису этого треугольника.",
                    "answer": "18"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 14√3. Найдите биссектрису этого треугольника.",
                    "answer": "21"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 16√3. Найдите биссектрису этого треугольника.",
                    "answer": "24"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 18√3. Найдите биссектрису этого треугольника.",
                    "answer": "27"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 20√3. Найдите биссектрису этого треугольника.",
                    "answer": "30"
                }
            ]
        },
        {
            "desc": "15.16. Медиана равностороннего треугольника по стороне",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"92\" y1=\"114\" x2=\"92\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><line x1=\"168\" y1=\"114\" x2=\"168\" y2=\"126\" stroke=\"#111827\" stroke-width=\"2.1\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Сторона равностороннего треугольника равна $10\\sqrt{3}$. Найдите медиану этого треугольника.",
            "theory_sol": "В равностороннем треугольнике биссектриса, медиана и высота совпадают. \\[BM=\\frac{AC\\sqrt3}{2}=\\frac{10\\sqrt3\\cdot\\sqrt3}{2}=15.\\]<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Сторона равностороннего треугольника равна 12√3. Найдите медиану этого треугольника.",
                    "answer": "18"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 14√3. Найдите медиану этого треугольника.",
                    "answer": "21"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 16√3. Найдите медиану этого треугольника.",
                    "answer": "24"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 18√3. Найдите медиану этого треугольника.",
                    "answer": "27"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 20√3. Найдите медиану этого треугольника.",
                    "answer": "30"
                }
            ]
        },
        {
            "desc": "15.17. Высота равностороннего треугольника по стороне",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"55\" y1=\"120\" x2=\"130\" y2=\"35\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"55\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"120\" x2=\"142\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"142\" y1=\"120\" x2=\"142\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"130\" y1=\"108\" x2=\"142\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"41\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"126\" y=\"30\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"209\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text><text x=\"125\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">M</text></svg></div>",
            "theory_task": "Сторона равностороннего треугольника равна $10\\sqrt{3}$. Найдите высоту этого треугольника.",
            "theory_sol": "В равностороннем треугольнике биссектриса, медиана и высота совпадают. \\[BM=\\frac{AC\\sqrt3}{2}=\\frac{10\\sqrt3\\cdot\\sqrt3}{2}=15.\\]<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Сторона равностороннего треугольника равна 12√3. Найдите высоту этого треугольника.",
                    "answer": "18"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 14√3. Найдите высоту этого треугольника.",
                    "answer": "21"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 16√3. Найдите высоту этого треугольника.",
                    "answer": "24"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 18√3. Найдите высоту этого треугольника.",
                    "answer": "27"
                },
                {
                    "text": "Сторона равностороннего треугольника равна 20√3. Найдите высоту этого треугольника.",
                    "answer": "30"
                }
            ]
        },
        {
            "desc": "15.18. Площадь прямоугольного треугольника",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "Два катета прямоугольного треугольника равны 4 и 9. Найдите площадь этого треугольника.",
            "theory_sol": "Площадь прямоугольного треугольника равна половине произведения катетов: \\[S=\\frac{4\\cdot9}{2}=18.\\]<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Два катета прямоугольного треугольника равны 4 и 10. Найдите площадь этого треугольника.",
                    "answer": "20"
                },
                {
                    "text": "Два катета прямоугольного треугольника равны 4 и 11. Найдите площадь этого треугольника.",
                    "answer": "22"
                },
                {
                    "text": "Два катета прямоугольного треугольника равны 6 и 7. Найдите площадь этого треугольника.",
                    "answer": "21"
                },
                {
                    "text": "Два катета прямоугольного треугольника равны 6 и 13. Найдите площадь этого треугольника.",
                    "answer": "39"
                },
                {
                    "text": "Два катета прямоугольного треугольника равны 8 и 15. Найдите площадь этого треугольника.",
                    "answer": "60"
                }
            ]
        },
        {
            "desc": "15.19. Площадь по стороне и высоте",
            "svg_code": "",
            "theory_task": "Сторона треугольника равна 8, а высота, проведённая к этой стороне, равна 31. Найдите площадь треугольника.",
            "theory_sol": "Площадь треугольника равна половине произведения стороны на проведённую к ней высоту: \\[S=\\frac{8\\cdot31}{2}=124.\\]<br><br><b>Ответ:</b> 124",
            "tasks": [
                {
                    "text": "Сторона треугольника равна 12, а высота, проведённая к этой стороне, равна 33. Найдите площадь этого треугольника.",
                    "answer": "198"
                },
                {
                    "text": "Сторона треугольника равна 14, а высота, проведённая к этой стороне, равна 23. Найдите площадь этого треугольника.",
                    "answer": "161"
                },
                {
                    "text": "Сторона треугольника равна 14, а высота, проведённая к этой стороне, равна 31. Найдите площадь этого треугольника.",
                    "answer": "217"
                },
                {
                    "text": "Сторона треугольника равна 16, а высота, проведённая к этой стороне, равна 19. Найдите площадь этого треугольника.",
                    "answer": "152"
                },
                {
                    "text": "Сторона треугольника равна 18, а высота, проведённая к этой стороне, равна 25. Найдите площадь этого треугольника.",
                    "answer": "225"
                }
            ]
        },
        {
            "desc": "15.20. Площадь по двум сторонам и синусу угла",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"125\" y1=\"25\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"121\" y=\"20\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"224\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC известно: AB = 6, BC = 10, sin ∠ABC = \\(\\frac{1}{3}\\). Найдите площадь треугольника ABC.",
            "theory_sol": "Используем формулу площади по двум сторонам и синусу угла между ними: \\[S=\\frac{AB\\cdot BC\\cdot\\sin B}{2}=\\frac{6\\cdot10\\cdot\\frac13}{2}=10.\\]<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "В треугольнике ABC известно, что AB = 6, BC = 12, sin ∠ABC = \\(\\frac{1}{4}\\). Найдите площадь треугольника ABC.",
                    "answer": "9"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = 9, BC = 16, sin ∠ABC = \\(\\frac{7}{12}\\). Найдите площадь треугольника ABC.",
                    "answer": "42"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = 12, BC = 10, sin ∠ABC = \\(\\frac{8}{15}\\). Найдите площадь треугольника ABC.",
                    "answer": "32"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = 12, BC = 15, sin ∠ABC = \\(\\frac{4}{9}\\). Найдите площадь треугольника ABC.",
                    "answer": "40"
                },
                {
                    "text": "В треугольнике ABC известно, что AB = 10, BC = 18, sin ∠ABC = \\(\\frac{2}{5}\\). Найдите площадь треугольника ABC.",
                    "answer": "36"
                }
            ]
        },
        {
            "desc": "15.21. Теорема Пифагора: гипотенуза",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "Катеты прямоугольного треугольника равны 7 и 24. Найдите гипотенузу этого треугольника.",
            "theory_sol": "По теореме Пифагора: \\[c^2=7^2+24^2=625,\\quad c=25.\\]<br><br><b>Ответ:</b> 25",
            "tasks": [
                {
                    "text": "Катеты прямоугольного треугольника равны 8 и 15. Найдите гипотенузу этого треугольника.",
                    "answer": "17"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны 10 и 24. Найдите гипотенузу этого треугольника.",
                    "answer": "26"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны 12 и 5. Найдите гипотенузу этого треугольника.",
                    "answer": "13"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны 12 и 16. Найдите гипотенузу этого треугольника.",
                    "answer": "20"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны 9 и 40. Найдите гипотенузу этого треугольника.",
                    "answer": "41"
                }
            ]
        },
        {
            "desc": "15.22. Теорема Пифагора: катет",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В прямоугольном треугольнике катет 5, гипотенуза 13. Найдите другой катет.",
            "theory_sol": "По теореме Пифагора: \\[b^2=13^2-5^2=144,\\quad b=12.\\]<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "В прямоугольном треугольнике катет и гипотенуза равны 8 и 17 соответственно. Найдите другой катет.",
                    "answer": "15"
                },
                {
                    "text": "В прямоугольном треугольнике катет и гипотенуза равны 7 и 25 соответственно. Найдите другой катет.",
                    "answer": "24"
                },
                {
                    "text": "В прямоугольном треугольнике катет и гипотенуза равны 9 и 15 соответственно. Найдите другой катет.",
                    "answer": "12"
                },
                {
                    "text": "В прямоугольном треугольнике катет и гипотенуза равны 9 и 41 соответственно. Найдите другой катет.",
                    "answer": "40"
                },
                {
                    "text": "В прямоугольном треугольнике катет и гипотенуза равны 12 и 37 соответственно. Найдите другой катет.",
                    "answer": "35"
                }
            ]
        },
        {
            "desc": "15.23. Синус острого угла",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, AC = 4, AB = 5. Найдите sin B.",
            "theory_sol": "Для угла B противолежащий катет — AC, гипотенуза — AB. \\[\\sin B=\\frac{AC}{AB}=\\frac45=0{,}8.\\]<br><br><b>Ответ:</b> 0,8",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, AC = 6, AB = 10. Найдите sin B.",
                    "answer": "0,6"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, AC = 6, AB = 20. Найдите sin B.",
                    "answer": "0,3"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, AC = 7, AB = 25. Найдите sin B.",
                    "answer": "0,28"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, AC = 8, AB = 40. Найдите sin B.",
                    "answer": "0,2"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, AC = 16, AB = 20. Найдите sin B.",
                    "answer": "0,8"
                }
            ]
        },
        {
            "desc": "15.24. Косинус острого угла",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, BC = 7, AB = 20. Найдите cos B.",
            "theory_sol": "Для угла B прилежащий катет — BC, гипотенуза — AB. \\[\\cos B=\\frac{BC}{AB}=\\frac7{20}=0{,}35.\\]<br><br><b>Ответ:</b> 0,35",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 3, AB = 5. Найдите cos B.",
                    "answer": "0,6"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 8, AB = 10. Найдите cos B.",
                    "answer": "0,8"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 9, AB = 20. Найдите cos B.",
                    "answer": "0,45"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 14, AB = 20. Найдите cos B.",
                    "answer": "0,7"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 24, AB = 25. Найдите cos B.",
                    "answer": "0,96"
                }
            ]
        },
        {
            "desc": "15.25. Тангенс острого угла",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, BC = 5, AC = 3. Найдите tg B.",
            "theory_sol": "Для угла B противолежащий катет — AC, прилежащий — BC. \\[\\operatorname{tg}B=\\frac{AC}{BC}=\\frac35=0{,}6.\\]<br><br><b>Ответ:</b> 0,6",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 3, AC = 18. Найдите tg B.",
                    "answer": "6"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 4, AC = 28. Найдите tg B.",
                    "answer": "7"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 5, AC = 2. Найдите tg B.",
                    "answer": "0,4"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 10, AC = 7. Найдите tg B.",
                    "answer": "0,7"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, BC = 15, AC = 12. Найдите tg B.",
                    "answer": "0,8"
                }
            ]
        },
        {
            "desc": "15.26. Катет по синусу",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{3}{7}\\), AB = 21. Найдите AC.",
            "theory_sol": "Для угла B противолежащий катет — AC: \\[AC=AB\\cdot\\sin B=21\\cdot\\frac37=9.\\]<br><br><b>Ответ:</b> 9",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{3}{5}\\), AB = 10. Найдите AC.",
                    "answer": "6"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{5}{8}\\), AB = 16. Найдите AC.",
                    "answer": "10"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{4}{9}\\), AB = 18. Найдите AC.",
                    "answer": "8"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{7}{20}\\), AB = 40. Найдите AC.",
                    "answer": "14"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, sin B = \\(\\frac{2}{3}\\), AB = 18. Найдите AC.",
                    "answer": "12"
                }
            ]
        },
        {
            "desc": "15.27. Катет по косинусу",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{2}{5}\\), AB = 10. Найдите BC.",
            "theory_sol": "Для угла B прилежащий катет — BC: \\[BC=AB\\cdot\\cos B=10\\cdot\\frac25=4.\\]<br><br><b>Ответ:</b> 4",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{5}{6}\\), AB = 18. Найдите BC.",
                    "answer": "15"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{4}{7}\\), AB = 21. Найдите BC.",
                    "answer": "12"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{7}{9}\\), AB = 54. Найдите BC.",
                    "answer": "42"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{9}{10}\\), AB = 60. Найдите BC.",
                    "answer": "54"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, cos B = \\(\\frac{3}{4}\\), AB = 20. Найдите BC.",
                    "answer": "15"
                }
            ]
        },
        {
            "desc": "15.28. Катет по тангенсу",
            "svg_code": "<div style=\"width:100%;max-width:290px;margin:4px auto;\"><svg viewBox=\"0 0 260 150\" style=\"display:block;width:100%;height:auto;overflow:visible\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"45\" y1=\"120\" x2=\"200\" y2=\"30\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"120\" x2=\"188\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><line x1=\"188\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#111827\" stroke-width=\"2\"/><text x=\"31\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">A</text><text x=\"204\" y=\"26\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">B</text><text x=\"204\" y=\"140\" font-size=\"15\" font-family=\"serif\" fill=\"#111827\">C</text></svg></div>",
            "theory_task": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{3}{4}\\), BC = 12. Найдите AC.",
            "theory_sol": "Для угла B противолежащий катет — AC, прилежащий — BC: \\[AC=BC\\cdot\\operatorname{tg}B=12\\cdot\\frac34=9.\\]<br><br><b>Ответ:</b> 9",
            "tasks": [
                {
                    "text": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{3}{5}\\), BC = 30. Найдите AC.",
                    "answer": "18"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{4}{7}\\), BC = 35. Найдите AC.",
                    "answer": "20"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{5}{9}\\), BC = 27. Найдите AC.",
                    "answer": "15"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{7}{4}\\), BC = 36. Найдите AC.",
                    "answer": "63"
                },
                {
                    "text": "В треугольнике ABC угол C равен 90°, tg B = \\(\\frac{2}{3}\\), BC = 21. Найдите AC.",
                    "answer": "14"
                }
            ]
        }
    ]
};


    function normalizeTask15Text(value){
        return String(value).replace(/(\d+)√(\d+)/g, '$$$1\sqrt{$2}$$');
    }
    function normalizeTask15Block(db){
        db.prototypes.forEach(p=>{
            p.desc = normalizeTask15Text(p.desc);
            p.theory_task = normalizeTask15Text(p.theory_task);
            p.theory_sol = normalizeTask15Text(p.theory_sol);
            (p.tasks||[]).forEach(t=>{ t.text = normalizeTask15Text(t.text); });
        });
    }
    normalizeTask15Block(task15Data);
    window.database[15] = task15Data;
    window.database["task15"] = task15Data;
})();
