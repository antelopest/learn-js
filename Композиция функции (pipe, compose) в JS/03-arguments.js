'use strict';

/*
* REST, Spread оператор
* ... применяется по-разному, в зависимости от контекста применения.
* Spread используется для разделения коллекций на отдельные элементы
* REST наоборот, для соединения отдельных значений в массив
* */

/*
* Pipe
* - это канал, который связывает поток для чтения и поток для записи и позволяет сразу читать из потока
* чтения в поток записи.
* */

const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));

// Usage

{
  const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
  const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
  const lower = s => s.toLowerCase();

  const s = 'ANTELOPE HOSTING FAST VPS FASTVPS';
  console.log(s);
  console.log(`lower('${s}) = '${upperCapital(s)}'`);

  {
    // Справа налево
    console.log('Use compose');
    const capitalize = compose(upperCapital, lower);
    console.log(`capitalize(${s}) = '${capitalize(s)}'`);
  }
  {
    // Слева направо
    console.log('Use pipe');
    const capitalize = pipe(lower, upperCapital);
    console.log(`capitalize(${s}) = '${capitalize(s)}'`);
  }
}





