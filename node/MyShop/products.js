// faker exercise

/*
Create a new directory named "MyShop"
Add a file named "products.js"
Install the npm "faker" package
Read the faker docs
Use faker to print out 10 random product names and prices
*/

let faker = require("faker");

console.log("====================");
console.log("WELCOME TO MY STORE!");
console.log("====================");

for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - " + "$" + faker.commerce.price());
}

// **BONUS**

//Use faker to print out 5 random places of birth

for(i = 0; i < 5; i++) {
    console.log("I was born in " + faker.address.city() + ", " + faker.address.state() + ".");
}


