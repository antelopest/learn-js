'use strict';
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(obs) {
    obs.observable = this;
    this.observers.push(obs);
    return this;
  }

  //
  // unsubscribe(obs) {
  //
  // }
  notify(data) {
    if (this.observers.length === 0) return;
    for (const observer of this.observers) {
      observer.update(data);
    }
  }

  complete() {
    throw new Error('Obervable.complete is not implemented');
  }
}

class Observer {
  update() {
    throw new Error('Observer.update is not implemented');
  }
}

// Usage

const randomChar = () => String.fromCharCode(Math.floor((Math.random() * 25) + 97));

class CharStream extends Observable {
  constructor() {
    super();
    this.timer = setInterval(() => {
      const c = randomChar();
      this.notify(c);
    }, 200);
  }

  complete() {
    clearInterval(this.timer);
  }
}

class CharStreamObserver extends Observer {
  constructor() {
    super();
    this.count = 0;
    this.observable = null;
  }


  update(c) {
    process.stdout.write(c);
    this.count++;
    if (this.count > 50) {
      process.stdout.write('\n');
      process.exit(0);
    }
  }
}

const observer = new CharStreamObserver();
const observable = new CharStream().subscribe(observer);

console.dir({
  observer, observable
});

