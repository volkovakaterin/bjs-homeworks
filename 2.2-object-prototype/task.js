 
String.prototype.isPalindrome = function () {
    let  lowerCase = this.toLowerCase().replace(/\s/g,'');
    return lowerCase === lowerCase.split('').reverse().join('');
  }
    
function getAverageMark(marks){
   let averageMark = 0;
   if (marks.length === 0){
      return averageMark
   }
   else { 
      for (let i = 0; i < marks.length; i++){
      averageMark = averageMark + marks[i];
      }
      averageMark = averageMark / marks.length;
   }
   let roundedAverage = Math.round(averageMark);

    return roundedAverage;
}


function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}