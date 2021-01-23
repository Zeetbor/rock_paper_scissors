let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;
let isGameOver = false;
let firstTo = 5;

const playerScore_span = document.querySelector("#player-score");
const computerScore_span = document.querySelector("#computerscore");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("rock")
const paper_button = document.getElementById("paper")
const scissors_button = document.getElementById("scissors")
const choose_h3 = document.querySelector(".choose")
const restartBtn = document.querySelector("#restartBtn")

const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
  if (isGameOver == false) {
    playRound("Rock");
  }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
  if (isGameOver == false) {
    playRound("Paper");
  }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
  if (isGameOver == false) {
    playRound("Scissors");
  }
});

function computerPlay() {
  const possibleMoves = ["Rock", "Paper", "Scissors"];
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
};

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);
  switch (playerSelection + computerSelection) {
    case "PaperRock":
    case "ScissorsPaper":
    case "RockScissors":
      win(playerSelection, computerSelection);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      loss(playerSelection, computerSelection);
      break;
    case "PaperPaper":
    case "ScissorsScissors":
    case "RockRock":
      draw(playerSelection, computerSelection);
      break;
  }
}

function win(playerSelection, computerSelection) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  if (firstTo > playerScore) {
    result_p.innerHTML = `${playerSelection} beats ${computerSelection}. You win!`;
  } else {
    isGameOver = true;
    finalScore(playerScore, computerScore);
  }
};

function loss(playerSelection, computerSelection) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  if (firstTo > computerScore) {
    result_p.innerHTML = `${playerSelection} loses to ${computerSelection}. You lose...`;
  } else {
    isGameOver = true;
    finalScore(playerScore, computerScore);
  };
};

function draw(playerSelection, computerSelection) {
  result_p.innerHTML = `${playerSelection} equals ${computerSelection}. It's a tie.`;
}

function finalScore(playerScore, computerScore) {
  results = `Final Scores - You scored ${playerScore} points. Computer scored ${computerScore} points.`;
  if (playerScore > computerScore) {
    result_p.innerHTML = `${results} You won the game!`
  } else {
    result_p.innerHTML = `${results} You lost the game.`
  };
  choose_h3.innerHTML = "Press Restart to play again..."
};

restartBtn.addEventListener('click', function(){
  isGameOver = false;
  computerScore = 0;
  playerScore = 0;
  computerScore_span.innerHTML = computerScore;
  playerScore_span.innerHTML = playerScore;
  result_p.innerHTML = "Ready to play?";
  choose_h3.innerHTML = "Select a button to choose your weapon!...";
})
