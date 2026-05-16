const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a two digit number: "));
        
let tensDigit = Math.floor(number / 10);
let unitsDigit = number % 10;

if (tensDigit > unitsDigit){
    console.log("%d is greater than %d", tensDigit, unitsDigit);
}
else if (tensDigit < unitsDigit){
    console.log("%d is less than %d", tensDigit, unitsDigit);
}
else if (tensDigit == unitsDigit){
    console.log("%d is equal to %d", tensDigit, unitsDigit);
}

