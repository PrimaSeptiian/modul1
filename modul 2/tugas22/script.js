const addForm = document.getElementById("add-form");
const newItem = document.getElementById("new-item");
const toDoList = document.getElementById("to-do-list");

// Initialize the to-do list
let toDos = [];

// Add a new to-do item
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newItem.value === "") return;
  const toDo = {
    id: Date.now(),
    text: newItem.value,
  };
  toDos.push(toDo);
  newItem.value = "";
  renderToDos();
});

// Render the to-do list
function renderToDos() {
  toDoList.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${toDo.text}</span>
      <button onclick="deleteToDo(${toDo.id})">Delete</button>
      <button onclick="editToDo(${toDo.id})">Edit</button>`;
    toDoList.appendChild(li);
  });
}

// Delete a to-do item
function deleteToDo(id) {
  toDos = toDos.filter((toDo) => toDo.id !== id);
  renderToDos();
}

// Edit a to-do item
function editToDo(id) {
  const toDoToEdit = toDos.find((toDo) => toDo.id === id);
  const newText = prompt("Enter the new to-do text");
  if (newText === null || newText === "") return;
  toDoToEdit.text = newText;
  renderToDos();
}