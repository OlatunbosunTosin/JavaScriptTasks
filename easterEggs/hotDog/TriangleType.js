const prompt = require("prompt-sync")();
let firstSide = Number(prompt("Enter first side: "));
let secondSide = Number(prompt("Enter second side: "));
let thirdSide = Number(prompt("Enter third side: "));

if (firstSide == secondSide && secondSide == thirdSide){
    console.log("It is an equilateral triangle.");
}
else if (firstSide == secondSide || secondSide == thirdSide || firstSide == thirdSide){
    console.log("It is an Isosceles triangle.");
}
else 
    console.log("It is a Scalene triangle.");

if (firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide){
    console.log("It is a valid triangle.");
}
else 
    console.log("It is not a valid triangle.");
        

