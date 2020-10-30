class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }
    set getNewState(state) {
        if (state < 0) {
            this.state = 0;
        }
        else if (state > 100) {
            this.state = 100;
        }
    }
    get getNewState() {
        return this.state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
};
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {
};
class FantasticBook extends Book {
};
class DetectiveBook extends Book {
};

//Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let findBook = null;
        for (let key in this.books) {
            if (this.books[key][type] === value) {
                findBook = this.books[key].name;
            }
        }
        return findBook;
    }
    giveBookByName(bookName) {
        let giveBook = null;
        for (let key in this.books) {
            if (this.books[key][name] === bookName) {
                giveBook = this.books[key][name];
                this.books.splice(this.books[key], 1);
            }
        }
        return giveBook;
    }
}

//Задача 3
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

