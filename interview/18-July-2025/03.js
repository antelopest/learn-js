// Задача 3

/*
Напишите функцию debounce, которая:

* Принимает функцию (func) и задержку в миллисекундах (delay).
* Возвращает новую функцию, которая:
  * Выполняет func только один раз за указанный период delay, игнорируя все промежуточные вызовы.
  * Выполняет последний вызов функции, если она вызывалась многократно в течение delay.
  * Поддерживает передачу любых аргументов и контекста this в исходную функцию.
* Код должен быть читаемым и универсальным.
* */

function log(message) {
    console.log(message);
}

function debounce(func, delay) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const debouncedLog = debounce(log, 1000);

debouncedLog("Hello"); // Игнорируется
debouncedLog("Hello again"); // Будет вызвано, так как вызвано последним