import { Classe } from "./Classe.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Raca } from "./Raca.class";

export class EquipamentoDuasMaos extends EquipamentoMaos {
  constructor(
    nome: string,
    descricao: string,
    grande: boolean,
    valor: number,
    bonus: number,
    restricoesRaca: Raca[],
    restricoesClasse: Classe[],
  ) {
    super(nome, descricao, grande, valor, bonus, restricoesRaca, restricoesClasse);
  }

  override usar(jogador: Jogador): void {
    if (!this.verificaRestricoes(jogador))
      return;

    const inventario = jogador.getInventario();
    inventario.equipaDuasMaos(this);
    this.adicionarEfeito(jogador);
  }

  override desequipar(jogador: Jogador): boolean {
    const retorno = jogador.getInventario().desequipaDuasMaos();
    if (retorno)
      this.removerEfeito(jogador);

    return retorno;
  }

}
