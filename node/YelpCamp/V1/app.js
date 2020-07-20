const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  const campgrounds = [
    {name: "Catfish Creek", image:"https://pixabay.com/get/57e0d74a4255ad14f1dc8460da293277103ddfe6505770_640.jpg"},
    {name: "Busch's Wildlife", image:"https://pixabay.com/get/54e4d4424a54a514f1dc8460da293277103ddfe6515673_640.jpg"},
    {name: "Chippewa Lake", image:"https://pixabay.com/get/57e6dd424e5aa914f1dc8460da293277103ddfe6575374_640.jpg"}
  ]
  res.render("campgrounds", {campgrounds: campgrounds});
});

console.log('Yelp Camp has started!');
app.listen(3000);
