
const prompt = require('prompt-sync')();
 
const num = Number(prompt('Enter number '));
let res = 1;
for(let i = 2 ; i <= num; i++)
{
  res = res * i;
}
console.log("Factorial of " +num+ " is " +res);