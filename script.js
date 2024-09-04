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
    if (humanChoice === computerChoice) 
        return console.log('Empate')

    // pedra - papel = papel
    else if (humanChoice == 'pedra' && computerChoice == 'papel')   
        return console.log('Papel ganhou 1')

    // pedra - tesoura = pedra
    else if (humanChoice == 'pedra' && computerChoice == 'tesoura')
        return console.log('Pedra ganhou 2')

    // papel - tesoura = tesoura
    else if (humanChoice == 'papel' && computerChoice == 'tesoura')
        return console.log('Tseoura ganhou 3')

    // papel - pedra = papel
    else if (humanChoice == 'papel' && computerChoice == 'pedra')
        return console.log('Papel ganhou 4')

    // tesoura - papel = tesoura
    else if (humanChoice == 'tesoura' && computerChoice == 'papel')
        return console.log('Tesoura ganhou 5')

    // tesoura - pedra = pedra
    else if (humanChoice == 'tesoura' && computerChoice == 'pedra')
        return console.log('Pedra ganhou 6')
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)