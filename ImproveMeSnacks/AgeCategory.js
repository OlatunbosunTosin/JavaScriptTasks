function ageCategory(age){

    if (age >= 0 && age <= 12)
        return "Child";
    else if (age >= 13 && age <= 17)
        return "Teenager";
    else if (age >= 18)
        return "Adult";
    else
        return "Invalid age";

}
console.log(ageCategory(-4))
