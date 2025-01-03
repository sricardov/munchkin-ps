import { Jogador } from "./Jogador.class";
import { Monstro } from "./Monstro.class";

export class Luta {

    public monstro: Monstro;
    public jogador: Jogador;

    constructor(monstro: Monstro, jogador: Jogador) {
        this.monstro = monstro;
        this.jogador = jogador
    }

    public fugir(): boolean {
        // rolar dado 
        // ver fuga do jogador
        // 1,2,3,4 = não foge, caso contrario foge.
        throw new Error("Method not implemented.");
    }

}