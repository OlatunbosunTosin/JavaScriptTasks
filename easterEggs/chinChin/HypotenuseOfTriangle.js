const prompt = require("prompt-sync")();

let adjacent = Number(prompt("Enter length of adjacent: "));
let opposite = Number(prompt("Enter length of opposite: "));
        
let hypotenuseSquare = (adjacent * adjacent) + (opposite * opposite);
let hypotenuse = Math.sqrt(hypotenuseSquare);

console.log("Hypotenuse is", hypotenuse);

