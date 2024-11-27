import { Etapa } from "../enums/Etapa.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";

export class GerenciadorDeTurno {
    public jogadorAtual: Jogador;
    public etapa: Etapa;
    public contagem: number;

    constructor(jogadorAtual: Jogador, etapa: Etapa, contagem: number) {
        this.jogadorAtual = jogadorAtual;
        this.etapa = etapa;
        this.contagem = contagem;
    }

    terminarTurno(): void {}

    saquearSala(): Carta {
        throw new Error("Method not implemented.");
    }

    fazerCaridade(): void {}
}
