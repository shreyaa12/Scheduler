const todoList = document.getElementById("list");
const newItem = document.getElementById("name");
const todoType = document.getElementById("todoType");
const tbody = document.createElement("tbody");
const categories = {
  Home: "#ffc107",
  Work: "#28a745",
  Hobby: "#17a2b8",
  Urgent: "#dc3545",
};
todoList.appendChild(tbody);
//ADD TASK
const addItem = () => {
  todoList.style.visibility = "visible";
  const taskText = newItem.value.trim();
  const todoVal = todoType.value.trim(); 
  if (!taskText || !todoVal) {
    alert("Please enter a task and a task type.");
    return;
  }
  //CREATING A ROW FOR THE NEW ADDED TASK
  const tr = document.createElement("tr");
  const taskTd = document.createElement("td");
  const task = document.createTextNode(taskText);
  const deleteBtnTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  const editBtnTd = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.className = "glyphicon glyphicon-pencil";
  const todoTypeTd = document.createElement("td");
  const todoTypeSpan = document.createElement("span");
  todoTypeSpan.className = "category";
  todoTypeSpan.textContent = todoVal;
  const categoryColor = categories[todoVal] || "#fff";
  tr.style.backgroundColor = categoryColor;
  deleteBtn.innerHTML = "X";
  //DELETE FUNCTION
  deleteBtn.onclick = () => {
    const confirmDlt = confirm("Are you sure you want to delete the task?");
    if (confirmDlt) {
      tbody.removeChild(tr);
    }
  };
  //EDIT BUTTON
  editBtn.onclick = () => {
    const editText = prompt("Edit task or Edit Type Task:", `${task.nodeValue},${todoVal}`);
    if (editText) {
      const [editedTask, editedType] = editText.split(",");
      const isCategoryExists = categories.hasOwnProperty(editedType.trim());
      if (!isCategoryExists) {
        alert(`Category '${editedType}' does not exist.`);
        return;
      } else {
        task.nodeValue = editedTask.trim();
        todoTypeSpan.textContent = editedType.trim();
        tr.style.backgroundColor = categories[editedType.trim()] || "#fff";
      }
    }
  };
  taskTd.appendChild(task);
  todoTypeTd.appendChild(todoTypeSpan);
  deleteBtnTd.appendChild(deleteBtn);
  editBtnTd.appendChild(editBtn);
  tr.append(taskTd, todoTypeTd, editBtnTd, deleteBtnTd);
  tbody.appendChild(tr);
  newItem.value = "";
  todoType.value = "";
};
