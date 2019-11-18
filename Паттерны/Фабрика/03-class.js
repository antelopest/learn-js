'use strict';

const logable = fields => class Logable {
  constructor (data) {
    this.values = data;

    for (const key in fields) {
      Object.defineProperty(
        Logable.prototype,
        key,
        {
          get() {
            console.log('Reading key: ', key);
            return this.values[key];
          },
          set(value) {
            console.log('Writing key :', key, value);
            const def = fields[key];
            const valid = (
              typeof value === def.type &&
              def.validate(value)
            );

            if (valid) this.values[key] = value;
            else console.log('Validation failed: ', key, value);
          }
        }
      )
    }
  }

  toString() {
    let result = this.constructor.name + '\t';
    for (const key in fields) {
      result += this.values[key] + '\t';
    }
    return result;
  }
};

const Person = logable({
  name: { type: 'string', validate: name => name.length > 0 },
  age: { type: 'number', validate: age => !(age % 1)},
});

const p_1 = new Person({ name: 'Sam', age: 26 });

console.log(p_1);

