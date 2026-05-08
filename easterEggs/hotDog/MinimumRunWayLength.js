const prompt = require("prompt-sync")();
let velocity = Number(prompt("Enter velocity: "));
let acceleration = Number(prompt("Enter acceleration: "));
      
let length = (velocity * velocity) / (2 * acceleration);
console.log("Minimum runway length = %f m" , length);
 
