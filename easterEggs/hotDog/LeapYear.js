const prompt = require("prompt-sync")();
year = Number(prompt("Enter a year: "));

if (year % 4 == 0){
    console.log("%d is a leap year", year);
}
else
    console.log("%d is a not a leap year", year);


