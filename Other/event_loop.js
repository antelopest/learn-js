/*

EventLoop (цикл событий):

Каждая веб-страница представляет из себя поток.

setTimeout - как должен работать?

если запускать setTimeout(cb, 5s) в одном потоке, тогда все выполнение кода остановится на 5 секунд

если запускать setTimeout(cb, 5s) в другом потоке, то у него не будет доступа к контексту, откуда был вызван
setTimeout

решение запланировать задачу и продолжить выполнение кода дальше

Task Queue (очереди задач):

setTimeout(cb1, 1000);
setTimeout(cb2, 1000);

Rendering (цикл рендеринга):

Одномоментно может выполняться только одна задача.

requestAnimationFrame - отрисовка


*/
