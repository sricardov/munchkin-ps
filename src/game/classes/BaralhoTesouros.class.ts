import { Carta } from "./Carta.class";
import { Baralho } from "./Baralho.class";
import { CartaTesouro } from "./CartaTesouro.class";

export class BaralhoTesouros extends Baralho {
    
    
    constructor(
        protected override baralho: CartaTesouro[],
        protected override descarte: CartaTesouro[],

    ) {
        super(baralho, descarte);
    }

    iniciarDeck(): void {
        //lógica para ler info das cartas em um arquivo e criar a pilha
    }
}