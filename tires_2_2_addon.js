/* Дополнение к действующему генератору ОГЭ — тема «Шины», прототип 2.2.
 * Подключить после tires_practice.js; другие прототипы не изменяются.
 */
(function () {
  'use strict';
  const db = window.ogePracticeDatabase && window.ogePracticeDatabase.tires;
  if (!db || !db.catalog || !Array.isArray(db.catalog.prototypes)) return;
  const variants = [
    [[185,60,13],[175,65,13]],
    [[205,55,14],[165,65,14]],
    [[195,60,15],[185,65,15]],
    [[225,50,16],[205,55,16]],
    [[215,55,17],[205,60,17]],
    [[235,45,18],[225,50,18]]
  ];
  function height(t) {return t[0]*t[1]/100;}
  function marking(t) {return t[0]+'/'+t[1]+' R'+t[2];}
  function answerNumber(x) {return String(Math.round(x*10000)/10000).replace('.',',');}
  function build(a,b) {
    const ha=height(a),hb=height(b),delta=ha-hb;
    // Выбираем только пары с конечным десятичным результатом.
    const smaller = delta < 0;
    const ans=answerNumber(Math.abs(delta));
    const question='На сколько миллиметров радиус колеса с шиной <b>'+marking(a)+'</b> '+(smaller?'меньше':'больше')+', чем радиус колеса с шиной <b>'+marking(b)+'</b>?';
    const solution='<p>Радиус колеса равен половине диаметра диска плюс высота боковины. Диаметры дисков одинаковые, поэтому их половины сокращаются.</p>'+
      '<p>Высота первой боковины: '+a[0]+' · '+a[1]+'/100 = '+answerNumber(ha)+' мм.</p>'+
      '<p>Высота второй боковины: '+b[0]+' · '+b[1]+'/100 = '+answerNumber(hb)+' мм.</p>'+
      '<p>Разность радиусов: '+answerNumber(Math.max(ha,hb))+' − '+answerNumber(Math.min(ha,hb))+' = '+ans+' мм.</p><b>Ответ: '+ans+'</b>';
    return {question,solution,answer:ans};
  }
  const first=build(...variants[0]);
  const proto={
    id:'2.2',typeId:'2.2',examNumber:2,
    title:'Сравнение радиусов колёс с разными шинами',
    typeTitle:'2.2 — Сравнение радиусов колёс с разными шинами',
    text:first.question,answer:first.answer,
    accepts:[first.answer,first.answer.replace(',','.')],
    solution:first.solution,
    imageHTML:db.catalog.prototypes[0]?.imageHTML || '',
    theoryImageHTML:db.catalog.prototypes[0]?.theoryImageHTML || '',
    printLayout:'image-grid',printGridHeight:96,printCompact:false
  };
  if (!db.catalog.prototypes.some(t=>t.id==='2.2')) {
    const pos=db.catalog.prototypes.findIndex(t=>t.id==='3.1');
    db.catalog.prototypes.splice(pos>=0?pos:db.catalog.prototypes.length,0,proto);
  }
  (db.scenarios||[]).forEach(sc=>{
    if(sc.tasks && Array.isArray(sc.tasks[2]) && !sc.tasks[2].some(t=>t.id==='2.2'))sc.tasks[2].push(proto);
  });
  // Отдельные аналоги для использования при создании вариантов.
  db.radiusComparisonVariants=variants.map((pair,i)=>{
    const t=build(...pair);
    return {id:'2.2-'+(i+1),typeId:'2.2',examNumber:2,title:proto.title,typeTitle:proto.typeTitle,
      text:t.question,answer:t.answer,accepts:[t.answer,t.answer.replace(',','.')],solution:t.solution,
      imageHTML:proto.imageHTML,theoryImageHTML:proto.theoryImageHTML,
      printLayout:'image-grid',printGridHeight:96,printCompact:false};
  });
})();
