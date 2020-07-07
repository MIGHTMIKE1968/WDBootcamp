// Create a secret number
const secretNum = 6;

// Ask user for guess
const guess = Number(prompt("Guess a number between 1 and 10."));

// Check if guess is right
if(guess === secretNum) {
    alert("You got it right!! GREAT JOB!!");
    
} else if(guess > secretNum){
    alert("Too High!! Please try again!");
    
} else {
    alert("Too Low!! Please try again!!");   
} 