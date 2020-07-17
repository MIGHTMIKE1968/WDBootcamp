const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hola! mi amigos!!");
});

app.get("/adios", function(req, res) {
    res.send("See yah but I wouldn't wanna be yah!!");
});

app.get("/boss", function(req, res) {
    res.send("The boss says you're fired!!");
    console.log("Someone wants to see the boss.");
});


console.log("You are now listening live on port 3,000!");
app.listen(3000);