'use strict';
function f1(a, b) {
  console.log('f1(' + a + ', ' + b + ')');
}

f1(2, 3);
f1.call(null, 2, 3); // Можно передать объект, тогда функция f1 получит объектный контекст функции переданного объекта

const arr = [2, 3];
f1(...arr); // Разобьем массив и получим первые два аргумента
f1.apply(null, arr); // Можно передать массив
