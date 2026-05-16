const prompt = require("prompt-sync")();

let randomNumber = Math.floor(Math.random() * 100)
let userNumber = Number(prompt("Enter a two digit number: "));
    

let leftRandomNumber = Math.floor(randomNumber / 10);
let rightRandomNumber = Math.floor(randomNumber / 10);
let leftUserNumber = userNumber / 10;
let rightUserNumber = userNumber % 10;
           

if (randomNumber == userNumber){
    console.log("Lottery number is %02d and your number is %02d, You won $10000", randomNumber, userNumber);
}
else if (leftRandomNumber == rightUserNumber && rightRandomNumber == leftUserNumber){
    console.log("Lottery number is %02d and your number is %02d, You won $3000", randomNumber, userNumber);
}
else if (leftRandomNumber == rightUserNumber || rightRandomNumber == leftUserNumber || leftRandomNumber == leftUserNumber || rightRandomNumber == rightUserNumber){
    console.log("Lottery number is %02d and your number is %02d, You won $1000", randomNumber, userNumber);
}
else{
    console.log("Lottery number is %02d and your number is %02d Nothing for you!!! ", randomNumber, userNumber);
}
 
