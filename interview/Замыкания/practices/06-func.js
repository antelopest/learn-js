const funcs = [];

/* Проблема var в том, что var создает глобальную переменную, которая доступна во всем скрипте, после прохождения цикла значение будет 3 */
for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

/* Замыкания */
for (var i = 0; i < 3; i++) {
    funcs.push(function (i) {

        let index = i;

        return function () {
            console.log(index);
        }
    }(i));
}

/* Через let */
for (let j = 0; j < 3; j++) {
    funcs.push(function () {
        console.log(j);
    });
}






