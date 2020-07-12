let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

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
        h1.style.backgroundColor = clickedColor;
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

function generateRandomColors(num) {
    // Make an array
    let arr = [];
    // Repeat num times
    for(let i = 0; i < num; i++) {
        // Get our random color and push it into array
        arr.push(randomColor())
    }
    // Return the array 
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 -255
    let r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0 -255
    let g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 -255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}












