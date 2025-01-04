import { Luta } from "./Luta.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Combate {
    public lutas: Luta[];
    public jogo: Jogo;

    constructor(jogo: Jogo) {
        this.lutas = [];
        this.jogo = jogo;
    }

    public calcularResultado(): boolean {
        let resultado: boolean = true;
        this.lutas.forEach(luta => {
            if (!luta.calcularResultado()) {
                resultado = false;
            }
        });
        return resultado;
    }

    //public pedirAjuda(jogador: Jogador, barganha: number): boolean {

}
