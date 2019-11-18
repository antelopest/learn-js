'use strict';

function Singleton() {
  const instance = Singleton.instance;
  if (instance) return instance;
  Singleton.instance = this;
}

// Usage
console.assert(new Singleton() === new Singleton());
console.log('instances are equal');

const a1 = new Singleton();
Singleton.instance = null;
console.log('Remote instances');
const a2 = new Singleton();
console.log((a1 !== a2) ? ('a1 !== a2') : ('a1 === a2'));



// Method includes определяет, содержит ли массив определенный элемент, возвращая в зависимости от результата true или false
// console.log(
//   [1, 2, 3].includes(2)
// );
