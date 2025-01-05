import { Etapa } from "../enums/Etapa.enum";
import { BaralhoPortas } from "./BaralhoPortas.class";
import { BaralhoTesouros } from "./BaralhoTesouros.class";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
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
    fimDeJogo: boolean;

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

        this.numJogadores = jogadores.length;
        this.jogadores = jogadores;
        this.gerenciadorTurno = new GerenciadorDeTurno(
            jogadores[0], 
            Etapa.ABRIR_PORTA, 
            0,
            [],
            this);
        this.baralhoTesouros = new BaralhoTesouros([],[]);
        this.baralhoPortas = new BaralhoPortas([],[]);
        this.dado = new Dado();
        this.UI = UI;
        this.fimDeJogo = false;
        this.gameLoop();
    }

    public descartar(carta: Carta) {
        if (carta instanceof CartaPorta) {
            if (this.baralhoPortas.descarteTemCarta(carta))
                return;
            this.baralhoPortas.descartar(carta);
        }
        else {
            if (this.baralhoTesouros.descarteTemCarta(carta))
                return;
            this.baralhoTesouros.descartar(carta);
        }
    }

    private gameLoop() {
        while (!this.fimDeJogo) {
            const vencedor = this.verificarVencedor();
            if (vencedor != null) {
                this.encerrarJogo(vencedor);
                this.fimDeJogo = true;
            }
            else {
                this.gerenciadorTurno.iniciarEtapa();
            }
        }
        // desconectar jogadores e ir para o menu
        return;
    }


    private verificarVencedor(): Jogador | null {
        for (const jogador of this.jogadores) {
            if (jogador.nivel === 10) {
                return jogador;
            }
        }
        return null;
    }
    
    private encerrarJogo(vencedor: Jogador) {
        // animacao de encerramento de jogo na tela
        console.log(`${vencedor.nome} ganhou o jogo!`);
        
    }
}