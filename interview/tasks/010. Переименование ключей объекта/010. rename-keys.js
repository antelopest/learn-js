/*
* Переименование ключей объекта.
* Напиши функцию renameKeys(obj, map), где map — объект соответствий старого и нового ключа.
* */

const obj = { name: 'Alex', age: 30 };
const map = { name: 'fullName' };

const renameKeys = (obj, key) => {
    let oldKey = map.keys();
    console.log(oldKey);

   // delete obj[map.name];
}

console.log(renameKeys(obj, map));

