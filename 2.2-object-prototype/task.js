 
String.prototype.isPalindrome = function () {
    let  lowerCase = this.toLowerCase().replace(/\s/g,'');
    return lowerCase === lowerCase.split('').reverse().join('');
  }

function getAverageMark(marks) {
    for (var prop in marks){
       let averageMark = 0;
       if (marks.prop.length === 0){
       return averageMark
       }
       else { 
       for (let i = 0; i < marks.prop.length; i++){
       averageMark = averageMark + marks.prop[i];
       }
       averageMark = averageMark / marks.prop.length;
        return averageMark;
       }
   }
   for (var prop in marks){
       let average = 0;
       if (marks.length === 0){
        return average
        }
        else { 
        for (let i = 0; i < marks.length; i++){
        average = average + marks[i];
        }
        average = average / marks.length;
         return average;
        }
   } 
   let roundedAverage = Math.round(average);
}
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}