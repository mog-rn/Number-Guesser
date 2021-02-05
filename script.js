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
    const userDiff = Math.abs(targetGuess - userGuess);
    const compDiff = Math.abs(targetGuess - computerGuess);
    return userDiff <= compDiff;  
}

//updateScore function
const updateScore = (winner) => {
    if (winner === 'user') {
        humanScore++;
    } else if(winner === 'computer') {
        computerScore++;
    }
}

//advancedRound() function
const advancedRound = () => {
    currentNumber++;
}