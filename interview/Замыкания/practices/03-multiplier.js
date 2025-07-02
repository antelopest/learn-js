const createMultiplier = (initNumber) => {

    let number = initNumber;

    return (n) => {
        number *= n;
    }
}

const multiplier = createMultiplier(2);

multiplier(3); // 6
multiplier(4); // 24