function Destructuring(user){

    let{name, age} = user;

    return {name, age};

}

const user = {name: "Amaka",age: 25,country: "Nigeria"}; 
console.log(Destructuring(user));
