//! 2D Array in JavaScript
// A 2D array is an array that contains other arrays. It looks like a table with rows and columns.
let numbers = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(numbers);

let numbers0 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(numbers0[0][0]);
console.log(numbers0[0][1]);
console.log(numbers0[1][2]);
console.log(numbers0[2][1]);

//  Change a Value
let numbers1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// change 50 to 100
numbers1[1][1] = 100;
console.log(numbers1);


let numbers2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

for (let i = 0; i < numbers2.length; i++) {
    for (let j = 0; j < numbers2[i].length; j++) {
        console.log(numbers2[i][j]);
    }
}


// Print Like a Table
let numbers3 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

for (let i = 0; i < numbers3.length; i++) {
    let row = "";
    for (let j = 0; j < numbers3[i].length; j++) {
        row = row + numbers3[i][j] + " ";
    }
    console.log(row);
}

// Example with Students
let students = [
    ["Rahul", 22, "Java"],
    ["Aman", 23, "JavaScript"],
    ["Neha", 21, "Python"]
];
console.log(students[0][0]);
console.log(students[1][2]);
console.log(students[2][1]);