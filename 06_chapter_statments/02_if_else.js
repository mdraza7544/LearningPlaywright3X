// JavaScript if...
// else Statement
// if...
// else is used when we have two possible conditions.
// If the condition is true -> if block runs.
// If the condition is false -> 
// else block runs.


// Syntax
// if (condition) {
//     // code if condition is true
// } 
//else {
//     // code if condition is false
// }


// Example 1: Check age
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote");
} 
else {
    console.log("Not eligible to vote");
}

// Example 2: Check marks
let marks = 35;
if (marks >= 40) {
    console.log("Pass");
} 
else {
    console.log("Fail");
}

// Example 3: Check even or odd
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} 
else {
    console.log("Odd");
}

// Example 4: Check login
let password = "1234";
if (password === "1234") {
    console.log("Login successful");
} 
else {
    console.log("Wrong password");
}

// Example 5: Check status code

let statusCode = 404;
if (statusCode === 200) {
    console.log("Request successful");
} 
else {
    console.log("Request failed");
}


// Quick Revision
// if condition is true  -> if block executes
// if condition is false -> else block executes