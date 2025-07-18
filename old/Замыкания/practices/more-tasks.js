/*
* Задание 5
*
* Сделать функцию, которая вызывается только один раз.
* */

// const once = (fn) => {
//     let done = false;
//
//     return () => {
//         if (!done) fn();
//
//         done = true;
//     }
// }
//
// const runOnce = once(() => console.log('Hi'));
//
// runOnce(); // Hi
// runOnce(); // ничего не произойдет
// runOnce(); // ничего не произойдет

/*
* Задание 4: Удали falsy значения из массива
* */

// const removeFalsy1 = arr => arr.filter(e => !!e);
// const removeFalsy2 = arr => arr.filter(Boolean);
//
// // Пример:
// console.log(removeFalsy1([0, 'hi', false, '', 42, null, undefined])); // ['hi', 42]
// console.log(removeFalsy2([0, 'hi', false, '', 42, null, undefined])); // ['hi', 42]


/*
* Задание 2: Проверка, все ли элементы уникальны
* */

// const areUnique1 = arr => new Set(arr).size === arr.length;
//
// const areUnique2 = arr =>
//     !arr.some((item, index) => arr.indexOf(item) !== index);
//
//
// // Пример:
// console.log(areUnique1([1, 2, 3, 4])); // true
// console.log(areUnique1([1, 2, 3, 3])); // false
//
// console.log(areUnique2([1, 2, 3, 4])); // true
// console.log(areUnique2([1, 2, 3, 3])); // false

/*
* Задание 1: Разверни строку наоборот (reverse string)
* */
// const reverse1 = s => s.split('').reverse().join('');
//
// const reverse2 = s => {
//     let result = '';
//
//     for (let i = s.length - 1; i >= 0; i--) {
//         result += s[i];
//     }
//
//     return result;
// };
//
// console.log(reverse1('hello')); // 'olleh'
// console.log(reverse2('hello')); // 'olleh'


/*
* Задание 3: Подсчёт гласных в строке
* */
const countVowels1 = str => [...str.matchAll(/[aeiou]/gi)].length;

const countVowels2 = str => {
    str = str.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(e => vowels.includes(e)).length;
}

console.log(countVowels1('Hello World')); // 3
console.log(countVowels2('Hello World')); // 3