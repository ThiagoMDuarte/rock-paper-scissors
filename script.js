const totalRodadas = 5
let rodadaAtual = 0
let placarHumano = 0
let placarComputador = 0

const buttons = document.querySelectorAll("button.jogada");

buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        if (rodadaAtual <= totalRodadas) {
            const humanChoice = event.target.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);

            console.log(`Rodada ${rodadaAtual}`);
            console.log(`Jogada humano: ${humanChoice}`);
            console.log(`Jogada computador: ${computerChoice}`);
            console.log(`Resultado: ${result}`);

            // Atualizar o placar
            if (result === 'humano') {
                placarHumano++;
            } else if (result === 'computador') {
                placarComputador++;
            }

            console.log(`Placar: Humano ${placarHumano} - ${placarComputador} Computador`);

            rodadaAtual++;

            // Verifica se o jogo acabou
            if (rodadaAtual > totalRodadas) {
                if (placarHumano > placarComputador) {
                    console.log("O humano venceu o jogo!");
                } else if (placarHumano < placarComputador) {
                    console.log("O computador venceu o jogo!");
                } else {
                    console.log("O jogo terminou em empate!");
                }
            } /* Esse else fecha o if la de Cima esse => 
                if (rodadaAtual <= totalRodadas) { */
        } else {
            console.log("O jogo terminou. Recarregue a página para jogar novamente.");
        }
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
        return 'empate';
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
