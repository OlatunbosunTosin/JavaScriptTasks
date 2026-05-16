const prompt = require("prompt-sync")();

let firstEdge = Number(prompt("Enter first edge: "));
let secondEdge = Number(prompt("Enter second edge: "));
        
let perimeter = 2 * (firstEdge + secondEdge);

if (firstEdge != secondEdge){
    console.log(`Perimeter = ${perimeter}`);
}
else {
    console.log("Input is invalid");
}


