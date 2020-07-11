// Working with the JS DOM

let item = document.getElementById("highlight");
item.style.color = "blue";

let bold = document.getElementsByClassName("bold") [0];
bold.style.color = "green";


let h1 = document.querySelector("h1");
h1.style.fontSize = "2.5rem";
h1.style.textAlign = "center";
h1.style.border = "2px solid red";

let h2 = document.querySelector("h2");
// adding a class
h2.classList.add("head2");

let h3 = document.querySelector("h3");
h3.style.fontSize = "2.25rem";

let h4 = document.querySelector("h4");
h4.style.fontSize = "2rem";

// change the text from the original
h1.textContent = "Learning how to manipulate the DOM!";
h4.innerHTML = "<strong>Your socks smell <em>awfully bad!</em></strong>";

let link = document.querySelector("a");

link.setAttribute("href", "http://www.dominicansoul.com")
link.textContent = "LINK TO DOMINICANSOUL.COM";

let img1 = document.querySelector("img");

img1.setAttribute("src", "https://pixabay.com/get/50e6d3424850b10ff3d89960c62d3e7a113dd8ed5455_640.jpg");