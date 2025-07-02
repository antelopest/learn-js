function Logger(name) {
    this.name = name;

    this.sayHi = function () {
        console.log(`Hello from ${this.name}`); // undefined
    }

    setTimeout(() => {
        this.sayHi();
    }, 1000);

    setTimeout(function () {
        this.sayHi();
    }.bind(this), 1000);
}

new Logger('Simon');

/*
1. Через одну секунду произойдет ошибка, о том, что в this нет метода sayHi
2. Внутри setTimeout функция создаст свой контекст в котором будет отсутствовать sayHi
3. Исправить можно заменить классическую функцию на стрелочную внутри setTimeout, либо передать bind(this) в функцию setTimeout
*/
