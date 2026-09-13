//! JavaScript String Operators

//! 1. Addition (+)
// Used to join (concatenate) two strings.
let firstName = "Rahul";
let lastName = "Kumar";
console.log(firstName + " " + lastName);

// We can also join a string and a number.
let age = 22;
console.log("Age: " + age);

//! 2. Addition Assignment (+=)
// Used to add another string to an existing string.
let message = "Hello";
message += " Rahul";
console.log(message);

//! 3. Comparison Operators
// Strings can also be compared using == and ===.
console.log("Hello" == "Hello");     // true
console.log("Hello" === "Hello");    // true
console.log("Hello" == "hello");     // false

//! 4. Template Literal
// Backticks (`) can be used to combine strings and variables.
let name = "Rahul";
let course = "MCA";
console.log(`My name is ${name} and I am studying ${course}.`);

//! Quick Revision
// +   -> Joins strings
// +=  -> Adds and assigns a string
// ==  -> Compares strings
// === -> Strictly compares strings
// ` ` -> Template literal