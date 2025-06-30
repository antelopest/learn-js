/*
* Поиск максимального числа
*
* Напишите функцию getMax(arr), которая возвращает максимальное число из массива, не используя Math.max
* */

const getMax = arr => {
    if (arr.length === 0) return null;

    return arr.sort()[arr.length - 1];
}

// .sort() по умолчанию сортирует как строки!
// arr.sort((a, b) => a - b);
// Сложность: O(n log n) — неэффективно для поиска одного элемента

const getMax1 = arr => {
    if (arr.length === 0) return null;

    return arr.reduce((max, n) => {
        if (max < n) return n;

        return max;
    }, arr[0]);
}

const getMax2 = arr => {
    if (arr.length === 0) return null;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}


console.log(getMax([10, 4, 2, 99, 3]));
console.log(getMax1([10, 4, 2, 99, 3]));
console.log(getMax2([10, 4, 2, 99, 3]));