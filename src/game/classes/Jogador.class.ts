import { Carta } from "./Carta.class";
import { Item } from "./Item.class";
import { Efeito } from "./Efeito.class";
import { Classe } from "./Classe.class";
import { Raca } from "./Raca.class";
import { Mao } from "./Mao.class";
import { Inventario } from "./Inventario.class";
import { Jogo } from "./Jogo.class";
import { CartaTesouro } from "./CartaTesouro.class";

export class Jogador {

  nome: string;
  nivel: number;
  bonus: number;
  classe: Classe | null;
  fuga: number;
  raca: Raca | null;
  mao: Mao;
  inventario: Inventario;
  jogo: Jogo;
  efeitosAtivos: Efeito[] = [];

  constructor(
    nome: string,
    nivel: 1,
    bonus: 0,
    classe: Classe | null,
    fuga: 0,
    raca: Raca | null,
    mao: Mao,
    inventario: Inventario,
    efeitosAtivos: Efeito[] = [],
    jogo: Jogo
  ) {
    this.nome = nome;
    this.nivel = nivel;
    this.bonus = bonus;
    this.classe = classe;
    this.raca = raca;
    this.fuga = fuga;
    this.mao = mao;
    this.inventario = inventario;
    this.jogo = jogo
    this.efeitosAtivos = efeitosAtivos;
  }

  ganharNivel(nivel: number): void {
    this.nivel += nivel;
  }

  receberTesouro(tesouro: CartaTesouro): void {
    this.mao.adicionarCarta(tesouro);
  }

  colocarNaMao(carta: Carta) {
    if (this.mao.verificarCartasNaMao() < 5) {
      this.mao.adicionarCarta(carta);
    } else {
      console.log("A mão está cheia");
    }
  }

  tirarDaMao(carta: Carta) {
    if (carta instanceof Item) {
      this.mao.removerCarta(carta);
      this.inventario.guardarItem(carta);
    }
    else {
      console.log(`Carta ${carta.nome} não é um item, logo não pode ser guardado do inventario e permanece na mão.`);
    }
    
  }

  descartarCarta(carta: Carta) {
    // se tiver na mao ou no inventario, remove e descarta pra pilha
    if (this.mao.verCartas().includes(carta)) {
      this.mao.removerCarta(carta);
    }
    if (carta instanceof Item && this.inventario.temCarta(carta)) {
      this.desequiparItem(carta);
      this.inventario.descartarItem(carta);
    }
    this.jogo.descartar(carta);
  }

  equiparItem(item: Item) {
    let equipou = this.inventario.equiparItem(item);
    if (equipou) {
      this.tirarDaMao(item);
      this.bonus += item.getBonus();
    }
  }

  desequiparItem(item: Item) {
    let desequipou = this.inventario.desequiparItem(item);
    if (desequipou) {
      this.bonus -= item.getBonus();
    }
  }

  morrer(): void {
    this.nivel = Math.floor(this.nivel / 2);
  }

  definirRaca(raca: Raca | null): void {
    if (this.raca) {
      this.descartarCarta(this.raca);
    }
    this.raca = raca;
  }

  definirClasse(classe: Classe | null): void {
    if (this.classe) {
      this.descartarCarta(this.classe);
    }
    this.classe = classe;
  }

  adicionarEfeito(efeitos: Efeito[]): void {
    this.efeitosAtivos.push(...efeitos);
  }

  removerEfeito(efeitos: Efeito[]): void {
    this.efeitosAtivos = this.efeitosAtivos.filter(efeito_i =>
      !efeitos.some(efeito_j => efeito_i === efeito_j)
    );
  }

  getRaca(): Raca | null{
    return this.raca;
  }

  getClasse(): Classe | null {
    return this.classe;
  }

  getInventario(): Inventario {
    return this.inventario;
  }
}
