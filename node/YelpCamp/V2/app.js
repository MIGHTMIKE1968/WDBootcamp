const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
let campgroundSchema = new mongoose.Schema( {
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

/*
Campground.create(
    {
      name: "Busch's Wildlife",
      image:"https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aut",
      description: "If you love the outdoors this is the place for you! Great for camping and fishing!"
    },
    function(err, campground) {
      if(err) {
        console.log(err);
      } else {
        console.log("New Campground Created: ");
        console.log(campground);
      }
  });
  */


app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
      if(err) {
          console.log(err);
      } else {
          res.render("index", {campgrounds: allCampgrounds});
      }
  });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
  // Get data fro form and add to the campgrounds array
  const name = req.body.name;
  const image = req.body.image;
  const desc = req.body.description;
  const newCampground = {name: name, image: image, description: desc};
  // Create a new campground and save to the database
  Campground.create(newCampground, function(err, newlyCreated) {
      if(err) {
          console.log(err);
      } else {
          // Redirect back to campgrounds page
          res.redirect("/campgrounds");
      }
  });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

// SHOW - shows more info about a certain campground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
          } else {
            // render show templete with that campground
            res.render("show", {campground: foundCampground});
          }
    });
});

console.log('Yelp Camp has started!');
app.listen(3000);
