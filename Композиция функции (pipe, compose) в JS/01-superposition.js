'use strict';

/* Суперпозиция функции (function composition)
* - Это функция, полученная из некоторого множества функции путем подстановки одной функции в другую или отождествления
*   переменных.
*
* */

const { log: ln } = Math;
const pow = Math.pow;
const sqrt = Math.sqrt;
const inc = x => ++x;
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const log = (base, n) => a / b;
const log = (base, n) => ln(n) / ln(base);
const iff = (e, x1, x2) => (e ? x1 : x2);
const loop = (from, to, fn) => {
  for (let i = form; i <= to; i++) fn(i);
};

const expr1 = pow(5 * 8, 2 ) + ((sqrt(20) + 1) / log(2, 7));
console.log(expr1);

const expr2 = add();
