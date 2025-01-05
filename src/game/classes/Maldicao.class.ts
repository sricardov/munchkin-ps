import { CartaPorta } from "./CartaPorta.class";
import { Jogador } from "./Jogador.class";
import { Efeito } from "./Efeito.class";

export class Maldicao extends CartaPorta {
    constructor(nome: string, descricao: string, imagem: string, efeitos: Efeito[] = []) {
        super(nome, descricao, imagem, efeitos);
    }

    public aplicarMaldicao(jogador: Jogador) {
        this._efeitos.forEach((efeito) => {
            efeito.usar(jogador);
        });
    }
}