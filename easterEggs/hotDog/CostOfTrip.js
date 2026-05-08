const prompt = require("prompt-sync")();
let distanceToTravel = Number(prompt("Enter distance: "));
let fuelEfficiency = Number(prompt("Enter fuel efficiency: "));
let pricePerGallon = Number(prompt("Enter price per gallon: "));

let tripCost = (distanceToTravel / fuelEfficiency) * pricePerGallon;
console.log("tripCost is %f" , tripCost);
 
