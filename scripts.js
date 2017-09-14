var todoList = {
  todos: [],
  displayTodos: function(){
    console.log('My Todos:', this.todos);
  }, //it displays todos
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false 
    });
    this.displayTodos();
  }, //it adds todos (but in object form)
  changeTodo: function(position, newValue){
    this.todos[position]=newValue;
    this.displayTodos();
  }, //it changes todos
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  } //it deletes todos
};
