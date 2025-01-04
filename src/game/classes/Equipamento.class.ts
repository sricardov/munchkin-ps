import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { Item } from "./Item.class";
import { Raca } from "./Raca.class";

export class Equipamento extends Item {
  private grande: boolean;

  constructor(
    nome: string,
    descricao: string,
    grande: boolean,
    valor: number,
    bonus: number,
    restricoesRaca: Raca[],
    restricoesClasse: Classe[],
    efeito: Efeito[] = []
  ) {
    super(nome, descricao, valor, bonus, restricoesRaca, restricoesClasse, efeito);
    this.grande = grande;
  }

  guardar(): boolean { // botar na lista de itens guardados do inventario
    throw new Error("Method not implemented.");
  }

  descartar(): void { // remover da lista de itens do inventario
    throw new Error("Method not implemented.");
  }

  getGrande(): boolean {
    return this.grande;
  }
}
