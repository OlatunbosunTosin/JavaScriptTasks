const prompt = require("prompt-sync")();

let name = prompt("Enter name: ")
let age = Number(prompt("Enter age: "))
let course = prompt("Enter course of study: ")

const student = {
    name,
    age,
    course

}
console.log(student)

