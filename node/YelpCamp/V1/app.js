const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const campgrounds = [
  {name: "Catfish Creek", image:"https://pixabay.com/get/57e0d74a4255ad14f1dc8460da293277103ddfe6505770_640.jpg"},
  {name: "Busch's Wildlife", image:"https://pixabay.com/get/54e4d4424a54a514f1dc8460da293277103ddfe6515673_640.jpg"},
  {name: "Chippewa Lake", image:"https://pixabay.com/get/57e6dd424e5aa914f1dc8460da293277103ddfe6575374_640.jpg"}
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
  // Get data fro form and add to the campgrounds array
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  // Redirect back to campgrounds page
  res.redirect("/campgrounds");
});

console.log('Yelp Camp has started!');
app.listen(3000);
