function getHumanChoice() {
    let choice = ''
    while (!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) {
        choice = prompt('Choose between rock, paper, or scissors')
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