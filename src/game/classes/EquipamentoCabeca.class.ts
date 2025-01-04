import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Raca } from "./Raca.class";

export class EquipamentoCabeca extends Equipamento { // OK
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
    inventario.equipaCabeca(this);
    this.adicionarEfeito(jogador);
  }

  override desequipar(jogador: Jogador): boolean {
    const retorno = jogador.getInventario().desequipaCabeca();
    if (retorno)
      this.removerEfeito(jogador);

    return retorno;
  }
}
