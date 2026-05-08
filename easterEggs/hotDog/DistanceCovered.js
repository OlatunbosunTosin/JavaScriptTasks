const prompt = require("prompt-sync")();
let velocity = Number(prompt("Enter Initial velocity: "));
let time = Number(prompt("Enter time: "));
let acceleration = Number(prompt("Enter acceleration: "));

let distanceCovered = (velocity * time) + (0.5 * acceleration * time * time);
console.log("Distance covered = %fm", distanceCovered);
    
