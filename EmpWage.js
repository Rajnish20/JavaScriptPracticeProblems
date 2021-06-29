{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    }
    else{
    console.log("Employee is Present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkingHours(empCheck){
 switch(empCheck){
     case IS_FULL_TIME:
        return FULL_TIME_HOURS;
     case IS_PART_TIME:
        return PART_TIME_HOURS;
     default:
        return 0;
    }
}

// USE For loop
{
    let totalEmpHours = 0;
    for(let days = 0; days < WORKING_DAYS; days++)
       {
          let empCheck = Math.floor(Math.random() * 10) % 3;
           totalEmpHours += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHours * WAGE_PER_HOUR;
    console.log("Emp Hours : " +totalEmpHours);
    console.log("Emp Wage : " +empWage);
}

// USE while loop
let totalWorkingDays = 0;
let totalEmpHours = 0;
while(totalWorkingDays < WORKING_DAYS && totalEmpHours <= MAX_WORKING_HOURS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHours += getWorkingHours(empCheck);
}
let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Emp Wage : " +empWage);
console.log("Total Hours : " +totalEmpHours+ " Total Working Days : " +totalWorkingDays);


