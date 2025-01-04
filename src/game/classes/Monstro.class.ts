import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";
import { Jogo } from "./Jogo.class";

export class Monstro extends CartaPorta {

    nivel: number;
    tesouros: number;
    coisaRuim: string;
    experiencia: number;
    bonus: number;

    constructor(
        nome: string,
        descricao: string,
        nivel: number,
        bonus: number,
        experiencia: number,
        tesouros: number,
        coisaRuim: string,
        efeitos: Efeito[] = []
    ) {
        super(nome, descricao, TipoCarta.MONSTRO, efeitos);
        this.bonus = bonus;
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.tesouros = tesouros;
        this.coisaRuim = coisaRuim;
    }

    aplicarCoisaRuim(jogador: Jogador): void { // chamar metodo usar do efeito
        this.efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}