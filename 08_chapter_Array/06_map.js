// map()
// map() is used to create a NEW array
// by performing an operation on every element.
// Original array is not changed.

// Example 1: Multiply every number by 2
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(function (num) {
  return num * 2;
});
console.log(result); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

// Example 2: Using arrow function
let numbers2 = [10, 20, 30, 40];
let result2 = numbers2.map((num) => num + 5);
console.log(result2); // [15, 25, 35, 45]

// Example 3: Convert names to uppercase
let names = ["rahul", "amit", "krupa"];
let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // ["RAHUL", "AMIT", "KRUPA"]

// Example 4: Get names from objects
let students = [
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 23 },
  { name: "Krupa", age: 21 },
];
let studentNames = students.map((student) => student.name);
console.log(studentNames); // ["Rahul", "Amit", "Krupa"]

// Example 5: Calculate prices with GST
let prices = [100, 200, 300];
let pricesWithGST = prices.map((price) => price * 1.18);
console.log(pricesWithGST); // [118, 236, 354]

// Example 6: Convert numbers to strings
let numbers3 = [10, 20, 30];
let stringNumbers = numbers3.map((num) => String(num));
console.log(stringNumbers); // ["10", "20", "30"]

// Important
// map() always creates a NEW array.

// Original array
let numbers4 = [1, 2, 3];
// New array
let doubled = numbers4.map((num) => num * 2);
console.log(numbers4);// [1, 2, 3]
console.log(doubled);// [2, 4, 6]

// Syntax
// array.map(element => {
//     return newValue;
// });

// Easy way to remember:
// map() -> Take every element
//          Do something with it
//          Return a NEW array
