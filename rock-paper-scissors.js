playGame()

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let winner = playRound(getHumanChoice(), getComputerChoice())
        if (winner === 1) {
            humanScore++
        } else if (winner === 2) {
            computerScore++
        }
    }

    console.log(`Your wins: ${humanScore}\nComputer wins: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log('You won the game!')
    } else if (humanScore < computerScore) {
        console.log('Computer won the game!')
    } else {
        console.log('The game ends in a draw!')
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()

    if (humanChoice === computerChoice) {
        console.log('It\'s a draw!')
        return 0
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
               humanChoice === 'Paper' && computerChoice === 'Rock' ||
               humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return 1
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        return 2
    }
}

function getHumanChoice() {
    let choice = ''
    while (!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) {
        choice = prompt('Choose between rock, paper, or scissors').toLowerCase().trim()
    }
    return choice
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return 'rock'
    } else if (choice === 1) {
        return 'paper'
    }
    return 'scissors'
}