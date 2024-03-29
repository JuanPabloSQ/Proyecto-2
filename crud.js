const toDoList = document.getElementById("toDolist");
const toDo = document.getElementById("toDo");

const storedToDoList = localStorage.getItem("toDoList");
const ToDoArray = storedToDoList ? JSON.parse(storedToDoList) : [];

const renderToDo = () => {


  toDoList.innerHTML = '';

  ToDoArray.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "list-item-container";

    const itemList = document.createElement("li");
    itemList.textContent = item;

    const buttonContainer = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.className = "ButtonEliminar";
    deleteButton.appendChild(document.createTextNode("Eliminar"));
    deleteButton.addEventListener("click", () => {
      ToDoArray.splice(index, 1);
      localStorage.setItem("toDoList", JSON.stringify(ToDoArray));
      renderToDo();
    });

    const updateButton = document.createElement("button");
    updateButton.className = "ButtonActualizar";
    updateButton.textContent = "Actualizar";
    updateButton.addEventListener("click", () => {
      const updatedValue = toDo.value.trim();
      if (updatedValue !== '') {
        ToDoArray[index] = updatedValue;
        toDo.value = '';
        localStorage.setItem("toDoList", JSON.stringify(ToDoArray));
      }
      renderToDo();
    });

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(updateButton);

    container.appendChild(itemList);
    container.appendChild(buttonContainer);

    toDoList.appendChild(container);
  });

};
renderToDo();

const addToDo = () => {
  const toDoValue = toDo.value.trim();

  if (toDoValue !== '') {
    ToDoArray.push(toDoValue);
    localStorage.setItem("toDoList", JSON.stringify(ToDoArray));
    toDo.value = '';
  }
  renderToDo();
};