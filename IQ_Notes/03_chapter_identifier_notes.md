# JavaScript Identifiers and Comments

This note is based on the files present in the `03_chapter_identifer` folder:
- `03_identifer_rules1.js`
- `03_identifer_rules2.js`
- `comment.js`

## 1. What is an Identifier?

An identifier is the name given to a variable, function, class, or other code element.

Example:

```js
let studentName = "Rahul";
```

Here, `studentName` is an identifier.

---

## 2. Rules for JavaScript Identifiers

### Valid starting characters
An identifier can start with:
- a letter
- `_` (underscore)
- `$` (dollar sign)

Example:

```js
let name = "Rahul";
let _age = 21;
let $price = 500;
```

### Invalid starting characters
An identifier cannot start with a number.

```js
// Wrong
let 1name = "Rahul";
```

### Spaces are not allowed

```js
// Wrong
let student name = "Rahul";
```

Correct:

```js
let studentName = "Rahul";
```

### Special characters are not allowed
Hyphen, @, #, etc. are not allowed in identifiers.

```js
// Wrong
let student-name = "Rahul";
let student@name = "Rahul";
```

### Case-sensitive
JavaScript treats uppercase and lowercase as different.

```js
let city = "Bengaluru";
let City = "Mysuru";
```

`city` and `City` are different identifiers.

### Reserved words cannot be used
Keywords like `class`, `function`, `return`, `if`, `let`, etc. cannot be used as identifiers.

```js
// Wrong
let class = "MCA";
```

---

## 3. Naming Conventions in JavaScript

There are three common styles:

| Style | Example | Used for |
|------|---------|----------|
| camelCase | `studentName` | variables, functions |
| PascalCase | `StudentDetails` | classes |
| snake_case | `student_name` | sometimes used in Python-style coding |

### camelCase

```js
let studentName = "Rahul";
let totalMarks = 450;
```

### PascalCase

```js
class StudentDetails {
  constructor(name) {
    this.name = name;
  }
}
```

### snake_case

```js
let student_name = "Rahul";
let total_marks = 450;
```

> Important: These are naming style conventions, not different kinds of variables.

---

## 4. JavaScript Comments

Comments are text written in code to explain logic. JavaScript ignores them while running the program.

### Single-line comment

```js
// This is a single-line comment
let name = "Rahul";
```

### Multi-line comment

```js
/*
This is a multi-line comment.
It can contain many lines.
*/
```

Comments are useful for:
- explaining code
- noting important logic
- temporarily disabling code

Example:

```js
// let marks = 90;
// console.log(marks);
```

---

## 5. Quick Revision

- An identifier is a name for a variable or function.
- It can start with a letter, `_`, or `$`.
- It cannot start with a number.
- It cannot contain spaces.
- It cannot use special characters like `-`, `@`, `#`.
- It is case-sensitive.
- Reserved keywords cannot be used.
- Common naming styles are `camelCase`, `PascalCase`, and `snake_case`.
- Comments help explain the code but are not executed.

---

## 6. Example Program

```js
let studentName = "Rahul";
let _college = "ABC College";
let $fees = 50000;

console.log(studentName);
console.log(_college);
console.log($fees);
```

This is valid because all names follow identifier rules.

---

## Final Summary

JavaScript identifiers are the names we give to variables, functions, and classes. They must follow specific naming rules, and good naming style makes code readable. Comments are used to explain code but do not affect execution.
