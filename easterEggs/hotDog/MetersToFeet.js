const prompt = require("prompt-sync")();
let length = Number(prompt("Enter length in neter: "));
let feet = length * 3.2786;
console.log("%f meters = %f feet", length, feet);

