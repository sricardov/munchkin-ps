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
  jogador: Jogador
  cabeca: EquipamentoCabeca | null;
  corpo: EquipamentoCorpo | null;
  pes: EquipamentoPes | null;
  maoEsquerda: EquipamentoMaos | null;
  maoDireita: EquipamentoMaos | null;

  itensGuardados: Item[] = [];

  constructor(jogador: Jogador, cabeca: EquipamentoCabeca, corpo: EquipamentoCorpo, pes: EquipamentoPes, maoEsquerda: EquipamentoMaos, maoDireita: EquipamentoMaos) {
    this.cabeca = cabeca;
    this.jogador = jogador;
    this.corpo = corpo;
    this.pes = pes;
    this.maoEsquerda = maoEsquerda;
    this.maoDireita = maoDireita;
    this.itensGuardados = [];
  }

  equiparItem(item: Item): boolean {  
    if (!(item instanceof Equipamento)) {
      console.log(`Item ${item.nome} não é um equipamento.`);
      return false;
    }

    item.usar(this.jogador);
    console.log(`Equipando ${item.nome}.`);
    return true;
  }

  desequiparItem(item: Item): void {
    const desequipa = item.desequipar(this.jogador)
    if (!desequipa) {
      console.error("Item não está equipado");
      return;
    }

    this.itensGuardados.push(item);
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
