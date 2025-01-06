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
  private _jogador?: Jogador;
  private _cabeca: EquipamentoCabeca | null = null;
  private _corpo: EquipamentoCorpo | null = null;
  private _pes: EquipamentoPes | null = null;
  private _maoEsquerda: EquipamentoMaos | null = null;
  private _maoDireita: EquipamentoMaos | null = null;

  private _itensGuardados: Item[] = [];
  private _itensEquipados: Item[] = [];

  constructor() { }

  temCarta(carta: Carta): boolean {
    if (carta instanceof Item) {
      if (this._itensEquipados.includes(carta)) return true;
      if (this._itensGuardados.includes(carta)) return true;
    }
    return false
  }

  get itensEquipados() {
    return this._itensEquipados;
  }

  get itensGuardados() {
    return this._itensGuardados;
  }

  guardarItem(item: Item) {
    if (!this._itensGuardados.includes(item))
      this._itensGuardados.push(item);
    else
      console.log("Item já está no inventário.");

  }

  descartarItem(item: Item) {
    if (!this._jogador) {
      throw new Error("Player is not defined.");
    }

    if (this._itensEquipados.includes(item)) {
      this.desequiparItem(item);
      this._jogador.jogo!.descartarCarta(item);
    }
    if (this._itensGuardados.includes(item)) {
      this._itensGuardados = this._itensGuardados.filter(guardado => guardado !== item);
    }
  }

  equiparItem(item: Item) {
    item.usar(this._jogador!);
    this._itensGuardados = this.itensGuardados.filter(guardado => guardado !== item);
    this._itensEquipados.push(item);
    console.log(`Equipando ${item.nome}.`);
  }

  desequiparItem(item: Item) {
    item.desequipar(this._jogador!)
    this._itensGuardados.push(item);
    this._itensEquipados = this.itensEquipados.filter(equipado => equipado !== item);
    console.log(`Desequipando ${item.nome} do inventário.`);
  }

  equipaCabeca(item: EquipamentoCabeca): boolean {
    if (!this._cabeca === null)
      return false;

    this._cabeca = item;
    return true;
  }

  desequipaCabeca(): boolean {
    if (this._cabeca === null)
      return false

    this._cabeca === null
    return true;
  }

  equipaCorpo(item: EquipamentoCorpo): boolean {
    if (!this._corpo === null)
      return false;

    this._corpo = item;
    return true;
  }

  desequipaCorpo(): boolean {
    if (this._corpo === null)
      return false

    this._corpo === null
    return true;
  }

  equipaPes(item: EquipamentoPes): boolean {
    if (!this._pes === null)
      return false;

    this._pes = item;
    return true;
  }

  desequipaPes(): boolean {
    if (this._pes === null)
      return false

    this._pes === null
    return true;
  }

  equipaUmaMao(item: EquipamentoUmaMao): boolean {
    if (this._maoEsquerda === null)
      this._maoEsquerda = item;

    else if (this._maoDireita === null)
      this._maoDireita = item;

    else
      return false;

    return true;
  }

  desequipaUmaMao(item: EquipamentoUmaMao): boolean {
    if (this._maoDireita === item)
      this._maoDireita = null;

    else if (this._maoEsquerda === item)
      this._maoEsquerda = null;

    else
      return false;

    return true;
  }

  desequipaMaoDireita(): boolean {
    if (this._maoDireita === null) {
      return false;
    }

    this._maoDireita = null;
    return true;
  }

  desequipaMaoEsquerda(): boolean {
    if (this._maoEsquerda === null) {
      return false;
    }

    this._maoEsquerda = null;
    return true;
  }

  equipaDuasMaos(item: EquipamentoDuasMaos): boolean {
    if (this._maoEsquerda === null && this._maoDireita === null) {
      this._maoDireita = this._maoEsquerda = item;
      return true;
    }

    return false;
  }

  desequipaDuasMaos(): boolean {
    this._maoDireita = this._maoEsquerda = null;
    return true;
  }
}
