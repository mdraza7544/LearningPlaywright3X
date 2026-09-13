// JavaScript Identifier Rules
// ===========================


// What is an Identifier?
// ----------------------
// An identifier is the name given to a variable, function, class, etc.

// Example:
let studentName = "Rahul";

// Here, studentName is an identifier.



// 1. Identifier can start with a letter---------

let name = "Rahul";
let age = 20;
let studentName1 = "Ravi";

console.log(name);
console.log(age);
console.log(studentName1);


// 2. Identifier can start with underscore (_)----------------

let _name = "Rahul";
let _age = 21;

console.log(_name);
console.log(_age);


// 3. Identifier can start with dollar sign ($)-----------------

let $price = 500;
let $name = "Mobile";

console.log($price);
console.log($name);


// 4. Identifier cannot start with a number-------------

// Wrong example:
// let 1name = "Rahul";   // Error

// But we can use numbers after the first character.

let name1 = "Rahul";
let student123 = "Ravi";

console.log(name1);
console.log(student123);


// 5. Spaces are not allowed in identifiers--------------

// Wrong example:
// let student name = "Rahul";   // Error

// Correct example:
let studentName2 = "Rahul";

console.log(studentName2);


// 6. Special characters are not allowed----------

// Wrong examples:
// let student-name = "Rahul";    // Error
// let student@name = "Rahul";    // Error
// let student#name = "Rahul";    // Error

// Underscore (_) and dollar sign ($) are allowed.

let student_name = "Rahul";
let student$name = "Ravi";

console.log(student_name);
console.log(student$name);


// 7. Identifiers are case-sensitive------
// Uppercase and lowercase letters are treated differently.

let city = "Bengaluru";
let City = "Mysuru";

console.log(city);
console.log(City);

// city and City are two different identifiers.



// 8. Reserved keywords cannot be used as identifiers-----------------------
// JavaScript has some reserved words.
// These words cannot be used as variable names.

// Wrong examples:
// let class = "MCA";        // Error
// let function = "Hello";  // Error
// let return = 10;         // Error
// let if = 20;             // Error


// Some JavaScript reserved keywords are:
//
// if, else, for, while, class, function, return, let, const, var, new, this, switch, case, break



// Example of valid identifiers

let firstName = "Rahul";
let lastName = "Kumar";
let age2 = 22;
let _college = "ABC College";
let $fees = 50000;

console.log(firstName);
console.log(lastName);
console.log(age2);
console.log(_college);
console.log($fees);



// Example of invalid identifiers---

// let 123name = "Rahul";       // Cannot start with number
// let student name = "Ravi";  // Spaces are not allowed
// let student-name = "MCA";   // Hyphen is not allowed
// let student@name = "Ravi";  // @ is not allowed
// let class = "MCA";          // Reserved keyword



// Simple example
// --------------

let student = "Rahul";
let studentAge = 22;
let course = "MCA";

console.log("Student Name:", student);
console.log("Age:", studentAge);
console.log("Course:", course);


// In the above example:
//
// student      -> Identifier
// studentAge   -> Identifier
// course       -> Identifier



// Quick Revision
// --------------
//
// 1. Identifier can start with a letter.
// 2. Identifier can start with _.
// 3. Identifier can start with $.
// 4. Identifier cannot start with a number.
// 5. Spaces are not allowed.
// 6. Special characters are not allowed.
// 7. Identifiers are case-sensitive.
// 8. Reserved keywords cannot be used.