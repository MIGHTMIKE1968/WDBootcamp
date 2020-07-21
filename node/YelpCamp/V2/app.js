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
    image: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

/*
Campground.create(
    {
      name: "Busch's Wildlife",
      image:"https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
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

app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
      if(err) {
          console.log(err);
      } else {
          res.render("campgrounds", {campgrounds: allCampgrounds});
      }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
  // Get data fro form and add to the campgrounds array
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {name: name, image: image};
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

console.log('Yelp Camp has started!');
app.listen(3000);
