'use strict';

// Method изменяет текущий массив, вырезая из него часть

{
  const arr_1 = [1, 2, 3, 4, 5];
  const arr_2 = arr_1.splice(2);
  console.dir({
    arr_1, arr_2
  });
}

{
  const arr_1 = [1, 2, 3, 4, 5];
  const arr_2 = arr_1.splice(2, 1);
  console.dir({
    arr_1, arr_2
  });
}

{
  const arr_1 = [1, 2, 3, 4, 5];
  const arr_2 = arr_1.splice(2, 1, 0, 0);
  console.dir({
    arr_1, arr_2
  });
}


