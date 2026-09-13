# Additional JavaScript Operator Concepts

This note covers the newer operator examples that were added after the earlier chapter notes.

It is based on the following files:
- `05_chapter_operators/08_string_operator.js`
- `05_chapter_operators/09_Terenary_Operator.js`
- `05_chapter_operators/10_IQ1.js`
- `05_chapter_operators/11_IQ2.js`
- `05_chapter_operators/12_IQ3.js`
- `05_chapter_operators/13_IQ4.js`
- `05_chapter_operators/14_IQ5.js`
- `05_chapter_operators/15_Nested_Ternary_Op.js`
- `05_chapter_operators/16_IQ_NT.js`
- `05_chapter_operators/17_IQ_NT.js`
- `05_chapter_operators/18_Type_Operator.js`

---

## 1. String Operators

String operators are used to work with text values.

### Concatenation using `+`

```js
let firstName = "Rahul";
let lastName = "Kumar";
console.log(firstName + " " + lastName);
```

This joins two strings together.

### Concatenation assignment using `+=`

```js
let message = "Hello";
message += " Rahul";
console.log(message);
```

### Template literals

Template literals use backticks and allow variables inside strings.

```js
let name = "Rahul";
let course = "MCA";
console.log(`My name is ${name} and I am studying ${course}.`);
```

---

## 2. Ternary Operator

The ternary operator is a short form of if-else.

### Syntax

```js
condition ? value_if_true : value_if_false;
```

### Example

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);
```

This is equivalent to:

```js
if (age >= 18) {
  result = "Adult";
} else {
  result = "Not Adult";
}
```

### More examples

```js
let marks = 75;
let status = marks >= 40 ? "Pass" : "Fail";
console.log(status);
```

```js
let number = 10;
let result2 = number % 2 === 0 ? "Even" : "Odd";
console.log(result2);
```

---

## 3. IQ Practice with Ternary Operator

These examples show how the ternary operator is used in real-world conditions.

### Example 1

```js
let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log(testResult);
```

### Example 2

```js
let environment = "staging";
let baseurl =
  environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
```

This is a common pattern for selecting a URL based on environment.

### Example 3

```js
let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within Sla" : "SLA breached";
console.log(`Response : ${responseTime}ms - ${slaStatus}`);
```

---

## 4. Nested Ternary Operator

A nested ternary operator is a ternary operator inside another ternary operator.

### Syntax

```js
condition1 ? value1 : condition2 ? value2 : value3;
```

### Example

```js
let marks = 75;
let result = marks >= 80 ? "A Grade" : marks >= 60 ? "B Grade" : "C Grade";
console.log(result);
```

This means:
- if marks >= 80, print A Grade
- else if marks >= 60, print B Grade
- otherwise print C Grade

### Example with HTTP status

```js
let statusCode = 404;
let message = statusCode === 200 ? "Success" : statusCode === 404 ? "Not Found" : "Server Error";
console.log(message);
```

### Example with temperature

```js
let temp = 35;
let feel =
    temp >= 30 ? "Hot" :
    temp >= 20 ? "Normal" :
    temp >= 10 ? "Cold" :
    "Very Cold";

console.log(feel);
```

---

## 5. typeof Operator

The `typeof` operator is used to find the data type of a value or variable.

### Examples

```js
let name = "Rahul";
console.log(typeof name); // string

let age = 22;
console.log(typeof age); // number

let isStudent = true;
console.log(typeof isStudent); // boolean

let address;
console.log(typeof address); // undefined

let student = {
  name: "Rahul",
  age: 22
};
console.log(typeof student); // object

let marks = [80, 90, 75];
console.log(typeof marks); // object

let result = null;
console.log(typeof result); // object
```

### Important note

- `typeof null` returns `object` in JavaScript.
- `typeof []` also returns `object`.
This is a JavaScript quirk and is important to remember.

---

## 6. Quick Comparison Table

| Concept | Syntax | Purpose |
|---------|--------|---------|
| String concatenation | `+` | Join strings |
| Ternary | `condition ? a : b` | Short if-else |
| Nested ternary | `a ? b : c ? d : e` | Multiple conditions |
| typeof | `typeof value` | Check data type |

---

## 7. Summary

These newer operator examples introduced important JavaScript ideas:
- joining strings with `+` or template literals
- writing simple conditions with ternary operators
- handling multiple conditions using nested ternary operators
- checking the type of variables using `typeof`

These are very useful for writing shorter and cleaner code in JavaScript.
