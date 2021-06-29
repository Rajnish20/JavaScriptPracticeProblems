const prompt = require('prompt-sync')();
 
const num = Number(prompt('Enter number '));
if(num <= 1){
    console.log("Not a Prime Number");
    return;
}
for(let i = 2; i < Math.sqrt(num); i++){
    if(num%i == 0){
        console.log("Not a Prime Number");
        return;
    }
}
console.log("Prime Number");