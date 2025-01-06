import { CartaPorta } from "./CartaPorta.class";
import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Raca extends CartaPorta { // OK
  constructor(
    _nome: string, 
    _descricao: string, 
    _imagem: string,
    _efeitos: Efeito[] = [],
  ) {
    super(_nome, _descricao, _imagem, _efeitos);
  }

  override usar(jogador: Jogador): void {
    jogador.raca = this;
    //this.adicionarEfeito(jogador);
  }
}
