'use strict';
// Фабричный метод
class Person {
  constructor(name) {
    this.name = name;
  }

  static factory(name) {
    return new Person(name);
  }
}

// Usage
const p_1 = new Person('Sam');
const p_2 = Person.factory('Sam');

console.dir({ p_1 });
console.dir({ p_2 });

