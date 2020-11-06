//Задача 1
function parseCount(a) {
    let result = Number.parseInt(a, 10);
    if (Number.isNaN(result)) {
        throw new Error('Невалидное значение')
    }
    return result;
}
function validateCount(a) {
    try {
        return parseCount(a);
    } catch(e) {
        return 'Невалидное значение';
    }
}

//Задача 2
function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.P = a + b + c;
            if (a + b < c || a + c < b || b + c < a) {
                throw new Error('Треугольник с такими сторонами не существует');  
        }
    
    this.getPerimeter = function() {
        return this.P;
    }
    this.getArea = function() {
        let p = this.P / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        S = S.toFixed(3);
        return S;
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return TriangleFake = {
            getPerimeter: function() {
                 return 'Ошибка! Треугольник не существует';
            },
            getArea: function() {
                 return 'Ошибка! Треугольник не существует';
            }
        }
    }
}