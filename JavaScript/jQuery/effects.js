// jQuery Effects
//.fadeOut()

$("button").css({
    color: "white",
    backgroundColor: "red",
    textTransform: "uppercase",
    padding: "10px 20px"
})

//fadeOut()
/*
$("button").on("click", function() {
    $("div").fadeOut(1000, function() {
      $(this).remove();    
    });
});
*/

//fadeIn()
/*
$("button").on("click", function() {
    $("div").fadeIn(1000, function() {
     // $(this).remove();    
    });
});
*/

//fadeToggle()
/*
$("button").on("click", function() {
    $("div").fadeToggle(1000, function() {    
    });
});
*/

//slideDown() *display in the css must be set at none*
/*
$("button").on("click", function() {
    $("div").slideDown();
});
*/

//slideUp()
/*
$("button").on("click", function() {
    $("div").slideUp();
});
*/


$("button").on("click", function() {
    $("div").slideToggle(500, function() {
        console.log("Toggle Complete!");
    });
});


$("img").on("click", function() {
    $("#prime").fadeOut(2500, function() {
      console.log("Where did Prime go!");    
    }); 
});










