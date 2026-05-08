const prompt = require("prompt-sync")();
let num = Number(prompt("Enter an Integer: "));

if (num % 2 == 0){
    console.log("%d is divisible by %d", num, 2);
}
else
    console.log("%d is not divisible by %d", num, 2);

if (num % 3 == 0){
    console.log("%d is divisible by %d", num, 3);
}
else
    console.log("%d is not divisible by %d", num, 3);

if (num % 5 == 0){
    console.log("%d is divisible by %d", num, 5);
}
else
    console.log("%d is not divisible by %d", num, 5);

if (num % 7 == 0){
    console.log("%d is divisible by %d", num, 7);
}
else
    console.log("%d is not divisible by %d", num, 7);



