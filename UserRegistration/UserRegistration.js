let prompt = require('prompt-sync')();

let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let name = prompt("Enter your name :");
let checkName = nameRegex.test(name);
console.log(checkName);
