const prompt = require("prompt-sync")();
let balance = Number(prompt("Enter Account balance: "));
let annualInterestRate = Number(prompt("Enter annual interest rate: "));
  
let Interest = balance * (annualInterestRate / 12);
console.log("Interest for next month is %f" , Interest);
 
