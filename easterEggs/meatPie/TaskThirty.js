const prompt = require("prompt-sync")();
let firstNum = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number: "));

let sum = firstNum + secondNumber;
let product = firstNum * secondNumber;
console.log("Sum = %d and Product = %d", sum, product);

