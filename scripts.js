var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My Todos:', this.todos);
  }, //it displays todos
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  }, //it adds todos
  changeTodo: function(position, newValue){
    this.todos[position]=newValue;
    this.displayTodos();
  }, //it changes todos
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  } //it deletes todos
};
