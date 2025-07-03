// const reverseString1 = str => str.split('').reverse().join('');
//
// const reverseString2 = str => {
//     let reversedString = '';
//
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i];
//     }
//
//     return reversedString;
// }
//
// console.log(reverseString1('hello'));
// console.log(reverseString2('hello'));

const isPalindrome1 = str => {
    let reversedString = str.split('').reverse().join('');

    return str === reversedString;
}

console.log(isPalindrome1('level'));
console.log(isPalindrome1('world'));