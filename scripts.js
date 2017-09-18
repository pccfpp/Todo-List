var todoList = {
  todos: [],  //array of objects not declared
  displayTodos: function(){
    if (this.todos.length === 0){
      console.log('Your todo list is empy!');
    }//it tells if the array is empty
    else{
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
        }//it shows if a given todo is completed
        else{
          console.log('( )', this.todos[i].todoText);
        }//it shows if a given todo is not completed
      }//it displays the todoText property of each element of the array
    }
  }, 
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
  }, //it toggles the completed property
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for(var i=0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }//it counts how many todos are completed
    }
    if (completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }//it toggles all the todos (if they are all completed)
    }
    else{
      for (var i = 0; i < totalTodos; i++)
      this.todos[i].completed = true;
    }//it toggles the non completed todos
    this.displayTodos();
  }
};
