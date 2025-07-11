const greet = () => {
    console.log('Hello!');
}

const once = (fn) => {
    let called = false;

    return () => {
        if (!called) {
            fn();
            called = true;
        }
    }
}

const greetOnce = once(greet);

greetOnce();
greetOnce();
greetOnce();
greetOnce();
greetOnce();