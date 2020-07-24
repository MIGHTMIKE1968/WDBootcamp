const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  text: String,
  author: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Comment", commentSchema);
