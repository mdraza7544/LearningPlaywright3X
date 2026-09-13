//! JavaScript Ternary Operator
// Ternary operator is a short way to write if-else.
// Syntax:
// condition ? value_if_true : value_if_false;


//! Example 1
let age = 20;
let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);

//! Example 2
let marks = 75;
let status = marks >= 40 ? "Pass" : "Fail";
console.log(status);

//! Example 3
let number = 10;
let result2 = number % 2 === 0 ? "Even" : "Odd";
console.log(result2);


// Same example using if-else:
// if (age >= 18) {
//     result = "Adult";
// } else {
//     result = "Not Adult";
// }

// Quick Revision

// ?  -> If condition is true
// :  -> If condition is false
// Syntax:
// condition ? true : false;