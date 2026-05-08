const prompt = require("prompt-sync")();
let minutes = Number(prompt("Enter number of minutes: "));
        
let years = ((minutes / 60) / 24) / 365;
let days = ((minutes / 60) / 24) % 365;
console.log("%d minutes is %d years and %d days", minutes, years,days);

