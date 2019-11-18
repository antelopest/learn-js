'use strict';

const person = {
  name: 'Sam',
  city: 'Spb',
  country: 'Russia',
};

const s = JSON.stringify(person);
console.dir(s);

const obj = JSON.parse(s);
console.dir(obj);

const letters = ['A', 'B', 'C', 'D'];
console.dir(letters + '');
console.dir(JSON.stringify(letters));

