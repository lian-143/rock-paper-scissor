const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = choices[0];
  } else if (computerChoice === 1) {
    computerChoice = choices[1];
  } else if (computerChoice === 2) {
    computerChoice = choices[2];
  } else "invalid input";

  console.log("Computer choice: ", computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Make your move! Type 'rock', 'paper', or 'scissors'"
  ).toLowerCase();

  while (
    humanChoice !== choices[0] &&
    humanChoice !== choices[1] &&
    humanChoice !== choices[2]
  ) {
    humanChoice = prompt(
      "Make your move! Type 'rock', 'paper', or 'scissor'"
    ).toLowerCase();
  }
  console.log("You chose: ", humanChoice);
  return humanChoice;
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "scissor" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();
