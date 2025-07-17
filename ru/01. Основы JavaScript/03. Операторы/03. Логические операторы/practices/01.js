/* Задача 1 */

/* Вывести сообщение, если пользователь ввел имя */

const username = prompt("Your name:");
if (username && username.trim()) console.log("Hello, " + username);