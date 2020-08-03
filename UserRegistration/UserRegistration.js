let prompt = require('prompt-sync')();

let NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
let EMAIL_REGEX = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$');
let MOBILE_NUMBER_REGEX = RegExp('^[1-9][0-9]{0,2}[ ][1-9][0-9]{9}$');
function resultDisplay(result, field) {
if(result)
	console.log("Valid "+ field + ".\n");
else
	console.log("Invalid "+ field + ".\n");
}

//========== FIRST NAME ==========
let input = prompt("Enter First Name :");
let result = NAME_REGEX.test(input);
resultDisplay(result, "First Name");

//========== LAST NAME ==========
input = prompt("Enter Last Name :");
result = NAME_REGEX.test(input);
resultDisplay(result, "Last Name");

//========== E-MAIL ==========
input = prompt("Enter Email-Id :");
result = EMAIL_REGEX.test(input);
resultDisplay(result, "Email-Id");

//========== MOBILE NUMBER ===========
input = prompt("Enter Mobile Number :");
result = MOBILE_NUMBER_REGEX.test(input);
resultDisplay(result, "Mobile Number");
