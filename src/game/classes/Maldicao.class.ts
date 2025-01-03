import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";

export class Maldicao extends CartaPorta {
    constructor(nome: string, descricao: string, efeitos: Efeito[] = []) {
        super(nome, descricao, TipoCarta.MALDICAO, efeitos);
    }

    public sofrerMaldicao(): void {} // chamar metodo usar de efeito no proprio jogador
    
    public aplicarMaldicao(jogador: Jogador) { // chamar metodo usar de efeito em um outro jogador
        throw new Error("Método não implementado");
    }
}