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
        //displayBooks();
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