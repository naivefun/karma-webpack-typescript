'use strict';

let Calculator = require('karma-webpack-typescript').Calculator;
let cal = new Calculator();
console.log(cal.add(2, 3), cal.multiply(5, 20));
// run with 'node example.js'
