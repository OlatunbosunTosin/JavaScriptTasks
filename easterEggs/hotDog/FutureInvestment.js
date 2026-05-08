const prompt = require("prompt-sync")();
let investmentAmount = Number(prompt("Enter Investment Amount "));
let annualInterestRate = Number(prompt("Enter annual interest rate: "));
let numberOfYears = Number(prompt("Enter number of years: "));
monthlyInterestRate = annualInterestRate / 12;
futureInvestmentValue = investmentAmount * (Math.pow((1 + monthlyInterestRate), (numberOfYears * 12)));
console.log("futureInvestmentValue is %f" , futureInvestmentValue);
    
