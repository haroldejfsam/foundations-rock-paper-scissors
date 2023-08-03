//Initialize values
const choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let roundsWon = 0;
let roundsLost = 0;
let playAgain = false;
let roundsPlayed = 0;

//Set computer move
function getComputerChoice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//Set all players moves
function getPlayersChoices() {
  console.log(`Player chose ${playerSelection}`);

  computerSelection = getComputerChoice(choices);
  console.log(`Computer chose ${computerSelection}`);
}

function getResults() {
  
  if (roundsPlayed === 5) {
    switch (true) {
      case roundsWon > roundsLost:
        divResults.textContent = `You won the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        setTimeout(() => {
          confirm("Play again") ? reset() : gameEnd();
      }, 1000);
        return `You won the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      case roundsWon < roundsLost:
        divResults.textContent = `You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        setTimeout(() => {
          confirm("Play again") ? reset() : gameEnd();
      }, 1000);
        return `You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      case roundsWon === roundsLost:
        divResults.textContent =`It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`;
        setTimeout(() => {
          confirm("Play again") ? reset() : gameEnd();
      }, 1000);
        return `It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      default:
        return "Something went wrong";
    }

    

  }

}

function gameEnd() {
  divResults.textContent = `Thank you for playing`;
  buttons.classList.toggle('invisible');
};

function reset() {
  playerSelection = "";
  computerSelection = "";
  roundsWon = 0;
  roundsLost = 0;
  playAgain = false;
  roundsPlayed = 0;
  divResults.textContent = `Let's play again`;

};

//Play 1 round
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      ++roundsWon;
      
      imgLeft.setAttribute('src', './images/Rock-LEFT.jpg');
      imgRight.setAttribute('src', './images/Scissors-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Rock beats Scissors. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Rock beats Scissors";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      ++roundsLost;
      
      imgLeft.setAttribute('src', './images/Rock-LEFT.jpg');
      imgRight.setAttribute('src', './images/Paper-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You Lose! Paper beats Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You Lose! Paper beats Rock";
      break;
    case playerSelection === "rock" && computerSelection === "rock":
      
      imgLeft.setAttribute('src', './images/Rock-LEFT.jpg');
      imgRight.setAttribute('src', './images/Rock-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Rock";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      ++roundsLost;
      
      imgLeft.setAttribute('src', './images/Paper-LEFT.jpg');
      imgRight.setAttribute('src', './images/Scissors-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You Lose! Scissors beats Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You Lose! Scissors beats Paper";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      
      imgLeft.setAttribute('src', './images/Paper-LEFT.jpg');
      imgRight.setAttribute('src', './images/Paper-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Paper";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      ++roundsWon;
      
      imgLeft.setAttribute('src', './images/Paper-LEFT.jpg');
      imgRight.setAttribute('src', './images/Rock-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Paper beats Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Paper beats Rock";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
        
      imgLeft.setAttribute('src', './images/Scissors-LEFT.jpg');
      imgRight.setAttribute('src', './images/Scissors-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Scissors. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Scissors";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      ++roundsWon;
      
      imgLeft.setAttribute('src', './images/Scissors-LEFT.jpg');
      imgRight.setAttribute('src', './images/Paper-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Scissors beats Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Scissors beats Paper";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      ++roundsLost;
      
      imgLeft.setAttribute('src', './images/Scissors-LEFT.jpg');
      imgRight.setAttribute('src', './images/Rock-RIGHT.jpg');
      imgLeft.classList.toggle('invisible');
      imgRight.classList.toggle('invisible');
      divResults.textContent = `End of round: ${roundsPlayed}. You Lose! Rock beats Scissors. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You Lose! Rock beats Scissors";
      break;

    default:
      divResults.textContent = "Something went wrong";
      return "Something went wrong";
      break;
  }
}

const btnRock = document.querySelector('button#rock');
const btnPaper = document.querySelector('button#paper');
const btnScissors = document.querySelector('button#scissors');
const divResults = document.querySelector('div#results');
const imgLeft = document.querySelector('#imgLeft');
const imgRight = document.querySelector('#imgRight');
const buttons = document.querySelector('#buttons');

btnRock.addEventListener('click', ()=>{
  buttons.classList.toggle('invisible');
  
  playerSelection = 'rock';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();
  setTimeout(()=>{
    imgLeft.classList.toggle('invisible');
    imgRight.classList.toggle('invisible');
    buttons.classList.toggle('invisible');
  }, 2000);
  


});
btnPaper.addEventListener('click', ()=> {
  buttons.classList.toggle('invisible');

  playerSelection = 'paper';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();
  setTimeout(()=>{
    imgLeft.classList.toggle('invisible');
    imgRight.classList.toggle('invisible');
    buttons.classList.toggle('invisible');
  }, 2000);
  


});
btnScissors.addEventListener('click', ()=>{
  buttons.classList.toggle('invisible');

  playerSelection = 'scissors';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();
  setTimeout(()=>{
    imgLeft.classList.toggle('invisible');
    imgRight.classList.toggle('invisible');
    buttons.classList.toggle('invisible');
  }, 2000);
  


});








