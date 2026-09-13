# JavaScript Loops

This note is based on the files in the `07_chapter_loops` folder:
- `01_loop.js`
- `02_for_loop.js`
- `03_while_loop.js`
- `04_do_while_loop.js`

---

## 1. What is a Loop?

A loop is used to repeat the same block of code multiple times.

Without loops, we would have to write the same code again and again.

Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
```

This prints "Hello" 5 times.

---

## 2. `for` Loop

The `for` loop is used when we know how many times we want to repeat the code.

### Syntax

```js
for (initialization; condition; update) {
  // code
}
```

### Example

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### Parts
- initialization: starting value
- condition: the loop continues while this is true
- update: changes the value after each iteration

### More examples

```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

### Real use
A `for` loop is good for:
- printing numbers
- table generation
- summing values

---

## 3. `while` Loop

A `while` loop continues as long as the condition is true.

### Syntax

```js
while (condition) {
  // code
}
```

### Example

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### Important note
We must update the variable inside the loop, otherwise it may become an infinite loop.

---

## 4. `do...while` Loop

A `do...while` loop runs the code at least once even if the condition is false.

### Syntax

```js
do {
  // code
} while (condition);
```

### Example

```js
let age = 10;
do {
  console.log("This will execute once");
} while (age >= 18);
```

### Why it is different
- `while` checks condition first
- `do...while` runs once first, then checks the condition

---

## 5. Quick Comparison Table

| Loop Type | When it runs | Best for |
|-----------|---------------|----------|
| `for` | Known number of iterations | counting, tables, sums |
| `while` | Condition is true | dynamic loops |
| `do...while` | At least once before checking condition | guaranteed first execution |

---

## 6. Summary

Loops are used to repeat code without writing it again and again.

- `for` loop: used when the number of iterations is known
- `while` loop: used when the condition decides the loop
- `do...while` loop: runs at least once before checking the condition

These loops are fundamental in JavaScript and are used heavily in real applications.
