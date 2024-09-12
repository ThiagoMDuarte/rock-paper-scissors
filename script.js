const totalRodadas = 5
let rodadaAtual = 0
let placarHumano = 0
let placarComputador = 0

const placar = document.querySelector('.placar')

const buttons = document.querySelectorAll("button.jogada");

buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        if (rodadaAtual <= totalRodadas) {
            const humanChoice = event.target.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);

            console.log(`Rodada ${rodadaAtual + 1}`);
            console.log(`Jogada humano: ${humanChoice}`);
            console.log(`Jogada computador: ${computerChoice}`);
            console.log(`Resultado: ${result}`);

            let pontosRodada = document.createElement("li")
            pontosRodada.textContent = `Rodada: ${result}`
            placar.appendChild(pontosRodada)

            // Atualizar o placar
            if (result === 'humano') {
                placarHumano++;
            } else if (result === 'computador') {
                placarComputador++;
            }

            let placarRodada = document.createElement('span')
            placarRodada.textContent = `Humano ${placarHumano} - ${placarComputador} Computador`
            placar.appendChild(placarRodada)


            rodadaAtual++;

            // Verifica se o jogo acabou
            if (rodadaAtual >= totalRodadas) {
                let resultadoFinal = document.createElement('p')

                if (placarHumano > placarComputador) {
                    resultadoFinal.textContent = "O humano venceu o jogo!"
                    placar.appendChild(resultadoFinal)
                } else if (placarHumano < placarComputador) {
                    resultadoFinal.textContent = "O Computador venceu o jogo!"
                    placar.appendChild(resultadoFinal)
                } else {
                    resultadoFinal.textContent = "O jogo terminou em empate!"
                    placar.appendChild(resultadoFinal)
                }
            } /* Esse else fecha o if la de Cima esse => 
                if (rodadaAtual <= totalRodadas) { */
        } // Se nao tiver mais rodadas roda esse else 
        else {
            let recarregar = document.createElement('span')
            recarregar.textContent = "O jogo terminou. Recarregue a página para jogar novamente."
            placar.appendChild(recarregar)
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
