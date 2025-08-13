// Задача 4

// Функция должна откладывать выполнение переданной функции, пока не пройдет заданное время после последнего вызова.

function debounce(fn, delay) {

    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const log = debounce(() => console.log('Hello'), 1000);

log();
log();
log();
log();
log(); // Выполнится только один раз через 1 секунду после последнего вызова

// debounce с отменой

function debounce1(fn, delay) {
    let timeoutId;

    function debounced(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }

    debounced.cancel = () => {
        clearTimeout(timeoutId);
    }

    return debounced;
}

const log1 = debounce1(() => console.log('Hello'), 1000);

log1();
log1();
log1();
log1();

log1.cancel();
