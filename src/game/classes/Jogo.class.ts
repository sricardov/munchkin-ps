import { BaralhoPortas } from "./BaralhoPortas.class";
import { BaralhoTesouros } from "./BaralhoTesouros.class";
import { Dado } from "./Dado.class";
import { GerenciadorDeTurno } from "./GerenciadorDeTurno.class";
import { Interface } from "./Interface.class";
import { Jogador } from "./Jogador.class";

export class Jogo { // falta adicionar os outros atributos (lista de cartas e tal)
    numJogadores: number;
    jogadores: Jogador[];
    gerenciadorTurno: GerenciadorDeTurno;
    baralhoTesouros: BaralhoTesouros;
    baralhoPortas: BaralhoPortas;
    dado: Dado;
    UI: Interface;

    constructor(
        numJogadores: number, 
        jogadores: Jogador[], 
        gerenciadorTurno: GerenciadorDeTurno, 
        baralhoTesouros: BaralhoTesouros, 
        baralhoPortas: BaralhoPortas, 
        dado: Dado,
        UI: Interface
    ) {
        if (numJogadores !== jogadores.length) {
            throw new Error("O número de jogadores não corresponde à lista de jogadores fornecida.");
        }

        this.numJogadores = numJogadores;
        this.jogadores = jogadores;
        this.gerenciadorTurno = gerenciadorTurno;
        this.baralhoTesouros = baralhoTesouros;
        this.baralhoPortas = baralhoPortas;
        this.dado = dado;
        this.UI = UI;
    }

    private verificarVencedor(): Jogador { // sempre que um jogador mudar de nivel, verificar se tem alguem no nivel 10 e encerrar o jogo se tiver
        throw new Error("Method not implemented.");
    }
    
    private encerrarJogo(vencedor: Jogador) {
        throw new Error("Method not implemented.");
    }
}