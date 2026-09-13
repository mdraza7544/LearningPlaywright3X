//! == and === in JavaScript
//! 1. Equal to (==)
// Checks the value.
// JavaScript may convert the data type.

console.log(10 == "10");     // true
console.log("" == "0");      // false
console.log("" == 0);        // true
console.log("0" == 0);       // true


//! 2. Strict Equal to (===)
// Checks value AND data type.
// It does not convert the data type.

console.log(10 === "10");    // false
console.log("" === "0");     // false
console.log("" === 0);       // false
console.log("0" === 0);      // false


//! Difference
// ==  -> Checks value after type conversion
// === -> Checks value + data type


// Example
let a = "";
let b = "0";

console.log(a == b);     // false
console.log(a === b);    // false