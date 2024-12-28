import { Equipamento } from "./Equipamento.class";
import { EquipamentoCabeca } from "./EquipamentoCabeca.class";
import { EquipamentoCorpo } from "./EquipamentoCorpo.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { EquipamentoPes } from "./EquipamentoPes.class";
import { Item } from "./Item.class";

export class Inventario {
  cabeca: EquipamentoCabeca | null;
  corpo: EquipamentoCorpo | null;
  pes: EquipamentoPes | null;
  maoEsquerda: EquipamentoMaos | null;
  maoDireita: EquipamentoMaos | null;

  itensEquipados: Item[] = [];
  itensGuardados: Item[] = [];

  constructor(cabeca: Equipamento, corpo: Equipamento, pes: Equipamento, maoEsquerda: Equipamento, maoDireita: Equipamento) {
    this.cabeca = cabeca;
    this.corpo = corpo;
    this.pes = pes;
    this.maoEsquerda = maoEsquerda;
    this.maoDireita = maoDireita;
    this.itensEquipados = [];
    this.itensGuardados = [];
  }

  equiparItem(item: Item): boolean {
    if (!(item instanceof Equipamento)) {
      console.log(`O item não é um equipamento.`);
      return false;
    }

    if (item instanceof EquipamentoCabeca) {
      this.cabeca = item;
    } else if (item instanceof EquipamentoCorpo) {
      this.corpo = item;
    } else if (item instanceof EquipamentoPes) {
      this.pes = item;
    } else if (item instanceof EquipamentoMaos) {
      if (this.maoEsquerda === null) {
        this.maoEsquerda = item;
      } else if (this.maoDireita === null) {
        this.maoDireita = item;
      } else {
        console.log(`Ambas as mãos já estão ocupadas.`);
        return false;
      }
    } else {
      console.log(`Equipamento não pode ser equipado.`);
      return false;
    }

    this.itensEquipados.push(item);
    console.log(`Equipando ${item.nome}.`);
    return true;
  }

  desequiparItem(item: Item): void {
    if (item instanceof EquipamentoCabeca) {
      this.cabeca = null;
    } else if (item instanceof EquipamentoCorpo) {
      this.corpo = null;
    } else if (item instanceof EquipamentoPes) {
      this.pes = null;
    } else if (item instanceof EquipamentoMaos) {
      if (this.maoEsquerda === item) {
        this.maoEsquerda = null;
      } else if (this.maoDireita === item) {
        this.maoDireita = null;
      }
    }

    const index = this.itensEquipados.findIndex(
      (equipamento) => equipamento.nome === item.nome);
      
    if (index !== -1) {
      this.itensEquipados.splice(index, 1);
      console.log(`Desequipando ${item.nome} do inventário.`);
    }
  }
}
