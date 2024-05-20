const text = document.querySelector("#text");
const humanScoreText = document.querySelector("#your-score");
const computerScoreText = document.querySelector("#computer-score");

playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const btns = document.querySelector("#btns");

    btns.addEventListener("click", (e) => {
        let result = 0;
        const targetId = e.target.id;

        if (targetId === "rock") {
            result = playRound("Rock", getComputerChoice());
        } else if (targetId === "paper") {
            result = playRound("Paper", getComputerChoice());
        } else if (targetId === "scissors") {
            result = playRound("Scissors", getComputerChoice());
        }

        // Reset game state internally and visually so a new game starts on next button press
        if (humanScore === 5 || computerScore === 5) {
            humanScoreText.textContent = "Your score: 0";
            computerScoreText.textContent = "Computer score: 0";
            text.style.color = "black";
            humanScore = 0;
            computerScore = 0;
        }

        if (result === 1) {
            humanScoreText.textContent = `Your score: ${++humanScore}`;
        } else if (result === 2) {
            computerScoreText.textContent = `Computer score: ${++computerScore}`;
        }

        if (humanScore === 5) {
            text.textContent = "You won the game!";
            text.style.color = "green";
        } else if (computerScore === 5) {
            text.textContent = "Computer won the game.";
            text.style.color = "red";
        }
    });
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        text.textContent = "It's a draw!";
        return 0;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
               humanChoice === "Paper" && computerChoice === "Rock" ||
               humanChoice === "Scissors" && computerChoice === "Paper") {
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return 1;
    } else {
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        return 2;
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    }
    return "Scissors";
}