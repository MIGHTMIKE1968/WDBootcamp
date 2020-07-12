let colors = [
    "rgb(255, 0, 0)", 
    "rgb(250, 242, 0)", 
    "rgb(0, 99, 5)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = colors[1];
let colorDisplay = document.getElementById("colorDisplay");

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
        alert("CORRECT!");    
     } else {
         alert("WRONG!!");
     }
    });
}