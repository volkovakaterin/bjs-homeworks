//Задание 1
function getSolutions( a, b, c ){
   let D = Math.pow(b, 2) - 4*a*c;
   if (D < 0){
    return { D, roots: [] };
   }
   else if (D === 0){
      let x1 = -b / 2*a;
      return { D, roots: [x1] };
   }
   else {
     let x1 = (-b + Math.sqrt(D)) / (2*a);
       let x2 = (-b - Math.sqrt(D)) / (2*a);
       return { D, roots: [x1,x2] }
   }
}

function showSolutionsMessage( a, b, c ){
   let result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
   console.log(`Значение дискриминанта: ${result.D}`);
   if (result.D < 0){
      console.log(`Уравнение не имеет вещественных корней`);
   }
   else if (result.D === 0){
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
   }
   else {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]} , X₂ = ${result.roots[1]}`)
   }
}

//Задание 2
function getAverageScore(data){
   let average = 0;
   let averageMarks;
   //if (data.length < 10){
   for(let prop in data){
      averageMarks = {prop : getAverageMark(data[prop])}     
       }
         console.log(averageMarks);
      }
   /*for(let prop in averageMarks){
      for (let i = 0; i < averageMarks.length; i++){   
      average = average + averageMarks[prop][i];
      console.log(averageMarks[prop][i]);
      }
      average = average / averageMarks.length; 
      } */        
   
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
        return averageMark;
       }
   }


