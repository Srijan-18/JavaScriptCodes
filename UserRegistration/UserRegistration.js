let prompt = require('prompt-sync')();

let NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');

function resultDisplay(result) {
if(result)
	console.log("Valid First Name.\n");
else
	console.log("Invalid First Name.\n");
}

//========== FIRST NAME CHECK ==========
let input = prompt("Enter First Name :");
let result = NAME_REGEX.test(input);
resultDisplay(result);

//========== LAST NAME CHECK ==========
input = prompt("Enter Last Name :");
result = NAME_REGEX.test(input);
resultDisplay(result);
