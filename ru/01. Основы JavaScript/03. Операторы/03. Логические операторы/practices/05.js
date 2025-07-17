/* Задача 5 */

/* Проверка на заполнение формы */

/* Если хотя бы одно из полей пустое - выведи Заполните все поля! */

const name = "Anna";
const email = "";

const isEmptyString = str => typeof str === 'string' && str.trim().length === 0;
const hasEmptyField = (...fields) => {
    return fields.some(field => isEmptyString(field));
}

if (hasEmptyField(name, email)) {
    console.log("Заполните все поля!")
}