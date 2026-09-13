// JavaScript Naming Conventions
// There are different ways to write names of variables,
// functions, classes, etc.

// The three common naming styles are:
// 1. camelCase
// 2. PascalCase
// 3. snake_case



// 1. camelCase
// In camelCase:
// - The first word starts with a small letter.
// - The next words start with a capital letter.
// - There are no spaces between words.

// Example:
// studentName
// firstName
// mobileNumber
// totalMarks


let studentName = "Rahul";
let firstName = "Ravi";
let mobileNumber = "9876543210";
let totalMarks = 450;

console.log(studentName);
console.log(firstName);
console.log(mobileNumber);
console.log(totalMarks);


// More examples of camelCase:

let collegeName = "ABC College";
let studentAge = 22;
let emailAddress = "rahul@gmail.com";
let dateOfBirth = "10-05-2003";

console.log(collegeName);
console.log(studentAge);
console.log(emailAddress);
console.log(dateOfBirth);



// 2. PascalCase
// In PascalCase:
// - Every word starts with a capital letter.
// - There are no spaces between words.

// Example:

// StudentName
// FirstName
// MobileNumber
// TotalMarks

// PascalCase is commonly used for:
// - Classes
// - Constructor names
// - Components


class StudentDetails {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new StudentDetails("Rahul", 22);

console.log(student1.name);
console.log(student1.age);


// More PascalCase examples:

class BankAccount {
}

class StudentInformation {
}

class EmployeeDetails {
}



// 3. snake_case
// In snake_case:
// - All words are written in lowercase.
// - Words are separated using an underscore (_).
//
// Example:
//
// student_name
// first_name
// mobile_number
// total_marks


let student_name = "Rahul";
let first_name = "Ravi";
let mobile_number = "9876543210";
let total_marks = 450;

console.log(student_name);
console.log(first_name);
console.log(mobile_number);
console.log(total_marks);


// More examples of snake_case:

let college_name = "ABC College";
let student_age = 22;
let email_address = "rahul@gmail.com";
let date_of_birth = "10-05-2003";

console.log(college_name);
console.log(student_age);
console.log(email_address);
console.log(date_of_birth);




// Another example:
// "mobile phone number"
// camelCase:
let mobilePhoneNumber = "9876543210";


// PascalCase:
class MobilePhoneNumber {
}


// snake_case:
let mobile_phone_number = "9876543210";



//!  Important Note
// These are naming conventions.
// They are not different types of variables.
//
// For example, all of these are valid JavaScript identifiers:

let firstNameExample = "Rahul";
let first_name_example = "Rahul";


//! The main difference is only how we write the name.
//!  Quick Revision
//?  camelCase
// ----------
// First word -> lowercase
// Other words -> first letter uppercase
// Example:
// studentName
// mobileNumber
// totalMarks

//?  PascalCase
// ----------
// Every word starts with a capital letter
// Example:
// StudentName
// MobileNumber
// StudentDetails

//?  snake_case
// ----------
// All words are lowercase
// Words are separated by underscore

// Example:
// student_name
// mobile_number
// total_marks



// Easy way to remember
// camelCase  -> studentName
// PascalCase -> StudentName
// snake_case -> student_name