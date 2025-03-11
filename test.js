const myLibrary = [];

function Book(title,author, pages,readStatus, id) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.readStatus = readStatus;
    this.id = id;
}

function addBookToLibrary(title, author, pages, readStatus) {
    // take params, create a book then store it in the array
    const id = crypto.randomUUID();
    const book = new Book(title,author, pages, readStatus, id);
    myLibrary.push(book);
}



let book1 = new Book("book1", "author1", 6, 1);
let book2 = new Book("book2", "author2", 42, 0);
let book3 = new Book("book3", "author3", 100, 1);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

const listElement = document.getElementById("library");

myLibrary.forEach(item => {
    const listItem = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdReadStatus = document.createElement("td");


    tdTitle.textContent = item.title;
    tdAuthor.textContent = item.author;
    tdPages.textContent = item.pages;
    tdReadStatus.textContent = item.readStatus;

    listItem.appendChild(tdTitle);
    listItem.appendChild(tdAuthor);
    listItem.appendChild(tdPages);
    listItem.appendChild(tdReadStatus);

    listElement.appendChild(listItem);
})