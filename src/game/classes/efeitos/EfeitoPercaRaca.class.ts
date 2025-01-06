import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaRaca extends Efeito {

  constructor(
    _nome: string = "Perca a sua raca.",
    _valor: number,
  ) {
    super(_nome, _valor);
  }

  public usar(jogador: Jogador): void {
    jogador.raca = null;
  }
}