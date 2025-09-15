'use strict';

// pending
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('value1');
  });
});
console.dir({ promise1 }); // Promise { <pending> }
promise1.then(console.log); // 'value1' (delayed)


// immediate resolve
const promise2 = new Promise(resolve => resolve('value2'));
console.dir({ promise2 });
promise2.then(console.log);

// immediate reject
const promise3 = new Promise((resolve, reject) => {
  reject(new Error('I have no value for you'));
});
console.dir({ promise3 });
promise3.then(console.log).catch(console.log);

// promise.resolve
const promise4 = Promise.resolve('value4');
console.dir({ promise4 });
promise4.then(console.log);

// promuse.reject
const promise5 = Promise.reject(new Error('I have no value for you'));
console.dir({ promise5 });
promise5.then(console.log).catch(console.log);

// example with I/O
const fs = require('fs');

const readFile = (filename, encoding) => new Promise((resolve, reject) => {
  fs.readFile(filename, encoding, (err, data) => {
    if (err) reject(err);
    else resolve(data.toString());
  });
});

readFile('file1.txt', 'utf-8')
  .then(
    data => {
      console.log(data);
      return readFile('file2.txt', 'utf-8');
    }
  )
  .then(
    data => {
      console.log(data);
      return readFile('file3.txt', 'utf-8');
    }
  )
  .then(data => console.log(data))

// or

fs.readFile('file1.txt', 'utf8', (err, data) => {
  console.log(err || data.toString());
  fs.readFile('file2.txt', 'utf8', (err, data) => {
    console.log(err || data.toString());
    fs.readFile('file3.txt', 'utf8', (err, data) => {
      console.log(err || data.toString());
    });
  });
});

