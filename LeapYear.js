const prompt = require('prompt-sync')();
 
const year = prompt('Enter number ');
let y = Number(year)%4;
let r = Number(year)%100;
let t = Number(year)%400;
if((y == 0 && r != 0) || t==0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap Year");
}