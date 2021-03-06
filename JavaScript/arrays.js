// JavaScript Arrays

let friends = ["Laurie", "Tee", "Bruce", "Wendy", "Fred", "Paula"];

console.log(`I wonder how ${friends[2]} is doing?`);
console.log(`I went to the movies today with ${friends[0]}.`);
console.log(`${friends[2]} is a great chess player!`);

// Changed the name in index 3
friends[3] = "Wendy Woo";
// Added an index not in the original
friends[6] = "Mel";

console.log(`My gal ${friends[3]} sure loves to party!`);
console.log(`When it comes to comic books, ${friends[6]} has the largest selection.`);
console.log(friends.length);

let avengers = ["Hulk", "Thor", "Cap", "Black Widow"];

// Use push to add an index to the end of an array
avengers.push("Falcon");
avengers.push("Spiderman");
avengers.push("Deadpool");

// Use pop to remove an item from the end of an array
avengers.pop();

console.log(`${avengers[5]} has been one of my favorite heroes since I was a child.`);
console.log(`The ${avengers[4]} was one of Marvel Comics 1st black super heroes.`);

// Use unshift to add to the front of an array
let fruit = ["oranges", "apples", "blueberries"];
fruit.unshift("watermelon");
fruit.unshift("strawberries");
console.log(`I believe ${fruit[1]} is one of the healthiest fruits around!`);
console.log(`I love eating fresh ${fruit[0]} with yogurt and granola!`);

// Use shift to remove an item from the front of an array
let villians = ["Sandman", "Green Goblin", "Dr. Octopus", "Kingpin"];
villians.shift();

console.log(`The ${villians[0]} is one of Spidey's oldest and deadliest foes.`);

villians.unshift("Electro");
villians.push("Venom");

// To find the location of an item inside an array
console.log(villians.indexOf("Kingpin"));
console.log(villians.indexOf("Electro"));
console.log(villians.indexOf("Hobgoblin"));

// To slice from an array
let mostEvil = villians.slice(1, 4);

console.log(`Wilson Fisk, the ${mostEvil[2]} is a ruthless and powerful gangster who seeks to crush anyone or anything who stands in his way!`);

// To copy an entire array with slice
let evilOnes = villians.slice();

console.log(`Of all Spider-Man's foes, ${evilOnes[4]} is arguably the most dangerous.`);

// Nested arrays
let places = [
    ["St. Louis", "Chicago", "Atlanta"],
    ["Paris", "Londan", "Madrid"],
    ["Santiago", "Puerto Plata", "Santo Domingo"]
]

console.log(`${places[1] [2]} is a very beautiful city.`);

//**** Array Iteration ****
let teams = ["Rams", "Tigers", "Cardinals", "Blues"];

for(let i = 0; i < teams.length; i++) {
    console.log(teams[i]);
}

//For Each
let aunts = ["May", "Barbara", "Helen", "Celeste"];

aunts.forEach(function(aunt) {
    console.log(aunt)
});

let planets = ["Earth", "Mars", "Venus", "Jupiter"];

planets.forEach(function(planet) {
    console.log(planet);
});

let iceCream = ["Chocolate", "Butter Pecan", "Cherry Vanilla"];

iceCream.forEach(function(flavors) {
    console.log(`I love ${flavors} ice cream.`);
});

function listFlavors(flavors) {
    console.log("**********");
    console.log(flavors);
    console.log("**********");
}

iceCream.forEach(listFlavors);


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
let colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
  if(color % 3 === 0) {
    console.log(color);
  }               
});


for(let color = 1; color <= numbers.length; color++) {
    if(color % 3 === 0) {
      console.log(color);
    }
}











