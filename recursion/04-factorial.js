'use strict';

const factorial = n => {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(10)); // 10! = 1 * 2 * ... * 10
