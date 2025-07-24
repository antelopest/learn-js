# Модули: ESM

## ESM (ECMAScript Modules)

> Современный стандарт модулей, используется в браузерах и современных сборщиках (Vite, Webpack, Rollup).

### Особенности:

* Поддерживается нативно в браузерах (если указать `type="module"` в `<script>`).
* Поддерживает асинхронную загрузку (можно использовать import() динамически).
* Работает только в строгом режиме (strict mode).
* Использует import и export.

#### Пример

```js
// utils.js
export const sum = (a, b) => a + b;
export default function hello() {
    console.log('Hello!');
}
```

```js
// main.js
import hello, {sum} from './utils.js';

hello(); // Hello!
console.log(sum(2, 3)); // 5
```