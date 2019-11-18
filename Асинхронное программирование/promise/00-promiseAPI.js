/*
Promise API
В классе Promise есть 5 статических методов

Promise.all
Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис.

Параллельно выполнит несколько операций и обработает результат, когда он будет готов.

Новый промис завершится, когда завершится весь переданный списо промисов и его результатом будет массив их результатов
*/

// Синтаксис Promise.all
// const promise = Promise.all([ ... промисы ... ]);

// Пример Promise.all
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then((result) => {
  console.group();
  console.dir({ arrayResults: result }); // 1 2 3
  console.groupEnd();
});

// Порядок элементов массива в точности соответствует исходному порядку промисов,
// абсолютно не важна последовательность возвращающихся результатов,
// порядок остается неизменным.

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];
// Работает в Browser
// let requests = urls.map(url => fetch(url));

// Promise.all(requests)
//   .then(responses => responses.forEach(response => console.log(`${response.url}:${response.status}`)));

// Если любой из промисов завершится с ошибкой, то промис, возвращенный Promise.all немедленно завершается с этой ошибкой.


// Пример Promise.all возвращение с ошибкой
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(
  result => {
    console.group();
    console.dir({ arrayResults: result }); // 1 2 3
    console.groupEnd();
  },
  error => console.log(error) // Выполнится catch все остальные результаты будут проигнорированы
);

// В Promise.all можно передавать не только промисы, но и объекты, которые будут возвращены, как есть
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(console.log); // 1, 2, 3


/*
Promise.allSettled
возвращает массив результатов выполняния всех промисов, куда входят ошибки и успешные завершения

Возможность была добавлена недавно, поэтому для работы может потребоваться полифил
 */

// Promise.allSettled([
//   // промисы
// ]).then(
//   console.log // обработка результатов
// )

// Полифил для Promise.allSettled
// if (!Promise.allSettled) {
//   Promise.allSettled =
//     (promises) =>
//       Promise.all(promises.map(
//         p =>
//           Promise.resolve(p)
//             .then(
//               value => { state: 'fulfilled', value: value },
//               error => { state: 'rejected', reason: error }
//             )));
// }

/*
* Promise.race похож на all, но берет только первый промис из которого берет результат или ошибку
*/

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // 1

// Быстрее выполнится первый промис, он и даст результат, другие заигнорируются

/*
* Promise.resolve / reject
* редко используются, на смену им пришел async await
* Promise.resolve - успешный промис
* Promise.reject - завершенный с ошибкой
 */

let promise = new Promise(resolve => resolve(value));
let promise_1 = new Promise((resolve, reject) => reject(new Error('Error')));

/*
* Итоги:
* Promise.all - вернуть все успешные результаты или вернуть ошибку как один из промисов вернет ошибку
* Promise.allSettled - вернуть все результаты
* Promise.race - вернуть первый результат
* Promise.resolve - вернуть успешный результат
* Promise.reject - вернуть ошибку
* Самый часто используемый all.
 */
