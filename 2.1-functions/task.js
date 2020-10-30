//Задание 1
function getSolutions(a, b, c) {
   let D = Math.pow(b, 2) - 4 * a * c;
   if (D < 0) {
      return { D, roots: [] };
   }
   else if (D === 0) {
      let x1 = -b / 2 * a;
      return { D, roots: [x1] };
   }
   else {
      let x1 = (-b + Math.sqrt(D)) / (2 * a);
      let x2 = (-b - Math.sqrt(D)) / (2 * a);
      return { D, roots: [x1, x2] }
   }
}

function showSolutionsMessage(a, b, c) {
   let result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
   console.log(`Значение дискриминанта: ${result.D}`);
   if (result.D < 0) {
      console.log(`Уравнение не имеет вещественных корней`);
   }
   else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
   }
   else {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]} , X₂ = ${result.roots[1]}`)
   }
}

//Задание 2
let diary = {};
class StudentLog {
   constructor(name) {
      this.name = name;
   }
   getName() {
      return this.name;
   }
   addGrade(grade, subject) {
      if (diary[subject] === undefined) {
         diary[subject] = [];
      }
      if (grade >= 1 && grade <= 5) {
         diary[subject].push(grade);
      }
      else {
         console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
      }
      return diary[subject].length;
   }
   getAverageBySubject(subject) {
      let averageGrade = 0;
      if (diary[subject].length === 0) {
         return averageGrade;
      }
      else {
         for (let i = 0; i < diary[subject].length; i++) {
            averageGrade = averageGrade + diary[subject][i];
         }
         averageGrade = averageGrade / diary[subject].length;
         return averageGrade;
      }
   }
}

