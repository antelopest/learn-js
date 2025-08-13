// Задача 5

// Имитация работы Array.prototype.map

// Напиши свою реализацию метода `map`, который повторяет поведение встроенного.

function myMap(arr, callback, thisArg) {
    const result = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        if (i in arr) { // пропуск пустых слотов
            result[i] = callback.call(thisArg, arr[i], i, arr);
        }

    }

    return result;
}

// Пример:
const result = myMap([1, 2, 3], num => num * 2);
console.log(result); // [2, 4, 6]
