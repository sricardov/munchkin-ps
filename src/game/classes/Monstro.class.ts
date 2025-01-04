import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";
import { Jogo } from "./Jogo.class";

export class Monstro extends CartaPorta {

    nivel: number;
    tesouros: number;
    coisaRuim: string;

    constructor(
        nome: string,
        descricao: string,
        nivel: number,
        tesouros: number,
        coisaRuim: string,
        efeitos: Efeito[] = []
    ) {
        super(nome, descricao, TipoCarta.MONSTRO, efeitos);
        this.nivel = nivel;
        this.tesouros = tesouros;
        this.coisaRuim = coisaRuim;
    }

    aplicarCoisaRuim(jogo: Jogo, jogador: Jogador): void { // chamar metodo usar do efeito
        this.efeitos.forEach((efeito) => {
            efeito.usar(jogo, jogador);
        });
    }
}