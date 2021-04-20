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
let myLibrary = [
    {title:"Alice in WonderLand",author: "Enid Blyton", isRead: "Read"}
];
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
}
displayBooks();