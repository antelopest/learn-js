// Задача 2

// Напишите функцию, которая возвращает новый массив только с уникальными значениями.

// Пример:
// input: [1, 2, 2, 3, 4, 4, 5]
// output: [1, 2, 3, 4, 5]

function uniqueArray(arr) {
    return [...new Set(arr)];
}

let arr1 = [1, 2, 2, 3, 4, 4, 5];
let arr2 = [1, 1, 3, 3, 5];

console.log(uniqueArray(arr1));
console.log(uniqueArray(arr2));

function uniqueArray1(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(uniqueArray1(arr1));
console.log(uniqueArray1(arr2));

function uniqueArray2(arr) {
    const obj = {};
    const uniques = [];

    for (const item of arr) {
        if (!obj[item]) {
            uniques.push(item);
            obj[item] = true;
        }
    }

    return uniques;
}

console.log(uniqueArray2(arr1));
console.log(uniqueArray2(arr2));