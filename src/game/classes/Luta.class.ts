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
        throw new Error("Method not implemented.");
    }

}