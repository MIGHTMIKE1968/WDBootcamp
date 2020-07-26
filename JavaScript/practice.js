// using 'this'

let person = {
    firstName: "Bruce",
    lastName : "Thirdkill",
    age      : 53,
    fullName : function() {
        return this.firstName + " " + this.lastName + " is " + this.age + ".";
    }
};

console.log(person.fullName());


let team = {
    city : "St. Louis",
    sport: "Baseball",
    name : "Cardinals",
    func : function() {
        return "The " + this.city + " " + this.sport + " " + this.name + ".";
    }
}

console.log(team.func());

let decepticon = {
    name   : "Megatron",
    villian: function() {
        return this.name;
    }
}

console.log(decepticon.villian());

let aunt = {
    name : ["May", "Barbara", "Helen", "Alice"],
    sayHi: "Good morning",
    relative: function() {
        return this.sayHi + " aunt " + this.name[3] + ".";
    }
}

console.log(aunt.relative());

// Using the call() method

let character = {
    first: "Harry",
    last : "Potter",
    completeName: function() {
        return this.first + " " + this.last;
    }
}

let character2 = {
    first: "Severus",
    last: "Snape"
}

character.completeName()
character.completeName.call(character2); // Severus Snape















