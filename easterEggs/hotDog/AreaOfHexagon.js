const prompt = require("prompt-sync")();
let side = Number(prompt("Enter side of hexagon: "));
let area = ((3 * Math.sqrt(3)) / 2) * (side * side);
console.log("Area of the Hexagon = ", area);
    
