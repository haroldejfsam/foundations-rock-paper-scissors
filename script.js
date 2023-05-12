const choices = ["rock", "paper", "scissors"];


function getComputerChoice(arr) {
   let randomIndex = Math.floor(Math.random() * arr.length);
   console.log(arr[randomIndex]);
   return arr[randomIndex];
}

getComputerChoice(choices)