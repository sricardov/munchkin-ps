import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";
import { CartaTesouro } from "./CartaTesouro.class";

export class Monstro extends CartaPorta {


    constructor(
        _nome: string,
        _descricao: string,
        _imagem: string,
        _efeitos: Efeito[] = [],
        protected _nivel: number,
        protected _bonus: number,
        protected _experiencia: number,
        protected _tesouros: CartaTesouro,
        protected _coisaRuim: string,
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

    ganharBonus(bonus: number): void {
        this._bonus += bonus;
    }

    perderBonus(bonus: number): void {
        this._bonus -= bonus;
    }

    aplicarCoisaRuim(jogador: Jogador): void { // chamar metodo usar do efeito
        this._efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}