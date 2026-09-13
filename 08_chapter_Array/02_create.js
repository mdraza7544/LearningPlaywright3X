// Different Ways to Create an Array

// 1. Array Literal
let fruits = ["Apple", "Mango", "Banana"];

// 2. Array Constructor
let numbers = new Array(10, 20, 30);

// 3. Empty Array
let colors = [];
colors[0] = "Red";
colors[1] = "Blue";
colors[2] = "Green";

// 4. Array with Different Data Types
let data = ["Rahul", 22, true, null, undefined];

// 5. Array.of()
let values = Array.of(10, 20, 30);

// 6. Array.from()
let name = Array.from("Rahul");

// 7. Array Constructor with a Single Number
let arr = new Array(5);
// Creates an array with 5 empty slots

// Array with nested array and object

let students = [
  "Rahul",
  22,
  ["Java", "JavaScript", "Python"],
  {
    name: "Rahul",
    age: 22,
    course: "MCA",
  },
];

// Access all elements using for loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
