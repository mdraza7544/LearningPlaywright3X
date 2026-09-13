# JavaScript Array Advanced Methods

This note is based on the remaining uncommitted array examples:
- `08_chapter_Array/06_map.js`
- `08_chapter_Array/07_filter.js`
- `08_chapter_Array/08_reduce.js`
- `08_chapter_Array/09_sorting.js`

---

## 1. `map()`

`map()` creates a new array by applying a function to each element.

### Example

```js
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map((num) => num * 2);

console.log(result); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]
```

### Important
- It does not change the original array.
- It returns a new array.

### Common use cases
- uppercase all names
- add GST to prices
- convert values

```js
let names = ["rahul", "amit"];
let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // ["RAHUL", "AMIT"]
```

---

## 2. `filter()`

`filter()` creates a new array containing only elements that match a condition.

### Example

```js
let numbers = [5, 10, 15, 20, 25];
let result = numbers.filter(num => num > 10);

console.log(result); // [15, 20, 25]
```

### Example with even numbers

```js
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

### Important
- original array remains unchanged
- only matched values are returned

---

## 3. `reduce()`

`reduce()` reduces an array into a single value.

### Example 1: sum numbers

```js
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 100
```

### Example 2: multiply numbers

```js
let numbers = [2, 3, 4];
let result = numbers.reduce((total, num) => total * num, 1);
console.log(result); // 24
```

### Example 3: find largest number

```js
let numbers = [10, 50, 20, 80, 30];
let largest = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(largest); // 80
```

### Important
`reduce()` is used when we want to combine all values into one final result.

---

## 4. `sort()`

`sort()` arranges array elements in order.

### String sorting

```js
let fruits = ["Mango", "Apple", "Orange", "Banana"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

### Number sorting

```js
let numbers = [10, 2, 30, 5, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 10, 30]
```

### Descending order

```js
let numbers = [10, 2, 30, 5, 1];
numbers.sort((a, b) => b - a);
console.log(numbers); // [30, 10, 5, 2, 1]
```

### Important
- `sort()` changes the original array.
- For numbers, use a compare function like `(a, b) => a - b`.

---

## 5. Quick Comparison Table

| Method | Purpose | Returns |
|--------|---------|---------|
| `map()` | transform each element | new array |
| `filter()` | keep matching elements | new array |
| `reduce()` | combine into one value | single value |
| `sort()` | arrange in order | same array, sorted |

---

## 6. Summary

These array methods are very important in JavaScript:

- `map()` transforms data
- `filter()` selects useful data
- `reduce()` combines values into one result
- `sort()` organizes data in order

These methods make array handling easier and cleaner in real JavaScript applications.
