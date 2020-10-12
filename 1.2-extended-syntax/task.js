"use strict";
function getResult(a,b,c){
    let discriminant = Math.pow(b, 2) - 4*a*c;
    let x = []; 
    
    if (discriminant > 0){
        x[0] = (-b + Math.sqrt(discriminant)) / (2*a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2*a);
    }
    else if (discriminant === 0){
        x[0] = -b / (2*a);
    }
    return x;
}

function getAverageMark(marks){
    let averageMark = 0;
    
    if (marks.length === 0){
    return averageMark
    }
    else if (marks.length > 5){
    marks = marks.slice(0,5);
    } 
    for (let i = 0; i < marks.length; i++){
    averageMark = averageMark + marks[i];
    }
    averageMark = averageMark / marks.length;
     return averageMark;
    }

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age >= 18){
    result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else 
    {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    
    return result;
}