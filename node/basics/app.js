// Express Routing Assignment

const express = require("express");
const app = express();

// Visiting "/" should print "Welcome to my Express assignment!"
app.get("/", function(req, res) {
    res.send("Welcome to my Express assignment!");
});


// Visiting "/speak/pig" should print "The pig says 'Oink!'"
// Visiting "/speak/cow" should print "The cow says 'Moo!'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
// Visiting "/speak/lion" should print "The lion says 'I really want some zebra meat!'"
// Visiting "/speak/rooster" should print "The rooster say 'Wake up you lazy bum!'" 
app.get("/speak/:animal", function(req, res) {
    let sayings = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        lion: "I really want some zebra meat",
        rooster: "Wake up you lazy bum"
    }
    let animal = req.params.animal.toLowerCase();
    let saying = sayings[animal];
    res.send("The " + animal + " says '" + saying + "!'");
});

// Visiting "/repeat/hello/3 should print "hello hello hello"
app.get("/repeat/:message/:times", function(req, res) {
    let message = req.params.message;
    let times = Number(req.params.times);
    let result = "";
    
    for(let i = 0; i < times; i++) {
        result += message + " ";    
    }
    res.send(result);   
});

// If the user visits another route
app.get("*", function(req, res) {
    res.send("YOU MESSED UP!!");
});


console.log("You are now on port 8000!");
app.listen(8000);

