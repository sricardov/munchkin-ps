import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";

export class EquipamentoUmaMao extends EquipamentoMaos {
  constructor(
    _nome: string,
    _descricao: string,
    _imagem: string,
    _efeitos: Efeito[] = [],
    _valor: number,
    _bonus: number,
    _restricoesRaca: Raca[],
    _restricoesClasse: Classe[],
    _grande: boolean,
  ) {
    super(_nome, _descricao, _imagem, _efeitos, _valor, _bonus, _restricoesRaca, _restricoesClasse, _grande);
  }

  override usar(jogador: Jogador): void { // EQUIPAR
    if (!this.verificaRestricoes(jogador))
      return;

    const inventario = jogador.inventario;
    inventario.equipaUmaMao(this);
    this.adicionarEfeito(jogador);
  }

  override desequipar(jogador: Jogador): boolean {
    const retorno = jogador.inventario.desequipaUmaMao(this);
    if (retorno)
      this.removerEfeito(jogador);

    return retorno;
  }
}
