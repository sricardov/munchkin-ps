import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { Equipamento } from "./Equipamento.class";
import { Raca } from "./Raca.class";

export class EquipamentoMaos extends Equipamento {
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
}
