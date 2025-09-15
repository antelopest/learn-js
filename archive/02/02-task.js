/*
* Задача 2
*
* Асинхронная очередь запросов
*
* Напишите функцию fetchInSequence,
* которая принимает массив URL-адресов и выполняет HTTP-запросы (с помощью fetch)
* к этим адресам последовательно (один за другим, не параллельно).
* Функция должна возвращать массив результатов (данные в формате JSON) в порядке запросов.
* Если запрос завершается ошибкой, функция должна продолжить выполнение оставшихся запросов
* и вернуть null для неудачного запроса.
* */

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

const fetchInSequence = async (urls) => {
    if (!Array.isArray(urls)) {
        throw new Error('Input must be an array');
    }

    const fetchJSONorNull = async (url) => {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error('Request failed');

            return await response.json();
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const results = [];

    for (const url of urls) {
        const result = await fetchJSONorNull(url);
        results.push(result);
    }

    return results;
}

fetchInSequence(urls).then(r => console.log(r));