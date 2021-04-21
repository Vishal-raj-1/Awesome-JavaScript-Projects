console.log('This is My Note app.');
//this function will use to show previous notes after loading the page.
showNotes();

// If user click on add note button, then it will store the note in localStorage and call the function showNotes()

class Note{
    constructor(title,text,favorite = false){
        this.title = title;
        this.text = text;
        this.favorite = favorite;
    }
}

let addBtn = document.getElementById('addBtn');

// Div where error alert will be shown
let errorAlertDiv = document.getElementById("alerts");

// Error alert when no text provided in the note or title of the note
let emptyNoteAlert = `<div id="errorAleart" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> This is empty note !! Try to write something useful
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

let emptyTitleAlert = `<div id="errorAleart" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> Title is empty !! Add the title for the note
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById("addTitle");

    // if title or note is empty and press add note button, then give a alert
    if(addTitle.value == ""){
        // Show error alert when note is empty
        errorAlertDiv.innerHTML = emptyTitleAlert;
        return;
    }

    if (addTxt.value == "") {
        // Show error alert when note is empty
        errorAlertDiv.innerHTML = emptyNoteAlert;
        return;
    }

    let notes = localStorage.getItem('notes');
    let notesObj;

    //if there is no note available then create a empty array, else parse the note string into array.
    if(notes == null){
        notesObj = [];
    }
    else{
        // Parse: make an array from a string(localStorage can't store array so we store it as string)
        notesObj = JSON.parse(notes); 
    }
    
    //Create a new note obj
    let note = new Note(addTitle.value, addTxt.value)

    // add the note in notes array, and then update localStorage.
    notesObj.push(note);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    // after presssing add note button, our textarea(where we write note) should be blank as before.
    addTxt.value = "";
	addTitle.value = "";
    showNotes();
})

// this function show our notes
function showNotes(){
    let notes = localStorage.getItem('notes');
    let notesObj;

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }

    let addNote = "";

    //This list contains the classes for favorite/not-favorite cards
    const favorite_class = ["noteCard m-2 card favorite","noteCard m-2 card not-favorite"]

    notesObj.forEach((element, index) => {
        addNote += `<div class="${element.favorite ? favorite_class[0]:favorite_class[1]}" style="width: auto;">
        <div class="card-body">
            <div class="row mb-3">
                <div class="col">
                    <h2 class="card-title" id="noteTitle">${element.title}</h2>
                    <p class="card-text" id="noteText">${element.text}</p>
                    </div>
                    <div class="col-2">
                    <span class="iconify" data-icon=${element.favorite ? "bi:star-fill":"bi:star"} data-inline="false" data-width="24" data-height="24" style=${element.favorite ? "color:gold":"color:black"} onclick=favoriteNote(${index})></span>
                </div>
            </div>  
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-large jsBtn">Delete Note</button>
            <button onclick="editNote(${index})"  class="btn btn-large jsBtn">Edit Note</button>
            
        </div>
    </div>`
    });

    let notesEle = document.getElementById('notes');
    if(notesObj.length != 0){
        notesEle.innerHTML = addNote;
    }
    else{
        notesEle.innerHTML = `<div class="container lead text-white">You haven't add any note yet. Try to to add some note using above section and then press "Add Note" button.</div>`
    }
    
}
// this is edit function
function editNote(index){
    let saveindex = document.getElementById('saveindex')
    let saveBtn = document.getElementById('saveBtn')
    let addBtn = document.getElementById('addBtn')
    saveindex.value = index;
    let notes = localStorage.getItem('notes');
    let notesObj = JSON.parse(notes);
    addTitle.value = notesObj[index].title;
    addTxt.value = notesObj[index].text;
    addBtn.style.display="none";
    saveBtn.style.display="block";
    }
//  this is save function   
let saveBtn = document.getElementById('saveBtn')
saveBtn.addEventListener('click',function(){
    let addBtn = document.getElementById('addBtn')
    let notes = localStorage.getItem('notes');
    let notesObj = JSON.parse(notes);
    let saveindex = document.getElementById('saveindex').value
    notesObj[saveindex].title= addTitle.value;
    notesObj[saveindex].text= addTxt.value;
    saveBtn.style.display="none";
    addBtn.style.display="block";
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    showNotes();
})

// this function will delete note, and show remaining notes.
function deleteNote(index){
    let notes = localStorage.getItem('notes');
    let notesObj;

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }
    // splice will remove element from index, here splice(index from where it should be remove, howmany element shoudl be remove)
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');

search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    
    Array.from(noteCards).forEach(element => {
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
    
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
                }
        else{
            element.style.display = "none";
                }
    })
})


// Dismissing the error alert when the user enters some text
let addTxt = document.getElementById("addTxt");

addTxt.addEventListener("input", function () {
    let inputVal = addTxt.value.toLowerCase();

    if (inputVal != null && inputVal.trim().length > 0) {
        errorAlertDiv.innerHTML = ``;
    }

});

//let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");

addTxt.addEventListener("input", function () {
    checkNoteEmpty();
});

addTitle.addEventListener("input", function () {
    checkNoteEmpty();
});

let checkNoteEmpty = () => {
    let textVal = addTxt.value.toLowerCase();
    let titleVal = addTitle.value.toLowerCase();

    if (textVal != null && titleVal != null && textVal.trim().length > 0 && titleVal.trim().length > 0) {
        errorAlertDiv.innerHTML = ``;
    }
}

const showFavs = document.getElementById("fav-btn");
let showing_favs = false;
showFavs.addEventListener("click", ()=>{
    showing_favs=!showing_favs;
    showFavorites();
})

//This function is called when user press "Show Favorites only" btn
function showFavorites() {
    //We get the non favorites ones, so its easier to only show the favs ones
    let noteCards = document.getElementsByClassName("not-favorite");

    //We get the amount of favorites notes already existing
    let favCards = document.getElementsByClassName("favorite").length;
    
    if(favCards > 0){
        if(showing_favs){
            Array.from(noteCards).forEach(element => {
                element.style.display = "none";
            })
        }else{
            Array.from(noteCards).forEach(element => {
                element.style.display = "block";
            })
        }
    }else{
        showing_favs = false;
    }
}

//this function will change the favorite state of the note
function favoriteNote(index){
    
    let notes = localStorage.getItem('notes');
    let notesObj;

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }

    //we set the new favorite state
    notesObj[index].favorite = !notesObj[index].favorite;
    //Finally, we save it into the localstorage
    localStorage.setItem('notes', JSON.stringify(notesObj));

    showNotes();

    //We check if the user was already watching only the favorites
    if(showing_favs) showFavorites();
    
}

/*
further features

1. add title ✓
2. add important tag for the notes ✓
3. sync and host with web server

*/
