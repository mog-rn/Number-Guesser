let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generateTarget() function
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

//compareGuess() function
const comapareFunction = (userGuess, computerGuess, secretTargetNumber) => {
    if (userGuess === computerGuess) {
        return true;
    } else {
        return false;
    }  
}