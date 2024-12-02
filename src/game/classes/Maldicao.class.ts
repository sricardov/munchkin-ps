import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";

export class Maldicao extends CartaPorta {
    constructor(nome: string, descricao: string, efeitos: Efeito[] = []) {
        super(nome, descricao, TipoCarta.MALDICAO, efeitos);
    }

    public sofrerMaldicao(): void {}
    
    public aplicarMaldicao(jogador: Jogador) {
        throw new Error("Método não implementado");
    }
}