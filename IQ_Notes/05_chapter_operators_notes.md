# JavaScript Operators Notes

This note is based on the files in the `05_chapter_operators` folder:
- `01_Datatype.js`
- `02_Assigment_Operator.js`
- `03_Arithmetic_Operator.js`
- `04_Comparsion_Operator.js`
- `05_Logical_Operators.js`
- `06Confusing_Operator.js`
- `07Confusing_Operator2.js`

---

## 1. What is a Data Type?

A data type defines the kind of value a variable can hold.

Common JavaScript data types are:
- String
- Number
- Boolean
- Null
- Undefined
- Object
- Array

Example:

```js
let name = "Rahul";     // string
let age = 22;            // number
let isStudent = true;    // boolean
let result = null;       // null
let city;                // undefined
```

---

## 2. Assignment Operators

Assignment operators are used to assign values to variables.

### Basic assignment

```js
let a = 10;
```

### Compound assignment operators

| Operator | Meaning | Example |
|---------|---------|---------|
| = | Assign | `a = 10` |
| += | Add and assign | `a += 5` |
| -= | Subtract and assign | `a -= 3` |
| *= | Multiply and assign | `a *= 2` |
| /= | Divide and assign | `a /= 4` |
| %= | Remainder and assign | `a %= 4` |
| **= | Power and assign | `a **= 3` |

Example:

```js
let a = 10;
a += 5; // a = 15
console.log(a);
```

---

## 3. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Meaning | Example |
|---------|---------|---------|
| + | Addition | `10 + 3` |
| - | Subtraction | `10 - 3` |
| * | Multiplication | `10 * 3` |
| / | Division | `10 / 3` |
| % | Modulus | `10 % 3` |
| ** | Exponent | `10 ** 3` |
| ++ | Increment by 1 | `x++` |
| -- | Decrement by 1 | `x--` |

Example:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000
```

---

## 4. Comparison Operators

Comparison operators compare two values and return either `true` or `false`.

| Operator | Meaning |
|---------|---------|
| == | Equal to (loose comparison) |
| === | Strict equal to |
| != | Not equal to |
| !== | Strict not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal to |
| <= | Less than or equal to |

Example:

```js
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 > 5);        // true
```

### Important difference
- `==` compares values after type conversion.
- `===` compares both value and data type.

---

## 5. Logical Operators

Logical operators combine or invert conditions.

| Operator | Meaning |
|---------|---------|
| && | AND |
| || | OR |
| ! | NOT |

Example:

```js
let age = 20;
let hasId = true;

console.log(age >= 18 && hasId); // true
console.log(age < 18 || hasId); // true
console.log(!(age < 18)); // false
```

### Explanation
- `&&` returns true only if both conditions are true.
- `||` returns true if at least one condition is true.
- `!` reverses the result.

---

## 6. Confusing Equality Operators

### `==` vs `===`

```js
console.log(10 == "10");    // true
console.log(10 === "10");   // false
```

- `==` checks value only after conversion.
- `===` checks value and type.

### `null` and `undefined`

```js
console.log(null == undefined);   // true
console.log(null === undefined);  // false
```

Why?
- `null` and `undefined` are considered equal in loose comparison.
- But they are different types, so strict comparison returns false.

### Special `null` comparisons

```js
console.log(null == 0);   // false
console.log(null > 0);    // false
console.log(null >= 0);   // true
```

This happens because JavaScript converts `null` to `0` in some numeric comparisons.

---

## 7. Quick Revision Table

| Category | Example | Result |
|----------|---------|--------|
| Assignment | `a = 10` | assigns value |
| Arithmetic | `a + b` | math result |
| Comparison | `a > b` | true/false |
| Logical | `a && b` | true/false |
| Equality | `==` and `===` | different behavior |
| Null check | `null == undefined` | true |

---

## 8. Summary

Operators are symbols used to perform actions on values.

- Assignment operators assign values.
- Arithmetic operators do math.
- Comparison operators check conditions.
- Logical operators combine conditions.
- Equality operators need special attention because `==` and `===` behave differently.

Understanding operators is essential because they are used in almost every JavaScript program.
