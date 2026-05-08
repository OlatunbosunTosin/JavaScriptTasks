const prompt = require("prompt-sync")();
let lengthOfSides = Number(prompt("Enter length of sides: "));

area = (Math.sqrt(3) / 4) * lengthOfSides * lengthOfSides;
console.log("Area of the Triangle = ", area);

