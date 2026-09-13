# JavaScript Conditional Statements

This note is based on the files in the `06_chapter_statments` folder:
- `01_if.js`
- `02_if_else.js`
- `03_nested_if_else.js`
- `04_else_if.js`
- `05_switch.js`

---

## 1. What is a Conditional Statement?

A conditional statement is used to make decisions in code.

JavaScript checks a condition and then decides which block of code to run.

---

## 2. `if` Statement

The `if` statement runs code only when the condition is true.

```js
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

### Example

```js
let marks = 75;
if (marks >= 40) {
  console.log("Pass");
}
```

---

## 3. `if...else` Statement

The `if...else` statement gives two choices:
- if condition is true, run the `if` block
- otherwise, run the `else` block

```js
let age = 16;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
```

### Example

```js
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

---

## 4. Nested `if...else`

A nested `if...else` is an `if` inside another `if`.

```js
let age = 20;
let hasId = true;

if (age >= 18) {
  if (hasId === true) {
    console.log("You can vote");
  } else {
    console.log("ID is required");
  }
} else {
  console.log("You are not eligible to vote");
}
```

### Use case
This is useful when there are multiple checks before taking a decision.

---

## 5. `else if` Statement

When there are multiple conditions, we use `else if`.

```js
let marks = 75;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 40) {
  console.log("C Grade");
} else {
  console.log("Fail");
}
```

### Important point
JavaScript checks the conditions from top to bottom, and the first true condition runs.

---

## 6. `switch` Statement

The `switch` statement is used when we want to compare one value against multiple possible values.

```js
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}
```

### Key parts
- `switch` -> checks a value
- `case` -> possible value
- `break` -> stops the switch block
- `default` -> runs when no case matches

---

## 7. Quick Comparison Table

| Statement | Use Case | Example |
|-----------|----------|---------|
| `if` | Single condition | Check age |
| `if...else` | Two choices | Pass/Fail |
| `nested if` | Multiple related checks | Vote eligibility |
| `else if` | Multiple conditions | Grade system |
| `switch` | One value against many cases | Day of week |

---

## 8. Summary

Conditional statements help programs make decisions.

- `if` handles one condition
- `if...else` handles two outcomes
- `else if` handles multiple outcomes
- `switch` is useful when checking one value against many options
- nested conditions allow deeper logic checks

These are the basic building blocks of decision-making in JavaScript.
