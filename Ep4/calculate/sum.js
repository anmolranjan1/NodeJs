
var x = 10;

function calculateSum(a, b) {
  const result = a + b;
  console.log(result);
}

// export function calculateSum(a, b) {
//   return a + b;
// }

// z = "Hello World"; // will not give error in cjs but will give error in esm because of strict mode

// module.exports = calculateSum;
// module.exports = {
//     x: x,
//     calculateSum: calculateSum
// }

// console.log(module.exports); {}

// CJS
module.exports = {
  x,
  calculateSum,
};
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

// ESM
// export { x, calculateSum };