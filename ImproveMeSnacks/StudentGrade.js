const prompt = require("prompt-sync")();

let score = prompt("Enter score: ");

function getGrade(score){

    if (score >= 70)
        return "A";
        
    else if (score >= 60 && score <= 69)
        return "B";
        
    else if (score >= 50 && score <= 59)
        return "C";
        
    else if (score >= 40 && score <= 49)
        return "D";
        
    else if (score < 40)
        return "F";
    
}

console.log(getGrade(score));
