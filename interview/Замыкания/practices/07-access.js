const createAccess = (password) => {
    let done = false;

    return (input) => {
        if (done) return false;

        if (password === input) {
            done = true;

            return true;
        }

        return false;
    }
}

const access = createAccess('secret');

console.log(access('wrong'));  // false
console.log(access('secret')); // true
console.log(access('secret')); // false