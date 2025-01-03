import { Jogador } from "./Jogador.class";

export class Jogo { // falta adicionar os outros atributos (lista de cartas e tal)
    numJogadores: number;

    constructor(numJogadores: number) {
        this.numJogadores = numJogadores
    }

    private verificarVencedor(): Jogador { // sempre que um jogador mudar de nivel, verificar se tem alguem no nivel 10 e encerrar o jogo se tiver
        throw new Error("Method not implemented.");
    }
    
    private encerrarJogo(vencedor: Jogador) {
        throw new Error("Method not implemented.");
    }
}