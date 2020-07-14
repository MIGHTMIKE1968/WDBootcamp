/*
let style1 = {
    color: "darkblue",
    backgroundColor: "yellow",
    border: "1px solid purple",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "3rem",
    height: "100%"
}

$("h1").css(style1)


let ul = {
    fontSize: "1.8rem"
}

$("ul").css(ul)

let bod = {
    width: "auto",
    margin: "0 30px"
}

$("body").css(bod)
*/


// Give all divs the same color backgound, font size, font, margin and padding.
let divide = {
    backgroundColor: "rgb(247, 231, 225)",
    fontFamily: "Roboto",
    fontSize: "2rem",
    margin: "0 30px",
    padding: "15px"
}

$("div").css(divide)


// Give the divs with a class of highlight a width of 200px.
$(".highlight").css("width", "200px")


// Give the id of third an orange border.
$("#third").css("border", "1.5px solid orange")

// Make the div with the id of first all caps. Change its color and give it a border
$("#first").css({
    textTransform: "uppercase",
    color: "rgb(79, 16, 115)",
    border: "1.5px solid rgb(79, 16, 115)"
})

let body = {
    margin: "30px 0"
}

$("body").css(body)




