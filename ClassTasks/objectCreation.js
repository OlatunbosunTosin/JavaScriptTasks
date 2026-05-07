const prompt = require("prompt-sync")();


/*let ans = {};
ans.id = Number(prompt("Enter id: "))
ans.available = Boolean(prompt("isAvailable: "))
ans.count = Number(prompt("How many books: "))
ans.name = prompt("What is your name? ")
ans.author = prompt("Author name: ")

console.log(ans)*/


let id = Number(prompt("Enter id: "))
let isAvailable = prompt("isAvailable: ")
let count = Number(prompt("How many books: "))
let name = prompt("What is your name? ")
let author = prompt("Author name: ")

let ans = {

    id,
    isAvailable: isAvailable === "true",
    count,
    name,
    author

}
console.log(ans)
