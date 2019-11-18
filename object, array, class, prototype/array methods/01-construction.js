'use strict';

{
  const arr = [];
  arr[70] = 100;
  console.dir({ arr, length: arr.length });
}

{
  const arr = [];
  arr[1] = 100;
  arr['first'] = 100;
  arr[-1] = -100;
  console.dir(
    // arr.length положительный числовой индекс
    { arr, length: arr.length }
  );
}

{
  const arr = [1, 2, 3];
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = new Array(4);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = new Array(1, 2, 3);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = Array.from([1, 2, 3]);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = Array.from('1234', x => parseInt(x));
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = Array.of(1, 2, 3);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = Array.of(4);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = [1, 2, 3];
  arr.fill(0);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = [1, 2, 3];
  arr.fill(-1, 1, 3);
  console.dir(
    { arr, length: arr.length }
  );
}

{
  const arr = [1, 2, 3];
  arr.fill({});
  console.dir(
    { arr, length: arr.length }
  );
}








