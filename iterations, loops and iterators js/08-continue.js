'use strict';

let i = 1;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(`${i} ${(i++ % 5 === 0) ? '!' : '?'}`);
}
