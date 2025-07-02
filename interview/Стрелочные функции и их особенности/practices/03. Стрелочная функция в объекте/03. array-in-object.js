const counter = {
    count: 0,
    inc: () => {
        console.log(this);
        this.count++;
    },
};

counter.inc();
console.log(counter.count); // 0

/*
* Стрелочная функция не будет видеть count в this
* если non strict mode - в this будет window
* если это string mode - в this будет undefined
* */

/*
* Решение
*
* Если нужен доступ к this,
* Внутри object не использовать струлочные функции
* */

const counter1 = {
    count: 0,
    inc() {
        this.count++;
    },
};

counter1.inc();
console.log(counter1.count); // 1

