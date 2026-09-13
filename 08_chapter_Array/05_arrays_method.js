
// JavaScript Array Methods

// 1. push()
// Adds element at the end of the array
let fruits = ["Apple", "Mango"];
fruits.push("Banana");
console.log(fruits);// ["Apple", "Mango", "Banana"]


// 2. pop()// Removes the last element
let fruits2 = ["Apple", "Mango", "Banana"];
fruits2.pop();
console.log(fruits2);// ["Apple", "Mango"]


// 3. unshift()
// Adds element at the beginning
let fruits3 = ["Mango", "Banana"];
fruits3.unshift("Apple");
console.log(fruits3);// ["Apple", "Mango", "Banana"]


// 4. shift()
// Removes the first element
let fruits4 = ["Apple", "Mango", "Banana"];
fruits4.shift();
console.log(fruits4);// ["Mango", "Banana"]


// 5. slice()
// Extracts/copies part of an array
// Original array is not changed
let fruits5 = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
let result = fruits5.slice(1, 4);
console.log(result);// ["Mango", "Banana", "Orange"]
console.log(fruits5);// Original array remains unchanged


// 6. splice()
// Used to add or remove element
let fruits6 = ["Apple", "Mango", "Banana", "Orange"]
fruits6.splice(1, 1)
console.log(fruits6);// ["Apple", "Banana", "Orange"]

// Add element using splice(
let fruits7 = ["Apple", "Banana"]
fruits7.splice(1, 0, "Mango")
console.log(fruits7);// ["Apple", "Mango", "Banana"]


// 7. includes()
// Checks whether an element exists
let fruits8 = ["Apple", "Mango", "Banana"];
console.log(fruits8.includes("Mango"));// true
console.log(fruits8.includes("Orange"));// false


// 8. indexOf()
// Returns the index of an element
let fruits9 = ["Apple", "Mango", "Banana"];
console.log(fruits9.indexOf("Mango"));// 1
console.log(fruits9.indexOf("Orange"));// -1


// 9. lastIndexOf()
// Returns the last index of an element
let numbers = [10, 20, 30, 20, 40];
console.log(numbers.lastIndexOf(20));// 3


// 10. join()
// Converts array into a string
let fruits10 = ["Apple", "Mango", "Banana"];
console.log(fruits10.join(", "));
// Apple, Mango, Banana
console.log(fruits10.join(" - "));
// Apple - Mango - Banana


// 11. toString()
// Converts array into a string
let fruits11 = ["Apple", "Mango", "Banana"];
console.log(fruits11.toString());
// Apple,Mango,Banana


// 12. sort()
// Sorts the array
let fruits12 = ["Mango", "Apple", "Orange", "Banana"];
fruits12.sort();
console.log(fruits12);
// ["Apple", "Banana", "Mango", "Orange"]


// Sorting numbers
let numbers2 = [10, 2, 30, 5];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
// [2, 5, 10,
