'use strict';
// Singleton через замыкание
const Singleton = new (function() {
  const single = this;
  return function () {
    return single;
  }
})();

console.log(new Singleton() === new Singleton());
