'use strict';

let Calculator = require('../dist/index').Calculator;
let cal = new Calculator();
console.log(cal.add(2, 3), cal.multiply(5, 20));
