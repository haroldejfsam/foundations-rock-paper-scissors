//Initialize values
const choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let roundsWon = 0;
let roundsLost = 0;
let playAgain = false;

//Set computer move
function getComputerChoice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//Sets player choice
function setPlayerChoice() {
  playerSelection = prompt(
    "What's your move?(rock, paper or scissors)"
  ).toLowerCase();
}

//Set all players moves
function getPlayersChoices() {
  setPlayerChoice();
  console.log(`Player chose ${playerSelection}`);

  computerSelection = getComputerChoice(choices);
  console.log(`Computer chose ${computerSelection}`);
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      ++roundsWon;
      console.log("You win! Rock beats Scissors");
      return "You win! Rock beats Scissors";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      ++roundsLost;
      console.log("You Lose! Paper beats Rock");
      return "You Lose! Paper beats Rock";
      break;
    case playerSelection === "rock" && computerSelection === "rock":
      console.log("It's a tie! You both chose Rock");
      return "It's a tie! You both chose Rock";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      ++roundsLost;
      console.log("You Lose! Scissors beats Paper");
      return "You Lose! Scissors beats Paper";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      console.log("It's a tie! You both chose Paper");
      return "It's a tie! You both chose Paper";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      ++roundsWon;
      console.log("You win! Paper beats Rock");
      return "You win! Paper beats Rock";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
      console.log("It's a tie! You both chose Scissors");
      return "It's a tie! You both chose Scissors";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      ++roundsWon;
      console.log("You win! Scissors beats Paper");
      return "You win! Scissors beats Paper";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      ++roundsLost;
      console.log("You Lose! Rock beats Scissors");
      return "You Lose! Rock beats Scissors";
      break;

    default:
      console.log("Something went wrong");
      return "Something went wrong";
      break;
  }
}

// Play a 5 round game
function game() {
  for (let i = 0; i <= 4; i++) {
    getPlayersChoices();
    playRound(playerSelection, computerSelection);
    console.log(`End of round ${i + 1}`);
  }

  switch (true) {
    case roundsWon > roundsLost:
      console.log(`You won the game! Wins:${roundsWon} Losses:${roundsLost}.`);
      return `You won the game! Wins:${roundsWon} Losses:${roundsLost}.`;
      break;
    case roundsWon < roundsLost:
      console.log(`You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`);
      return `You lost the game! Wins:${roundsWon} Losses:${roundsLost}.`;
      break;
    case roundsWon === roundsLost:
      console.log(`It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`);
      return `It's a tie! Wins:${roundsWon} Losses:${roundsLost}.`;
      break;
    default:
      return "Something went wrong";
  }


}

game();




(confirm("Play again")) ? game() : alert("Thank you for playing!") 