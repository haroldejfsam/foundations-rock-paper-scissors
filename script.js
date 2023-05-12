const choices = ["rock", "paper", "scissors"];


function getComputerChoice(arr) {
   let randomIndex = Math.floor(Math.random() * arr.length);
   console.log(`Computer chose ${arr[randomIndex]}`);
   console.log(`Player chose ${playerSelection}`);
   return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "You win! Rock beats Scissors"
            break;
        case (playerSelection === "rock" && computerSelection === "paper"):
            return "You Lose! Paper beats Rock"
            break;
        case (playerSelection === "rock" && computerSelection === "rock"):
            return "It's a tie! You both chose Rock"
            break;
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "You Lose! Scissors beats Paper"
            break;
        case (playerSelection === "paper" && computerSelection === "paper"):
            return "It's a tie! You both chose Paper"
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "You win! Paper beats Rock"
            break;
        case (playerSelection === "scissors" && computerSelection === "scissors"):
            return "It's a tie! You both chose Scissors"
            break;
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win! Scissors beats Paper"
            break;
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You Lose! Rock beats Scissors"
            break;            
    
        default:
            return "You haven't selected an appropriate answer"
            break;
    }
    
}

const playerSelection = prompt("What's your move?");
const computerSelection = getComputerChoice(choices);
console.log(playRound(playerSelection, computerSelection));
