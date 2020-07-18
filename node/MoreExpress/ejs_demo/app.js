const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.get("/meet/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render('meet.ejs', {thingVar: thing});
});

app.get("*", function(req, res) {
  res.send("Opps! You messed up!");
})

console.log('You are now listening to the smooth sounds of port 3000!');
app.listen(3000);
