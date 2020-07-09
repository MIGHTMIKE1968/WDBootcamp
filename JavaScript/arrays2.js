// 1. Write a function printReverse() that takes an array as an argument and prints the elements out to the console in reverse order.

function printReverse(arr) {
    for(let i = arr.length - 1; i >= 0; i-- ) {
     console.log(arr[i]); 
    }    
}

printReverse(["uno", "dos", "tres", "cuatro", "cinco"]);


// Written without a function and using a forEach loop
let countDown = ["one", "two", "three", "four", "five"];

countDown.forEach(function(count) {
});

let inReverse = countDown.reverse();

inReverse.forEach(function(count) {
   console.log(count);
});


// 2. Write a function named isUniform() which takes an array as an argument and returns true if all its elements are identical.

function isUniform(arr) {
    let first = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

isUniform(['z', 'z', 'z', 'z']);

// My solution
function isSame(arr) {
    return arr.every((x,i,a) => x === a[0]);
}

isSame(['1', '1', '1', '1']);
//isSame(['2', '1', '1', '1']);
//isSame(['a', 'b', 'a', 'a']);
//isSame(['z', 'z', 'z', 'z']);


// 3. Write a function max() that accepts an array of numbers and returns the highest number in it.

function sumArray(arr) {
    let total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

sumArray([10,2,36, 14]);

// My solution
function sum(arr) {
    return arr.reduce((total, amount) => total + amount);
}

sum([1,2]);


// 4. Write a function sumArray() that accepts an array of numbers and returns their total combined sum.

function max(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([72, 7, 50, 98, 79]);



// My solution
function big(arr) {
    if (toString.call(arr) !== "[object Array]")
        return false;
    return Math.max.apply(null, arr);   
}

big([12, 7, 50, 11]);







