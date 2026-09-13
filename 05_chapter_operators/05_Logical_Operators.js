//! JavaScript Logical Operators
//! Logical operators are used to combine two or more conditions.
//! The result is usually true or false.

let a = 10;
let b = 5;


//! 1. Logical AND (&&)
// Returns true only when both conditions are true.

console.log(a > 5 && b < 10);   // true
console.log(a > 5 && b > 10);   // false


//! 2. Logical OR (||)
// Returns true when at least one condition is true.

console.log(a > 5 || b > 10);   // true
console.log(a < 5 || b > 10);   // false


//! 3. Logical NOT (!)
// Changes true to false and false to true.

console.log(!(a > 5));   // false
console.log(!(a < 5));   // true


//! Example

let age = 20;
let hasId = true;

// Both conditions must be true
console.log(age >= 18 && hasId);   // true


//! Quick Revision
// &&  -> AND
// ||  -> OR
// !   -> NOT
//
// && -> Both conditions should be true
// || -> At least one condition should be true
// !  -> Reverses the result