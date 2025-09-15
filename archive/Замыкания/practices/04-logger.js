const createLogger = () => {

    const logs = [];

    return (message) => {
        logs.push(message);

        return [...logs]; // возвращать лучше копию, чтобы не было возможности мутировать массив logs
    }
}

const logger = createLogger();

console.log(logger('first'));
console.log(logger('second'));
console.log(logger('third'));