const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render('home');
});

app.get("/meet/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render('meet', {thingVar: thing});
});

app.get("/posts", function(req, res) {
  let posts = [
      {title: "My Pal Archie", author: "by Jughead Jones"},
      {title: "Living With Venom", author: "by Bane"},
      {title: "How To Be A Good Hero", author: "by The Tick"}
  ];

  res.render('posts', {posts: posts});
});

app.get("*", function(req, res) {
  res.send("Opps! You messed up!");
})

console.log('You are now listening to the smooth sounds of port 3000!');
app.listen(3000);
