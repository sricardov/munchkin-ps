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
            contexto.etapa = new ProcurarEncrenca();
            contexto.executarEtapa();
        }
        else if (cartaTopo instanceof Maldicao) {
            cartaTopo.aplicarMaldicao(contexto.gerenciadorDeTurno.jogadorAtual);
            contexto.gerenciadorDeTurno.descartarCarta(cartaTopo);
        }
        else {
            contexto.gerenciadorDeTurno.colocarNaMao(cartaTopo);

            // const querJogar = //esperar input do jogador se ele quiser jogar a carta que recebeu
            // if (querJogar) {
            //     alvo = // perguntar o alvo da carta
            //     cartaTopo.usar(alvo)
            //  contexto.gerenciadorDeTurno.descartarCarta(cartaTopo);
            // }
        }

        if (cartaTopo instanceof Monstro) contexto.etapa = new ProcurarEncrenca();
        else contexto.etapa = new ();

    }

}

export class ProcurarEncrenca implements EtapaState {

    rodar(contexto: Etapa): void {
        contexto.gerenciadorDeTurno.combate!.iniciarCombate();
    }

}

export class SaquearSala implements EtapaState {

    rodar(contexto: Etapa): void {
        throw new Error("Method not implemented.");
    }

}

export class Caridade implements EtapaState {

    rodar(contexto: Etapa): void {
        throw new Error("Method not implemented.");
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