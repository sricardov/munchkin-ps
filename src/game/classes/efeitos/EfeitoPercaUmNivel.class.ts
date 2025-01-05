
import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaUmNivel extends Efeito {

  constructor() {
    super("Perca um nível");
  }

  public usar(jogador: Jogador): void {
    if (jogador.nivel > 0) jogador.nivel -= 1;
  }
}