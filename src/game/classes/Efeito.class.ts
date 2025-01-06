import { Jogador } from "./Jogador.class";
import { Monstro } from "./Monstro.class";

export abstract class Efeito {

  constructor(
    protected _nome: string, 
    protected _valor: number
  ) { }

  get nome() {
    return this._nome;
  }

  get valor() {
    return this._valor;
  }

  abstract usar(alvo: Jogador | Monstro): void; // OK
}
