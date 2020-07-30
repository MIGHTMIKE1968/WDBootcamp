const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/products", function(req, res) {
    res.render("products");
});

app.listen(process.env.PORT || 3000 ,function(){
    console.log("up and running on port 3000!");
});

//console.log("up and running on port 3000!" /+ process.env.PORT);
