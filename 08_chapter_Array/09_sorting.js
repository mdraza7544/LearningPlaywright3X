// SORTING IN JAVASCRIPT
// Sorting means arranging elements in an order.
// Ascending  -> Small to large
// Descending -> Large to small

// JavaScript provides the sort() method
// to sort array elements.

// 1. sort() - Basic Sorting
// sort() sorts strings alphabetically
let fruits = ["Mango", "Apple", "Orange", "Banana"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// 2. Alphabetical Order
let names = ["Rahul", "Amit", "Krupa", "Ravi"];
names.sort();
console.log(names); // ["Amit", "Krupa", "Rahul", "Ravi"]

// 3. Reverse Alphabetical Order
// First sort the array
// Then reverse it
let names2 = ["Rahul", "Amit", "Krupa", "Ravi"];
names2.sort();
nams2.reverse();

console.log(names2); // ["Ravi", "Rahul", "Krupa", "Amit"]

// 4. Number Sorting
// IMPORTANT:
// sort() by default converts numbers
// into strings before sorting.
// So this can give unexpected output.

let numbers = [10, 2, 30, 5, 1];
numbers.sort();
console.log(numbers); // [1, 10, 2, 30, 5]  <-- Not correct numerically

// 5. Correct Ascending Number Sorting

// (a, b) => a - b
// If result is negative -> a comes first
// If result is positive -> b comes first
// If result is 0        -> same position

let numbers2 = [10, 2, 30, 5, 1];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 2, 5, 10, 30]

// 6. Descending Number Sorting

// (b - a) sorts from large to small

let numbers3 = [10, 2, 30, 5, 1];
numbers3.sort((a, b) => b - a);
console.log(numbers3); // [30, 10, 5, 2, 1]

// 7. Using a Normal Function
let numbers4 = [40, 10, 30, 20];
numbers4.sort(function (a, b) {
  return a - b;
});
console.log(numbers4); // [10, 20, 30, 40]

// 8. Sorting Decimal Numbers

let marks = [75.5, 45.2, 90.8, 60.3];
marks.sort((a, b) => a - b);
console.log(marks); // [45.2, 60.3, 75.5, 90.8]

// 9. Descending Decimal Numbers
let marks2 = [75.5, 45.2, 90.8, 60.3];
marks2.sort((a, b) => b - a);
console.log(marks2); // [90.8, 75.5, 60.3, 45.2]

// 10. Sorting Negative Numbers

let numbers5 = [-10, 5, -2, 20, 0];
numbers5.sort((a, b) => a - b);
console.log(numbers5); // [-10, -2, 0, 5, 20]

// 11. Sorting Positive and Negative Numbers

let numbers6 = [10, -5, 20, -10, 0, 5];
numbers6.sort((a, b) => a - b);
console.log(numbers6); // [-10, -5, 0, 5, 10, 20]

// 12. Sort Does NOT Create a New Array
// sort() changes the original array.
let numbers7 = [30, 10, 20];
numbers7.sort((a, b) => a - b);
console.log(numbers7); // [10, 20, 30]

// Original array has been changed.
// 13. Sorting Strings Using localeCompare()
// localeCompare() is useful for
// comparing strings.
let names3 = ["Rahul", "amit", "Krupa", "ravi"];
names3.sort((a, b) => a.localeCompare(b));
console.log(names3); // 14. Case-Insensitive Sorting

// Converts both strings to lowercase
// before comparing.
let names4 = ["rahul", "Amit", "krupa", "Ravi"];
names4.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names4); // ["Amit", "krupa", "rahul", "Ravi"]

// 15. Descending String Sorting
let names5 = ["Rahul", "Amit", "Krupa", "Ravi"];
names5.sort((a, b) => b.localeCompare(a));
console.log(names5); // ["Ravi", "Rahul", "Krupa", "Amit"]

// 16. Sorting Objects by Age
let students = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 20 },
  { name: "Krupa", age: 22 },
];
students.sort((a, b) => a.age - b.age);
console.log(students);
// 17. Objects - Age Descending
let students2 = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 20 },
  { name: "Krupa", age: 22 },
];
students2.sort((a, b) => b.age - a.age);
console.log(students2);

// 18. Objects - Sort by Name
let students3 = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 20 },
  { name: "Krupa", age: 22 },
];
students3.sort((a, b) => a.name.localeCompare(b.name));
console.log(students3);
// 19. Sort by Marks
let students4 = [
  { name: "Rahul", marks: 75 },
  { name: "Amit", marks: 90 },
  { name: "Krupa", marks: 85 },
];
students4.sort((a, b) => b.marks - a.marks);
console.log(students4);

// Highest marks first
// Amit -> 90
// Krupa -> 85
// Rahul -> 75

// 20. Sort Using a Separate Function
function ascending(a, b) {
  return a - b;
}
let numbers8 = [50, 10, 40, 20, 30];
numbers8.sort(ascending);
console.log(numbers8); // [10, 20, 30, 40, 50]

// 21. Sort and Reverse
let numbers9 = [50, 10, 40, 20, 30];
numbers9.sort((a, b) => a - b);
numbers9.reverse();
console.log(numbers9); // [50, 40, 30, 20, 10]

// 22. Sorting an Array Without Changing
// the Original Array
// Use spread operator (...)
let numbers10 = [30, 10, 20];
let sortedNumbers = [...numbers10].sort((a, b) => a - b);
console.log(sortedNumbers); // [10, 20, 30]
console.log(numbers10); // [30, 10, 20]

// 23. Sorting Using toSorted()
// toSorted() returns a NEW sorted array.
// Original array is NOT changed.
let numbers11 = [30, 10, 20];
let sortedNumbers2 = numbers11.toSorted((a, b) => a - b);
console.log(sortedNumbers2); // [10, 20, 30]
console.log(numbers11); // [30, 10, 20]

// 24. toReversed()
// toReversed() returns a NEW reversed array.
// Original array is NOT changed.
let numbers12 = [10, 20, 30];
let reversedNumbers = numbers12.toReversed();

console.log(reversedNumbers); // [30, 20, 10]
console.log(numbers12);// [10, 20, 30]

// 25. Sorting Dates
let dates = [
  new Date("2026-05-20"),
  new Date("2026-01-10"),
  new Date("2026-03-15"),
];
dates.sort((a, b) => a - b);
console.log(dates);

// 26. Sorting by Price
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];
products.sort((a, b) => a.price - b.price);
console.log(products);

// 27. Sorting by Price - Highest First
let products2 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];
products2.sort((a, b) => b.price - a.price);
console.log(products2);
