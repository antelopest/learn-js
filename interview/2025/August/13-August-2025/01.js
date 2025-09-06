// Задача 1

// Развернуть строку без использования встроенного метода reverse()

// Пример:
// input: "JavaScript"
// output: "tpircSavaJ"

function reverseString(str) {
    let array = [];

    for (let i = str.length - 1; i >= 0; i--) {
        array.push(str[i]);
    }

    return array.join('');
}

let str1 = "JavaScript";
let str2 = "HelloWorld";

console.log(reverseString(str1)); // "tpircSavaJ"
console.log(reverseString(str2)); // "dlroWolleH"

function reverseString1(str) {
    return str.split('').reduce((acc, cur) => cur + acc, '');
}

console.log(reverseString1(str1)); // "tpircSavaJ"
console.log(reverseString1(str2)); // "dlroWolleH"