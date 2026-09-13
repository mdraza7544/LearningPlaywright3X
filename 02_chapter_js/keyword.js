//todo JavaScript Keywords

//! What is a Keyword?
// A keyword is a reserved word in JavaScript
// that has a special meaning.
// We cannot normally use keywords as variable names.


// Examples of Keywords
// --------------------

//! let, const and var are used to declare variables.

let name = "Rahul";
const age = 22;
var city = "Bengaluru";


//! if and else are used for conditions.

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}


//! for is used for looping.

for (let i = 1; i <= 3; i++) {
    console.log(i);
}


//! function is used to create a function.

function greet() {
    console.log("Hello");
}

greet();


// return is used to return a value from a function.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Some common JavaScript keywords:
//  let, const, var, if, else, for, while, function, return, class, new, this, switch, case, break, continue, try, catch, throw


// Wrong example:
// let class = "MCA";   // Error
// "class" is a keyword and cannot be used as an identifier.


// Quick Revision
// ==============
//
// Keyword = Reserved word with a special meaning.
//
// Example:
// let      -> declares a variable
// const    -> declares a constant
// if       -> checks a condition
// for      -> creates a loop
// function -> creates a function
// return   -> returns a value