import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { Item } from "./Item.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";

export class Equipamento extends Item {

  constructor(
    _nome: string,
    _descricao: string,
    _imagem: string,
    _efeitos: Efeito[] = [],
    _valor: number,
    _bonus: number,
    _restricoesRaca: Raca[],
    _restricoesClasse: Classe[],
    protected _grande: boolean,
  ) {
    super(_nome, _descricao, _imagem, _efeitos, _valor, _bonus, _restricoesRaca, _restricoesClasse);
  }

  guardar(jogador: Jogador): boolean {
    if (jogador.inventario.getItensGuardados().includes(this)) {
      console.log(`O item ${this.nome} já está guardado no inventário.`);
      return false;
    }

    jogador.inventario.guardarItem(this);
    console.log(`O item ${this.nome} foi guardado no inventário.`);
    return true;
  }

  descartar(jogador: Jogador): void {
    jogador.inventario.descartarItem(this);
    console.log(`O item ${this.nome} foi descartado do inventário.`);
  }

  get grande(): boolean {
    return this._grande;
  }
}
