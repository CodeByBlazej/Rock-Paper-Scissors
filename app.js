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
let playerWins = 'You Win!';
let computerWins = 'You Lose!';
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();



  if(playerSelection === 'ROCK' && computerSelection === 'Rock') {
    return draw;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
    return computerWins + ` Computer Score is ${(++computerScore)}`;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
    return playerWins + ` Player Score is ${(++playerScore)}`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
    return playerWins + ` Player Score is ${(++playerScore)}`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
    return draw;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
    return computerWins + ` Computer Score is ${(++computerScore)}`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
    return computerWins + ` Computer Score is ${(++computerScore)}`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
    return playerWins + ` Player Score is ${(++playerScore)}`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
    return draw;
  } else if (playerSelection !== 'SCISSORS' || 'PAPER' || 'ROCK') {
    return alert('You entered the wrong value! Try again');
  }
}

// console.log(playRound(playerSelection, computerSelection));

// function playGame() {
//   let counter = 0;
//   while (counter < 5) {
//     let round = playRound(playerSelection, computerSelection);
//     // round;
//     if(computerScore < 5 && playerScore < 5) {
//       // round;
//     } else if (computerScore > playerScore) {
//       return `You Lose! Computer Score is ${computerScore} and Your Score is ${playerScore}`;
//     } else if (computerScore < playerScore) {
//       return `You Win! Your Score is ${playerScore} and Computer Score is ${computerScore}`;
//     }

//     counter++
//   }  
// }

function playGame() {
  round = playRound(playerSelection, computerSelection);
  while (round < 1) {
    round++
    if(playerScore < 5) {
      round++
    } else {
      return 'end'
    }
  }
    console.log(round); 
  }

console.log(playGame());
// remember tomorrow about let result and let score!


