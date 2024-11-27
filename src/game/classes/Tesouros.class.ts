import { Card } from "./Card.class";
import { Baralho } from "./Baralho.class";

class Tesouros extends Baralho {
    constructor(
        baralho: Card[], 
        descarte: Card[]
    ) {
        super(baralho, descarte);
    }

    reiniciarDeck(): void {
        console.log("Reiniciando o deck de Tesouros...");
        //implementar lógica de pegar cartas de Tesouro e colocar no baralho
        this.baralho = [...this.descarte];
        this.descarte = [];
        console.log("Deck de Tesouros reiniciado");
    }
}