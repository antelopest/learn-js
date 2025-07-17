/* Задача 4 */

/* Проверка на заполнение формы */

/* Если хотя бы одно из полей пустое — выведи Заполните все поля!. */

const login = "admin";
const password = "12345";

const isEmptyString = str => typeof str === "string" && str.trim().length === 0;

if (isEmptyString(login) || isEmptyString(password)) {
    console.log("Заполните все поля!");
} else if (login === "admin" && password === "12345") {
    console.log("Вход выполнен");
} else {
    console.log("Данные неверные");
}
