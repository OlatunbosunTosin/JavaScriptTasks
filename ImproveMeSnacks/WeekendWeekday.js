const prompt = require("prompt-sync")();

let day = prompt("Enter day: ");

switch(day.toLowerCase()){

    case "monday":
    case "tuesday": 
    case "wednesday": 
    case "thursday":
    case "friday":
        console.log("Weekday");
        break;
        
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
        
    default:
        console.log("Invalid day");        
}
