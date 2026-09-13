// JavaScript for Loop
// A for loop is used to repeat a block of code
// multiple times.

// Syntax
// for (initialization; condition; update) {
//     // code
// }

// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Print numbers from 5 to 1
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Example 3: Print even numbers
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Example 4: Print odd numbers
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// Example 5: Multiplication table
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

// Example 6: Sum of numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("Sum =", sum);

// Quick Revision
// initialization -> starting value
// condition      -> checks whether loop should continue
// update         -> changes the value
//
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }