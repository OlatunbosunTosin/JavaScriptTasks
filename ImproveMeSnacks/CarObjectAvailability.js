function CarObjectAvailability(car){
    
    if (car.available === true)
        return "This car is available";
    return "This car is not available";
}

const car = {brand: "Toyota",model: "Camry",available: true};
console.log(CarObjectAvailability(car));
