'use strict';
// Maximum call stack size exceeded

function f(x) {
  return g(x);
}

function g(x) {
  return f(x);
}

console.log(f(0));


