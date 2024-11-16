export class Jogo {
    
    turnoAtual: Turno // Precisa implementar a classe Turno

    constructor() {
        console.log('Jogo criado');
    }

    iniciarJogo(numJogadores: number) {
        console.log('Jogo iniciado com ' + numJogadores + ' jogadores');
    }

    private rolarDado(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    private proximoTurno() {
        console.log('Próximo turno');
    }
    
    comprarCartaPorta() : Porta { // Precisa implementar a classe Porta
        console.log('Carta porta comprada');
    }

    comprarCartaTesouro() : Tesouro { // Precisa implementar a classe Tesouro
        console.log('Carta porta comprada');
    }

    // Acho que esse método vai para a classe Mao
    descartarCarta(carta: Carta) { // Precisa implementar a classe Carta
        console.log('Carta descartada');
    }

    saquearSala(jogador: Jogador) { // Precisa implementar a classe Jogador
        console.log('Saqueando sala');
    }

    private matarJogador(jogador: Jogador) { // Precisa implementar a classe Jogador
        console.log('Jogador morto');
    }

    // Acho que esse método foi para a classe Baralho
    private reporBaralho(baralho: Baralho) { // Precisa implementar a classe Baralho
        console.log('Baralho reposto');
    }

    private verificarVencedor() : Jogador { // Precisa implementar a classe Jogador
        console.log('Verificando vencedor');
    }

    private verificarCartasMao(mao: Mao) { // Precisa implementar a classe Mao
        console.log('Verificando cartas na mão');
    }

    private encerrarJogo(vencedor: Jogador) { // Precisa implementar a classe Jogador
        console.log('Jogo encerrado');
    }
}