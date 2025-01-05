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

  constructor(
    private _nome: string,
    private _nivel: number = 1,
    private _bonus: number = 0,
    private _classe: Classe | null,
    private _fuga: number = 0,
    private _raca: Raca | null,
    private _mao: Mao,
    private _inventario: Inventario,
    private _efeitosAtivos: Efeito[] = [],
    private _jogo: Jogo
  ) { }

  get nome(): string {
    return this._nome;
  }

  get nivel(): number {
    return this._nivel;
  }

  get bonus(): number {
    return this._bonus;
  }

  get classe(): Classe | null {
    return this._classe;
  }

  get fuga(): number {
    return this._fuga;
  }

  get raca(): Raca | null {
    return this._raca;
  }

  get mao(): Mao {
    return this._mao;
  }

  get inventario(): Inventario {
    return this._inventario;
  }

  get efeitosAtivos(): Efeito[] {
    return this._efeitosAtivos;
  }

  get jogo(): Jogo {
    return this._jogo;
  }

  ganharNivel(nivel: number): void {
    this._nivel += nivel;
  }

  receberTesouro(tesouro: CartaTesouro | null): void {
    if (tesouro) this._mao.adicionarCarta(tesouro);
  }

  colocarNaMao(carta: Carta) {
    if (this._mao.verificarCartasNaMao() < 5) {
      this._mao.adicionarCarta(carta);
    } else {
      console.log("A mão está cheia");
    }
  }

  tirarDaMao(carta: Carta) {
    if (carta instanceof Item) {
      this._mao.removerCarta(carta);
      this._inventario.guardarItem(carta);
    }
    else {
      console.log(`Carta ${carta.nome} não é um item, logo não pode ser guardado do inventario e permanece na mão.`);
    }

  }

  descartarCarta(carta: Carta) {
    // se tiver na mao ou no inventario, remove e descarta pra pilha
    if (this._mao.verCartas().includes(carta)) {
      this._mao.removerCarta(carta);
    }
    if (carta instanceof Item && this._inventario.temCarta(carta)) {
      this.desequiparItem(carta);
      this._inventario.descartarItem(carta);
    }
    this._jogo.descartar(carta);
  }

  equiparItem(item: Item) {
    let equipou = this._inventario.equiparItem(item);
    if (equipou) {
      this.tirarDaMao(item);
      this._bonus += item.bonus;
    }
  }

  desequiparItem(item: Item) {
    let desequipou = this._inventario.desequiparItem(item);
    if (desequipou) {
      this._bonus -= item.bonus;
    }
  }

  morrer(): void {
    this._nivel = Math.floor(this._nivel / 2);
  }

  definirRaca(raca: Raca | null): void {
    if (this._raca) {
      this.removerEfeito(this._raca.efeitos);
      this.descartarCarta(this._raca);
    }
    this._raca = raca;
    if (raca) this.adicionarEfeito(raca.efeitos);
  }

  definirClasse(classe: Classe | null): void {
    if (this._classe) {
      this.removerEfeito(this._classe.efeitos);
      this.descartarCarta(this._classe);
    }
    this._classe = classe;
    if (classe) this.adicionarEfeito(classe.efeitos);
  }

  adicionarEfeito(efeitos: Efeito[]): void {
    this._efeitosAtivos.push(...efeitos);
  }

  removerEfeito(efeitos: Efeito[]): void {
    this._efeitosAtivos = this._efeitosAtivos.filter(efeito_i =>
      !efeitos.some(efeito_j => efeito_i === efeito_j)
    );
  }

}
