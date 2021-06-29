function prime(num){
  if(num <= 1){
      return false
  }
  for(let i = 2; i < Math.sqrt(num); i++){
      if(num%i == 0){
          return false;
      }
  }
  return true;
}
function reverse(n){
    var digit, result = 0

    while(n > 0 ){
        digit = n % 10;
        result = (result * 10) + digit;
        n = n/10|0;
    }  
  return result;
}

function isPalindrome(n)
{
  let reverseNum = reverse(n);
  if(reverseNum == n){
    let isPrime = prime(n);
    if(isPrime == true){
      console.log("Palindrome And Prime too");
    }else{
      console.log("Palindrome but not Prime")
    }
  }else{
    console.log(n+ " is not a Palindrome");
  }
}

const prompt = require('prompt-sync')();
 
const num = prompt('Enter number ');
isPalindrome(Number(num));