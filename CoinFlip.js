let heads = 0;
let tails = 0;
let flip;
while(heads < 11 || tails < 11)
{
    flip = Math.floor(Math.random() * 10) % 2;
    if(flip == 0){
        heads++;
    }else{
        tails++;
    }
}

if(heads == 11){
    console.log("Heads win");
}else{
    console.log("Tails win");
}