const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const Post = require("./models/post");
const User = require("./models/user");


Post.create({
  title: "How to practice Tai Chi - Stances",
  content: "Proper stances are an important part of Tai Chi."
}, function(err, post) {
    User.findOne({email: "james@funklords.com"}, function(err, foundUser) {
        if(err) {
          console.log(err);
        } else {
          foundUser.posts.push(post);
          foundUser.save(function(err, data) {
            if(err) {
              console.log(err)
            } else {
              console.log(data)
            }
          });
        }
    });
});

/*
// Find user
// Find all posts for that user

User.findOne({email: "james@funklords.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});



/*
User.create({
  email: "james@funklords.com",
  name: "James Brown"
});
*/
