import { Luta } from "./Luta.class";
import { Jogador } from "./Jogador.class";

export class Combate {
    public lutas: Luta[];

    constructor() {
        this.lutas = [];
    }

    public calcularResultado(): boolean {
        throw new Error("Method not implemented.");
    }

    public pedirAjuda(jogador: Jogador, barganha: number): boolean {
        throw new Error("Method not implemented.");
    }
}
