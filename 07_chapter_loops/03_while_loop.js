// JavaScript while Loop
// A while loop repeats a block of code
// as long as the condition is true.

// Syntax
// while (condition) {
//     // code
// }

// Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Example 2: Print numbers from 5 to 1
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// Example 3: Print even numbers
let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2;
}

// Example 4: Multiplication table
let n = 5;
let x = 1;
while (x <= 10) {
  console.log(`${n} x ${x} = ${n * x}`);
  x++;
}

// Example 5: Sum of numbers
let sum = 0;
let k = 1;
while (k <= 5) {
  sum = sum + k;
  k++;
}
console.log("Sum =", sum);

// Important
// while checks the condition first.
// If the condition is true -> loop runs.
// If the condition is false -> loop stops.
// Don't forget to update the variable,
// otherwise it can become an infinite loop.

// Quick Revision
// while (condition) {
//     // code
//     // update
// }
