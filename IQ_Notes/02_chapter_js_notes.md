# JavaScript Basics: Keywords and let

This note is based on the files in the `02_chapter_js` folder:
- `keyword.js`
- `let.js`

## 1. What is a Keyword?

A keyword is a reserved word in JavaScript that has a special meaning.

JavaScript keywords are used to define variables, conditions, loops, functions, and more.

Example:

```js
let name = "Rahul";
if (age >= 18) {
    console.log("Adult");
}
```

In this example:
- `let` declares a variable
- `if` checks a condition

---

## 2. Common JavaScript Keywords

Some common keywords are:

- `let` - declare a variable
- `const` - declare a constant
- `var` - old way to declare a variable
- `if` - condition
- `else` - else part of condition
- `for` - loop
- `function` - create a function
- `return` - return value from function
- `class` - create class
- `switch`, `case`, `break`, `continue` - control flow

Example:

```js
let name = "Rahul";
const age = 22;
var city = "Bengaluru";
```

---

## 3. Example of Keywords in Use

```js
let name = "Rahul";
const age = 22;
var city = "Bengaluru";

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

function greet() {
    console.log("Hello");
}

greet();
```

### Meaning
- `let` declares a variable
- `const` declares a constant value
- `if` checks a condition
- `for` creates a loop
- `function` creates a reusable block of code

---

## 4. What is `let`?

`let` is used to declare a variable in JavaScript.

Example:

```js
let a = 10;
console.log("The value of a is " + a);
```

`let` allows us to store values that can change later.

Example:

```js
let count = 1;
count = 2;
console.log(count);
```

---

## 5. `let` with Loop Example

```js
let a = 10;

function print(value) {
    console.log(value);
}

for (let i = 1; i <= 10; i++) {
    print(i);
}
```

This prints numbers from 1 to 10.

---

## 6. Important Rule

Keywords are reserved and should not be used as variable names.

```js
// Wrong
let class = "MCA";
```

This will cause an error because `class` is a keyword.

---

## 7. Quick Revision Table

| Topic | Meaning | Example |
|------|---------|---------|
| Keyword | Reserved word with special meaning | `let`, `if`, `for`, `function` |
| `let` | Declares a variable | `let a = 10;` |
| `if` | Checks a condition | `if (age >= 18) {}` |
| `for` | Runs a loop | `for (let i = 1; i <= 3; i++) {}` |

---

## 8. Final Summary

JavaScript keywords are special reserved words used to write logic. They help us declare variables, create conditions, loops, and functions. The `let` keyword is used to store values that can be changed later. We must avoid using keywords as variable names.
