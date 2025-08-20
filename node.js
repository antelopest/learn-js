function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    increment.resetCount = function () {
        count = 0;
    }

    return increment;
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

counter.resetCount();

counter(); // 1