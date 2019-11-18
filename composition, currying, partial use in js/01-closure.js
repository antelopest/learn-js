'use strict';

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

