const buttons = document.querySelectorAll("button.jogada");

buttons.forEach(button => {
    button.addEventListener("click", function (event) {

        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`Jogada humano: ${humanChoice}`);
        console.log(`Jogada computador: ${computerChoice}`);
        console.log(`Quem ganhou: ${result}`);
    });
});


function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// Retorna quem Ganha a Rodada
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Empate';
    }
    if (
        (humanChoice === 'pedra' && computerChoice === 'tesoura') ||
        (humanChoice === 'papel' && computerChoice === 'pedra') ||
        (humanChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return 'humano';
    } else {
        return 'computador';
    }
}
