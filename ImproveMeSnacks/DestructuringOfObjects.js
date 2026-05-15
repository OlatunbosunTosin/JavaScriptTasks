function objectDestructuring(employee){

    let{name, salary} = employee;

    return {name, salary};

}

const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };
console.log(objectDestructuring(employee))
