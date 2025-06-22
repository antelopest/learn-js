'use strict';

const { EventEmitter } = require('events');

// Usage

const randomChar = () => String.fromCharCode(Math.floor((Math.random() * 25) + 97));

// Observable
class CharStream {
  constructor(ee) {
    this.timer = setInterval(() => {
      const c = randomChar();
      ee.emit('char', c);
    }, 200);
  }

  complete() {
    clearInterval(this.timer);
  }
}


// Observer
const ee = new EventEmitter();
const observable = new CharStream(ee);

let count = 0;

const observer = c => {
  process.stdout.write(c);
  this.count++;
  if (this.count > 50) {
    process.stdout.write('\n');
    process.exit(0);
  }
};

ee.on('char', observer);

console.dir(
  {
    observer, observable
  }
);

