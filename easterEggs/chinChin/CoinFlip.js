const prompt = require("prompt-sync")();

let headTail = Math.floor(Math.random() * 2);
let guess = Number(prompt("What is your guess: head(0) or tail(1)? "));

console.log("%d", headTail);

if (headTail == guess){
    console.log("Your guess is correct");
}
else{
    console.log("Your guess is wrong!!! Try again");
}

