// Задача 3

// Симулируй запрос на сервер с помощью fetch или setTimeout, обрабатывай успешный результат и ошибки.

// Условие:
// - Если promise resolve, вывести "Data: ..."
// - Если reject, вывести "Error: ..."

async function getData() {
    function fakeFetch() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    resolve('Data');
                } else {
                    reject('Error fetching data');
                }
            }, 1000);
        });
    }

    try {
        const data = await fakeFetch();
        console.log(`Data: ${data}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

getData();
getData();
getData();
getData();