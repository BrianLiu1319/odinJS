let myLibrary = [];

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
    let book = new Book(title,author, pages, readStatus, id);
    
    myLibrary.push(book);


    const listElement = document.getElementById("library");

    const listItem = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdReadStatus = document.createElement("td");

    tdTitle.textContent = myLibrary[myLibrary.length - 1].title;
    tdAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    tdPages.textContent = myLibrary[myLibrary.length - 1].pages;
    tdReadStatus.textContent = myLibrary[myLibrary.length - 1].readStatus;

    listItem.appendChild(tdTitle);
    listItem.appendChild(tdAuthor);
    listItem.appendChild(tdPages);
    listItem.appendChild(tdReadStatus);
    
    listElement.appendChild(listItem);

    console.log(listElement);
}



let book1 = new Book("book1", "author1", 6, 1);
let book2 = new Book("book2", "author2", 42, 0);
let book3 = new Book("book3", "author3", 100, 1);
let book4 = new Book("book3", "author3", 100, 1);


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);


const listElement = document.getElementById("library");

myLibrary.forEach(item => {
    addBookToLibrary(item.title, item.author, item.pages, item.readStatus)
    // const listItem = document.createElement("tr");
    // const tdTitle = document.createElement("td");
    // const tdAuthor = document.createElement("td");
    // const tdPages = document.createElement("td");
    // const tdReadStatus = document.createElement("td");


    // tdTitle.textContent = item.title;
    // tdAuthor.textContent = item.author;
    // tdPages.textContent = item.pages;
    // tdReadStatus.textContent = item.readStatus;

    // listItem.appendChild(tdTitle);
    // listItem.appendChild(tdAuthor);
    // listItem.appendChild(tdPages);
    // listItem.appendChild(tdReadStatus);

    // listElement.appendChild(listItem);
})