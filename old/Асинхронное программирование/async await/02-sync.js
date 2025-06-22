'use strict';
// Синхронное выполнение

// Function Declaration
function inc(a) {
  return a + 1;
}

// Function Expression
const sum = function (a, b) {
  return a + b;
};

// Arrow Function
const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

const obj = {
  name: 'Mark Aurelius',
  split(sep = ' ') {
    return this.name.split(sep);
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
  static of (name) {
    return new Person(name);
  }
  split(sep = ' ') {
    return this.name.split(sep);
  }
}

const person = Person.of('Mark Aurelius');

console.log('inc(5) =', inc(5));
console.log('sum(1, 3) =', sum(1, 3));
console.log('max(8, 6) =', max(8, 6));
console.log('avg(8, 6) =', avg(8, 6));
console.log('obj.split() =', obj.split());
console.log('person.split() =', person.split());
