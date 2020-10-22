"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let credit = amount - contribution; 
    let months = date.getMonth() - new Date().getMonth() +(12 * (date.getFullYear() - new Date().getFullYear()));
    let P = (percent / 100) / 12;
    let payment= credit*(P+P/( Math.pow((1+P),months)-1));
    let totalAmount = contribution + (payment * months);
    if (isNaN(percent)){
      return `Параметр percent содержит неправильное значение ${percent}`;  
    }
    if (isNaN(contribution)){    
      return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if (isNaN(amount)){
      return `Параметр amount содержит неправильное значение ${amount}`;
     }
     totalAmount = totalAmount.toFixed(2);
     totalAmount = Number(totalAmount);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting = "Привет, мир! Меня зовут";
    greeting = (name === "null" || name === "undefined" || name === `""` || name == false) ? greeting + ' Аноним' : greeting + ` ${name}`;
    return greeting;
}