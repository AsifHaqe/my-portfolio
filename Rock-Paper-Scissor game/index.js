document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const resultEl = document.getElementById("result");
    const playerScoreEl = document.getElementById("user-score");
    const computerScoreEl = document.getElementById("computer-score");

    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
        const choices = ["rock", "paper", "scissor"];
        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie";
        }

        const playerWins =
            (playerSelection === "rock" && computerSelection === "scissor") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissor" && computerSelection === "paper");

        if (playerWins) {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            return `Player Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            return `Computer Win! ${computerSelection} beats ${playerSelection}`;
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const result = playRound(button.id, computerPlay());
            resultEl.textContent = result;
        });
    });
});