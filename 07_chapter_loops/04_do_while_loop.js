// JavaScript do...while Loop
// A do...while loop executes the code at least once.
// After that, it checks the condition.


// Syntax
// do {
//     // code
// } while (condition);

// Example 1: Print numbers from 1 to 5
let i = 1;
do {
    console.log(i);
    i++;
} 
while (i <= 5);

// Example 2: Print numbers from 5 to 1
let j = 5;
do {
    console.log(j);
    j--;
} 
while (j >= 1);

// Example 3: Print even numbers
let num = 2;
do {
    console.log(num);
    num += 2;
} 
while (num <= 10);


// Example 4: Multiplication table
let n = 5;
let x = 1;
do {
    console.log(`${n} x ${x} = ${n * x}`);
    x++;
} 
while (x <= 10);

// Important
// ---------
//
// do...while executes at least once.
//
// do {
//     // code
// } while (condition);
//
// First → execute the code
// Then  → check the condition


// Example 5: Condition is false
let age = 10;
do {
    console.log("This will execute once");
} 
while (age >= 18);


// Quick Revision
// while:
// Condition → Code
//
// do...while:
// Code → Condition