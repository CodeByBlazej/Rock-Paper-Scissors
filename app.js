const paperBTN = document.querySelector(".paper");
const rockBTN = document.querySelector(".rock");
const scissorsBTN = document.querySelector(".scissors");
const para = document.querySelector(".para");
const computerScr = document.querySelector(".computerScore");
const playerScr = document.querySelector(".playerScore");


let draw = 'You have a draw!';
let playerWins = 'You Win!';
let computerWins = 'You Lose!';
let computerScore = 0;
let playerScore = 0;
let result = '';
// let currentComputerScore = para.textContent = `You Lose! Computer Score is now ${(++computerScore)}!`;
// let currentPlayerScore = ` Player Score is now ${(++playerScore)}!`;

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
    result = "Draw!";

    // return draw;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
    result = "You Lose!";
    ++computerScore;

    // return computerWins + ` Computer Score is now ${(++computerScore)}!`;
  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
    result = "You Win!";
    ++playerScore;

    // return playerWins + ` Player Score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
    result = "You Win!";
    ++playerScore;

    // return playerWins + ` Player Score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
    result = "Draw!";

    // return draw;
  } else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
    result = "You Lose!";
    ++computerScore;

    // return computerWins + ` Computer score is now ${(++computerScore)}!`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
    result = "You Lose!";
    ++computerScore;

    // return computerWins + ` Computer score is now ${(++computerScore)} !`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
    result = "You Win!";
    ++playerScore;

    // return playerWins + ` Player score is now ${(++playerScore)}!`;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
    result = "Draw!";

    // return draw;
  } else if (playerSelection !== 'SCISSORS' || 'PAPER' || 'ROCK') {
    return 'You entered the wrong value! Try again';
  }
}


// function playGame() {  
//   for(let i = 0; i < 5; i++){
//     const playerSelection = prompt('What do you choose? Paper, Scissors or Rock?');
//     const computerSelection = getComputerChoice();
//     if(playerSelection === null) {
//       return 'Please enter correct value!'
//     } else {
//       console.log(playRound(playerSelection, computerSelection));
//     }
//   }

//   if(computerScore < playerScore) {
//     return 'You Win!'
//   } else if (computerScore > playerScore) {
//     return 'Computer Wins!'
//   } else {
//     return 'You have a draw!'
//   } 
// }

// console.log(playGame());

rockBTN.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
  para.textContent = result;
  computerScr.textContent = `Computer score is: ${computerScore}`;
  playerScr.textContent = `Player score is: ${playerScore}`;
});

paperBTN.addEventListener('click', () => {
  console.log(playRound("paper", getComputerChoice()));
});

scissorsBTN.addEventListener('click', () => {
  console.log(playRound("scissors", getComputerChoice()));
});





