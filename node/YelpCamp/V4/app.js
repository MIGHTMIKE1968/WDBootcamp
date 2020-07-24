const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
Campground = require('./models/campground');
Comment = require('./models/comment');
seedDB = require('./seeds');

mongoose.connect('mongodb://localhost:27017/yelp_camp_v4', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

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
          res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
  res.render("campgrounds/new.ejs");
});

// SHOW - shows more info about a certain campground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
          } else {
            console.log(foundCampground);
            // render show templete with that campground
            res.render("campgrounds/show", {campground: foundCampground});
          }
    });
});

// ====================
// COMMENTS ROUTES
// ====================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    // Find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res) {
    // Lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
      if(err) {
        console.log(err);
        res.redirect("/campgrounds");
      } else {
        Comment.create(req.body.comment, function(err, comment) {
          if(err) {
            console.log(err);
          } else {
            campground.comments.push(comment);
            campground.save();
            res.redirect("/campgrounds/" + campground._id);
          }
        });
      }
    });
    // Create new comment
    // Connect new comment to campground
    // Redirect to campground show page
});



console.log('Yelp Camp has started!');
app.listen(3000);
