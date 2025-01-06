import { Carta } from "./Carta.class";
import { Consumivel } from "./Consumivel.class";
import { Equipamento } from "./Equipamento.class";
import { EquipamentoCabeca } from "./EquipamentoCabeca.class";
import { EquipamentoCorpo } from "./EquipamentoCorpo.class";
import { EquipamentoDuasMaos } from "./EquipamentoDuasMaos.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { EquipamentoPes } from "./EquipamentoPes.class";
import { EquipamentoUmaMao } from "./EquipamentoUmaMao.class";
import { Item } from "./Item.class";
import { Jogador } from "./Jogador.class";

export class Inventario {
  jogador?: Jogador;
  cabeca: EquipamentoCabeca | null = null;
  corpo: EquipamentoCorpo | null = null;
  pes: EquipamentoPes | null = null;
  maoEsquerda: EquipamentoMaos | null = null;
  maoDireita: EquipamentoMaos | null = null;

  private itensGuardados: Item[] = [];
  private itensEquipados: Item[] = [];

  constructor() { }

  temCarta(carta: Carta): boolean {
    if (carta instanceof Item) {
      if (this.itensEquipados.includes(carta)) return true;
      if (this.itensGuardados.includes(carta)) return true;
    }
    return false
  }

  getItensEquipados() {
    return this.itensEquipados;
  }

  getItensGuardados() {
    return this.itensGuardados;
  }

  guardarItem(item: Item) {
    if (!this.itensGuardados.includes(item))
      this.itensGuardados.push(item);
    else
      console.log("Item já está no inventário.");

  }

  descartarItem(item: Item) {
    if (!this.jogador) {
      throw new Error("Player is not defined.");
    }

    if (this.itensEquipados.includes(item)) {
      this.desequiparItem(item);
    }
    if (this.itensGuardados.includes(item)) {
      this.itensGuardados = this.itensGuardados.filter(guardado => guardado !== item);
    }
  }

  equiparItem(item: Item) {
    item.usar(this.jogador!);
    this.itensGuardados = this.itensGuardados.filter(guardado => guardado !== item);
    this.itensEquipados.push(item);
    console.log(`Equipando ${item.nome}.`);
  }

  desequiparItem(item: Item) {
    item.desequipar(this.jogador!)
    this.itensGuardados.push(item);
    this.itensEquipados = this.itensEquipados.filter(equipado => equipado !== item);
    console.log(`Desequipando ${item.nome} do inventário.`);
  }

  equipaCabeca(item: EquipamentoCabeca): boolean {
    if (!this.cabeca === null)
      return false;

    this.cabeca = item;
    return true;
  }

  desequipaCabeca(): boolean {
    if (this.cabeca === null)
      return false

    this.cabeca === null
    return true;
  }

  equipaCorpo(item: EquipamentoCorpo): boolean {
    if (!this.corpo === null)
      return false;

    this.corpo = item;
    return true;
  }

  desequipaCorpo(): boolean {
    if (this.corpo === null)
      return false

    this.corpo === null
    return true;
  }

  equipaPes(item: EquipamentoPes): boolean {
    if (!this.pes === null)
      return false;

    this.pes = item;
    return true;
  }

  desequipaPes(): boolean {
    if (this.pes === null)
      return false

    this.pes === null
    return true;
  }

  equipaUmaMao(item: EquipamentoUmaMao): boolean {
    if (this.maoEsquerda === null)
      this.maoEsquerda = item;

    else if (this.maoDireita === null)
      this.maoDireita = item;

    else
      return false;

    return true;
  }

  desequipaUmaMao(item: EquipamentoUmaMao): boolean {
    if (this.maoDireita === item)
      this.maoDireita = null;

    else if (this.maoEsquerda === item)
      this.maoEsquerda = null;

    else
      return false;

    return true;
  }

  desequipaMaoDireita(): boolean {
    if (this.maoDireita === null) {
      return false;
    }

    this.maoDireita = null;
    return true;
  }

  desequipaMaoEsquerda(): boolean {
    if (this.maoEsquerda === null) {
      return false;
    }

    this.maoEsquerda = null;
    return true;
  }

  equipaDuasMaos(item: EquipamentoDuasMaos): boolean {
    if (this.maoEsquerda === null && this.maoDireita === null) {
      this.maoDireita = this.maoEsquerda = item;
      return true;
    }

    return false;
  }

  desequipaDuasMaos(): boolean {
    this.maoDireita = this.maoEsquerda = null;
    return true;
  }
}
