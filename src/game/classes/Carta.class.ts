import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export abstract class Carta {

  constructor(
    protected _nome: string,
    protected _descricao: string,
    protected _imagem: string,
    protected _efeitos: Efeito[] = []
  ) { }

  public usar(jogador: Jogador): void { // OK
    console.log(`Usando a carta: ${this._nome}`);

    if (this._efeitos.length > 0) {
      console.log(`Ativando os efeitos da carta "${this._nome}":`);
      this._efeitos.forEach((efeito) => efeito.usar(jogador));
    } else {
      console.log(`A carta "${this._nome}" não possui efeitos.`);
    }
  }

  get nome(): string { // OK
    return this._nome;
  }

  // adicionarEfeito(jogador: Jogador) {
  //   if (this.efeitos.length > 0)
  //     jogador.adicionarEfeito(this.efeitos);
  // }

  // removerEfeito(jogador: Jogador) {
  //   if (this.efeitos.length > 0)
  //     jogador.removerEfeito(this.efeitos);
  // }
}
