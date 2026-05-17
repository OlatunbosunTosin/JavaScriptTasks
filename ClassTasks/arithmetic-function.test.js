
const{add, subtract} = require('./arithmetic-function')
/*import {add,subtract} from './arithmetic-function.js'*/

test("test addition of two positive numbers", () => {
    
    let firstNumber = 82;
    let scondNumber = 18;
    
    expect(add(firstNumber, scondNumber)).toBe(100)

})


test("test that addition of a positive and a negative number works accurately", () => {
    
    let firstNumber = 100;
    let scondNumber = -82;
    
    expect(add(firstNumber, scondNumber)).toBe(18)

})


test("test that addition of two negative numbers give a negative number", () => {
    
    let firstNumber = -10;
    let scondNumber = -82;
    
    expect(add(firstNumber, scondNumber)).toBe(-92)

})


test("test that subtractions is working", () => {
    
    let firstNumber = 88;
    let scondNumber = 18;
    
    expect(subtract(firstNumber, scondNumber)).toBe(70)

})


test("test that two negative numbers sbtraction give accurate value is ", () => {
    
    let firstNumber = -80;
    let scondNumber = -20;
    
    expect(subtract(firstNumber, scondNumber)).toBe(-60)

})




