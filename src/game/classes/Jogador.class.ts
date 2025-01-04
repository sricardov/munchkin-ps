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

    jogarCarta(carta: Carta) { // descarta da mão e, se for o caso, adicionar ao inventário
        throw new Error('Method not implemented');
        //passar o jogo e o proprio jogador que jogou como argumentos pra mao
        //ex: mao.usarCarta(carta, this.jogo, this)
    }

    equiparItem(item: Item) { // chamar metodo do inventario
        throw new Error('Method not implemented');
    }

    desequiparItem(item: Item) { // chamar metodo do inventario
        throw new Error('Method not implemented');
    }
    
    morrer(): void {} // alterar o nivel do jogar
}