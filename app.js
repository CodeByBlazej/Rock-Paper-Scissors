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

// console.log(getComputerChoice());

const computerSelection = getComputerChoice();
const playerSelection = prompt('What do you choose? Paper, Scissors or Rock?');


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();

  if(playerSelection === 'ROCK' && computerSelection === 'Rock') {
    return 'You have a draw!';
  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
    return 'You have a draw!';
  } else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
    return 'You Lose! Scissors beats Paper';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
    return 'You Win! Scissors beats Paper';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
    return 'You have a draw!';
  }
}

console.log(playRound(playerSelection, computerSelection));