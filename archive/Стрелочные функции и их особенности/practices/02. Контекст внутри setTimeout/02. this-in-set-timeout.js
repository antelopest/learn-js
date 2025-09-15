const timer = {
    message: "Time's up",
    start() {
        setTimeout(function () {
            console.log(this.message);
        }, 1000);
    }
}

timer.start(); // undefined

/*
* Почему undefined?
*
* Внутри setTimeout вызывается обычная функция
* Она создает собственный this, где нет свойства message
* */

/*
* Решения
*/

/*
* 1 - заменить на стрелочную функцию (наследует внешний this)
* */

const timer1 = {
    message: "Time's up",
    start() {
        setTimeout(() => {
            console.log(this.message);
        }, 1000);
    }
}

timer1.start(); // Time's up


/*
* 2 - забиндить контекст
* */

const timer2 = {
    message: "Time's up",
    start() {
        setTimeout(function () {
            console.log(this.message);
        }.bind(this), 1000);
    }
}

timer2.start(); // Time's up

/*
* 3 - сохранить контекст
*  */

const timer3 = {
    message: "Time's up",
    start() {
        const self = this;
        setTimeout(function () {
            console.log(self.message);
        }, 1000);
    }
}

timer3.start();
