import { Carta } from "./Carta.class";

export abstract class Baralho {
  public baralho: Carta[];
  public descarte: Carta[];
    constructor(
    ) {
      this.baralho = []
      this.descarte = []
      this.iniciarDeck();
    }

    //lógica para ler info das cartas em um arquivo e criar a pilha de baralho
    abstract iniciarDeck(): void;

    //falta um método para apenas embaralhar o baralho

    comprar(): Carta { 
      let card = this.baralho.pop();
      if (card) {
        console.log(`Carta comparada: ${card.nome}`);
        return card;
      }
      this.limparPilha()
      card = this.baralho.pop();
      if (!card) throw new Error("Baralho de compra vazio.");
      else return card;
    }

    adicionarDescarte(card: Carta): void { // OK
      console.log(`Carta movida para a pilha de descarte: ${card.nome}`);
      this.descarte.push(card);
    }
    
    verTopoDescarte(): Carta | null { // OK
      if (this.descarte.length > 0) {
        const card = this.descarte[this.descarte.length - 1];
        console.log(`Carta no topo da pilha de descarte: ${card.nome}`);
        return card;
      }
      console.log("A pilha de descarte está vazia.");
      return null;
    }

    estaVazio(): boolean { // OK
      return this.baralho.length === 0;
    }

    verTopoBaralho(): Carta | null { // OK
      if (this.baralho.length > 0) {
        const card = this.baralho[this.baralho.length - 1]
        console.log(`Primeira carta da pilha: ${card.nome}`);
        return card;
      }
      return null;
    }

    limparPilha(): boolean { //OK
      console.log("Limpando pilha de descarte e juntando ao baralho...");
      this.baralho.push(...this.descarte);
      this.baralho.sort(() => Math.random() - 0.5);
      this.descarte = [];
      return true;
    }
}