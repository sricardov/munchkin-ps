import { Efeito } from "../Efeito.class";
import { Jogador } from "../Jogador.class";

export class EfeitoPercaArmadura extends Efeito {

  constructor(
    _nome: string = "Perca a armadura que estiver usando",
    _valor: number,
  ) {
    super(_nome, _valor);
  }

  usar(jogador: Jogador): void {
    let equipamentos = jogador.inventario.itensEquipados;
    for (let equip of equipamentos) {
      jogador.desequiparItem(equip);
      jogador.descartarCarta(equip);
    }
  }
}