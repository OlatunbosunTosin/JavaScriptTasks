const prompt = require("prompt-sync")();
let amount = Number(prompt("Enter your monthly savings amount: "));
      
let interest = 0.003125 * amount * 6;
let accountValue = amount + interest;
console.log("Your account value after six months is %f", accountValue);

