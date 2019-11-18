'use strict';

const singleton = (() => {
  const instance = {};
  return () => instance;
})();

console.log(singleton() === singleton());
