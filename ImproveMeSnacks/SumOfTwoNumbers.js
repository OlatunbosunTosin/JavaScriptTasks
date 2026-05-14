const prompt = require("prompt-sync")();

let numberOne = Number(prompt("Enter first number: "));
let numberTwo = Number(prompt("Enter second number: "));

function sumOfTwoNumbers(numberOne, numberTwo){

    return numberOne + numberTwo;

}
console.log(sumOfTwoNumbers(numberOne, numberTwo));
