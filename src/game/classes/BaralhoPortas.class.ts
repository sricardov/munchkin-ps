import { CartaPorta } from "./CartaPorta.class";
import { Baralho } from "./Baralho.class";
import portas from "../../database/portas.json"


export class BaralhoPortas extends Baralho {
    
    constructor() {
        super();
    }

    iniciarDeck(): void {
        //lógica para ler info das cartas em um arquivo e criar a pilha
        portas.forEach(porta => {
            const carta = new CartaPorta(porta.nome, porta.descricao, porta.imagem);
            this.baralho.push(carta);
        });
    }
}