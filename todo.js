var todoList = document.getElementById("list");
var newItem = document.getElementById("name");
var todoType = document.getElementById("todoType");
var table = document.createElement("table");
var tbody = document.createElement("tbody");
todoList.appendChild(tbody);

function addItem() {
	todoList.style.visibility = "visible";
  var taskText = newItem.value.trim();
  var todoVal = todoType.value;
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  } else if (todoVal === "") {
    alert("Please enter a task type.");
    return;
  }
  var tr = document.createElement("tr");
  var taskTd = document.createElement("td");
  var task = document.createTextNode(newItem.value);
  var deleteBtnTd = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  var editBtnTd = document.createElement("td");
  var editBtn = document.createElement("button");
  editBtn.className = "glyphicon glyphicon-pencil";
  var todoTypeTd = document.createElement("td");
  var todoTypeSpan = document.createElement("span");
  todoTypeSpan.className = "category";
  todoTypeSpan.appendChild(document.createTextNode(todoVal));
  switch (todoVal) {
    case "Home":
      tr.style.backgroundColor = "#ffc107"; //yellow
      break;
    case "Work":
      tr.style.backgroundColor = "#28a745"; // green
      break;
    case "Hobby":
      tr.style.backgroundColor = "#17a2b8"; // blue
      break;
    case "Urgent":
      tr.style.backgroundColor = "#dc3545"; // red
      break;
    default:
      tr.style.backgroundColor = "#fff";
  }

  deleteBtn.innerHTML = "X";
  /* editBtn.innerHTML = "Edit" */;
  deleteBtn.onclick = function () {
    var confirmDlt = confirm(" Are you sure you want to delete the task?");
    if (confirmDlt) {
      tbody.removeChild(tr);
    }
  };
  editBtn.onclick = function () {
    var editText = prompt("Edit task or Edit Type Task:", task.nodeValue + "," + todoVal);
    if (editText !== null && editText !== "") {
      var taskAndType = editText.split(",");
      task.nodeValue = taskAndType[0].trim();
      todoTypeSpan.innerHTML = taskAndType[1].trim();
      todoVal = taskAndType[1].trim();
      switch (taskAndType[1].trim()) {
        case "Home":
          tr.style.backgroundColor = "#ffc107"; //yellow
          break;
        case "Work":
          tr.style.backgroundColor = "#28a745"; // green
          break;
        case "Hobby":
          tr.style.backgroundColor = "#17a2b8"; // blue
          break;
        case "Urgent" || "urgent":
          tr.style.backgroundColor = "#dc3545"; // red
          break;
        default:
          tr.style.backgroundColor = "#fff";
      }
    }
  };

  taskTd.appendChild(task);
  todoTypeTd.appendChild(todoTypeSpan);
  deleteBtnTd.appendChild(deleteBtn);
  editBtnTd.appendChild(editBtn);
  tr.appendChild(taskTd);
  tr.appendChild(todoTypeTd);
  tr.appendChild(editBtnTd);
  tr.appendChild(deleteBtnTd);
  tbody.appendChild(tr);

  newItem.value = "";
  todoType.value = "";
  // todoList.appendChild(table);
}
