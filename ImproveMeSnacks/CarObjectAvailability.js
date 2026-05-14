function CarObjectAvailability(){

    const car = {brand: "Toyota",model: "Camry",available: true};
    
    if (car.available === true)
        return "This car is available";
    return "This car is not available";
}
console.log(CarObjectAvailability());
