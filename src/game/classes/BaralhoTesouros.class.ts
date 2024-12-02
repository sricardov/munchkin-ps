import { Carta } from "./Carta.class";
import { Baralho } from "./Baralho.class";

export class BaralhoTesouros extends Baralho {
    constructor(
        baralho: Carta[], 
        descarte: Carta[]
    ) {
        super(baralho, descarte);
    }

    reiniciarDeck(): void {
        //lógica para ler info das cartas em um arquivo e criar a pilha
    }
}