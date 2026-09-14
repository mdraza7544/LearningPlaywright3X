//! SPREAD OPERATOR (...) WITH FUNCTIO
// Spread operator (...) is used to expand array values into separate arguments.

// Example 1: Basic
function add(a, b, c) {
  return a + b + c;
}
let numbers = [10, 20, 30];
let result = add(...numbers);
console.log(result);

// Example 2: Spread with strings

function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

let name = ["Rahul", "Kumar"];
greet(...name);

// Example 3: Spread with Math function

let marks = [50, 80, 90, 70];
let highest = Math.max(...marks);
console.log(highest);



// Example 4: Normal arguments + Spread
function calculate(a, b, c, d) {
  return a + b + c + d;
}
let values = [20, 30];
let total = calculate(10, ...values, 40);
console.log(total);
