const prompt = require("prompt-sync")();
let x1 = Number(prompt("Enter x1: "));
let x2 = Number(prompt("Enter x2: "));
let y1 = Number(prompt("Enter y1: "));
let y2 = Number(prompt("Enter y2: "));

let distance = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
console.log("Distance between the two points = %f", distance);
   
