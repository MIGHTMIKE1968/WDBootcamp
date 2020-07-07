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









