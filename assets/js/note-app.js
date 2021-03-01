console.log('This is My Note app.');
//this function will use to show previous notes after loading the page.
showNotes();

// If user click on add note button, then it will store the note in localStorage and call the function showNotes()
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

    // add the note in notes array, and then update localStorage.
    notesObj.push([addTitle.value, addTxt.value]);
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

    notesObj.forEach((element, index) => {
        addNote += `
        <div class="noteCard m-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element[0]}</h5>
                    <p class="card-text">${element[1]}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    <button onclick="editNote(${index})"  class="btn btn-primary">Edit Note</button>
                </div>
            </div>`
    });

    let notesEle = document.getElementById('notes');
    if(notesObj.length != 0){
        notesEle.innerHTML = addNote;
    }
    else{
        notesEle.innerHTML = `You haven't add any note yet. Try to to add some note using above section and then press "Add Note" button.`
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
    addTitle.value = notesObj[index][0];
    addTxt.value = notesObj[index][1];
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
    notesObj[saveindex][0]=addTitle.value;
    notesObj[saveindex][1]=addTxt.value;
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

let addTxt = document.getElementById("addTxt");
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
/*
further features

1. add title
2. add important tag for the notes
3. sync and host with web server

*/
