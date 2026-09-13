# JavaScript Increment and Decrement Operators

This note is based on the file:
- `05_chapter_operators/19_IncDec.js`

---

## 1. What are increment and decrement operators?

The increment operator `++` increases a value by 1.
The decrement operator `--` decreases a value by 1.

These operators are commonly used in loops and counters.

---

## 2. Post-Increment (`x++`)

In post-increment, the current value is used first, and then the value is increased.

```js
let a = 10;
console.log(a++); // 10
console.log(a);   // 11
```

### Explanation
- first `a++` uses the old value `10`
- then `a` becomes `11`

---

## 3. Pre-Increment (`++x`)

In pre-increment, the value is increased first, and then the updated value is used.

```js
let b = 10;
console.log(++b); // 11
console.log(b);   // 11
```

### Explanation
- `++b` increases `b` to `11`
- then the new value is printed

---

## 4. Post-Decrement (`x--`)

In post-decrement, the current value is used first, and then the value is decreased.

```js
let c = 10;
console.log(c--); // 10
console.log(c);   // 9
```

---

## 5. Pre-Decrement (`--x`)

In pre-decrement, the value is decreased first, and then the updated value is used.

```js
let d = 10;
console.log(--d); // 9
console.log(d);   // 9
```

---

## 6. Difference between pre and post

```js
let x = 5;
let y = x++;
console.log(y); // 5
console.log(x); // 6
```

```js
let p = 5;
let q = ++p;
console.log(q); // 6
console.log(p); // 6
```

### Summary
- `x++` => use first, then change
- `++x` => change first, then use
- `x--` => use first, then decrease
- `--x` => decrease first, then use

---

## 7. Using increment/decrement in expressions

```js
let num = 5;
console.log(num++ + 2);  // 7
console.log(num);        // 6
```

```js
let num2 = 5;
console.log(++num2 + 2); // 8
console.log(num2);       // 6
```

```js
let value = 5;
console.log(value-- - 2); // 3
console.log(value);       // 4
```

---

## 8. Quick Revision Table

| Operator | Meaning | Example |
|----------|---------|---------|
| `x++` | Post-increment | use value, then add 1 |
| `++x` | Pre-increment | add 1, then use value |
| `x--` | Post-decrement | use value, then subtract 1 |
| `--x` | Pre-decrement | subtract 1, then use value |

---

## 9. Final Summary

Increment and decrement operators are used to increase or decrease values by 1.

- `++` means increase by 1
- `--` means decrease by 1
- Post operators use the original value first
- Pre operators update the value first

These operators are very useful in loops, counters, and conditions.
