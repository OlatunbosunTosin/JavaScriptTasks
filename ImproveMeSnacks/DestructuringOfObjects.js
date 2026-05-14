function objectDestructuring(){

const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };

let{name, salary} = employee;

return {name, salary};

}
console.log(objectDestructuring())
