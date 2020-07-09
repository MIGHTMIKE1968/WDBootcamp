// Todo List
window.setTimeout(function() {
    // place all your JS code here
    let todos = ["Practice my javascript"];
    
    let input = prompt("What would you like to do?");
    
    while(input !== "quit") {
        // handle input
        if(input === "list") {
          listTodos();    
        } else if(input === "new") {
          addTodo();
        } else if(input === "delete") {
          deleteTodo();
        }
        
        // ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("YOU HAVE JUST QUIT THE APP!");
    
    function listTodos() {
        console.log("**********");
        todos.forEach(function(todo, i) {
          console.log(i + ": " + todo);
        });
        console.log("**********");
    }
    
    function addTodo() {
        // ask for new todos
        let newTodo = prompt("Enter your new todo.");
        // add to the todos array
        todos.push(newTodo);
        alert("A new todo has been added!");
        console.log("A new todo has been added."); 
    }
    
    function deleteTodo() {
        // ask for index of todo to be deleted
        let index = prompt("Enter index of todo to be deleted.");
        // delete that todo
        // splice()
        todos.splice(index,1);
        alert("Todo has been deleted!");
        console.log("Todo has been deleted.");
    }
    
}, 600);



