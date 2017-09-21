var todoList = {
  todos: [],  //array of objects not declared
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,  //you declare objects while
      completed: false     //you add them
    });
  }, //it adds todos (but in object form)
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText; //it now access the "todoText"
  }, //it changes todos
  deleteTodo: function(position){
    this.todos.splice(position, 1);
  }, //it deletes todos
  toggleCompleted: function(position){
    var todo = this.todos[position];   //you can pass an object
    todo.completed = !todo.completed;  //into a variable
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
  }
};

var handlers = {
  toggleAll: function(){
    todoList.toggleAll;
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput = '';
    changeTodoTextInput = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    view.displayTodos();
  }
}; 

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    for (var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if(todo.completed === true){
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');//it creates a button
    deleteButton.textcontent = 'Delete';//it names the button
    deleteButton.className = 'deleteButton';//it creates a class of elements in order to access them
    return deleteButton;
  }
};