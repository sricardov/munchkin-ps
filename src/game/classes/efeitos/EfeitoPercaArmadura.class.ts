import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaArmadura extends Efeito {

  constructor() {
    super("Perca a armadura que estiver usando", 0);
  }

  public usar(jogador: Jogador): void {
    let equipamentos = jogador.inventario.getItensEquipados();
    for (let equip of equipamentos) {
      jogador.desequiparItem(equip);
      jogador.descartarCarta(equip);
    }
  }
}