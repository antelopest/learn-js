'use strict';

const randomChar = () => String.fromCharCode(Math.floor((Math.random() * 25) + 97));

const subscribe = obs => {
  const observable = { obs };
  setInterval(() => {
    const char = randomChar();
    obs(char);
  }, 200);
  return observable;
};

let count = 0;

const observer = c => {
  process.stdout.write(c);
  count++;
  if (count > 50) {
    process.stdout.write('\n');
    process.exit(0);
  }
};

const observable = subscribe(observer);

console.dir({ observer, observable });

