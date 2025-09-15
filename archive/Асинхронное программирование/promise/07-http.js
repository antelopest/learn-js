'use strict';

const fetch = require('./06-fetch.js');

fetch('https://jsonplaceholder.typicode.com/comments')
  .then(data => console.log(data))
  .catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// fetch('http://localhost:3000/city')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

