'use strict';

const arrayToQueueAdapter = arr => ({
  enqueue(data) {
    arr.push(data);
  },
  dequeue() {
    return arr.pop();
  },
  get count() {
    return arr.length
  }
});

// Usage

const queue = arrayToQueueAdapter([]);

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
