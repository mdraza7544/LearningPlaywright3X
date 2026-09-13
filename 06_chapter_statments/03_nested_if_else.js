// JavaScript Nested if...else
// When an if...else statement is written
// inside another if...else statement,
// it is called nested if...else.

// Example 1: Check age and ID
let age = 20;
let hasId = true;
if (age >= 18) {
  if (hasId === true) {
    console.log("You can vote");
  } 
  else {
    console.log("ID is required");
  }
} 
else {
  console.log("You are not eligible to vote");
}

// Example 2: Check marks and attendance
let marks = 75;
let attendance = 80;
if (marks >= 40) {
  if (attendance >= 75) {
    console.log("Pass");
  } 
  else {
    console.log("Attendance is low");
  }
} 
else {
  console.log("Fail");
}

// Example 3: Login
let username = "admin";
let password = "1234";
if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } 
  else {
    console.log("Wrong password");
  }
} 
else {
  console.log("Wrong username");
}

// Quick Revision
// if (condition1) {
//
//     if (condition2) {
//         // code
//     } else {
//         // code
//     }
//
// } else {
//     // code
// }
