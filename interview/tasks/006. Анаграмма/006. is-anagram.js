/*
* Анаграмма
*
* Напиши функцию isAnagram(str1, str2), которая возвращает true,
* если строки являются анаграммами друг друга (одинаковые буквы в разном порядке).
* */

const isAnagram1 = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const arr1 = str1.split('');
    const arr2 = str2.split('');

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.findIndex(e => e === arr1[i]);

        if (index !== -1) arr2.splice(index, 1);
    }

    return arr2.length === 0;
}

const isAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    return str1 === str2;
}

console.log(isAnagram1('listen', 'silent')); // true
console.log(isAnagram1('hello', 'world')); // false

console.log(isAnagram2('listen', 'silent')); // true
console.log(isAnagram2('hello', 'world')); // false


/*
* isAnagram2 - идеальное решение
* На практике самый надежный, но из-за сортировки не так быстр
* */

