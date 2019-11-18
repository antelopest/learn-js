'use strict';

const singleton = (instance => () => instance)({});
console.log(singleton() === singleton());
