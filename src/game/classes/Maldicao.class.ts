import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";
import { Jogo } from "./Jogo.class";

export class Maldicao extends CartaPorta {
    constructor(nome: string, descricao: string, efeitos: Efeito[] = []) {
        super(nome, descricao, TipoCarta.MALDICAO, efeitos);
    }

    public sofrerMaldicao(): void {} // método desnecessario?

    public aplicarMaldicao(jogador: Jogador) {
        this.efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}