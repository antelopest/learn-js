'use strict';
// Factory Object

// 1
function userFactory_1(name, group, email) {
  return { name, group, email };
}
const user_1 = userFactory_1('Sam', 'IST', 'webant@gmail.com');
console.dir(user_1);

// 2
const userFactory_2 = (name, group, email) => {
  return { name, group, email };
};
const user_2 = userFactory_2('Sam', 'IST', 'webant@gmail.com');
console.dir(user_2);

// 3
const userFactory_3 = (name, group, email) => ({ name, group, email });
const user_3 = userFactory_3('Sam', 'IST', 'webant@gmail.com');
console.dir(user_3);

