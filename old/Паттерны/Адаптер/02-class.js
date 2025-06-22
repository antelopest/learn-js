'use strict';

class ArrayToQueueAdapter extends Array {
  enqueue(data) {
    this.push(data);
  }
  dequeue() {
    return this.pop();
  }
  get count() {
    return this.length;
  }
}

// Usage
const queue = new ArrayToQueueAdapter();

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
  });
}


