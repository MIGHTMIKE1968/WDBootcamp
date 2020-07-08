/*

// Functions

function sayHi() {
    console.log("HOLA!");
}

sayHi();

// Arrow function
sayBye = () => {
    console.log("ADIOS!");
}

sayBye();

function singIt() {
    console.log("R-U-B-B-E-R, F-A-N-S.");
    console.log("Rubber Fans and Funkateers.");
}

singIt();
singIt();

singSong = () => {
    console.log("Keep on with the force stop.");
    console.log("Don't stop til you get enough.");
}

singSong();
singSong();

// Arguements
function siblings(a,b,c) {
    console.log(a + ", " + b + ", and " + c + " are my brother and sisters.");
}

siblings("Kevin", "Angie", "Marie");

square = (num) => {
    console.log(num * num);
}

square(6);

function add(a,b) {
    console.log(a + b);
}

add(100, 35);

greeting = (name) => {
    console.log("Ah the name is " + name + " baby!");
}

greeting("Bootsy");
greeting("Dr. Funkenstein");

function modulo(x,y) {
    console.log(x % y);
}

modulo(78, 15);


amount = (z) => {
    if(z < 10) {
        console.log("You don't have enough money.");
    } else {
        console.log("You have enough cash to buy this.");
    }
    
}

amount(9);

function multiply(y) {
    return y * y;
}

multiply(12);

place = (p) => {
    return p;
}

place("Puerto Plata");


function test(x,y) {
    return y - x;
}

test(10, 40);

test2 = (x) => {
    return x * 2;
    console.log(x);
    return x / 2
}

test2(50);



// ***** FUNCTION PROBLEM SET *****
function isEven(i) {
    // return true if number is even
    if (i % 2 === 0) {
        return true;
    // else return false
    } else {
        return false;
    }  
}

isEven(88);


function factorial(num) {
    // Define a result variable
    let result = 1;
    // Calculate factorial and store value in result
    for(let i = 2; i <= num; i++) {
        result *= i;    
    }
    // Return the result variable
    return result;
}


function kebabToSnake() {
    // Replace all '-' with '_'
    // Return str4
    let str1 = "Hello-World";
    let str2 = str1.replace(/-/g, "_");
    
    let str3 = "Cats-Are-Beautiful";
    let str4 = str3.replace(/-/g, "_");
        return str4;
    
    let str5 = "puerto plata";
    let str6 = str5.replace(/p/g, "P");
    
    //console.log(str2);
    //console.log(str4);
    //console.log(str6);
}

kebabToSnake();

*/

// JS Scope
// Scope is the context that code is executed in
var num = 8;
function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true
    } else {
        return false
    }
}

num += 1;
doMath()

// Higher Order Functions
// Passing functions to other functions

//function sing() {
    //console.log("turn the beat around..");
    //console.log("love to hear percusion..");
//}

//setInterval(sing, 5000);

// Anonymous function
setInterval(function() {
    console.log("I am an anonymous function!");
    console.log("THIS IS AWESOME!!");
}, 5000);











