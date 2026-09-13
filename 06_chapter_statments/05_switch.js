// JavaScript switch Statement
// switch is used when we want to check
// one value against multiple possible values.

// Example 1: Check day
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

// Example 2: Check status code
let statusCode = 404;
switch (statusCode) {
  case 200:
    console.log("Success");
    break;

  case 404:
    console.log("Not Found");
    break;

  case 500:
    console.log("Server Error");
    break;

  default:
    console.log("Unknown Status");
}

// Example 3: Simple calculator
let operator = "+";
let a = 10;
let b = 5;

switch (operator) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Invalid operator");
}

// Important
// switch  -> checks a value
// case    -> possible value
// break   -> stops the switch
// default -> runs when no case matches

// Syntax
// switch (value) {
//     case value1:
//         // code
//         break;
//
//     case value2:
//         // code
//         break;
//
//     default:
//         // code
// }
