const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;
let optionBtn = document.querySelectorAll("button");
let displayMessage = document.getElementById("display-message");
let displayHumanScore = document.getElementById("display-human-score");
let displayComputerScore = document.getElementById("display-computer-score");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = choices[0];
  } else if (computerChoice === 1) {
    computerChoice = choices[1];
  } else if (computerChoice === 2) {
    computerChoice = choices[2];
  } else "invalid input";

  return computerChoice;
}

optionBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    let humanChoice = btn.innerText.toLowerCase();

    if (gameRound <= 5) {
      gameRound++;
      playGame(humanChoice);
    } else if (gameRound > 5) {
      determineWinner();
      disableBtn();
    }
  })
);

function playGame(humanChoice) {
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "scissor" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      displayHumanScore.textContent = `Player score: ${humanScore}`;
      displayMessage.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
      displayMessage.textContent = "It's a tie!";
    } else {
      computerScore++;
      displayComputerScore.textContent = `Computer score: ${computerScore}`;
      displayMessage.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }
  }
  playRound(humanChoice, computerSelection);
}

function determineWinner() {
  if (humanScore > computerScore) {
    displayMessage.textContent = `Congratulations! You won against the computer😍`;
  } else if (computerScore > humanScore) {
    displayMessage.textContent = `Game Over! The Computer Won😫`;
  } else {
    displayMessage.textContent = `Game Over! It's a tie😮`;
  }
}

function disableBtn() {
  optionBtn.forEach((btn) => (btn.disabled = true));
}
