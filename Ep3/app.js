var name = "Namaste NodeJS";

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);

console.log(this); // empty object {}
console.log(global); // given by NodeJS
console.log(this === global); // false

// There refer to global object in browser:
// window
// this
// frames
// self

// globalThis - support everywhere - for global object
console.log(globalThis === global); // true
