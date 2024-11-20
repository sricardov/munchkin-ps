import { Jogador } from "./Jogador.class";

export class Jogo {
    numJogadores: number;

    constructor(numJogadores: number) {
        this.numJogadores = numJogadores
    }

    private verificarVencedor(): Jogador {
        throw new Error("Method not implemented.");
    }
    
    private encerrarJogo(vencedor: Jogador) {
        throw new Error("Method not implemented.");
    }
}