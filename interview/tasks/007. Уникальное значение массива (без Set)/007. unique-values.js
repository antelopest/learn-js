/*
* Задача 2: Уникальные значения массива
* напишите функцию uniqueValues(arr),
* которая возвращает массив только уникальных значений, без использования Set.
* */

const uniqueValues1 = arr =>
    arr.reduce(
        (uniques, element) => {
            if (!uniques.includes(element)) {
                uniques.push(element);
            }

            return uniques;
        }, []
    );


const uniqueValues2 = arr => arr.filter((e, i) =>
    i === arr.indexOf(e));

const uniqueValues3 = arr => {
    const obj = {};

    return arr.filter((e, i) => {
        if (obj[e]) return false;

        obj[e] = true;
        return true;
    });
}

console.log(uniqueValues1([1, 2, 2, 3, 1, 4])); // [ 1, 2, 3, 4 ]
console.log(uniqueValues2([1, 2, 2, 3, 1, 4])); // [ 1, 2, 3, 4 ]
console.log(uniqueValues3([1, 2, 2, 3, 1, 4])); // [ 1, 2, 3, 4 ]
