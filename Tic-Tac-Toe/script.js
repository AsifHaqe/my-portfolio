document.addEventListener("DOMContentLoaded", () => {
    const statusDisplay = document.querySelector(".game-status");
    const cells = [...document.querySelectorAll(".cell")];
    const resetButton = document.querySelector(".restart");

    let gameActive = true;
    let currentPlayer = "X";
    let gameState = Array(9).fill("");

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => "Game ended in draw!";

    function updateStatus(message) {
        statusDisplay.textContent = message;
    }

    function handleResultValidation() {
        let roundWon = false;

        for (const [a, b, c] of winningConditions) {
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            updateStatus(winningMessage());
            gameActive = false;
            return;
        }

        if (gameState.every((cell) => cell !== "")) {
            updateStatus(drawMessage());
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus(currentPlayerTurn());
    }

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = Number(clickedCell.dataset.cellIndex);

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        handleResultValidation();
    }

    function handleRestart() {
        gameActive = true;
        currentPlayer = "X";
        gameState = Array(9).fill("");
        cells.forEach((cell) => {
            cell.textContent = "";
        });
        updateStatus(currentPlayerTurn());
    }

    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", handleRestart);
    updateStatus(currentPlayerTurn());
});