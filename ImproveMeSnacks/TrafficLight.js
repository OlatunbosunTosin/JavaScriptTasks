const prompt = require("prompt-sync")();

let colour = prompt("Enter colour: ");

switch(colour.toLowerCase()){

    case "red":
        console.log("Stop");
        break;
        
    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;
        
    default:
        console.log("Invalid");        
}
