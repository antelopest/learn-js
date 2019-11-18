'use strict';

const arrayToQueueAdapter = () => {
  const arr = [];
  arr.enqueue = data => arr.push(data);
  arr.dequeue = () => arr.pop();
  arr.count = () => arr.length;
  return arr;
};

// Usage

const queue = arrayToQueueAdapter();

queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');

console.log({
  queue: queue
});

while (queue.count()) {
  console.log({
    index: queue.count(),
    value: queue.dequeue()
  });
}
