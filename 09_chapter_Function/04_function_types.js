// JAVASCRIPT - TYPES OF FUNCTIONS

// 1. ANONYMOUS FUNCTION
// A function without a name is called an anonymous function.
// Example:

let message = function () {
  console.log("Hello");
};
message();



// 2. ARROW FUNCTION
// Arrow function is a shorter way to write a function.
// Example:
let greet2 = () => {
  console.log("Hello from Arrow Function");
};
greet2();



// 3. ARROW FUNCTION WITH PARAMETERS

let add2 = (a, b) => {
  return a + b;
};
console.log(add2(10, 20));



// 4. SHORT ARROW FUNCTION
// If there is only one statement that returns a value, we can write it in one line.

let multiply = (a, b) => a * b;
console.log(multiply(5, 4));

let square2 = (number) => number * number; // with one parameter 
console.log(square2(5));



// 5. CALLBACK FUNCTION
// A function passed as an argument to another function is called a callback function.

function greetPerson(name) {
  console.log("Hello " + name);
}
function processUser(callback) {
  callback("Rahul");
}
processUser(greetPerson);


// 6. CALLBACK USING ARROW FUNCTION
function processNumber(number, callback) {
  let result = callback(number);
  console.log(result);
}
processNumber(10, (number) => number * 2);




// 7. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// IIFE is a function that is created and immediately executed.

(function () {
  console.log("Function executed immediately");
})();

// 8. IIFE WITH PARAMETERS

(function (name) {
  console.log("Hello " + name);
})("Rahul");


// 9. ASYNC FUNCTION
// An async function is used when working with asynchronous operations. It always returns a Promise.

async function getMessage() {
  return "Hello";
}

getMessage().then((result) => {
  console.log(result);
});


// 10. ASYNC FUNCTION WITH AWAIT\ await is used inside an async function to wait for a Promise to complete.

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function showData() {
  let result = await getData();

  console.log(result);
}

showData();
