const prompt = require("prompt-sync")();
let firstNum = Number(prompt("Enter firstNum: "));
let secondNum = Number(prompt("Enter secondNum: "));
let thirdNum = Number(prompt("Enter thirdNum: "));
       
let smallest = Math.min(firstNum, Math.min(secondNum, thirdNum));
let largest = Math.max(firstNum, Math.max(secondNum, thirdNum));
let middle = 0;
if (smallest == firstNum && largest == secondNum){
    middle = thirdNum;
}
else if (smallest == secondNum && largest == thirdNum){
    middle = firstNum;
}
else if (smallest == thirdNum && largest == firstNum){
    middle = secondNum;
}
else if (smallest == firstNum && largest == thirdNum){
    middle = secondNum;
}
else if (smallest == secondNum && largest == firstNum){
    middle = thirdNum;
}
else if (smallest == thirdNum && largest == secondNum){
    middle = firstNum;
} 
console.log("%d,%d,%d", smallest, middle, largest);


