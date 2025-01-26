// CJS -- by default
// require('./xyz.js');
// require('./sum.js'); // can't access the function from sum.js
// modules protected by default their functions and variables

// const calculateSum = require('./sum.js'); // can access the function from sum.js
// const obj = require('./sum.js');
// const { x, calculateSum } = require('././calculate/sum.js');

// const calculateMultiply = require('./calculate/multiply.js');

const { calculateSum, calculateMultiply } = require("./calculate");

const data = require("./data.json");
const util = require("node:util");

// this is the line of one branch
const func () {
    console.log("Hello");
}

// console.log(data);
// console.log(util);

// ESM
// import { x, calculateSum } from './sum.js';

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

// console.log(name);
// console.log(a + b);
// calculateSum(a, b);

// console.log(x);
// obj.calculateSum(a, b);
// calculateMultiply(a, b);
