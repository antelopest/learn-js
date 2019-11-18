'use strict';

const pool = item => {

  pool.items = pool.items || new Array(10).fill(new Array(1000).fill(0));

  if (item) {
    pool.items.push(item);
    console.log('Recycle item, count =', pool.items.length);
    return;
  }
  const res = pool.items.pop() || new Array(1000).fill(0);

  console.log('Get from pool, count =', pool.items.length);
  return res;
};

// Usage

const a_1 = pool();
const b_1 = a_1.map((x, i) => i).reduce((x, y) => x + y);
console.log(b_1);

const a_2 = pool();
const b_2 = a_2.map((x, i) => i).reduce((x, y) => x + y);
console.log(b_1);

pool(a_1);
pool(a_2);

const a_3 = pool();
const b_3 = a_3.map((x, i) => i).reduce((x, y) => x + y);
console.log(b_3);

// Method fill заполняет все элементы массива от начального до конечного индексов одним значением
console.log(
  [1, 2, 3, 5, 4].fill(
    1, // Значение
    2, // Начать с позиции
    3  // Закончить на позиции
  )
);
// Method pop удаляет последний элемент массива и возвращает его значение
console.log(
  [1, 2, 3, 4, 5].pop()
);
