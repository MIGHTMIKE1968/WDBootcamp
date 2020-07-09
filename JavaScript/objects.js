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
console.log(`My girl ${person.name} is a drop dead beautiful, ${person.eyes} eyed ${person.zodiac}.`)