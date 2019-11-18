/*
Промисицикация | Promisification
Берем функцию, которая принимает callback и меняем её, чтобы она вместо этого возвращала промис.
*/

// Пример функции с callback
const loadScript(src, callback) (
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
)

// Использование:
// loadScript('/path/script.js', (err, script) => { ... });

// Промисифицируем функцию loadScript
const loadScriptPromise = src => new Promise((resolve, reject) => {
  loadScript(src, (err, script) => {
    if (err) reject(err);
    else resolve(script);
  });
});

// Использование
// loadScriptPromise('path/script.js').then(...);
