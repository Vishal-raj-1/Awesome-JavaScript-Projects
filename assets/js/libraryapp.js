"use strict";

//Book Object
class Book{
    constructor(title="Unknown",author="Unknown",isRead){
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}
//Book Array
let myLibrary = [];
//Adding a new Book
const addBook = (e) => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    const isRead = document.getElementById("read-status").value;
    if(title.value !== "" && author.value!== ""){
        myLibrary.push(new Book(title.value,author.value,isRead));
        displayBooks();
        title.value = "";
        author.value = "";
    }
}
//Add button eventListener
const addBookBtn = document.getElementById("add");
addBookBtn.onclick = (e) => {
    e.preventDefault();
    addBook();
}
//To display table of books
const displayBooks = () => {
    let tbody = document.getElementById("table-body");
    tbody.innerHTML = "";
    myLibrary.forEach((book) => {
        let row = tbody.insertRow();
        let titlecell = row.insertCell(0);
        titlecell.appendChild(document.createTextNode(book.title));
        let authorcell = row.insertCell(1);
        authorcell.appendChild(document.createTextNode(book.author));
        let statuscell = row.insertCell(2);
        statuscell.innerHTML = '<button class="is-read-btn">' + book.isRead +"</button>";
        let deletecell = row.insertCell(3);
        deletecell.innerHTML = '<button class="delete-btn">Delete</button>';
    });
    saveLocal();
}

//Event listeners for table buttons
const tableBody = document.querySelector('#table-body');
tableBody.addEventListener("click",(e)=>{
    let parentRow =  e.target.parentNode.parentNode.childNodes;
    if(e.target.innerText === 'Delete'){
        myLibrary.splice(myLibrary.findIndex(b => b.title === parentRow[0].innerText),1);
        displayBooks();
    }else if(e.target.innerText === 'Read'){
        let currentBook = findBook(parentRow[0].innerText,parentRow[1].innerText)[0];
        currentBook.isRead = 'Not Read';
        e.target.innerText = 'Not Read';
        saveLocal();
    }else if(e.target.innerText === 'Not Read'){
        let currentBook = findBook(parentRow[0].innerText,parentRow[1].innerText)[0];
        currentBook.isRead = 'Read';
        e.target.innerText = 'Read';
        saveLocal();
    }

});

//finding a book from myLibrary
const findBook = (title,author) => {
    let books = myLibrary.filter((book) => {
       return book.title === title && book.author === author;
    });
    return books;
}
//To save data to Local Storage
const saveLocal = () => {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

const restoreLocal = () => {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");
    displayBooks();
}
restoreLocal();