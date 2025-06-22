'use strict';

// Адаптер массива в очередь

/*
  Очередь (queue) - структура данных, из которой удаляется первым тот элемент, который был первым в очередь добавлен.
  push - добавить в начало очереди новый элемент
  pop - извлечь из очереди последний элемент
  top - узнать значение последнего элемента
  size - узнать количество элементов в очереди
*/

const ArrayToQueueAdapter = function () {
  Array.call(this);
};

ArrayToQueueAdapter.prototype.enqueue = function (data) {
  this.push(data);
};

ArrayToQueueAdapter.prototype.dequeue = function (data) {
  return this.pop(data);
};

Object.defineProperty(ArrayToQueueAdapter.prototype, 'count', {
  get: function myProperty() {
    return this.length;
  }
});

// Устанавливает прототип (внутреннее свойство prototype) указанного объекта в другой объект
Object.setPrototypeOf(
  ArrayToQueueAdapter.prototype, // объект, котором устанавливается прототип
  Array.prototype // новый прототип
);

// Usage
const queue = new ArrayToQueueAdapter();
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');

console.log({
  queue: queue
});

while (queue.count) {
  console.dir({
    index: queue.count,
    value: queue.dequeue()
  });
}

console.log({
  queue: queue
});
