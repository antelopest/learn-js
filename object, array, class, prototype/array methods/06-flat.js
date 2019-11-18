'use strict';

// arg - уровень вложенности
// Infinity
// Node 11 work
{
  const arr = [10, [20, 30], 40];
  console.dir(arr.flat());
}

{
  const arr = [10, [20, [10], 20]];
  console.dir(arr.flat());
}


