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
    let choice = window.prompt('Your Choice')
    choice = choice.toLowerCase()
    return choice
}

function playRound(humanChoice, computerChoice) {

    // Dois iguas = empate
    if (humanChoice === computerChoice) {
        return 'Empate'
    }
    // pedra - papel = papel
    else if (humanChoice == 'pedra' && computerChoice == 'papel') {
        return 'computador'
    }
    // pedra - tesoura = pedra
    else if (humanChoice == 'pedra' && computerChoice == 'tesoura') {
        return 'humano'
    }  
    // papel - tesoura = tesoura
    else if (humanChoice == 'papel' && computerChoice == 'tesoura') {
        return 'computador'
    }
    // papel - pedra = papel
    else if (humanChoice == 'papel' && computerChoice == 'pedra') {
        return 'humano'
    }
    // tesoura - papel = tesoura
    else if (humanChoice == 'tesoura' && computerChoice == 'papel') {
        return 'humano'
    }
    // tesoura - pedra = pedra
    else if (humanChoice == 'tesoura' && computerChoice == 'pedra') {
        return 'computador'
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for ( let rounds = 0; rounds <1; rounds++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection)
        if (result === 'computador') {
            computerScore++
        } else if (result === 'humano') { 
            humanScore++    
        }
        else { console.log('Empate')
            humanScore++
            computerScore++
        }

        console.log(`Rodada numero ${rounds + 1}: Seu Score ${humanScore}, Computador ${computerScore}`);
    }
    console.log(`Final: Seu Score ${humanScore}, Computador ${computerScore}`);
}

