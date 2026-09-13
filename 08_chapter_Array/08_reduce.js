// reduce(
// reduce() is used to reduce an array
// into a SINGLE value
// It can be used for:
// - Adding numbers
// - Finding total
// - Multiplication
// - Finding maximum/minimum
// - Counting values

// Example 1: Add all numbers
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(total); // 10

// Example 2: Short form
let numbers2 = [10, 20, 30, 40];
let total2 = numbers2.reduce((sum, num) => sum + num, 0);
console.log(total2); // 10

// Example 3: Find total price
let prices = [100, 200, 300, 400];
let totalPrice = prices.reduce((total, price) => {
  return total + price;
}, 0);
console.log(totalPrice);
// 1000

// Example 4: Multiply all numbers

let numbers3 = [2, 3, 4];

let result = numbers3.reduce((total, num) => {
  return total * num;
}, 1);

console.log(result);
// 24

// Example 5: Find the largest number

let numbers4 = [10, 50, 20, 80, 30];

let largest = numbers4.reduce((max, num) => {
  return num > max ? num : max;
}, numbers4[0]);

console.log(largest);
// 80