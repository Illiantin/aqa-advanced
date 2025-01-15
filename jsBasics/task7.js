import { Book } from './Book.js'
import { EBook } from './EBook.js'

const book1 = new Book ('McDonaldʼs: Behind The Arches', 'John F. Love', 1995)
const book2 = new Book ('The Wolf of Wall Street', 'Jordan Belfort', 2007)
const ebook1 = new EBook ('Sapiens', 'Yuval Noah Harari', 2011, 'PDF')

book1.printInfo()
book2.printInfo()
ebook1.printInfo()


const books = [book1, book2, ebook1]
const oldestBook = Book.oldestBook(books)

console.log('The oldest book is:')
oldestBook.printInfo()


const newEBook = EBook.createFromBook(book1, 'PDF')
newEBook.printInfo()