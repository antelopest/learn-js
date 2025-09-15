'use strict';

const person = {
  name: 'Sam',
  city: 'Spb',
  country: 'Russia'
};

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);


delete person.name;
console.log({ person });

delete person['city'];
console.log({ person });

// Getter Setter
const person_2 = {
  name: 'Sam',
  get city() {
    return 'Spb';
  },
  set city(value) {
    console.log('Sry, Sam remains in Spb');
  },
};

console.log(person_2.city);
person_2.city = 'Moscow';
console.log(person_2.city);
