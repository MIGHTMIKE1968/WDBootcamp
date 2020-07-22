const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// App Config
mongoose.connect('mongodb://localhost:27017/blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"))

// Mongoose/Model Config
let blogSchema = new mongoose.Schema( {
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

let Blog = mongoose.model("Blog", blogSchema);

/*
Blog.create(
    {
      title: "Will There Be A 2020 College Football Season?",
      image:"https://pixabay.com/get/53e5d2464c57b10ff3d89960c62d3e7b113cdbe15657_640.jpg",
      body: "With with C-19 cases still on the rise, the prospects of a 2020 season continue to look bleaker and bleaker."
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


// RESTFUL Routes
app.get("/", function(req, res) {
  res.redirect("/blogs");
})

// INDEX ROUTE
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if(err) {
      console.log("ERROR!");
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

// NEW Route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
  // create blog
  Blog.create(req.body.blog, function(err, newBlog) {
    if(err) {
        res.render("new.ejs");
    } else {
        // then, redirect to the index
        res.redirect("/blogs");
    }
  });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
          res.redirect("/blogs");
        } else {
          res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
      if(err) {
        res.redirect("/blogs");
      } else {
        res.render("edit", {blog: foundBlog});
      }
  });
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
          res.redirect("/blogs");
        } else {
          res.redirect("/blogs/" + req.params.id);
        }
    });
});


console.log("The Blog App Has Started!");
app.listen(3000);
