'use strict';

// Хвостовая рекурсия
const add = (n, acc = 0) => {
  if (n === 0) return acc;
  return add(n -1, acc + n);
};

console.log(add(55));

const tail = (n, acc = 0) => {
  while (true) {
    if (n === 0) return acc;
    acc = acc + n;
    n = n - 1;
  }
};

console.log(tail(55));
