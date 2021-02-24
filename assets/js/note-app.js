console.log('This is My Note app.');
//this function will use to show previous notes after loading the page.
showNotes();

// If user click on add note button, then it will store the note in localStorage and call the function showNotes()
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');

    //if note is empty and press add note button, then give a alert
    if(addTxt.value == ""){
        return alert('This is empty note !! Try to write something useful');
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
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    // after presssing add note button, our textarea(where we write note) should be blank as before.
    addTxt.value = "";
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
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
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
    addTxt.value = notesObj[index];
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
    notesObj[saveindex]=addTxt.value;
    saveBtn.style.display="none";
    addBtn.style.display="block";
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value="";
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
/*
further features

1. add title
2. add important tag for the notes
3. sync and host with web server

*/