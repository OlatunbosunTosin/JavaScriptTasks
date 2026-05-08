const prompt = require("prompt-sync")();

let seconds = Number(prompt("Enter number of seconds: "));
let hours = (seconds / 60) / 60;
let minutes = ((seconds / 60) % 60) % 60;
let remainingSeconds = seconds % 60;

console.log("%d seconds = %d hour, %d minutes, %d seconds", seconds, hours, minutes, remainingSeconds);


