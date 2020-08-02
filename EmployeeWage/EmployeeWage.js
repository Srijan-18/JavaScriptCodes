let IS_FULL_TIME = 1;
let FULL_TIME_DAY_HOURS = 8;
let IS_PART_TIME = 2;
let PART_TIME_DAY_HOURS = 4;
let WAGE_PER_HOUR = 20;
let MAX_WORKING_DAYS = 20;
let MAX_WORKING_HOURS = 100;
let hoursInMonth = 0;
let numOfDays = 0;

function getDailyWorkingHours() {
let dailyHours = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck)
	{
		case IS_FULL_TIME:
			dailyHours = FULL_TIME_DAY_HOURS;
		break;
		case IS_PART_TIME:
			dailyHours = PART_TIME_DAY_HOURS;
		break;
	}
	return dailyHours;
}

while( numOfDays < MAX_WORKING_DAYS && hoursInMonth < MAX_WORKING_HOURS)
{
	hoursInMonth += getDailyWorkingHours();
	numOfDays++;
}
let wageForMonth = hoursInMonth * WAGE_PER_HOUR;
console.log("Num of Days :" + numOfDays);
console.log("Total Working Hours :" + hoursInMonth);
console.log("Total Wage :" + wageForMonth);
