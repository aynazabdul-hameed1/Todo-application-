
var firebaseConfig = {
  apiKey: "AIzaSyBPGcfOD8jPCBQYFJpywkmM_V2abviTsl0",
  authDomain: "todo-application-fc84c.firebaseapp.com",
  databaseURL: "https://todo-application-fc84c-default-rtdb.firebaseio.com",
  projectId: "todo-application-fc84c",
  storageBucket: "todo-application-fc84c.firebasestorage.app",
  messagingSenderId: "464539737715",
  appId: "1:464539737715:web:4217286fbc30d1d42ed406"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var input = document.getElementById("todo");
var todoList = document.getElementById("todoList");

// Add Todo
function addTodo() {
  if (input.value.trim() === "") {
    alert("Please enter a todo!");
    return;
  }

  var key = database.ref("todos").push().key;
  var todo = { text: input.value, key: key };

  database.ref("todos/" + key).set(todo);
  input.value = "";
}
database.ref("todos").on("child_added", function (data) {
  renderTodoItem(data.val());
});
// Render Todo Item
function renderTodoItem(todo) {
  var li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  var span = document.createElement("span");
  span.innerText = todo.text;

  var btnGroup = document.createElement("div");

  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "btn btn-sm btn-outline-success me-2";
  editBtn.onclick = function () { editSingleItem(todo.key, span); };

  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-sm btn-outline-danger";
  delBtn.onclick = function () { deleteSingleItem(todo.key); };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  li.setAttribute("id", todo.key);
  todoList.appendChild(li);
}

// Edit Todo
function editSingleItem(key, span) {
  var updatedValue = prompt("Enter updated value", span.innerText);
  if (updatedValue && updatedValue.trim() !== "") {
    database.ref("todos/" + key).update({ text: updatedValue });
    span.innerText = updatedValue;
  }
}
// Delete Single Todo
function deleteSingleItem(key) {
  database.ref("todos/" + key).remove();
  document.getElementById(key).remove();
}
// Delete All Todos
function deleteAll() {
  database.ref("todos").remove();
  todoList.innerHTML = "";
}
