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

  private _mao: Mao;
  private _inventario: Inventario;

  constructor(
    private _nome: string,
    private _nivel: number = 1,
    private _bonus: number = 0,
    private _classe: Classe | null = null,
    private _fuga: number = 0,
    private _raca: Raca | null = null,
    private _efeitosAtivos: Efeito[] = [],
    private _jogo?: Jogo
  ) {
    this._mao = new Mao();
    this._inventario = new Inventario();
  }

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

  set classe(classe: Classe | null) {
    if (this._classe) {
      this.removerEfeito(this._classe.efeitos);
      this.descartarCarta(this._classe);
    }
    this._classe = classe;
    if (classe) {
      this.adicionarEfeito(classe.efeitos);
      this.descartarCarta(classe);
    }
  }

  get fuga(): number {
    return this._fuga;
  }

  get raca(): Raca | null {
    return this._raca;
  }
  
  set raca(raca: Raca | null) {
    if (this._raca) {
      this.removerEfeito(this._raca.efeitos);
      this.descartarCarta(this._raca);
    }
    this._raca = raca;
    if (raca) {
      this.adicionarEfeito(raca.efeitos);
      this.descartarCarta(raca);
    }
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

  get jogo(): Jogo | undefined {
    return this._jogo;
  }

  ganharNivel(nivel: number): void {
    this._nivel += nivel;
  }

  perderNivel(nivel: number): void {
    this._nivel -= nivel;
    if (this._nivel < 1) this._nivel = 1;
  }

  receberTesouro(tesouro: CartaTesouro | null): void {
    if (tesouro) this._mao.adicionarCarta(tesouro);
  }

  colocarNaMao(carta: Carta) {
    this._mao.adicionarCarta(carta);
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

  comprarCartaPorta(): Carta {
    return this._jogo!.comprarCartaPorta();
  }

  comprarCartaTesouro(): Carta {
    return this._jogo!.comprarCartaTesouro();
  }

  descartarCarta(carta: Carta) {
    if (!this.jogo) throw new Error("Game is not defined.");
    // se tiver na mao ou no inventario, remove e descarta pra pilha
    if (this._mao.verCartas().includes(carta)) {
      this._mao.removerCarta(carta);
    }
    if (carta instanceof Item && this._inventario.temCarta(carta)) {
      this.desequiparItem(carta);
      this._inventario.descartarItem(carta);
    }
    this.jogo.descartarCarta(carta);
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

  adicionarEfeito(efeitos: Efeito[]): void {
    this._efeitosAtivos.push(...efeitos);
  }

  removerEfeito(efeitos: Efeito[]): void {
    this._efeitosAtivos = this._efeitosAtivos.filter(efeito_i =>
      !efeitos.some(efeito_j => efeito_i === efeito_j)
    );
  }

}
