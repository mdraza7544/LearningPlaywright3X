
// Modifying an Array in JavaScript
let fruits = ["Apple", "Mango", "Banana"];

// 1. Change an element
fruits[1] = "Orange";
console.log(fruits);
// ["Apple", "Orange", "Banana"]

// 2. Add element at the end - push()
fruits.push("Grapes");
console.log(fruits);
// ["Apple", "Orange", "Banana", "Grapes"]

// 3. Remove element from the end - pop()
fruits.pop();
console.log(fruits);
// ["Apple", "Orange", "Banana"]

// 4. Add element at the beginning - unshift()
fruits.unshift("Mango");
console.log(fruits);
// ["Mango", "Apple", "Orange", "Banana"]

// 5. Remove element from the beginning - shift()
fruits.shift();
console.log(fruits);
// ["Apple", "Orange", "Banana"]

// 6. Add or remove elements - splice()
fruits.splice(1, 0, "Mango");
console.log(fruits);
// ["Apple", "Mango", "Orange", "Banana"]

// 7. Replace an element using splice()
fruits.splice(1, 1, "Grapes");
console.log(fruits);
// ["Apple", "Grapes", "Orange", "Banana"]

// 8. Change the length
fruits.length = 2;
console.log(fruits);
// ["Apple", "Grapes"]


// Quick Revision
// fruits[0] = "Mango"  → Change element
// push()               → Add at end
// pop()                → Remove from end
// unshift()            → Add at beginning
// shift()              → Remove from beginning
// splice()             → Add, remove or replace
// length               → Change array size