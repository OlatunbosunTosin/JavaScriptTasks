function mergeObjects(personal, professional){

    return  {...personal, ...professional};

}

const personal = { name: 'Kemi', age: 27};          
                                                      
const professional = {role: 'Designer', company: 'TechCorp' };

console.log(mergeObjects(personal, professional));
