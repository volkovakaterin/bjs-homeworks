"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let credit = amount - contribution; 
    let months = date.getMonth() - new Date().getMonth() +(12 * (date.getFullYear() - new Date().getFullYear()));
    let P = (percent / 100) / 12;
    let payment= credit*(P+P/( Math.pow((1+P),months)-1));
    let totalAmount = contribution + (payment * months);
    function numericalConversion(value) {
      if (isNaN(value)){
        value = Number(value);
      }
    } 
    numericalConversion(percent);
    numericalConversion(contribution);
    numericalConversion(amount);
    if (isNaN(percent)){
      console.log(`Параметр percent содержит неправильное значение ${percent}`);  
    }
    if (isNaN(contribution)){    
      console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
    }
    if (isNaN(amount)){
      console.log(`Параметр amount содержит неправильное значение ${amount}`);
     }
     

     totalAmount = totalAmount.toFixed(2);
     totalAmount = Number(totalAmount);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting = `Привет, мир! Меня зовут ${name}`;
    if (name === "null" || name === "undefined" || name === `""` || name == false){
        greeting = "Привет, мир! Меня зовут Аноним";
    } 
    
    return greeting;
}