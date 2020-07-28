const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// INDEX - show all campgrounds
router.get("/", function(req, res) {
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
router.post("/", isLoggedIn, function(req, res) {
  // Get data fro form and add to the campgrounds array
  const name = req.body.name;
  const image = req.body.image;
  const desc = req.body.description;
  const author = {
        id: req.user._id,
        username: req.user.username
  }
  const newCampground = {name: name, image: image, description: desc, author: author};
  // Create a new campground and save to the database
  Campground.create(newCampground, function(err, newlyCreated) {
      if(err) {
          console.log(err);
      } else {
          // Redirect back to campgrounds page
          console.log(newlyCreated);
          res.redirect("/campgrounds");
      }
  });
});

// NEW - show form to create new campground
router.get("/new", isLoggedIn, function(req, res) {
  res.render("campgrounds/new.ejs");
});

// SHOW - shows more info about a certain campground
router.get("/:id", function(req, res) {
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

// EDIT Campground Route
router.get("/:id/edit", function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
        res.redirect("/campgrounds");
      } else {
          res.render("campgrounds/edit", {campground: foundCampground});
      }
  });
});

// UPDATE Campground Route
router.put("/:id", function(req, res) {
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err) {
          res.redirect("/campgrounds");
        } else {
          // redirect somewhere(show page)
          res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY Campground Route


// middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
