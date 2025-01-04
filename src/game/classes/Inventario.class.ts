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

  constructor(cabeca: EquipamentoCabeca, corpo: EquipamentoCorpo, 
              pes: EquipamentoPes, maoEsquerda: EquipamentoMaos, maoDireita: EquipamentoMaos  ) {
    this.cabeca = cabeca;
    this.corpo = corpo;
    this.pes = pes;
    this.maoEsquerda = maoEsquerda;
    this.maoDireita = maoDireita;
    this.itensEquipados = [];
    this.itensGuardados = [];
  }

  equiparItem(nomeItem: string): boolean {
    const index = this.itensGuardados.findIndex((item) => item.nome === nomeItem);
  
    if (index === -1) {
      console.log(`Item ${nomeItem} não está nos itens guardados.`);
      return false;
    }
  
    const item = this.itensGuardados.splice(index, 1)[0];
  
    if (!(item instanceof Equipamento)) {
      console.log(`O item ${item.nome} não é um equipamento.`);
      this.itensGuardados.push(item);
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
        this.itensGuardados.push(item);
        return false;
      }
    } else {
      console.log(`Equipamento não pode ser equipado.`);
      this.itensGuardados.push(item);
      return false;
    }
  
    this.itensEquipados.push(item);
    console.log(`Equipando ${item.nome}.`);
    return true;
  }

  desequiparItem(nomeItem: string): void {
    const index = this.itensEquipados.findIndex((item) => item.nome === nomeItem);
  
    if (index === -1) {
      console.log(`Item ${nomeItem} não está equipado.`);
      return;
    }
  
    const item = this.itensEquipados.splice(index, 1)[0];
  
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
  
    this.itensGuardados.push(item);
    console.log(`Desequipando ${item.nome} e guardando no inventário.`);
  }
}