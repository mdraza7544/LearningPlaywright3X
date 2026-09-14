# JavaScript Functions

This note is based on the files in the `09_chapter_Function` folder:
- `01_function.js`
- `02_function_declaration_inilization.js`
- `03_function_parameter.js`
- `04_function_types.js`
- `05_function_spred.js`

---

## 1. What is a Function?

A function is a reusable block of code that performs a task.

Instead of writing the same code again and again, we can write it once and call it whenever needed.

### Example

```js
function greet() {
  console.log("Hello World");
}

greet();
```

---

## 2. Function Declaration and Calling

A function is declared using the `function` keyword.

```js
function greet() {
  console.log("Hello World");
}

greet();
```

This means:
- define the function
- call the function later to run it

---

## 3. Function Parameters

A parameter is a value passed to a function when it is defined.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Rahul");
```

### Parameter vs argument
- Parameter: variable inside the function
- Argument: actual value passed while calling the function

### Example with multiple parameters

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

### Default parameter

```js
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser();
```

If you do not pass a value, the default value is used.

---

## 4. Types of Functions

### 1. Anonymous function

```js
let message = function () {
  console.log("Hello");
};

message();
```

### 2. Arrow function

```js
let greet2 = () => {
  console.log("Hello from Arrow Function");
};

greet2();
```

### 3. Short arrow function

```js
let multiply = (a, b) => a * b;
console.log(multiply(5, 4));
```

### 4. Callback function

A callback function is a function passed as an argument to another function.

```js
function processUser(callback) {
  callback("Rahul");
}

processUser((name) => console.log("Hello " + name));
```

### 5. IIFE

An IIFE is executed immediately after creation.

```js
(function () {
  console.log("Function executed immediately");
})();
```

### 6. Async function

```js
async function getMessage() {
  return "Hello";
}

getMessage().then((result) => console.log(result));
```

---

## 5. Spread Operator with Function Calls

The spread operator `...` expands array elements into separate arguments.

### Example

```js
function add(a, b, c) {
  return a + b + c;
}

let numbers = [10, 20, 30];
let result = add(...numbers);
console.log(result);
```

### Example with `Math.max()`

```js
let marks = [50, 80, 90, 70];
let highest = Math.max(...marks);
console.log(highest);
```

### Example with combined arguments

```js
function calculate(a, b, c, d) {
  return a + b + c + d;
}

let values = [20, 30];
let total = calculate(10, ...values, 40);
console.log(total);
```

---

## 6. Quick Comparison Table

| Function Type | Example | Use |
|---------------|---------|-----|
| Normal function | `function greet(){}` | reusable block |
| Anonymous function | `let x = function(){}` | function stored in variable |
| Arrow function | `let x = () => {}` | shorter syntax |
| Callback | `processUser(fn)` | passing function as argument |
| IIFE | `(function(){})()` | immediate execution |
| Async function | `async function foo(){}` | asynchronous work |

---

## 7. Summary

Functions are one of the most important parts of JavaScript.

They help us:
- reduce repetition
- write cleaner code
- reuse logic
- pass data using parameters
- use modern syntax like arrow functions
- work with async logic and spread arguments

In short, functions make the code easier to organize and maintain.
