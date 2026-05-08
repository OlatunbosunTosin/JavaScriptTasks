const prompt = require("prompt-sync")();
let firstWeight = Number(prompt("Enter weight of first rice: "));
let firstPrice = Number(prompt("Enter price of first rice: "));
let secondWeight = Number(prompt("Enter weight of second rice: "));
let secondPrice = Number(prompt("Enter price of second rice: "));
    
let firstPricePerUnitWeight = firstPrice / firstWeight;
let secondPricePerUnitWeight = secondPrice / secondWeight;

if (firstPricePerUnitWeight < secondPricePerUnitWeight){
    console.log("The first rice package has the better price per unit weight which is %f", firstPricePerUnitWeight);
}
else{
    console.log("The second rice package has the better price per unit weight which is %f", secondPricePerUnitWeight);
}

