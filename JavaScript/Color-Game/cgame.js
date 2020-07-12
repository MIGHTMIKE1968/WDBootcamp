let colors = [
    "rgb(255, 0, 0)", 
    "rgb(250, 242, 0)", 
    "rgb(0, 99, 5)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    // add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to the squares
    squares[i].addEventListener("click", function() {
     // get color of clicked square
     let clickedColor = this.style.backgroundColor;
     // compare the color to pickedColor
     if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT!";
        changeColors(clickedColor);
     } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "TRY AGAIN!";
     }
    });
}

function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}












