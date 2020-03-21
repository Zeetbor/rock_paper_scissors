let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computerscore");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("rock")
const paper_button = document.getElementById("paper")
const scissors_button = document.getElementById("scissors")

function computerPlay() {
  const possibleMoves = ["Rock", "Paper", "Scissors"];
  return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
};

/*
function game() {
  let rounds = 5;
  for (var rounds = 1; rounds <= 5; rounds++) {    */
    function playRound(playerSelection){
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playerSelection);
        switch(playerSelection + computerSelection) {
          case"PaperRock":
          case"ScissorsPaper":
          case"RockScissors":
            win(playerSelection, computerSelection);
            break;
          case"RockPaper":
          case"PaperScissors":
          case"ScissorsRock":
            loss(playerSelection, computerSelection);
            break;
          case"PaperPaper":
          case"ScissorsScissors":
          case"RockRock":
            draw(playerSelection, computerSelection);
            break;
        }
    }

    /*
            }; console.log(playRound());
          }; return(score(playerScore, computerScore));
        }; console.log(game());
    */


function win(playerSelection, computerSelection){
  const playerSelection_button = document.getElementById(playerSelection);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${playerSelection} beats ${computerSelection}. You win!`;  //CS6 instead of combining strings
  playerSelection_button.classList.add('green-glow');
  setTimeout(() => { playerSelection_button.classList.remove('green-glow') }, 1000);
}

function loss(playerSelection, computerSelection){
  computerScore++
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${playerSelection} loses to ${computerSelection}. You lose...`;
}

function draw(playerSelection, computerSelection){
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${playerSelection} equals ${computerSelection}. It's a tie.`;
}

function score(playerScore, computerScore) {
  results = "Final Scores - You scored " + playerScore +
  " points. Computer scored " + computerScore + " points.";
    if (playerScore > computerScore) {
      return results + " You won the game!"
    } else if (playerScore == computerScore) {
      return results + "It ended a tie!"
    }
    else {
      return results + " You lost the game."
    }; return score();
  };


const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
  playRound("Rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener ("click", function () {
  playRound("Paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener ("click", function () {
  playRound("Scissors");
});
