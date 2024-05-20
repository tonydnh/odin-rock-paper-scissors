let humanScore = 0
let computerScore = 0

playRound(getHumanChoice(), getComputerChoice())
console.log(`Your score: ${humanScore}`)
console.log(`Computer's score: ${computerScore}`)


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()

    if (humanChoice === computerChoice) {
        console.log('It\'s a draw!')
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
               humanChoice === 'Paper' && computerChoice === 'Rock' ||
               humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
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