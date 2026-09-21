# JavaScript Strings, Objects, and 2D Arrays

This note is based on the remaining uncommitted files from the following folders:
- `10_chapter_strings`
- `11_chapter_object`
- `12_chapter_array`

---

## 1. JavaScript String

A string is a sequence of characters used to store text.

### Ways to create a string

```js
let name = "Ashif";
let message = 'Hello World';
let city = `Bangalore`;
```

### Common string methods

```js
let text = "Hello World";
console.log(text.length); // 11
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world
console.log(text.charAt(0)); // H
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true
console.log(text.indexOf("World")); // 6
console.log(text.slice(0, 5)); // Hello
console.log(text.replace("World", "JavaScript")); // Hello JavaScript
console.log("  Ashif  ".trim()); // Ashif
console.log("red,blue,green".split(",")); // ["red", "blue", "green"]
```

### Summary
Strings are used to store and manipulate text in JavaScript.

---

## 2. JavaScript Object

An object stores data in key-value pairs.

### Example

```js
let student = {
  name: "Ashif",
  age: 22,
  course: "MCA"
};

console.log(student.name);
console.log(student.age);
```

### Array of objects

```js
let students = [
  { name: "Rahul", age: 22 },
  { name: "Aman", age: 23 },
  { name: "Neha", age: 21 }
];

console.log(students[0].name);
```

### Object method

```js
let user = {
  name: "Ashif",
  age: 22,
  sayHello: function () {
    console.log("Hello " + this.name);
  }
};

user.sayHello();
```

### Summary
Objects are used to group related data and behaviors together.

---

## 3. 2D Array

A 2D array is an array inside another array. It is like a table with rows and columns.

### Example

```js
let numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

console.log(numbers[0][0]); // 10
console.log(numbers[1][2]); // 60
```

### Accessing all values

```js
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}
```

### Changing a value

```js
numbers[1][1] = 100;
console.log(numbers);
```

### Summary
A 2D array is useful when we need tabular or matrix-like data.

---

## 4. Quick Comparison Table

| Topic | Purpose | Example |
|------|---------|---------|
| String | store text | `"Hello"` |
| Object | store key-value data | `{ name: "Ashif" }` |
| 2D array | store rows and columns | `[[10, 20], [30, 40]]` |

---

## 5. Final Summary

These topics are important building blocks in JavaScript:
- strings help work with text
- objects help store related data
- 2D arrays help store structured table-like data

Together, they allow you to model real-world data in JavaScript applications.
