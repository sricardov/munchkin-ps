import { Luta } from "./Luta.class";
import { Jogador } from "./Jogador.class";

export class Combate {
    public lutas: Luta[];

    constructor() {
        this.lutas = [];
    }

    public calcularResultado(): boolean { // nível monstro menos nivel jogador
        throw new Error("Method not implemented."); // precisa monstro e jogador
    }

    public pedirAjuda(jogador: Jogador, barganha: number): boolean {
        throw new Error("Method not implemented.");
    }
}
