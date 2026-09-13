//! Nested Ternary Operator
// A ternary operator inside another ternary operator
// is called a nested ternary operator.

// Syntax:
// condition1 ? value1 : condition2 ? value2 : value3;

// Example 1
let marks = 75;
let result = marks >= 80 ? "A Grade" : marks >= 60 ? "B Grade" : "C Grade";
console.log(result);

// Example 2
let age = 20;
let status = age >= 18 ? "Adult" : age >= 13 ? "Teenager" : "Child";
console.log(status);

// Example 3
let environment = "staging";
let baseurl =
  environment === "prod"
    ? "https://api.example.com"
    : environment === "staging"
      ? "https://staging-api.example.com"
      : "https://dev-api.example.com";

console.log(baseurl);

// Quick Revision
// Nested ternary means:
// One ternary operator inside another.
//
// condition1
//     ? value1
//     : condition2
//     ? value2
//     : value3;
