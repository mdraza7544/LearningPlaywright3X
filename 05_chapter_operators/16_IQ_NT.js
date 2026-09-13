// 200 -> Success
// 404 -> Not Found
// 500 -> Server Error

let statusCode = 404;
let message = statusCode === 200 ? "Success": statusCode === 404 ? "Not Found": "Server Error";

console.log(message);
