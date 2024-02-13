const myLibrary = [];
const addButton = document.querySelector(".button-add");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".button-close");
const container = document.querySelector(".book-container");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    let div = document.createElement("div");
    div.className = "book";

    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = "Author: " + book.author;
    div.appendChild(bookAuthor);

    let bookTitle = document.createElement("p");
    bookTitle.innerText = "Title: " + book.title;
    div.appendChild(bookTitle);

    let bookPages = document.createElement("p");
    bookPages.innerText = "Pages: " + book.pages;
    div.appendChild(bookPages);

    let bookRead = document.createElement("button");
    bookRead.type = "button";

    if (book.read) {
        bookRead.className = "read-book";
        bookRead.innerText = "Read";
    }
    else {
        bookRead.className = "not-read-book";
        bookRead.innerText = "Not read";
    }
    bookRead.addEventListener("click", (event) => {
        changeRead(event);
    })
    div.appendChild(bookRead);

    container.appendChild(div);

}

const changeRead = function changeReadType(button) {
    if (button.srcElement.innerText === "Read") {
        button.srcElement.innerText = "Not read"
        button.srcElement.className = "not-read-book"
    } else {
        button.srcElement.innerText = "Read"
        button.srcElement.className = "read-book"
    }
}
let book1 = new Book("test", "title", 22, false);
addBookToLibrary(book1);
let book2 = new Book("test222", "22title", 44, true);
addBookToLibrary(book2);

addButton.addEventListener("click", (event) => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    dialog.close();
    console.log(read.checked);
    let book = new Book(author.value, title.value, pages.value, read.checked);

    addBookToLibrary(book);
    author.value = "";
    title.value = "";
    pages.value = "";
    read.checked = false;
})

