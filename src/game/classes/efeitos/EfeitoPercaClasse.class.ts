import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaClasse extends Efeito {

  constructor() {
    super("Perca a sua raça e se torne humano.", 0);
  }

  public usar(jogador: Jogador): void {
    jogador.definirClasse(null);
    let classe = jogador.getClasse();
    if (classe)
      jogador.descartarCarta(classe);
  }
}