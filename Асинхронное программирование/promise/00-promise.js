/*
Promise
 */


// Синтаксис создания Promise
const promise = new Promise((resolve, reject) => {
  /*
    Функция переданная в конструкцию Promise называется исполнитель (executor)

    Когда promise создается, она вызывается автоматически.
    Эта функция должна содержать код, который когда нибудь создаст результат.

    Аргументы этой функции resolve и reject - это колбэки, которые предоставляет
    сам JS.

    Когда получается результат, то вызывается один из колбэков:
    resolve(value) - если работа завершилась успешно с результатом value
    reject(error) - если произошла ошибка, error - объект ошибки

    У объекта promise, возвращаемого конструктором new Promise есть внутренние свойства:
    state (состояние) - pending (ожидание) => fulfilled => resolve (выполнено успешно) || rejected (выполнено c ошибкой)
    result (результат) - undefined => value при вызове resolve(value) || error при вызове reject(error)

    Функция исполнитель придет в одно и двух состояний
    new Promise (executor) =>
      resolve ( state: 'fulfilled', result: value )
      ||
      reject ( state: 'rejected', result: error )
   */
});

// promise_1 успешно выполнен
const promise_1 = new Promise((resolve) => setTimeout(() => resolve('Done promise #1'), 1000));
promise_1.then(console.log);

// promise_2 выполнена с ошибкой
const promise_2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000));
promise_2.catch(err => console.log('Error promise #2')); // ERROR

// Задача выполняемая функцией исполнителем всегда может иметь только один итог (результат или ошибку)
const promise_3 = new Promise((resolve, reject) => {
  resolve('Done promise #3');

  reject(new Error('..')); // Выполняться не будет
});

promise_3
  .then(result => console.log(result))
  .catch(err => console.log('Error'));

/*
state и result внутренние свойства объекта Promise и мы не имеем к ним прямого доступа.
Для обработки результата следует использовать методы .then, .catch, .finally
функция исполнитель внутри объекта Promise, функции потребители then, catch, finally

Метод then
.then
  function (result) {}
  function (error) {}
*/

promise_3
  .then(
    result => console.log(result),
    error => console.log(error)
  )

/*
Метод catch
.catch
  function (error) {}

Используется только для обработки ошибки
Альтернатива .then(null, f)
 */

promise_2
  .catch(error => console.log('Error promise #2'));

/*
finally
.finally
  function run() {}
Выполняется в любом случае, не дожидаясь выполнения с результатом или ошибкой

Примеры
 */

promise_3
  .finally(
    () => console.log('Pedding result promise #3')
  )
  .then(
    result => console.log(result),
    error => console.log('Error promise #3')
  )

/*
Задача
Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
 */

const delay = (ms) => {
  return new Promise(resolve => setTimeout(() => resolve(`Выполнилось через ${ms}ms`)), ms);
}
delay(3000).then(result => console.log(result));

