/*
* Частота элементов
*
* Напиши функцию mostFrequent(arr), которая возвращает элемент, встречающийся чаще всего.
* */

const mostFrequent1 = arr => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];

        obj[key] = (obj[key] || 0) + 1;
    }

    let maxKey = null;
    let maxValue = -Infinity;

    for (let [key, value] of Object.entries(obj)) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey;
}

// Не подходит для сложных типов
// Все ключи приводятся к строке (true, 1, "1" - конфликты)

const mostFrequent2 = arr => {
    const map = new Map();

    arr.forEach(e => {
        if (map.has(e)) {
            let count = map.get(e);

            map.set(e, ++count);
        } else {
            map.set(e, 1);
        }
    });

    let keyMaxMap = null;

    map.forEach((value, key) => {
        if (keyMaxMap === null || map.get(keyMaxMap) < value) {
            keyMaxMap = key;
        }
    });

    return keyMaxMap;
}

// лучшее решение

console.log(mostFrequent1([1, 3, 1, 3, 2, 1])); // 1
console.log(mostFrequent2([1, 3, 1, 3, 2, 1])); // 1