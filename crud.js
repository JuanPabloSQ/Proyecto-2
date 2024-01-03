const toDoList = document.getElementById("toDolist")

const toDo= document.getElementById("toDo")

const toDoValue = toDo.value

const itemList = document.createElement("li")

itemList.textContent = toDo.value

const ToDoArray = []


const renderToDo = () => {
  const toDoValue = toDo.value;
  ToDoArray.push(toDoValue);

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
      toDoList.removeChild(container);
    });

    const updateButton = document.createElement("button");
    updateButton.className = "ButtonActualizar";
    updateButton.textContent = "Actualizar";
    updateButton.addEventListener("click", () => {
      const updatedValue = toDo.value;
      ToDoArray[index] = updatedValue;
      itemList.textContent = updatedValue;
    });

    
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(updateButton);

    
    container.appendChild(itemList);
    container.appendChild(buttonContainer);

    toDoList.appendChild(container);
  });
};