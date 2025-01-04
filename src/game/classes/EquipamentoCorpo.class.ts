import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";

export class EquipamentoCorpo extends Equipamento { // OK
  constructor(
    nome: string,
    descricao: string,
    valor: number,
    bonus: number,
    restricoesRaca: Raca[],
    restricoesClasse: Classe[],
    grande: boolean,
  ) {
    super(nome, descricao, grande, valor, bonus, restricoesRaca, restricoesClasse);
  }

  override usar(jogador: Jogador): void {
    if (!this.verificaRestricoes(jogador))
      return;

    const inventario = jogador.getInventario();
    inventario.equipaCorpo(this);
    this.adicionarEfeito(jogador);
  }
}
