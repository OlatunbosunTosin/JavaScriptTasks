const prompt = require("prompt-sync")();
let weight = Number(prompt("Enter your weight in pounds: "));
let height = Number(prompt("Enter your height in pounds: "));

let newWeight = weight * 0.45359237;
let newHeight = height * 0.0254;
let BodyMassIndex =  newWeight/ (newHeight * newHeight);
console.log("Your BMI = %f" , BodyMassIndex);

