const prompt = require("prompt-sync")();

let month = prompt("Enter month: ");
let year = Number(prompt("Enter year: "));

switch(month.toLowerCase()){

    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("%s has 31 days", month);
        break;
        
    case "april":
    case "june":
    case "september":
        console.log("%s has 30 days", month);
        break;
        
    case "february":
        if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0){
            console.log("%s has 29 days", month);
        }
        else{
            console.log("%s has 28 days", month);
        }
        break;
        
    default:
        console.log("Invalid");  

}


