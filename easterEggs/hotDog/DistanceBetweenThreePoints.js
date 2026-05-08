const prompt = require("prompt-sync")();
let x1 = Number(prompt("Enter x1: "));
let x2 = Number(prompt("Enter x2: "));
let x3 = Number(prompt("Enter x3: "));
let y1 = Number(prompt("Enter x4: "));
let y2 = Number(prompt("Enter x5: "));
let y3 = Number(prompt("Enter x6: "));

    
let side1 = Math.sqrt(((x3-x2) * (x3-x2)) + ((y3-y2) * (y3-y2)));
let side2 = Math.sqrt(((x3-x1) * (x3-x1)) + ((y3-y1) * (y3-y1)));
let side3 = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
let s = (side1 + side2 + side3) / 2;

area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log("Area of the triangle = %f" , area);
   
