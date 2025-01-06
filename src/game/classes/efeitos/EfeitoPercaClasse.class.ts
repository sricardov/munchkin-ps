import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaClasse extends Efeito {

  constructor(
    _nome: string = "Perca a sua classe.",
    _valor: number,
  ) {
    super(_nome, _valor);
  }

  public usar(jogador: Jogador): void {
    jogador.classe = null;
  }
}