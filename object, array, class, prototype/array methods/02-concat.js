'use strict';

// concat не является статическим методом

{
  const arr_1 = [1, 2, 3];
  const arr_2 = [4, 5, 6];
  const arr_3 = [7, 8, 9];

  const arr = arr_1.concat(arr_2, arr_3);
  console.dir(
    arr
  )
}
