
function getResult(a,b,c){
    "use strict";
    let discriminant = b^2 - 4*a*c;
    let x;
    let x3 = -b / (2*a); 
    let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    
    if (discriminant > 0){
        x = [x1,x2];
    }
    else if (discriminant = 0){
        x = [x3];
    }
    else {
        x = [];  
    } 
    return x;
}

function getAverageMark(marks){
    let = averageMark;
    
    if (marks.length > 5){
    marks = marks.slice(0,5);
    } 
    for (let i = 0; i < marks.length; i++){
    averageMark = averageMark + marks[i];
    }
    averageMark = averageMark / marks.length;
     if (marks.length === 0){
    averageMark = 0; 
    }
     return averageMark;
    }

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}