import { Carta } from "./Carta.class";
import { Item } from "./Item.class";
import { Efeito } from "./Efeito.class";
import { Classe } from "./Classe.class";
import { Raca } from "./Raca.class";
import { Mao } from "./Mao.class";
import { Inventario } from "./Inventario.class";
import { Jogo } from "./Jogo.class";

export class Jogador {
  nome: string;
  nivel: number;
  classe: Classe;
  raca: Raca;
  mao: Mao;
  inventario: Inventario;
  jogo: Jogo;
  efeitosAtivos: Efeito[] = [];

  constructor(
    nome: string,
    nivel: number,
    classe: Classe,
    raca: Raca,
    mao: Mao,
    inventario: Inventario,
    efeitosAtivos: Efeito[] = [],
    jogo: Jogo
  ) {
    this.nome = nome;
    this.nivel = nivel;
    this.classe = classe;
    this.raca = raca;
    this.mao = mao;
    this.inventario = inventario;
    this.jogo = jogo
    this.efeitosAtivos = efeitosAtivos;
  }

  jogarCarta(carta: Carta) {
    this.mao.usarCarta(carta, this.jogo, this);
  }

  equiparItem(item: Item) {
    this.mao.descartar(item);
    this.inventario.equiparItem(item);
  }

  desequiparItem(item: Item) {
    this.inventario.desequiparItem(item);
  }

  morrer(): void { } // alterar o nivel do jogar

  definirRaca(raca: Raca): void {
    this.raca = raca;
  }

  definirClasse(classe: Classe): void {
    this.classe = classe;
  }

  adicionarEfeito(efeitos: Efeito[]): void {
    this.efeitosAtivos.push(...efeitos);
  }

  getRaca(): Raca {
    return this.raca;
  }

  getClasse(): Classe {
    return this.classe;
  }

  getInventario(): Inventario {
    return this.inventario;
  }
}
