let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let empCheck = Math.floor(Math.random() * 10) % 3;
let WAGE_PER_HOUR = 20;
let hoursPerDay = 0;
let wageForOneDay = 0;
switch (empCheck)
{
	case IS_FULL_TIME:
		console.log("Employee is Present and is Full Time");
		hoursPerDay = 8;
	break;
	case IS_PART_TIME:
		console.log("Employee is Present and is Part Time");
		hoursPerDay = 4;
	break;
	default:
		console.log("Employee is Absent");
}
wageForOneDay = hoursPerDay * WAGE_PER_HOUR;
console.log("Today's Wage :" + wageForOneDay);
