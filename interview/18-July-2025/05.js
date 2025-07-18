const obj = {
    a: 1,
    b: {c: 2, d: [3, 4]},
    e: null
};

/* Easy answer */
const deepClone = (obj) => {
    const json = JSON.stringify(obj);
    return JSON.parse(json);
}

const cloned = deepClone(obj);

console.log(cloned); // { a: 1, b: { c: 2, d: [3, 4] }, e: null }
console.log(cloned !== obj); // true
console.log(cloned.b !== obj.b); // true
console.log(cloned.b.d !== obj.b.d); // true

/* Hard answer */
const deepClone1 = (obj) => {

    const isPrimitive = value => {
        return value === null || (typeof value !== 'object' && typeof value !== 'function');
    }

    const isArray = value => {
        return Array.isArray(value);
    }

    if (isPrimitive(obj)) return obj;

    const result = isArray(obj) ? [] : {};

    for (let key in obj) {
        result[key] = deepClone1(obj[key]);
    }

    return result;
}

const cloned1 = deepClone1(obj);

console.log(cloned1); // { a: 1, b: { c: 2, d: [3, 4] }, e: null }
console.log(cloned1 !== obj); // true
console.log(cloned1.b !== obj.b); // true
console.log(cloned1.b.d !== obj.b.d); // true

const deepClone2 = (obj, seen = new WeakMap()) => {
    // Проверяем примитивы
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Проверяем циклические ссылки
    if (seen.has(obj)) {
        return seen.get(obj);
    }

    // Создаём новый объект или массив
    const result = Array.isArray(obj) ? [] : {};

    // Сохраняем объект в WeakMap перед рекурсией
    seen.set(obj, result);

    // Перебираем только собственные свойства
    for (const key of Object.keys(obj)) {
        result[key] = deepClone2(obj[key], seen);
    }

    return result;
};

obj.self = obj; // Циклическая ссылка

const cloned2 = deepClone2(obj);

console.log(cloned2); // Работает без ошибки
console.log(cloned2 !== obj); // true
console.log(cloned2.b !== obj.b); // true
console.log(cloned2.b.d !== obj.b.d); // true
console.log(cloned2.self === cloned); // true (циклическая ссылка сохранена)