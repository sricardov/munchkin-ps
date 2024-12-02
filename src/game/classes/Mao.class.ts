import { Carta } from "./Carta.class";
import { Baralho } from "./Baralho.class";

class Mao {
  private mao: Carta[] = [];

  descartar(carta: Carta, baralho: Baralho): void {
    console.log(`Carta movida para a pilha de descarte pela mão: ${carta.nome}`);
    this.mao = this.mao.filter(card => card !== carta);
    baralho.adicionarDescarte(carta);
  }

  adicionarCarta(carta: Carta): void {
    this.mao.push(carta);
    console.log(`Carta adicionada à mão: ${carta.nome}`);
  }

  pegarCartasNaMao(): Carta[] {
    return this.mao;
  }
}