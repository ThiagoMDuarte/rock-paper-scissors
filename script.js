function getComputerChoice() {
    const max = 3
    return Math.floor(Math.random() * max)
}

function getHumanChoice() {
    let choice = window.prompt('Your Choice', 'Rock, Paper, Scissor')
    choice = choice.toLowerCase()
    return choice
}
