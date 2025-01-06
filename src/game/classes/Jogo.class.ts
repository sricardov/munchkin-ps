import { BaralhoPortas } from "./BaralhoPortas.class";
import { BaralhoTesouros } from "./BaralhoTesouros.class";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { Dado } from "./Dado.class";
import { GerenciadorDeTurno } from "./GerenciadorDeTurno.class";
import { Jogador } from "./Jogador.class";

export class Jogo {

    private static instance: Jogo | null = null;

    private _numJogadores: number;
    private _gerenciadorTurno: GerenciadorDeTurno;
    private _baralhoTesouros: BaralhoTesouros;
    private _baralhoPortas: BaralhoPortas;
    private _dado: Dado;
    private _fimDeJogo: boolean;

    private constructor(
        private _jogadores: Jogador[],
    ) {
        this._numJogadores = _jogadores.length;
        this._gerenciadorTurno = new GerenciadorDeTurno(_jogadores[0], this);
        this._baralhoTesouros = new BaralhoTesouros();
        this._baralhoPortas = new BaralhoPortas();
        this._dado = new Dado();
        this._fimDeJogo = false;
    }

    public static getInstance(jogadores: Jogador[]): Jogo {
        if (this.instance === null) {
            this.instance = new Jogo(jogadores);
        }
        return this.instance;
    }

    get jogadores(): Jogador[] {
        return this._jogadores;
    }

    get baralhoPortas(): BaralhoPortas {
        return this._baralhoPortas;
    }

    get baralhoTesouros(): BaralhoTesouros {
        return this._baralhoTesouros;
    }

    comprarCartaPorta(): Carta {
        return this._baralhoPortas.comprar();
    }

    comprarCartaTesouro(): Carta {
        return this._baralhoTesouros.comprar();
    }

    descartarCarta(carta: Carta) {
        if (carta instanceof CartaPorta) {
            this._baralhoPortas.descartar(carta);
        }
        else {
            this._baralhoTesouros.descartar(carta);
        }
    }

    private gameLoop() {
        while (!this._fimDeJogo) {
            const vencedor = this.verificarVencedor();
            if (vencedor != null) {
                this.encerrarJogo(vencedor);
                this._fimDeJogo = true;
            }
            else {
                this._gerenciadorTurno.iniciarTurno();
            }
        }
    }

    private verificarVencedor(): Jogador | null {
        for (const jogador of this._jogadores) {
            if (jogador.nivel === 10) {
                return jogador;
            }
        }
        return null;
    }

    private encerrarJogo(vencedor: Jogador) {
        console.log(`${vencedor.nome} ganhou o jogo!`);
    }
}
