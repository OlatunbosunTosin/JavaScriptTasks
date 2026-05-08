const prompt = require("prompt-sync")();
let firstNum = Number(prompt("Enter first number: "));
let secondNum = Number(prompt("Enter second number: "));
let thirdNum = Number(prompt("Enter third number: "));

let average = (firstNum + secondNum + thirdNum) / 3;
console.log("Average is", average);

