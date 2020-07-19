const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ["Fred", "Bruce", "Laurie", "Tee", "Wendy"];

app.get("/", function(req, res) {
  res.render('home')
});

app.get("/friends", function(req, res) {
  res.render('friends', {friends: friends});
});

app.post("/addfriend", function(req, res) {
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

console.log("Port 3000 In Full Effect!");
app.listen(3000);
