class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }
    fix() {
        this._state *= 1.5;
        return this._state;
    }
    get state() {
        return this._state;
    }
    set state(st) {
        if (st < 0) {
            this._state = 0;
        }
        else if (st > 100) {
            this._state = 100;
        }
    }
};
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
};
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state,);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
};
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    }
};
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
};

//Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let findBook = null;
        for (let key in this.books) {
            if (this.books[key][type] === value) {
                findBook = this.books[key];
                return findBook;
            }
        }
        return findBook;
    }
    giveBookByName(bookName) {
        let giveBook = null;
        for (let key in this.books) {
            if (this.books[key]['name'] === bookName) {
                giveBook = this.books[key];
                this.books.splice(this.books[key], 1);
                return giveBook;
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

