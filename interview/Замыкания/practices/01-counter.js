const createCounter = () => {

    let counter = 0;

    return () => {
        ++counter;

        console.log(counter);
    }
}

const counter = createCounter();

counter();
counter();
counter();