/* Задача 3. Работа с массивами */

/* Напиши функцию, которая принимает массив чисел и возвращает новый массив без повторений: */

/*
    Цель:
    Проверить знания по работе с массивами, множествами (Set),
    методами filter, includes, reduce и тд.
*/

const removeDuplicates = arr => Array.from(new Set(arr));

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

const removeDuplicates1 = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (result.includes(element)) continue;

        result.push(element);
    }

    return result;
}

console.log(removeDuplicates1([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

const removeDuplicates2 = arr => arr.reduce((result, element) => {
    if (result.includes(element)) return result;

    result.push(element);

    return result;
}, []);

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

const removeDuplicates3 = arr => arr.filter((element, index) => arr.indexOf(element) === index);

console.log(removeDuplicates3([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]