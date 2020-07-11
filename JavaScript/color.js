// Color Changer Exercise
// click on the button to toggle between colrs

let divide = document.querySelector("div");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

divide.style.marginTop = "320px";

h2.style.fontFamily = "Lato";
h2.style.fontSize = "1.75rem";
h2.style.fontWeight = "400";

h1.style.textTransform = "uppercase";
h1.style.fontFamily = "Lato";
h1.style.fontWeight = "700";
h1.style.fontSize = "3rem";
h1.style.color = "rgb(23, 0, 117)"

button.style.padding = "10px 25px 10px 25px";
button.style.fontSize = "1.5rem";

document.body.style.background="rgb(255, 230, 0)";
document.body.style.textAlign = "center";


button.addEventListener("mouseover", function(event) {
    event.target.style.background = "orange";
    
    setTimeout(function() {
        event.target.style.background = "";
    }, 1000);
}, false);


button.addEventListener("click", function() {
    if (document.body.style.background === "rgb(255, 230, 0)") {
        document.body.style.background = "rgb(238, 182, 252)";
    } else {
        document.body.style.background = "rgb(255, 230, 0)";
    }
});


