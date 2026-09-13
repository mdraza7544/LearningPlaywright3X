// Different Ways to Access Array Elements
let fruits = ["Apple", "Mango", "Banana", "Orange"];


// 1. Using Index
// Array index starts from 0.
console.log(fruits[0]);   
console.log(fruits[2]);   


// 2. Using a Variable as Index
let index = 1;
console.log(fruits[index]);


// 3. Using for Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 4. Using for...of
for (let fruit of fruits) {
    console.log(fruit);
}


// 5. Using forEach()
fruits.forEach(function(fruit) {
    console.log(fruit);
});


// 6. Using at()
console.log(fruits.at(0));    
console.log(fruits.at(-1));   


// 7. Accessing the last element
console.log(fruits[fruits.length - 1]);   


// 8. Accessing nested array
let students = [
    "Rahul",
    22,
    ["Java", "JavaScript", "Python"]
];
console.log(students[2][0]);   // Java
console.log(students[2][1]);   // JavaScript
console.log(students[2][2]);   // Python