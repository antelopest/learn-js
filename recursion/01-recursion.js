'use strict';
// Получить максимальную глубину рекурсии использованного интерпретатора JS
const getMaxCallStackSize = i => {
  try {
    return getMaxCallStackSize(++i);
  } catch (e) {
    return i;
  }
};

console.log(getMaxCallStackSize(0));

// Доступная глубина стека зависит от количества созданных локальный переменных
// Объекты естественно в контексте не хранятся, хранятся только ссылки на объекты


