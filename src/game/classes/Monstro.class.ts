import { TipoCarta } from "../enums/TipoCarta.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";

export class Monstro extends Carta {

    nivel: number;
    tesouros: number;
    coisaRuim: string;

    constructor(
        nome: string,
        descricao: string,
        nivel: number,
        tesouros: number,
        coisaRuim: string
    ) {
        super(nome, descricao, TipoCarta.MONSTRO);
        this.nivel = nivel;
        this.tesouros = tesouros;
        this.coisaRuim = coisaRuim;
    }

    aplicarCoisaRuim(jogador: Jogador): void {
        throw new Error("Method not implemented.");
    }
}