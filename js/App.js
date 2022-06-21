import { Category } from "./enums";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import refBook from "./encyclopedia";
import Shelf from "./shelf";
let reference = new refBook("Fact Book", 2022, 1);
function GetAllBooks() {
    let books = [
        {
            id: 1,
            title: "Ulysses",
            author: "James Joyce",
            available: true,
            category: Category.Fiction,
        },
        {
            id: 2,
            title: "A Farewell To Arms",
            author: "Ernest Hemingway",
            available: false,
            category: Category.Fiction,
        },
        {
            id: 3,
            title: "I know Why The Caged Bird Sings",
            author: "Maya Angelou",
            available: true,
            category: Category.Poetry,
        },
        {
            id: 4,
            title: "Moby Dick",
            author: "Herman Melville",
            available: true,
            category: Category.Fiction,
        },
    ];
    return books;
}
function LogFirstAvailable(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = "";
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total number of books ${numberOfBooks}`);
    console.log(`Title of first available book ${firstAvailable}`);
}
function GetBookNamesByCategory(categoryFilter = Category.Fiction) {
    console.log(`Getting books in category: ${Category[categoryFilter]}`); //Returns the string value representation from the Enum.
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookById(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter((book) => book.id === id)[0]; //Returning just the first element of the array
}
function CreateCustomerId(name, id) {
    return name + id;
}
let x;
let idGenerator;
idGenerator = (name, id) => {
    return name + id;
};
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age " + age);
    }
    if (city) {
        console.log("City " + city);
    }
}
// CreateCustomer("Stoyan");
// CreateCustomer("Stoyan", 25);
// CreateCustomer("Stoyan", 25, "Burgas");
// *********************************
function CheckOutBooks(customer, ...bookIDs) {
    console.log(`Checking out books for ${customer}`);
    let booksCheckedOut = [];
    for (let id of bookIDs) {
        let book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
/* Overloading functions */
// function GetTitles(author: string): string[] {}
// function GetTitles(author: string, available: boolean): string[] {}
function GetTitles(author, available) {
    /* Implementation overload */
    const allBooks = GetAllBooks();
    const searchResults = [];
    if (available !== undefined) {
        for (let book of allBooks) {
            if (book.author === author && book.available === available) {
                searchResults.push(book.title);
            }
        }
    }
    else {
        for (let book of allBooks) {
            if (book.author === author) {
                searchResults.push(book.title);
            }
        }
    }
    return searchResults;
}
let myBooks = GetTitles("James Joyce");
myBooks.forEach((title) => console.log(title));
function PrintBook(currentBook) {
    console.log(`${currentBook.title} by ${currentBook.author}`);
}
let myBook = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: Category.Fiction,
    pages: 25,
    markDamaged: (reason) => console.log(`Damaged ${reason}`),
};
let logDamage;
logDamage = (damage) => console.log(`Damage reported ${damage}`);
logDamage("coffee stains");
let favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Stoyan";
favoriteLibrarian.assistCustomer("Elaine");
let Newspaper = class extends ReferenceItem {
    printCitation() {
        console.log(`Newspaper: ${this.title}`);
    }
};
let myPaper = new Newspaper("NewsPappy", 2017);
myPaper.printCitation();
let inventory = [
    {
        id: 10,
        title: "The C Programming language",
        author: "K & R",
        available: true,
        category: Category.Fiction,
    },
    {
        id: 11,
        title: "Code Complete",
        author: "Steve McConnell",
        available: true,
        category: Category.Fiction,
    },
    {
        id: 12,
        title: "8-bit Graphics with Cobol",
        author: "A.B.",
        available: true,
        category: Category.Fiction,
    },
    {
        id: 13,
        title: "Cool autoexec.bat Scripts!",
        author: "C.D.",
        available: true,
        category: Category.Fiction,
    },
];
let bookShelf = new Shelf();
inventory.forEach((book) => bookShelf.add(book));
let firstBook = bookShelf.getFirst();
let magazines = [
    {
        title: "Progamming Language Monhly",
        publisher: "Code Mags",
    },
    {
        title: "Literary Fiction Quarterly",
        publisher: "College Press",
    },
    {
        title: "Five Points",
        publisher: "GSU",
    },
];
let magazineShelf = new Shelf();
magazines.forEach((mag) => magazineShelf.add(mag));
let firstMagazine = magazineShelf.getFirst();
magazineShelf.printTitle();
let softwareBook = bookShelf.find("Code Complete");
console.log(`${softwareBook.title}  (${softwareBook.author})`);
/* let purgedBooks: Array<Book> = Purge(inventory);
purgedBooks.forEach((book) => console.log(book.title));
 */
/* let purgedNumber: Array<number> = Purge<number>([1, 2, 3, 4]);
console.log(purgedNumber); */
/* let refBook: ReferenceItem = new Encyclopedia("WorldPedia", 202, 10);
refBook.printCitation(); */
// let ref: ReferenceItem = new ReferenceItem("New title", 2021);
// ref.printItem();
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);
// PrintBook(myBook);
// myBook.markDamaged("torn pages");
/* let fictionBooks = GetBookNamesByCategory();
fictionBooks.forEach((title) => console.log(title)); */
// LogFirstAvailable();
/* let customerId: string = idGenerator("Stoyan", 22);
console.log(customerId); */
/* const fictionBooks = GetBookNamesByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + " - " + val)); */
