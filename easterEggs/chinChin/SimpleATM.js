const prompt = require("prompt-sync")();

let userPin = Number(prompt("Enter PIN: "));
      
let pin = 1234;

if (userPin == pin){
    console.log("Your balance is $1000");
}
else {
    console.log("Incorrect PIN");
}

