// JavaScript else if Statement
// else if is used when we have multiple conditions.
// JavaScript checks the conditions from top to bottom.
// The first true condition will be executed.

// Example 1: Check marks
let marks = 75;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 40) {
  console.log("C Grade");
} else {
  console.log("Fail");
}

// Example 2: Check temperature
let temp = 25;
if (temp >= 30) {
  console.log("Hot");
} else if (temp >= 20) {
  console.log("Normal");
} else if (temp >= 10) {
  console.log("Cold");
} else {
  console.log("Very Cold");
}

// Example 3: Check status code
let statusCode = 404;
if (statusCode === 200) {
  console.log("Success");
} else if (statusCode === 404) {
  console.log("Not Found");
} else if (statusCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown Status");
}

// Syntax
// if (condition1) {
//     // code
// }
// else if (condition2) {
//     // code
// }
// else {
//     // code
// }

// Quick Revision
// if      -> First condition
// else if -> Check another condition
// else    -> Runs when all conditions are false
