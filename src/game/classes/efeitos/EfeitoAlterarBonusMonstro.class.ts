import { Efeito } from "../Efeito.class";
import { Monstro } from "../Monstro.class";

export class EfeitoAlterarBonusMonstro extends Efeito {

  constructor(
    _nome: string = "Altera o nível do monstro",
    _valor: number,
    protected _alteracao: number,
  ) {
    super(_nome, _valor);
  }

  usar(monstro: Monstro): void {
    if (this._alteracao > 0) {
      console.log(`Bonus do monstro ${monstro.nome} aumentado em ${this._alteracao}`);
      monstro.ganharBonus(this._alteracao);
    } else {
      console.log(`Bonus do monstro ${monstro.nome} diminuído em ${this._alteracao}`);
      monstro.perderBonus(this._alteracao);
    }
  }
}