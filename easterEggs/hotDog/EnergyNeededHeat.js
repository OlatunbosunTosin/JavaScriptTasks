const prompt = require("prompt-sync")();
let quantity = Number(prompt("Enter amount of water: "));
let initialTemperature = Number(prompt("Enter Initial temperature: "));
let finalTemperature = Number(prompt("Enter final temperature: "));

energyNeeded = quantity * (finalTemperature - initialTemperature) * 4184;
console.log("Energy needed to heat " + quantity+ "kg of water is",  energyNeeded);
    
