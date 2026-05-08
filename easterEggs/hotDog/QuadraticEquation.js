const prompt = require("prompt-sync")();
let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));
       
console.log("Quadratic equation is %dx2 + %dx + %d = 0" , a, b, c);
let discriminant = (b * b) - (4 * a * c);
let root1 =  (-b + (Math.sqrt(discriminant))) / (2 * a);
let root2 =  (-b - (Math.sqrt(discriminant))) / (2 * a);
if (discriminant > 0.0){
    console.log("Root = %f and %f", root1, root2);
}
else if (discriminant == 0.0){
    console.log("Root = %f", root1);
}
else
    console.log("The equation has no real roots");



