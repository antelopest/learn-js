/*
* Async/await
* Специальный синтаксис для работы с промисами.
*
* Асинхронные функции
* async перед функцией означает, что функция всегда возвращает промис.
* await ключевое слово заставит интерпретатор js ждать до тех пор, пока промис справа от await
* не выполнится. Можно использовать только внутри async функции
*/

async function f() {
  return 1;
}

f().then(console.log);

// or

async function f1() {
  return Promise.resolve(1);
}

f().then(console.log);

/*
*
* await ключевое слово заставит интерпретатор js ждать до тех пор, пока промис справа от await
* не выполнится. Можно использовать только внутри async функции
*
* await не отнимает ресурсов процессора, JS движок может заниматься другими задачами
* нельзя использовать в обычных функциях
*
*/

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
  });

  let result = await promise; // ожидает выполнения промиса

  console.log(result);
}

f2();

// Можно обернуть в анонимную async function
// (async () => {
//   let response = await fetch('http://localhost:3000');
//   let user = await fetch('http://localhost:3000/user');
//   ...
// })();

/*
* Итого
* Ключевое слово async перед объявлениям функции:
* 1. Обязывает её всегда возвращать промис.
* 2. Позволяет использовать await в теле этой функци.
*
* Ключевое слово await перед промисом заставить JS дождаться его выполнения, после чего:
* 1. Если промис вернется с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw
* 2. Иначе вернется результат промиса
*
 */


// Перепишите, используя async/await:
// function loadJSON(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }
//
// loadJSON('url')
//   .catch(alert);
//
// async function loadJson(url) {
//   const res = await fetch(url);
//
//   if (res.status === 200) return await res.json();
//   else throw new Error(res.status);
// }
//
// loadJson('url').catch(console.log);

// Вызовите async функцию из обычной
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f5() {
  wait().then(result => console.log(result));
}

f5();
