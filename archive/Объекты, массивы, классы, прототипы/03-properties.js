'use strict';

const person = {
  name: 'Sam',
  city: 'Spb',
  born: 'Russia',
};
// If object person have properties 'name' then return true
if ('name' in person) {
  console.log('Person name is: ' + person.name);
}

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

// Variables to hash
const name = 'Sam Sam';
const city = 'Spb';

// Old Style
const person_1 = { name: name, city: city };
console.dir(person_1);

// New Style
const person_2 = { name, city };
console.dir(person_2);

// Dynamic field name
const fieldName = 'city';
const fieldValue = 'Spb';
const person_3 = {
  name: 'Sam Sam',
  [fieldName]: fieldValue,
};
console.dir(person_3);

// Expression in field name
const person_4 = {
  name: 'Sam Sam',
  ['city' + 'Born']: fieldValue,
};
console.dir(person_4);

// Function in field name
function fn(s) {
  return s + 'Born';
}
const person_5 = {
  name: 'Sam Sam',
  [fn('city')]: fieldValue,
};
console.dir(person_5);


