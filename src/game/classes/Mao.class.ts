import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { CartaTesouro } from "./CartaTesouro.class";
import { Jogador } from "./Jogador.class";

export class Mao {

  private _jogador?: Jogador;

  constructor(
    private _cartas: Carta[] = [],
  ) {
    this._cartas = [];
  }

  adicionarCarta(carta: Carta) {
    this._cartas.push(carta);
    console.log("Carta adicionada.");
  }

  usarCarta(carta: Carta, jogador: Jogador): void {
    if (this._cartas.includes(carta)) {
      this.removerCarta(carta);
      carta.usar(jogador);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  removerCarta(carta: Carta): void {
    const index = this._cartas.indexOf(carta);

    if (index !== -1) {
      this._cartas.splice(index, 1);
      console.log(`Carta ${carta.nome} removida da mao.`);
    } else {
      console.error("A carta não está na mão.");
    }
  }

  descartarCarta(carta: CartaPorta | CartaTesouro): void {
    if (!this._jogador) throw new Error("Jogador não definido.");
    this.removerCarta(carta);
    this._jogador.jogo!.descartarCarta(carta);
    console.log(`Carta ${carta.nome} descartada.`);
  }


  verificarCartasNaMao(): number {
    if (this._cartas.length === 0) {
      console.log("A mão está vazia.");
    } else {
      console.log("Cartas na mão:");
      this._cartas.forEach((carta) => {
        console.log(`${carta.nome}`);
      });
    }
    return this._cartas.length;
  }

  verCartas(): Carta[] {
    return this._cartas;
  }
}