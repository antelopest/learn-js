/*
* Задача 1: Функция для группировки элементов массива по ключу (Средний уровень)
*
* Описание:
* Напишите функцию groupBy,
* которая принимает массив объектов и ключ (строку),
* по которому нужно сгруппировать элементы.
* Функция должна возвращать объект,
* где ключи — это уникальные значения указанного ключа,
* а значения — массивы объектов, соответствующих этому ключу.
* */

const data = [
    {id: 1, category: 'fruit', name: 'apple'},
    {id: 2, category: 'vegetable', name: 'carrot'},
    {id: 3, category: 'fruit', name: 'banana'},
    {id: 4, category: 'vegetable', name: 'broccoli'},
    {id: 5, category: undefined, name: 'broccoli'},
];

const groupBy = (data, key) => {
    const map = new Map();

    data.forEach((element) => {
        let groupKey = element[key];

        map.set(groupKey, (map.get(groupKey) || []).concat([element]));
    });

    return Object.fromEntries(map);
}

const groupBy1 = (data, key) => {
    return data.reduce((result, element) => {
        const groupKey = element[key] ?? 'undefined';
        result[groupKey] = (result[groupKey] || []).concat([element]);
        return result;
    }, {})
}

console.log(groupBy(data, 'category'));
console.log(groupBy1(data, 'name'));