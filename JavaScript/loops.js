// While Loops

/*
let count = 1;

while(count < 10) {
    console.log("Let the count begin: " + count);
    count++;
}

let num = 5;

while(num <= 15) {
    console.log("Start counting:" + num);
    num++;
}

let double = 2;

while(double <= 10) {
    console.log("Count in 2s: " + double);
    double+=2;
}

let tres = 0;

while(tres <= 15) {
    console.log("Count in 3s " + tres);
    tres+=3;
}

let name = "Bubba Ray Dudley";
let letter = 0;

while(letter < name.length) {
    console.log(name[letter])
    letter++;
}

// While Loops Exercise 1

let num = 1;

while(num <= 12) {
    console.log(num);
    num += 2;
}
// Should print out 1, 3, 5, 7, 9, 11

let nums = 1;

while(nums <= 20) {
    if(nums % 4 === 0) {
        console.log(nums);
    }
    nums++;
}
// Sould print out all numbers divisible by 4

let minus = 100;

while(minus < 150) {
    console.log(minus + 1);
    minus--;
}
// Infinate Loops


// **** WHILE LOOP PROBLEM SET ****

// 1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19.");
let num = -10;

while(num < 20) {
    console.log(num);
    num++;
}

// 2. Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40.");
let nums = 10;

while(nums <= 40) {
    console.log(nums);
    nums+=2;
}


// 3. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333.");
let count = 300;

while(count <= 333) {
    if(count % 2 === 1) {
        console.log(count);    
    }
    count++;
}

// 4. Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50.");
let divide = 5;

while(divide <= 50) {
    if(divide % 3 === 0 && divide % 5 === 0) {
        console.log(divide);    
    }
    divide++;
}

// For Loops

for(let i = 0; i < 10; i++) {
    console.log(i);
}
// Will print out 0-9

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

let person = "Glenny";

for(let x = 0; x < person.length; x++ ) {
    console.log(person[x]);
}

for(let i = 0; i < 16; i+=8) {
    console.log(i);
}

let str = "ahceclvlxo"

for(let i = 1; i < str.length; i+=2) {
    console.log(str[i]);
}

// **** FOR LOOPS PROBLEM SET
//1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19.");
for(let i = -10; i <= 19; i++) {
    console.log(i);
}

//2. Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40.");
for(let i = 10; i <= 40; i+=2) {
    console.log(i);
}

//2. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333.");
for(let i = 300; i <= 333; i++) {
    if(i % 2 === 1) {
        console.log(i);
    }
}

//2. Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50.");
for(let i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
*/

// For Each

let nums = [14, 38, 57, 90, 16];

nums.forEach(function(num) {
    console.log(num);
}); 

function myForEach(arr, func) {
    // loop through array
    for(let i = 0; i < arr.length; i++) {
        // call func each time in array
        func();
    }
}

let food = ["chile", "pizza", "chicken"];

myForEach(food, alert);


function myForEach(arr, func) {
    // loop through array
    for(let i = 0; i < arr.length; i++) {
        // call func each time in array
        func(arr[i]);
    }
}


myForEach(food, function() {alert("Hola!")})

myForEach(food, function(foods) {
    console.log(foods);
});

Array.prototype.myForEach = function() {
    for(let i = 0; i < this.lenght; i++) {
        func(this[i]);
    }
}


let buddies = ["Jerome", "Marvin", "Bootsy", "Glenn"];

buddies.myForEach(function(name) {
    console.log(`I love ${name}.`);
});
    

    

              



























