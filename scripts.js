var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos(){
  console.log('My todos:', todos);
} //it displays todos

function addTodo(todo){
  todos.push(todo);
  displayTodos();
} //it adds todos

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
} //it changes todos

function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
} //it deletes todos