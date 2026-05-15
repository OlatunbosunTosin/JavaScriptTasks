function usernameDeletion(user){

    delete user.username;
    return user;

}

const user = {username: "admin",password: "12345"}; 
console.log(usernameDeletion(user));


