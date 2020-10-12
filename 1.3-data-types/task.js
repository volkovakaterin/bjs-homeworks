function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let credit = amount - contribution;
    let endOfCredit = new Date(date); 
    let months = endOfCredit.getMonth() - new.Date().getMonth() +(12 * (endOfCredit.getFullYear() - new.Date().getFullYear()));
    console.log(months);
    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}