'use strict';

const Singleton = (() => {
  let instance;

  function Singleton() {
    if (instance) return instance;
    instance = this;
  }

  Singleton.prototype.test = function () {};

  return Singleton;
})();

console.log(new Singleton() === new Singleton());



