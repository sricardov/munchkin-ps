import { Combate } from "./Combate.class";
import { GerenciadorDeTurno } from "./GerenciadorDeTurno.class";
import { Maldicao } from "./Maldicao.class";
import { Monstro } from "./Monstro.class";

export interface EtapaState {
    rodar(contexto: Etapa): void;
}

export class AbrirPorta implements EtapaState {

    rodar(contexto: Etapa): void {
        const cartaTopo = contexto.gerenciadorDeTurno.comprarCartaPorta();

        if (cartaTopo instanceof Monstro) {
            contexto.gerenciadorDeTurno.combate = new Combate(contexto.gerenciadorDeTurno.jogadorAtual, cartaTopo);
            // contexto.gerenciadorDeTurno.combate.iniciarCombate();

            contexto.gerenciadorDeTurno.descartarCarta(cartaTopo);
            contexto.etapa = new Caridade();
            contexto.executarEtapa();
        } else if (cartaTopo instanceof Maldicao) {
            cartaTopo.aplicarMaldicao(contexto.gerenciadorDeTurno.jogadorAtual);
            contexto.gerenciadorDeTurno.descartarCarta(cartaTopo);
            contexto.etapa = new Caridade();
            contexto.executarEtapa();
        } else {
            contexto.gerenciadorDeTurno.colocarNaMao(cartaTopo);

            // se o jogador quiser arrumar encrenca, joga uma carta monstro
            // senão, saquear sala
            
            // const querJogar = //esperar input do jogador se ele quiser jogar a carta que recebeu
            // if (querJogar) {
            //     alvo = // perguntar o alvo da carta
            //     cartaTopo.usar(alvo)
            //  contexto.gerenciadorDeTurno.descartarCarta(cartaTopo);
            // }
        }

    }

}

export class ProcurarEncrenca implements EtapaState {

    rodar(contexto: Etapa): void {
        let temMonstro = false
        let indexMonstro = 0
        let cartas = this.jogadorAtual.mao.verCartas()
        for (let i = 0; i < cartas.length; i++) {
            if (cartas[i] instanceof Monstro) {
                indexMonstro = i;
                temMonstro = true;
            }
        }

        if (temMonstro) {
            //esperar input do jogador caso ele queira jogar carta Monstro na mão (procurar encrenca)
            const querJogar = true
            const cartaMonstro = cartas[indexMonstro]; // escolha do jogador
            if (querJogar && cartaMonstro instanceof Monstro) {
                this._descartarCartaJogadorAtual(cartaMonstro);
                this._realizarCombate(cartaMonstro);
            }
        }

        this.etapa = Etapa.SAQUEAR_SALA;
    }

}

export class SaquearSala implements EtapaState {

    rodar(contexto: Etapa): void {
        const cartaTopo = this.jogo.baralhoPortas.comprar()
        this.jogadorAtual.mao.adicionarCarta(cartaTopo);
        this.etapa = Etapa.CARIDADE;
        return cartaTopo;
    }

}

export class Caridade implements EtapaState {

    rodar(contexto: Etapa): void {
        let numCartas = this.jogadorAtual.mao.verificarCartasNaMao()
        if (numCartas <= 5) {
            this.terminarTurno()
            return;
        }
        // espera input do jogador se ele quiser usar cartas ou distribuir
        const cartasExtras = this.jogadorAtual.mao.verCartas().slice(5); // escolha do jogador

        if (cartasExtras.length > 0) {
            cartasExtras.forEach(carta => {
                carta.usar(this.jogadorAtual);
                this._descartarCartaJogadorAtual(carta);
            });
        }

        if (cartasExtras.length == 0) {
            this.terminarTurno()
            return;
        }

        const outrosJogadores = this.jogo.jogadores.filter(jogador => jogador !== this.jogadorAtual);

        // acha jogadores com menor nivel e distribui as cartas
        const menorNivel = Math.min(...outrosJogadores.map(jogador => jogador.nivel));
        const jogadoresDeMenorNivel = outrosJogadores.filter(jogador => jogador.nivel === menorNivel);

        if (this.jogadorAtual.nivel === menorNivel) {
            for (const carta of cartasExtras) {
                this._descartarCartaJogadorAtual(carta);
            }
            console.log("Cartas descartadas por ser jogador de menor nível.");
        }

        let index = 0;
        for (const carta of cartasExtras) {
            const jogador = jogadoresDeMenorNivel[index];
            if (jogador.mao.verificarCartasNaMao() < 5)
                jogador.mao.adicionarCarta(carta);
            index = (index + 1) % jogadoresDeMenorNivel.length;
        }

        for (const carta of cartasExtras) {
            this._descartarCartaJogadorAtual(carta);
        }

        console.log("Cartas distribuídas entre os jogadores de menor nível.");
        this.terminarTurno()
        return;
    }

}

export class Etapa {

    private _etapa: EtapaState;

    constructor(
        private _gerenciadorDeTurno: GerenciadorDeTurno,
        etapa: EtapaState
    ) {
        this._etapa = etapa;
    }

    get etapa(): EtapaState {
        return this._etapa;
    }

    set etapa(etapa: EtapaState) {
        this._etapa = etapa;
    }

    get gerenciadorDeTurno(): GerenciadorDeTurno {
        return this._gerenciadorDeTurno;
    }

    executarEtapa(): void {
        this._etapa.rodar(this);
    }
}