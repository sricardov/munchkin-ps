import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export abstract class Efeito {

  constructor(
    private _nome: string, 
    private _valor: number
  ) { }

  get nome() {
    return this._nome;
  }

  get valor() {
    return this._valor;
  }

  abstract usar(jogador: Jogador): void; // OK
}
