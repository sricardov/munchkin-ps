
import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoAlterarNivel extends Efeito {

  constructor(
    _nome: string = "Alterar nível",
    _valor: number,
    protected _alteracao: number,
  ) {
    super(_nome, _valor);
  }

  usar(jogador: Jogador): void {
    if (this._alteracao > 0) {
      console.log(`Nível do jogador ${jogador.nome} aumentado em ${this._alteracao}`);
      jogador.ganharNivel(this._alteracao);
    } else {
      console.log(`Nível do jogador ${jogador.nome} diminuído em ${this._alteracao}`);
      jogador.perderNivel(this._alteracao);
    }
  }
}