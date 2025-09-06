/* Задача 2. Замыкание */

/*
Напиши функцию, которая возвращает массив функций.
Каждая функция при вызове должна возвращать свое число:
*/

const createFunctions = (n = 3) => {
   return new Array(n).fill(0).map((e, i) => {

       return () => {
           return i;
       }
   });
}

const funcs = createFunctions();

console.log(funcs[0]()); // 0
console.log(funcs[1]()); // 1
console.log(funcs[2]()); // 2

const createFunctions1 = (n = 3) => {
    const result = [];

    for (var i = 0; i < n; i++) {
        (function (j) {
            result.push(() => j);
        })(i);
    }

    return result;
}

const funcs1 = createFunctions1();

console.log(funcs1[0]()); // 0
console.log(funcs1[1]()); // 1
console.log(funcs1[2]()); // 2

const createFunctions2 = (n = 3) => {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(() => i);
    }

    return result;
}

const funcs2 = createFunctions2();

console.log(funcs2[0]()); // 0
console.log(funcs2[1]()); // 1
console.log(funcs2[2]()); // 2
