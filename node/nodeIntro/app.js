// Testing using node
/*
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 0; i < 6; i++) {
    console.log("I AM LEARNING NODE JS!!");
}
*/

// Write a function that prints "Echo!!!" 10 times to the console
function echo(x) {
    console.log(`${x.repeat(10)}`);
}
echo("I can do it!! \n")

function echo2(num) {
    let string = '';
    for(let i = 0; i < num; i++) {
        string += 'Echo!! \n';
    }
    return string;
}
console.log(echo2(5));

//Write a function that repeats "Bread N Butter" 4 times

function food(z) {
    console.log(`${z.repeat(4)}`);
}
food("Bread N Butter! \n");


// Write a function named "adios" and print out different strings
function adios(str, num) {
    for(i = 0; i <= num; i++)
    console.log(str);
}

adios("Adios Amigo!!", 2);
adios("Get out!!", 4);



