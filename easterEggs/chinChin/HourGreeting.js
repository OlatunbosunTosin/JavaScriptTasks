const prompt = require("prompt-sync")();

let CurrentHour = Number(prompt("Enter between 0 - 23: "));
    
if (CurrentHour >= 5 && CurrentHour <= 11){
    console.log("Good Morning");
} 
else if (CurrentHour >= 12 && CurrentHour <= 17){
    console.log("Good Afternoon");
} 
else if (CurrentHour >= 18 && CurrentHour <= 21){
    console.log("Good Evening");
} 
else if (CurrentHour >= 22 && CurrentHour <= 23){
    console.log("Good Night");
} 
else if (CurrentHour >= 0 && CurrentHour <= 4){
    console.log("Good Night");
} 
else{
    console.log("0nly numbers between 0 - 23");
} 

