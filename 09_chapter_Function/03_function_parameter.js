// JAVASCRIPT FUNCTION PARAMETERS
// 1. WHAT IS A FUNCTION PARAMETER?
// A parameter is a variable written inside the
// parentheses () of a function.
// It is used to receive a value when the function
// is called.

// Example:
function greet(name) {
  console.log("Hello " + name);
}
greet("Rahul");

// 2. PARAMETER VS ARGUMENT
// Parameter:
// A variable written in the function definition.
// Argument:
// The actual value passed while calling the function.
function add(a, b) {
  return a + b;
}
add(10, 20);

// a and b  -> Parameters
// 10 and 20 -> Arguments

// EX. MULTIPLE PARAMETERS
function calculateTotal(price, quantity, discount) {
  let total = price * quantity;
  let discountAmount = (total * discount) / 100;
  return total - discountAmount;
}
let bill = calculateTotal(1000, 3, 10);
console.log(bill);

// Boolean parameter
function checkStatus(isOnline) {
  if (isOnline) {
    console.log("User is online");
  } else {
    console.log("User is offline");
  }
}
checkStatus(true);

// 8. DEFAULT PARAMETER
// A default parameter is a parameter that
// already has a default value.
// If no argument is provided,
// the default value will be used.

function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser("Rahul"); // Hello Rahul
greetUser(); // Hello Guest

// DEFAULT PARAMETER WITH NUMBER
function calculatePrice(price, tax = 18) {
  return price + (price * tax) / 100;
}
console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 10));