const prompt = require("prompt-sync")();

let number = prompt("Enter a four digit integer: ");
let reverseOrder = 0;
originalNumber = number;

if (number.length == 4){
    
    while(number > 0){
    
        let remainder = Number(number) % 10;
        reverseOrder = reverseOrder * 10 + remainder;
        number = Math.floor(number / 10);
    
    }console.log(`Reverse of ${originalNumber} = ${reverseOrder}`);
    
}  
else
    console.log(`Enter four digits`);      


