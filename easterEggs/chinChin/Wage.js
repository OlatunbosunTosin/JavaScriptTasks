const prompt = require("prompt-sync")();

let hourlyWage = Number(prompt("Enter hourly wage: "));
let hoursWorked = Number(prompt("Enter hours worked: "));
      
let totalEarnings; 

if(hoursWorked <= 40){
    totalEarnings = hourlyWage * hoursWorked;
    console.log(`Your total earning is ${totalEarnings}`);
}
else if(hoursWorked > 40){
    totalEarnings = (40 * hourlyWage) + ((hoursWorked - 40) * hourlyWage * 1.5);
    console.log(`Your total earning is ${totalEarnings}`);
}       
  
