import { Carta } from "./Carta.class";

export abstract class Baralho {

  protected _baralho: Carta[] = [];
  protected _descarte: Carta[] = [];

  constructor() {
    this.iniciarDeck();
  }

  //lógica para ler info das cartas em um arquivo e criar a pilha de baralho
  abstract iniciarDeck(): void;

  embaralhar(baralho: Carta[]): void { // OK
    baralho.sort(() => Math.random() - 0.5);
  }

  comprar(): Carta {
    if (this.baralho.length === 0) {
      this.limparPilha();
      console.log("Baralho de compra vazio.");
    }
    let carta = this.baralho.pop()!;
    console.log(`Carta comparada: ${carta.nome}`);
    return carta;
  }

  /**
   * Move a carta passada como parâmetro para a pilha de descarte
   * @param carta Carta a ser descartada
   */
  descartar(carta: Carta): void { // OK
    console.log(`Carta movida para a pilha de descarte: ${carta.nome}`);
    this._descarte.push(carta);
  }

  // descarteTemCarta(carta: Carta): boolean {
  //   return this.descarte.includes(carta);
  // }

  // baralhoTemCarta(carta: Carta): boolean {
  //   return this.baralho.includes(carta);
  // }

  verTopoDescarte(): Carta | null { // OK
    if (this._descarte.length > 0) {
      const card = this._descarte[this._descarte.length - 1];
      console.log(`Carta no topo da pilha de descarte: ${card.nome}`);
      return card;
    }
    console.log("A pilha de descarte está vazia.");
    return null;
  }
  
  verTopoBaralho(): Carta | null { // OK
    if (this.baralho.length > 0) {
      const card = this.baralho[this.baralho.length - 1]
      console.log(`Primeira carta da pilha: ${card.nome}`);
      return card;
    }
    return null;
  }
  
  estaVazio(): boolean { // OK
    return this.baralho.length === 0;
  }

  limparPilha(): boolean { //OK
    console.log("Limpando pilha de descarte e juntando ao baralho...");
    this.baralho.push(...this._descarte);
    this.embaralhar(this.baralho);
    this._descarte = [];
    return true;
  }

  get baralho() {
    return this._baralho;
  }

  get descarte() {
    return this._descarte;
  }
}