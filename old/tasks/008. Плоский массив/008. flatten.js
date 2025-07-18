/*
* Плоский массив
*
* Напиши функцию flatten(arr),
* Которая превращает вложенный массив в плоский (одномерный) массив любой вложенности
* */

const flatten1 = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);

            flatten1(arr);
        }
    }

    return arr;
}

const flatten2 = arr => {
    let i = arr.findIndex(e => Array.isArray(e));

    if (i === -1) return arr;

    arr.splice(i, 1, ...arr[i]);

    return flatten2(arr);
}

const flatten3 = arr => {
    return arr.flat(Infinity);
}

const flatten4 = arr => [].concat(...arr.map(n => Array.isArray(n) ? flatten4(n) : n));


console.log(flatten1([1, [2, [3, [4]]]])); // [1, 2, 3, 4]);
console.log(flatten2([1, [2, [3, [4]]]])); // [1, 2, 3, 4]);
console.log(flatten3([1, [2, [3, [4]]]])); // [1, 2, 3, 4]);
console.log(flatten4([1, [2, [3, [4]]]])); // [1, 2, 3, 4]);