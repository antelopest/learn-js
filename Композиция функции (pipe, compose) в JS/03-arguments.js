'use strict';

/*
* REST, Spread оператор
* ... применяется по-разному, в зависимости от контекста применения.
* Spread используется для разделения коллекций на отдельные элементы
* REST наоборот, для соединения отдельных значений в массив
* */

const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));

// Usage

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();

const s = 'ANTELOPE HOSTING FAST VPS FASTVPS';
console.log(s);
console.log(`lower('${s}) = '${upperCapital(s)}'`);


