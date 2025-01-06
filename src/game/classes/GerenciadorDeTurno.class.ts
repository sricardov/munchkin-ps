import { AbrirPorta, Etapa } from "./Etapa.class";
import { Carta } from "./Carta.class";
import { Combate } from "./Combate.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
// import { Maldicao } from "./Maldicao.class";
import { Monstro } from "./Monstro.class";

export class GerenciadorDeTurno {
    private _combate: Combate | null;
    private _etapa: Etapa; 
    private _turno: number = 0; 

    constructor(
        private _jogadorAtual: Jogador, 
        private _jogo: Jogo
    ) { 
        this._combate = null;
        this._etapa = new Etapa(this, new AbrirPorta());
    }

    get jogadorAtual(): Jogador {
        return this._jogadorAtual;
    }

    set jogadorAtual(jogador: Jogador) {
        this._jogadorAtual = jogador;
    }

    get contagem(): number {
        return this._turno;
    }

    incrementaContagemTurno(): void {
        this._turno++;  
    }

    get jogo(): Jogo {
        return this._jogo;
    }

    get etapa(): Etapa {
        return this._etapa;
    }

    set combate(combate: Combate) {
        this._combate = combate;
    }

    get combate(): Combate | null {
        return this._combate;
    }

    iniciarTurno() {
        this._etapa.executarEtapa();
    }

    comprarCartaPorta(): Carta {
        return this._jogadorAtual.comprarCartaPorta();
    }

    comprarCartaTesouro(): Carta {
        return this._jogadorAtual.comprarCartaTesouro();
    }

    colocarNaMao(carta: Carta) {
        this._jogadorAtual.colocarNaMao(carta);
    }

    descartarCarta(carta: Carta) {
        this._jogadorAtual.descartarCarta(carta);
    }

    // _realizarCombate(monstro: Monstro): void {
    //     const combate = new Combate(this.jogadorAtual, monstro);
    //     this.combates.push(combate);
    //     //espera input dos jogadores se quiserem usar itens de uso unico (consumiveis, maldicoes, etc)
    //     //exemplo de jogadores e cartas jogadas (apagar depois):
    //     let j1 = this.jogo.jogadores[0];
    //     let j2 = this.jogo.jogadores[1];
    //     let c1 = this.jogo.baralhoTesouros.baralho[2];
    //     let c2 = this.jogo.baralhoTesouros.baralho[3];
    //     let c3 = this.jogo.baralhoTesouros.baralho[5]
    //     const cartasUtilizadas: [Jogador, Carta][] = [[j1,c1],[j1,c2],[j2,c3]]
        
    //     for (const [jogador, carta] of cartasUtilizadas) {
    //         jogador.descartarCarta(carta);
    //         carta.usar(this.jogadorAtual);
    //     }

    //     const ganhou = combate.calcularResultado()
    //     if (ganhou) {
    //         this._resgatarRecompensas(monstro, this.jogadorAtual)
    //         this.jogadorAtual.ganharNivel(1); // sobe o jogador de nível
    //     } else {
    //         monstro.aplicarCoisaRuim(this.jogadorAtual);
    //     }
    // }

    // _resgatarRecompensas(monstro: Monstro, jogador: Jogador): void {
    //     for (let i = 0; i < monstro.tesouros; i++) {
    //         const tesouro = this.jogo.baralhoTesouros.comprar();
    //         if (tesouro) {
    //             jogador.receberTesouro(tesouro);
    //         }
    //     }
    // }

    terminarTurno(): void {
        this.incrementaContagemTurno();

        const nextPlayerIndex = this.contagem % this.jogo.jogadores.length;
        this.jogadorAtual = this.jogo.jogadores[nextPlayerIndex];
        console.log(`Turno terminado. Próximo jogador: ${this.jogadorAtual.nome}. Turno atual: ${this.contagem}`);

        this.iniciarTurno();

    } // troca o jogadorAtual, reseta a etapa e incrementa a contagem

}
