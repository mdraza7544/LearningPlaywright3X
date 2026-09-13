# JavaScript Literals

This note is based on the file in the `04_chapter_literals` folder:
- `literals.js`

## 1. What is a Literal?

A literal is a fixed value written directly in the source code.

Example:

```js
let name = "Rahul";
```

Here, `"Rahul"` is a string literal.

---

## 2. Types of Literals

### String Literal
A string is text written inside single or double quotes.

```js
let studentName = "Rahul";
let course = 'MCA';
```

### Number Literal
A number literal is a numeric value written directly.

```js
let age = 22;
let price = 500.50;
```

### Boolean Literal
A boolean is either `true` or `false`.

```js
let isStudent = true;
let isPassed = false;
```

### Null Literal
`null` means an empty or unknown value.

```js
let result = null;
```

### Undefined
A variable declared but not assigned a value becomes `undefined`.

```js
let address;
console.log(address); // undefined
```

### Array Literal
An array is a list of values inside square brackets `[]`.

```js
let marks = [80, 75, 90];
```

### Object Literal
An object stores data as key-value pairs inside curly braces `{}`.

```js
let student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};
```

---

## 3. Quick Comparison Table

| Literal Type | Example | Meaning |
|--------------|---------|---------|
| String | `"Rahul"` | Text |
| Number | `22` | Numeric value |
| Boolean | `true` | True/false value |
| Null | `null` | Empty value |
| Undefined | `undefined` | No value assigned |
| Array | `[10, 20, 30]` | Collection of values |
| Object | `{ name: "Rahul" }` | Key-value pair data |

---

## 4. Summary

A literal is a direct value written in code, such as:
- string
- number
- boolean
- null
- array
- object

These values are used to store and work with data in JavaScript.

---

## 5. Example Program

```js
let studentName = "Rahul";
let age = 22;
let isStudent = true;
let marks = [80, 75, 90];

let student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};

console.log(studentName);
console.log(age);
console.log(isStudent);
console.log(marks);
console.log(student);
```

This shows how different JavaScript literals are used in real code.
