import { Classe } from "./Classe.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";

export class EquipamentoUmaMao extends EquipamentoMaos {
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

  override usar(jogador: Jogador): void { // EQUIPAR
    if (!this.verificaRestricoes(jogador))
      return;

    const inventario = jogador.getInventario();
    inventario.equipaUmaMao(this);
    this.adicionarEfeito(jogador);
  }

  override desequipar(jogador: Jogador): boolean {
    const retorno = jogador.getInventario().desequipaUmaMao(this);
    if (retorno)
      this.removerEfeito(jogador);

    return retorno;
  }
}
