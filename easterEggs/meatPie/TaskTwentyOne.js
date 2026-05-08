const prompt = require("prompt-sync")();
let base = Number(prompt("Enter base: " )); 
let height = Number(prompt("Enter height: " )); 

area = 0.5 * (base * height);
console.log("Area = ", area);

