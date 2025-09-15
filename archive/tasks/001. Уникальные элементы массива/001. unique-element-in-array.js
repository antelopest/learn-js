/*
* Уникальные элементы массива
*
* Написать функцию getUnique(arr),
* которая принимает массив и возвращает новый массив только с уникальными значениями (без повторений).
* */

const getUnique = arr => {
    let uniques = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniques.includes(arr[i])) {
            uniques.push(arr[i]);
        }
    }

    return uniques;
}

const getUnique1 = arr => arr.reduce((array, element) => {
    if (!array.includes(element)) {
        array.push(element);
    }

    return array;
}, []);

const getUnique2 = arr => [...new Set(arr)];

const arr1 = [
    12, 1, 2, 3, 4, 5, 6, 1, 2, 5, 7, 8, 9, 10, 10, 10
];

console.log(getUnique(arr1));
console.log(getUnique1(arr1));
console.log(getUnique2(arr1));