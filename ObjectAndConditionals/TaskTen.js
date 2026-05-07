const prompt = require("prompt-sync")();

const integer = Number(prompt("Enter an integer: "))

if (integer > 0)
    console.log(integer + " is positive")
else if (integer == 0)
    console.log(integer + " is zero")
else if (integer < 0)
    console.log(integer + " is negative")
