const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const context = vm.createContext({window:{database:{},extraDatabase:{}}});
for (const filename of ['task7.js','task7_extra.js']) vm.runInContext(fs.readFileSync(path.join(root,filename),'utf8'),context,{filename});
const bank = context.window.database.task7;
const extraBank = context.window.extraDatabase.task7;

// Independently transcribed from the supplied «Задание 7.pdf», trainer pages 7–21.
// Keep source wording and options together so signs, decimal digits and ordering
// cannot drift while the answer keys happen to stay unchanged.
const workbookQuestions = [
    "На координатной прямой отмечено число a. Какое из утверждений для этого числа является верным? 1) 4-a>0; 2) a-8>0; 3) a-7<0; 4) a-6>0;",
    "На координатной прямой отмечено число a. Какое из утверждений для этого числа является верным? 1) a-5>0; 2) 4-a>0; 3) a-3>0; 4) 2-a>0;",
    "На координатной прямой отмечено число a. Какое из утверждений для этого числа является верным? 1) a-6<0; 2) a-7>0; 3) 6-a>0; 4) 8-a<0;",
    "На координатной прямой отмечено число a. Какое из утверждений для этого числа является верным? 1) a-4<0; 2) a-7>0; 3) 6-a<0; 4) 4-a>0;",
    "На координатной прямой отмечено число a. Какое из утверждений для этого числа является верным? 1) 8-a<0; 2) a-8>0; 3) 7-a>0; 4) 6-a<0;",
    "На координатной прямой отмечены числа x и y. Какое из приведённых утверждений для этих чисел верно? 1) x²y<0; 2) xy>0; 3) x+y<0; 4) y-x>0;",
    "На координатной прямой отмечены числа x и y. Какое из приведённых утверждений для этих чисел верно? 1) x²y>0; 2) x+y<0; 3) xy²<0; 4) y-x>0;",
    "На координатной прямой отмечены числа x и y. Какое из приведённых утверждений для этих чисел верно? 1) xy>0; 2) x²y<0; 3) x-y<0; 4) x+y>0;",
    "На координатной прямой отмечены числа x и y. Какое из приведённых утверждений для этих чисел верно? 1) x+y>0; 2) xy>0; 3) x-y>0; 4) y-x<0;",
    "На координатной прямой отмечены числа x и y. Какое из приведённых утверждений для этих чисел верно? 1) xy<0; 2) x+y<0; 3) x-y>0; 4) y-x>0;",
    "На координатной прямой отмечены числа a и b. Какое из следующих неравенств верно? 1) a+b<0; 2) ab<0; 3) ab²>0; 4) b-a<0;",
    "На координатной прямой отмечены числа a и b. Какое из следующих неравенств верно? 1) ab>0; 2) a-b<0; 3) ab²>0; 4) a+b<0;",
    "На координатной прямой отмечены числа a и b. Какое из следующих неравенств верно? 1) a²b<0; 2) ab<0; 3) b-a<0; 4) a+b>0;",
    "На координатной прямой отмечены числа a и b. Какое из следующих неравенств верно? 1) ab>0; 2) a-b>0; 3) a+b<0; 4) ab²<0;",
    "На координатной прямой отмечены числа a и b. Какое из следующих неравенств верно? 1) a-b>0; 2) ab²<0; 3) ab>0; 4) a+b<0;",
    "На координатной прямой отмечены числа a, b и c. Какая из разностей b-a, c-b, c-a положительна? 1) b-a; 2) c-b; 3) c-a; 4) ни одна из них;",
    "На координатной прямой отмечены числа p, q и r. Какая из разностей q-p, q-r, r-p положительна? 1) q-p; 2) q-r; 3) r-p; 4) ни одна из них;",
    "На координатной прямой отмечены числа x, y и z. Какая из разностей z-x, x-y, z-y положительна? 1) z-x; 2) x-y; 3) z-y; 4) ни одна из них;",
    "На координатной прямой отмечены числа a, b и c. Какая из разностей a-b, a-c, c-b положительна? 1) c-b; 2) a-c; 3) a-b; 4) ни одна из них;",
    "На координатной прямой отмечены числа p, q и r. Какая из разностей q-p, q-r, r-p положительна? 1) q-r; 2) r-p; 3) q-p; 4) ни одна из них;",
    "На координатной прямой отмечены числа p, q и r. Какая из разностей p-r, p-q, r-q отрицательна? 1) p-q; 2) r-q; 3) p-r; 4) ни одна из них;",
    "На координатной прямой отмечены числа x, y и z. Какая из разностей z-x, z-y, y-x отрицательна? 1) z-y; 2) y-x; 3) z-x; 4) ни одна из них;",
    "На координатной прямой отмечены числа p, q и r. Какая из разностей q-p, r-q, p-r отрицательна? 1) p-r; 2) r-q; 3) q-p; 4) ни одна из них;",
    "На координатной прямой отмечены числа x, y и z. Какая из разностей z-x, y-z, x-y отрицательна? 1) x-y; 2) y-z; 3) z-x; 4) ни одна из них;",
    "На координатной прямой отмечены числа x, y и z. Какая из разностей y-x, x-z, z-y отрицательна? 1) y-x; 2) x-z; 3) z-y; 4) ни одна из них;",
    "На координатной прямой отмечены точки A, B, C, D. Одна из них соответствует числу 100/21. Какая это точка? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой отмечены точки A, B, C, D. Одна из них соответствует числу 63/11. Какая это точка? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой отмечены точки A, B, C, D. Одна из них соответствует числу 132/17. Какая это точка? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой отмечены точки A, B, C, D. Одна из них соответствует числу 92/9. Какая это точка? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой отмечены точки A, B, C, D. Одна из них соответствует числу 80/11. Какая это точка? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой точки A, B, C и D соответствуют числам 0,0137; 0,103; 0,03; 0,021. Какой точке соответствует число 0,03? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой точки A, B, C и D соответствуют числам 0,098; −0,02; 0,09; 0,11. Какой точке соответствует число 0,09? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой точки A, B, C и D соответствуют числам 0,271; −0,112; 0,041; −0,267. Какой точке соответствует число 0,271? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой точки A, B, C и D соответствуют числам 0,29; −0,02; 0,109; 0,013. Какой точке соответствует число 0,109? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "На координатной прямой точки A, B, C и D соответствуют числам −0,032; 0,023; 0,302; −0,203. Какой точке соответствует число −0,203? 1) точка A; 2) точка B; 3) точка C; 4) точка D;",
    "Одно из чисел 41/13, 48/13, 55/13 и 62/13 отмечено на числовой прямой точкой A. Какое это число? 1) 41/13; 2) 48/13; 3) 55/13; 4) 62/13;",
    "Одно из чисел 58/13, 69/13, 76/13 и 83/13 отмечено на числовой прямой точкой A. Какое это число? 1) 58/13; 2) 69/13; 3) 76/13; 4) 83/13;",
    "Одно из чисел 2/13, 7/13, 9/13 и 11/13 отмечено на числовой прямой точкой A. Какое это число? 1) 2/13; 2) 7/13; 3) 9/13; 4) 11/13;",
    "Одно из чисел 6/11, 9/11, 13/11 и 14/11 отмечено на числовой прямой точкой A. Какое это число? 1) 6/11; 2) 9/11; 3) 13/11; 4) 14/11;",
    "Одно из чисел 33/7, 37/7, 41/7 и 43/7 отмечено на числовой прямой точкой A. Какое это число? 1) 33/7; 2) 37/7; 3) 41/7; 4) 43/7;",
    "Одно из чисел 6/23, 7/23, 11/23 и 12/23 отмечено на числовой прямой точкой A. Какое это число? 1) 6/23; 2) 7/23; 3) 11/23; 4) 12/23;",
    "Одно из чисел 10/17, 11/17, 13/17 и 14/17 отмечено на числовой прямой точкой A. Какое это число? 1) 10/17; 2) 11/17; 3) 13/17; 4) 14/17;",
    "Одно из чисел 3/17, 4/17, 8/17 и 14/17 отмечено на числовой прямой точкой A. Какое это число? 1) 3/17; 2) 4/17; 3) 8/17; 4) 14/17;",
    "Одно из чисел 2/17, 4/17, 8/17 и 9/17 отмечено на числовой прямой точкой A. Какое это число? 1) 2/17; 2) 4/17; 3) 8/17; 4) 9/17;",
    "Одно из чисел 3/11, 7/11, 8/11 и 13/11 отмечено на числовой прямой точкой A. Какое это число? 1) 3/11; 2) 7/11; 3) 8/11; 4) 13/11;",
    "Какое из чисел 68/13, 79/13, 82/13 и 89/13 принадлежит отрезку [5; 6]? 1) 68/13; 2) 79/13; 3) 82/13; 4) 89/13;",
    "Какое из чисел 69/11, 80/11, 90/11 и 92/11 принадлежит отрезку [7; 8]? 1) 69/11; 2) 80/11; 3) 90/11; 4) 92/11;",
    "Какое из чисел 58/9, 62/9, 70/9 и 79/9 принадлежит отрезку [7; 8]? 1) 58/9; 2) 62/9; 3) 70/9; 4) 79/9;",
    "Какое из чисел 49/15, 52/15, 58/15 и 71/15 принадлежит отрезку [4; 5]? 1) 49/15; 2) 52/15; 3) 58/15; 4) 71/15;",
    "Какое из чисел 45/19, 52/19, 68/19 и 77/19 принадлежит отрезку [3; 4]? 1) 45/19; 2) 52/19; 3) 68/19; 4) 77/19;",
    "Между какими целыми числами заключено число 172/15? 1) 9 и 10; 2) 10 и 11; 3) 11 и 12; 4) 12 и 13;",
    "Между какими целыми числами заключено число 110/13? 1) 8 и 9; 2) 9 и 10; 3) 10 и 11; 4) 11 и 12;",
    "Между какими целыми числами заключено число 124/15? 1) 8 и 9; 2) 9 и 10; 3) 10 и 11; 4) 11 и 12;",
    "Между какими целыми числами заключено число 130/11? 1) 10 и 11; 2) 11 и 12; 3) 12 и 13; 4) 13 и 14;",
    "Между какими целыми числами заключено число 131/12? 1) 10 и 11; 2) 11 и 12; 3) 12 и 13; 4) 13 и 14;",
    "Какое из следующих чисел заключено между числами 17/15 и 16/13? 1) 1,2; 2) 1,3; 3) 1,4; 4) 1,5;",
    "Какое из следующих чисел заключено между числами 2/17 и 4/19? 1) 0; 2) 0,1; 3) 0,2; 4) 0,3;",
    "Какое из следующих чисел заключено между числами 8/11 и 14/17? 1) 0,6; 2) 0,7; 3) 0,8; 4) 0,9;",
    "Какое из следующих чисел заключено между числами 15/11 и 13/9? 1) 1,4; 2) 1,5; 3) 1,6; 4) 1,7;",
    "Какое из следующих чисел заключено между числами 8/13 и 12/17? 1) 0,6; 2) 0,7; 3) 0,8; 4) 0,9;",
    "Какому из данных промежутков принадлежит число 5/7? 1) [0,5; 0,6]; 2) [0,6; 0,7]; 3) [0,7; 0,8]; 4) [0,8; 0,9];",
    "Какому из данных промежутков принадлежит число 5/9? 1) [0,5; 0,6]; 2) [0,6; 0,7]; 3) [0,7; 0,8]; 4) [0,8; 0,9];",
    "Какому из данных промежутков принадлежит число 7/9? 1) [0,5; 0,6]; 2) [0,6; 0,7]; 3) [0,7; 0,8]; 4) [0,8; 0,9];",
    "Какому из данных промежутков принадлежит число 3/11? 1) [0,1; 0,2]; 2) [0,2; 0,3]; 3) [0,3; 0,4]; 4) [0,4; 0,5];",
    "Какому из данных промежутков принадлежит число 5/11? 1) [0,2; 0,3]; 2) [0,3; 0,4]; 3) [0,4; 0,5]; 4) [0,5; 0,6];",
    "Какое из чисел √6, √7, √35, √42 принадлежит промежутку [6; 7]? 1) √6; 2) √7; 3) √35; 4) √42;",
    "Какое из чисел √5, √6, √28, √41 принадлежит промежутку [5; 6]? 1) √5; 2) √6; 3) √28; 4) √41;",
    "Какое из чисел √5, √6, √27, √37 принадлежит промежутку [5; 6]? 1) √5; 2) √6; 3) √27; 4) √37;",
    "Какое из чисел √6, √7, √40, √51 принадлежит промежутку [6; 7]? 1) √6; 2) √7; 3) √40; 4) √51;",
    "Какое из чисел √6, √7, √46, √55 принадлежит промежутку [6; 7]? 1) √6; 2) √7; 3) √46; 4) √55;",
    "Между какими целыми числами заключено число √57? 1) 3 и 4; 2) 7 и 8; 3) 28 и 29; 4) 56 и 58;",
    "Между какими целыми числами заключено число √58? 1) 19 и 21; 2) 57 и 59; 3) 3 и 4; 4) 7 и 8;",
    "Между какими целыми числами заключено число √28? 1) 5 и 6; 2) 2 и 3; 3) 10 и 12; 4) 27 и 29;",
    "Между какими целыми числами заключено число √30? 1) 11 и 13; 2) 5 и 6; 3) 2 и 3; 4) 29 и 31;",
    "Между какими целыми числами заключено число √89? 1) 4 и 5; 2) 29 и 31; 3) 9 и 10; 4) 88 и 90;"
];

