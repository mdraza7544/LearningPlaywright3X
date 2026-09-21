// 1. length - tells us how many characters are in the string
let text = "Hello World";
console.log(text.length); // 11

// 2. toUpperCase() - changes all letters to uppercase
let name = "ashif";
console.log(name.toUpperCase()); // ASHIF

// 3. toLowerCase() - changes all letters to lowercase
let city = "BANGALORE";
console.log(city.toLowerCase()); // bangalore

// 4. charAt() - gets the character at a specific position
let word = "JavaScript";
console.log(word.charAt(0)); // J

// 5. includes() - checks if a word or character exists in the string
let message = "I am learning JavaScript";
console.log(message.includes("JavaScript")); // true

// 6. startsWith() - checks if the string starts with something
let language = "JavaScript";
console.log(language.startsWith("Java")); // true

// 7. endsWith() - checks if the string ends with something
let file = "index.js";
console.log(file.endsWith(".js")); // true


// 8. indexOf() - gives the position of the first matching character or word
let sentence = "I love JavaScript";
console.log(sentence.indexOf("JavaScript")); // 7

// 9. slice() - takes out a part of the string
let fruit = "Banana";
console.log(fruit.slice(0, 3)); // Ban

// 10. substring() - gets a part of the string
let languageName = "JavaScript";
console.log(languageName.substring(0, 4)); // Java

// 11. replace() - replaces a word or character
let text2 = "I like Java";
console.log(text2.replace("Java", "JavaScript")); // I like JavaScript


// 12. trim() - removes extra spaces from the beginning and end
let username = "   Ashif   ";
console.log(username.trim()); // Ashif

// 13. split() - breaks a string into an array
let colors = "red,blue,green";
console.log(colors.split(",")); // ["red", "blue", "green"]

// 14. concat() - joins two or more strings together
let firstName = "Md";
let lastName = "Ashif";
console.log(firstName.concat(" ", lastName)); // Md Ashif