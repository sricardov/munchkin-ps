import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Mao {
  private cartasNaMao: Carta[] = [];

  usarCarta(carta: Carta, jogo: Jogo, jogador: Jogador): void { // falta adicionar ao local apropriado (descarte ou inventario)
    const index = this.cartasNaMao.indexOf(carta);

    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      carta.usar(jogo, jogador);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  descartar(carta: Carta): void { // falta adicionar ao descarte
    const index = this.cartasNaMao.indexOf(carta);
    
    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      console.log(`Carta ${carta.nome} descartada.`);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  verificarcartasNaMao(): number { // precisa retornar o número de cartas na mão
    if (this.cartasNaMao.length === 0) {
      console.log("A mão está vazia.");
    } else {
      console.log("Cartas na mão:");
      this.cartasNaMao.forEach((carta, index) => {
        console.log(`${carta.nome}`);
      });
    }
    return 1 // 'carta'
  }
}