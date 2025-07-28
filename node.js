Promise.resolve(1)
    .then(x => {
        console.log('FIRST THEN');
        console.log(x);
        return x + 1;
    })
    .finally(x => {
        console.log('FINALLY');
        console.log(x);
        return 100;
    })
    .then(x => {
        console.log('SECOND THEN');
        console.log(x);
    });