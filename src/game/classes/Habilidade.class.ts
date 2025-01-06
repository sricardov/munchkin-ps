import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";

export class Habilidade {

  constructor(
    private _nome: string, 
    private _efeito: Efeito,
  ) { }

  get nome(): string {
    return this._nome;
  }

  get efeito(): Efeito {
    return this._efeito;
  }

  usar(jogador: Jogador): void { // chamar o usar do efeito
     this._efeito.usar(jogador);
  }
}