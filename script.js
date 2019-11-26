let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// return a random number 0:9
const generateTarget = () => Math.floor(Math.random()*10);
// return the absolute distance between target number and guess
const getAbsoluteDistance = (target, guess) => Math.abs(target-guess);

// function to compare guesses
//returns true if human wins or ties with computer
// returns false if computer wins
const compareGuesses = (userGuess, computerGuess, target) => {
    if ((userGuess > 9)||(userGuess < 0)){
        alert('You must enter a number between 0 and 9!')
    }
    let howCloseUser = getAbsoluteDistance(target, userGuess);
    let howCloseComputer = getAbsoluteDistance(target, computerGuess);
    if ((howCloseUser === howCloseComputer)||(howCloseUser < howCloseComputer)) {
        return true;
    } else {
        return false;
    }
}
// function to update the scores based on winner
const updateScore = winner => (winner === 'computer') ? humanScore += 1 : computerScore += 1; 
// Function to advance the round, updating the round number
const advanceRound = () => currentRoundNumber += 1;