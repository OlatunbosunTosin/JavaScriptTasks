const prompt = require("prompt-sync")();
let lengthOfSides = Number(prompt("Enter length of sides: "));
let height = Number(prompt("Enter height of Prism: "));

let area = (Math.sqrt(3) / 4) * lengthOfSides * lengthOfSides ;
let volume = area * height;
console.log("volume of the Triangle = %f cm", volume);

