'use strict';

class ArrayToQueueAdapter {
  constructor (arr) {
    this.array = arr;
  }

  enqueue(data) {
    this.array.push(data);
  }

  dequeue() {
    return this.array.pop();
  }

  get count() {
    return this.array.length;
  }
}

// Usage
const queue = new ArrayToQueueAdapter([]);

queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');

console.log({
  queue: queue
});

while (queue.count) {
  console.log({
    index: queue.count,
    value: queue.dequeue()
  })
}


