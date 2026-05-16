const prompt = require("prompt-sync")();

let number = prompt("Enter an Integer: ");

if (number.length == 3){
    console.log(`${number} is a three-digit number`);
}
else {
    console.log(`${number} is not a three-digit number`);
}

