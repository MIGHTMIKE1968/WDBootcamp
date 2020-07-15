// Check Off Todos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){ 
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // Getting new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to the ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li")
    }
});

