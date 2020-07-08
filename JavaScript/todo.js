// Todo List
window.setTimeout(function() {
    // place all your JS code here
    let todos = ["Practice my javascript"];
    
    let input = prompt("What would you like to do?");
    
    while(input !== "quit") {
        // handle input
        if(input === "list") {
            console.log(todos);
        } else if(input === "new") {
        // ask for new todos
        let newTodo = prompt("Enter your new todo.");
        // add to the todos array
           todos.push(newTodo);
        }
        // ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("YOU HAVE JUST QUIT THE APP!");
    
}, 600);