// PDF answer page 22, grouped by prototype (five tasks per group).
const workbookAnswers = ['33234','42323','23221','42211','24132','22431','32431','43111','33141','12343','31121','13312','31323','43333','24123'].flatMap(group=>group.split(''));
function normalizeQuestion(value) {
    return String(value)
        .replace(/<\/?(?:div|span|p|b|i|strong)(?:\s[^>]*)?>|<br\s*\/?>/gi,' ')
        .replace(/\\(?:d?frac)\{([^{}]+)\}\{([^{}]+)\}/g,'$1/$2')
        .replace(/\\sqrt\{([^{}]+)\}/g,'√$1')
        .replace(/\\gt\s*/g,'>').replace(/\\lt\s*/g,'<')
        .replace(/\^([23])/g,(_,n)=>n==='2'?'²':'³')
        .replace(/\\[()]/g,'').replace(/[{}]/g,'')
        .replace(/−|–/g,'-').replace(/&nbsp;/g,' ')
        // The worksheet uses a comma instead of «и» before the last root.
        .replace(/(\d)\s*и\s*√/g,'$1,√')
        .replace(/\s+/g,'').replace(/[.;]/g,'');
}

test('all 75 trainer statements and answer choices agree with the supplied workbook',()=>{
    const tasks=Array.from(bank.prototypes).flatMap(proto=>Array.from(proto.tasks));
    assert.equal(tasks.length,75);
    const differences=[];
    tasks.forEach((task,index)=>{
        if(normalizeQuestion(task.text)!==normalizeQuestion(workbookQuestions[index])) differences.push({
            number:index+1,actual:normalizeQuestion(task.text),expected:normalizeQuestion(workbookQuestions[index])
        });
    });
    assert.deepEqual(differences,[]);
});

