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
    src: "https://pixabay.com/get/54e2dd4b4e52a814f1dc8460da2932771139d7e2555270_640.jpg",
    alt: "Kitty needs a nap!",
    border: "3px solid black",
})

$("img").last().attr({
    src: "https://pixabay.com/get/53e3d1464e5ba414f1dc8460da2932771139d7ed505374_640.jpg",
    alt: "Wake up Panthro. It's time to eat!"
})

$("img").css("marginBottom", "20px");


//.val()
$("input").val("Michael Dodson");




