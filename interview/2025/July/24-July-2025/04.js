/* Задача 4. Плоский массив */

/* Напиши функцию, которая преобразует вложенный массив в "плоский" (одномерный) */


/* Используем метод flat */
const flatten = (arr) => arr.flat(Infinity);

console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]


/* Используем рекурсию */
const flatten1 = arr => [].concat(...arr.map(e => Array.isArray(e) ? flatten1(e) : e));

console.log(flatten1([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

/* Используем reduce */
const flatten2 = arr => arr.reduce((result, current) => {
    if (Array.isArray(current)) {
        return result.concat(flatten2(current));
    }

    result.push(current);

    return result;
}, []);

console.log(flatten2([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

/* Используем while (без рекурсии) */
const flatten3 = arr => {
    const result = [];
    const stack = [...arr];

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.push(item);
        }
    }

    return result.reverse();
}

console.log(flatten3([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]