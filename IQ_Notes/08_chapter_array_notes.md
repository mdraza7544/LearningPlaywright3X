# JavaScript Arrays

This note is based on the files in the `08_chapter_Array` folder:
- `01_array.js`
- `02_create.js`
- `03access.js`
- `04modify.js`
- `05_arrays_method.js`

---

## 1. What is an Array?

An array is a special variable used to store multiple values in one place.

```js
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
```

Arrays are useful when we want to keep similar values together.

---

## 2. How to Create an Array

### 1. Array literal

```js
let fruits = ["Apple", "Mango", "Banana"];
```

### 2. Using `new Array()`

```js
let numbers = new Array(10, 20, 30);
```

### 3. Empty array

```js
let colors = [];
colors[0] = "Red";
colors[1] = "Blue";
```

### 4. Mixed data types

```js
let data = ["Rahul", 22, true, null];
```

### 5. `Array.of()`

```js
let values = Array.of(10, 20, 30);
```

### 6. `Array.from()`

```js
let name = Array.from("Rahul");
```

---

## 3. Accessing Array Elements

Array indexing starts from `0`.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
```

### Using loops

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Using `for...of`

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Using `forEach()`

```js
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

### Using `at()`

```js
console.log(fruits.at(0));
console.log(fruits.at(-1));
```

---

## 4. Modifying an Array

### Change an element

```js
let fruits = ["Apple", "Mango", "Banana"];
fruits[1] = "Orange";
```

### Add element at the end

```js
fruits.push("Grapes");
```

### Remove last element

```js
fruits.pop();
```

### Add at the beginning

```js
fruits.unshift("Mango");
```

### Remove first element

```js
fruits.shift();
```

### Add or remove in middle

```js
fruits.splice(1, 0, "Mango");
```

---

## 5. Array Methods

### `push()`
Adds an element at the end.

```js
let fruits = ["Apple", "Mango"];
fruits.push("Banana");
```

### `pop()`
Removes the last element.

```js
fruits.pop();
```

### `unshift()`
Adds an element at the beginning.

```js
fruits.unshift("Apple");
```

### `shift()`
Removes the first element.

```js
fruits.shift();
```

### `slice()`
Copies a portion of an array without changing the original.

```js
let fruits = ["Apple", "Mango", "Banana", "Orange"];
let result = fruits.slice(1, 3);
```

### `splice()`
Adds or removes elements from the middle of the array.

```js
fruits.splice(1, 1);
```

### `includes()`
Checks whether a value exists.

```js
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.includes("Mango")); // true
```

### `indexOf()`
Returns the index of an element.

```js
console.log(fruits.indexOf("Mango")); // 1
```

### `lastIndexOf()`
Returns the last index of the matching element.

```js
let numbers = [10, 20, 30, 20, 40];
console.log(numbers.lastIndexOf(20)); // 3
```

### `join()`
Converts the array to a string.

```js
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.join(", ")); // Apple, Mango, Banana
```

### `toString()`
Also converts the array to a string.

```js
console.log(fruits.toString());
```

### `sort()`
Sorts the array elements.

```js
let fruits = ["Mango", "Apple", "Orange", "Banana"];
fruits.sort();
```

---

## 6. Quick Comparison Table

| Operation | Method | Example |
|-----------|--------|---------|
| Add at end | `push()` | `fruits.push("Grapes")` |
| Remove last | `pop()` | `fruits.pop()` |
| Add at start | `unshift()` | `fruits.unshift("Apple")` |
| Remove first | `shift()` | `fruits.shift()` |
| Copy part | `slice()` | `fruits.slice(1, 3)` |
| Add/Remove middle | `splice()` | `fruits.splice(1, 1)` |
| Check includes | `includes()` | `fruits.includes("Mango")` |
| Find index | `indexOf()` | `fruits.indexOf("Mango")` |
| Join as string | `join()` | `fruits.join(", ")` |

---

## 7. Summary

Arrays are used to store many values in one variable.

Important concepts:
- arrays start from index `0`
- elements can be accessed with indexing
- arrays can be modified using `push`, `pop`, `shift`, `unshift`, and `splice`
- array methods help us work with arrays efficiently

Arrays are one of the most important data structures in JavaScript.