test('the 15 workbook prototypes retain their answer keys and separate extra bank',()=>{
    assert.equal(bank.prototypes.length,15);
    assert.ok(bank.prototypes.every(proto=>proto.tasks.length===5));
    assert.deepEqual(Array.from(bank.prototypes).flatMap(proto=>Array.from(proto.tasks,task=>String(task.answer))),workbookAnswers);
    assert.equal(extraBank.prototypes.length,17);
    assert.ok(extraBank.prototypes.every(proto=>proto.tasks.length===5));
    assert.equal(context.window.database[7],bank);
    assert.equal(context.window.extraDatabase[7],extraBank);
});

test('questions 12 and 13 use the exact workbook axes with one true inequality',()=>{
    // PNG crops independently inspected in the uploaded PDF. Their point
    // positions establish equal moduli for №12 and |a|>|b| for №13.
    const axes=[
        {index:1,hash:'c8ce1eb7f1bac6d9e66ed14ace9151e6630339287085e0c11a28c9f778ac29fe',a:421-301,b:181-301,
            truths:(a,b)=>[a*b>0,a-b<0,a*b*b>0,a+b<0],answer:3},
        {index:2,hash:'d8a73d056fcf8147de414c65f8dfdc62de988035ed12ed647607ec0fb9877235',a:134-301,b:393-301,
            truths:(a,b)=>[a*a*b<0,a*b<0,b-a<0,a+b>0],answer:2}
    ];
    for(const axis of axes){
        const task=bank.prototypes[2].tasks[axis.index];
        const image=task.svg_code.match(/src="data:image\/png;base64,([^"]+)"/);
        assert.ok(image);
        assert.equal(createHash('sha256').update(Buffer.from(image[1],'base64')).digest('hex'),axis.hash);
        const trueOptions=axis.truths(axis.a,axis.b).flatMap((truth,index)=>truth?[index+1]:[]);
        assert.deepEqual(trueOptions,[axis.answer]);
        assert.equal(task.answer,String(axis.answer));
    }
});

