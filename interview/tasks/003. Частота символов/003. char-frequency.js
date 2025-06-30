/*
* Частота символов
*
* Напиши функцию charFrequency(str), которая возвращает объект с количеством вхождений каждого символа в строке.
*
* charFrequency('hello'); // → { h: 1, e: 1, l: 2, o: 1 }
* */

const charFrequency = str => {
    const set = new Set(str.split(''));
    const map = new Map();

    set.forEach(item => map.set(item, 0));
    str.split('').forEach(e => map.set(e, map.get(e) + 1));

    return Object.fromEntries(map);
}

const charFrequency1 = str => {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (Object.keys(obj).includes(str[i])) {
            obj[str[i]] = ++obj[str[i]];
        } else {
            obj[str[i]] = 1;
        }
    }

    return obj;
}

const charFrequency2 = str => str.split('')
    .reduce((obj, e) => {
        if (obj[e] === undefined) {
            obj[e] = 1;
        } else {
            obj[e] += 1;
        }

        return obj;
    }, {});

console.log(charFrequency('Hello Hello'));
console.log(charFrequency1('Hello Hello'));
console.log(charFrequency2('Hello Hello'));

// Object.keys(obj).includes(...) делает O(n) проверку — неэффективно
// if (str[i] in obj) или obj.hasOwnProperty(str[i])