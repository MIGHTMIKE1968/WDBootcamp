const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      Campground    = require('./models/campground'),
      Comment       = require('./models/comment'),
      User          = require('./models/user'),
      seedDB        = require('./seeds')

mongoose.connect('mongodb://localhost:27017/yelp_camp_v6', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// PASSPORT CONFIG
app.use(require("express-session")( {
  secret: "I am the prince of all Saiyans once again!",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    // Find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
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

// *************
// AUTH Routes
// *************

// Show register form
app.get("/register", function(req, res) {
  res.render("register");
});

// Handle sign up logic
app.post("/register", function(req, res) {
  let newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      return res.render("register")
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/campgrounds");
    });
  });
});

// show login form
app.get("/login", function(req, res) {
  res.render("login");
});

// handle login form
app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// logout
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

console.log('Yelp Camp has started!');
app.listen(3000);
