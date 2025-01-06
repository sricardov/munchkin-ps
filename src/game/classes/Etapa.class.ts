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
            contexto.gerenciadorDeTurno.combate.iniciarCombate();

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
        let cartas = contexto.gerenciadorDeTurno.jogadorAtual.mao.verCartas()
        //checa se tem monstro
        for (let i = 0; i < cartas.length; i++) {
            if (cartas[i] instanceof Monstro) {
                indexMonstro = i;
                temMonstro = true;
            }
        }

        let querJogar = true; //esperar input do jogador caso ele queira jogar carta Monstro na mão (procurar encrenca)

        if (temMonstro && querJogar) {
            const cartaMonstro = cartas[indexMonstro]; // escolha do jogador
            if (cartaMonstro instanceof Monstro) {
                contexto.gerenciadorDeTurno.combate = new Combate(contexto.gerenciadorDeTurno.jogadorAtual, cartaMonstro);
                contexto.gerenciadorDeTurno.combate.iniciarCombate();

                contexto.gerenciadorDeTurno.descartarCarta(cartaMonstro);
                contexto.etapa = new Caridade();
                contexto.executarEtapa();
            }
        }
        else {
            contexto.etapa = new SaquearSala();
            contexto.executarEtapa();
        }

    }

}

export class SaquearSala implements EtapaState {

    rodar(contexto: Etapa): void {
        const cartaTopo = contexto.gerenciadorDeTurno.comprarCartaPorta();
        contexto.gerenciadorDeTurno.jogadorAtual.mao.adicionarCarta(cartaTopo);
        contexto.etapa = new Caridade();
        contexto.executarEtapa();
    }

}

export class Caridade implements EtapaState {

    rodar(contexto: Etapa): void {
        let numCartas = contexto.gerenciadorDeTurno.jogadorAtual.mao.verificarCartasNaMao()
        if (numCartas <= 5) {
            contexto.etapa = new AbrirPorta();
            contexto.gerenciadorDeTurno.terminarTurno();
            return;
        }
        // espera input do jogador se ele quiser usar cartas ou distribuir
        const cartasExtras = contexto.gerenciadorDeTurno.jogadorAtual.mao.verCartas().slice(5); // escolha do jogador

        if (cartasExtras.length > 0) {
            cartasExtras.forEach(carta => {
                carta.usar(contexto.gerenciadorDeTurno.jogadorAtual);
                contexto.gerenciadorDeTurno.descartarCarta(carta);
            });
        }

        if (cartasExtras.length == 0) {
            contexto.etapa = new AbrirPorta();
            contexto.gerenciadorDeTurno.terminarTurno();
            return;
        }

        const outrosJogadores = contexto.gerenciadorDeTurno.jogo.jogadores.filter(jogador => jogador !== contexto.gerenciadorDeTurno.jogadorAtual);

        // acha jogadores com menor nivel e distribui as cartas
        const menorNivel = Math.min(...outrosJogadores.map(jogador => jogador.nivel));
        const jogadoresDeMenorNivel = outrosJogadores.filter(jogador => jogador.nivel === menorNivel);

        if (contexto.gerenciadorDeTurno.jogadorAtual.nivel === menorNivel) {
            for (const carta of cartasExtras) {
                contexto.gerenciadorDeTurno.descartarCarta(carta);
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
            contexto.gerenciadorDeTurno.descartarCarta(carta);
        }

        console.log("Cartas distribuídas entre os jogadores de menor nível.");
        contexto.etapa = new AbrirPorta();
        contexto.gerenciadorDeTurno.terminarTurno();
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