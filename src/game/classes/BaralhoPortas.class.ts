import { CartaPorta } from "./CartaPorta.class";
import { Baralho } from "./Baralho.class";

export class BaralhoPortas extends Baralho {
    
    constructor(
        protected override baralho: CartaPorta[],
        protected override descarte: CartaPorta[],
    ) {
        super(baralho, descarte);
    }

    iniciarDeck(): void {
        //lógica para ler info das cartas em um arquivo e criar a pilha
    }
}