function color() {
    const colors = [
        '#cccccc', '#000000', '#ffffff'
    ];

    let lastIndex = 0;

    return function () {
        lastIndex = lastIndex + 1 === colors.length ? 0 : ++lastIndex;
        return colors[lastIndex];
    }
}

const getColor = color();

console.log(getColor());
console.log(getColor());
console.log(getColor());
console.log(getColor());