# 7 September 2025

## Теория:

* Примитивные типы.
* Объекты.
* Преобразования типов.
* Сравнение (`==`, `====,` `Object.is`).

### Ответы:

#### Примитивные типы

В JavaScript есть 7 примитивных типов.

* string
* number
* bigint
* boolean
* symbol
* null
* undefined

## Практика:

* Написать функцию isEqual(a, b) с разными кейсами (NaN, +0/-0, null).

```js
const isEqual = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return true;
    }
    
    
    if (typeof a === typeof b) {
        return a === b;
    }
}

isEqual(1, 1); // true
isEqual(1, '1'); // false
isEqual(NaN, NaN); // true
isEqual(0, -0); // true
isEqual(null, null); // true
isEqual(null, undefined); // true
isEqual(undefined, undefined); // true
isEqual(NaN, undefined); // false
isEqual(NaN, null); // false
isEqual(0, null); // false
```