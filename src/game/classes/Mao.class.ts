import { Card } from "./Card.class";
import { Baralho } from "./Baralho.class";

class Mao {
  private mao: Card[] = [];

  descartar(carta: Card, baralho: Baralho): void {
    console.log(`Carta movida para a pilha de descarte pela mão: ${carta.name}`);
    this.mao = this.mao.filter(card => card !== carta);
    baralho.descartar(carta);
  }

  adicionarCarta(carta: Card): void {
    this.mao.push(carta);
    console.log(`Carta adicionada à mão: ${carta.name}`);
  }

  pegarCartasNaMao(): Card[] {
    return this.mao;
  }
}