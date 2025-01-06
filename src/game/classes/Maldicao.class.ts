import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";

export class Maldicao extends CartaPorta {
    constructor(
        _nome: string, 
        _descricao: string, 
        _imagem: string, 
        _efeitos: Efeito[] = []
    ) {
        super(_nome, _descricao, _imagem, _efeitos);
    }

    aplicarMaldicao(jogador: Jogador) {
        this._efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}