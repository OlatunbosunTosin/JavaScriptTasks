const prompt = require("prompt-sync")();
let subTotal = Number(prompt("What is the Subtotal? "));
let gratuityRate = Number(prompt("What is the Gratuity rate?: "));
        
let gratuity = (gratuityRate / 100) *  subTotal;
let  total = subTotal + gratuity;
 console.log("Gratuity = $ %f and total = $ %f", gratuity, total);

