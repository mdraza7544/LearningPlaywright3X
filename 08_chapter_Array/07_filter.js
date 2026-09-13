// filter()
// filter() is used to select elements
// from an array based on a condition.
//
// It creates a NEW array.
// Original array is not changed.

// Example 1: Get numbers greater than 10
let numbers = [5, 10, 15, 20, 25];
let result = numbers.filter(num => num > 10);
console.log(result);// [15, 20, 25]


// Example 2: Get even numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers);// [2, 4, 6]


// Example 3: Get odd numbers
let numbers3 = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers3.filter(num => num % 2 !== 0);
console.log(oddNumbers);// [1, 3, 5]


// Example 4: Filter names
let names = ["Rahul", "Amit", "Krupa", "Ravi"];
let result2 = names.filter(name => name.length > 4);
console.log(result2);// ["Rahul", "Krupa"]


// Example 5: Filter students based on age
let students = [
    { name: "Rahul", age: 22 },
    { name: "Amit", age: 17 },
    { name: "Krupa", age: 21 },
    { name: "Ravi", age: 16 }
];
let adults = students.filter(student => student.age >= 18);
console.log(adults);