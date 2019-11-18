'use strict';

{
  const arr = [1, 2, 3, 4];
  const sum = (acc, element) => {
    return acc + element
  };
  console.log(arr.reduce(sum));
}


{
  const arr = [1, 2, 3, 4];
  const sum = (acc, element) => {
    return acc + element
  };
  console.log(arr.reduce(sum, 0));
}

{
  const arr = [1, 2, 3, 4];
  const sum = (acc, element) => {
    return acc + element
  };
  console.log(arr.reduceRight(sum, 0));
}

