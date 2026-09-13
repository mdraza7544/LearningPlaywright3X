// JavaScript Increment and Decrement Operators
// Increment (++) increases a value by 1.
// Decrement (--) decreases a value by 1.


// 1. Post-Increment (x++)
// First uses the current value.
// Then increases the value by 1.
let a = 10;
console.log(a++);   // 10
console.log(a);     // 11

// 2. Pre-Increment (++x)
// First increases the value by 1.
// Then uses the new value.
let b = 10;
console.log(++b);   // 11
console.log(b);     // 11

// 3. Post-Decrement (x--)
// First uses the current value.
// Then decreases the value by 1.
let c = 10;
console.log(c--);   // 10
console.log(c);     // 9


// 4. Pre-Decrement (--x)
// First decreases the value by 1.
// Then uses the new value.
let d = 10;
console.log(--d);   // 9
console.log(d);     // 9

// Difference between Pre and Post
let x = 5;
let y = x++;
console.log(y);     // 5
console.log(x);     // 6

let p = 5;
let q = ++p;
console.log(q);     // 6
console.log(p);     // 6

// Using increment with expressions

let num = 5;
console.log(num++ + 2);   // 7
console.log(num);         // 6

let num2 = 5;
console.log(++num2 + 2);  // 8
console.log(num2);        // 6

// Using decrement with expressions

let value = 5;
console.log(value-- - 2);   // 3
console.log(value);         // 4


let value2 = 5;
console.log(--value2 - 2);  // 2
console.log(value2);        // 4


// Using ++ and -- with variables

let marks = 50;
marks++;
console.log(marks);   // 51

marks--;
console.log(marks);   // 50


// Important
// x++  -> Post-Increment
// ++x  -> Pre-Increment

// x--  -> Post-Decrement
// --x  -> Pre-Decrement

// Post -> Use first, then change
// Pre  -> Change first, then use