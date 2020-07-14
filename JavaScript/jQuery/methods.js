// jQuery Methods
//.text()

$("h2").text("Text changed!!");

$("h2").css("color", "red");

let change = {
    color: "purple",
    textTransform: "uppercase"
}

//.html()
$("h3").html("<h3>Rollin, Rollin, Rollin. Keep those doggies rollin!</h3>");
$("h3").css(change);


//.attr()
$("img").attr({
    src: "https://pixabay.com/get/54e2dd4b4e52a814f1dc8460da2932771138dae6505070_640.jpg",
    alt: "Kitty needs a nap!",
    border: "3px solid black",
})

$("img").last().attr({
    src: "https://pixabay.com/get/53e3d1464e5ba414f1dc8460da2932771138dae6515270_640.jpg",
    alt: "Wake up Panthro. It's time to eat!"
})

$("img").css("marginBottom", "20px");


//.val()
//$("input").val("Michael Dodson");


// Adding a css class - .addClass()
$("h1").addClass("correct");
$("li").addClass("wrong");

// To remove a class - .removeClass()
$("h1").removeClass("correct");
$("li").removeClass("wrong");

// .toggleClass
$("li").first().toggleClass("done");

//.click()
$("button").first().click(function() {
    alert("The button was clicked!");
});

$("button").css({
    padding: "10px 20px",
    margin: "0 10px 20px 0",
    textTransform: "uppercase",
    backgroundColor: "darkblue",
    color: "white",
    fontSize: "1.4rem",
    height: "100%",
    outline: "none"
});

$("#push").click(function(){
    alert("You push it real good!");
});

$("h1").click(function() {
    alert("You are learning jQuery my friend!");
});

$("h2").click(function(){
    $(this).css("backgroundColor", "rgb(255, 224, 250)");
});

//.keypress()
$("input").keypress(function(event) {
    if(event.which === 13) {
        alert("YOU HIT ENTER!");
    }
    //console.log(event);
});


//.on
$("p").on("click", function() {
    $(this).css("color", "green");
});

$("p").css({
    fontSize: "1.4rem",
    fontStyle: "oblique"
});

$("input").on("keypress", function() {
    console.log("A key was pressed.");
});

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});









