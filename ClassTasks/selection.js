const prompt = require("prompt-sync")();

let age = prompt("What is your age? ")
    console.log(age)

if(!age){
    console.log("login")
}
else{
    console.log("Invalid input")
}
