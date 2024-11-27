import { Carta } from "./Carta.class";
import { Item } from "./Item.class";
import { Efeito } from "./Efeito.class";

export class Jogador {

    nome: string;
    nivel: number;
    efeitosAtivos: Efeito[] = [];

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
    }

    jogarCarta(carta: Carta) {
        throw new Error('Method not implemented');
    }

    equiparItem(item: Item) {
        throw new Error('Method not implemented');
    }

    desequiparItem(item: Item) {
        throw new Error('Method not implemented');
    }
    
    morrer(): void {}
}