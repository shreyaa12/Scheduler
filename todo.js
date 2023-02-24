var todoList = document.getElementById("list");
var newItem = document.getElementById("name");
var todoType = document.getElementById("todoType");

function addItem() {
var taskText = newItem.value.trim();
var todoVal = todoType.value
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }else if(todoVal ===""){
  	alert("Please enter a task type.");
    return;
  }
  var li = document.createElement("li");
  var task = document.createTextNode(newItem.value);
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button"
  var editBtn = document.createElement("button");
  var todoTypeSpan = document.createElement("span");
  todoTypeSpan.className = "category";
  todoTypeSpan.appendChild(document.createTextNode(todoType.value));
  deleteBtn.innerHTML = "Delete";
  editBtn.innerHTML = "Edit";
  deleteBtn.onclick = function() {
  	var confirmDlt = confirm(" Are you sure you want to delete the task?");
    if(confirmDlt){
    	todoList.removeChild(li);
    }   
  };
  editBtn.onclick = function() {
    var editText = prompt("Edit task:", task.nodeValue);
    if (editText !== null && editText !== "") {
      task.nodeValue = editText;
    }
  };
  li.appendChild(task);
  li.appendChild(todoTypeSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  newItem.value = "";
  todoType.value = "";
}
