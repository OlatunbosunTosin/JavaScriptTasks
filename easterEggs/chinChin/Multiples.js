const prompt = require("prompt-sync")();

let number = Number(prompt("Enter Integer: "));

    
if (number % 5 == 0){
    console.log("HiFive");
} 

if (number % 2 == 0){
    console.log("HiEven");
} 


