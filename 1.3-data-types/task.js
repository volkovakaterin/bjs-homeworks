"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let credit = amount - contribution; 
    let months = date.getMonth() - new Date().getMonth() +(12 * (date.getFullYear() - new Date().getFullYear()));
    let P = (percent / 100) / 12;
    let payment= credit*(P+P/( Math.pow((1+P),months)-1));
    let totalAmount = contribution + (payment * months);
    totalAmount = totalAmount.toFixed(2);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if (name === null || name === undefined || name === ""){
        greeting = "Привет, мир! Меня зовут Аноним"
    } 
    else {
        greeting = `Привет, мир! Меня зовут ${name}`
    }
    return greeting;
}