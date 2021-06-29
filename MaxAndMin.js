let max=0;
let min=999;
for (let i = 0; i < 5; i++) {
let number = Math.floor(Math.random() * 900) + 100;
console.log("number="+number);
 if(number > max) {
     max = number;
 }
 if(number < min) {
     min = number;
 }
}
console.log("minimum value  =  "+min);
console.log("maximum value  =  "+max);