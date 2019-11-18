'use strict';

const letters = [];
// Add element in end of array
letters.push('B');
console.dir(letters);

// Add element in beg of array
letters.unshift('A');
console.dir(letters);

letters.push('C');
console.dir(letters);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.dir({ numbers });

const languages = ['C++', 'JavaScript', 'Python', 'Haskell', 'Swift'];

// Length Array
console.dir({
  length: languages.length,
  'languages[0]' : languages[0],
  'languages[languages.length - 1]': languages[languages.length - 1],
});
