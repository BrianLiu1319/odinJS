

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

    addToHTML(id);
}


function addToHTML (id){
    const listElement = document.getElementById("library");
    const listItem = document.createElement("tr");
    listItem.setAttribute('id', id);
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdReadStatus = document.createElement("td");
    const tdEdit = document.createElement("td");
    const tdDelete = document.createElement("td");

    tdTitle.setAttribute('class', 'title');
    tdAuthor.setAttribute('class', 'author');
    tdPages.setAttribute('class', 'pages');
    tdReadStatus.setAttribute('class', 'readStatus');

    tdEditButton = document.createElement("img");
    tdEditButton.setAttribute ("src", "./imgs/edit.svg");
    tdEditButton.setAttribute('id', 'edit');
    tdDeleteButton = document.createElement("img");
    tdDeleteButton.setAttribute ("src", "./imgs/trash.svg");
    tdDeleteButton.setAttribute('id', 'delete');

    addDeleteEvent(tdDeleteButton);
    addEditEvent(tdEditButton);

    tdEdit.appendChild(tdEditButton)
    tdDelete.appendChild(tdDeleteButton)

    tdTitle.textContent = myLibrary[myLibrary.length - 1].title;
    tdAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    tdPages.textContent = myLibrary[myLibrary.length - 1].pages;
    tdReadStatus.textContent = myLibrary[myLibrary.length - 1].readStatus;

    listItem.appendChild(tdTitle);
    listItem.appendChild(tdAuthor);
    listItem.appendChild(tdPages);
    listItem.appendChild(tdReadStatus);
    listItem.appendChild(tdEdit);
    listItem.appendChild(tdDelete);
    listElement.appendChild(listItem);
}


const myLibraryTemp = [];
let book1 = new Book("book1", "author1", 6, true);
let book2 = new Book("book2", "author2", 42, false);
let book3 = new Book("book3", "author3", 100, true);
let book4 = new Book("book3", "author3", 100, true);


myLibraryTemp.push(book1);
myLibraryTemp.push(book2);
myLibraryTemp.push(book3);
myLibraryTemp.push(book4);


const listElement = document.getElementById("library");

myLibraryTemp.forEach(item => {
    addBookToLibrary(item.title, item.author, item.pages, item.readStatus);
})


function addDeleteEvent(i){
    i.addEventListener('click', (e) => { 
        // delete from HTML
        const deleteId = e.target.parentNode.parentNode.id;
        const deleteNode = document.getElementById(deleteId);
        deleteNode.remove();
        
        // delete from array
        const index = myLibrary.findIndex(element => element.id === deleteId);
        myLibrary.splice(index,1);
    });
}

function addEditEvent(i){
    i.addEventListener('click', (e) => {
        const infoNode = i.parentNode.parentNode;
        const titlePlaceholder = document.getElementById("editTitle");
        const authorPlaceholder = document.getElementById("editAuthor");
        const pagesPlaceholder = document.getElementById("editPages");
        const readStatusPlaceholder = document.getElementById("editReadStatus");
    
        const currTitle = infoNode.querySelector('.title').textContent;
        const currAuthor = infoNode.querySelector('.author').textContent;
        const currPages = infoNode.querySelector('.pages').textContent;
        const currReadStatus = infoNode.querySelector('.readStatus').textContent;
    
        titlePlaceholder.setAttribute("value", currTitle);
        titlePlaceholder.setAttribute("onfocus", "this.selectionStart = this.selectionEnd = this.value.length;");
    
        
        authorPlaceholder.setAttribute("value", currAuthor);
        authorPlaceholder.setAttribute("onfocus", "this.selectionStart = this.selectionEnd = this.value.length;");
    
        
        pagesPlaceholder.setAttribute("value", currPages);
        pagesPlaceholder.setAttribute("onfocus", "this.selectionStart = this.selectionEnd = this.value.length;");
        
        if (currReadStatus == "true"){
            readStatusPlaceholder.setAttribute("checked", currReadStatus);
        }
        else {
            readStatusPlaceholder.removeAttribute("checked");
        }
        
        editHTML(infoNode)
    
    })


}

function editHTML(infoNode) {

    const dialogueButton = document.getElementById("editDialogue");
    dialogueButton.showModal();
    const editForm = document.getElementById("editFormDialog");

    editForm.addEventListener('submit', (e) => {
        const titleInput = document.getElementById('editTitle');
        const authorInput = document.getElementById('editAuthor');
        const pagesInput = document.getElementById('editPages');
        const readStatusInput = document.getElementById('editReadStatus');

        const titleValue = titleInput.value;
        const authorValue = authorInput.value;
        const pagesValue = pagesInput.value;
        const readStatusValue = readStatusInput.checked;

        infoNode.querySelector('.title').textContent = titleValue;
        infoNode.querySelector('.author').textContent = authorValue;
        infoNode.querySelector('.pages').textContent = pagesValue;
        infoNode.querySelector('.readStatus').textContent = readStatusValue;

        editForm.reset();
    }, { once: true })

}
