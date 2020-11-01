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
        parseCount(a);
    } catch {
        return 'Невалидное значение';
    }
    return parseCount(a);
}

//Задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.P = this.a + this.b + this.c;
        this.triangleRuleCheck = console.log(this.triangleRule());
    }
    triangleRule() {
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    getPerimeter() {
        return this.P;
    }
    getArea() {
        let p = this.P / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        S = S.toFixed(3);
        return S;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        console.log('Ошибка! Треугольник не существует');
    }
    delete new Triangle().triangleRuleCheck;
    return new Triangle(a, b, c);
}