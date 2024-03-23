const computerSelection = getComputerChoice();
const playerSelection = prompt('What do you choose? Paper, Scissors or Rock?');
let draw = 'You have a draw!';
let playerWins = 'You Win!';
let computerWins = 'You Lose!';
let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
  let random = (Math.random() * 10);
  if(random <= 3) {
    return 'Rock';
  } else if (random > 3 && random <= 6) {
    return 'Paper';
  } else if (random > 6 && random <= 10) {
    return 'Scissors';
  }
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();


  if(playerSelection === 'ROCK' && computerSelection === 'Rock') {
    return draw;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
    return computerWins + ` Computer Score is now ${(++computerScore)}!`;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
    return playerWins + ` Player Score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
    return playerWins + ` Player Score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
    return draw;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
    return computerWins + ` Computer score is now ${(++computerScore)}!`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
    return computerWins + ` Computer score is now ${(++computerScore)} !`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
    return playerWins + ` Player score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
    return draw;
  } else if (playerSelection !== 'SCISSORS' || 'PAPER' || 'ROCK') {
    return 'You entered the wrong value! Try again';
  }
}


function playGame() {  
  for(let i = 0; i < 5; i++){
    const playerSelection = prompt('What do you choose? Paper, Scissors or Rock?');
    const computerSelection = getComputerChoice();
    if(playerSelection === null) {
      return 'Please enter correct value!'
    } else {
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  if(computerScore < playerScore) {
    return 'You Win!'
  } else if (computerScore > playerScore) {
    return 'Computer Wins!'
  } else {
    return 'You have a draw!'
  } 
}

console.log(playGame());



