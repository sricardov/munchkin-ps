import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaRaca extends Efeito {

  constructor() {
    super("Perca a sua raça e se torne humano.");
  }

  public usar(jogador: Jogador): void {
    jogador.definirRaca(null);
    let raca = jogador.getRaca();
    if (raca)
      jogador.descartarCarta(raca);
  }
}