const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      flash         = require('connect-flash'),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      methodOveride = require('method-override'),
      Campground    = require('./models/campground'),
      Comment       = require('./models/comment'),
      User          = require('./models/user'),
      seedDB        = require('./seeds')

// Requiring routes
const commentRoutes    = require("./routes/comments"),
      campgroundRoutes = require("./routes/campgrounds"),
      indexRoutes      = require("./routes/index")

mongoose.connect('mongodb://localhost:27017/yelp_camp_v11', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOveride("_method"));
app.use(flash());
//seedDB(); // seed the database

mongoose.set('useFindAndModify', false);

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

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 3000 ,function(){
    console.log("Yelp Camp has started!");
});
