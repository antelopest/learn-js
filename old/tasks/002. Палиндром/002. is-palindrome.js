/*
* Палиндром
*
* Напиши функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны,
* без учета регистра).
* */

const isPalindrome = str =>
    str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Level"));