let chromium;
try { ({chromium}=require('playwright')); }
catch { try { ({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {} }
const executable=process.env.CHROMIUM_PATH||'/usr/bin/chromium';
const origin='http://task7-workbook.test';
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};

test('real task 7 selection preserves all workbook questions and their diagrams in preview and exports',{
    skip:!chromium||!fs.existsSync(executable)?'Requires Playwright and Chromium':false,
    timeout:180000
},async()=>{
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory=fs.mkdtempSync(path.join(os.tmpdir(),'task7-workbook-'));
    try {
        const page=await browser.newPage({viewport:{width:1440,height:1000}});
        const errors=[],dialogs=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{
            key:html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1],hash:html.match(/var PASSWORD_HASH = (\d+);/)[1]
        });
        await page.route('**/*',async route=>{
            const url=new URL(route.request().url());
            if(url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax.typesetPromise=()=>Promise.resolve();window.MathJax.startup={promise:Promise.resolve()};'});
            if(url.origin===origin){
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        const tid=await page.evaluate(()=>getUniqueTaskIds().find(id=>String(id).replace(/\D/g,'')==='7'));
        await page.waitForSelector(`#proto-${tid}-0`,{state:'attached'});
        await page.getByRole('button',{name:'🔄 Сбросить набор',exact:true}).click();
        const row=page.locator('.task-row').filter({has:page.locator(`#count-${tid}`)});
        await row.locator('.row-header .btn-settings').first().click();
        assert.equal(await page.locator(`#protos-${tid} .proto-label-text`).count(),15);
        assert.equal(await page.locator(`#protos-extra-${tid} .proto-label-text`).count(),17);
        await page.locator(`#count-${tid}`).fill('75');
        await page.locator('#toggle-ordered-tasks').check();
        // Balanced selection traverses every selected prototype and all five
        // concrete questions exactly once; a fixed draw makes source order stable.
        await page.evaluate(()=>{window.__task7Random=Math.random;Math.random=()=>0;});
        await page.locator('.oge-manual-btn').click();
        await page.waitForFunction(()=>!document.querySelector('.oge-manual-btn').disabled);
        await page.evaluate(()=>{Math.random=window.__task7Random;delete window.__task7Random;});
        const output=await page.evaluate(async()=>{
            const items=window.ogeVariantSnapshot.find(block=>String(block.tid).replace(/\D/g,'')==='7').tasks;
            const print=document.createElement('div');print.innerHTML=currentPrintHTML;
            const printed=[...print.querySelectorAll('.task-print-block')];
            const preview=[...document.querySelectorAll('#output-section .generated-task-block')];
            const resolvedImages=new Map();
            const resolveImage=src=>{
                if(!resolvedImages.has(src)) resolvedImages.set(src,(async()=>{
                    if(!src.startsWith('blob:')) return src;
                    const response=await fetch(src),bytes=new Uint8Array(await response.arrayBuffer());
                    return 'data:'+response.headers.get('content-type')+';base64,'+btoa(Array.from(bytes,b=>String.fromCharCode(b)).join(''));
                })());
                return resolvedImages.get(src);
            };
            return Promise.all(items.map(async(item,index)=>{
                const game=window.currentGeneratedTasks[index];
                const expectedDiagram=document.createElement('div');expectedDiagram.innerHTML=item.svg_code||'';
                const sourceImage=expectedDiagram.querySelector('img')?.getAttribute('src')||'';
                const sourceSvg=expectedDiagram.querySelector('svg')?.outerHTML||'';
                const hasDiagram=async html=>{
                    if(sourceSvg) return html.includes(sourceSvg);
                    if(!sourceImage) return true;
                    const holder=document.createElement('div');holder.innerHTML=html;
                    for(const image of holder.querySelectorAll('img')) if(await resolveImage(image.getAttribute('src')||'')===sourceImage) return true;
                    return false;
                };
                return {text:item.text,answer:String(item.answer),prototype:item.__ogeSelectedPrototypeIndex,
                    previewText:preview[index].textContent,printText:printed[index].textContent,
                    gameText:game.text,presentationText:game.presentationText,
                    previewDiagram:await hasDiagram(preview[index].innerHTML),printDiagram:await hasDiagram(printed[index].innerHTML),gameDiagram:await hasDiagram(game.svg||''),
                    diagram:sourceImage||sourceSvg};
            }));
        });
        assert.equal(output.length,75);
        output.forEach((item,index)=>{
            assert.equal(item.prototype,Math.floor(index/5));
            assert.equal(normalizeQuestion(item.text),normalizeQuestion(workbookQuestions[index]),`question ${index+1}`);
            assert.equal(item.answer,workbookAnswers[index]);
            const visible=normalizeQuestion(item.text);
            assert.ok(normalizeQuestion(item.previewText).includes(visible),`question ${index+1}: preview`);
            assert.ok(normalizeQuestion(item.printText).includes(visible),`question ${index+1}: print`);
            assert.ok(normalizeQuestion(item.gameText).includes(visible),`question ${index+1}: game`);
            assert.ok(normalizeQuestion(item.presentationText).includes(visible),`question ${index+1}: presentation`);
            for(const key of ['previewDiagram','printDiagram','gameDiagram']) assert.equal(item[key],true,`question ${index+1}: ${key}`);
            if(index<45) assert.ok(item.diagram,`question ${index+1}: own diagram`);
        });
        const pending=page.waitForEvent('download');
        await page.evaluate(()=>downloadStudentHTML());
        const download=await pending;
        const filename=path.join(directory,'interactive.html');await download.saveAs(filename);
        const saved=fs.readFileSync(filename,'utf8');
        assert.equal((saved.match(/<div\b[^>]*class="generated-task-block\b/g)||[]).length,75);
        output.forEach((item,index)=>{
            if(item.diagram) assert.ok(saved.includes(item.diagram),`question ${index+1}: exported diagram`);
        });
        // Task 7 deliberately separates the statement, diagram and choices.
        // Inspect the rendered downloaded document rather than requiring its
        // markup to preserve the source's original nested wrapper verbatim.
        const studentOrigin='http://task7-student.test/interactive.html';
        const staticStudent=await browser.newPage({javaScriptEnabled:false});
        await staticStudent.route('**/*',route=>route.request().url()===studentOrigin
            ?route.fulfill({body:saved,contentType:'text/html; charset=utf-8'}):route.abort());
        await staticStudent.goto(studentOrigin,{waitUntil:'load'});
        const exported=await staticStudent.locator('.generated-task-block').allTextContents();
        assert.equal(exported.length,75);
        output.forEach((item,index)=>assert.ok(normalizeQuestion(exported[index]).includes(normalizeQuestion(item.text)),`question ${index+1}: exported statement`));
        await staticStudent.close();
        const student=await browser.newPage();
        await student.route('**/*',route=>route.request().url()===studentOrigin
            ?route.fulfill({body:saved,contentType:'text/html; charset=utf-8'}):route.abort());
        await student.goto(studentOrigin,{waitUntil:'load'});
        const correctedImages=await student.evaluate(()=>[11,12].map(index=>{
            const image=document.querySelectorAll('.generated-task-block')[index].querySelector('.task7-interactive-diagram img');
            return !!image&&image.complete&&image.naturalWidth===605&&image.naturalHeight===85;
        }));
        assert.deepEqual(correctedImages,[true,true]);
        await student.close();
        assert.deepEqual(dialogs,[]);assert.deepEqual(errors,[]);
    } finally {await browser.close();fs.rmSync(directory,{recursive:true,force:true});}
});
