import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaArmadura extends Efeito {

  constructor(valor: number) {
    super("Perca a armadura que estiver usando", valor);
  }

  public usar(jogador: Jogador): void {
    let jogo = jogador.jogo
    let lutas = jogo.gerenciadorTurno.combate?.lutas!
    for (let luta of lutas) {
      luta.monstros[0].bonus += this.valor;
    }
  }
}