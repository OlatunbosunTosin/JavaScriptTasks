const prompt = require("prompt-sync")();

let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

function login(username, password){

    if (username.toLowerCase() == "thegreatman" && password == "123456")
        return "login valid";
    else 
        return "login invalid";

}
console.log(login(username, password));
