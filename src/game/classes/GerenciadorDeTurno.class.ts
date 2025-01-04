import { Etapa } from "../enums/Etapa.enum";
import { Carta } from "./Carta.class";
import { Combate } from "./Combate.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class GerenciadorDeTurno {
    public jogo: Jogo;
    public jogadorAtual: Jogador;
    public etapa: Etapa;
    public contagem: number;
    public combates: Combate[];

    constructor(
        jogadorAtual: Jogador, 
        etapa: Etapa, 
        contagem: number, 
        combates: Combate[],
        jogo: Jogo
    ) {
        this.jogo = jogo;
        this.jogadorAtual = jogadorAtual;
        this.etapa = etapa;
        this.contagem = contagem;
        this.combates = combates;
    }

    abrirPorta(): Carta { // olhar carta de cima do baralho e ver o que é, se não for combate ou maldição, compra a carta. se for, faz o efeito.
        throw new Error("Method not implemented.");
    }

    procurarEncrenca(): void { } // se não combateu ou sofreu maldição, usar uma carta de monstro da mão e iniciar combate com ela

    saquearSala(): Carta { // se não combateu, comprar carta de porta
        throw new Error("Method not implemented.");
    }

    fazerCaridade(): void { } // chamar metodo de Mao para ver se está dentro do limite, se nao estiver, precisa dar as cartsas e tals

    terminarTurno(): void { } // troca o jogadorAtual, reseta a etapa e incrementa a contagem

    // precisamos de um metodo para alterar a etapa do turno

}
