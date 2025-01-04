import { Baralho } from "./Baralho.class";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { CartaTesouro } from "./CartaTesouro.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Mao {
  private cartasNaMao: Carta[];
  private baralho: Baralho;

  constructor(cartasNaMao: Carta, baralho: Baralho) {
    this.cartasNaMao = [];
    this.baralho = baralho
  }

  adicionarCarta(carta: Carta) {
    this.cartasNaMao.push(carta);
    console.log("Carta adicionada.");
  }

  usarCarta(carta: Carta, jogo: Jogo, jogador: Jogador): void {
    const index = this.cartasNaMao.indexOf(carta);
  
    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      carta.usar(jogo, jogador);
  
      if (carta instanceof CartaPorta) {
        this.baralho.adicionarDescarte(carta);
        console.log(`Carta Porta ${carta.nome} usada e descartada.`);
      } else if (carta instanceof CartaTesouro) {
        jogador.inventario.equiparItem(carta.nome);
        console.log(`Carta Tesouro ${carta.nome} usada e adicionada ao inventário.`);
      } else {
        console.error("Tipo de carta não suportado.");
      }
    } else {
      console.error("A carta não está na mão.");
    }
  }

  descartar(carta: Carta): void {
    const index = this.cartasNaMao.indexOf(carta);
    
    if (index !== -1) {
      this.cartasNaMao.splice(index, 1);
      this.baralho.adicionarDescarte(carta);
      console.log(`Carta ${carta.nome} descartada e adicionada ao baralho de descarte.`);
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