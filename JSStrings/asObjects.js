// Normally, JavaScript strings are primitive values, created from literals:
let x = "Tuhin";

// But strings can also be defined as objects with the keyword new:
let y = new String("Tuhin");

console.log(x);
console.log(y);
// Do not create Strings objects.
// The new keyword complicates the code and slows down execution speed.
// String objects can produce unexpected results: