//! What is a Closure in JavaScript?
//? A closure happens when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

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
counter(); // 3\


//! Example 2

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



//! Example 2
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