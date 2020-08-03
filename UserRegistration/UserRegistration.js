let prompt = require('prompt-sync')();

let NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
let EMAIL_REGEX = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$');

function resultDisplay(result, field) {
if(result)
	console.log("Valid "+ field + ".\n");
else
	console.log("Invalid "+ field + ".\n");
}

//========== FIRST NAME CHECK ==========
let input = prompt("Enter First Name :");
let result = NAME_REGEX.test(input);
resultDisplay(result, "First Name");

//========== LAST NAME CHECK ==========
input = prompt("Enter Last Name :");
result = NAME_REGEX.test(input);
resultDisplay(result, "Last Name");

//========== E-MAIL CHECK ==========
input = prompt("Enter Email-Id :");
result = EMAIL_REGEX.test(input);
resultDisplay(result, "Email-Id");


