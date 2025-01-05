import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";
import { Jogo } from "./Jogo.class";
import { CartaTesouro } from "./CartaTesouro.class";

export class Monstro extends CartaPorta {


    constructor(
        _nome: string,
        _descricao: string,
        _imagem: string,
        protected _nivel: number,
        protected _bonus: number,
        protected _experiencia: number,
        protected _tesouros: CartaTesouro,
        protected _coisaRuim: string,
        _efeitos: Efeito[] = []
    ) {
        super(_nome, _descricao, _imagem, _efeitos);
    }

    get nivel(): number {
        return this._nivel;
    }

    get bonus(): number {
        return this._bonus;
    }

    get experiencia(): number {
        return this._experiencia;
    }

    get tesouros(): CartaTesouro {
        return this._tesouros;
    }

    get coisaRuim(): string {
        return this._coisaRuim;
    }

    aplicarCoisaRuim(jogador: Jogador): void { // chamar metodo usar do efeito
        this._efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}