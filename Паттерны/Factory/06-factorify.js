'use strict';

class Person {
  constructor (name) {
    this.name = name;
  }
}

const factorify = Category => (...args) => new Category(...args);

// Usage
const p_1 = new Person('Sam');

const personFactory = factorify(Person);
const p_2 = personFactory('Sam');

console.dir({ p_1 });
console.dir({ p_2 });

const myFactorify = Category => (...args) => args.map(name => new Category(name));
const personsFactory = myFactorify(Person);
const p_3 = personsFactory('Sam', 'Samuel', 'Sammy');
for (const person of p_3) {
  console.log(person);
}


