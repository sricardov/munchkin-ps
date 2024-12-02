import { Carta } from "./Carta.class";

export class Mao {
  private cartasNaMao: Carta[] = [];

  usarCarta(carta: Carta): void {
    const index = this.cartasNaMao.indexOf(carta);

    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      carta.usar();
    } else {
      console.error("A carta não está na mão.");
    }
  }

  descartar(carta: Carta): void {
    const index = this.cartasNaMao.indexOf(carta);
    
    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      console.log(`Carta ${carta.nome} descartada.`);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  verificarcartasNaMao(): void {
    if (this.cartasNaMao.length === 0) {
      console.log("A mão está vazia.");
    } else {
      console.log("Cartas na mão:");
      this.cartasNaMao.forEach((carta, index) => {
        console.log(`${carta.nome}`);
      });
    }
  }
}