/*
Promisify(f) - принимает функцию для промисификации f и возвращает функцию обертку
Функция-обертка: возвращает промис и передает вызов оригинальной f, отслеживая результат в callback'e
 */

const promisify = f => function (...args) { // возвращает функцию обертку
  return new Promise((resolve, reject) => {
    function callback(err, result) { // специальный callback для функции f
      if (err) return reject(err)
      else resolve(result)
    }

    args.push(callback); // добавляем callback в конец аргументов f

    f.call(this, ...args); // вызываем оригинальную функцию
  })
}

// Использование
// const loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);

// Существуют модули с более гибкой промисификацией, например es6-promisify или встроенная функция util.promisify в Node.js

/*
Промисификация - это отличный подход, но он не является тотальной заменой любых callback'ов
Promise может иметь лишь один результат, но callback технически может вызываться сколько угодно раз.
Поэтому промисификация используется для функций, которые вызывают callback только один раз.
*/
