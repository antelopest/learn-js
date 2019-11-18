'use strict';

// метод every вызывается для каждого элемента массива,
// если после каждой итерации вернулось true, то every вернет true

{
  const arr = [1, 2, 3];
  console.log(arr.every(x => x > 0));
}

{
  const arr = ['a', 'b', 'c'];
  console.log(arr.every(c => c > 'a'));
}

// метод some вызывается для каждого элемента массива,
// если какая то итерация вернет true, цикл остановится,
// то some вернет true

{
  const array = ['a', 'b', 'c'];
  console.log(array.some(c => c > 'a'));
}


