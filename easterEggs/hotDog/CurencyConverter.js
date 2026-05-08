const prompt = require("prompt-sync")();
let exchangeRate = Number(prompt("Enter Exchange rate: "));

let converter = Number(prompt("Enter 0 to convert from dollars to RMB or 1 to convert from RMB to dollars: "));
let amount = Number(prompt("Enter amount to convert: "));


if (converter == 0){
    console.log("%f USD is %f RMB", amount, amount * exchangeRate);
}
else if (converter == 1){
    console.log("%f RMB is %f USD", amount, amount / exchangeRate);
}
else
    console.log("Error, choose between 0 and 1");

