'use strict';

/*
* Композиция функции
* - это применение одной функции к результату другой функции.
 */

const compose = (f, g) => x => f(g(x));

// Usage

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();

const capitalize = compose(upperCapital, lower);

const s = 'ANTELOPE HOSTING FAST VPS FASTVPS';
console.log(s);
console.log(`lower('${s}') = '${lower(s)}'`);
console.log(`upperCapital('${s}') = '${upperCapital(s)}'`);
console.log(`capitalize(('${s}') = '${capitalize(s)}'`);

