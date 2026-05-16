const prompt = require("prompt-sync")();

let firstNum = Number(prompt("Enter first number: "))
let secondNum = Number(prompt("Enter second number: "))

let largerValue = Math.max(firstNum, secondNum);
let smallerValue = Math.min(firstNum, secondNum);
let sum = firstNum + secondNum;
let difference = firstNum - secondNum;
let product = firstNum * secondNum;
let quotient = firstNum / secondNum;
        
if(secondNum == 0){
    console.log("can't divide by 0");
} 
else{
    console.log("Sum = %f\nDifference = %f\nlargerValue = %f\nsmallerValue = %f\nproduct = %f\nquotient = %f", sum, difference, largerValue, smallerValue, product, quotient);
}

