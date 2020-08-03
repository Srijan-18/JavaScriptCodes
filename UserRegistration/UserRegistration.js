let prompt = require('prompt-sync')();

let NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
let EMAIL_REGEX = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$');
let MOBILE_NUMBER_REGEX = RegExp('^[1-9][0-9]{0,2}[ ][1-9][0-9]{9}$');
let PASSWORD_REGEX = RegExp('^(?=.*[A-Z])([A-z0-9]){8,}$');

function resultDisplay(result, field) {
if(result)
	console.log("Valid "+ field + ".\n");
else
	console.log("Invalid "+ field + ".\n");
}

function validateWithRegexAndDisplayResult(input, field, REGEX) {
	resultDisplay(REGEX.test(input), field);
}

//========== FIRST NAME ==========
let input = prompt("Enter First Name :");
validateWithRegexAndDisplayResult(input, "First Name", NAME_REGEX);

//========== LAST NAME ==========
input = prompt("Enter Last Name :");
validateWithRegexAndDisplayResult(input, "Last Name", NAME_REGEX);

//========== E-MAIL ==========
input = prompt("Enter Email-Id :");
validateWithRegexAndDisplayResult(input, "Email-Id", EMAIL_REGEX);

//========== MOBILE NUMBER ===========
input = prompt("Enter Mobile Number :");
validateWithRegexAndDisplayResult(input, "Mobile Number", MOBILE_NUMBER_REGEX);

//========== PASSWORD ==========
input = prompt("Enter Password :");
validateWithRegexAndDisplayResult(input, "Password", PASSWORD_REGEX);
