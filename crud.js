const toDoList = document.getElementById("toDolist")

const toDo= document.getElementById("toDo")

const toDoValue = toDo.value

const itemList = document.createElement("li")

itemList.textContent = toDo.value

const ToDoArray = []


const renderToDo = () => {
  const ToDoArray = [];
  const toDoList = document.getElementById("toDolist");
  const toDo = document.getElementById("toDo");
  const toDoValue = toDo.value;
  ToDoArray.push(toDoValue);
  ToDoArray.map((item) => {
    const itemList = document.createElement("li");
    itemList.textContent = item
    addDeleteToDo(itemList);
    updateTodo(itemList);
    toDoList.appendChild(itemList);
  });
};

const addDeleteToDo = (itemList) => {
  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Eliminar"));
  deleteButton.addEventListener("click", () => {
    toDoList.removeChild(itemList);
  });
  itemList.appendChild(deleteButton);
};

const updateTodo = (itemList) => {
  const updateButton = document.createElement("button");
  updateButton.textContent = "Actualizar"   
  updateButton.addEventListener("click", () =>{
    const updatedValue = toDo.value;
    itemList.textContent = updatedValue;
    addDeleteToDo(itemList)
    updateTodo(itemList)
  });
  itemList.appendChild(updateButton);
};



const addToDo = () =>{
    const toDoValue = toDo.value
    const toDoList = document.getElementById("toDolist");
    const itemList = document.createElement("li");
    itemList.appendChild(document.createTextNode(toDoValue));
    toDoList.appendChild(itemList);
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Eliminar"));
    deleteButton.addEventListener("click", () => {
      toDoList.removeChild(itemList);
    });
    itemList.appendChild(deleteButton);
    toDoList.appendChild(itemList);
}
