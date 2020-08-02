let isPresent = 1;
let empCheck = Math.floor(Math.random() * 10) % 2;
let WAGE_PER_HOUR = 20;
let HOURS_PER_DAY = 8;
let wageForOneDay = 0;
if (empCheck == isPresent)
{
	console.log("Employee is Present");
	wageForOneDay = WAGE_PER_HOUR * HOURS_PER_DAY;
}
else
	console.log("Employee is Absent");
console.log("Today's Wage :" + wageForOneDay);
