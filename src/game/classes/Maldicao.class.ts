import { TipoCarta } from "../enums/TipoCarta.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";

export class Maldicao extends Carta {
    constructor(nome: string, descricao: string) {
        super(nome, descricao, TipoCarta.MALDICAO);
    }

    public sofrerMaldicao(): void {}
    
    public aplicarMaldicao(jogador: Jogador) {
        throw new Error("Método não implementado");
    }
}