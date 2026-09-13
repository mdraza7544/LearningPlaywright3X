//! JavaScript Comparison Operators
//! Comparison operators are used to compare two values.
//! The result will be either true or false.

let a = 10;
let b = 5;

//! 1. Equal to (==)
// Checks whether two values are equal.
// It can convert the data type before comparing.
console.log(a == b);   // false
console.log(10 == "10");   // true


//! 2. Strict Equal to (===)
// Checks both value and data type.
console.log(a === b);   // false
console.log(10 === "10");   // false


//! 3. Not Equal to (!=)
// Checks whether two values are not equal.
console.log(a != b);   // true


//! 4. Strict Not Equal (!==)
// Checks value and data type.
console.log(a !== b);   // true
console.log(10 !== "10");   // true


//! 5. Greater than (>)
// Checks if the first value is greater.
console.log(a > b);   // true


//! 6. Less than (<)
// Checks if the first value is smaller.
console.log(a < b);   // false


//! 7. Greater than or Equal to (>=)
console.log(a >= 10);   // true
console.log(a >= 15);   // false


//! 8. Less than or Equal to (<=)
console.log(a <= 10);   // true
console.log(a <= 5);    // false

//! Quick Revision
// ==   -> Equal to
// ===  -> Strict equal to
// !=   -> Not equal to
// !==  -> Strict not equal to
// >    -> Greater than
// <    -> Less than
// >=   -> Greater than or equal to
// <=   -> Less than or equal to