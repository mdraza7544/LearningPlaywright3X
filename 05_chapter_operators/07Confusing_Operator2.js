//! Confusing Operators in JavaScript Part 2

//! 1. null == undefined
// With ==, null and undefined are considered equal.
console.log(null == undefined);     // true


//! 2. null === undefined
// With ===, value and data type are both checked.
// null and undefined have different types.
console.log(null === undefined);    // false


//! 3. null == 0
// null is not equal to 0 with ==.
console.log(null == 0);              // false


//! 4. null > 0
// In a numeric comparison, null is converted to 0.
console.log(null > 0);               // false


//! 5. null >= 0
// null is converted to 0.
// 0 >= 0 is true.
console.log(null >= 0);              // true


//! 6. null == 0 || null > 0
// Both conditions are false.
console.log(null == 0 || null > 0);  // false

//! Quick Revision
// null == undefined       -> true
// null === undefined      -> false
// null == 0               -> false
// null > 0                -> false
// null >= 0               -> true
// null == 0 || null > 0   -> false