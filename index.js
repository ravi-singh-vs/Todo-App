const todos = [];
let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-container");
let id = 0;

const toggleTodo = (todo,todoText) => {
    if(todo.isCompleted)
    todoText.classList.add('cut');
    else
    todoText.classList.remove('cut');
}

const deleteTodo = (todo)=>{
  let idx = todos.findIndex((t)=>t.todoId===todo.todoId);
  todos.splice(idx,1);
  renderTodo();
}

const makeTodo = (todo) => {
  //creating dom elements

  //1. creating checkbox
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  //2. creating todo paragraph

  let todoText = document.createElement("p");

  //3. creating delete button

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";

  //4. creating button Container
  let btnContainer = document.createElement("div");
  btnContainer.classList.add('btn-container')

  //5. creating todo card

  let todoCard = document.createElement('div');
  todoCard.classList.add('todo-card');

  toggleTodo (todo,todoText);

  checkBox.onchange = () => {
    todo.isCompleted = !todo.isCompleted;
    toggleTodo (todo,todoText);
  };

  deleteBtn.onclick = () => deleteTodo(todo);

  // appending dom elements
  todoText.innerText = todo.todo;

  btnContainer.append(checkBox,deleteBtn);
  todoCard.append(btnContainer,todoText);
  todoContainer.append(todoCard);
};

const renderTodo = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    makeTodo(todo);
  });
};
todoForm.onsubmit = (e) => {
  e.preventDefault();

  const todo = {
    todoId : id++,
    todo: todoInput.value,
    isCompleted: false,
  };

  todos.push(todo);
  renderTodo();
};
