// Advanced JS DOM

let button = document.querySelector("button");
let paragraph = document.querySelector("p");

// Setup the click listener
button.addEventListener("click", function() {
    paragraph.textContent = "Hey someone pushed my button!";
});

let h1 =  document.querySelector("h1");

h1.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
    
    setTimeout(function() {
        event.target.style.color = "";
    }, 2000);
}, false);


let link = document.querySelector("a");

link.addEventListener("click", function() {
    alert("You just clicked this link!");
});


let lis = document.querySelectorAll("li");

for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "rgb(255, 0, 187)";
    });
}