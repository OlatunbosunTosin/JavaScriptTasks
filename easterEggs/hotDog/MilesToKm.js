const prompt = require("prompt-sync")();
let miles = Number(prompt("Enter distance in miles: "));
let Kilometers = miles * 1.6;
console.log("%f miles = %f Kilometers", miles, Kilometers);

