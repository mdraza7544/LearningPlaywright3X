let isCI = true;
let browserMode = (isCI = "prod" ? "headless" : "headed");
console.log(browserMode);
