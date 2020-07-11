// JavaScript Objects used to store various keyed collections and more complex entities.
// Objects don't have an order like an array.

let person = {
    name: "Mike",
    age: 42,
    city: "St. Louis",
    occupation: "web developer"
};

// Ways to retrieve object data
// Bracket notation:
console.log(`${person["name"]} is ${person["age"]} years old.`);
// Or dot notation:
console.log(`Curtis is a ${person.occupation} from ${person.city}, Missouri.`);

// To update your object's data:
person.name = "Leon";
person["age"] -= 2;
person.city = "Pittsburgh";
person["occupation"] = "ballet dancer";

console.log(`${person["name"]} is ${person["age"]} years old.`);
console.log(`Lucy is a talented ${person.occupation} from ${person.city}, Pennsylvania.`);

person.name ="Carol";

// To add to an object:
person.zodiac = "Tauras";

person.eyes = "brown";
person.name = "Kelly";
person.zodiac = "Scorpio";

console.log(`${person.name} at times can be a very stubborn ${person.zodiac}.`);
console.log(`My girl ${person.name} is a drop dead beautiful, ${person.eyes} eyed ${person.zodiac}.`);


// Object Nesting

var someThing = {
    roster: [
        {player: "Dr. J."},
        {player: "Moses Malone"},
        {player: "Andrew Toney"},
        {player: "Marc Ivaroni"},
        {player: "Mo Cheeks"}
    
    ],
    name: "Philadelphia 76ers",
    colors: "red, white and blue",
    coach: "Billy Cunningham",
    worldChamps: true
};

console.log(`${someThing.roster[0].player} was the star of the 1982-83 ${someThing.name}.`);
console.log(`However, ${someThing.roster[1].player} was the team's best player.`);
console.log(`${someThing.coach} was the head coach of the ${someThing.name}.`);
console.log(`The 76ers team colors are ${someThing.colors}.`);
console.log(`The 76ers won an NBA title in 1983. ${someThing.worldChamps}`);


/*
var someObject = {};
    someObject._name = "Hedwig",
    someObject.age = 6;

var prop = "color"
    someObject["prop"] = "red";


console.log(someObject._name);
console.log(someObject.age);
console.log(someObject["prop"]);
*/


// Methods
let obj = {
    name: "Paula",
    age: 26,
    isPretty: true,
    parents: ["John", "Jessica"],
    add: function(a,b) {
        return a + b;
    }
}

let micaelJ = {};

micaelJ.speak = function() {
    return "Beat It!";
}

let prince = {};

prince.speak = function() {
    return "Purple Rain, Purple Rain!";
}

// This Keyword

let comments = {};

comments.data = ["We need a new manager!", "I love Yadi!", "We need more offense."];

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    })
}

print(comments.data);

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}





























