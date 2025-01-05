import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { Equipamento } from "./Equipamento.class";
import { Raca } from "./Raca.class";

export class EquipamentoPes extends Equipamento {
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

  // override usar(jogador: Jogador): void {
  //   if (!this.verificaRestricoes(jogador))
  //     return;

  //   const inventario = jogador.getInventario();
  //   inventario.equipaPes(this);
  //   this.adicionarEfeito(jogador);
  // }

  // override desequipar(jogador: Jogador): boolean {
  //   const retorno = jogador.getInventario().desequipaPes();
  //   if (retorno)
  //     this.removerEfeito(jogador);

  //   return retorno;
  // }
}
