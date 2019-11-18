'use strict';

// синхронные функций из файла 02-sync превратим в асинхронные функции

// 1.
// Function Declaration
// function inc(a) {
//   return a + 1;
// }

// async function inc(a) {
//   return await new Promise(resolve => resolve(a + 1));
// }
// inc(1).then(console.log);

// or
async function inc(a) {
  return a + 1;
}

// 2.
// Function Expression
// const sum = function (a, b) {
//   return a + b;
// };

// const sum = async function(a, b) {
//   return await new Promise(resolve => resolve(a + b));
// };
// sum(8, 5).then(console.log);
// // or
const sum = async function(a, b) {
  return a + b;
};

// 3.
// Arrow Function
// const max = (a, b) => (a > b ? a : b);
//
// const avg = (a, b) => {
//   const s = sum(a, b);
//   return s / 2;
// };

// const max = async (a, b) => await new Promise(resolve => resolve((a > b ? a : b)));
// max(15, 16).then(console.log);
//
// const avg = async (a, b) => {
//   const s = await sum(a, b);
//   return await new Promise(resolve => resolve(s / 2));
// };
// avg(16, 2).then(console.log);

const max = async (a, b) => (a > b ? a : b);

const avg = async (a, b) => {
  const s = await sum(a, b);
  return s / 2;
};

// 4.
// const obj = {
//   name: 'Mark Aurelius',
//   split(sep = ' ') {
//     return this.name.split(sep);
//   }
// };

const obj = {
  name: 'Mark Aurelius',
  async split(sep = ' ') {
    return this.name.split(sep);
  }
};
// obj.split(' ').then(console.log);

// 5.
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   static of (name) {
//     return new Person(name);
//   }
//   split(sep = ' ') {
//     return this.name.split(sep);
//   }
// }

class Person {
  constructor(name) {
    this.name = name;
  }
  static async of (name) {
    return new Person(name);
  }

  async split(sep = ' ') {
    return this.name.split(sep);
  }
}

const person = new Person('Marcus Aurelius');

(async () => {

  console.log('inc(5) =', await inc(5));
  console.log('sum(1, 3) =', await sum(1, 3));
  console.log('max(8, 6) =', await max(8, 6));
  console.log('avg(8, 6) =', await avg(8, 6));
  console.log('obj.split() =', await obj.split());
  console.log('person.split() =', await person.split());

})();

