# Модули: CommonJS

## CommonJS (CJS)

> Старый стандарт модулей, использовался в Node.js по умолчанию до недавнего времени.

### Особенности:

* Синхронная загрузка модулей (подходит только для серверной среды).
* Использует `require()` и `module.exports`.
* Работает вне браузера (Node.js, особенно версии до 13).

#### Пример

```js
// utils.js
function sum(a, b) {
    return a + b;
}

module.exports = {
    sum
};
```

```js
// main.js
const {sum} = require('./utils');

console.log(sum(2, 3)); // 5
```