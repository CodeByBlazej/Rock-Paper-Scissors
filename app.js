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
const playerSelection = prompt('What do you choose? Paper, Scissors or Rock?', '');
let draw = 'You have a draw!';
let youWin = 'You Win!';
let computerWin = 'You Lose!';

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();



  if(playerSelection === 'ROCK' && computerSelection === 'Rock') {
    return draw;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
    return computerWin;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
    return youWin;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
    return youWin;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
    return draw;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
    return computerWin;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
    return computerWin;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
    return youWin;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
    return draw;
  } else if (playerSelection !== 'SCISSORS' || 'PAPER' || 'ROCK') {
    return alert('You entered the wrong value! Try again');
  }
}

// console.log(playRound(playerSelection, computerSelection));

function playGame() {
  playRound(playerSelection, computerSelection)

  if(draw) {
    return 'drawwwwww'
  } else {
    return 'no'
  }
}

console.log(playGame());


