import { Card } from "./Card.class";

export abstract class Baralho {
    constructor(
        protected baralho: Card[], 
        protected descarte: Card[]
    ) {}

    abstract reiniciarDeck(): void;

    comprar(): Card | null {
      const card = this.baralho.pop();
        if (card) {
          console.log(`Carta comparada: ${card.name}`);
          return card;
        }
        console.log("Pilha de compra vazia, nenhuma carta retornada");
        return null;
    }

    descartar(card: Card): void {
      console.log(`Carta movida para a pilha de descarte: ${card.name}`);
      this.descarte.push(card);
    }

    estaVazio(): boolean {
      return this.baralho.length === 0;
    }

    pegarPrimeiraCarta(): Card | null {
      if (this.baralho.length > 0) {
        const card = this.baralho[0]
        console.log(`Primeira carta da pilha: ${card.name}`);
        return this.baralho[0];
      }
      return null;
    }

    limparPilha(): boolean {
      console.log("Limpando pilha de descarte e juntando ao baralho...");
      this.baralho.push(...this.descarte);
      this.descarte = [];
      return true;
    }
}