const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// POST - title, content
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

// USER - email, name
let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

/*
let newUser = new User({
  email: "george@pfunk.edu",
  name: "George Clinton"
});

newUser.posts.push({
  title: "How to play a funky bass",
  content: "Hello babies! Bootsy here!. Time to learn some bass funk!"
});

newUser.save(function(err, user) {
  if(err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

let newPost = new Post({
  title: "10 Foods That Help Relieve Stress",
  content: "Watermelon is a great stress reliever."
});
newPost.save(function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/

User.findOne({name: "George Clinton"}, function(err, user){
    if(err) {
      //console.log(err);
    } else {
      user.posts.push({
        title: "The Landing of the Mothership",
        content: "Swing down, sweet chariot stop and let me ride!"
      });
      user.save(function(err, user) {
          if(err) {
            console.log(err);
          } else {
            console.log(user);
          }
      });
    }
});
