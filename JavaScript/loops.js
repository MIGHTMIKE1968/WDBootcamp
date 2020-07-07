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
// Infinate Loop
*/


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













