/*
* Переименование ключей объекта.
* Напиши функцию renameKeys(obj, map), где map — объект соответствий старого и нового ключа.
* */

const obj = {name: 'Alex', age: 30};
const map = {name: 'fullName'};

const renameKeys1 = (obj, map) => {
    let oldKey = Object.keys(map)[0];
    let newKey = map[oldKey];

    obj[newKey] = obj[oldKey];

    delete obj[oldKey];

    return obj;
}

const renameKeys2 = (obj, map) => {
    let oldKey = null;

    for (let key in map) {
        oldKey = key;
        break;
    }

    obj[map[oldKey]] = obj[oldKey];

    delete obj[oldKey];

    return obj;
}

// Мутация исходного объекта плохая практика.
// Работает только с одним ключом.

const renameKeys = (obj, map) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) =>
            [map[key] || key, value])
    );
};

// console.log(renameKeys1(obj, map)); // { age: 30, fullName: 'Alex' }
// console.log(renameKeys2(obj, map)); // { age: 30, fullName: 'Alex' }

console.log(renameKeys(obj, map));


