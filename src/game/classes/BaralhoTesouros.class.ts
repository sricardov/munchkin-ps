import { Carta } from "./Carta.class";
import { Baralho } from "./Baralho.class";
import { CartaTesouro } from "./CartaTesouro.class";
import tesouros from "../../database/tesouros.json"

export class BaralhoTesouros extends Baralho {
    
    constructor() {
        super();
    }

    iniciarDeck(): void {
        //lógica para ler info das cartas em um arquivo e criar a pilha
        tesouros.forEach(tesouro => {
            const carta = new CartaTesouro(tesouro.nome, tesouro.descricao, tesouro.imagem);
            this.baralho.push(carta);
        });
    }
}