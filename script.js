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
          confirm("Play again") ? reset() : alert("Thank you for playing!");
      }, 1000);
        return `You won the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      case roundsWon < roundsLost:
        divResults.textContent = `You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        setTimeout(() => {
          confirm("Play again") ? reset() : alert("Thank you for playing!");
      }, 1000);
        return `You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      case roundsWon === roundsLost:
        divResults.textContent =`It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`;
        setTimeout(() => {
          confirm("Play again") ? reset() : alert("Thank you for playing!");
      }, 1000);
        return `It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`;
        break;
      default:
        return "Something went wrong";
    }

    

  }

}

function reset() {
  playerSelection = "";
  computerSelection = "";
  roundsWon = 0;
  roundsLost = 0;
  playAgain = false;
  roundsPlayed = 0;

};

//Play 1 round
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      ++roundsWon;
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Rock beats Scissors. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Rock beats Scissors";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      ++roundsLost;
      divResults.textContent = `End of round: ${roundsPlayed}. You Lose! Paper beats Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You Lose! Paper beats Rock";
      break;
    case playerSelection === "rock" && computerSelection === "rock":
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Rock";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      ++roundsLost;
      divResults.textContent = `End of round: ${roundsPlayed}. You Lose! Scissors beats Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You Lose! Scissors beats Paper";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Paper";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      ++roundsWon;
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Paper beats Rock. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Paper beats Rock";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
      divResults.textContent = `End of round: ${roundsPlayed}. It's a tie! You both chose Scissors. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "It's a tie! You both chose Scissors";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      ++roundsWon;
      divResults.textContent = `End of round: ${roundsPlayed}. You win! Scissors beats Paper. Rounds won:${roundsWon} Rounds Lost:${roundsLost}`;
      return "You win! Scissors beats Paper";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      ++roundsLost;
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

btnRock.addEventListener('click', ()=>{
  playerSelection = 'rock';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();


});
btnPaper.addEventListener('click', ()=> {
  playerSelection = 'paper';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();

});
btnScissors.addEventListener('click', ()=>{
  playerSelection = 'scissors';
  ++roundsPlayed;
  getPlayersChoices();
  playRound(playerSelection, computerSelection);
  getResults();
});








