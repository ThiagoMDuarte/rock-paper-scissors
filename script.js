function getComputerChoice() {
    const max = 3
    choice = Math.floor(Math.random() * max)
    if (choice == 1) {
        return 'pedra'
    }
    else if (choice == 0) {
        return 'pedra'
    } else {
        return 'papel'
    }
}

function getHumanChoice() {
    let choice = window.prompt('Your Choice', 'Rock, Paper, Scissor')
    choice = choice.toLowerCase()
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    // Dois iguas = empate
    if (humanChoice === computerChoice) {
        return console.log('Empate')
    }
    // pedra - papel = papel
    else if (humanChoice == 'pedra' && computerChoice == 'papel') {
        computerScore = ++computerScore
        return console.log('Papel ganhou')
    }
    // pedra - tesoura = pedra
    else if (humanChoice == 'pedra' && computerChoice == 'tesoura') {
        humanScore = ++humanScore
        return console.log('Pedra ganhou')
    }  
    // papel - tesoura = tesoura
    else if (humanChoice == 'papel' && computerChoice == 'tesoura') {
        computerScore = ++computerScore
        return console.log('Tseoura ganhou')
    }
    // papel - pedra = papel
    else if (humanChoice == 'papel' && computerChoice == 'pedra') {
        humanScore = ++humanScore
        return console.log('Papel ganhou')
    }
    // tesoura - papel = tesoura
    else if (humanChoice == 'tesoura' && computerChoice == 'papel') {
        humanScore = ++humanScore
        return console.log('Tesoura ganhou')
    }
    // tesoura - pedra = pedra
    else if (humanChoice == 'tesoura' && computerChoice == 'pedra') {
        computerScore = ++computerScore
        return console.log('Pedra ganhou')
    }
}
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
