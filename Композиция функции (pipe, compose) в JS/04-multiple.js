'use strict';

const compose = (...fns) => x => fns.reverse().reduce((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// Usage

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();
const trim = s => s.trim();

const s = '   ANTELOPE HOSTING FAST VPS FASTVPS     ';
console.log(s);
console.log(`lower('${s}') = '${lower(s)}'`);
console.log(`upperCapital('${s}') = '${upperCapital(s)}'`);

{
  console.log('Use compose');

}

{
  console.log('Use pipe');

}
