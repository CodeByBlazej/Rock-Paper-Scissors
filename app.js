const rockBTN = document.querySelector(".rock");
const paperBTN = document.querySelector(".paper");
const scissorsBTN = document.querySelector(".scissors");
const para = document.querySelector(".para");
const computerScr = document.querySelector(".computerScore");
const playerScr = document.querySelector(".playerScore");
const playAgainBTN = document.querySelector(".playAgain");
const winner = document.querySelector(".winner");

playAgainBTN.style.display = 'none';

let computerScore = 0;
let playerScore = 0;
let result = '';

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


  if  (playerSelection === 'ROCK' && computerSelection === 'Rock' ||
      playerSelection === 'PAPER' && computerSelection === 'Paper' ||
      playerSelection === 'SCISSORS' && computerSelection === 'Scissors') {
        result = "Draw!";

  } else if (playerSelection === 'ROCK' && computerSelection === 'Paper' ||
      playerSelection === 'PAPER' && computerSelection === 'Scissors' ||
      playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
        result = "You Lose!";
        ++computerScore;

  } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors' ||
      playerSelection === 'PAPER' && computerSelection === 'Rock' ||
      playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
        result = "You Win!";
        ++playerScore;
    }
}


function checkWinner() {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore < playerScore) {
      winner.textContent = 'You Won The Game!';
      playAgainBTN.style.display = 'block';
      paperBTN.disabled = true;
      rockBTN.disabled = true;
      scissorsBTN.disabled = true;

    } else if (computerScore > playerScore) {
      winner.textContent = 'You Lost The Game!';
      playAgainBTN.style.display = 'block';
      paperBTN.disabled = true;
      rockBTN.disabled = true;
      scissorsBTN.disabled = true;
    } else {
      winner.textContent = 'You Had A Draw!';
      playAgainBTN.style.display = 'block';
    }
  } 
}



rockBTN.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
  para.textContent = result;
  computerScr.textContent = `Computer score is: ${computerScore}`;
  playerScr.textContent = `Player score is: ${playerScore}`;
  checkWinner();
});

paperBTN.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
  para.textContent = result;
  computerScr.textContent = `Computer score is: ${computerScore}`;
  playerScr.textContent = `Player score is: ${playerScore}`;
  checkWinner();

});

scissorsBTN.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
  para.textContent = result;
  computerScr.textContent = `Computer score is: ${computerScore}`;
  playerScr.textContent = `Player score is: ${playerScore}`;
  checkWinner();
});

playAgainBTN.addEventListener('click', () => {
  paperBTN.disabled = false;
  rockBTN.disabled = false;
  scissorsBTN.disabled = false;
  computerScore = 0;
  playerScore = 0;
  computerScr.textContent = 'Computer score is: 0';
  playerScr.textContent = 'Player score is: 0';
  para.textContent = 'Choose Rock, Paper or Scissors...';
  winner.textContent = '';
  playAgainBTN.style.display = 'none';
})