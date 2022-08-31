const myBooks = [];

function Book(author, name, pages, read){
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(book){
    myBooks.push(book);
}