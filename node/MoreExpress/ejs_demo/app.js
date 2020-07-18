const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.get("/meet/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render('meet.ejs', {thingVar: thing});
});

app.get("/posts", function(req, res) {
  let posts = [
      {title: "My Pal Archie", author: "by Jughead Jones"},
      {title: "Living With Venom", author: "by Bane"},
      {title: "How To Be A Good Hero", author: "by The Tick"}
  ];

  res.render('posts.ejs', {posts: posts});
});

app.get("*", function(req, res) {
  res.send("Opps! You messed up!");
})

console.log('You are now listening to the smooth sounds of port 3000!');
app.listen(3000);
