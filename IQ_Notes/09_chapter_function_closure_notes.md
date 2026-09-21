# JavaScript Closure

This note is based on the remaining uncommitted file in the function chapter:
- `09_chapter_Function/06_fn_clouser.js`

---

## 1. What is a Closure?

A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

### Simple idea

The inner function keeps access to the outer function's variables.

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}
```

Here, `inner` can still use `count` even after `outer()` has returned.

---

## 2. Example 1: Counter

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

### Explanation
- `count` is declared inside `outer()`
- `inner()` is able to access and update it
- the value persists between calls

---

## 3. Example 2: Counter Object

```js
function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },

    decrement: function () {
      count--;
      console.log(count);
    },

    reset: function () {
      count = 0;
      console.log(count);
    },
  };
}

const count = counter();
count.increment(); // 1
count.increment(); // 2
count.increment(); // 3
count.decrement(); // 2
count.reset(); // 0
count.increment(); // 1
```

### Explanation
Each method keeps access to the same `count` variable from the outer function.

---

## 4. Example 3: Retry Tracker

```js
function maxRetryTracker(max) {
  let attempts = 0;

  function tryAgain() {
    attempts++;
    if (attempts <= max) {
      return "Try again";
    }
    return "Maximum retries reached";
  }

  return tryAgain;
}

const retry = maxRetryTracker(3);
console.log(retry()); // Try again
console.log(retry()); // Try again
console.log(retry()); // Try again
console.log(retry()); // Maximum retries reached
```

### Explanation
The inner function keeps track of how many times it has been called, even though the outer function is not running anymore.

---

## 5. Why closures are useful

Closures are useful for:
- data privacy
- maintaining state between function calls
- counters
- access control
- retry logic
- private variables

---

## 6. Quick Comparison Table

| Concept | Meaning |
|---------|---------|
| Closure | Inner function keeps access to outer variables |
| Outer function | Function that creates the variables |
| Inner function | Function that uses those variables later |

---

## 7. Summary

A closure allows an inner function to remember and use variables from its outer function even after the outer function has finished running.

This is a powerful JavaScript feature used in:
- counters
- private variables
- event handlers
- retry logic
- state management

In short, closures let functions keep their own data alive across calls.
