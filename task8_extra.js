(function(){
    window.extraDatabase = window.extraDatabase || {};

    const task8Extra = {
    "title": "Дополнительно",
    "source": "Дополнительный прототип из файла «допы8.pdf», отсутствующий как отдельный тип в основном сборнике задания 8.",
    "prototypes": [
        {
            "desc": "8.Д1. Произведение и частное квадратных корней со степенями переменных",
            "svg_code": "",
            "theory_task": "Найдите значение выражения \\(\\dfrac{\\sqrt{25a^{9}}\\cdot\\sqrt{16b^{8}}}{\\sqrt{a^{5}b^{8}}}\\) при \\(a=4\\) и \\(b=7\\).",
            "theory_sol": "Объединим корни: \\(\\dfrac{\\sqrt{25a^9}\\cdot\\sqrt{16b^8}}{\\sqrt{a^5b^8}}=\\sqrt{\\dfrac{25a^9\\cdot16b^8}{a^5b^8}}=\\sqrt{400a^4}=20a^2\\). При \\(a=4\\) получаем \\(20\\cdot16=320\\).<br><br><b>Ответ:</b> 320",
            "tasks": [
                {
                    "text": "Найдите значение выражения \\(\\dfrac{\\sqrt{9a^{11}}\\cdot\\sqrt{25b^{6}}}{\\sqrt{a^{7}b^{6}}}\\) при \\(a=2\\) и \\(b=5\\).",
                    "answer": "60"
                },
                {
                    "text": "Найдите значение выражения \\(\\dfrac{\\sqrt{16a^{13}}\\cdot\\sqrt{9b^{10}}}{\\sqrt{a^{9}b^{10}}}\\) при \\(a=3\\) и \\(b=2\\).",
                    "answer": "108"
                },
                {
                    "text": "Найдите значение выражения \\(\\dfrac{\\sqrt{4a^{15}}\\cdot\\sqrt{49b^{4}}}{\\sqrt{a^{11}b^{4}}}\\) при \\(a=5\\) и \\(b=6\\).",
                    "answer": "350"
                },
                {
                    "text": "Найдите значение выражения \\(\\dfrac{\\sqrt{36a^{9}}\\cdot\\sqrt{25b^{12}}}{\\sqrt{a^{5}b^{12}}}\\) при \\(a=2\\) и \\(b=3\\).",
                    "answer": "120"
                },
                {
                    "text": "Найдите значение выражения \\(\\dfrac{\\sqrt{49a^{17}}\\cdot\\sqrt{4b^{8}}}{\\sqrt{a^{13}b^{8}}}\\) при \\(a=4\\) и \\(b=5\\).",
                    "answer": "224"
                }
            ]
        }
    ]
};

    window.extraDatabase[8] = task8Extra;
    window.extraDatabase['task8'] = task8Extra;
})();
