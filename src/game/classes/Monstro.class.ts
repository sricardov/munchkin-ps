import { TipoCarta } from "../enums/TipoCarta.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";

export class Monstro extends Carta {
    constructor(
        nome: string,
        descricao: string,
        nivel: number,
        tesouros: number,
        coisaRuim: string
    ) {
        super(nome, descricao, TipoCarta.MONSTRO);
    }

    aplicarCoisaRuim(jogador: Jogador): void {
        throw new Error("Method not implemented.");
    }
}