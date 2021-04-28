const container = document.querySelector('.container');

document.getElementById('form').addEventListener('submit', addBook);
document.getElementById('resetBooks').addEventListener('click', resetCards);
container.addEventListener("click", changeBook);


let myLibrary = [];

function getBookFromInput(book) {
  let title = document.getElementById('formTitle').value;
  let author = document.getElementById('formAuthor').value;
  let pages = document.getElementById('formPages').value;
  let isRead = document.querySelector('input[name="formRead"]:checked').value;
  return new Book(title, author, pages, isRead);
}


function addBook(book) {
  let newBook = getBookFromInput(book);
  addBookToLibrary(newBook);
  displayBooks()
  closeForm();
  book.preventDefault();
  document.getElementById("form").reset();
}

function resetCards() {
  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }
myLibrary = [];
}

function changeBook(e) {
  if (e.target.classList.contains("removeButton")) {
    let index = e.target.getAttribute('data-index');
    let cardToRemove = document.querySelector(`[data-index="${index}"]`);
    container.removeChild(cardToRemove);
    myLibrary.splice(index,1);
  }
  else if (e.target.classList.contains("readStatusBtn")) {
    let index = e.target.getAttribute('data-index');
    let cardToChange = document.querySelector(`[data-index="${index}"]`);
    let readStatus = cardToChange.querySelector('.isReadStatus');
    if (readStatus.innerHTML === "Read") {
      readStatus.innerHTML = "Not Read";
      myLibrary[index].isRead = "Not Read";
    } else {
      readStatus.innerHTML = "Read";
      myLibrary[index].isRead = "Read";

    }

  }
}

class Book {
    constructor(
      title = "Unknown",
      author = "Unknown",
      pages = "0",
      isRead = "Not Read",
    ) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    makeCard(myLibrary[myLibrary.length -1]);
}

function makeCard(bookToAdd)
{
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('h2');
    let pages = document.createElement('p');
    let isRead = document.createElement('p');
    let readStatusBtn = document.createElement('BUTTON');
    let removeButton = document.createElement('BUTTON');
    
    isRead.className = 'isReadStatus';
    readStatusBtn.className = 'readStatusBtn';
    readStatusBtn.innerText = 'Change Read Status';
    readStatusBtn.setAttribute("data-index", myLibrary.indexOf(bookToAdd));
    removeButton.className = 'removeButton';
    removeButton.innerText = 'Remove Book';
    removeButton.setAttribute("data-index", myLibrary.indexOf(bookToAdd));
    card.classList.add('card');

    title.textContent = bookToAdd.title;
    author.textContent = bookToAdd.author;
    pages.textContent = `${bookToAdd.pages} pages`;
    isRead.textContent = bookToAdd.isRead;

    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(isRead);
    card.append(removeButton);
    card.append(readStatusBtn);
    card.setAttribute("data-index", myLibrary.indexOf(bookToAdd));
    container.append(card);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
   var x= document.getElementsByClassName("starting");
   x[0].style.display="none";
   x[1].style.display="none";
  
}
function startagain(){
  var x= document.getElementsByClassName("starting");
  x[0].style.display="block";
  x[1].style.display="block";
 

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


