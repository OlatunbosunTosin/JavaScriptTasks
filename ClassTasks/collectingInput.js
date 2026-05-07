const prompt = require("prompt-sync")();

//et input = Number(prompt("What is your age? ")) casting to number
let age = prompt("What is your age? ")

//let sum = age + 5
//console.log(sum)

if(age > 0 && age <= 12){
    console.log("I am a child")
}

else if(age > 12 && age <= 17){
    console.log("I am a teenager")
}

else if(age >= 18){
    console.log("I am an adult")
}

else {
    console.log("Invalid")
}


