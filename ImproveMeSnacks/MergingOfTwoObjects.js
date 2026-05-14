function mergeObjects(){

const personal = { name: 'Kemi', age: 27};          
                                                      
const professional = {... personal, role: 'Designer', company: 'TechCorp' };

return professional;

}
console.log(mergeObjects());
