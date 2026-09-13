//! JavaScript typeof Operator
// typeof is used to find the data type of a value or variable.


// String
let name = "Rahul";
console.log(typeof name);      // string

// Number
let age = 22;
console.log(typeof age);       // number

// Boolean
let isStudent = true;
console.log(typeof isStudent); // boolean

// Undefined
let address;
console.log(typeof address);   // undefined

// Object
let student = {
    name: "Rahul",
    age: 22
};
console.log(typeof student);   // object

// Array
let marks = [80, 90, 75];
console.log(typeof marks);     // object

// Null
let result = null;
console.log(typeof result);    // object

// Function
function greet() {
    console.log("Hello");
}

console.log(typeof greet);     // function

// Quick Revision
// typeof "Hello"     -> string
// typeof 100        -> number
// typeof true       -> boolean
// typeof undefined  -> undefined
// typeof null       -> object
// typeof []         -> object
// typeof {}         -> object
// typeof function   -> function