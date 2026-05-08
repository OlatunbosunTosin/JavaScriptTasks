const prompt = require("prompt-sync")();

let integer = Number(prompt("Enter number in SquareMeter: "));
let ping = integer * 0.3025;
console.log(`${integer} SquareMeter = ${ping} ping`);

