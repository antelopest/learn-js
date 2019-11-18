'use strict';

const obj = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};

obj.fifth = 2;

console.log(
  `Key \t Type \t         Value \t Type`,
);
for (const key in obj) {
  const value = obj[key];
  console.log(
    `${key} \t ${typeof key} \t ${value} \t ${typeof value}`
  );
}
