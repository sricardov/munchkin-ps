import { Carta } from "./Carta.class";

export abstract class Baralho {
    constructor(
        protected baralho: Carta[], 
        protected descarte: Carta[]
    ) {}

    //lógica para ler info das cartas em um arquivo e criar a pilha de baralho
    abstract reiniciarDeck(): void;

    comprar(): Carta | null {
      const card = this.baralho.pop();
        if (card) {
          console.log(`Carta comparada: ${card.nome}`);
          return card;
        }
        console.log("Pilha de compra vazia, nenhuma carta retornada");
        return null;
    }

    adicionarDescarte(card: Carta): void {
      console.log(`Carta movida para a pilha de descarte: ${card.nome}`);
      this.descarte.push(card);
    }
    
    verTopoDescarte(): Carta | null {
      if (this.descarte.length > 0) {
        const card = this.descarte[this.descarte.length - 1];
        console.log(`Carta no topo da pilha de descarte: ${card.nome}`);
        return card;
      }
      console.log("A pilha de descarte está vazia.");
      return null;
    }

    estaVazio(): boolean {
      return this.baralho.length === 0;
    }

    pegarPrimeiraCarta(): Carta | null {
      if (this.baralho.length > 0) {
        const card = this.baralho[0]
        console.log(`Primeira carta da pilha: ${card.nome}`);
        return this.baralho[0];
      }
      return null;
    }

    limparPilha(): boolean {
      console.log("Limpando pilha de descarte e juntando ao baralho...");
      this.baralho.push(...this.descarte);
      this.baralho.sort(() => Math.random() - 0.5);
      this.descarte = [];
      return true;
    }
}