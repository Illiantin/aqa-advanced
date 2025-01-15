import {Book} from './Book.js'

export class EBook extends Book{
    constructor(title, author, year, format) {
        super(title, author, year)
        this.format = format
    }

    get format () {
        return this._format
    }

    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error ('Format must be a non-empty string')
        }
        this._format = value
    }

    printInfo () {
        console.log(`${this.title} by ${this.author}, published in ${this.year}, available in ${this.format} format.`)
    }

    static createFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format)
    }
}