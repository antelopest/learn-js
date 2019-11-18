'use strict';

const fs = require('fs');

const readTextFile = filename => fs.promises.readFile(filename, 'utf-8');

readTextFile('file1.txt')
  .then(
    data => {
      console.log({ file1: data });
      return readTextFile('file2.txt');
    },
    error => {
      console.log('Cannot read file1.txt');
      console.log(error);
    }
  )
  .then(
    data => {
      console.dir({ file2: data });
      return readTextFile('file3.txt');
    }
  )
  .catch(
    error => {
      console.log('Cannot read file2');
      console.log(error);
    }
  )
  .then(
    data => {
      console.dir({ file3: data });
    }
  )
  .catch(
    error => {
      console.log('Cannot read file');
      consoloe.log(error);
    }
  )
