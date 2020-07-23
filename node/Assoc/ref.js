const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
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
  posts: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post"
      }
  ]
});
const User = mongoose.model("User", userSchema);

/*
Post.create({
  title: "How to practice Tai Chi - Breathing Exercises",
  content: "Tai Chi is a gentle martial art that promotes a healthy mind and body."
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
*/

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
