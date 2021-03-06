let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });  
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++) {
    // add click listeners to the squares
    squares[i].addEventListener("click", function() {
       // get color of clicked square
       let clickedColor = this.style.backgroundColor;
       // compare the color to pickedColor
       if (clickedColor === pickedColor) {
          messageDisplay.textContent = "CORRECT!";
          resetButton.textContent = "Play Again?";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
       } else {
         this.style.backgroundColor = "#232323";
         messageDisplay.textContent = "TRY AGAIN!";
       }
    });
  }
}


function reset() {
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // Change the color of the squares
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];    
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
})


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












