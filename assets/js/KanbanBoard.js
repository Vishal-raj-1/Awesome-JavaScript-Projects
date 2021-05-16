// To Drag and drop from one column to another
var task = document.getElementsByClassName('task');
var tasklist = document.getElementsByClassName('task-list');
let dragItem = null;
for(var i of task){
  i.addEventListener('dragstart', dragStart);
  i.addEventListener('dragend', dragEnd);
}
function dragStart(){
  dragItem=this;
  setTimeout(()=>this.style.display = "none", 0);
}
function dragEnd(){
  setTimeout(()=>this.style.display = "block", 0);
  dragItem=null;
}
for(j of tasklist){
  j.addEventListener('dragover', dragOver);
  j.addEventListener('dragenter', dragEnter);
  j.addEventListener('dragleave', dragLeave);
  j.addEventListener('drop', Drop);
}
function Drop(){
  this.append(dragItem);
}
function dragOver(e){
  e.preventDefault();
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}
function dragEnter(e){
  e.preventDefault();
}
function dragLeave(){
  this.style.border = "none";
}
//to delete tasks in 'Trash' column 
function emptyTrash() 
{
  document.getElementById("trash").innerHTML = "";
}
