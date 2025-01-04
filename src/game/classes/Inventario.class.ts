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

  itensEquipados: Item[] = [];
  itensGuardados: Item[] = [];

  constructor(jogador: Jogador, cabeca: Equipamento, corpo: Equipamento, pes: Equipamento, maoEsquerda: Equipamento, maoDireita: Equipamento) {
    this.cabeca = cabeca;
    this.jogador = jogador;
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

    item.usar(this.jogador);
    this.itensEquipados.push(item);
    console.log(`Equipando ${item.nome}.`);
    return true;
  }

  desequiparItem(item: Item): void {
    if (!this.verificarSeEquipado(item)) {
      console.error("Item não está equipado");
      return;
    }

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
      this.itensGuardados.push(item);
      console.log(`Desequipando ${item.nome} do inventário.`);
    }
  }

  verificarSeEquipado(item: Item): boolean {
    return this.itensEquipados.includes(item);
  }

  equipaCabeca(item: EquipamentoCabeca) {
    this.cabeca = item;
  }

  equipaCorpo(item: EquipamentoCorpo) {
    this.corpo = item;
  }

  equipaPes(item: EquipamentoPes) {
    this.pes = item;
  }

  equipaUmaMao(item: EquipamentoUmaMao) {
    if (this.maoEsquerda === null) {
      this.maoEsquerda = item;
    } else if (this.maoDireita === null) {
      this.maoDireita = item;
    }
  }

  equipaDuasMaos(item: EquipamentoDuasMaos) {
    // TO DO
  }
}
