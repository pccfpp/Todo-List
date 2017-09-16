var todoList = {
  todos: [],  //array of objects not declared
  displayTodos: function(){
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++){
      console.log(this.todos[i].todoText);
    };
  }, //it displays the todoText property of each element of the array
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,  //you declare objects while
      completed: false     //you add them
    });
    this.displayTodos();
  }, //it adds todos (but in object form)
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText; //it now access the "todoText"
    this.displayTodos();                      //property of the object
  }, //it changes todos
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }, //it deletes todos
  toggleCompleted: function(position){
    var todo = this.todos[position];   //you can pass an object
    todo.completed = !todo.completed;  //into a variable
    this.displayTodos();
  } //it toogles the completed property
};
