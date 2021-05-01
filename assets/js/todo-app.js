// To display current day and date
const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

document.querySelector(".date").innerHTML = today.toLocaleDateString(
  "en-US",
  options
);

// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button.add-btn");
var todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button.clearAll-btn");

// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value

  if (userEnteredValue.trim() != "") {
    //if the user value is blank contain only space
    addBtn.disabled = false;
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.disabled = true;
    addBtn.classList.remove("active"); //unactive the add button
  }
};

//Display new todo
function newToDoItem(itemtext, index, completed) {
  let newLiTag = "";
  if (completed) {
    newLiTag = `<li id=${index} class="item">
    <label class="todo-list__label">
    <input type="checkbox" class="checkbox completed" onclick="toggleToDoItemState(this)"/>
    <i class="check"></i>
    <span class="todo-text">${itemtext}</span>
    <span class="trash" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    </label>
    </li>`;
  } else {
    newLiTag = `<li id=${index} class="item">
    <label class="todo-list__label">
    <input type="checkbox" class="checkbox" onclick="toggleToDoItemState(this)"/>
    <i class="check"></i>
    <span class="todo-text">${itemtext}</span>
    <span class="trash" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    </label>
    </li>`;
  }

  todoList.innerHTML += newLiTag;

  saveToDoItems();
}

// Add todo
addBtn.onclick = () => {
  var itemText = inputBox.value;
  newToDoItem(itemText, todoList.children.length, false);
  inputBox.value = "";
  addBtn.classList.remove("active");
  addBtn.disabled = true;
};

// Calculate and display number of pending task
function pendingTask() {
  completedNo = document.querySelectorAll(".completed").length;
  const pendingTasksNumb = document.querySelector(".pendingTasks");

  pendingTasksNumb.textContent = todoList.children.length - completedNo; //passing the array length in pendingtask
}

// Toggle completed
function toggleToDoItemState(element) {
  if (element.classList.contains("completed")) {
    element.classList.remove("completed");
  } else {
    element.classList.add("completed");
  }
  saveToDoItems();
}

// delete todo
function deleteTask(index) {
  var toDoItems = todoList.children;

  for (var i = 0; i < todoList.children.length; i++) {
    if (toDoItems.item(i).id == index) {
      toDoItems.item(i).remove();
    }
  }

  saveToDoItems();
}

// delete all todos
deleteAllBtn.onclick = () => {
  var toDoItems = todoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
  saveToDoItems();
};

// Update todo list and save to local storage
function saveToDoItems() {
  var toDos = [];

  for (var i = 0; i < todoList.children.length; i++) {
    var toDo = todoList.children.item(i);

    var toDoInfo = {
      task: toDo.querySelector(".todo-text").innerText,
      completed: toDo
        .querySelector(".checkbox")
        .classList.contains("completed"),
    };

    toDos.push(toDoInfo);
  }

  localStorage.setItem("toDos", JSON.stringify(toDos));

  pendingTask(); // update pending task total

  if (toDos.length > 0) {
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
}

// Initial display todos if present in local storage
function loadList() {
  if (localStorage.getItem("toDos") !== null) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));

    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.task, i, toDo.completed);
    }
    pendingTask();
  }
}

loadList();
