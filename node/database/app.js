const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mood: String
});

let Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
/*
let rufas = new Cat({
    name: "Ebony",
    age: 5,
    mood: "Hungry"
});

rufas.save(function(err, cat) {
    if(err) {
      console.log("Something went wrong!");
    } else {
      console.log("A cat has been saved!");
      console.log(cat);
    }
});
*/

Cat.create({
    name: "Chedder",
    age: 2,
    mood: "Playful"
}, function(err, cat) {
    if(err) {
      console.log(err);
    } else {
      console.log(cat);
    }
});

// retrive all cats from the DB and console.log each one

Cat.find({}, function(err, cats) {
	if(err) {
		console.log("Aww man, an error!");
		console.log(err);
	} else {
		console.log("All the cats!")
		console.log(cats);
	}
});
