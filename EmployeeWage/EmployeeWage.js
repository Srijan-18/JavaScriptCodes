let IS_FULL_TIME = 1;
let FULL_TIME_DAY_HOURS = 8;
let IS_PART_TIME = 2;
let PART_TIME_DAY_HOURS = 4;
let WAGE_PER_HOUR = 20;
let NUM_OF_WORKING_DAYS = 20;
let hoursInMonth = 0;
let wageForMonth = 0;
for (let dayCount = 1; dayCount <= NUM_OF_WORKING_DAYS; dayCount++)
{
	let empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck)
	{
		case IS_FULL_TIME:
			hoursInMonth += FULL_TIME_DAY_HOURS;
		break;
		case IS_PART_TIME:
			hoursInMonth += PART_TIME_DAY_HOURS;
		break;
	}
}
wageForMonth = hoursInMonth * WAGE_PER_HOUR;
console.log("Total Working Hours :" + hoursInMonth);
console.log("Total Wage :" + wageForMonth);
