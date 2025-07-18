const user = {
    name: 'Alice',
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}

const greetFn = user.greet;

console.log(greetFn()); // Hi, I'm undefined

/*
* Почему undefined?
*
* Потому что:
*
* greetFn - это просто ссылка на функцию greet.
*
* При вызове greetFn() она теряет контекст user,
* и this указывает на undefined (в strict mode) или
* window (в non-strict).
* */

/*
* Решение:
*
* const greetFn = user.greet.bind(user);
*
* Теперь this всегда будет привязан к объекту user, независимо от того, как вызывается функция.
* */