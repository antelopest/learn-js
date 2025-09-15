'use strict';

console.log(Function);

const AsyncFunction = (async () => {}).constructor;
console.log(AsyncFunction);

const fn = () => {};
const afn = async () => {};

console.dir({
  fn: typeof fn,
  afn: typeof afn,
});

// instanceof позволяет определить к какому классу принадлежит объект с учетом наследования
console.log(fn instanceof Function);
console.log(afn instanceof Function);
console.log(afn instanceof AsyncFunction);
console.log(fn instanceof AsyncFunction);
console.log();

// .constructor возвращает ссылку на функцию создавшую экземпляр в данном случае экземпляр прототипа (наследование)
console.log(afn.__proto__.constructor);
console.log(afn.__proto__.__proto__.constructor);
console.log(afn.__proto__.__proto__.__proto__.constructor);
console.log();
// OR
// .getPrototypeOf возвращает прототип
console.log(Object.getPrototypeOf(afn).constructor);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(afn)).constructor);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(afn))).constructor);
console.log();

