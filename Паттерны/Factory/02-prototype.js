'use strict';

const logable = fields => {

  // Возвращение прототипа
  function Logable(data) {
    this.values = data;
  }

  // Цикл перебора полученных полей
  for (const key in fields) {
    Object.defineProperty( // defineProperty определяет новое или изменяет существующее свойство непосредственно на объекте,
                           // возвращая этот объект
      Logable.prototype, // Объект на котором определяем свойство
      key, // имя определенного или изменяемого свойства
      { // дескриптор определяемого или изменяемого свойства
        get() {
          console.log('Reading key:', key);
          return this.values[key];
        },
        set(value) {
          console.log('Writing key: ', key, value);
          const def = fields[key];

          const valid = (
            typeof value === def.type && // Проверка типа
            def.validate(value) // Проверка ограничения
          );

          if (valid) this.values[key] = value;
          else console.log('Validation failed:', key, value);
        },
      },
      );
  }

  // Изменяем метод toString прототипа
  Logable.prototype.toString = function() {
    let result = this.constructor.name + ': ';
    for (const key in fields) {
      result += this.values[key] + ' ';
    }
    return result;
  };

  return Logable; // Возвращаем результат нашего прототипа
};

// Usage
// logable динамически создает прототип
const Person = logable({
  // в прототипе есть два поля на которые накладываются ограничения
  name: { type: 'string', validate: name => name.length > 0 },
  age: { type: 'number', validate: age => !(age % 1) },
});

const p_1 = new Person({ name: 'Sam', age: 26 });
console.dir(p_1.toString());

p_1.age = 29;
console.dir(p_1.toString());

p_1.name = 'Samuel';
p_1.age = 27;
console.dir(p_1.toString());

