'use strict';

const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(14));

const fibonacci_1 = n => {
  let a = 1;
  let b = 0;
  let c = 0;

  while (n > 0) {
    c = a + b;
    b = a;
    a = c;
    n--;
  }

  return b;
};

console.log(fibonacci_1(14));
