import { Card } from "./Card.class";
import { Baralho } from "./Baralho.class";

class Portas extends Baralho {
    constructor(
        baralho: Card[], 
        descarte: Card[]
    ) {
        super(baralho, descarte);
    }

    reiniciarDeck(): void {
        console.log("Reiniciando o deck de Portas...");
        //implementar lógica de pegar cartas de Porta e colocar no baralho
        this.baralho = [...this.descarte];
        this.descarte = [];
        console.log("Deck de Portas reiniciado");
    }
}