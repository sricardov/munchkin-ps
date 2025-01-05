import { Baralho } from "./Baralho.class";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { CartaTesouro } from "./CartaTesouro.class";
import { Item } from "./Item.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Monstro } from "./Monstro.class";

export class Mao {
  private cartasNaMao: Carta[];

  constructor() {
    this.cartasNaMao = [];
  }

  adicionarCarta(carta: Carta) {
    this.cartasNaMao.push(carta);
    console.log("Carta adicionada.");
  }

  usarCarta(carta: Carta, jogador: Jogador): void {  
    if (this.cartasNaMao.includes(carta)) {
      this.removerCarta(carta);
      carta.usar(jogador);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  removerCarta(carta: Carta): void {
    const index = this.cartasNaMao.indexOf(carta);
    
    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      console.log(`Carta ${carta.nome} removida da mao.`);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  verificarCartasNaMao(): number {
    if (this.cartasNaMao.length === 0) {
      console.log("A mão está vazia.");
    } else {
      console.log("Cartas na mão:");
      this.cartasNaMao.forEach((carta) => {
        console.log(`${carta.nome}`);
      });
    }
    return this.cartasNaMao.length;
  }

  verCartas(): Carta[] {
    return this.cartasNaMao;
  }
}