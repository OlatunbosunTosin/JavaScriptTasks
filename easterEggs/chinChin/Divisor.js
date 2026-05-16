const prompt = require("prompt-sync")();

let numberOne = Number(prompt("Enter a number: "));
let numberTwo = Number(prompt("Enter a number: "));

let div = numberOne / numberTwo;

if (numberTwo == 0){
    console.log("You cannot divide by 0");
}
else {
    console.log("%d/%d = %d", numberOne, numberTwo, div);
}

