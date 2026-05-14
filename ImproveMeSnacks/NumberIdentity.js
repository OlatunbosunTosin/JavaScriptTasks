function numberIdentity(number){

    if (number > 0)
        return "number is positive";
    else if (number < 0)
        return "number is negative";
    else if (number == 0)
        return "number is zero";

}
console.log(numberIdentity(5));
