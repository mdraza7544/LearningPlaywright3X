//! JavaScript Object
//? An object in JavaScript is used to store related data in key-value pairs.

// Simple object
let student = {
    name: "Ashif",
    age: 22,
    course: "MCA"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);


//  1. Simple Object
let person = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};
console.log(person.name);
console.log(person.city);


//! 2. Array of Objects
// We can store multiple objects inside an array.
let students = [
    {
        name: "Rahul",
        age: 22
    },
    {
        name: "Aman",
        age: 23
    },
    {
        name: "Neha",
        age: 21
    }
];

// getting data from the array
console.log(students[0].name);
console.log(students[1].age);

//! 3. Object with Function
// A function inside an object is called a method.
let user = {
    name: "Ashif",
    age: 22,
    sayHello: function() {
        console.log("Hello " + this.name);
    }
};
console.log(user.name);
user.sayHello();


//! 4. Object + Array + Function Together
// We can also put an array and a function inside the same object.


let studentProfile = {
    name: "Ashif",
    age: 22,
    subjects: ["JavaScript", "Java", "SQL"],

    showDetails: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Subjects:");
        for (let subject of this.subjects) {
            console.log(subject);
        }
    }
};

// accessing normal object values
console.log(studentProfile.name);
console.log(studentProfile.age);

// accessing array values
console.log(studentProfile.subjects[0]);
console.log(studentProfile.subjects[1]);

// calling the function
studentProfile.showDetails();

