/*
* Фильтр по возрасту
*
* Есть массив объектов.
* Напиши функцию filterAdults(users), которая возвращает массив только совершеннолетних (18+).
*
* filterAdults(users); // → [ { name: 'Mike', age: 20 }, { name: 'Jane', age: 22 } ]
* */

const filterAdults = users => {
    if (users.length === 0) return [];

    const adults = [];

    users.forEach(e => {
        if (e.age >= 18) adults.push(e);
    });

    return adults;
};

const filterAdults1 = users => users.filter(e => e.age >= 18);

const users = [
    {name: 'Anna', age: 17},
    {name: 'Mike', age: 20},
    {name: 'John', age: 15},
    {name: 'Jane', age: 22}
];

console.log(filterAdults(users));
console.log(filterAdults1(users));
