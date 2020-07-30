const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// Root Routes
router.get("/", function(req, res) {
  res.render("landing");
});

// Show register form
router.get("/register", function(req, res) {
  res.render("register");
});

// Handle sign up logic
router.post("/register", function(req, res) {
  let newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      req.flash("error", err.message);
      return res.render("register")
    }
    passport.authenticate("local")(req, res, function() {
      req.flash("success", "Welcome to Yelp Camp " + user.username + "!");
      res.redirect("/campgrounds");
    });
  });
});

// show login form
router.get("/login", function(req, res) {
  res.render("login");
});

// handle login form
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You are now logged out!");
    res.redirect("/campgrounds");
});

module.exports = router;
