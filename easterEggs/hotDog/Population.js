const prompt = require("prompt-sync")();
let years = Number(prompt("Enter number of years: "));
       
let currentPopulation = 312032486; 
let birthRate = (60 * 60 * 24 * 365) / 7;
let deathRate = (60 * 60 * 24 * 365) / 13;
let newImmigrant = (60 * 60 * 24 * 365) / 45;
let additionalPopulation = birthRate + newImmigrant - deathRate;
let newPopulationYear1 = currentPopulation + additionalPopulation;
let newPopulationYear2 = newPopulationYear1 + additionalPopulation;
let newPopulationYear3 = newPopulationYear2 + additionalPopulation;
let newPopulationYear4 = newPopulationYear3 + additionalPopulation;
let newPopulationYear5 = newPopulationYear4 + additionalPopulation;

console.log("The popultion for the next %d years are %d,%d,%d,%d,%d", years, newPopulationYear1, newPopulationYear2, newPopulationYear3, newPopulationYear4, newPopulationYear5);

