const createTimer = () => {

    const date = new Date();

    return () => {
        const dateNow = new Date();

        return (dateNow.getTime() - date.getTime()) / 1000;
    }
}

const timer = createTimer();

setTimeout(() => {
    console.log(timer());
}, 1000);

setTimeout(() => {
    console.log(timer());
}, 3000);

/* Слегка улучшенная версия */
const createTimer1 = () => {
    const start = Date.now();

    return () => ((Date.now() - start) / 1000).toFixed(1); // округлим до 1 знака
};