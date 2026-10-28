/* ШИНЫ: новый прототип 2.2. Данные для интеграции в существующий генератор ОГЭ.
 * Не подменяет отсутствующий исходный tires_practice.js.
 * Варианты содержат только целые или конечные десятичные ответы.
 */
(function(root){
  'use strict';
  const tasks=[
    {id:'tires-2.2-demo-free', section:'Шины', number:2, type:'compare-wheel-radii',
     question:'На сколько миллиметров радиус колеса с шиной 185/60 R13 меньше, чем радиус колеса с шиной 175/65 R13?', answer:'2,75'},
    {id:'tires-2.2-training-v2', section:'Шины', variant:2, number:2, type:'compare-wheel-radii',
     question:'На сколько миллиметров радиус колеса с шиной 205/55 R14 больше, чем радиус колеса с шиной 165/65 R14?', answer:'5,5'}
  ];
  function sidewall(width, percentage){return width*percentage/100;}
  function radius(width, percentage, rim){return 12.7*rim+sidewall(width,percentage);}
  function compare(a,b){const r=radius(...a)-radius(...b);return String(Math.round(r*10000)/10000).replace('.',',');}
  root.OGE_TIRES_2_2_PATCH={tasks,sidewall,radius,compare};
})(typeof window !== 'undefined' ? window : globalThis);
